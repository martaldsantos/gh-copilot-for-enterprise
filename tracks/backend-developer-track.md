# Backend Developer Track

**Duration:** 6-8 hours
**Difficulty:** Beginner to Advanced (progressive stages)
**Focus:** Building robust APIs and backend services with GitHub Copilot

## Who Is This For

- Backend Engineers and API Developers
- Web Service Developers
- Software Engineers focused on server-side development

## Prerequisites

- Basic knowledge of REST APIs and HTTP methods/status codes
- Familiarity with either JavaScript/Node.js or Python
- Basic testing concepts

## Technology Stack

- **Node.js** with Express.js OR **Python** with FastAPI
- JWT for authentication
- Testing frameworks (Jest/Mocha or pytest)
- OpenAPI/Swagger for documentation

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

- Project context (framework, language, architecture)
- Coding standards and conventions for your team
- Testing requirements and coverage goals
- API patterns and authentication approach

### 3. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**

- **API Developer Agent** -- Expert in REST API design, authentication patterns, and error handling
- **Test Writer Agent** -- Specialized in generating comprehensive tests with high coverage
- **Code Reviewer Agent** -- Focused on code quality, security, and best practices

**What to include in each agent:**

- Clear description of the agent's expertise
- Specific instructions for code generation
- References to your project's patterns and conventions

> Check out [github/awesome-copilot](https://github.com/github/awesome-copilot) for real-world examples of custom instructions and agent templates.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance.

### 4. Open the Challenge

Navigate to `challenges/challenge-1-web-api/` and choose either `node-express` or `python-fastapi`. Open the starter files (`app.js` or `main.py`, `models/`) to understand the structure, then work through the stages in order.

---

## Stages

| Stage | Name | Difficulty | Est. Time | Key Deliverable |
|-------|------|------------|-----------|----------------|
| 1 | Basic CRUD | Beginner | 60-75 min | Working task endpoints with validation |
| 2 | Authentication and Authorization | Intermediate | 60-75 min | JWT auth, user-scoped tasks, role-based access |
| 3 | Persistent Storage and Relationships | Intermediate | 60-90 min | SQLite database, categories, comments, bulk operations |
| 4 | Advanced API Patterns and Debugging | Advanced | 60-90 min | Fix 3 bugs in v2 module, WebSocket, audit log, rate limiting |
| 5 | Production Readiness | Advanced | 60-90 min | OpenAPI spec, caching, load testing, structured logging |

Each stage builds on the previous one. Copilot can help with code generation, but the later stages require architectural decisions, debugging skills, and performance analysis that need your judgment.

### Stage 1: Basic CRUD

**Difficulty:** Beginner | **Time:** 60-75 min

Build the core task management endpoints using the in-memory data store.

#### Tasks

1. Implement task CRUD endpoints: `POST /tasks`, `GET /tasks`, `GET /tasks/:id`, `PUT /tasks/:id`, `DELETE /tasks/:id`, `PATCH /tasks/:id/complete`.
2. Input validation: title is required (3-100 characters), status must be a valid enum value (`todo`, `in_progress`, `done`), priority must be valid (`low`, `medium`, `high`).
3. Proper HTTP status codes: 201 for creation, 400 for invalid input, 404 for not found, 200 for success.
4. Filter tasks by status and priority via query parameters.
5. Search tasks by title/description via a `q` query parameter.
6. Pagination: `page` and `limit` query parameters with sensible defaults.

#### Verification

- All CRUD endpoints return correct responses
- Invalid input returns 400 with a descriptive error message
- Filtering, search, and pagination work correctly
- Non-existent task IDs return 404

---

### Stage 2: Authentication and Authorization

**Difficulty:** Intermediate | **Time:** 60-75 min

Add user management and protect all task endpoints.

#### Tasks

1. Registration endpoint: `POST /auth/register` accepting email and password. Hash passwords with bcrypt. Validate email format.
2. Login endpoint: `POST /auth/login` returning a JWT token.
3. Authentication middleware: all task endpoints require a valid JWT in the `Authorization` header.
4. User-scoped tasks: users can only see and modify their own tasks. The `userId` is embedded in the JWT.
5. Role-based access: add an `admin` role. Admin users can list all tasks across all users via `GET /admin/tasks`.
6. Token refresh endpoint: `POST /auth/refresh` issuing a new token.

#### Verification

- Unauthenticated requests to task endpoints return 401
- Users cannot access, modify, or delete another user's tasks
- Admin users can list all tasks; non-admin users cannot access `/admin/tasks`
- Token refresh works and old tokens can optionally be invalidated

---

### Stage 3: Persistent Storage and Relationships

**Difficulty:** Intermediate | **Time:** 60-90 min

Replace the in-memory store with a real database and add data relationships.

#### Tasks

1. Replace the in-memory arrays with SQLite. Use knex or Sequelize for Node.js, or SQLAlchemy for Python.
2. Create database migrations for the initial schema (users, tasks tables).
3. Add a `categories` entity. Tasks can belong to multiple categories (many-to-many relationship).
4. Add `comments` on tasks (one-to-many). Each comment has a body, author, and timestamp.
5. Bulk operations: `POST /tasks/bulk/categorize` assigns a category to multiple task IDs in a single transactional request. If any task ID is invalid, the entire operation rolls back.

#### Verification

- Restart the server and data persists (no data loss)
- Many-to-many relationship between tasks and categories works (create, assign, query)
- Comments are associated with tasks and retrievable
- Bulk categorize operation is atomic: all-or-nothing on invalid task IDs

---

### Stage 4: Advanced API Patterns and Debugging

**Difficulty:** Advanced | **Time:** 60-90 min

This stage introduces a broken v2 API module and advanced features.

#### Tasks

1. **Bug hunt**: Import the module from `stage-4-bugs/v2-routes.js` (or `v2_routes.py`). It contains 3 intentional bugs -- a security vulnerability, a missing authorization check, and a pagination logic error. Find and fix all three. Document each bug (what it is, why it is dangerous, and how you fixed it).
2. Real-time notifications via WebSocket: when a task is modified, notify the task's assignee in real time.
3. File attachments on tasks: `POST /tasks/:id/attachments` for upload, `GET /tasks/:id/attachments/:fileId` for download. Enforce a 5MB file size limit.
4. Audit log: record every mutation (create, update, delete) with who made the change, which field changed, before/after values, and timestamp. Make the audit log queryable via `GET /tasks/:id/audit`.
5. Rate limiting: 100 requests per minute per user. Return 429 when exceeded.

#### Verification

- All 3 bugs are identified and fixed with documentation
- WebSocket connection delivers task change notifications
- File upload rejects files over 5MB; download returns correct file
- Audit log records all mutations with before/after values
- Rate limiter returns 429 after 100 requests within a minute

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot can generate WebSocket boilerplate, rate limiting middleware, and audit log schemas. But identifying the 3 bugs in the v2 module requires reading and reasoning about code -- Copilot alone may not spot the security vulnerability or the off-by-one pagination error without guidance.

---

### Stage 5: Production Readiness

**Difficulty:** Advanced | **Time:** 60-90 min

Prepare the API for production deployment.

#### Tasks

1. Write an OpenAPI 3.0 specification that matches your actual API endpoints, request/response schemas, and error codes. Validate that the spec matches the implementation (no spec drift).
2. Caching: add ETag-based caching on `GET /tasks` and `GET /tasks/:id`. Subsequent requests with matching ETags return 304 Not Modified.
3. Graceful shutdown: when the server receives SIGTERM, stop accepting new connections, finish in-flight requests, close database connections, then exit.
4. Structured logging: all log output in JSON format with `timestamp`, `level`, `message`, `requestId` (correlation ID carried through the request lifecycle).
5. Load testing: use the skeleton in `load-test/benchmark.js` (or `benchmark.py`) to write a load test. The API must handle 500 concurrent connections with p95 latency under 200ms on the task listing endpoint.
6. Comprehensive test suite achieving >80% code coverage, including edge cases for pagination boundaries, concurrent modifications, and auth token expiration.

#### Verification

- OpenAPI spec validates with a linter and matches actual API behavior
- ETag caching returns 304 on unchanged data
- Server shuts down gracefully (no dropped connections)
- All log lines are parseable JSON with correlation IDs
- Load test passes performance targets
- Test coverage report shows >80%

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot generates OpenAPI specs, logging middleware, and test boilerplate efficiently. But calibrating load test thresholds, designing graceful shutdown sequences, and ensuring the spec accurately reflects your API (not a generic template) require manual verification and tuning.

---

> **Short on time?** Stages 4 and 5 list optional tasks you can skip. Focus on the bug hunt in Stage 4 and the OpenAPI spec + tests in Stage 5.

## Tips for Using Copilot on This Track

**Write descriptive comments before generating code:**

```javascript
// POST /api/users - Create a new user with email validation
// Hash password using bcrypt, return JWT token
// Return 400 if email already exists
```

**Reference workspace patterns in prompts:**

- "Create an endpoint following the pattern in routes/auth.js"
- "Add error handling similar to other routes"

**Generate tests from existing code:**

1. Highlight your API function
2. Use `/tests create unit and integration tests`
3. Review and customize for edge cases

## Resources

- [Copilot Guide](../docs/copilot-guide.md)
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Troubleshooting Guide](../TROUBLESHOOTING.md)
- [Facilitator Guide](../FACILITATOR_GUIDE.md)
