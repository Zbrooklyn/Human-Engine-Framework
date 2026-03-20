# Human Engine — HANDOFF

## Quick Reference
- **Type**: Framework / Open Source
- **Status**: Active — v1.0.0 shipped
- **Owner Model**: Claude
- **Public Repo**: https://github.com/Zbrooklyn/Human-Engine-Framework
- **Local Install**: `~/.claude/commands/he/` + `~/.claude/human-engine/`
- **Last Updated**: 2026-03-20

## What Is This

A cognitive quality framework for AI agents — 21 categories across 10 phases that encode how skilled human professionals think. Built as a set of invocable slash commands for Claude Code, following the same architecture as GSD.

The framework exists because trust-based rules (hot-memory, MEMORY.md) weren't enough to prevent recurring quality failures. This makes the thinking process explicit and invocable rather than implicit and hoped-for.

## Architecture

```
~/.claude/
├── commands/he/          ← 9 command entry points (slash commands)
│   ├── think.md          ├── review.md       ├── gate.md
│   ├── doubt.md          ├── compare.md      ├── risk.md
│   ├── reflect.md        ├── full.md         └── help.md
├── human-engine/         ← framework backing files
│   ├── workflows/        ← 8 detailed implementations
│   ├── references/       ← 4 knowledge base files
│   └── templates/        ← 5 output format templates
└── skills/human-review/  ← legacy skill, redirects to /he:review
```

**Total**: 22 framework files + README + review document

## Commands

| Command | Phase(s) | Purpose |
|---------|----------|---------|
| `/he:think` | 1-3 | Pre-work: understand, prioritize, plan |
| `/he:review` | 1-10 | Full 21-category review (4 modes) |
| `/he:gate` | — | 5-pass completion gate |
| `/he:doubt` | 8 | Self-doubt amplifier |
| `/he:compare` | 5 | Competitive benchmarking |
| `/he:risk` | 6 | Risk forecast + maintainability |
| `/he:reflect` | 10 | Post-task learning + memory updates |
| `/he:full` | 1-10 | All phases with parallel agents |
| `/he:help` | — | Command reference |

## Origin

Built from:
- Performance review (2026-03-12): 24.3% correction rate, 404 messages, 98 corrections
- Human Operating System framework (2026-03-16): 21-category cognitive architecture
- 8-mode review cycle, 5-pass self-check loop, 7 anti-patterns from real failures
- Source material in `less-is-more` project docs and Claude memory files

## Completed

- [x] Framework design — 10 phases, 21 categories, scoring system
- [x] 9 slash commands created and registered
- [x] 8 workflow implementations
- [x] 4 reference documents (framework spec, review modes, anti-patterns, scoring)
- [x] 5 output templates (review report, think brief, risk assessment, reflection log, gate checklist)
- [x] Legacy `/human-review` skill updated to redirect
- [x] Public GitHub repo created and pushed
- [x] README with installation instructions
- [x] Gate enforcement hook (`he-gate-enforcer.js`) — PreToolUse, warns before `git commit` without gate evidence
- [x] Gate state file — `/he:gate` writes PASS/WARN/FAIL to temp marker
- [x] Hook registered in `~/.claude/settings.json`
- [x] ROADMAP.md with versioned plan (v1.0–v1.5 + future ideas)

## Next Actions

See `ROADMAP.md` for the full versioned plan. Current priority:

- [ ] **Test enforcement** — verify the hook fires on `git commit` and the gate state file works
- [ ] **Real-world validation** — run the full cycle on 3 real tasks
- [ ] **Cross-model references** (v1.2) — copy references to `shared/` for Codex/Gemini
- [ ] **Deduplicate** (v1.3) — trim hot-memory/MEMORY.md entries the framework canonicalizes

## Known Issues

- Claude-only: commands use `.claude/commands/` which other models can't invoke (v1.2 addresses references)
- Overlap with hot-memory/MEMORY.md rules — two sources of truth that could drift (v1.3 addresses)
- `/he:full` parallel mode is token-expensive (5 agents reading codebase)
- `@` file paths in commands are absolute to this machine — not portable for other users (v1.5)
- Enforcement is soft (warning only) — hard enforcement is a v1.5 opt-in option

## Related Projects

- **GSD**: Complementary — GSD = what to build and ship, HE = how to think about quality
- **less-is-more**: Contains the original HUMAN-OPERATING-SYSTEM.md and SYSTEM-PROMPT.md
- **Autonomous AI Agent**: Earlier implementation of the Human OS for autonomous agents
- **performance-reviewer**: The audit that surfaced the failures this framework addresses
