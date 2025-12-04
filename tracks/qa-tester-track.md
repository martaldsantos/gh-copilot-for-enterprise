# QA Tester Track 🧪

**Duration:** 6-8 hours  
**Difficulty:** Intermediate  
**Focus:** Test automation, quality assurance, and testing best practices with GitHub Copilot

## 🎯 Track Overview

This track is designed for QA Engineers and Test Automation specialists. Unlike other tracks that build from scratch, you will **work with a real-world open-source application**. You will set up a professional testing environment, implement unit tests, and use **Playwright with the Model Context Protocol (MCP)** to let AI autonomously test the application.

## 👥 Who Is This For?

- QA Engineers & SDETs
- Test Automation Engineers
- Manual testers transitioning to automation

## 🛠️ Technology Stack

- **Application**: .NET 8.0 / ASP.NET Core (eShopOnWeb)
- **Language**: C#
- **Unit Testing**: xUnit
- **E2E Testing**: Playwright (Node.js or .NET)
- **AI Integration**: Playwright MCP Server
- **Environment**: Docker & DevContainers

## ⚡ First Steps: Set Up Your Workspace

### 1. Configure Copilot Context (CRITICAL)

The file `.github/copilot-instructions.md` currently contains instructions for the hackathon organizers. **You must overwrite this file** with instructions relevant to your specific project.

1. Open `.github/copilot-instructions.md`.
2. **Delete its entire contents.**
3. Use the example below as a starting point for your new instructions.

> 💡 **Why?** If you don't do this, Copilot will think it's helping organize a hackathon instead of helping you write code!

### 2. Navigate to Your Challenge

Open the folder `challenges/challenge-5-qa/` in your workspace. This is where you will be working.

---

### 3. Create Your Custom Instructions

This file tells Copilot about your testing context and standards. **Your goal is to create your own custom instructions file.**

**What to include:**
- Testing frameworks in use (Jest, Pytest, Playwright, etc.)
- Testing standards (AAA pattern, naming conventions)
- Coverage goals and quality metrics
- E2E testing approach and patterns

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for real-world examples of custom instruction files and best practices.

### 2. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**
- **Test Architect Agent** - Expert in test strategy, coverage, and automation frameworks
- **Playwright Expert Agent** - Specialized in browser automation and E2E testing
- **Performance Tester Agent** - Focused on load testing and performance analysis

**What to include in each agent:**
- Clear description of the agent's testing expertise
- Specific instructions for test generation and patterns
- References to your test infrastructure and standards

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for custom agent templates and ideas.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance!

---

## 🗺️ Track Structure

### Your Challenge: QA & Test Automation
**Duration:** 4-6 hours  
**Focus:** Professional test automation with real-world applications

#### 🎯 Objective

Learn how to use GitHub Copilot's **Agent mode** to accelerate test automation. You will work with **real-world open-source applications**, implement comprehensive testing strategies, and use the **Playwright MCP Server** for AI-driven browser automation.

#### 📋 Challenge Structure

This challenge is **different from other challenges**. Instead of building an application, you will:

1.  **Clone the eShopOnWeb application**
2.  **Remove existing tests** (to simulate a legacy app without coverage)
3.  **Implement comprehensive unit tests using Agent mode**
4.  **Create E2E tests with Playwright**
5.  **Configure AI-driven testing with Playwright MCP**

#### 🚀 Phase 1: Setup Target Application

You will be testing **eShopOnWeb**, a reference .NET application.

1.  **Clone the Repository**:
    In your challenge repository, clone the eShopOnWeb app:
    ```bash
    git clone https://github.com/NimblePros/eShopOnWeb.git app
    ```

2.  **Clean Up Existing Tests**:
    We want YOU to write the tests. Delete the existing test folder:
    ```bash
    rm -rf app/tests
    ```

3.  **Verify Application Runs**:
    ```bash
    cd app
    dotnet restore Everything.sln
    dotnet run --project src/Web/Web.csproj
    ```
    (Verify it runs on localhost:5001 or similar)

#### 🚀 Phase 2: Unit Testing with Copilot

**Goal**: Add unit tests for the `Core` project (Domain logic).

1.  **Create Test Project**:
    Ask Copilot: "Create a new xUnit test project named 'UnitTests' in the 'tests' folder and add a reference to the 'ApplicationCore' project."

2.  **Generate Tests**:
    Open `src/ApplicationCore/Services/BasketService.cs` (or similar service).
    Ask Copilot: "Generate comprehensive unit tests for BasketService, covering edge cases and mocking dependencies."

#### 🚀 Phase 3: E2E Testing with Playwright

**Goal**: Create end-to-end tests for the shopping flow.

1.  **Setup Playwright**:
    Ask Copilot: "How do I initialize a Playwright project for .NET (or Node.js) in a 'tests/e2e' folder?"

2.  **Generate E2E Tests**:
    Ask Copilot: "Create a Playwright test that:
    1. Goes to the homepage
    2. Adds an item to the basket
    3. Logs in with default credentials
    4. Verifies the item is in the basket"

#### 🚀 Phase 4: AI-Driven Testing (MCP)

**Goal**: Use the Playwright MCP server to let Copilot explore the app.

1.  **Configure MCP**:
    Ensure the Playwright MCP server is configured in your VS Code settings (see instructions below).

2.  **Autonomous Testing**:
    Ask Copilot: "Use Playwright to navigate to the homepage, take a screenshot, and check if the 'Login' button is visible."

#### 💡 Copilot Tips

- **Use Agent Mode**: Open Chat View (`Ctrl+Alt+I`) and select **Agent** to generate test suites.
- **Iterate**: Ask Copilot to "Create a test plan for the login flow" and then implement it.
- **MCP**: Use the Playwright MCP to let Copilot interact with the browser directly.

**Copilot Skills You'll Learn:**
- Test generation and refactoring
- AI-driven browser automation

## 📊 Success Metrics

- [ ] Application running in DevContainer.
- [ ] Added at least 5 meaningful unit tests.
- [ ] Created 1 robust E2E test suite with Playwright.
- [ ] Successfully used Playwright MCP to control the browser via Chat.
- [ ] Generated a test script using MCP actions.

## 💡 Pro Tips

- **Context is King**: When asking Copilot to write tests, keep the file you want to test open.
- **MCP Debugging**: If the MCP tool fails, check the "Output" panel in VS Code and select "GitHub Copilot MCP" to see logs.
- **Port Forwarding**: Ensure the application port is forwarded in the DevContainer so the headless browser (and you) can access it.

---

**Ready to start?** [Clone the app](#phase-1-setup-target-application) and begin! 🚀

---

**Ready to start?** [Choose your app](#phase-1-choose-your-target-application) and begin! 🚀

