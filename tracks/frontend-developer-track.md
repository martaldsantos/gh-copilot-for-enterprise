# Frontend Developer Track

**Duration:** 6-8 hours
**Difficulty:** Beginner to Intermediate
**Focus:** Building modern, interactive user interfaces with GitHub Copilot

## Who Is This For

- Frontend Developers and UI/UX Engineers
- React Developers
- Web Developers focused on client-side
- Full-stack developers interested in frontend

## Prerequisites

- JavaScript fundamentals
- Basic React knowledge (components, props, state)
- HTML and CSS understanding
- Familiarity with npm/package managers
- TypeScript helpful but not required

## Technology Stack

- **React 18+** -- UI framework
- **TypeScript** -- Type safety
- **Modern CSS** -- Styling (CSS Modules, Styled Components, or Tailwind)
- **State Management** -- Context API or Redux
- **Testing** -- Jest and React Testing Library

## Getting Started

### 1. Configure Copilot Context (CRITICAL)

The file `.github/copilot-instructions.md` currently contains instructions for the hackathon organizers. **You must overwrite this file** with instructions relevant to your specific project.

1. Open `.github/copilot-instructions.md`.
2. **Delete its entire contents.**
3. Write your own instructions following the guidance below.

> **Why?** If you don't do this, Copilot will think it's helping organize a hackathon instead of helping you write code!

### 2. Create Your Custom Instructions

This file tells Copilot about your project context and coding preferences. **Your goal is to create your own custom instructions file.**

**What to include:**

- Project context (React version, TypeScript, styling approach)
- Component standards and patterns
- Accessibility requirements (WCAG compliance level)
- Testing approach and coverage goals

### 3. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**

- **React Developer Agent** -- Expert in React patterns, hooks, and TypeScript
- **UI Stylist Agent** -- Specialized in CSS, responsive design, and animations
- **Accessibility Expert Agent** -- Focused on WCAG compliance and keyboard navigation

**What to include in each agent:**

- Clear description of the agent's expertise area
- Specific instructions for component generation
- References to your design system and patterns

> Check out [github/awesome-copilot](https://github.com/github/awesome-copilot) for real-world examples of custom instructions and agent templates.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance.

### 4. Open the Challenge

Navigate to `challenges/challenge-4-frontend/`, install dependencies (`npm install`), and start the dev server (`npm run dev`). Open the starter files -- `src/App.tsx` is an empty shell and `src/types/task.ts` has basic type definitions. Work through the stages in order.

---

## Stages

| Stage | Name | Difficulty | Est. Time | Key Deliverable |
|-------|------|------------|-----------|----------------|
| 1 | Component Architecture and Layout | Beginner | 60-75 min | Responsive dashboard, routing, static components |
| 2 | State Management and CRUD | Intermediate | 60-90 min | Context + useReducer, forms, optimistic updates, undo |
| 3 | Advanced Interactions | Intermediate | 60-90 min | Theme switching, drag-and-drop Kanban, keyboard shortcuts, toasts |
| 4 | Accessibility and Performance | Advanced | 60-90 min | WCAG AA compliance, fix 5 a11y bugs, virtualized list, code splitting |
| 5 | Integration and Testing | Advanced | 60-90 min | API integration or MSW mocking, offline support, >80% test coverage |

Each stage builds on the previous one. Copilot excels at scaffolding React components and generating TypeScript types. The later stages demand architectural decisions (state management patterns, performance trade-offs) and finding accessibility violations that require understanding what makes a UI usable for everyone.

> **Short on time?** In the compressed schedule, skip keyboard shortcuts in Stage 3, do only the a11y bug hunt in Stage 4, and skip offline support and Storybook in Stage 5.

### Stage 1: Component Architecture and Layout

**Difficulty:** Beginner | **Time:** 60-75 min

Build the visual foundation with static data. Focus on component composition and responsive design.

#### Tasks

1. Build a responsive dashboard layout with header, sidebar, and main content area using Tailwind CSS.
2. Create TaskCard, TaskList, and Dashboard components with proper TypeScript interfaces.
3. Implement React Router with at least 3 routes: Dashboard, Task List, and Task Detail.
4. Use a hardcoded array of tasks for now -- no state management yet. Focus on how components compose together.

#### Verification

- App renders correctly at 3 breakpoints: mobile (375px), tablet (768px), desktop (1440px)
- Routes navigate correctly without page reload
- TypeScript compiles in strict mode with no errors
- Components accept properly typed props

---

### Stage 2: State Management and CRUD

**Difficulty:** Intermediate | **Time:** 60-90 min

Replace static data with real state management. Users must be able to create, edit, and delete tasks.

#### Tasks

1. Implement state management using Context API with `useReducer`. All task state goes through a single reducer -- no scattered `useState` calls for task data.
2. Task CRUD: create, edit, and delete with confirmation dialogs on destructive actions.
3. Form validation: title required (3-100 characters), due date must be in the future, description max 500 characters. Show validation errors inline.
4. Optimistic UI updates: show changes immediately in the UI, roll back if the action fails.
5. Undo support: at minimum, undo delete (toast with "Undo" action before deletion is finalized).

#### Verification

- Task state persists across route navigation (no reset when changing pages)
- Validation prevents invalid form submissions with visible error messages
- Undo reverts the last delete action
- Optimistic updates show immediately (no loading spinner for local operations)

---

### Stage 3: Advanced Interactions

**Difficulty:** Intermediate | **Time:** 60-90 min

Add polish and interactivity that goes beyond basic CRUD.

#### Tasks

1. Dark/light theme with system preference detection (`prefers-color-scheme`) and localStorage persistence. Theme applies to all components.
2. Drag-and-drop Kanban board view: tasks can be dragged between status columns (Todo, In Progress, Done). Dropping a task in a column updates its status.
3. Keyboard shortcuts: `n` to open new task form, `Escape` to close modals, arrow keys to navigate the task list, `d` to delete the selected task.
4. Toast notification system: success, error, and info variants. Auto-dismiss after 5 seconds with option to dismiss manually.
5. Loading skeleton components (not spinners) for all data-loading states.

#### Verification

- Theme persists across page reload
- Drag-and-drop updates task status in state
- All keyboard shortcuts work (test each one)
- Toasts auto-dismiss after 5 seconds and can be manually closed
- Skeleton components display while loading (simulate with a delay)

---

### Stage 4: Accessibility and Performance

**Difficulty:** Advanced | **Time:** 60-90 min

This stage includes a pre-built component with intentional accessibility violations.

#### Tasks

1. Run an axe-core accessibility audit on the entire app and fix all violations to achieve WCAG 2.1 AA compliance.
2. **Bug hunt**: Open `src/audit/AccessibleCard.tsx`. It contains 5 intentional accessibility violations: a missing alt text, no focus management on an interactive element, color-only status indicator, a missing ARIA label on an icon button, and a keyboard trap. Find and fix all five.
3. Virtualized task list: use react-window or react-virtuoso so the task list handles 10,000 tasks without jank.
4. Code splitting with `React.lazy`: dashboard, task list, and settings should load as separate chunks.
5. Performance budget: initial bundle under 200KB gzipped, LCP under 2.5 seconds.

#### Verification

- axe-core reports 0 violations
- All 5 accessibility bugs in AccessibleCard.tsx are identified and fixed
- 10,000 tasks render and scroll smoothly (no dropped frames)
- Browser DevTools Network tab shows separate chunks for lazily-loaded routes
- Lighthouse performance score > 90

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot generates code-splitting boilerplate and axe-core setup. But identifying the 5 accessibility violations in AccessibleCard.tsx requires understanding WCAG criteria -- the keyboard trap and color-only indicator are not things a linter catches.

---

### Stage 5: Integration and Testing

**Difficulty:** Advanced | **Time:** 60-90 min

Connect the frontend to a real (or mocked) backend and write thorough tests.

#### Tasks

1. Connect the frontend to the Challenge 1 REST API, or set up MSW (Mock Service Worker) using the skeleton in `src/mocks/handlers.ts` to mock all API calls.
2. Offline support: implement a service worker that caches the app shell. When offline, show cached data and queue mutations for sync when connectivity returns.
3. Testing with at least 80% code coverage:
   - Unit tests for reducer functions and utility code
   - Integration tests for user flows (create task, edit task, delete with undo) using React Testing Library
   - Visual regression tests using Playwright screenshots for key pages
4. Create a Storybook instance documenting all components. Each component must have at least 3 stories: default, loading, and error states.

#### Verification

- App fetches data from API (or MSW mock) and displays it
- App works offline (disable network in DevTools -- cached content displays, mutations queue)
- Tests pass with >80% coverage report
- Storybook builds and shows all components with multiple states

---

## Tips for Using Copilot on This Track

**Describe components in comments:**

```typescript
// Create a ProductCard component that displays:
// - Product image
// - Product name and description
// - Price with currency formatting
// - Add to cart button
// Props: product (with id, name, description, price, imageUrl)
```

**Generate TypeScript interfaces:**

```typescript
// Define interface for User with:
// - id (number)
// - email (string)
// - firstName and lastName (string)
// - avatar (optional string)
// - createdAt (Date)
```

**Ask for complete state management patterns:**

```typescript
// Create a custom hook useAuth that:
// - Manages authentication state
// - Provides login, logout, and register functions
// - Stores user in context
// - Persists to localStorage
```

**Generate tests from existing code:**

1. Highlight your component
2. Use `/tests create tests for this component`
3. Review and add edge cases

## Resources

- [Copilot Guide](../docs/copilot-guide.md)
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Troubleshooting Guide](../TROUBLESHOOTING.md)
- [Facilitator Guide](../FACILITATOR_GUIDE.md)
