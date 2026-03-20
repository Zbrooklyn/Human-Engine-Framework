---
name: he:reflect
description: Post-task reflection and learning — extract lessons, check for anti-patterns, and recalibrate approach. Use after completing significant work, after failures, or at session end.
argument-hint: "[task or session to reflect on]"
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
  - Bash
---
<objective>
Run Phase 10 (Reflection) of the Human Operating System. Extracts lessons, checks for anti-patterns, and produces concrete recalibration actions. Optionally updates memory and self-improvement logs.

**Creates:** Reflection Log (inline) + optional memory/log updates

**Key insight:** Reflection without action is journaling. Reflection WITH action is learning.
</objective>

<execution_context>
@C:/Users/Owner/.claude/human-engine/workflows/reflect.md
@C:/Users/Owner/.claude/human-engine/references/anti-patterns.md
@C:/Users/Owner/.claude/human-engine/templates/reflection-log.md
</execution_context>

<context>
$ARGUMENTS
</context>

<process>
Execute the reflect workflow from @C:/Users/Owner/.claude/human-engine/workflows/reflect.md end-to-end.
Review what happened vs. what was expected. Extract specific lessons.
Check against the 7 anti-patterns. Produce at least one concrete action.
If lessons are worth preserving, update memory files and self-improvement log.
</process>
