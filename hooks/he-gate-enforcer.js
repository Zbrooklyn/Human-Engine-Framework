#!/usr/bin/env node
// Human Engine — Gate Enforcement Hook (PreToolUse)
//
// Two jobs:
// 1. Bridge: writes session ID to $TMPDIR/he-session.json on every Bash call
//    so the agent can read it when running /he:gate
// 2. Enforce: warns before `git commit` if no /he:gate evidence exists
//
// Project opt-in: enforcement only fires in projects with a `.human-engine`
// marker file. The session bridge always writes (cheap, needed by gate).

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

    const sessionId = data.session_id;
    const tmpDir = os.tmpdir();

    // Job 1: Always write session bridge file so /he:gate can find the session ID
    if (sessionId) {
      try {
        const bridgePath = path.join(tmpDir, 'he-session.json');
        fs.writeFileSync(bridgePath, JSON.stringify({
          session_id: sessionId,
          timestamp: Math.floor(Date.now() / 1000)
        }));
      } catch (e) {
        // Best-effort — don't break anything
      }
    }

    // Job 2: Enforcement — only on git commit in opted-in projects
    const command = data.tool_input?.command || '';
    if (!command.match(/\bgit\s+commit\b/)) {
      process.exit(0);
    }

    if (command.match(/--amend/)) {
      process.exit(0);
    }

    const cwd = data.cwd || process.cwd();
    if (!fs.existsSync(path.join(cwd, '.human-engine'))) {
      process.exit(0);
    }

    if (!sessionId) {
      process.exit(0);
    }

    // Check for gate state file
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
    process.exit(0);
  }
});
