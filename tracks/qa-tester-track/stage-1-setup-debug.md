# Stage 1: Setup and Debug Starter Tests

[Back to QA Tester Track](../qa-tester-track.md)

**Difficulty:** ★★☆ | **Time:** 60-75 min

The starter code in `tests/pages/LoginPage.ts` contains 3 intentional bugs. Your first task is to find and fix them.

## Tasks

1. **Bug hunt**: Run the existing login tests. They will fail. Open `tests/pages/LoginPage.ts` and find all 3 bugs:
   - A selector that targets a non-existent element (causes timeout)
   - A missing `await` that causes a race condition (causes flaky failures)
   - An incorrect method call that throws instead of returning null (causes crash on error case)
   Fix each bug and document what was wrong and why.
2. **Adapt selectors**: Update all LoginPage selectors to match the actual eShop application. Inspect the app in a browser to find the correct selectors.
3. **Add test cases**: Add 3 new test cases to `login.spec.ts` beyond the existing ones. Consider: session timeout behavior, password visibility toggle, login with special characters.

## Verification

- All login tests pass consistently (run 3 times with zero flakes)
- All 3 bugs are documented in code comments
- 3 new test cases added and passing

---

Next: [Stage 2: Page Object Expansion and Shopping Flow](stage-2-page-objects.md)
