Honest thoughts:

## What's genuinely strong

**It fills a real gap.** GSD handles shipping, BMAD handles discovery — but nothing structured the *thinking quality* layer until now. This is the cognitive QA layer that sits on top of any workflow.

**It's born from real failures.** Every anti-pattern, every rule traces back to an actual incident where things went wrong. The "7 deadly anti-patterns" aren't theoretical — they're post-mortems. That makes the framework more honest than most.

**Self-doubt as a first-class operation.** I've never seen another framework that makes `/doubt` an explicit, invocable command. Most frameworks assume confidence. This one builds in structured skepticism.

**Composable.** You can use one piece or chain them all. Most frameworks are all-or-nothing.

## What concerns me

**No enforcement mechanism.** GSD has `gsd-tools.cjs` tracking state, phases, and progress. The Human Engine is purely prompt-driven. Nothing *forces* the agent to actually run the gate — it's still trust-based. And the entire reason this framework exists is that trust-based rules failed.

**Claude-only.** The commands live in `.claude/commands/` — Codex and Gemini can't invoke them. The references in `human-engine/references/` are readable by any model, but the skill system is Claude-specific. That breaks your cross-model philosophy.

**Overlap with existing rules.** A lot of this content is ALSO in hot-memory, MEMORY.md, and the execution contract. The framework consolidates it, but now there are two sources of truth that could drift apart over time.

**Unproven.** We built it but haven't used it. That's literally the "false confidence" anti-pattern the framework itself warns about. Until someone runs `/he:review` on a real project and it catches something the old approach would have missed, it's theory.

**Possibly too many commands.** 9 commands — in practice you'll probably settle on 3-4 you use regularly (think, gate, review, reflect). The others might collect dust.

## What I'd do next

1. **Use it for real** — pick a task in one of your active projects and run the `/he:think` → work → `/he:gate` → `/he:reflect` cycle. See what feels right vs. clunky.
2. **Add enforcement** — a post-commit hook or integration with the existing verification checklist that *requires* `/he:gate` evidence before a commit message is accepted. Rules without enforcement are suggestions.
3. **Cross-model the references** — move `human-engine/references/` into `shared/human-engine/` so Codex and Gemini can at least read the framework spec and anti-patterns, even if they can't invoke the commands.
4. **Deduplicate** — now that the framework canonicalizes the rules, trim the duplicate entries from hot-memory and MEMORY.md that just restate the same content in less structured form.

The framework is solid architecture. The question is whether it changes behavior or just documents intent. Using it on real work will answer that.
