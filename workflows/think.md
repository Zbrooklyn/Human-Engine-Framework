# Workflow: Think

> Pre-work cognitive preparation. Run Phases 1-3 before starting any non-trivial task.

## When to Use

Before starting implementation. The goal is to make sure you're solving the right problem the right way before writing any code.

## Process

### Step 1: Identify the Subject

If the user provided arguments, use those. Otherwise, ask:
> "What are we about to work on? Give me the task, feature, or problem."

### Step 2: Run Phase 1 — Understanding

Work through all three categories:

**1. Purpose (Goal Alignment)**
- State the problem being solved in one sentence
- State what success looks like in one sentence
- Identify anything that's unnecessary or missing from the request
- Ask: "Am I solving the RIGHT problem, or just the STATED problem?"

**2. Context (Environmental Fit)**
- Read the relevant project files (HANDOFF.md, existing code, design docs)
- Identify constraints: tech stack, existing patterns, deployment targets
- Flag anything that doesn't fit the project's conventions

**3. Audience**
- Who will use this? (end user, developer, internal team)
- What do they already know? What might confuse them?
- What's their first interaction with this feature?

### Step 3: Run Phase 2 — Prioritization

**4. Priority Assessment**
- What's the single most important thing to get right?
- What creates the biggest impact with the least effort?
- What's the biggest risk?

**5. Effort vs Value**
- Is there a simpler approach?
- Does the proposed complexity justify the outcome?
- What's the MVP version vs. the full version?

### Step 4: Run Phase 3 — Execution Planning

**6. User Experience Simulation**
- Walk through the feature as a user would experience it
- Identify where confusion or friction could occur
- Note what the user will see first, second, third

**7. Emotional Response**
- Will this feel professional and trustworthy?
- Does anything feel "off" or half-baked?

### Step 5: Output the Think Brief

Use the template from `human-engine/templates/think-brief.md`.

Present it to the user and ask:
> "Here's my understanding. Should I proceed, or does anything need adjusting?"

### Step 6: Wait for Confirmation

Do NOT start implementation until the user confirms the approach.
If they adjust anything, update the brief and re-confirm.

## Output

The Think Brief should be concise — one screen, not a wall of text. The point is alignment, not documentation.
