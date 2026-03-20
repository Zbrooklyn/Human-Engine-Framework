#!/usr/bin/env node
// Human Engine — Gate Enforcement Hook (PreToolUse)
//
// Fires before Bash tool use. If the command is a `git commit`,
// checks whether /he:gate was run this session. If not, injects a warning.
//
// Soft enforcement: warns but doesn't block.
//
// Project opt-in: Only fires in projects with a `.human-engine` marker file
// in the working directory. Projects without the marker are not affected.
//
// State file: $TMPDIR/he-gate-{session_id}.json
//   Written by /he:gate when all 5 passes clear.
//   Contains: { timestamp, verdict, session_id }
//
// Staleness: Gate evidence expires after 30 minutes.

const fs = require('fs');
const os = require('os');
const path = require('path');

const STALE_MINUTES = 30;

let input = '';
const stdinTimeout = setTimeout(() => process.exit(0), 10000);
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  clearTimeout(stdinTimeout);
  try {
    const data = JSON.parse(input);

    // Only fire on Bash tool
    if (data.tool_name !== 'Bash') {
      process.exit(0);
    }

    // Only fire on git commit commands
    const command = data.tool_input?.command || '';
    if (!command.match(/\bgit\s+commit\b/)) {
      process.exit(0);
    }

    // Skip amends (likely fix-ups, not new work)
    if (command.match(/--amend/)) {
      process.exit(0);
    }

    // Project opt-in: only fire if .human-engine marker exists in cwd
    const cwd = data.cwd || process.cwd();
    if (!fs.existsSync(path.join(cwd, '.human-engine'))) {
      process.exit(0);
    }

    const sessionId = data.session_id;
    if (!sessionId) {
      process.exit(0);
    }

    // Check for gate state file
    const tmpDir = os.tmpdir();
    const gatePath = path.join(tmpDir, `he-gate-${sessionId}.json`);

    let gateExists = false;
    let gateStale = false;

    if (fs.existsSync(gatePath)) {
      try {
        const gateData = JSON.parse(fs.readFileSync(gatePath, 'utf8'));
        const now = Math.floor(Date.now() / 1000);
        const age = now - (gateData.timestamp || 0);

        if (age > STALE_MINUTES * 60) {
          gateStale = true;
        } else if (gateData.verdict === 'PASS' || gateData.verdict === 'WARN') {
          gateExists = true;
        }
      } catch (e) {
        // Corrupted file, treat as missing
      }
    }

    if (gateExists) {
      // Gate was run and passed recently — allow commit
      process.exit(0);
    }

    // No valid gate evidence — inject warning
    let message;
    if (gateStale) {
      message = 'HUMAN ENGINE: Gate evidence expired (>30 min). Run /he:gate before committing.';
    } else {
      message = 'HUMAN ENGINE: No /he:gate evidence for this session. ' +
        'Run /he:gate before committing code changes. ' +
        'Trivial commits (typo, config, docs) can proceed.';
    }

    const output = {
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        additionalContext: message
      }
    };

    process.stdout.write(JSON.stringify(output));
  } catch (e) {
    // Silent fail — never block tool execution
    process.exit(0);
  }
});
