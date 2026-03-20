# The Human Engine

A cognitive quality framework for AI agents. 21 categories across 10 phases — structured thinking that mirrors how skilled human professionals evaluate work.

## The Core Idea

Most AI agents: **Task → Answer**
Humans: **Task → Analyze → Test → Compare → Self-Critique → Reflect → Repeat**

The Human Engine encodes that extra loop as invocable commands.

## The Master Loop

**Understand → Prioritize → Execute → Review → Compare → Risk → Verify → Self-Audit → Edge Cases → Reflect → REPEAT**

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
| `/he:help` | Command reference | When you need a reminder |

## The Natural Cycle

```
/he:think  →  [do the work]  →  /he:gate  →  /he:reflect
```

For important work:
```
/he:think  →  [do the work]  →  /he:review  →  /he:gate  →  /he:reflect
```

For launches/releases:
```
/he:think  →  [do the work]  →  /he:full  →  /he:compare  →  /he:risk  →  /he:gate  →  /he:reflect
```

## The 10 Phases / 21 Categories

| Phase | Categories |
|-------|-----------|
| 1. Understanding | Purpose, Context, Audience |
| 2. Prioritization | Priority Assessment, Effort vs Value |
| 3. Execution | User Experience Simulation, Emotional Response |
| 4. Review | Functional Reality, Structural Quality, Completeness |
| 5. Comparison | Competitive Benchmarking, Trust Signals |
| 6. Risk | Risk Forecasting, Maintainability |
| 7. Verification | Evidence, Pattern Recognition |
| 8. Self-Audit | Self-Doubt Loop |
| 9. Edge Cases | Edge Case Awareness |
| 10. Reflection | Reflection, Learning, Recalibration |

## Scoring

Every check produces **PASS / WARN / FAIL** with evidence.

- **PASS** — Verified with proof. No issues.
- **WARN** — Minor concern or unverified assumption. Not blocking.
- **FAIL** — Significant problem. Must fix before shipping.

"I believe this should work" is not evidence. Screenshots, test output, specific observations — that's evidence.

## The 7 Anti-Patterns

These were identified from real agent failures:

1. **False Confidence** — Claiming "done" based on tests, never running the actual product
2. **Premature Surrender** — Marking failures as "SKIP" instead of trying alternatives
3. **Code-Product Conflation** — Treating code as the deliverable instead of user experience
4. **Single-Angle Verification** — Checking one way and assuming it's enough
5. **Assumption Cascade** — Building on unverified assumptions
6. **Completion Without Inspection** — Never looking at the actual output
7. **Scope Tunnel Vision** — Fixing the ticket while ignoring obvious related issues

## The Core Question

> **Is this the right thing, for the right people, in the right way, with the fewest weaknesses and the strongest chance of success?**

If you can't answer YES with evidence, you're not done.

## Repository Structure

```
├── commands/       ← Slash command entry points (Claude Code format)
├── workflows/      ← Detailed implementation logic per command
├── references/     ← Knowledge base (framework spec, review modes, anti-patterns, scoring)
├── templates/      ← Output format templates (review report, think brief, etc.)
└── README.md
```

## Installation (Claude Code)

Copy the directories into your Claude Code config:

```bash
# Commands → ~/.claude/commands/he/
cp -r commands/* ~/.claude/commands/he/

# Framework files → ~/.claude/human-engine/
mkdir -p ~/.claude/human-engine/{workflows,references,templates}
cp -r workflows/* ~/.claude/human-engine/workflows/
cp -r references/* ~/.claude/human-engine/references/
cp -r templates/* ~/.claude/human-engine/templates/
```

Then update the `@` file paths in the command files to match your installation directory.

## Origin

Built from real corrections across 400+ user messages and 98 logged mistakes. Every rule exists because something went wrong without it.
