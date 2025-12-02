# Copilot Chat Modes Reference 💬

GitHub Copilot Chat provides specialized commands (slash commands) that help you get more targeted assistance. Think of them as shortcuts to specific AI behaviors.

## Available Chat Commands

### `/explain` - Understand Code

**Purpose:** Get detailed explanations of code, algorithms, or concepts.

**When to use:**
- Understanding unfamiliar code
- Learning new algorithms
- Onboarding to a codebase
- Reviewing complex logic

**Examples:**

1. **Explain selected code:**
   ```
   Select code → Copilot Chat → "/explain"
   ```

2. **Explain specific concepts:**
   ```
   /explain how async/await works in JavaScript
   ```

3. **Explain algorithms:**
   ```
   /explain the quicksort algorithm with time complexity
   ```

**Pro Tips:**
- Select code before using `/explain`
- Ask follow-up questions for deeper understanding
- Use for code reviews

---

### `/fix` - Debug and Repair

**Purpose:** Identify and fix bugs, errors, or issues in your code.

**When to use:**
- Encountering runtime errors
- Fixing compilation errors
- Debugging logical issues
- Addressing linting warnings

**Examples:**

1. **Fix errors:**
   ```
   /fix this TypeScript error: Property 'id' does not exist on type 'User'
   ```

2. **Debug issues:**
   ```
   /fix why is this function returning undefined?
   ```

3. **Fix linting issues:**
   ```
   /fix all ESLint errors in this file
   ```

**Pro Tips:**
- Include error messages in your prompt
- Select the problematic code
- Test the fix before committing

---

### `/tests` - Generate Tests

**Purpose:** Create unit tests, integration tests, or test cases for your code.

**When to use:**
- Writing new tests
- Improving test coverage
- Testing edge cases
- Creating test data

**Examples:**

1. **Generate unit tests:**
   ```
   Select function → "/tests create unit tests for this function"
   ```

2. **Test with specific framework:**
   ```
   /tests create Jest tests for the UserService class
   ```

3. **Generate test data:**
   ```
   /tests create mock data for testing user authentication
   ```

**Pro Tips:**
- Specify testing framework (Jest, Pytest, etc.)
- Ask for edge cases: `/tests include edge cases`
- Request specific test types (unit, integration, e2e)

---

### `/doc` - Generate Documentation

**Purpose:** Create documentation, comments, README files, or API docs.

**When to use:**
- Documenting functions and classes
- Writing README files
- Creating API documentation
- Adding JSDoc/docstrings

**Examples:**

1. **Document function:**
   ```
   Select function → "/doc add JSDoc comments"
   ```

2. **Create README:**
   ```
   /doc create a README for this project with setup instructions
   ```

3. **API documentation:**
   ```
   /doc generate OpenAPI specification for these endpoints
   ```

**Pro Tips:**
- Specify documentation format (JSDoc, Sphinx, etc.)
- Include usage examples: `/doc with examples`
- Request specific sections

---

### `/newNotebook` - Create Jupyter Notebooks

**Purpose:** Create a new Jupyter notebook with specified content and structure.

**When to use:**
- Starting a new data analysis project
- Creating tutorial notebooks
- Setting up ML experiment notebooks
- Building documentation notebooks

**Examples:**

1. **Create analysis notebook:**
   ```
   /newNotebook create a data analysis notebook for exploring a CSV dataset
   ```

2. **ML experiment notebook:**
   ```
   /newNotebook create a machine learning notebook with data loading, 
   preprocessing, model training, and evaluation sections
   ```

3. **Tutorial notebook:**
   ```
   /newNotebook create a Python pandas tutorial with examples
   ```

**Pro Tips:**
- Be specific about the notebook structure you want
- Mention libraries you plan to use
- Request markdown explanations between code cells

---

### Asking for Optimization (Natural Language)

**Note:** There is no `/optimize` slash command in GitHub Copilot. Instead, ask naturally for performance improvements.

**When to use:**
- Improving algorithm efficiency
- Reducing memory usage
- Optimizing database queries
- Refactoring for clarity

**Examples:**

1. **Optimize performance:**
   ```
   Can you optimize this function for better time complexity?
   ```

2. **Memory optimization:**
   ```
   How can I reduce memory usage in this data processing code?
   ```

3. **Code refactoring:**
   ```
   Refactor this code for better readability and maintainability
   ```

---

### Workspace Context Chat

**Purpose:** Ask questions about your entire workspace/project.

**When to use:**
- Finding files or functions
- Understanding project structure
- Locating implementations
- Cross-file refactoring

**How to use:**
- Use `@workspace` in your chat
- Don't select specific code

**Examples:**

```
@workspace where is the user authentication implemented?

@workspace how is error handling done in this project?

@workspace find all API endpoints that handle payments

@workspace what testing frameworks are used?
```

**Pro Tips:**
- Great for code discovery
- Helps understand patterns
- Useful for refactoring across files

---

## Advanced Usage

### Combining Commands with Context

You can be more specific with slash commands:

```
/tests create integration tests for the user registration flow, 
mocking the database and email service

/fix the race condition in the async function, ensuring 
proper error handling

/explain the authentication flow from login to JWT token 
generation, including refresh token logic

/doc create comprehensive API documentation with request/response 
examples and error codes
```

### Chain of Thought

Have a conversation with Copilot:

```
You: /explain how does this caching work?
Copilot: [explanation]
You: What happens if the cache is full?
Copilot: [explanation]
You: /fix implement an LRU eviction policy
```

### Language-Specific Commands

Be explicit about language/framework:

```
/tests create Pytest tests with fixtures and parametrize

/doc add Python docstrings following Google style

/fix this React hook dependency issue

/explain this SQL query with execution plan
```

## Best Practices

### 1. **Be Specific**
❌ `/fix this`  
✅ `/fix the null pointer exception in line 42`

### 2. **Provide Context**
❌ `/tests`  
✅ `/tests create unit tests for authentication, including invalid credentials and token expiration`

### 3. **Select Code First**
For `/explain`, `/fix`, `/tests`, `/doc` - select relevant code before using the command

### 4. **Iterate**
Don't accept the first suggestion blindly:
- Ask for clarification
- Request alternatives
- Refine the output

### 5. **Verify Output**
- Review generated tests (do they actually test the logic?)
- Verify fixes (do they solve the problem?)
- Check documentation (is it accurate?)

## Command Comparison

| Command | Input | Output | Best For |
|---------|-------|--------|----------|
| `/explain` | Code/concept | Explanation | Learning, understanding |
| `/fix` | Buggy code | Fixed code | Debugging |
| `/tests` | Function/class | Test code | Testing |
| `/doc` | Code | Documentation | Docs, comments |
| `/newNotebook` | Description | Jupyter notebook | Data science, tutorials |
| `@workspace` | Question | Answer + references | Discovery |

## Examples from Challenges

### Challenge 1: Web API
```
/tests create integration tests for the user registration endpoint, 
including validation errors and duplicate email handling

/explain how JWT authentication works in this implementation

/doc generate OpenAPI specification for all task endpoints
```

### Challenge 2: ML/AI
```
/explain the difference between these feature scaling methods

/fix the data type mismatch in this pandas operation

/tests create tests for the feature engineering functions
```

### Challenge 3: DevOps
```
/explain this Terraform resource and its dependencies

/doc create deployment runbook with rollback procedures

/fix the Docker build failing on layer 4
```

### Challenge 4: Frontend
```
/tests create unit tests for this React component with user interactions

/explain the useEffect dependencies in this hook

How can I optimize this component to prevent unnecessary re-renders?
```

### Challenge 5: QA & Test Automation
```
/tests create comprehensive E2E tests for the login flow using Playwright

/explain the Page Object Model pattern in this test suite

/doc document the test coverage and testing strategy
```

## Troubleshooting

### Command Not Working?
- Make sure you typed `/` before the command
- Check if you're in Copilot Chat (not inline chat)
- Verify Copilot is enabled

### Irrelevant Suggestions?
- Add more context to your prompt
- Select relevant code before command
- Be more specific about what you need

### Response Too Generic?
- Provide examples of what you want
- Reference specific patterns in your codebase
- Ask follow-up questions for details

---

## Quick Reference Card

```
📖 /explain     - Understand code
🔧 /fix         - Debug issues  
✅ /tests       - Generate tests
📝 /doc         - Create docs
📓 /newNotebook - Create Jupyter notebook
🔍 @workspace   - Search project
```

---

**Master these commands and become a Copilot power user! 🚀**

[Back to Main README](../README.md) | [Prompt Engineering →](./prompt-engineering.md)
