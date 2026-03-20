---
name: he:help
description: Show available Human Engine commands and usage guide
---
<objective>
Display the Human Engine command reference. Output ONLY the reference below — no project analysis, no suggestions, no commentary.
</objective>

<process>
Output the following reference directly:

---

# Human Engine — Command Reference

> The Human Operating System as an invocable framework.
> 21-category cognitive architecture across 10 phases.

## Commands

| Command | What It Does | When to Use |
|---------|-------------|-------------|
| `/he:think` | Pre-work preparation (Phases 1-3) | Before starting any non-trivial task |
| `/he:review` | Full 21-category review (all phases) | After completing work, before declaring done |
| `/he:gate` | 5-pass completion gate | Before saying "done" on any task |
| `/he:doubt` | Self-doubt amplifier (Phase 8) | When something feels off or stakes are high |
| `/he:compare` | Competitive analysis (Phase 5) | Before claiming "good enough" or shipping |
| `/he:risk` | Risk forecast (Phase 6) | Before deploying or after building something complex |
| `/he:reflect` | Post-task learning (Phase 10) | After completing work or at session end |
| `/he:full` | All 10 phases, parallel agents | Major milestones, releases, high-stakes work |
| `/he:help` | This reference | When you need a reminder |

## The Natural Cycle

```
/he:think → [do the work] → /he:gate → /he:reflect
```

For important work, expand to:
```
/he:think → [do the work] → /he:review → /he:gate → /he:reflect
```

For launches/releases:
```
/he:think → [do the work] → /he:full → /he:compare → /he:risk → /he:gate → /he:reflect
```

## Scoring

Every check produces **PASS / WARN / FAIL** with evidence.
- PASS = verified with proof
- WARN = concern noted, not blocking
- FAIL = must fix before shipping

## The Core Question

> **Is this the right thing, for the right people, in the right way, with the fewest weaknesses and the strongest chance of success?**

## Framework Location

- Commands: `~/.claude/commands/he/`
- Workflows: `~/.claude/human-engine/workflows/`
- References: `~/.claude/human-engine/references/`
- Templates: `~/.claude/human-engine/templates/`

---
</process>
