# GitHub Copilot Best Practices 🌟

A comprehensive guide to getting the most out of GitHub Copilot's **agentic capabilities** while maintaining code quality and security.

## General Principles

### 1. **Copilot is an AI Partner, Not a Replacement**

With Agent mode, Copilot can now:
- Make multi-file changes autonomously
- Run terminal commands
- Iterate on its own work
- Self-correct errors

But you still need to:

✅ **Do:**
- Review all changes before accepting
- Understand the code being generated
- Verify security implications
- Make architectural decisions
- Test thoroughly

❌ **Don't:**
- Accept changes without reviewing
- Let Agent mode run unchecked
- Skip security review
- Ignore failing tests

### 2. **Choose the Right Agent**

| Task | Best Agent | Why |
|------|------------|-----|
| Multi-file feature | **Agent** | Can create/edit files, run commands |
| Architecture planning | **Plan** | Read-only, focuses on planning |
| Quick questions | **Ask** | Lightweight, conversational |
| Focused edits | **Edit** | Targeted file modifications |

### 3. **Provide Rich Context**

Use `#` mentions to give Copilot the context it needs:

```
Using the patterns in #file:src/services/UserService.ts,
create a ProductService with similar error handling.
Reference #codebase for existing validation utilities.
```

## Working with Agent Mode

### Reviewing Multi-File Changes

Agent mode can modify many files at once. Best practices:

1. **Review each file** - Don't bulk-accept
2. **Check dependencies** - Are imports correct?
3. **Verify patterns** - Does it match your codebase?
4. **Run tests** - Let tests catch issues
5. **Use git diff** - See the full picture

### Managing Tool Approvals

Agent requests permission for:
- File modifications
- Terminal commands
- MCP tool invocations

**Approval strategies:**
- **One-time**: For unfamiliar operations
- **Session**: For trusted repetitive tasks
- **Workspace**: For safe, common operations

### Terminal Command Safety

Configure auto-approval for safe commands:

```json
{
  "chat.tools.terminal.autoApprove": {
    "mkdir": true,
    "npm test": true,
    "git status": true,
    "/^npm (install|run build)$/": true,
    "rm -rf": false,
    "sudo": false
  }
}
```

### Iterative Development

Agent mode excels at iteration:

```
1. You: Create a REST API for tasks with CRUD endpoints
2. Agent: [Creates initial implementation]
3. You: Add input validation
4. Agent: [Adds validation]
5. You: Now add unit tests
6. Agent: [Writes tests, runs them, fixes failures]
```

## Custom Agents and Workflows

### Creating Specialized Agents

Define custom agents for your team's workflows:

**Security Reviewer Agent:**
```markdown
---
name: Security Review
description: Review code for security vulnerabilities
tools: ['codebase', 'search', 'problems']
---

Analyze code for:
- SQL injection
- XSS vulnerabilities
- Authentication issues
- Sensitive data exposure

Do NOT make changes. Only report findings.
```

**Planning Agent:**
```markdown
---
name: Planner
tools: ['search', 'fetch', 'githubRepo']
handoffs:
  - label: Implement
    agent: agent
    prompt: Implement the plan above.
---

Generate implementation plans only. Do not write code.
```

### Using Handoffs

Create guided workflows between agents:

1. **Plan** → Generate architecture
2. **Agent** → Implement the plan
3. **Security Review** → Check for issues
4. **Agent** → Address findings

## Code Quality

### Write Clear Prompts

**Before:**
```
create api
```

**After:**
```
Create a REST API for task management with:
- CRUD endpoints (GET, POST, PUT, DELETE)
- JWT authentication middleware
- Input validation using Zod
- Error handling with proper status codes
- OpenAPI documentation
- Unit tests with >80% coverage
```

### Use Type Systems

**TypeScript:**
```typescript
// Good - Copilot knows exact types
interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

function processUser(user: User): void {
  // Copilot provides type-safe suggestions
}
```

**Python:**
```python
# Good - Type hints help Copilot
from typing import List, Optional

def filter_users(
    users: List[User], 
    role: Optional[str] = None
) -> List[User]:
    # Better suggestions with types
```

### Follow Project Patterns

```javascript
// If your project uses this pattern:
class UserService {
  async create(data) { /* ... */ }
  async update(id, data) { /* ... */ }
  async delete(id) { /* ... */ }
}

// Copilot will follow it:
// "Create ProductService following UserService pattern"
class ProductService {
  // Copilot generates consistent structure
}
```

## Security

### 1. **Never Commit Secrets**

❌ **Bad:**
```javascript
const API_KEY = "sk-1234567890abcdef"; // Copilot might suggest this
```

✅ **Good:**
```javascript
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error('API_KEY environment variable is required');
}
```

### 2. **Validate All Inputs**

```javascript
// Don't trust Copilot to always add validation
// Add explicit comments:

// Validate and sanitize user input to prevent XSS and SQL injection
function processUserInput(input) {
  // Copilot will now include validation
}
```

### 3. **Review Database Queries**

❌ **Dangerous:**
```javascript
// Copilot might suggest:
db.query(`SELECT * FROM users WHERE id = ${userId}`);
```

✅ **Safe:**
```javascript
// Use parameterized queries to prevent SQL injection
db.query('SELECT * FROM users WHERE id = $1', [userId]);
```

### 4. **Check for Common Vulnerabilities**

Always review for:
- SQL injection
- XSS (Cross-Site Scripting)
- CSRF (Cross-Site Request Forgery)
- Authentication bypasses
- Authorization flaws
- Sensitive data exposure

```javascript
// Explicitly prompt for security:
// Create login endpoint with:
// - Input validation
// - Rate limiting
// - Password hashing
// - SQL injection prevention
// - Session management
```

## Performance

### 1. **Optimize Algorithms**

```python
# Ask Copilot for optimal solutions:
# Find duplicates in array with O(n) time complexity using hash set
def find_duplicates(arr):
    # Copilot suggests efficient solution
```

### 2. **Avoid N+1 Queries**

```javascript
// Bad - Copilot might generate:
const users = await getUsers();
for (const user of users) {
  user.posts = await getPosts(user.id); // N+1 problem!
}

// Good - Be explicit:
// Fetch users with their posts in a single query using JOIN
const users = await getUsersWithPosts();
```

### 3. **Use Caching**

```python
# Add caching to frequently accessed data with 5-minute TTL
@cache(ttl=300)
def get_user_profile(user_id):
    # Copilot includes caching logic
```

## Testing

### 1. **Generate Comprehensive Tests**

```javascript
/**
 * Generate tests for calculateDiscount function including:
 * - Valid discount percentages (0-100)
 * - Edge cases (0%, 100%)
 * - Invalid inputs (negative, >100, null, undefined)
 * - Different user tiers
 * - Rounding behavior
 */
describe('calculateDiscount', () => {
  // Use /tests command for better results
});
```

### 2. **Test Edge Cases**

```python
# Don't just test happy path
# Ask Copilot:
# Create tests for empty arrays, null values, negative numbers,
# maximum values, unicode characters, and concurrent access
```

### 3. **Mock External Dependencies**

```typescript
// Mock HTTP requests, database calls, and external APIs
// Use jest.mock() to isolate unit tests
import { jest } from '@jest/globals';

jest.mock('./api/github', () => ({
  fetchUser: jest.fn().mockResolvedValue({ id: 1, name: 'Test' }),
}));
```

## Documentation

### 1. **Document Complex Logic**

```javascript
// Ask Copilot: "Add comprehensive JSDoc documentation to this function"
// Copilot generates detailed documentation

/**
 * Implements exponential backoff retry logic
 * 
 * The function retries failed operations with increasing delays:
 * - 1st retry: 1 second
 * - 2nd retry: 2 seconds
 * - 3rd retry: 4 seconds
 * 
 * @param {Function} operation - Async function to retry
 * @param {number} maxRetries - Maximum number of retry attempts (default: 3)
 * @returns {Promise<T>} Result of the operation
 * @throws {Error} Original error if all retries fail
 */
```

### 2. **Keep README Updated**

```markdown
# Ask Copilot to update README when adding features:
# Update README.md with:
# - New API endpoints
# - Setup instructions for the caching layer
# - Environment variables for Redis
```

### 3. **API Documentation**

```python
# Generate OpenAPI/Swagger documentation for all FastAPI endpoints
# Include request/response examples, error codes, and authentication requirements
```

## Team Collaboration

### 1. **Share Prompt Patterns**

Create a team prompt library:

```markdown
## Team Prompt Patterns

### API Endpoint
"""
Create [METHOD] /api/[resource] endpoint:
- Request: [schema]
- Response: [schema]
- Validation: [rules]
- Auth: Required/Optional
- Error codes: 400, 401, 404, 500
"""

### React Component
"""
Create [ComponentName] component:
- Props: [list]
- State: [list]
- Styling: Tailwind CSS
- Accessibility: ARIA labels
- Tests: User interactions
"""
```

### 2. **Code Review with Copilot**

Use Copilot during code reviews:

```
Ask Copilot:
"Review this code for security issues, performance problems, and best practices"

"Suggest improvements for this function's error handling"

"Are there any edge cases not handled in this code?"
```

### 3. **Consistent Style**

```javascript
// Establish patterns in your codebase
// Copilot learns from existing code

// If you use this error handling pattern:
try {
  await operation();
} catch (error) {
  logger.error('Operation failed', { error, context });
  throw new ApplicationError('Operation failed', { cause: error });
}

// Copilot will suggest similar patterns
```

## Language-Specific Tips

### JavaScript/TypeScript

```typescript
// 1. Use strict TypeScript
"strict": true,
"noImplicitAny": true,

// 2. Leverage JSDoc
/** @type {import('./types').User} */

// 3. Use const assertions
const config = {
  apiUrl: 'https://api.example.com'
} as const;

// 4. Prefer async/await over promises
async function fetchData() {
  const result = await api.get('/data');
  return result;
}
```

### Python

```python
# 1. Use type hints everywhere
def process_data(items: List[Dict[str, Any]]) -> pd.DataFrame:

# 2. Follow PEP 8
# Copilot respects your formatting

# 3. Use dataclasses
from dataclasses import dataclass

@dataclass
class User:
    id: str
    email: str

# 4. Type guard with isinstance
if isinstance(value, str):
    # Copilot knows value is str here
```

### Go

```go
// 1. Handle errors explicitly
result, err := operation()
if err != nil {
    return fmt.Errorf("operation failed: %w", err)
}

// 2. Use context
func ProcessData(ctx context.Context, data []byte) error {
    // Copilot includes context handling
}

// 3. Follow Go conventions
// Copilot respects Go naming and structure
```

## Productivity Tips

### 1. **Use Keyboard Shortcuts**

Learn and use:
- `Tab` - Accept suggestion
- `Alt+]` / `Alt+[` - Next/previous suggestion
- `Ctrl+I` - Inline chat
- `Ctrl+Shift+I` - Copilot chat

### 2. **Batch Similar Tasks**

```javascript
// Instead of writing one function at a time:
// Write comments for all functions, then let Copilot generate them

// Validate email format
// Validate password strength  
// Validate phone number format
// Validate credit card number

// Copilot generates all functions in sequence
```

### 3. **Use Copilot for Refactoring**

```
Ask: "Refactor this function to use async/await instead of callbacks"
Ask: "Extract this duplicated code into a reusable function"
Ask: "Simplify this nested if-else into a switch statement"
```

### 4. **Learn from Suggestions**

When Copilot suggests something unfamiliar:
- Use `/explain` to understand it
- Research the pattern
- Decide if it's appropriate
- Learn and apply elsewhere

## Common Mistakes to Avoid

### ❌ 1. **Accepting Without Understanding**
```javascript
// Don't accept code you don't understand
// Use /explain first!
```

### ❌ 2. **Ignoring Context**
```javascript
// Copilot can't read your mind
// Provide clear context and requirements
```

### ❌ 3. **Not Testing Generated Code**
```javascript
// Always test Copilot's suggestions
// They might be syntactically correct but logically wrong
```

### ❌ 4. **Skipping Security Review**
```javascript
// Never skip security review for:
// - Authentication code
// - Database queries
// - User input handling
// - API endpoints
```

### ❌ 5. **Over-Relying on Copilot**
```javascript
// Don't let Copilot make architectural decisions
// You understand your system best
```

## Measuring Success

Track these metrics:

### Individual
- Time saved per task
- Code quality (review feedback)
- Test coverage
- Bug reduction

### Team
- Velocity improvement
- Consistency in code style
- Knowledge sharing
- Onboarding speed

## Quick Checklist

Before committing Copilot-generated code:

- [ ] I understand what the code does
- [ ] Code follows project patterns
- [ ] No hardcoded secrets or credentials
- [ ] Inputs are validated
- [ ] Errors are handled appropriately
- [ ] Security implications reviewed
- [ ] Performance is acceptable
- [ ] Tests are included/updated
- [ ] Documentation is added/updated
- [ ] Code is formatted correctly

## Getting Help

When Copilot struggles:

1. **Refine your prompt** - Be more specific
2. **Use Chat** - Have a conversation
3. **Provide examples** - Show what you want
4. **Break it down** - Smaller pieces work better
5. **Check context** - Is Copilot seeing the right files?

## Resources

- [Copilot Documentation](https://docs.github.com/copilot)
- [Security Best Practices](https://github.com/features/copilot/security)
- [Prompt Engineering Guide](./prompt-engineering.md)
- [Chat Modes Reference](./chat-modes.md)

---

**Use Copilot wisely, review thoroughly, ship confidently! 🚀**

[← MCP Servers](./mcp-servers.md) | [Back to Main](../README.md)
