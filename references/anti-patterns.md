# Anti-Patterns — What Breaks the Human Engine

> These patterns were identified from real failures. Each has a source incident.

---

## 1. False Confidence
**Pattern**: Claiming "done" or "100%" based on tests passing, without ever running the actual product.

**Source**: Agent claimed "100% done" 4 times on a 10-module system. Tests passed. Never ran a real session. Never proved it was better than the existing solution.

**The Fix**: Before claiming done, answer:
1. "Can I DEMO this to an investor right now and they'd be impressed?"
2. "Have I actually USED this myself and found it genuinely useful?"
3. "How does this compare to the best existing alternative?"
4. "What would a skeptic ask, and can I answer with evidence?"
5. "Would I bet my reputation that this works?"

**Rule**: Tests prove code correctness. Only real usage proves product value.

---

## 2. Premature Surrender
**Pattern**: Marking failures as "SKIP", "accepted tradeoff", or "known gap" instead of trying alternatives.

**Source**: Agent marked test failures as "SKIP" instead of trying other approaches. The actual fix took 2 minutes.

**The Fix**: Try at least 3-5 genuinely different approaches before reporting a blocker. The default stance is "I will solve this" — not "I will document this as unresolved."

**Rule**: When something fails, investigate root cause > try alternatives > research > build workarounds > THEN ask the user.

---

## 3. Code-Product Conflation
**Pattern**: Treating the code as the deliverable instead of the user experience.

**Source**: Performance review found 24.3% correction rate across 404 messages, 38+ unverified completion claims. The code worked; the product didn't.

**The Fix**: The code is NOT the product. The user experience IS the product. Always inspect the rendered output, not just the source code.

**Rule**: What the code says and what the user sees are NOT always the same.

---

## 4. Single-Angle Verification
**Pattern**: Verifying by reading code, then claiming it works — without ever running it.

**Source**: Agent verified fixes by reading diffs. Bugs were still visible when the app actually ran.

**The Fix**: Never verify the same way twice. If you checked by reading code, now run it. If you ran it on desktop, check mobile. If you tested the happy path, try the error path.

**Rule**: Evidence requires at least two independent verification methods.

---

## 5. Assumption Cascade
**Pattern**: Making one assumption, then building more assumptions on top of it, creating a house of cards.

**Source**: Agent assumed a CSS fix would work > assumed it applied to shared components > assumed those components loaded after Tailwind > none of that was true.

**The Fix**: After each assumption, verify before proceeding. An assumption is not a fact until proven.

**Rule**: Research before guessing. After a failed fix, read docs before trying again.

---

## 6. Completion Without Inspection
**Pattern**: Declaring work complete without ever looking at the actual output.

**Source**: Agent committed visual fixes without taking screenshots. The fixes didn't work.

**The Fix**: After ANY change that produces output, inspect the rendered result. UI = screenshot. Docs = render and read. Scripts = run and check output. APIs = call endpoints.

**Rule**: "N/A" is never acceptable for output verification. Every deliverable can be inspected.

---

## 7. Scope Tunnel Vision
**Pattern**: Fixing the exact thing asked about while ignoring obvious related issues visible in the same view.

**Source**: Agent fixed a button color but didn't notice the layout was broken in the same component.

**The Fix**: After completing a task, step back and ask: "What would the user notice next?" If you can think of the follow-up in 30 seconds, do it.

**Rule**: Think like a co-owner, not a task executor.

---

## Summary: The 7 Deadly Anti-Patterns

| # | Anti-Pattern | One-Line Rule |
|---|---|---|
| 1 | False Confidence | Tests ≠ product. Demo it or it's not done. |
| 2 | Premature Surrender | Try 3-5 approaches before saying "blocked." |
| 3 | Code-Product Conflation | The UX is the product, not the code. |
| 4 | Single-Angle Verification | Two independent checks minimum. |
| 5 | Assumption Cascade | Verify each assumption before building on it. |
| 6 | Completion Without Inspection | Always inspect the actual output. |
| 7 | Scope Tunnel Vision | Think like an owner, not a ticket-closer. |
