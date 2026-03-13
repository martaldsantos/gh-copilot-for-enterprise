# Getting Started

These steps apply to every track. Complete them before starting your first stage.

## 1. Clean Start (CRITICAL)

The `.github/` directory contains instructions, agents, and skills used by the hackathon organizers. Run the cleanup script to reset it before you begin.

**Linux / macOS / Codespaces:**

```bash
./scripts/clean-start.sh
```

**Windows (PowerShell):**

```powershell
.\scripts\clean-start.ps1
```

This empties `.github/copilot-instructions.md`, removes existing agents and skills, and detaches the git remote so you don't accidentally push to the template repo.

## 2. Create Your Custom Instructions

`.github/copilot-instructions.md` tells Copilot about your project context and preferences. **Your goal is to create your own custom instructions file -- do not copy someone else's.**

Every track involves a different technology stack, so the specifics vary. At a minimum, include:

- Project context (framework, language, architecture)
- Coding standards and conventions
- What kind of output you expect (code style, testing approach, documentation)

Your track file lists suggestions specific to your domain.

## 3. Create Custom Agents (`.github/agents/`)

Agents are specialized Copilot personas for different tasks. Create `.md` files in `.github/agents/` to define them. **Your goal is to create agents that match your workflow.**

**What to include in each agent:**

- Clear description of the agent's expertise
- Specific instructions for the kind of output it should generate
- References to your project's patterns and conventions

Your track file suggests specific agents for your domain.

> Check out [github/awesome-copilot](https://github.com/github/awesome-copilot) for real-world examples of custom instructions and agent templates.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance.

## 4. Open the Challenge

Each track maps to a challenge folder under `challenges/`. Your track file tells you which folder to navigate to and what files to open first.
