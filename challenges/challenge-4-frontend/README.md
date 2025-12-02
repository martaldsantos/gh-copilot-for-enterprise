# Challenge 4: Frontend - Interactive UI Components ⚛️

**Difficulty**: Beginner to Intermediate  
**Duration**: 4-6 hours  
**Team**: Frontend Developers

## 🎯 Objective

Build a modern, responsive web application with interactive UI components using React and TypeScript. Learn how GitHub Copilot's **Agent mode** accelerates frontend development through component scaffolding, multi-file generation, TypeScript types, styling, and state management.

## 📚 What You'll Learn

- Using **Agent mode** for component generation
- Creating **custom agents** for frontend patterns
- Using **prompt files** for reusable UI patterns
- Leveraging `#` context mentions for precise guidance
- Multi-file component generation with Agent mode
- Iterative UI development with Copilot

## 🛠️ Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **React Query** - Data fetching
- **Vitest** - Testing

## 📋 Requirements

Build a Task Dashboard application with:

### Core Features

1. **Dashboard Overview**
   - Task statistics cards
   - Recent activity feed
   - Quick actions menu
   - Responsive grid layout

2. **Task List Component**
   - Filterable task list
   - Sort by priority/date
   - Search functionality
   - Pagination
   - Drag-and-drop reordering

3. **Task Form**
   - Create/Edit task modal
   - Form validation
   - Date picker
   - Priority selector
   - Rich text editor for description

4. **User Interface**
   - Dark/Light theme toggle
   - Responsive design (mobile-first)
   - Loading states
   - Error boundaries
   - Toast notifications

### Quality Requirements

- TypeScript strict mode
- Component testing (>80% coverage)
- Accessibility (WCAG 2.1 AA)
- Performance optimization
- Clean, reusable components

## 🚀 Getting Started

### Step 1: Setup

```bash
cd challenges/challenge-4-frontend/
npm install
npm run dev
```

### Step 2: Review Starter Code

The project is bootstrapped with Vite + React + TypeScript:

- `src/App.tsx` - Main application component
- `src/types/` - TypeScript type definitions

## 💡 Copilot Agentic Tips for This Challenge

### 1. Use Agent Mode for Component Generation

Open Chat View (`Ctrl+Alt+I`), select **Agent**, and ask:

```
Create a complete TaskCard component:

1. src/components/TaskCard/TaskCard.tsx - Main component
2. src/components/TaskCard/TaskCard.test.tsx - Unit tests
3. src/components/TaskCard/TaskCard.module.css - Styles (or Tailwind)
4. src/components/TaskCard/index.ts - Barrel export

The component should display task title, description, priority badge,
due date with countdown, and action buttons for edit and delete.
Use the Task type from #file:src/types/task.ts
```

Agent mode will create all files with proper structure!

### 2. Create a Frontend Custom Agent

Create `.github/agents/react-developer.agent.md`:

```markdown
---
name: React Developer
description: Expert in React, TypeScript, and modern frontend
tools: ['codebase', 'editFiles', 'runTerminal']
---

You are an expert React developer. When creating components:
- Follow the existing patterns in #codebase
- Use TypeScript strict mode (no any types)
- Create barrel exports (index.ts) for components
- Include unit tests with Vitest
- Use Tailwind CSS for styling
- Ensure accessibility (ARIA labels, keyboard nav)
- Add loading and error states

Reference #file:src/types for existing type definitions.
Check #problems after creating files.
```

### 3. Use Context Mentions for Precise Guidance

```
Create a TaskList component that uses the Task type from 
#file:src/types/task.ts and follows the patterns in 
#file:src/components/TaskCard/TaskCard.tsx

Include filtering, search, and pagination.
```

### 4. Create Reusable Prompt Files

Create `.github/prompts/create-component.prompt.md`:

```markdown
---
name: create-component
description: Scaffold a new React component
agent: agent
---

Create a React component called ${input:componentName}:

1. src/components/${input:componentName}/${input:componentName}.tsx
   - TypeScript with proper props interface
   - Tailwind CSS styling
   - Accessibility attributes

2. src/components/${input:componentName}/${input:componentName}.test.tsx
   - Unit tests with Vitest
   - Test user interactions

3. src/components/${input:componentName}/index.ts
   - Barrel export

Follow patterns from #codebase and check #problems after.
```

Use with: `/create-component`

### 5. Iterative Component Development

Have a conversation with Copilot:

```
You: Create a Button component with primary, secondary, and danger variants

[Agent creates component files]

You: Add loading and disabled states to the Button

[Agent updates the component]

You: The button looks good, now create an Input component with the same patterns

[Agent creates Input following Button patterns]

You: Check #problems for any TypeScript errors

[Agent identifies and fixes issues]
```

## 📝 Step-by-Step Guide

### Phase 1: Type Definitions (10 min)

Use Agent mode:

```
Create TypeScript types in src/types/:

1. src/types/task.ts:
   - Task interface (id, title, description, status, priority, 
     dueDate, createdAt, updatedAt, assignee)
   - TaskStatus enum (todo, in_progress, done)
   - TaskPriority enum (low, medium, high)

2. src/types/user.ts:
   - User interface (id, name, email, avatar)

3. src/types/api.ts:
   - TaskListResponse, TaskCreateRequest, TaskUpdateRequest
   - ApiError interface
   - PaginatedResponse generic type

4. src/types/index.ts:
   - Barrel exports for all types
```

### Phase 2: Reusable Components (25 min)

```
Create reusable UI components:

1. Button component (src/components/Button/):
   - Variants: primary, secondary, danger, ghost
   - Sizes: sm, md, lg
   - Loading and disabled states
   - Full TypeScript props interface
   - Unit tests

2. Input component (src/components/Input/):
   - Label, placeholder, error message
   - Support for text, email, password types
   - Validation state styling (success, error)
   - Unit tests

3. Card component (src/components/Card/):
   - Optional header, body, footer slots
   - Using React.ReactNode for children
   - Hover effects with Tailwind

4. Modal component (src/components/Modal/):
   - Backdrop with click-outside to close
   - Animation on open/close
   - ESC key to close
   - Focus trap for accessibility
   - Portal rendering

Create all with tests and barrel exports.
```

### Phase 3: Feature Components (30 min)

```
Create feature components:

1. TaskCard (src/components/TaskCard/):
   - Display task with priority color coding (high=red, medium=yellow, low=green)
   - Due date with countdown ("2 days left", "Overdue!")
   - Edit and delete action buttons
   - Completion checkbox
   - Hover effects

2. TaskList (src/components/TaskList/):
   - Filters for status and priority (dropdowns)
   - Search input with debounce
   - Sort dropdown (date, priority, alphabetical)
   - Pagination controls
   - Empty state component when no tasks
   - Loading skeleton state

3. TaskForm (src/components/TaskForm/):
   - Title input (required, max 100 chars)
   - Description textarea
   - Priority selector (radio buttons)
   - Due date picker
   - Form validation with error messages
   - Submit and Cancel buttons
   - Works for both create and edit

4. Dashboard (src/components/Dashboard/):
   - Statistics cards (total, completed, pending, overdue)
   - Grid layout with Tailwind
   - Quick add task button
   - Recent tasks preview

Run the app after creation to verify everything works.
```

### Phase 4: Custom Hooks (20 min)

```
Create custom hooks in src/hooks/:

1. useTaskManager hook:
   - Fetches tasks from mock API using React Query
   - CRUD operations (create, update, delete)
   - Optimistic updates for better UX
   - Loading and error states
   - TypeScript return type

2. useTheme hook:
   - Dark/light mode toggle
   - Persist preference in localStorage
   - System preference detection
   - Apply theme class to document

3. useFilters hook:
   - Manage task filters (search, status, priority)
   - URL sync for sharable filtered views
   - Reset filters function

4. useDebounce hook:
   - Generic debounce for any value
   - Configurable delay
   - TypeScript generics

Include tests for all hooks.
```

### Phase 5: Testing & Polish (15 min)

```
Complete the testing and polish:

1. Add tests for all components in #codebase:
   - User interaction tests
   - Accessibility tests
   - Snapshot tests for UI

2. Review accessibility:
   - Check all components have ARIA labels
   - Verify keyboard navigation works
   - Test with screen reader

3. Performance optimization:
   - Add React.memo where appropriate
   - Use useMemo/useCallback for expensive operations
   - Lazy load Dashboard charts

4. Fix any errors shown in #problems

Run npm test to verify all tests pass.
```

## 🛠️ Optional: MCP Tools for Frontend

Configure MCP servers for enhanced capabilities:

**`.vscode/mcp.json`**:

```json
{
  "servers": {
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

Use it:

```
Use #fetch to get the latest React 18 documentation for 
useTransition, then implement smooth loading states 
in my TaskList component.
```

## ✅ Completion Checklist

### Components

- [ ] Reusable Button component with variants
- [ ] Input component with validation
- [ ] Card component created
- [ ] Modal component with accessibility
- [ ] TaskCard displaying all task info
- [ ] TaskList with filters and search
- [ ] TaskForm with validation
- [ ] Dashboard with statistics

### Features

- [ ] Create task functionality
- [ ] Edit task functionality
- [ ] Delete task functionality
- [ ] Filter tasks by status/priority
- [ ] Search tasks
- [ ] Sort tasks
- [ ] Pagination working
- [ ] Dark/Light theme toggle

### Quality

- [ ] TypeScript strict mode (no `any` types)
- [ ] All components tested
- [ ] Responsive on mobile/tablet/desktop
- [ ] Keyboard navigation works
- [ ] Loading states implemented
- [ ] Error handling implemented
- [ ] WCAG 2.1 AA compliant

## 🎁 Bonus Challenges

Using Agent mode, try these:

1. **Advanced Features**
   - "Add drag-and-drop task reordering with react-beautiful-dnd"
   - "Implement real-time updates with WebSocket"
   - "Add offline support with service worker"

2. **Animations**
   - "Add page transitions with Framer Motion"
   - "Create skeleton loading screens for all components"

3. **Advanced State**
   - "Migrate to Zustand for state management"
   - "Add undo/redo functionality for task operations"
   - "Implement command palette (Cmd+K)"

## 🧪 Testing Your App

Use Agent mode:

```
Run the following commands to test the app:
1. npm run dev - verify app runs
2. npm test - run all tests
3. npm run test:coverage - check coverage >80%
4. npm run build - verify production build
```

## 📊 Success Metrics

- Components generated by Agent: ____%
- Number of iterations for correct patterns: _____
- Test coverage achieved: ____%
- Most helpful agent workflow: _______________

## 🎓 Key Learnings

Document your experience:

1. How did Agent mode help with React component structure?
2. Were multi-file generations correct on first try?
3. How well did Copilot handle TypeScript patterns?
4. What required the most iteration?

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Copilot Agents Guide](../docs/chat-modes.md)

---

**Need Help?**

- Use Agent mode: "Analyze #problems and fix errors in my components"
- Check the `/docs` folder for guides

Build beautiful UIs! ⚛️✨
