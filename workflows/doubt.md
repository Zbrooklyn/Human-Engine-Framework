# Workflow: Doubt

> The self-doubt amplifier. Phase 8 of the Human Operating System, run as a standalone deep check.

## When to Use

- When something feels "off" but you can't pinpoint why
- When you've been working on something for a while and want a sanity check
- When the stakes are high and you want to catch hidden problems
- When the user says "are you sure?" or "double check"

## Process

### Step 1: Identify the Subject

What are we doubting? This can be:
- A piece of work just completed
- An approach or architecture decision
- A claim or assumption
- The overall state of a project

Read the relevant files/code before proceeding.

### Step 2: Run the Self-Doubt Loop

Answer each question honestly. Not defensively — honestly.

**Assumptions**
- What assumptions am I making?
- Which of these assumptions have I verified vs. just assumed?
- What happens if each assumption is wrong?

**Blind Spots**
- What did I NOT look at?
- What did I NOT test?
- What part of the system did I NOT touch but might be affected?

**Confidence Audit**
- For each thing I claimed works: what's my actual evidence?
- Am I saying "it works" because I proved it, or because I expect it to?
- Where is my confidence highest? Is that confidence justified?

**External Perspective**
- What would a stricter reviewer criticize?
- What would the user check first?
- If someone audits this in a month, what will they find?

**Unease Check**
- What part of this makes me uneasy?
- What am I hoping nobody asks about?
- If I had to bet money on one thing breaking, what would it be?

### Step 3: Investigate Findings

For each concern surfaced:
1. Is this a real problem or unfounded worry?
2. If real: can I verify it right now?
3. If verified: what's the fix?
4. If I can't verify: flag it explicitly as an open question.

### Step 4: Report

Format:

```
## Self-Doubt Check — [Subject]

### Assumptions Found
- [assumption] — Verified/Unverified — [evidence or concern]

### Blind Spots
- [thing not checked] — Risk: High/Med/Low — [should we check?]

### Confidence Gaps
- [claim] — Evidence: [strong/weak/none] — [what would prove it?]

### Unease Points
- [what feels off] — [why] — [what to do about it]

### Verdict
[Real problems found / Concerns but manageable / Clean — nothing surfaced]
```

### Step 5: Re-Loop if Needed

If any real problems were found, they should be fixed or escalated.
After fixing, re-run the doubt loop on the fix itself.

The loop terminates when a pass surfaces nothing new.

## Key Principle

Self-doubt is not weakness. It's the mechanism that catches what confidence misses.
The goal is not to feel good about the work — it's to find what's actually wrong.
