---
name: he:full
description: Full Human Engine audit — shortcut for /he:review in Deep Parallel mode. All 10 phases, 21 categories, 5 parallel agents. Use for major milestones, releases, or high-stakes deliverables.
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
This is a convenience shortcut. It runs `/he:review` in Deep Parallel mode (mode B) without asking which mode to use.

Equivalent to: `/he:review` → select mode B (Deep Parallel).

Use this when you know you want the full parallel audit and don't want to go through mode selection.
</objective>

<execution_context>
@C:/Users/Owner/.claude/human-engine/workflows/review.md
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
Skip the mode selection prompt. Go directly to Deep Parallel mode (mode B) from the review workflow.
Use the full workflow's agent configuration (5 parallel agents) from @C:/Users/Owner/.claude/human-engine/workflows/full.md.
Consolidate findings and produce the scored report using the review-report template.

If the subject is too small or the Agent tool is unavailable, fall back to Quick Review (mode A) and inform the user.
</process>
