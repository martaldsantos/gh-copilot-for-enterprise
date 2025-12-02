# Challenge 5: QA & Test Automation 🧪

**Difficulty**: Intermediate  
**Duration**: 4-6 hours  
**Team**: QA Engineers, SDETs, Test Automation Engineers

## 🎯 Objective

Learn how to use GitHub Copilot's **Agent mode** to accelerate test automation. You will work with **real-world open-source applications**, implement comprehensive testing strategies, and use the **Playwright MCP Server** for AI-driven browser automation.

## 📚 What You'll Learn

- Using **Agent mode** for test generation
- Creating **custom agents** for QA workflows
- Using **prompt files** for reusable test patterns
- Leveraging `#` context mentions for precise guidance
- Configuring **Playwright MCP** for AI-controlled browser testing
- Iterative test development with Agent mode

## 🛠️ Technology Stack

- **Application Under Test**: Choose from Node.js/React, Python/FastAPI, or Java/Spring
- **E2E Testing**: Playwright + Playwright MCP Server
- **AI Integration**: Playwright MCP Server (`@playwright/mcp`)
- **Unit Testing**: Jest (Node.js), Pytest (Python), or JUnit (Java)
- **Environment**: Docker & DevContainers

## 📋 Challenge Structure

This challenge is **different from other challenges**. Instead of building an application, you will:

1. **Clone a real-world open-source application**
2. **Analyze its existing test coverage**
3. **Implement comprehensive unit tests using Agent mode**
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

### Step 1: Set Up Your Testing Environment

1. Open the cloned `qa-target-app` folder in VS Code
2. If using the hackathon's DevContainer, copy the `.devcontainer` folder from the hackathon repository root
3. When prompted, click "Reopen in Container" (if using DevContainer)
4. Wait for the environment to set up

### Step 2: Configure Playwright MCP Server

Add to your VS Code settings (`.vscode/mcp.json`):

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

Restart VS Code after adding this configuration.

### Step 3: Create a QA Custom Agent

Create `.github/agents/qa-engineer.agent.md`:

```markdown
---
name: QA Engineer
description: Expert in test automation and quality assurance
tools: ['codebase', 'editFiles', 'runTerminal', 'playwright']
---

You are an expert QA engineer. When writing tests:
- Follow AAA pattern (Arrange, Act, Assert)
- Use Page Object Model for E2E tests
- Include edge cases and error scenarios
- Write descriptive test names
- Check #problems for test failures
- Reference existing tests in #codebase for patterns

For E2E tests:
- Use data-testid attributes for selectors
- Add proper waits and assertions
- Handle async operations correctly
```

### Step 4: Verify Setup

```bash
# Verify Playwright is installed
npx playwright --version

# Run the application
npm start  # or appropriate command for your app
```

---

## 📝 Phase 3: Unit Testing with Agent Mode

### Goal: Increase unit test coverage to >80%

### Step 1: Analyze Current Coverage

Use Agent mode:

```
Analyze the test coverage in #codebase:
1. Run the coverage command (npm run test -- --coverage)
2. Identify the top 5 files with lowest coverage
3. Focus on business logic and critical paths
4. Create a prioritized list of files to test
```

### Step 2: Create Reusable Test Prompt File

Create `.github/prompts/create-tests.prompt.md`:

```markdown
---
name: create-tests
description: Generate comprehensive unit tests
agent: agent
---

Generate unit tests for ${input:fileName}:

1. Analyze the file and identify all testable functions
2. Create tests with:
   - Happy path scenarios
   - Edge cases (null, empty, boundary values)
   - Error handling scenarios
3. Use AAA pattern (Arrange, Act, Assert)
4. Mock all external dependencies
5. Follow patterns from existing tests in #codebase
6. Run the tests to verify they pass

Check #problems after creating tests.
```

### Step 3: Generate Unit Tests with Agent Mode

Open Chat View (`Ctrl+Alt+I`), select **Agent**, and ask:

```
Generate comprehensive unit tests for #file:src/services/userService.ts

Include:
- Happy path for all methods
- Edge cases (null inputs, empty arrays, boundary values)
- Error handling (network failures, validation errors)
- Mocks for database and external services

Follow the testing patterns in #codebase
Run npm test after creating to verify they pass
```

### Step 4: Iterate on Coverage

```
You: Check the current test coverage for userService.ts

[Agent runs coverage command]

You: The updateUser function is not fully covered - add tests for validation errors

[Agent adds more tests]

You: Run the tests and fix any failures

[Agent runs tests, fixes issues]
```

### Copilot Tips for Unit Testing

Use context mentions for better results:

```
Based on #file:tests/example.test.ts patterns, generate 
tests for #file:src/services/orderService.ts covering 
all edge cases shown in #problems
```

---

## 🎭 Phase 4: Playwright E2E Testing

### Goal: Implement E2E tests for critical user flows

### Step 1: Initialize Playwright with Agent Mode

```
Set up Playwright for E2E testing:
1. Run npm init playwright@latest
2. Create a tests/e2e directory structure
3. Create a tests/pages directory for Page Objects
4. Generate a base Page Object class
5. Configure playwright.config.ts for this application
```

### Step 2: Create Page Objects with Agent Mode

```
Create Page Object classes for the application:

1. tests/pages/BasePage.ts - Base class with common methods
2. tests/pages/LoginPage.ts - Login page interactions
3. tests/pages/DashboardPage.ts - Main dashboard
4. tests/pages/SettingsPage.ts - User settings

Each should have:
- Locators using data-testid
- Methods for common interactions
- Proper TypeScript types
- JSDoc comments

Follow Playwright best practices.
```

**Example interaction**:

```
You: Create a LoginPage Page Object class

[Agent creates LoginPage.ts]

You: Add a method to check for validation errors on the form

[Agent updates the page object]

You: Now create a test file that uses this page object for login flows

[Agent creates login.spec.ts]
```

### Step 3: Generate E2E Tests with Prompt File

Create `.github/prompts/e2e-test.prompt.md`:

```markdown
---
name: e2e-test
description: Generate Playwright E2E tests
agent: agent
---

Create Playwright E2E tests for ${input:feature}:

1. Use Page Objects from tests/pages/
2. Test these scenarios:
   - Happy path user flow
   - Validation error handling
   - Edge cases
3. Include proper waits and assertions
4. Add descriptive test names
5. Use test.describe for grouping

Run npx playwright test after creating to verify.
```

### Step 4: Implement Critical Flow Tests

Use Agent mode:

```
Create E2E tests for these critical flows:

1. User Registration & Login
   - Successful registration
   - Login with valid credentials
   - Login with invalid credentials
   - Logout

2. Main CRUD Operations
   - Create a new item
   - View item details
   - Update an item
   - Delete an item

3. Search & Filter
   - Search by keyword
   - Filter by category
   - Sort results

4. Error Handling
   - Invalid form submissions
   - Unauthorized access attempts

Use Page Objects and follow patterns in #codebase
```

### Step 5: Run and Debug Tests

```
Run the Playwright tests:
1. Execute npx playwright test
2. If any fail, analyze the error in #problems
3. Use npx playwright test --ui for debugging
4. Fix failing tests and re-run
```

---

## 🤖 Phase 5: AI-Driven Testing with Playwright MCP

### Goal: Use Playwright MCP for AI-controlled browser exploration

With Playwright MCP configured, Copilot can actually control the browser!

### Step 1: Verify MCP is Working

In Copilot Chat, check that Playwright tools are available:

```
What Playwright MCP tools do you have access to?
```

### Step 2: AI-Driven Exploration

Ask Copilot to explore the application:

```
Using Playwright MCP, navigate to http://localhost:3000 and:
1. Take a screenshot of the homepage
2. List all clickable elements
3. Describe the main navigation structure
4. Identify any forms on the page
```

### Step 3: Generate Tests from Exploration

```
Using Playwright MCP:
1. Navigate to the login page at http://localhost:3000/login
2. Identify all form fields and buttons
3. Try submitting an empty form and capture the error
4. Generate a Playwright test that covers this validation behavior
```

### Step 4: Bug Hunting with AI

```
Using Playwright MCP, explore the user registration flow:
1. Navigate through each step
2. Take screenshots at each stage
3. Report any usability issues:
   - Missing form labels
   - Unclear error messages
   - Broken links
   - Accessibility issues
4. Create tickets for each issue found
```

### Step 5: Visual Regression Setup

```
Set up visual regression testing:
1. Navigate to key pages using Playwright MCP
2. Take baseline screenshots
3. Create a test that compares against baselines
4. Configure in playwright.config.ts
```

---

## ✅ Completion Checklist

### Setup

- [ ] Environment set up with DevContainer
- [ ] Application running locally
- [ ] Playwright MCP configured in `.vscode/mcp.json`
- [ ] QA custom agent created

### Unit Testing

- [ ] Unit test coverage analyzed
- [ ] At least 5 new unit test files created
- [ ] Coverage increased to >80%
- [ ] All tests passing

### E2E Testing

- [ ] Playwright initialized with Page Objects
- [ ] Base Page Object class created
- [ ] E2E tests for 4+ critical user flows
- [ ] All E2E tests passing

### AI-Driven Testing

- [ ] Playwright MCP verified working
- [ ] AI successfully navigated application
- [ ] Generated at least 3 tests using AI exploration
- [ ] Visual regression baselines captured

---

## 🎁 Bonus Challenges

Using Agent mode, try these:

1. **Visual Regression**: "Set up Playwright visual comparisons for all main pages"
2. **Performance Testing**: "Add performance assertions measuring load times"
3. **Accessibility Testing**: "Use Playwright's axe-core integration for accessibility scanning"
4. **API + E2E**: "Create hybrid tests that set up data via API then verify in UI"
5. **Test Data Factory**: "Create a reusable test data generator module"
6. **CI Pipeline**: "Create GitHub Actions workflow to run tests on every PR"

---

## 💡 Copilot Agentic Tips for QA

### Iterative Test Development

```
You: Create a test for the checkout flow

[Agent creates initial test]

You: The test is flaky - add better waits

[Agent improves the test]

You: Add negative test cases for invalid credit cards

[Agent adds more scenarios]

You: Run all checkout tests and fix any failures

[Agent runs and fixes]
```

### Using Context for Better Tests

```
Based on the Page Objects in #file:tests/pages/CartPage.ts 
and the patterns in #file:tests/specs/login.spec.ts, 
generate comprehensive E2E tests for the shopping cart 
feature. Check #problems for any test failures.
```

### Debugging Failures

```
This test in #file:tests/specs/checkout.spec.ts is 
failing with a timeout. Analyze the test, run it with 
trace enabled, and suggest more robust selectors and 
wait strategies.
```

---

## 📊 Success Metrics

Track your Copilot usage:

- Tests generated by Agent mode: ____%
- Number of iterations for passing tests: _____
- Coverage increase achieved: _____% → _____%
- Bugs found with AI exploration: _____
- Most helpful agent workflow: _______________

---

## 🤝 Need Help?

- **Setup issues?** Check the DevContainer logs
- **Playwright problems?** Run `npx playwright install` to ensure browsers are installed
- **MCP not working?** Verify `.vscode/mcp.json` configuration and restart VS Code
- **Test failures?** Use `npx playwright test --trace on` for debugging
- **Agent issues?** Check `#problems` for errors in generated code

---

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright MCP Server Guide](../docs/playwright-mcp-guide.md)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Copilot Agents Guide](../docs/chat-modes.md)

---

**Ready to become a test automation expert with AI assistance?** Start by choosing your target application above! 🧪🚀
