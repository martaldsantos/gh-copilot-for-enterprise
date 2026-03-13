# Bonus Track: Copilot SDK Developer

**Duration:** 8-12 hours (Advanced)

**Difficulty:** ⭐⭐⭐

**Focus:** Building an agentic application from scratch using the GitHub Copilot SDK

> ⚠️ **This is a bonus track.** It is significantly harder and longer than the standard 4-6 hour tracks. It is designed for experienced developers who have completed a standard track (or equivalent) and want a deeper challenge that goes beyond using Copilot -- to **building with its engine**.

## Who Is This For

- Developers who finished a standard track and want more
- Backend engineers interested in AI-powered tooling
- Platform/DevEx engineers who want to embed Copilot's agentic capabilities in custom apps
- Anyone curious about programmatic access to Copilot's agent runtime

## Prerequisites

- Completion of at least one standard track (or equivalent experience)
- Solid Node.js and TypeScript skills
- Familiarity with GitHub APIs (Issues, Pull Requests, Events)
- Understanding of event-driven and streaming patterns
- Copilot CLI installed and authenticated (`copilot --version` should work)

## Technology Stack

- **Runtime:** Node.js (LTS) with TypeScript
- **SDK:** `@github/copilot-sdk` -- programmatic access to Copilot's agent runtime (sessions, streaming, custom tools)
- **GitHub API:** `@octokit/rest` -- for querying Issues, PRs, activity
- **Copilot CLI:** Required as the backend server -- the SDK communicates with it via JSON-RPC
- **Deployment:** Azure (App Service or Container Apps) for the final application

## Getting Started

### 1. Open the Challenge

Open the folder `challenges/challenge-6-copilot-sdk/` in your workspace.

A dedicated devcontainer is provided at `.devcontainer/challenge-6-copilot-sdk/`. It includes Node.js LTS, Copilot CLI, and GitHub CLI. Open the command palette (`F1` > **Dev Containers: Reopen in Container**) and select **challenge-6-copilot-sdk** when prompted.

### 2. Install and Run

```bash
cd challenges/challenge-6-copilot-sdk
npm install
npx tsx index.ts
```

### 3. Authenticate with Copilot CLI

Make sure you are logged in via Copilot CLI before running the SDK:

```bash
copilot auth login
copilot --version
```

The SDK manages the CLI process lifecycle automatically. You do not need to start the CLI server manually.

### 4. Clean Start and Custom Instructions

Follow the [common setup steps](getting-started.md) for the clean start. Then write custom instructions relevant to building Copilot SDK applications -- include context about `CopilotClient`, session management, custom tool definitions, and the event-based streaming model.

---

## Stages

| Phase | Name | Est. Time | What You Build |
|-------|------|-----------|----------------|
| 1 | [Foundation](bonus-copilot-sdk-track/phase-1-foundation.md) | 2-3 hours | Client setup, first session, streaming responses |
| 2 | [Core Features](bonus-copilot-sdk-track/phase-2-core-features.md) | 3-4 hours | Custom tools, GitHub integration, multi-turn conversations |
| 3 | [Advanced Features](bonus-copilot-sdk-track/phase-3-advanced-features.md) | 2-3 hours | MCP server integration, custom agents, error handling |
| 4 | [Production-Ready](bonus-copilot-sdk-track/phase-4-production.md) | 1-2 hours | Testing, packaging, Azure deployment |

## Tips for Using Copilot on This Track

**Use Copilot to build a Copilot-powered app -- meta!**

- Ask Copilot to help you define custom tool schemas for the SDK
- Use `/explain` on the SDK types to understand the session event model
- Ask: *"How do I define a custom tool that fetches open GitHub issues for a user?"*
- Use Agent mode to scaffold the full tool registration and event handling in one go

## Resources

### Copilot SDK

- [Copilot SDK Repository](https://github.com/github/copilot-sdk) -- source code, docs, and examples for all languages
- [Getting Started Guide](https://docs.github.com/en/copilot/how-tos/copilot-sdk/sdk-getting-started) -- official quickstart
- [SDK Blog Post](https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/) -- architecture overview and use cases
- [Copilot SDK Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk) -- practical recipes for common patterns
- [Node.js Custom Instructions](https://github.com/github/awesome-copilot/blob/main/instructions/copilot-sdk-nodejs.instructions.md) -- Copilot instructions tuned for Node.js SDK development

### GitHub Documentation

- [Copilot CLI Installation](https://docs.github.com/en/copilot/how-tos/copilot-cli/install-copilot-cli)
- [Copilot SDK Overview](https://docs.github.com/en/copilot/how-tos/copilot-sdk)
- [Premium Requests and Billing](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)

### General

- [Copilot Guide](../docs/copilot-guide.md)
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Troubleshooting Guide](../TROUBLESHOOTING.md)
