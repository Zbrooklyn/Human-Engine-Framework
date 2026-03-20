# Workflow: Reflect

> Post-task learning and recalibration. Phase 10 of the Human Operating System.

## When to Use

- After completing a significant piece of work
- After a failure or unexpected outcome
- At the end of a work session
- When the user asks "what did we learn?"

## Process

### Step 1: Gather Context

Review what happened:
- What was the original task/goal?
- What was actually delivered?
- How long did it take? (was the estimate accurate?)
- Were there any surprises, blockers, or course corrections?

### Step 2: Run Category 19 — Reflection

- What went well? Be specific — not "it worked" but "the approach of X saved time because Y"
- What went wrong? Be specific — not "it was hard" but "I spent 20 minutes on X because I didn't Y first"
- Did reality match expectations? Where did it diverge?

### Step 3: Run Category 20 — Learning Extraction

- What principle did this reinforce?
- What mistake should not happen again?
- What new technique or pattern was discovered?
- Is there a correction worth logging to memory?

Check against the anti-patterns from `human-engine/references/anti-patterns.md`:
- Did any of the 7 anti-patterns occur?
- If yes, what triggered it and how to prevent it next time?

### Step 4: Run Category 21 — Recalibration

- Should the approach change for similar tasks?
- Are current quality standards high enough?
- Are there better checkpoints that should be added?
- Does any memory file need updating?

### Step 5: Action Items

Produce concrete actions:

| Action | Type | Target |
|--------|------|--------|
| [what to do] | Memory update / Process change / Skill improvement | [where to apply it] |

### Step 6: Log the Reflection

If the reflection surfaced anything worth preserving:

1. **Memory update**: If a new rule or preference was discovered, save to the appropriate memory file
2. **Self-improvement log**: If this was a non-trivial task, append an entry to `shared/state/self-improvement-log.md`
3. **Corrections log**: If a mistake was made, log it to `shared/memory/corrections-log.md`

Use the template from `human-engine/templates/reflection-log.md`.

### Step 7: Report to User

Keep it concise. The user wants insights, not a journal entry.

Format:
```
## Reflection — [Task Name]

**Went well**: [1-2 sentences]
**Went wrong**: [1-2 sentences, or "nothing significant"]
**Key lesson**: [one sentence]
**Action**: [what changes, if anything]
```

## Key Principle

Reflection without action is journaling. Reflection WITH action is learning.
Every reflection should produce at least one concrete change — even if it's "confirmed current approach works."
