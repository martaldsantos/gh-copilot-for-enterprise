# Challenge 6: QA & Test Automation 🧪

**Difficulty**: Intermediate  
**Duration**: 4-6 hours  
**Team**: QA Engineers, SDETs, Test Automation Engineers

## 🎯 Objective

Learn how to use GitHub Copilot to accelerate test automation. You will work with **real-world open-source applications**, implement comprehensive testing strategies, and use the **Playwright MCP Server** to enable AI-driven browser automation.

## 📚 What You'll Learn

- Setting up professional test automation environments
- Using Copilot to generate unit tests with high coverage
- Implementing Page Object Model with Playwright
- Configuring Playwright MCP for AI-driven testing
- Using `/tests` command for test generation
- Using `/explain` to understand complex test scenarios

## 🛠️ Technology Stack

- **Application Under Test**: Choose from Node.js/React, Python/FastAPI, or Java/Spring
- **E2E Testing**: Playwright
- **AI Integration**: Playwright MCP Server (`@playwright/mcp`)
- **Unit Testing**: Jest (Node.js), Pytest (Python), or JUnit (Java)
- **Environment**: Docker & DevContainers

## 📋 Challenge Structure

This challenge is **different from other challenges**. Instead of building an application, you will:

1. **Clone a real-world open-source application**
2. **Analyze its existing test coverage**
3. **Implement comprehensive unit tests**
4. **Create E2E tests with Playwright**
5. **Configure AI-driven testing with Playwright MCP**

---

## 🚀 Phase 1: Choose Your Target Application

Select **ONE** of the following open-source applications to test.

### Option A: Node.js & React (Jira Clone) 🟢

**Repository**: `https://github.com/oldboyxx/jira_clone`

**Best for**: Testers comfortable with JavaScript/TypeScript and modern React UIs.

**Testing Challenges**:
- Complex UI interactions (drag & drop)
- Rich state management with React
- Real-time updates

```bash
git clone https://github.com/oldboyxx/jira_clone qa-target-app
cd qa-target-app
```

### Option B: Python (FastAPI RealWorld) 🔵

**Repository**: `https://github.com/nsidnev/fastapi-realworld-example-app`

**Best for**: Testers who prefer Python and backend API testing.

**Testing Challenges**:
- Comprehensive REST API surface
- Database state management
- Authentication flows

```bash
git clone https://github.com/nsidnev/fastapi-realworld-example-app qa-target-app
cd qa-target-app
```

### Option C: Java (Spring PetClinic) 🟠

**Repository**: `https://github.com/spring-projects/spring-petclinic`

**Best for**: Enterprise Java testers familiar with Spring ecosystem.

**Testing Challenges**:
- Server-side rendering
- Classic enterprise patterns
- Database interactions

```bash
git clone https://github.com/spring-projects/spring-petclinic qa-target-app
cd qa-target-app
```

---

## 🛠️ Phase 2: Environment Setup

### Step 1: Apply DevContainer Configuration

Copy the appropriate DevContainer configuration from this repository:

```bash
# From the hackathon root, copy the devcontainer for your chosen app
cp -r .devcontainer/qa-node-react/ qa-target-app/.devcontainer/    # For Jira Clone
cp -r .devcontainer/qa-python-fastapi/ qa-target-app/.devcontainer/ # For FastAPI
cp -r .devcontainer/qa-java-spring/ qa-target-app/.devcontainer/   # For PetClinic
```

### Step 2: Open in DevContainer

1. Open the `qa-target-app` folder in VS Code
2. When prompted, click "Reopen in Container"
3. Wait for the container to build (includes Playwright browsers)

### Step 3: Verify Setup

```bash
# Verify Playwright is installed
npx playwright --version

# Run the application
npm start  # or appropriate command for your app
```

---

## 📝 Phase 3: Unit Testing with Copilot

### Goal: Increase unit test coverage to >80%

### Step 1: Analyze Current Coverage

```bash
# Node.js
npm run test -- --coverage

# Python
pytest --cov=. --cov-report=html

# Java
./mvnw test jacoco:report
```

### Step 2: Identify Gaps

Ask Copilot to analyze coverage gaps:

```
@workspace Analyze the test coverage report and identify the top 5 files 
that need more unit tests. Focus on business logic and critical paths.
```

### Step 3: Generate Unit Tests

Use the `/tests` command on uncovered files:

1. Open a file with low coverage
2. Select the function/class to test
3. Use `/tests` in Copilot Chat
4. Review and refine generated tests

**Example prompt**:
```
Generate comprehensive unit tests for this function including:
- Happy path scenarios
- Edge cases (null, empty, boundary values)
- Error handling scenarios
Follow AAA (Arrange, Act, Assert) pattern.
```

### Copilot Tips for Unit Testing

- **Pattern recognition**: After writing one good test, Copilot will suggest similar patterns
- **Mock generation**: Ask "Generate mocks for all external dependencies in this test file"
- **Edge cases**: Ask "What edge cases am I missing for this function?"

---

## 🎭 Phase 4: Playwright E2E Testing

### Goal: Implement E2E tests for critical user flows

### Step 1: Initialize Playwright

```bash
npm init playwright@latest
```

### Step 2: Create Page Objects

Ask Copilot to generate Page Object Model classes:

```
Create a Page Object class for the login page with:
- Selectors for username, password, submit button
- Methods: login(username, password), getErrorMessage()
- Use Playwright best practices
```

**Example Page Object** (`pages/LoginPage.ts`):

```typescript
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-testid="username"]');
    this.passwordInput = page.locator('[data-testid="password"]');
    this.submitButton = page.locator('[data-testid="login-submit"]');
    this.errorMessage = page.locator('.error-message');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.textContent() ?? '';
  }
}
```

### Step 3: Implement Critical Flow Tests

Create tests for these critical flows:

1. **User Registration & Login**
2. **Main CRUD Operations** (create, read, update, delete)
3. **Search & Filter Functionality**
4. **Error Handling** (invalid inputs, unauthorized access)

### Step 4: Run Tests

```bash
# Run all tests
npx playwright test

# Run with UI mode for debugging
npx playwright test --ui

# Generate HTML report
npx playwright show-report
```

---

## 🤖 Phase 5: AI-Driven Testing with Playwright MCP

### Goal: Configure Playwright MCP Server to enable AI-controlled browser testing

The **Playwright MCP Server** allows GitHub Copilot to control a browser, navigate pages, and interact with elements autonomously.

### Step 1: Install Playwright MCP Server

The Playwright MCP server is provided by Microsoft and can be run directly via npx:

```bash
# No installation needed - run directly with npx
npx @playwright/mcp@latest
```

### Step 2: Configure MCP in VS Code

Add to your VS Code settings (`.vscode/settings.json`):

```json
{
  "mcp": {
    "servers": {
      "playwright": {
        "command": "npx",
        "args": ["@playwright/mcp@latest"]
      }
    }
  }
}
```

Alternatively, install via VS Code CLI:

```bash
code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest"]}'
```
```

### Step 3: Restart VS Code

After configuration, restart VS Code for the MCP server to be recognized.

### Step 4: Use AI-Driven Testing

Now you can ask Copilot to explore and test the application:

**Exploration prompts**:
```
Navigate to the login page at http://localhost:3000/login and describe 
all the interactive elements you find.
```

**Test generation prompts**:
```
Go to the dashboard page, identify all the main features, and generate 
Playwright tests for the top 3 user workflows you observe.
```

**Bug hunting prompts**:
```
Navigate through the user registration flow and report any usability 
issues or potential bugs you encounter.
```

### Step 5: Review and Refine

AI-generated tests are a starting point. Always:
- Review for correctness
- Add proper assertions
- Improve selector robustness
- Add meaningful test descriptions

---

## 📊 Success Metrics

Track your progress:

- [ ] Environment set up with DevContainer
- [ ] Application running locally
- [ ] Unit test coverage increased to >80%
- [ ] At least 5 new unit test files created
- [ ] Playwright initialized with Page Objects
- [ ] E2E tests for 4+ critical user flows
- [ ] Playwright MCP configured and working
- [ ] AI successfully navigated and identified elements
- [ ] Generated at least 3 tests using AI-driven approach
- [ ] All tests passing in CI-ready format

---

## 🎁 Bonus Challenges

If you finish early:

1. **Visual Regression Testing**: Set up Playwright visual comparisons
2. **Performance Testing**: Add performance assertions to E2E tests
3. **Accessibility Testing**: Use Playwright's accessibility scanning
4. **API Testing**: Combine API and E2E tests for faster feedback
5. **Test Data Factory**: Create reusable test data generators
6. **CI Pipeline**: Set up GitHub Actions to run tests automatically

---

## 💡 Copilot Tips for QA

### Generating Tests

```
# Good prompt
Generate Playwright tests for the checkout flow including:
- Adding items to cart
- Updating quantities
- Applying discount codes
- Completing purchase
Include proper waits and assertions.

# Better prompt (with context)
@workspace Based on the existing page objects in /tests/pages, 
generate E2E tests for the checkout flow following our established patterns.
```

### Debugging Failures

```
This Playwright test is failing with timeout. Analyze the test and 
suggest more robust selectors and wait strategies.
```

### Test Maintenance

```
Refactor these tests to use the Page Object Model pattern, 
extracting common selectors and actions into reusable classes.
```

---

## 🤝 Need Help?

- **Setup issues?** Check the DevContainer logs
- **Playwright problems?** Run `npx playwright install` to ensure browsers are installed
- **MCP not working?** Verify VS Code settings and restart
- **Test failures?** Use Playwright's trace viewer: `npx playwright test --trace on`
- **Stuck?** Check [Troubleshooting Guide](../../TROUBLESHOOTING.md)

---

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright MCP Server](https://github.com/anthropics/anthropic-cookbook/tree/main/misc/mcp_playwright)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Best Practices Guide](../../docs/best-practices.md)

---

**Ready to become a test automation expert with AI assistance?** Start by choosing your target application above! 🧪🚀
