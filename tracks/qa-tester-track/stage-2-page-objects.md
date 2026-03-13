# Stage 2: Page Object Expansion and Shopping Flow

[Back to QA Tester Track](../qa-tester-track.md)

**Difficulty:** ⭐⭐ | **Time:** 60-90 min

Build out the test infrastructure for a complete shopping flow.

## Tasks

1. Create CatalogPage, ProductDetailPage, and BasketPage following the BasePage pattern. Start from the skeleton in `tests/pages/CatalogPage.ts`.
2. Write a complete E2E test: browse catalog, view product detail, add to basket, verify basket contents.
3. Create custom Playwright test fixtures in `tests/fixtures/auth.fixture.ts`: one fixture for authenticated scenarios (pre-logged-in), one for unauthenticated.
4. Data-driven tests: test adding 5 different products with different quantities using Playwright's parameterized test feature.

## Verification

- Shopping flow test passes end-to-end
- Custom fixtures correctly manage authentication state
- All 5 parameterized product variants pass
- Page objects follow the BasePage pattern consistently

---

Previous: [Stage 1: Setup and Debug Starter Tests](stage-1-setup-debug.md) | Next: [Stage 3: Cross-Browser, Mobile, and Resilience](stage-3-cross-browser.md)
