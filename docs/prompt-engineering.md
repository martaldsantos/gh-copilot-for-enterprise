# Prompt Engineering for GitHub Copilot 🎯

Learn how to write effective prompts that get the best results from GitHub Copilot.

## The Art of Prompting

Think of prompting as giving instructions to a very capable but literal colleague. Clear, specific instructions yield better results than vague requests.

## Core Principles

### 1. **Be Specific**

❌ **Vague:**
```javascript
// function to process data
```

✅ **Specific:**
```javascript
// Function to process user data: validate email format, hash password with bcrypt, 
// and return sanitized user object with id, email, and createdAt timestamp
```

### 2. **Provide Context**

❌ **No Context:**
```python
# create model
```

✅ **With Context:**
```python
# Using SQLAlchemy, create a User model with:
# - id: Integer, primary key, auto-increment
# - email: String(120), unique, not null
# - password_hash: String(256), not null
# - created_at: DateTime, default now
# Following the pattern in models/product.py
```

### 3. **Use Examples**

❌ **Abstract:**
```typescript
// create validation function
```

✅ **With Examples:**
```typescript
// Create email validation function that:
// - Returns true for: "user@example.com", "name.surname@company.co.uk"
// - Returns false for: "invalid", "@example.com", "user@", "user @example.com"
// - Uses regex pattern matching
```

### 4. **Break Down Complex Tasks**

❌ **Too Complex:**
```python
# build complete authentication system
```

✅ **Step by Step:**
```python
# Step 1: Create password hashing function using bcrypt
# Step 2: Create user registration endpoint with validation
# Step 3: Create login endpoint that returns JWT token
# Step 4: Create middleware to verify JWT tokens
```

## Prompt Patterns

### Pattern 1: The Specification Pattern

Describe exactly what you want:

```javascript
/**
 * Create a function 'calculateShippingCost' that:
 * - Takes: weight (kg), distance (km), isExpress (boolean)
 * - Returns: cost in USD (number)
 * - Formula: baseCost = weight * 0.5 + distance * 0.1
 * - If express: multiply by 1.5
 * - Minimum cost: $5
 * - Maximum cost: $500
 * - Round to 2 decimal places
 */
```

### Pattern 2: The Example-Driven Pattern

Show Copilot what you want through examples:

```python
# Create a function that converts snake_case to camelCase
# Examples:
# "user_name" → "userName"
# "total_price_usd" → "totalPriceUsd"  
# "api_key" → "apiKey"
```

### Pattern 3: The Reference Pattern

Point to existing code:

```typescript
// Following the same pattern as UserService.ts, create a ProductService
// that handles CRUD operations for products with similar error handling
// and logging
```

### Pattern 4: The Constraint Pattern

Define what NOT to do:

```python
# Create a SQL query to get users
# Constraints:
# - Do NOT use SELECT *
# - Must include WHERE clause for active users only
# - Do NOT return password fields
# - Limit results to 100
# - Order by created_at DESC
```

## Advanced Techniques

### Multi-Line Comments for Complex Tasks

```typescript
/**
 * Implement a retry mechanism with exponential backoff:
 * 
 * Requirements:
 * - Generic function that wraps any async operation
 * - Max retries: 3
 * - Initial delay: 1 second
 * - Exponential backoff: delay * 2^attempt
 * - Only retry on network errors, not validation errors
 * - Log each retry attempt
 * - Throw original error after max retries
 * 
 * Type signature: 
 * retryWithBackoff<T>(fn: () => Promise<T>, maxRetries?: number): Promise<T>
 */
```

### Context Through Naming

```javascript
// Good naming helps Copilot understand context
class UserAuthenticationService {
  // Copilot now knows this relates to auth
  async verifyPasswordAndGenerateToken() {
    // Copilot will suggest auth-related code
  }
}
```

### Leveraging Code Above

```python
# Copilot learns from code you've already written
def process_order(order_id: str) -> OrderResult:
    """Process order with validation and payment"""
    order = validate_order(order_id)
    payment = process_payment(order)
    return create_result(order, payment)

# Now Copilot understands the pattern, so this comment is enough:
def process_refund(refund_id: str) -> RefundResult:
    """Process refund with validation and payment reversal"""
    # Copilot will suggest similar pattern
```

## Language-Specific Tips

### JavaScript/TypeScript

```typescript
// Use JSDoc for better suggestions
/**
 * @param {string} userId - The user's unique identifier
 * @param {Object} options - Configuration options
 * @param {boolean} options.includeDeleted - Include deleted records
 * @returns {Promise<User>} The user object
 * @throws {NotFoundError} When user doesn't exist
 */
async function getUser(userId, options = {}) {
```

### Python

```python
# Use type hints and docstrings
def calculate_discount(
    price: float, 
    discount_percent: float, 
    user_tier: str
) -> float:
    """
    Calculate final price after applying discount.
    
    Args:
        price: Original price in USD
        discount_percent: Discount percentage (0-100)
        user_tier: User membership tier ('basic', 'premium', 'vip')
    
    Returns:
        Final price after discount
        
    Raises:
        ValueError: If discount_percent is not between 0 and 100
    """
```

### SQL

```sql
-- Be explicit about table structure and relationships
-- Users table has: id, name, email, created_at
-- Orders table has: id, user_id, total, status, created_at
-- Get total revenue per user for the last 30 days, only completed orders
```

## Real-World Examples

### Example 1: API Endpoint

```python
# Create FastAPI endpoint for user registration:
# - POST /api/auth/register
# - Request body: email (valid email), password (min 8 chars, 1 uppercase, 1 number)
# - Validate email uniqueness
# - Hash password with bcrypt
# - Create user in database
# - Return 201 with user object (exclude password)
# - Return 400 if validation fails
# - Return 409 if email exists
# - Include proper error messages
@app.post("/api/auth/register")
async def register_user(user_data: UserCreate):
```

### Example 2: React Component

```typescript
/**
 * Create a SearchBar component with:
 * - Controlled input with debouncing (300ms)
 * - Clear button (only shown when input has text)
 * - Search icon
 * - Loading state during search
 * - onSearch callback prop
 * - Accessible (ARIA labels)
 * - TypeScript props interface
 * - Tailwind CSS styling
 */
interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder, isLoading }) => {
```

### Example 3: Data Processing

```python
# Transform raw customer data:
# Input: List of dicts with keys: name, email, signup_date (ISO string), status
# Output: DataFrame with columns: customer_id (UUID), name (title case), 
#         email (lowercase), signup_date (datetime), status (categorical),
#         days_since_signup (int), is_active (bool)
# Handle missing values: fill email with 'unknown@example.com', drop rows with missing name
# Sort by signup_date descending
import pandas as pd

def transform_customer_data(raw_data: list[dict]) -> pd.DataFrame:
```

## Prompt Collections

Create reusable prompt templates for common tasks:

### Test Generation Template

```
/tests create [framework] tests for this [component/function/class]
Include:
- Happy path scenarios
- Edge cases ([specific cases])
- Error handling
- Mock [dependencies]
[Coverage target: X%]
```

### Code Review Template

```
Review this code for:
- Security vulnerabilities ([specific concerns])
- Performance issues
- Best practices for [language/framework]
- Error handling
- Code style consistency
Suggest improvements with examples
```

### Refactoring Template

```
Refactor this code to:
- Follow [pattern/principle]
- Improve [readability/performance/maintainability]
- Extract [what to extract]
- Maintain backward compatibility
- Add [what to add]
```

## Common Pitfalls

### ❌ Pitfall 1: Too Vague

```javascript
// bad function
```

**Problem:** Copilot has no idea what you want.

### ❌ Pitfall 2: Assuming Knowledge

```python
# implement the algorithm
```

**Problem:** Which algorithm? For what purpose?

### ❌ Pitfall 3: No Constraints

```typescript
// fetch user data
```

**Problem:** From where? What format? Error handling?

### ❌ Pitfall 4: Over-Complicating

```python
# Create a sophisticated, enterprise-grade, highly scalable, fault-tolerant,
# microservices-based authentication system with blockchain integration
```

**Problem:** Too complex for a single prompt. Break it down!

## Iterative Prompting

Copilot works best with iteration:

**Round 1:**
```javascript
// Create function to validate email
```

**Copilot suggests basic validation**

**Round 2:**
```javascript
// Create function to validate email
// Must support international domains and subdomains
// Return specific error messages for different validation failures
```

**Better result!**

**Round 3: Use Chat**
```
/explain why doesn't this validate international characters?
[Refine based on explanation]
```

## Measuring Success

Good prompts lead to:
- ✅ First suggestion is usable (maybe needs minor tweaks)
- ✅ Code follows project patterns
- ✅ Includes error handling
- ✅ Has appropriate types/validation
- ✅ Requires minimal modification

Poor prompts lead to:
- ❌ Need to cycle through many suggestions
- ❌ Generated code doesn't compile
- ❌ Missing critical functionality
- ❌ Inconsistent with project style
- ❌ Requires complete rewrite

## Practice Exercises

Try improving these prompts:

1. **Before:** `// sort array`  
   **After:** _[Your improved version]_

2. **Before:** `# create database`  
   **After:** _[Your improved version]_

3. **Before:** `// API call`  
   **After:** _[Your improved version]_

## Cheat Sheet

```
📝 Specific > Vague
🎯 Context > Isolation  
📚 Examples > Abstraction
🔨 Constraints > Freedom
🔄 Iterate > One-shot
```

---

**Practice makes perfect! Keep refining your prompts.** 🎯

[← Chat Modes](./chat-modes.md) | [MCP Servers →](./mcp-servers.md)
