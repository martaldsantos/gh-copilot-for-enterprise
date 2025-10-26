# GitHub Copilot Basics 🚀

## What is GitHub Copilot?

GitHub Copilot is your AI pair programmer that helps you write code faster and with less effort. It suggests whole lines or entire functions right in your editor.

## Key Features

### 1. **Inline Code Suggestions**
As you type, Copilot suggests code completions based on:
- Your current file context
- Comments and function names
- Patterns in your codebase
- Millions of public repositories

**How to use:**
- Start typing or write a comment
- Copilot shows suggestions in gray text
- Press `Tab` to accept
- Press `Esc` to dismiss
- `Alt+]` for next suggestion
- `Alt+[` for previous suggestion

### 2. **Copilot Chat**
Interactive chat interface for:
- Asking coding questions
- Explaining code
- Generating tests
- Debugging issues
- Learning new concepts

**How to open:**
- `Ctrl+Shift+I` (Windows/Linux)
- `Cmd+Shift+I` (Mac)
- Click Copilot icon in sidebar
- Right-click → "Copilot Chat"

### 3. **Inline Chat**
Quick chat directly in your file:
- `Ctrl+I` to open inline chat
- Ask questions about selected code
- Make quick edits
- Get explanations

## Getting Started

### Installation

1. **Install VS Code Extension**
   - Open VS Code Extensions (Ctrl+Shift+X)
   - Search "GitHub Copilot"
   - Install "GitHub Copilot" and "GitHub Copilot Chat"

2. **Sign In**
   - Click on Copilot icon
   - Sign in with your GitHub account
   - Ensure you have Copilot access

3. **Verify Installation**
   - Open any code file
   - Start typing - you should see suggestions
   - Open Copilot Chat (Ctrl+Shift+I)

### Your First Copilot Code

Try this:

1. Create a new file `hello.js`
2. Type this comment:
   ```javascript
   // Function to calculate factorial of a number
   ```
3. Press Enter and watch Copilot suggest the implementation!
4. Press Tab to accept

## Best Practices

### 1. **Write Clear Comments**

❌ Bad:
```javascript
// calc
```

✅ Good:
```javascript
// Calculate the total price with tax and discount applied
```

### 2. **Use Descriptive Names**

❌ Bad:
```javascript
function x(a, b) {
```

✅ Good:
```javascript
function calculateMonthlyPayment(principal, interestRate) {
```

### 3. **Provide Context**

Give Copilot examples of your patterns:
```javascript
// Following the pattern in UserService.js, create a ProductService
class ProductService {
```

### 4. **Iterate and Refine**

- First suggestion not perfect? 
- Try `Alt+]` for alternatives
- Modify your prompt/comment
- Use Copilot Chat to refine

## Common Use Cases

### Generate Functions
```python
# Create a function that validates email addresses using regex
```

### Create Classes
```typescript
// User class with name, email, and authentication methods
```

### Write Tests
```javascript
// Unit tests for the calculateTotal function
```

### Database Queries
```sql
-- Select all users who registered in the last 30 days and have verified emails
```

### API Endpoints
```python
# FastAPI endpoint to create a new user with validation
```

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept suggestion | Tab | Tab |
| Dismiss suggestion | Esc | Esc |
| Next suggestion | Alt+] | Option+] |
| Previous suggestion | Alt+[ | Option+[ |
| Open Copilot Chat | Ctrl+Shift+I | Cmd+Shift+I |
| Inline Chat | Ctrl+I | Cmd+I |
| Trigger suggestion | Alt+\ | Option+\ |

## Settings

Customize Copilot in VS Code settings:

```json
{
  // Enable/disable Copilot
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false
  },
  
  // Auto-trigger suggestions
  "editor.inlineSuggest.enabled": true,
  
  // Show suggestion on typing
  "github.copilot.editor.enableAutoCompletions": true
}
```

## Tips for Success

1. **Start with Comments**: Describe what you want in natural language
2. **Break Down Complex Tasks**: Smaller pieces get better suggestions
3. **Review Suggestions**: Always understand the code before accepting
4. **Learn from Copilot**: See new patterns and approaches
5. **Combine with Your Knowledge**: Copilot assists, you architect

## Limitations

Understand what Copilot can and cannot do:

✅ **Can:**
- Generate boilerplate code
- Suggest implementations
- Complete patterns
- Write tests
- Explain code

❌ **Cannot:**
- Replace your judgment
- Guarantee bug-free code
- Access external systems
- Know your business logic
- Make architectural decisions

## Security and Privacy

- Copilot is trained on public code
- Your code stays private
- Suggestions filtered for security
- Review all generated code
- Don't commit secrets

## Next Steps

Now that you understand the basics:

1. Try the [Chat Modes Guide](./chat-modes.md)
2. Learn [Prompt Engineering](./prompt-engineering.md)
3. Explore [MCP Servers](./mcp-servers.md)
4. Check [Best Practices](./best-practices.md)

## Troubleshooting

### Copilot Not Suggesting?
- Check status icon in bottom right
- Verify you're signed in
- Check network connection
- Restart VS Code

### Suggestions Not Relevant?
- Add more context in comments
- Provide examples
- Use more descriptive names
- Try Copilot Chat instead

### Performance Issues?
- Disable in large files if needed
- Check VS Code performance
- Update extensions

---

**Happy Coding with Copilot! 🤖**

[Back to Main README](../README.md)
