# Workflow: Full

> All 10 phases of the Human Operating System, end-to-end, as a scored audit.

## When to Use

- Major milestone completion
- Before a release or launch
- When the user wants a comprehensive quality check
- When stakes are high enough to justify the full cycle

## Process

### Step 1: Identify the Subject

What is being audited? Read all relevant files.

This should be something substantial — a feature, a project, a release. For small changes, use `/he:gate` instead.

### Step 2: Determine Execution Mode

For a full audit, prefer **Deep Parallel** mode:

Launch 5 agents simultaneously using the Agent tool:

1. **Understanding + Structure Agent**
   - Phase 1: Understanding (Purpose, Context, Audience)
   - Phase 4: Review (Functional, Structure, Completeness)
   - Read project docs, code structure, user-facing output

2. **UX + Comparison Agent**
   - Phase 3: Execution (UX Simulation, Emotional Response)
   - Phase 5: Comparison (Competitive Benchmarking, Trust)
   - Use the actual product, compare to alternatives

3. **Strategy + Risk Agent**
   - Phase 2: Prioritization (Priority, Simplicity)
   - Phase 6: Risk (Risk Forecast, Maintainability)
   - Evaluate architecture decisions and future risks

4. **Verification + Edge Case Agent**
   - Phase 7: Verification (Evidence, Pattern Recognition)
   - Phase 9: Edge Cases (Edge Case Awareness)
   - Run tests, try edge cases, verify claims

5. **Meta Agent**
   - Phase 8: Self-Audit (Self-Doubt Loop)
   - Phase 10: Reflection (Reflection, Learning, Recalibration)
   - Review findings from other agents, find what they missed

Each agent should:
- Read the relevant code/files independently
- Use the scoring system from `human-engine/references/scoring.md`
- Produce PASS/WARN/FAIL for each category with evidence
- Check against anti-patterns from `human-engine/references/anti-patterns.md`

### Step 3: Consolidate Findings

After all agents complete:

1. Merge all findings into a single report
2. Resolve any conflicts between agents (if Agent A says PASS but Agent B found a related issue)
3. Check for cross-cutting concerns that no single agent would catch
4. Run the self-doubt loop one more time on the consolidated findings

### Step 4: Produce the Full Report

Use the template from `human-engine/templates/review-report.md`.

The report should include:
- Summary table with all 10 phases scored
- Detailed findings per phase with evidence
- Action items sorted by severity
- The Core Question answered with evidence

### Step 5: Present to User

Start with the summary table. Then details. Then actions.

If any phase is FAIL:
> "This is not ready to ship. [N] critical issues found. Here's what needs to happen:"

If all PASS or WARN:
> "Ready to ship with [N] caveats. Here's the full report:"

## Fallback

If the Agent tool is unavailable or the subject is too small for parallel agents, fall back to sequential execution of all 10 phases in conversation (Quick Review mode from `/he:review`).

## Key Principle

The full audit is the highest-confidence check in the Human Engine. It should feel thorough enough that if it passes, you'd be comfortable presenting the work to anyone.
