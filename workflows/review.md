# Workflow: Review

> Deep 21-category cognitive review. The full Human Operating System review loop.

## When to Use

After completing significant work, before declaring done, or when the user explicitly asks for a review.

## Process

### Step 1: Determine Review Mode

Present these options to the user:

> **How would you like to run this review?**
>
> **A) Quick Review** — All 21 categories in this conversation. Fast, good for checking recent work.
>
> **B) Deep Parallel Review** — Launch background agents evaluating 5 dimensions simultaneously, then consolidate. More thorough.
>
> **C) Targeted Review** — Focus on specific phases:
>   - Understanding (goal, context, audience)
>   - Execution (UX, emotional response)
>   - Quality (functional, structural, completeness)
>   - Competitive (benchmarking, trust signals)
>   - Risk (forecasting, maintainability)
>   - Verification (evidence, patterns, self-doubt)
>
> **D) Auto** — I'll pick based on scope. Small = Quick. Large = Deep Parallel.

Wait for the user's choice before proceeding.

### Step 2: Identify Subject

What is being reviewed? Options:
- Current working directory / project
- A specific feature or file
- A PR or set of changes
- A design or architecture decision

Read the relevant code/files before starting. Never review without reading first.

### Step 3: Execute Review Phases

For each phase, use the scoring from `human-engine/references/scoring.md`:

**Phase 1 — Understanding** (Categories 1-3: Purpose, Context, Audience)
**Phase 2 — Prioritization** (Categories 4-5: Priority, Simplicity)
**Phase 3 — Execution** (Categories 6-7: UX, Emotional Response)
**Phase 4 — Structural Review** (Categories 8-10: Functional, Structure, Completeness)
**Phase 5 — Comparison** (Categories 11-12: Competition, Trust)
**Phase 6 — Risk** (Categories 13-14: Risk Forecast, Maintainability)
**Phase 7 — Verification** (Categories 15-16: Evidence, Patterns)
**Phase 8 — Self-Audit** (Category 17: Self-Doubt)
**Phase 9 — Edge Cases** (Category 18: Edge Cases)
**Phase 10 — Reflection** (Categories 19-21: Reflection, Learning, Recalibration)

For each phase, output:
```
### Phase N: [Name] — [PASS/WARN/FAIL]
**Evidence**: [what was checked]
- [specific finding]
```

### Step 4: Self-Doubt Re-Loop

After Phase 8, if ANYTHING was flagged:
- Loop back to Phase 1 with the new findings in context
- Only re-check phases affected by the new findings
- Note what changed in the second pass

### Step 5: Aggregate and Answer

Produce the summary table from `human-engine/templates/review-report.md`.

End with the core question:
> **Is this the right thing, for the right people, in the right way, with the fewest weaknesses and the strongest chance of success?**

Answer YES or NO with evidence.

### Step 6: Action Items

If any phase is FAIL, list required actions with severity.
If any phase is WARN, list recommended actions.

## Mode-Specific Behavior

### Quick Review (A)
- Run all phases sequentially in conversation
- Output inline, no file saved unless user requests it

### Deep Parallel Review (B)
- Launch 5 agents in parallel using the Agent tool:
  1. **Functional Agent** — Phases 1, 4 (Understanding + Structural Review)
  2. **UX Agent** — Phases 3, 5 (Execution + Comparison)
  3. **Risk Agent** — Phases 2, 6 (Prioritization + Risk)
  4. **Verification Agent** — Phases 7, 9 (Verification + Edge Cases)
  5. **Meta Agent** — Phases 8, 10 (Self-Audit + Reflection)
- Each agent reads the relevant code independently
- Consolidate all findings into one report
- Cross-reference for conflicts between agents

### Targeted Review (C)
- Run only the phases the user selected
- Still produce a summary table (mark unreviewed phases as "SKIP")

### Auto (D)
- Single file or small change → Quick Review
- Multi-file feature or project → Deep Parallel
- User specified a focus area → Targeted on those phases
