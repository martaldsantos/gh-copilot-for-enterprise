# QA Tester Track 🧪

**Duration:** 6-8 hours  
**Difficulty:** Intermediate to Advanced  
**Focus:** Test automation, quality assurance, and testing best practices with GitHub Copilot

## 🎯 Track Overview

This track is designed for QA Engineers and Test Automation specialists. Unlike other tracks that build from scratch, you will **work with a real-world open-source application**. You will set up a professional testing environment, implement unit tests, and use **Playwright with the Model Context Protocol (MCP)** to let AI autonomously test the application.

## 👥 Who Is This For?

- QA Engineers & SDETs
- Test Automation Engineers
- Manual testers transitioning to automation

## 🛠️ Technology Stack

- **Application**: .NET 9.0 / ASP.NET Core + .NET Aspire (eShop)
- **Language**: C# (application and unit tests), TypeScript (E2E tests)
- **Unit Testing**: xUnit
- **E2E Testing**: Playwright (TypeScript)
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

1.  **Clone the eShop application** (a real-world .NET Aspire reference app)
2.  **Remove existing tests** (to simulate a legacy app without coverage)
3.  **Choose your testing path** (Unit Tests, E2E Tests, or both)
4.  **Use AI-driven testing with Playwright MCP**

> **Choose your scope:** You can do **Path A** (Unit Tests), **Path B** (E2E Tests), or **both**. Completing both paths earns bonus points!

#### 🚀 Phase 1: Setup Target Application

You will be testing **[eShop](https://github.com/dotnet/eShop)**, a .NET Aspire reference application with a microservices architecture.

> ⚠️ **Setup note**: eShop uses .NET Aspire and Docker. The initial setup takes a few minutes as it pulls container images and starts multiple services. Be patient during first launch.

1.  **Clone the Repository**:
    In your challenge repository, clone the eShop app:
    ```bash
    git clone https://github.com/dotnet/eShop.git app
    cd app && git checkout 5624ad564d1602a927879df32a79b94522eb6101
    ```

2.  **Clean Up Existing Tests**:
    We want YOU to write the tests. Delete the existing test folders:
    ```bash
    rm -rf app/tests app/e2e
    ```

3. **Remove Test Projects from Solution**:
    Open `app/eShop.slnx` and remove the test projects from the solution file. This simulates a legacy codebase without tests. Remove these lines and save:

    ```xml
    <Folder Name="/tests/">
      <Project Path="tests/Basket.UnitTests/Basket.UnitTests.csproj" />
      <Project Path="tests/Catalog.FunctionalTests/Catalog.FunctionalTests.csproj" />
      <Project Path="tests/Ordering.FunctionalTests/Ordering.FunctionalTests.csproj" />
      <Project Path="tests/Ordering.UnitTests/Ordering.UnitTests.csproj" />
      <Project Path="tests/ClientApp.UnitTests/ClientApp.UnitTests.csproj" />
    </Folder>
    ```

4. **Remove Test Projects from solution files**:
    Also delete from the `app/eShop.slnf` file the references to the test projects. Remove these lines and save:

    ```text
    "tests\\Basket.UnitTests\\Basket.UnitTests.csproj",
    "tests\\Catalog.FunctionalTests\\Catalog.FunctionalTests.csproj",
    "tests\\Ordering.FunctionalTests\\Ordering.FunctionalTests.csproj",
    "tests\\Ordering.UnitTests\\Ordering.UnitTests.csproj"
    ```

5.  **Verify Application Runs**:
    ```bash
    cd app
    dotnet restore eShop.Web.slnf
    dotnet dev-certs https --trust
    dotnet run --project src/eShop.AppHost/eShop.AppHost.csproj
    ```
    The Aspire dashboard URL will appear in the terminal output. Open it in your browser to see all services. The web app frontend will be available from the dashboard resources view.

#### 🚀 Phase 2 — Path A: Unit Testing with Copilot (C# / xUnit)

**Goal**: Add unit tests for the application's domain and service logic using C# and xUnit.

1.  **Create Test Project**:
    Ask Copilot: "Create a new xUnit test project named 'UnitTests' in the 'tests' folder and add a reference to one of the service projects (e.g., Basket.API or Catalog.API)."

2.  **Generate Tests**:
    Explore the `src/` folder and open a service file (e.g., a gRPC service or API endpoint handler).
    Ask Copilot: "Generate comprehensive unit tests for this service, covering edge cases and mocking dependencies."

3.  **Expand Coverage**:
    Ask Copilot to generate tests for additional services across the microservices (e.g., Basket, Catalog, Ordering).

#### 🚀 Phase 3 — Path B: E2E Testing with Playwright (TypeScript)

**Goal**: Create end-to-end tests for the shopping flow using TypeScript and Playwright.

> **Note:** The starter code in `challenges/challenge-5-qa/tests/` provides a TypeScript Playwright scaffolding with Page Object pattern examples. Playwright tests interact with the app through the browser, so it doesn't matter that the app is written in C#.

1.  **Setup Playwright**:
    Navigate to `challenges/challenge-5-qa/` and run:
    ```bash
    npm install
    npx playwright install
    ```

2.  **Update Configuration**:
    Open `playwright.config.ts` and update `baseURL` to match your running eShop webapp URL (check the Aspire dashboard for the correct port).

3.  **Generate E2E Tests**:
    Use the starter Page Object classes as reference. Ask Copilot: "Create a Playwright test that:
    1. Goes to the eShop homepage
    2. Browses the catalog
    3. Adds an item to the basket
    4. Logs in
    5. Verifies the item is in the basket"

4.  **Add More Page Objects**:
    Ask Copilot to create additional Page Objects (e.g., `CatalogPage.ts`, `BasketPage.ts`) following the pattern in `BasePage.ts`.

#### 🚀 Phase 4: AI-Driven Testing (MCP)

**Goal**: Use the Playwright MCP server to let Copilot explore the app autonomously.

1.  **Configure MCP**:
    Ensure the Playwright MCP server is configured in your VS Code settings (see the [Playwright MCP Guide](../challenges/challenge-5-qa/docs/playwright-mcp-guide.md)).

2.  **Autonomous Exploration**:
    Ask Copilot: "Use Playwright to navigate to the eShop web app URL, take a snapshot, and describe the main page elements you see."

3.  **AI-Generated Tests**:
    Ask Copilot: "Navigate through the catalog and shopping flow, then generate Playwright test scripts for the scenarios you observed."

#### 💡 Copilot Tips

- **Use Agent Mode**: Open Chat View (`Ctrl+Alt+I`) and select **Agent** to generate test suites.
- **Iterate**: Ask Copilot to "Create a test plan for the login flow" and then implement it.
- **MCP**: Use the Playwright MCP to let Copilot interact with the browser directly.
- **Context**: Keep the source file you want to test open when asking Copilot to write unit tests.

**Copilot Skills You'll Learn:**
- Test generation and refactoring (C# xUnit and/or TypeScript Playwright)
- AI-driven browser automation via MCP
- Page Object Model pattern

## 📊 Success Metrics

- [ ] eShop application running locally (Aspire dashboard accessible)
- [ ] **Path A**: Added at least 5 meaningful xUnit unit tests for domain/service logic
- [ ] **Path B**: Created at least 1 robust E2E test suite with Playwright (TypeScript)
- [ ] Successfully used Playwright MCP to control the browser via Chat
- [ ] Generated a test script from MCP-observed behavior

## 💡 Pro Tips

- **Context is King**: When asking Copilot to write tests, keep the file you want to test open.
- **MCP Debugging**: If the MCP tool fails, check the "Output" panel in VS Code and select "GitHub Copilot MCP" to see logs.
- **Port Forwarding**: Ensure the application port is forwarded in the DevContainer so the headless browser (and you) can access it.
- **Aspire Dashboard**: Use the Aspire dashboard to monitor all microservices and find the correct URLs for each service.

---

**Ready to start?** [Set up the app](#-phase-1-setup-target-application) and begin! 🚀

