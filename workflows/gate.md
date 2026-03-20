# Workflow: Gate

> The 5-pass completion gate. Run before declaring ANY non-trivial task done.

## When to Use

Before saying "done", "complete", "finished", "ready", or any synonym.
This is the mandatory quality checkpoint. It cannot be skipped.

## Process

### Step 1: Identify What's Being Gated

Determine what work was just completed. Read:
- The original request/task
- The changes made (files modified, code written)
- Any test results or build output

### Step 2: Run the 5 Passes

#### Pass 1: Did I Do What Was Asked?

Create a comparison table:

| Requested | Implemented | Match? |
|-----------|------------|--------|
| [each item from the original request] | [what was actually built] | Yes/No/Partial |

If ANY row is "No" or "Partial" — this pass is **FAIL**.

#### Pass 2: Does It Actually Work?

**This is NOT "do the tests pass."** This is: "Did I run the actual thing and observe it working?"

- For UI: Take a screenshot. Look at it. Does it look right?
- For API: Make a real request. Check the response.
- For CLI: Run the command. Check the output.
- For scripts: Execute them. Check the result.
- For docs: Render them. Read them as a user would.

**Evidence required**: Concrete output from running the actual system. Not test output. Not "the code looks correct."

If you cannot run it, this pass is **FAIL** and you must explain why.

#### Pass 3: Try To Break It

Think like an adversary. Try at least 3 scenarios:

1. **Unexpected input** — What if the data is wrong, empty, huge, or malicious?
2. **Edge case** — What if there are 0 items? 10,000 items? Unicode? Special characters?
3. **Unusual flow** — What if the user double-clicks? Refreshes mid-action? Uses a different browser?

For each scenario: actually try it (or reason about it with specific code references). Report what happened.

If any scenario causes a real problem — this pass is **FAIL**.

#### Pass 4: Different Angle Check

You already verified one way. Now verify a DIFFERENT way:

- If you read the code → now run it
- If you ran it locally → check in browser/mobile
- If you tested the happy path → test the error path
- If you checked the feature → check the surrounding features for regressions

The two verification methods must be independent. If they agree, **PASS**. If they disagree, investigate.

#### Pass 5: Skeptic's Check

Answer these questions honestly:

1. "What would a skeptic check first?" — Then check that thing.
2. "What's the most fragile part of this change?" — Provide evidence it holds.
3. "What did I NOT verify?" — Be honest. If something remains unverified, say so.

If there's a significant unverified concern — this pass is **WARN** or **FAIL**.

### Step 3: Aggregate Verdict

- **All 5 PASS** → Ready to report done
- **Any WARN** → Report done with documented caveats
- **Any FAIL** → NOT done. Fix the failing pass, then re-run the gate.

### Step 4: Output

Use the template from `human-engine/templates/gate-checklist.md`.

If all passes clear, THEN and only then report to the user that the work is complete.

## Step 5: Write Gate State File (Enforcement)

After all 5 passes are evaluated, write a state file so the enforcement hook knows the gate was run.

Run this Bash command:
```bash
node -e "
const fs = require('fs');
const os = require('os');
const path = require('path');
const sessionId = process.env.SESSION_ID || 'unknown';
const verdict = process.argv[1];
const gatePath = path.join(os.tmpdir(), 'he-gate-' + sessionId + '.json');
fs.writeFileSync(gatePath, JSON.stringify({
  timestamp: Math.floor(Date.now() / 1000),
  verdict: verdict,
  session_id: sessionId
}));
console.log('Gate state written: ' + verdict);
" "VERDICT_HERE"
```

Replace `VERDICT_HERE` with:
- `PASS` — all 5 passes cleared
- `WARN` — some warnings but no failures
- `FAIL` — at least one failure

Only `PASS` and `WARN` satisfy the enforcement hook. `FAIL` will still trigger a warning on commit.

## Critical Rules

- This gate is not optional. Ever.
- "Tests pass" does NOT satisfy Pass 2. You must run the actual thing.
- If a pass fails, fix the issue and re-run ALL passes (not just the failed one).
- Do not generate a gate checklist with all PASS if you didn't actually do the checks.
- Honesty matters more than a clean report. A gate with honest WARNs is better than a fake all-PASS.
