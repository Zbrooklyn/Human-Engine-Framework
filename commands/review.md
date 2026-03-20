---
name: he:review
description: Deep 21-category cognitive review using the Human Operating System. Run all 10 phases to evaluate work quality. Use when completing significant work, before declaring done, or when asked for a review.
argument-hint: "[subject to review]"
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Agent
  - AskUserQuestion
  - Write
---
<objective>
Run the complete Human Operating System review loop — 21 categories across 10 phases — on the specified subject. Produces a scored review report with PASS/WARN/FAIL verdicts and evidence.

**Creates:** Review Report (inline, or saved to file in Deep Parallel mode)

**Modes:** Quick (sequential), Deep Parallel (5 agents), Targeted (specific phases), Auto (picks based on scope)
</objective>

<execution_context>
@C:/Users/Owner/.claude/human-engine/workflows/review.md
@C:/Users/Owner/.claude/human-engine/references/framework.md
@C:/Users/Owner/.claude/human-engine/references/review-modes.md
@C:/Users/Owner/.claude/human-engine/references/scoring.md
@C:/Users/Owner/.claude/human-engine/templates/review-report.md
</execution_context>

<context>
$ARGUMENTS
</context>

<process>
Execute the review workflow from @C:/Users/Owner/.claude/human-engine/workflows/review.md end-to-end.
Present review mode options. Wait for user choice. Then run the selected review mode.
Use scoring from references/scoring.md. Output using templates/review-report.md format.
If self-doubt (Phase 8) surfaces issues, re-loop affected phases.
</process>
