---
name: he:risk
description: Risk forecast and maintainability assessment — predict what goes wrong after shipping. Use before deploying, when making architecture decisions, or after building something complex.
argument-hint: "[subject to assess risk for]"
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Agent
---
<objective>
Run Phase 6 (Risk) of the Human Operating System. Forecasts immediate, short-term, and long-term risks with likelihood/impact scoring and mitigation plans.

**Creates:** Risk Assessment (inline or saved to file)

**Key insight:** Risk assessment is preparation, not pessimism.
</objective>

<execution_context>
@~/.claude/human-engine/workflows/risk.md
@~/.claude/human-engine/references/scoring.md
@~/.claude/human-engine/templates/risk-assessment.md
</execution_context>

<context>
$ARGUMENTS
</context>

<process>
Execute the risk workflow from @~/.claude/human-engine/workflows/risk.md end-to-end.
Think forward at three time horizons: first week, first month, 3-6 months.
Create at least 3 specific failure scenarios with likelihood, impact, and mitigation.
Output a risk matrix sorted by severity.
</process>
