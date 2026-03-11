# Product Owner & Business Analyst Track

**Duration:** 6-8 hours
**Difficulty:** Beginner to Advanced (progressive stages)
**Focus:** Product planning, backlog management, and documentation using GitHub Copilot and GitHub's collaboration features

## Who Is This For

- Product Owners and Product Managers
- Business Analysts
- Project Managers and Scrum Masters
- Program Managers
- Stakeholders who participate in planning and requirements

## Prerequisites

- A GitHub account with Copilot access
- Basic familiarity with GitHub (repositories, issues, pull requests)
- No programming experience required

## Technology Stack

No traditional development stack. You will work with:

- **GitHub Issues** for user stories and backlog items
- **GitHub Projects** for boards and milestone tracking
- **Markdown** for all documentation (product briefs, specs, ADRs, release plans)
- **GitHub Pull Requests** for reviewing and merging documentation changes
- **GitHub Copilot Chat** for brainstorming, writing, and refining documents

## Getting Started

This track supports three ways of working. Choose the one that fits you best, or mix and match.

**Path A: GitHub.com Copilot Chat** -- Work entirely in the browser with no IDE. Go to [github.com/copilot](https://github.com/copilot), attach your repository for context, and use Copilot Chat alongside the GitHub.com UI for Issues and Projects. Custom agents and custom instructions work here. This is the lowest-friction option -- nothing to install or configure.

**Path B: GitHub.com + Codespaces** -- Work in VS Code in the browser via Codespaces. Open your repository on GitHub.com, create a Codespace, and use Copilot Chat in the sidebar alongside the GitHub.com UI for Issues and Projects. The devcontainer strips away typical IDE complexity -- no activity bar, no status bar, no line numbers. You get a clean writing environment with a GitHub theme. Press `Ctrl+Shift+I` (or `Cmd+Shift+I` on Mac) to open Copilot Chat.

**Path C: VS Code with GitHub MCP Server** -- Work in VS Code locally and use the GitHub MCP server to create issues, list PRs, and manage milestones directly from Copilot Chat without leaving the editor. The devcontainer pre-configures this.

> All paths are valid. Mix and match as you like.

### 1. Configure Copilot Context (CRITICAL)

The file `.github/copilot-instructions.md` currently contains instructions for the hackathon organizers. **You must overwrite this file** with instructions relevant to your project.

1. Open `.github/copilot-instructions.md`.
2. **Delete its entire contents.**
3. Write your own instructions (see guidance below).

> **Why?** If you skip this, Copilot will think it is helping organize a hackathon instead of helping you plan a product.

### 2. Create Your Custom Instructions

This file tells Copilot about your role and project context. **Your goal is to create your own custom instructions file.**

**What to include:**

- Your role (Product Owner, BA, PM) and what you need help with
- The product you are planning (TaskFlow -- a task management platform)
- The kind of artifacts you produce (user stories, specs, ADRs, release plans)
- Writing standards (clear, concise, structured markdown)
- GitHub workflow preferences (issue labels, milestone naming, branch strategy)

### 3. Create Custom Agents (`.github/agents/`)

Create specialized agents for different planning tasks. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**

- **Product Strategist Agent** -- Helps write product briefs, evaluate feature ideas, and define success metrics
- **Story Writer Agent** -- Specializes in writing user stories with clear acceptance criteria
- **Release Planner Agent** -- Focused on milestone planning, risk assessment, and communication plans

**What to include in each agent:**

- The agent's area of expertise
- Writing style and formatting expectations
- References to your project context and templates

> Check out [github/awesome-copilot](https://github.com/github/awesome-copilot) for real-world examples of custom instructions and agent templates.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance.

### 4. Open the Challenge

Navigate to `challenges/challenge-8-product-planning/`. This is where your starter files live (templates, sample docs, and exercises).

---

## Stages

### Scenario

You are the Product Owner (or Business Analyst) for **TaskFlow**, a task management platform for engineering teams. The development team has already built a basic REST API with authentication, task CRUD operations, and search (this is what the Backend Track builds in Challenge 1). Your job is to plan the next major release -- **TaskFlow v2.0** -- which adds team collaboration, notifications, and reporting.

Your deliverables are documentation and a well-organized GitHub backlog, not code.

| Stage | Name | Difficulty | Est. Time | What You Produce |
|-------|------|------------|-----------|------------------|
| 1 | Product Vision & Market Analysis | Beginner | 60-90 min | Product brief with competitive analysis and quantified personas |
| 2 | User Stories & Backlog Quality | Intermediate | 60-90 min | 10+ user stories, critique of bad stories, MoSCoW prioritization |
| 3 | Feature Specs & Technical Alignment | Intermediate | 75-90 min | 2 feature specs with diagrams, spec review exercise |
| 4 | Decision Making Under Constraints | Advanced | 60-90 min | 3 ADRs, stakeholder conflict resolution, buy-vs-build analysis |
| 5 | Release Planning & Go-to-Market | Advanced | 60-90 min | Release plan with risk matrix, rollback plan, dual release notes |

Each stage builds on the previous one. Copilot can help you draft and brainstorm, but the later stages require judgment, trade-off analysis, and critical thinking that you must bring yourself.

> **Short on time?** Pick one spec instead of two in Stage 3, write 2 ADRs instead of 3 in Stage 4, and focus on the release plan and one set of release notes in Stage 5.

---

### Stage 1: Product Vision and Market Analysis

**Difficulty:** Beginner | **Time:** 60-90 min

This stage establishes the foundation. You need a product brief that goes beyond generic descriptions and demonstrates real market understanding.

#### Tasks

1. **Complete the product brief** in `docs/product-brief.md`. Fill in every section.

2. **Competitive analysis** -- Add a new section to the product brief comparing TaskFlow to three real competitors (pick from Jira, Linear, Asana, Trello, ClickUp, or Monday.com). Create a positioning matrix that maps each product on two axes of your choosing (e.g., simplicity vs. power, individual vs. team-oriented). Explain where TaskFlow fits and why.

3. **Quantified personas** -- Your personas must include measurable goals and specific constraints. Not "team lead who wants visibility" but "team lead managing 8-12 engineers across 2 time zones, currently spending 40 minutes per day in status meetings, goal: reduce to 15 minutes." Define at least 3 personas at this level of detail.

4. **Measurable KPIs** -- Define at least 5 success metrics, each with a specific target number, measurement method, and data source. Example: "Weekly active users: target 70% of registered users measured via login events in analytics."

5. **Commit and push** your changes.

#### Verification

- Product brief has a competitive positioning matrix with 3+ real competitors
- Each persona includes quantified goals (numbers, time, team size)
- All KPIs have a target value, measurement method, and data source
- No section is left as a placeholder

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot can draft persona descriptions, suggest KPI categories, and generate competitive comparisons. But the positioning strategy (where TaskFlow fits in the market), the specific numeric targets for KPIs, and the choice of competitive axes require your judgment about what matters for this product.

---

### Stage 2: User Stories and Backlog Quality

**Difficulty:** Intermediate | **Time:** 60-90 min

Writing user stories is easy. Writing good ones is harder. This stage tests whether you can tell the difference.

#### Tasks

1. **Critique bad stories** -- Open `docs/bad-user-stories.md`. It contains 5 poorly-written user stories with common anti-patterns (solution-prescriptive language, missing "so that" clause, vague acceptance criteria, stories that are really epics, untestable criteria). For each story, identify the specific problem and rewrite it correctly. Document the before/after with an explanation of what was wrong.

2. **Write 10+ user stories** across the four epics in `docs/user-stories.md`. Each story must include acceptance criteria, priority, and size estimate.

3. **INVEST audit** -- For each of your 10 stories, self-assess against the INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable). Document any story that fails a criterion and explain how you would fix it (or why it is acceptable as-is).

4. **MoSCoW prioritization** -- Categorize all stories using MoSCoW (Must have, Should have, Could have, Won't have). Write a short rationale for each "Must have" explaining why the release cannot ship without it, and for each "Won't have" explaining what would change your mind.

5. **Create GitHub Issues** -- Convert your stories into GitHub Issues using the template in `templates/user-story-issue.md`. Apply labels for epic, priority, and MoSCoW category. Create at least 3 GitHub Milestones and assign each issue to one.

#### Verification

- All 5 bad stories in `docs/bad-user-stories.md` have a documented problem and corrected rewrite
- At least 10 user stories with acceptance criteria, priority, and estimate
- INVEST audit is documented for every story
- MoSCoW prioritization includes written rationale for all "Must have" and "Won't have" items
- At least 10 GitHub Issues exist with labels and milestone assignments

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot generates user story text and acceptance criteria quickly. It can also apply the INVEST acronym. But identifying what is wrong with someone else's story (the critique exercise), deciding whether a story is truly "Must have" vs. "Should have," and writing persuasive rationale for prioritization decisions require product thinking.

---

### Stage 3: Feature Specification and Technical Alignment

**Difficulty:** Intermediate | **Time:** 75-90 min

A spec is only useful if it is complete, consistent, and connects to the real system. This stage pushes you beyond filling in templates.

#### Tasks

1. **Write two feature specs** -- Pick the two most important features from your backlog. For each, copy `docs/feature-spec.md` to a new file and fill in every section.

2. **API alignment** -- One of your two specs must be for a feature that builds on the existing REST API (Challenge 1). Map the feature's requirements to specific API endpoints that exist today. Identify gaps -- what new endpoints, fields, or behaviors would the engineering team need to add? Document these as "API Change Requests" within the spec.

3. **Diagrams** -- Each spec must include at least two Mermaid diagrams: a **sequence diagram** showing system interactions, and a **state diagram** showing the lifecycle of the primary entity (e.g., a notification's states: created, sent, read, dismissed).

4. **Measurable NFRs** -- Every non-functional requirement must have a specific, testable threshold. Not "the feature should be fast" but "notification delivery latency p95 < 3 seconds measured from event trigger to client receipt."

5. **Spec review exercise** -- Open `docs/bad-feature-spec.md`. It contains a pre-written feature spec with 5 intentional problems (a missing edge case, two contradictory requirements, an undefined technical term used without explanation, an unmeasurable NFR, and a missing dependency). Find all five, document each problem, and write the corrected version.

6. **Open a Pull Request** for your specs on a branch. Write a PR description that summarizes the features and calls out open questions.

#### Verification

- Two complete feature specs exist, each with all sections filled
- One spec includes API change requests referencing specific endpoints
- Each spec has a sequence diagram and a state diagram in Mermaid
- All NFRs include measurable thresholds with units
- All 5 issues in `docs/bad-feature-spec.md` are identified and corrected
- A PR is open with a clear description

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot generates Mermaid diagrams, drafts requirement lists, and structures spec documents well. But mapping features to existing API endpoints (which requires reading Challenge 1's code or documentation), spotting contradictions between requirements, and writing NFRs that are genuinely measurable (not just rephrased vaguely) require real analytical work.

---

### Stage 4: Decision Making Under Constraints

**Difficulty:** Advanced | **Time:** 60-90 min

Real product work involves trade-offs, conflicting priorities, and imperfect information. This stage introduces all three.

#### Tasks

1. **Write 3 ADRs** -- Copy `docs/adr/0002-template.md` for each. Your ADRs must address real architectural and product decisions:
   - **ADR: Notification delivery mechanism** -- Compare WebSocket, Server-Sent Events, polling, and push notifications. Analyze each on latency, infrastructure cost, battery impact (mobile), implementation complexity, and offline behavior. Pick one and justify.
   - **ADR: Multi-tenancy strategy** -- Compare shared database, database-per-tenant, and schema-per-tenant. Analyze on data isolation, cost per tenant, migration complexity, query performance, and compliance (GDPR data separation). Pick one and justify.
   - **ADR: One additional decision** that emerged from your feature specs (e.g., real-time collaboration protocol, search engine choice, file storage strategy).

2. **Stakeholder conflict resolution** -- Open `docs/stakeholder-requests.md`. It contains 4 conflicting requests from different stakeholders (VP Engineering, CEO, Head of Support, Lead Designer), each with a cost in engineering weeks. The total budget for v2.0 is 16 engineering weeks. The requests total 28 weeks. You must decide what gets funded and what gets cut or deferred. Write a one-page decision document explaining your allocation, what trade-offs you made, and how you would communicate the "no" to each stakeholder whose request was cut.

3. **Buy-vs-build analysis** -- Pick one component from your feature specs that could be built in-house or replaced by a third-party service (e.g., notification delivery via SendGrid/Twilio vs. custom SMTP, search via Algolia vs. Elasticsearch, file storage via S3 vs. custom). Create a comparison table with: estimated build cost (weeks), monthly operating cost, vendor lock-in risk, customization flexibility, time-to-market, and ongoing maintenance burden. Make a recommendation with reasoning.

#### Verification

- 3 ADRs exist with at least 3 options each, trade-off analysis across multiple dimensions, and a justified decision
- Stakeholder allocation document exists and accounts for exactly 16 weeks (within 1 week tolerance)
- Buy-vs-build analysis includes a comparison table with at least 5 dimensions and a written recommendation
- All "no" decisions include a communication strategy

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot generates thorough pro/con lists for ADRs and can suggest cost comparisons for buy-vs-build. But deciding which stakeholder request to cut (and writing a diplomatic but honest explanation), choosing a multi-tenancy model that fits TaskFlow's specific situation, and making a buy-vs-build call with imperfect cost data are decisions that require product and business judgment.

---

### Stage 5: Release Planning and Go-to-Market

**Difficulty:** Advanced | **Time:** 60-90 min

A release plan is not just a list of features and dates. It is a risk management document, a communication tool, and a rollback strategy.

#### Tasks

1. **Complete the release plan** in `docs/release-plan.md`. Map milestones to your GitHub Milestones and Issues. Every milestone must be independently shippable -- if you stopped after milestone 1, customers would get something useful.

2. **Risk matrix** -- Replace the simple risk table with a proper probability-vs-severity matrix. Use a 3x3 or 5x5 grid. Each risk must have a probability score, severity score, composite score, mitigation plan, and trigger condition (what observable event tells you the risk is materializing).

3. **Mermaid Gantt chart** -- Add a Mermaid Gantt diagram to the release plan showing all milestones, their features, dependencies between features, and a critical path. The Gantt must reflect realistic durations (matching your stakeholder budget from Stage 4).

4. **Rollback plan** -- For each milestone, define what "rollback" means. How do you undo a shipped feature? Consider: feature flags, data migration reversal, API versioning, and customer communication. Document each in a new section of the release plan.

5. **Dual release notes** -- Write two versions of release notes for v2.0:
   - `docs/release-notes-internal.md` -- Written for the engineering team and internal stakeholders. Technical in tone, references specific issues and PRs, discusses known limitations.
   - `docs/release-notes-external.md` -- Written for customers. Focuses on benefits, new capabilities, and migration steps. No internal jargon.

6. **Post-launch monitoring spec** -- Add a section to the release plan defining what a monitoring dashboard should track in the first 2 weeks after launch. Include at least 5 metrics, each with a green/yellow/red threshold. Example: "Error rate: green < 0.5%, yellow 0.5-2%, red > 2% -- triggers incident response."

7. **Set up a GitHub Project board** -- Create a Project on GitHub. Add all your issues. Organize them by milestone and status.

#### Verification

- Release plan milestones match GitHub Milestones
- Risk matrix uses probability x severity scoring with composite scores
- Mermaid Gantt diagram renders correctly and shows dependencies
- Rollback plan covers every milestone with specific reversal steps
- Two release notes exist with clearly different tone and content
- Monitoring spec has 5+ metrics with green/yellow/red thresholds
- GitHub Project board is set up with issues organized

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot can draft release notes, generate Gantt diagram syntax, and suggest monitoring metrics. But calibrating risk probabilities to your specific project, designing realistic rollback strategies (not generic ones), writing external release notes that actually sound like they are for customers (not engineers), and setting monitoring thresholds that would trigger the right response require experience and context.

---

## Tips for Using Copilot on This Track

**Write a rough draft first, then refine with Copilot:**

- "Make this user story more specific and add acceptance criteria."
- "Rewrite this paragraph to be shorter and more direct."
- "What am I not thinking about in this feature spec?"

Copilot is better at refining your ideas than starting from nothing. Give it something to work with.

**Create GitHub Issues at scale with MCP:**

- "Read the user stories in docs/user-stories.md and create a GitHub issue for each one."
- "Add the label 'epic:collaboration' to all issues related to team features."

**Generate Mermaid diagrams:**

GitHub renders Mermaid diagrams natively in markdown. Ask Copilot to create flowcharts, sequence diagrams, or Gantt charts from plain-language descriptions.

**Use ADRs as thinking tools:**

When you are unsure about a product decision, write an ADR. The process of listing options and trade-offs often makes the right choice obvious.

**Critiquing AI-generated content:**

In the critique exercises (Stages 2 and 3), Copilot can help you spot generic problems. But the harder issues -- contradictory requirements, misaligned priorities, untestable criteria -- are things you need to catch through careful reading.

## Resources

- [Copilot Guide](../docs/copilot-guide.md)
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Troubleshooting Guide](../TROUBLESHOOTING.md)
- [Facilitator Guide](../FACILITATOR_GUIDE.md)
