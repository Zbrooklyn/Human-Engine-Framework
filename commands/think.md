---
name: he:think
description: Pre-work cognitive preparation — understand, prioritize, and plan approach before starting implementation. Use before any non-trivial task to make sure you're solving the right problem the right way.
argument-hint: "[task description or context]"
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - AskUserQuestion
  - Agent
---
<objective>
Run Phases 1-3 of the Human Operating System before starting work. Produces a Think Brief that aligns understanding, priorities, and approach with the user before any code is written.

**Creates:** Think Brief (inline or saved to file if requested)

**After this command:** User confirms approach, then implementation begins.
</objective>

<execution_context>
@~/.claude/human-engine/workflows/think.md
@~/.claude/human-engine/references/framework.md
@~/.claude/human-engine/templates/think-brief.md
</execution_context>

<context>
$ARGUMENTS
</context>

<process>
Execute the think workflow from @~/.claude/human-engine/workflows/think.md end-to-end.
Read relevant project files to understand context before producing the Think Brief.
Wait for user confirmation before proceeding to implementation.
</process>
