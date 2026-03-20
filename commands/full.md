---
name: he:full
description: Full Human Engine audit — all 10 phases, 21 categories, scored end-to-end. The highest-confidence quality check. Use for major milestones, releases, or high-stakes deliverables.
argument-hint: "[subject to audit]"
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
  - Bash
  - Agent
  - AskUserQuestion
  - WebSearch
  - WebFetch
---
<objective>
Run ALL 10 phases of the Human Operating System as a comprehensive scored audit. Launches 5 parallel agents for maximum coverage, then consolidates into a single report.

**Creates:** Full Review Report (saved to file)

**This is the most thorough check in the Human Engine.** If it passes, you'd be comfortable presenting the work to anyone.
</objective>

<execution_context>
@C:/Users/Owner/.claude/human-engine/workflows/full.md
@C:/Users/Owner/.claude/human-engine/references/framework.md
@C:/Users/Owner/.claude/human-engine/references/review-modes.md
@C:/Users/Owner/.claude/human-engine/references/scoring.md
@C:/Users/Owner/.claude/human-engine/references/anti-patterns.md
@C:/Users/Owner/.claude/human-engine/templates/review-report.md
</execution_context>

<context>
$ARGUMENTS
</context>

<process>
Execute the full workflow from @C:/Users/Owner/.claude/human-engine/workflows/full.md end-to-end.
Launch 5 parallel agents covering all 21 categories. Consolidate findings.
Run self-doubt loop on consolidated findings. Produce scored report.
Present summary table first, then details, then actions.
</process>
