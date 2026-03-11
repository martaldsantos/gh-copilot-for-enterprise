# Track File Structure

Every track markdown file under `tracks/` must follow this canonical section order. Sections marked **(required)** must appear in every track. Sections marked **(if applicable)** should be included only when relevant.

## Section Order

```text
1. # Track Title                              (required)
   - Duration, Difficulty, Focus metadata     (required)

2. ## Who Is This For                         (required)
   - Bullet list of target roles

3. ## Prerequisites                           (required)
   - Bullet list of required knowledge

4. ## Technology Stack                        (required)
   - Bullet list of languages, frameworks, tools

5. ## Getting Started                         (required)
   - ### 1. Configure Copilot Context
   - ### 2. Create Your Custom Instructions
   - ### 3. Create Custom Agents
   - ### 4. Open the Challenge

6. ## Stages                                  (required)
   - Summary table (Stage, Name, Difficulty, Est. Time, Key Deliverable)
   - One ### per stage, each containing:
     - #### Tasks (numbered list)
     - #### Verification (bullet list)
     - #### What Copilot Helps With vs. What Requires Your Judgment (if applicable)

7. ## Tips for Using Copilot on This Track    (if applicable)
   - Practical prompts and patterns specific to the track

8. ## Resources                               (required)
   - Flat list of links: Copilot Guide, Prompt Engineering, Troubleshooting, Facilitator Guide
```

## Rules

- **No duplicate content.** Verification criteria go inside each stage only, never repeated in a separate "Success Metrics" section.
- **One "Getting Started" section.** All setup steps (copilot-instructions, agents, navigation) live under a single `## Getting Started` near the top. Do not add a second getting-started section at the bottom.
- **One challenge link.** Link to the challenge folder once, inside `### 4. Open the Challenge` in Getting Started.
- **No "Track Overview" prose.** The metadata line (Duration / Difficulty / Focus) under the title is sufficient. Drop any paragraph restating the same information.
- **No "Learning Outcomes" section.** The stages and their verification bullets already communicate what the participant will learn.
- **Tips must be track-relevant.** Do not include tips for tools or domains that belong to a different track (e.g., Dockerfile tips in the backend track).
- **Headings use `##` for top-level sections and `###` for stages.** Stage sub-sections use `####`.
- **`awesome-copilot` referenced once.** Mention the repo in a blockquote after the agents section. Do not repeat it.
- **No "Recommended Schedule" section.** Time estimates belong in the stages table. Clock-slot schedules belong in the Facilitator Guide, not in participant-facing track files.

## Writing Style

Follow the rules in `.github/copilot-instructions.md`: no emoji in headings, no em-dashes (use `--`), no hype language, no AI sign-offs, natural phrasing, markdownlint-compliant.
