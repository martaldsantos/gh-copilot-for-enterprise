# Stage 3: Cross-Browser, Mobile, and Resilience

[Back to QA Tester Track](../qa-tester-track.md)

**Difficulty:** ★★★ | **Time:** 60-90 min

Real-world tests must work across browsers and handle network issues.

## Tasks

1. Run the full test suite on Chromium, Firefox, and WebKit. Fix any browser-specific failures.
2. Add mobile viewport tests using the Pixel 5 and iPhone 12 emulation profiles. Verify responsive behavior: hamburger menu, touch-friendly tap targets, scrollable content.
3. Network resilience: test application behavior under slow 3G conditions (use Playwright's `route.fulfill` or network throttling). Test graceful handling when an API returns 500.
4. Visual comparison: screenshot key pages (catalog, product detail, basket) on each browser. Save screenshots for manual comparison of layout differences.

## Verification

- Test report shows all 3 browsers plus mobile passing
- Slow network test completes within timeout
- API error handling test verifies user-facing error message
- Visual comparison screenshots are saved in a `screenshots/` directory

## What Copilot Helps With vs. What Requires Your Judgment

Copilot generates browser configuration and network throttling code well. But debugging why a test passes on Chromium but fails on WebKit (often timing or rendering differences) requires understanding browser-specific behavior. Visual comparison is inherently manual.

---

Previous: [Stage 2: Page Object Expansion and Shopping Flow](stage-2-page-objects.md) | Next: [Stage 4: AI-Driven Testing and Hybrid Approach](stage-4-ai-driven.md)
