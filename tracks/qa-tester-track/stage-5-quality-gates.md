# Stage 5: Quality Gates, Reporting, and CI

[Back to QA Tester Track](../qa-tester-track.md)

**Difficulty:** ★★★ | **Time:** 60-90 min

Production-grade test infrastructure with CI integration and analysis.

## Tasks

1. **GitHub Actions CI**: Create a workflow that runs the full Playwright test suite on every PR. Include browser installation, application startup, test execution, and artifact upload for reports.
2. **Custom reporter**: Implement the skeleton in `reporters/markdown-reporter.ts`. The reporter should generate a markdown summary with: total pass/fail counts, duration per test, screenshots of failures (embedded as links), and a flakiness score.
3. **Performance assertions**: Measure and assert page load times using Playwright timing APIs. Catalog page must load in under 3 seconds, product detail in under 2 seconds.
4. **Flakiness analysis**: Run the full suite 10 times. Identify any flaky tests. For each flaky test, either fix the root cause or quarantine it with `test.fixme()` and a documented reason.
5. **Test strategy document**: Complete the template in `docs/test-strategy-template.md`. Prioritize testing based on business risk (payment flow testing is higher priority than profile settings). Include a traceability matrix mapping user stories to test cases.

## Verification

- GitHub Actions YAML is valid and includes all required steps
- Custom reporter generates a markdown summary when tests run
- Performance assertions are enforced (tests fail if page load exceeds threshold)
- Flakiness report shows results from 10 runs with analysis
- Test strategy document covers risk prioritization and traceability matrix

---

Previous: [Stage 4: AI-Driven Testing and Hybrid Approach](stage-4-ai-driven.md)
