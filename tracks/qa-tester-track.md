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

- **Application**: Choose between Node.js/React, Python/FastAPI, or Java/Spring
- **E2E Testing**: Playwright
- **AI Integration**: Playwright MCP Server
- **Environment**: Docker & DevContainers

## ⚡ First Steps: Set Up Your Workspace

### ⚠️ IMPORTANT: Create a Fresh Repository First!

> **Do NOT work directly in the hackathon repository!** The `.github/copilot-instructions.md` file there is for hackathon maintainers, not your project. Working there will confuse Copilot about your context.

**Set up your workspace:**

1. **Create a new repository** for your challenge work
2. **Copy from the hackathon repo:**
   - `.devcontainer/` folder (for consistent dev environment)
   - `challenges/challenge-5-qa/` (starter code and test templates)
3. **Create your own `.github/copilot-instructions.md`** using the example below
4. **Launch Codespace** in YOUR new repository

---

### 1. Create a `.github/copilot-instructions.md` File

This file tells Copilot about your testing context and standards.

```markdown
# Copilot Instructions for QA & Test Automation

## Project Context
- Testing Framework: [Jest/Pytest/JUnit] for unit tests
- E2E Framework: Playwright
- Application Under Test: [Jira Clone/FastAPI RealWorld/Spring PetClinic]

## Testing Standards
- Follow AAA pattern (Arrange, Act, Assert)
- Use descriptive test names that explain the scenario
- One assertion concept per test
- Mock external dependencies

## Playwright Standards
- Use page object model for maintainability
- Include proper waits (avoid arbitrary timeouts)
- Take screenshots on failure
- Test across multiple browsers when relevant

## Coverage Goals
- Unit tests: >80% code coverage
- E2E tests: All critical user flows
- Include positive and negative test cases
```

### 2. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks:

**`.github/agents/test-architect.md`**:
```markdown
# Test Architect Agent

You are an expert in test strategy and automation architecture.

## Your Expertise
- Test pyramid and coverage strategies
- Unit, integration, and E2E testing
- Test data management
- CI/CD test integration

## When Generating Tests
- Always follow AAA pattern
- Include edge cases and error scenarios  
- Use meaningful test descriptions
- Consider test maintainability
```

**`.github/agents/playwright-expert.md`**:
```markdown
# Playwright Expert Agent

You are an expert in browser automation with Playwright.

## Your Focus
- Page Object Model implementation
- Cross-browser testing
- Visual regression testing
- Performance testing with Playwright
- Handling dynamic content and waits
```

> 💡 **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance!

---

## 🗺️ Track Structure

### Your Challenge: QA & Test Automation

**Duration:** 4-6 hours  
**Focus:** Professional test automation with real-world applications

> 🎯 **This is YOUR dedicated challenge.** You'll work with real open-source applications and learn professional test automation techniques.

📖 [Start Challenge 5](../challenges/challenge-5-qa/README.md)

---

### Phase 1: Environment Setup (30 min)

Choose your target application and set up the development environment using provided DevContainers.

### Phase 2: Unit Testing Strategy (1.5 hours)

Analyze the existing codebase and use Copilot to increase unit test coverage.

### Phase 3: Playwright Automation (2 hours)

Set up Playwright and implement robust End-to-End (E2E) tests for critical user flows.

### Phase 4: AI-Driven Testing with MCP (2 hours)

Configure the **Playwright MCP Server** to allow GitHub Copilot to control the browser, explore the app, and generate tests autonomously.

---

## 🚀 Phase 1: Choose Your Target Application

Select **ONE** of the following open-source applications to test.

### Option A: Node.js & React (Jira Clone) 🟢

- **Repo**: `https://github.com/oldboyxx/jira_clone`
*   **Best for**: Testers comfortable with JavaScript/TypeScript and modern React UIs.
*   **Challenge**: Complex UI interactions (drag & drop), rich state management.

### Option B: Python (FastAPI RealWorld) 🔵
*   **Repo**: `https://github.com/nsidnev/fastapi-realworld-example-app`
*   **Best for**: Testers who prefer Python and backend API testing.
*   **Challenge**: Comprehensive API surface, database state management.

### Option C: Java (Spring PetClinic) 🟠
*   **Repo**: `https://github.com/spring-projects/spring-petclinic`
*   **Best for**: Enterprise Java testers.
*   **Challenge**: Server-side rendering, classic enterprise patterns.

### 🛠️ Setup Instructions

1.  **Clone the Repository** (locally):
    ```bash
    # For Node.js/React
    git clone https://github.com/oldboyxx/jira_clone qa-challenge
    
    # OR for Python
    git clone https://github.com/nsidnev/fastapi-realworld-example-app qa-challenge
    
    # OR for Java
    git clone https://github.com/spring-projects/spring-petclinic qa-challenge
    ```

2.  **Apply DevContainer Configuration**:
    Copy the appropriate `devcontainer.json` from this repository to your cloned folder.
    
    *From the `gh-copilot-for-enterprise` folder:*
    ```bash
    # If you chose Node.js/React
    cp -r .devcontainer/qa-node-react/. qa-challenge/.devcontainer/
    
    # If you chose Python
    cp -r .devcontainer/qa-python-fastapi/. qa-challenge/.devcontainer/
    
    # If you chose Java
    cp -r .devcontainer/qa-java-spring/. qa-challenge/.devcontainer/
    ```
    *(Note: Create the `.devcontainer` folder in `qa-challenge` if it doesn't exist)*

3.  **Open in DevContainer**:
    - Open the `qa-challenge` folder in VS Code.
    - When prompted "Folder contains a Dev Container configuration file...", click **Reopen in Container**.
    - *Or press F1 -> "Dev Containers: Reopen in Container"*

---

## 🧪 Phase 2: Unit Testing

**Goal**: Improve the test coverage of the application.

1.  **Analyze the Code**:
    Use `@workspace` to understand the project structure.
    ```
    @workspace Explain the project structure and identify key business logic files that lack unit tests.
    ```

2.  **Generate Tests**:
    Open a key file (e.g., a service or controller) and use `/tests`.
    ```
    /tests generate unit tests for this file using [Jest/Pytest/JUnit]. Mock external dependencies.
    ```

3.  **Refine & Run**:
    - Run the tests to ensure they pass.
    - Use `/fix` if any tests fail.

---

## 🎭 Phase 3: Playwright Automation

**Goal**: Implement E2E tests for a critical user flow (e.g., "Create an Issue" or "Add a Pet").

1.  **Install Playwright** (if not already installed):
    *   **Node**: `npx playwright install`
    *   **Python**: `pip install pytest-playwright && playwright install`
    *   **Java**: Follow Playwright Java docs.

2.  **Generate Test Scenarios**:
    Ask Copilot to create a test plan.
    ```
    Create a Playwright test plan for the "User Login and Profile Update" flow.
    Include positive and negative test cases.
    ```

3.  **Write the Test**:
    ```typescript
    // Create a Playwright test that:
    // 1. Navigates to the login page
    // 2. Enters valid credentials
    // 3. Verifies redirection to dashboard
    // 4. Checks for the "Welcome" message
    ```

---

## 🤖 Phase 4: AI-Driven Testing with MCP

**Goal**: Use the **Playwright MCP Server** to let Copilot control the browser.

### 1. Configure MCP Server
Add the Playwright MCP server to your VS Code configuration.

1.  Open VS Code Settings (`Ctrl+,`).
2.  Search for "MCP" or edit `settings.json`.
3.  Add the following to `"github.copilot.mcpServers"` (or equivalent config):

```json
"playwright": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-playwright"]
}
```
*Restart VS Code or Reload Window after adding this.*

### 2. Autonomous Testing
Now, use Copilot Chat to interact with the browser!

**Example Prompts:**

*   **Exploration**:
    ```
    Use the Playwright tool to navigate to http://localhost:3000 (or app port).
    Take a screenshot of the homepage.
    Click on the "Login" button.
    ```

*   **Test Generation**:
    ```
    Navigate to the "Create Issue" page.
    Fill in the form with test data.
    Submit the form.
    If successful, generate a Playwright test script based on the actions you just took.
    ```

*   **Visual Validation**:
    ```
    Go to the dashboard.
    Check if the "Project Settings" button is visible.
    Take a screenshot and analyze if the layout looks correct.
    ```

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

**Ready to start?** [Choose your app](#phase-1-choose-your-target-application) and begin! 🚀

