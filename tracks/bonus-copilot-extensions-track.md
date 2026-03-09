# Bonus Track: Copilot Extensions Developer

**Duration:** 8-12 hours (Advanced)
**Difficulty:** Advanced
**Focus:** Building a GitHub Copilot Extension from scratch using the Copilot Extensions SDK

> ⚠️ **This is a bonus track.** It is significantly harder and longer than the standard 4-6 hour tracks. It is designed for experienced developers who have completed a standard track (or equivalent) and want a deeper challenge that goes beyond using Copilot -- to **extending** it.

## Track Overview

In the standard tracks you learned to *use* GitHub Copilot. In this bonus track, you'll build software that *becomes part of* Copilot. You'll create a fully functional **Copilot Extension** -- an agent-based backend service that users invoke directly from Copilot Chat via `@your-extension`.

Your extension will be a **Team Standup & Project Tracker Bot**: a conversational agent that helps developers log standups, query project status from GitHub's API, generate team reports, and get AI-powered recommendations -- all without leaving their editor.

## Who Is This For?

- Developers who finished a standard track and want more
- Backend engineers interested in AI-powered tooling
- Platform/DevEx engineers who want to build custom Copilot integrations
- Anyone curious about the Copilot Extensions ecosystem

## Prerequisites

- **Required:** Completion of at least one standard track (or equivalent experience)
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

## First Steps: Set Up Your Workspace

### 1. Navigate to Your Challenge

Open the folder `challenges/challenge-6-copilot-extensions/` in your workspace.

### DevContainer

A dedicated devcontainer is provided at `.devcontainer/challenge-6-copilot-extensions/`. It includes Node.js LTS, Docker-in-Docker, and GitHub CLI.

To use it, open the command palette (`F1` → **Dev Containers: Reopen in Container**) and select **challenge-6-copilot-extensions** when prompted.

### 2. Install Dependencies

```bash
cd challenges/challenge-6-copilot-extensions
npm install

```

### 3. Start the Development Server

```bash
npm run dev

```

You should see:

```text
🤖 Standup Bot Copilot Extension running on port 3000
📡 Webhook endpoint: http://localhost:3000/
🔧 Debug with: npx @copilot-extensions/gh-debug-cli@latest http://localhost:3000

```

### 4. Test Locally with the Debug CLI

In a separate terminal, run:

```bash
npx @copilot-extensions/gh-debug-cli@latest http://localhost:3000

```

This starts an interactive chat session that simulates the Copilot platform sending requests to your extension. You can type messages and see responses without registering a GitHub App.

### 5. Configure Copilot Context

Overwrite `.github/copilot-instructions.md` with instructions relevant to building Copilot Extensions. Include context about:

- The `@copilot-extensions/preview-sdk` API
- Server-Sent Events (SSE) response format
- The project structure and intent-based routing pattern

---

## Track Structure

### Your Challenge: Build a Copilot Extension -- Team Standup & Project Tracker

#### Objective

Build a fully functional Copilot Extension agent that users can invoke from Copilot Chat. The extension acts as a team standup bot that integrates with GitHub's API to provide project awareness and AI-powered analysis.

#### Requirements

Build the Standup Bot extension with the following capabilities:

---

**Phase 1: Foundation (Estimated: 2-3 hours)**

1. **Request Verification & Parsing**
 - Use `verifyAndParseRequest()` to validate that incoming requests genuinely come from GitHub
 - Extract the user's message with `getUserMessage()`
 - Extract the user's GitHub identity from the token using the Octokit client

2. **Intent-Based Routing**
 - Parse the user's message to determine what they want to do
 - Implement a command router that dispatches to handler functions based on intent:
 - `help` -- show available commands
 - `log standup` -- record a standup update
 - `show status` -- query GitHub for project status
 - `generate report` -- create a team summary
 - Handle unrecognized commands gracefully with helpful suggestions

3. **Help Command**
 - Return a well-formatted markdown response listing all commands
 - Include usage examples for each command
 - Use `createAckEvent()`, `createTextEvent()`, and `createDoneEvent()`

---

**Phase 2: Core Features (Estimated: 3-4 hours)**

4. **Standup Logging with Confirmations**
 - Parse natural language standup updates (e.g., "Yesterday I fixed the auth bug, today I'm working on the dashboard, blocked by the API rate limit issue")
 - Use the `prompt()` function from the SDK to send the raw message to the LLM and have it extract structured fields: `yesterday`, `today`, `blockers`
 - Before saving, use `createConfirmationEvent()` to ask the user to confirm the parsed standup
 - Handle the confirmation response via `getUserConfirmation()`
 - Store confirmed entries in the `StandupStore`

5. **Project Status from GitHub**
 - Use the user's token (`x-github-token` header) to authenticate Octokit
 - Fetch open issues assigned to the user
 - Fetch open pull requests authored by the user
 - Fetch recent activity (commits, reviews)
 - Format into a clear markdown summary
 - Include GitHub references using `createReferencesEvent()` so issues/PRs become clickable links in the chat

6. **Report Generation**
 - Compile all standup entries from today into a team summary
 - Use the `prompt()` function to ask the LLM to generate a human-readable narrative from the raw entries
 - Include metrics: who submitted, who hasn't, common blockers
 - Format as a professional standup report in markdown

---

**Phase 3: Advanced Features (Estimated: 2-3 hours)**

7. **AI-Powered Blocker Recommendations**
 - When a user reports blockers, use `prompt()` to analyze them
 - Cross-reference with the user's open issues and PRs from GitHub
 - Generate actionable suggestions (e.g., "Issue #42 might be related -- consider commenting there")
 - Include issue references using `createReferencesEvent()`

8. **Function Calling**
 - Define tool functions (e.g., `get_open_issues`, `search_issues`, `get_pr_status`) using the `tools` parameter in `prompt()`
 - Handle function call responses using `getFunctionCalls()`
 - Execute the requested function and feed results back to the LLM for a final answer
 - This enables the LLM to decide *when* to query GitHub rather than always doing it

9. **Error Handling & Edge Cases**
 - Use `createErrorsEvent()` for structured error reporting
 - Handle rate limiting, authentication failures, missing repos gracefully
 - Add request timeout handling
 - Implement logging for debugging

---

**Phase 4: Production-Ready (Estimated: 1-2 hours)**

10. **Testing**
 - Unit tests for intent parsing and the standup store
 - Integration tests using supertest for the HTTP endpoint
 - Mock the SDK verification for testing (skip signature verification in test mode)
 - Aim for >70% coverage

11. **Deployment to Azure**
 - Containerize the extension with a Dockerfile
 - Deploy to Azure App Service or Azure Container Apps
 - Register as a GitHub App with the Copilot Extension type
 - Configure the webhook URL to point to your deployed service
 - Test end-to-end via `@your-extension` in a real Copilot Chat session

---

#### Copilot Tips for This Challenge

**Use Copilot to build the extension itself -- meta!**

- Ask Copilot to help you implement each SDK function call
- Use `/explain` on the SDK source code to understand how events work
- Ask: *"How do I use createConfirmationEvent to confirm a standup entry before saving?"*
- Ask: *"Generate integration tests for an Express endpoint that returns Server-Sent Events"*
- Use Agent mode to scaffold the full routing structure in one go

**Debugging Tips:**

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

---

## Recommended Schedule

### Full Challenge (10-12 hours)

```text
Hour  0 -  1    Setup, explore SDK docs, run debug CLI
Hour  1 -  3    Phase 1: Verification, routing, help command
Hour  3 -  4    Break / review
Hour  4 -  7    Phase 2: Standup logging, GitHub status, reports
Hour  7 -  8    Break / review
Hour  8 - 10    Phase 3: AI analysis, function calling
Hour 10 - 12    Phase 4: Testing, deployment, registration

```

### Condensed (6-8 hours)

```text
Hour 0 - 1    Setup & Phase 1 (skip deep verification testing)
Hour 1 - 4    Phase 2: Core features (focus on standup + status)
Hour 4 - 6    Phase 3: Pick ONE advanced feature
Hour 6 - 8    Testing + deployment attempt

```

---

## Learning Outcomes

By completing this track, you will:

### Technical Skills

- Build a production-ready Copilot Extension agent
- Handle cryptographic request verification
- Work with Server-Sent Events (SSE) streaming responses
- Integrate with GitHub APIs using Octokit
- Use LLM prompting from server-side code (via the SDK's `prompt()`)
- Implement function calling to let the LLM orchestrate API calls
- Deploy a webhook-based service to Azure

### Copilot Extension Ecosystem

- Understand the Copilot Extension architecture (agent vs. skillset)
- Use all major response event types (ack, text, references, confirmations, errors, done)
- Debug extensions locally with `gh-debug-cli`
- Register and configure a GitHub App as a Copilot Extension
- Build conversational experiences inside Copilot Chat

### Copilot Mastery (Meta)

- Use Copilot to build a Copilot Extension (full-circle AI-assisted development)
- Apply Agent mode for multi-file scaffolding
- Use `/explain` on SDK internals
- Generate tests for streaming HTTP endpoints

---

## Success Metrics

Track your progress:

- [ ] Extension starts and responds to the debug CLI
- [ ] Request verification works (valid requests accepted, invalid rejected)
- [ ] Intent routing dispatches to correct handlers
- [ ] Help command returns formatted usage information
- [ ] Standup logging extracts fields and uses confirmation flow
- [ ] Project status queries GitHub Issues and PRs via Octokit
- [ ] Report generation produces an AI-narrated team summary
- [ ] At least one advanced feature (AI blocker analysis OR function calling)
- [ ] Tests pass with >70% coverage
- [ ] (Stretch) Deployed to Azure and registered as a GitHub App
- [ ] (Stretch) Working end-to-end in a real Copilot Chat session

---

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

---

## Need Help?

- **Stuck on SDK concepts?** Ask Copilot: *"Explain how createConfirmationEvent works in the Copilot Extensions SDK"*
- **Debug CLI not working?** Make sure your server is running on the expected port
- **Verification failing?** The debug CLI simulates verification -- skip it in dev mode if needed
- **Deployment issues?** Check [Troubleshooting Guide](../TROUBLESHOOTING.md)

---

Start with [Challenge 6: Copilot Extensions](../challenges/challenge-6-copilot-extensions/)
