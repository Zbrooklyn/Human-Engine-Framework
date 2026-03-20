# Human Engine — Roadmap

## v1.0.0 — Foundation (COMPLETE)
- [x] Framework design — 10 phases, 21 categories, scoring system
- [x] 9 slash commands (think, review, gate, doubt, compare, risk, reflect, full, help)
- [x] 8 workflow implementations
- [x] 4 reference documents (framework, review-modes, anti-patterns, scoring)
- [x] 5 output templates
- [x] Public GitHub repo
- [x] Project folder + HANDOFF

## v1.1.0 — Enforcement (IN PROGRESS)
- [x] Gate enforcement hook (`he-gate-enforcer.js`) — warns before `git commit` if no `/he:gate` evidence
- [x] Gate state file — `/he:gate` writes pass/fail state to temp file
- [x] Hook registered in `settings.json` as PreToolUse
- [ ] Test enforcement on a real commit — verify the hook fires and the warning appears
- [ ] Test gate state file creation — verify `/he:gate` writes the marker correctly
- [ ] Tune staleness window (currently 30 min) based on real usage

## v1.2.0 — Cross-Model Compatibility
- [ ] Copy `human-engine/references/` to `shared/human-engine/references/` so Codex and Gemini can read the framework spec, anti-patterns, and scoring system
- [ ] Add a section to `CODEX.md` and `GEMINI.md` pointing to the shared references
- [ ] Document which parts are Claude-only (commands, hooks) vs. cross-model (references, templates)

## v1.3.0 — Deduplication
- [ ] Audit overlap between `human-engine/references/` and `shared/memory/hot-memory.md`
- [ ] Trim hot-memory entries that the framework now canonicalizes (Human OS section, Self-Check Loop, False Confidence, Resilience)
- [ ] Replace inline rules in `MEMORY.md` with pointers to framework files
- [ ] Update `shared/contracts/execution-contract.md` to reference Human Engine instead of duplicating the review loop content

## v1.4.0 — Real-World Validation
- [ ] Run `/he:think` → work → `/he:gate` → `/he:reflect` on 3 different real tasks
- [ ] Document what worked and what felt clunky
- [ ] Adjust workflow based on friction points
- [ ] Collect evidence: did the framework catch something the old approach would have missed?

## v1.5.0 — Polish & Expansion
- [ ] Add `/he:do` router — smart dispatcher like `/gsd:do` for natural language routing
- [ ] Make `@` file paths in commands portable (relative or configurable) for public repo users
- [ ] Add installation script (`install.sh` / `install.ps1`) that copies files to `~/.claude/`
- [ ] Trim command count if usage data shows some commands unused
- [ ] Consider hard enforcement mode (block commit, not just warn) as opt-in setting

## Future / Ideas
- [ ] Integration with GSD — auto-run `/he:gate` at end of `/gsd:execute-phase`
- [ ] Scoring dashboard — track PASS/WARN/FAIL rates over time
- [ ] Reflection memory — `/he:reflect` auto-builds a learning database across sessions
- [ ] Team mode — share framework with other Claude Code users via npm/npx install
