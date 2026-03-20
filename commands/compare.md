---
name: he:compare
description: Competitive analysis and benchmarking — compare your work against real alternatives and modern standards. Use before claiming something is "good enough" or before shipping.
argument-hint: "[subject to compare] [optional: specific competitors]"
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Agent
  - WebSearch
  - WebFetch
  - AskUserQuestion
---
<objective>
Run Phase 5 (Comparison) of the Human Operating System. Identifies real competitors, benchmarks against them, and produces an honest gap analysis.

**Creates:** Competitive Analysis Report (inline)

**Key insight:** Honest comparison is more valuable than flattering self-assessment.
</objective>

<execution_context>
@C:/Users/Owner/.claude/human-engine/workflows/compare.md
@C:/Users/Owner/.claude/human-engine/references/scoring.md
</execution_context>

<context>
$ARGUMENTS
</context>

<process>
Execute the compare workflow from @C:/Users/Owner/.claude/human-engine/workflows/compare.md end-to-end.
Identify real alternatives. Use web search if needed to find current competitors.
Produce an honest comparison matrix with specific assessments.
Identify must-fix gaps, nice-to-have gaps, and our advantages.
</process>
