# QA Tester Track

**Duration:** 6-8 hours
**Difficulty:** Intermediate to Advanced (progressive stages)
**Focus:** Test automation, quality assurance, and testing best practices with GitHub Copilot

## Who Is This For

- QA Engineers & SDETs
- Test Automation Engineers
- Manual testers transitioning to automation

## Prerequisites

<!-- TODO: fill in -->

## Technology Stack

- **Application**: .NET 9.0 / ASP.NET Core + .NET Aspire (eShop)
- **Language**: C# (application and unit tests), TypeScript (E2E tests)
- **Unit Testing**: xUnit
- **E2E Testing**: Playwright (TypeScript)
- **AI Integration**: Playwright MCP Server
- **Environment**: Docker & DevContainers

## Getting Started

### 1. Configure Copilot Context (CRITICAL)

The file `.github/copilot-instructions.md` currently contains instructions for the hackathon organizers. **You must overwrite this file** with instructions relevant to your specific project.

1. Open `.github/copilot-instructions.md`.
2. **Delete its entire contents.**
3. Write your own instructions following the guidance below.

> **Why?** If you don't do this, Copilot will think it's helping organize a hackathon instead of helping you write code!

### 2. Create Your Custom Instructions

This file tells Copilot about your testing context and standards. **Your goal is to create your own custom instructions file.**

**What to include:**

- Testing frameworks in use (Jest, Pytest, Playwright, etc.)
- Testing standards (AAA pattern, naming conventions)
- Coverage goals and quality metrics
- E2E testing approach and patterns

### 3. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**

- **Test Architect Agent** -- Expert in test strategy, coverage, and automation frameworks
- **Playwright Expert Agent** -- Specialized in browser automation and E2E testing
- **Performance Tester Agent** -- Focused on load testing and performance analysis

**What to include in each agent:**

- Clear description of the agent's testing expertise
- Specific instructions for test generation and patterns
- References to your test infrastructure and standards

> Check out [github/awesome-copilot](https://github.com/github/awesome-copilot) for real-world examples of custom instructions and agent templates.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance.

### 4. Open the Challenge

Navigate to `challenges/challenge-5-qa/`. Unlike other challenges, you will test an existing application (eShop) rather than building one.

#### Setup: Target Application

You will be testing **[eShop](https://github.com/dotnet/eShop)**, a .NET Aspire reference application with a microservices architecture.

> ⚠️ **Setup note**: eShop uses .NET Aspire and Docker. The initial setup takes a few minutes as it pulls container images and starts multiple services. Be patient during first launch.

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/dotnet/eShop.git app
    cd app && git checkout 5624ad564d1602a927879df32a79b94522eb6101
    ```

2. **Clean Up Existing Tests**:

    ```bash
    rm -rf app/tests app/e2e
    ```

3. **Remove Test Projects from Solution**:
    Open `app/eShop.slnx` and remove the test projects from the solution file.

4. **Remove from solution filter**:
    Also delete test project references from `app/eShop.slnf`.

5. **Verify Application Runs**:

    ```bash
    cd app
    dotnet restore eShop.Web.slnf
    dotnet dev-certs https --trust
    dotnet run --project src/eShop.AppHost/eShop.AppHost.csproj
    ```

    Open the Aspire dashboard URL from terminal output. Update `baseURL` in `playwright.config.ts` to match your running eShop webapp URL.

6. **Install Playwright**:

    ```bash
    cd challenges/challenge-5-qa
    npm install
    npx playwright install
    ```

---

## Stages

| Stage | Name | Difficulty | Est. Time | Key Deliverable |
|-------|------|------------|-----------|----------------|
| 1 | Setup and Debug Starter Tests | Intermediate | 60-75 min | Fix 3 bugs in LoginPage, adapt selectors, add test cases |
| 2 | Page Object Expansion and Shopping Flow | Intermediate | 60-90 min | CatalogPage, BasketPage, full E2E shopping test, fixtures |
| 3 | Cross-Browser, Mobile, and Resilience | Advanced | 60-90 min | Tests pass on 3 browsers + mobile, network throttling, visual comparison |
| 4 | AI-Driven Testing and Hybrid Approach | Advanced | 60-90 min | MCP-generated tests, API+UI hybrid tests, data consistency verification |
| 5 | Quality Gates, Reporting, and CI | Advanced | 60-90 min | GitHub Actions CI, custom markdown reporter, flakiness analysis, test strategy |

Copilot generates test boilerplate efficiently, but Stage 1 starts with debugging intentionally broken code, and later stages require cross-browser troubleshooting and test strategy decisions.

> **Short on time?** Skip mobile and visual comparison in Stage 3, do only MCP exploration in Stage 4, and focus on the CI workflow only in Stage 5.

### Stage 1: Setup and Debug Starter Tests

**Difficulty:** Intermediate | **Time:** 60-75 min

The starter code in `tests/pages/LoginPage.ts` contains 3 intentional bugs. Your first task is to find and fix them.

#### Tasks

1. **Bug hunt**: Run the existing login tests. They will fail. Open `tests/pages/LoginPage.ts` and find all 3 bugs:
   - A selector that targets a non-existent element (causes timeout)
   - A missing `await` that causes a race condition (causes flaky failures)
   - An incorrect method call that throws instead of returning null (causes crash on error case)
   Fix each bug and document what was wrong and why.
2. **Adapt selectors**: Update all LoginPage selectors to match the actual eShop application. Inspect the app in a browser to find the correct selectors.
3. **Add test cases**: Add 3 new test cases to `login.spec.ts` beyond the existing ones. Consider: session timeout behavior, password visibility toggle, login with special characters.

#### Verification

- All login tests pass consistently (run 3 times with zero flakes)
- All 3 bugs are documented in code comments
- 3 new test cases added and passing

---

### Stage 2: Page Object Expansion and Shopping Flow

**Difficulty:** Intermediate | **Time:** 60-90 min

Build out the test infrastructure for a complete shopping flow.

#### Tasks

1. Create CatalogPage, ProductDetailPage, and BasketPage following the BasePage pattern. Start from the skeleton in `tests/pages/CatalogPage.ts`.
2. Write a complete E2E test: browse catalog, view product detail, add to basket, verify basket contents.
3. Create custom Playwright test fixtures in `tests/fixtures/auth.fixture.ts`: one fixture for authenticated scenarios (pre-logged-in), one for unauthenticated.
4. Data-driven tests: test adding 5 different products with different quantities using Playwright's parameterized test feature.

#### Verification

- Shopping flow test passes end-to-end
- Custom fixtures correctly manage authentication state
- All 5 parameterized product variants pass
- Page objects follow the BasePage pattern consistently

---

### Stage 3: Cross-Browser, Mobile, and Resilience

**Difficulty:** Advanced | **Time:** 60-90 min

Real-world tests must work across browsers and handle network issues.

#### Tasks

1. Run the full test suite on Chromium, Firefox, and WebKit. Fix any browser-specific failures.
2. Add mobile viewport tests using the Pixel 5 and iPhone 12 emulation profiles. Verify responsive behavior: hamburger menu, touch-friendly tap targets, scrollable content.
3. Network resilience: test application behavior under slow 3G conditions (use Playwright's `route.fulfill` or network throttling). Test graceful handling when an API returns 500.
4. Visual comparison: screenshot key pages (catalog, product detail, basket) on each browser. Save screenshots for manual comparison of layout differences.

#### Verification

- Test report shows all 3 browsers plus mobile passing
- Slow network test completes within timeout
- API error handling test verifies user-facing error message
- Visual comparison screenshots are saved in a `screenshots/` directory

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot generates browser configuration and network throttling code well. But debugging why a test passes on Chromium but fails on WebKit (often timing or rendering differences) requires understanding browser-specific behavior. Visual comparison is inherently manual.

---

### Stage 4: AI-Driven Testing and Hybrid Approach

**Difficulty:** Advanced | **Time:** 60-90 min

Combine AI-driven exploration with traditional test automation.

#### Tasks

1. **Configure Playwright MCP**: Set up the Playwright MCP server following the guide in `docs/playwright-mcp-guide.md`.
2. **MCP-generated test**: Ask Copilot with MCP to autonomously navigate the checkout flow, observe the application, and generate a Playwright test script from what it observes.
3. **Comparison document**: Run both the MCP-generated test and an equivalent manually-written test. Write a short document comparing: reliability (which is more stable?), coverage (which catches more?), maintainability (which is easier to update?).
4. **Hybrid API+UI test**: Write a test that combines API calls with UI verification in the same spec. Example: add item to basket via UI, verify basket state via direct API call, remove item via API, verify UI updates.
5. **Data consistency test**: Create a test that adds an item via UI, verifies the backend state via API, removes via API, and checks that the UI reflects the change.

#### Verification

- MCP-generated test runs and passes
- Comparison document exists with observations on reliability, coverage, and maintainability
- Hybrid test exercises both API and UI layers in the same spec
- Data consistency test verifies round-trip between UI and API

---

### Stage 5: Quality Gates, Reporting, and CI

**Difficulty:** Advanced | **Time:** 60-90 min

Production-grade test infrastructure with CI integration and analysis.

#### Tasks

1. **GitHub Actions CI**: Create a workflow that runs the full Playwright test suite on every PR. Include browser installation, application startup, test execution, and artifact upload for reports.
2. **Custom reporter**: Implement the skeleton in `reporters/markdown-reporter.ts`. The reporter should generate a markdown summary with: total pass/fail counts, duration per test, screenshots of failures (embedded as links), and a flakiness score.
3. **Performance assertions**: Measure and assert page load times using Playwright timing APIs. Catalog page must load in under 3 seconds, product detail in under 2 seconds.
4. **Flakiness analysis**: Run the full suite 10 times. Identify any flaky tests. For each flaky test, either fix the root cause or quarantine it with `test.fixme()` and a documented reason.
5. **Test strategy document**: Complete the template in `docs/test-strategy-template.md`. Prioritize testing based on business risk (payment flow testing is higher priority than profile settings). Include a traceability matrix mapping user stories to test cases.

#### Verification

- GitHub Actions YAML is valid and includes all required steps
- Custom reporter generates a markdown summary when tests run
- Performance assertions are enforced (tests fail if page load exceeds threshold)
- Flakiness report shows results from 10 runs with analysis
- Test strategy document covers risk prioritization and traceability matrix

---

## Tips for Using Copilot on This Track

- **Context is King**: When asking Copilot to write tests, keep the file you want to test open.
- **MCP Debugging**: If the MCP tool fails, check the "Output" panel in VS Code and select "GitHub Copilot MCP" to see logs.
- **Port Forwarding**: Ensure the application port is forwarded in the DevContainer so the headless browser (and you) can access it.
- **Aspire Dashboard**: Use the Aspire dashboard to monitor all microservices and find the correct URLs for each service.

## Resources

- [Copilot Guide](../docs/copilot-guide.md)
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Troubleshooting Guide](../TROUBLESHOOTING.md)
- [Facilitator Guide](../FACILITATOR_GUIDE.md)
