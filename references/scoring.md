# Scoring Guide — How to Rate Findings

> Consistent scoring across all Human Engine commands.

---

## Verdict Scale

Each phase, category, or check produces one of three verdicts:

| Verdict | Meaning | Action Required |
|---------|---------|-----------------|
| **PASS** | Evidence confirms this is solid. No issues found. | None |
| **WARN** | Minor concern or unverified assumption. Not blocking but worth noting. | Address if time permits, or accept with documented rationale. |
| **FAIL** | Significant problem found. Evidence of a real gap, risk, or broken behavior. | Must fix before declaring done. |

---

## Evidence Requirements

Every verdict MUST include evidence. The format:

```
### Phase N: [Name] — [PASS/WARN/FAIL]
**Evidence**: [What you checked and what you found]
**Detail**: [Specific finding — not vague, not assumed]
**Action**: [What to do about it, if anything]
```

### What counts as evidence:
- Screenshot showing actual behavior
- Command output showing test results
- Specific file:line reference showing code behavior
- Comparison to a known standard or competitor
- User-perspective walkthrough with specific observations

### What does NOT count as evidence:
- "I believe this should work"
- "The code looks correct"
- "Tests pass" (necessary but not sufficient)
- "No issues found" (without explaining what was checked)
- Anything starting with "I assume" or "probably"

---

## Aggregate Scoring

When running multiple phases, aggregate the results:

| Overall | Rule |
|---------|------|
| **ALL PASS** | Every phase passed with evidence. Ready to ship. |
| **WARN** | At least one WARN, no FAILs. Ship with documented caveats. |
| **FAIL** | At least one FAIL. Not ready. Fix required. |

---

## Confidence Levels

For findings where certainty varies:

| Level | Meaning |
|-------|---------|
| **Verified** | Directly observed or tested. Fact. |
| **High confidence** | Strong evidence but not directly tested. |
| **Uncertain** | Based on reading code or documentation. Not verified live. |
| **Assumed** | No evidence. Must be verified before acting on it. |

Always state the confidence level. "Uncertain" findings that matter should trigger verification, not be silently accepted.

---

## Severity Mapping

When findings need prioritization:

| Severity | Impact | Examples |
|----------|--------|----------|
| **Critical** | Broken for users, data loss, security hole | App crashes, auth bypass, data corruption |
| **High** | Major UX degradation or incorrect behavior | Wrong data displayed, broken workflow, inaccessible feature |
| **Medium** | Noticeable quality gap | Visual inconsistency, slow performance, confusing flow |
| **Low** | Polish item or minor improvement opportunity | Typo, alignment off by a few pixels, could be slightly better |
