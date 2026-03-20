---
name: he:gate
description: Completion gate — the 5-pass self-check that must pass before declaring any task done. Covers request matching, live verification, adversarial testing, cross-angle checking, and skeptic's audit.
argument-hint: "[task that was just completed]"
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Agent
---
<objective>
Run the mandatory 5-pass completion gate before reporting work as done. Each pass must produce evidence, not assumptions. If any pass fails, the work is NOT done.

**Creates:** Gate Checklist (inline)

**Rule:** Never declare work complete without passing all 5 checks.
</objective>

<execution_context>
@~/.claude/human-engine/workflows/gate.md
@~/.claude/human-engine/references/scoring.md
@~/.claude/human-engine/references/anti-patterns.md
@~/.claude/human-engine/templates/gate-checklist.md
</execution_context>

<context>
$ARGUMENTS
</context>

<process>
Execute the gate workflow from @~/.claude/human-engine/workflows/gate.md end-to-end.
Run all 5 passes with real evidence. Do not fabricate passing results.
If any pass fails, report the failure and what needs fixing — do NOT report the task as done.
Use the gate-checklist template for output format.
After evaluation, write the gate state file (see workflow Step 5) so the enforcement hook knows the gate was run.
</process>
