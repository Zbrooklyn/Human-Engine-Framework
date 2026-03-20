# Workflow: Risk

> Risk forecast and maintainability assessment. Phase 6 of the Human Operating System.

## When to Use

- Before shipping or deploying
- When making architecture decisions
- When the user asks "what could go wrong?"
- After building something complex

## Process

### Step 1: Identify the Subject

What are we assessing risk for? Read the relevant code/docs.

### Step 2: Run Category 13 — Risk Forecasting

Think forward in time. Answer:

**Immediate risks (first week)**
- What will break first?
- What will the first bug report be about?
- What will users complain about immediately?

**Short-term risks (first month)**
- What edge cases will users discover?
- What performance issues will appear with real usage?
- What workflow will users try that we didn't anticipate?

**Long-term risks (3-6 months)**
- What problems will appear at scale?
- What dependency will break or become unsupported?
- What will become the biggest maintenance burden?

### Step 3: Run Category 14 — Maintainability

- Can someone else understand this code in 6 months?
- Is the architecture documented or self-evident?
- What technical debt is being created?
- What's the upgrade/migration path?
- What happens when dependencies update?

### Step 4: Failure Scenarios

Create at least 3 specific failure scenarios:

For each:
1. **What happens**: [specific failure description]
2. **Likelihood**: High / Medium / Low
3. **Impact**: High / Medium / Low
4. **Detection**: How would we know this happened?
5. **Mitigation**: What prevents or fixes this?
6. **Recovery**: If it happens, how do we recover?

### Step 5: Risk Matrix

Plot findings on a risk matrix:

| Risk | Likelihood | Impact | Severity | Mitigation |
|------|-----------|--------|----------|------------|
| [risk] | H/M/L | H/M/L | Critical/High/Med/Low | [action] |

Priority: High likelihood + High impact first.

### Step 6: Report

Use the template from `human-engine/templates/risk-assessment.md`.

## Key Principle

Risk assessment is not pessimism. It's preparation.
The goal is to find problems BEFORE users do — and decide which ones to fix now vs. monitor.
