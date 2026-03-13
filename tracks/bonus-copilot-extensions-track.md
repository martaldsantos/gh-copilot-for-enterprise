# Bonus Track: Copilot Extensions Developer

**Duration:** 8-12 hours (Advanced)
**Difficulty:** ★★★
**Focus:** Building a GitHub Copilot Extension from scratch using the Copilot Extensions SDK

> ⚠️ **This is a bonus track.** It is significantly harder and longer than the standard 4-6 hour tracks. It is designed for experienced developers who have completed a standard track (or equivalent) and want a deeper challenge that goes beyond using Copilot -- to **extending** it.

## Who Is This For

- Developers who finished a standard track and want more
- Backend engineers interested in AI-powered tooling
- Platform/DevEx engineers who want to build custom Copilot integrations
- Anyone curious about building Copilot Extensions

## Prerequisites

- Completion of at least one standard track (or equivalent experience)
- Solid Node.js and Express.js skills
- Familiarity with GitHub APIs (Issues, Pull Requests, Events)
- Understanding of streaming HTTP responses (Server-Sent Events)
- Basic understanding of cryptographic signature verification concepts

## Technology Stack

- **Runtime:** Node.js with Express.js
- **SDK:** `@copilot-extensions/preview-sdk` -- handles request verification, response formatting, and LLM prompting
- **GitHub API:** `@octokit/rest` -- for querying Issues, PRs, activity
- **Debugging:** `@copilot-extensions/gh-debug-cli` -- local testing without registering a GitHub App
- **Deployment:** Azure (App Service or Container Apps) for the final registered extension

## Getting Started

### 1. Open the Challenge

Open the folder `challenges/challenge-6-copilot-extensions/` in your workspace.

A dedicated devcontainer is provided at `.devcontainer/challenge-6-copilot-extensions/`. It includes Node.js LTS, Docker-in-Docker, and GitHub CLI. Open the command palette (`F1` > **Dev Containers: Reopen in Container**) and select **challenge-6-copilot-extensions** when prompted.

### 2. Install and Run

```bash
cd challenges/challenge-6-copilot-extensions
npm install
npm run dev
```

### 3. Test Locally with the Debug CLI

In a separate terminal:

```bash
npx @copilot-extensions/gh-debug-cli@latest http://localhost:3000
```

This starts an interactive chat session that simulates the Copilot platform sending requests to your extension.

### 4. Clean Start and Custom Instructions

Follow the [common setup steps](getting-started.md) for the clean start. Then write new instructions relevant to building Copilot Extensions -- include context about the `@copilot-extensions/preview-sdk` API, Server-Sent Events response format, and the project's intent-based routing pattern.

---

## Stages

| Phase | Name | Est. Time | What You Build |
|-------|------|-----------|----------------|
| 1 | [Foundation](bonus-copilot-extensions-track/phase-1-foundation.md) | 2-3 hours | Request verification, intent routing, help command |
| 2 | [Core Features](bonus-copilot-extensions-track/phase-2-core-features.md) | 3-4 hours | Standup logging, GitHub status, report generation |
| 3 | [Advanced Features](bonus-copilot-extensions-track/phase-3-advanced-features.md) | 2-3 hours | Blocker recommendations, function calling, error handling |
| 4 | [Production-Ready](bonus-copilot-extensions-track/phase-4-production.md) | 1-2 hours | Testing, Azure deployment, GitHub App registration |

## Tips for Using Copilot on This Track

**Use Copilot to build the extension itself -- meta!**

- Ask Copilot to help you implement each SDK function call
- Use `/explain` on the SDK source code to understand how events work
- Ask: *"How do I use createConfirmationEvent to confirm a standup entry before saving?"*
- Use Agent mode to scaffold the full routing structure in one go

**Debugging:**

- The `gh-debug-cli` tool is essential -- use it constantly during development
- Add `console.log` in your handlers to see the raw parsed payload
- If verification fails locally, the debug CLI handles it for you

**SDK Quick Reference:**

```javascript
// Verify & parse
const { isValidRequest, payload } = await verifyAndParseRequest(body, sig, keyId, { token });

// Get user message
const message = getUserMessage(payload);

// Build response stream
res.write(createAckEvent());                        // Acknowledge (once)
res.write(createTextEvent("Hello **world**!"));     // Text (multiple OK)
res.write(createReferencesEvent([...]));            // References (multiple OK)
res.write(createConfirmationEvent({...}));          // Confirmation (once)
res.write(createDoneEvent());                       // Done (once, last)

// LLM prompt
const { message } = await prompt("Analyze this", { token, model: "gpt-4o" });

// Function calling
const result = await prompt({ token, model: "gpt-4o", tools: [...], messages: [...] });
const calls = getFunctionCalls(result);
```

## Resources

### Copilot Extensions SDK

- [Preview SDK Repository](https://github.com/copilot-extensions/preview-sdk.js) -- API reference and source code
- [Debug CLI](https://github.com/copilot-extensions/gh-debug-cli) -- Local testing tool
- [Blackbeard Example](https://github.com/copilot-extensions/blackbeard-extension) -- Simple "Hello World" extension
- [Function Calling Example](https://github.com/copilot-extensions/function-calling-extension) -- Extension with tool use
- [RAG Extension Example](https://github.com/copilot-extensions/rag-extension) -- Extension with retrieval-augmented generation

### GitHub Documentation

- [About Building Copilot Extensions](https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions)
- [Setting Up Copilot Extensions](https://docs.github.com/en/copilot/building-copilot-extensions/setting-up-copilot-extensions)
- [Configuring Your Agent to Communicate with the Copilot Platform](https://docs.github.com/en/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/configuring-your-copilot-agent-to-communicate-with-the-copilot-platform)
- [Configuring Your Agent to Communicate with GitHub](https://docs.github.com/en/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/configuring-your-copilot-agent-to-communicate-with-github)

### General

- [Copilot Guide](../docs/copilot-guide.md)
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Troubleshooting Guide](../TROUBLESHOOTING.md)
