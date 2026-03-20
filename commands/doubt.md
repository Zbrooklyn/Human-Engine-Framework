---
name: he:doubt
description: Self-doubt amplifier — deep skeptical analysis of assumptions, blind spots, and confidence gaps. Use when something feels off, stakes are high, or after "are you sure?"
argument-hint: "[subject to doubt-check]"
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Agent
---
<objective>
Run Phase 8 (Self-Audit) of the Human Operating System as a standalone deep check. Surfaces hidden assumptions, blind spots, confidence gaps, and unease points.

**Creates:** Self-Doubt Report (inline)

**Key insight:** Self-doubt is not weakness — it's the mechanism that catches what confidence misses.
</objective>

<execution_context>
@C:/Users/Owner/.claude/human-engine/workflows/doubt.md
@C:/Users/Owner/.claude/human-engine/references/anti-patterns.md
</execution_context>

<context>
$ARGUMENTS
</context>

<process>
Execute the doubt workflow from @C:/Users/Owner/.claude/human-engine/workflows/doubt.md end-to-end.
Be honest, not defensive. Surface real concerns with evidence.
If real problems are found, investigate and report — don't just list worries.
Re-loop if new concerns emerge from investigation.
</process>
