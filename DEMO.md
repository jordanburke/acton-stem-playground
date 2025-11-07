# Claude Code Demo Guide for Students

This guide will help you demonstrate Claude Code capabilities to students using this TypeScript library template.

## What is Claude Code?

Claude Code is an AI-powered coding assistant that can:

- Read and understand your codebase
- Write and modify code
- Run tests and builds
- Debug issues
- Refactor code
- Answer questions about your code
- And much more!

## Prerequisites

Before demoing, ensure:

- Dependencies are installed: `pnpm install`
- Everything works: `pnpm validate`

## Demo Scenarios

### 1. Understanding the Codebase

**What to say:** "Let's ask Claude to understand our codebase."

**Try asking:**

- "What functions are exported from this library?"
- "Explain what the isPalindrome function does"
- "What tests do we have?"

### 2. Writing New Functions

**What to say:** "Let's ask Claude to add new functionality."

**Try asking:**

- "Add a function that reverses a string"
- "Create a function that finds the maximum number in an array"
- "Add a function that checks if a number is prime"

**Expected result:** Claude will:

- Add the function to `src/index.ts`
- Include proper TypeScript types
- Add JSDoc documentation
- Potentially suggest adding tests

### 3. Writing Tests

**What to say:** "Now let's make sure our code works by asking Claude to write tests."

**Try asking:**

- "Write tests for the new function you just created"
- "Add edge case tests for the sum function"
- "Add a test for handling negative numbers in filterEvenNumbers"

**Expected result:** Claude will:

- Add tests to the appropriate test file
- Include multiple test cases
- Handle edge cases

### 4. Running Tests and Fixing Issues

**What to say:** "Let's see if our code works!"

**Try asking:**

- "Run the tests"
- "Run the full validation"

If there are failures:

- "Fix the failing test"
- "The test is failing, can you help me understand why?"

### 5. Code Refactoring

**What to say:** "Let's improve our code quality."

**Try asking:**

- "Can you refactor the isPalindrome function to be more readable?"
- "Add better error handling to the celsiusToFahrenheit function"
- "Improve the documentation for all functions"

### 6. Finding and Fixing Bugs

**What to say:** "Let's introduce a bug and see if Claude can help fix it."

First, manually introduce a bug (or ask Claude to):

- Change `num % 2 === 0` to `num % 2 === 1` in filterEvenNumbers

Then ask:

- "Why is the filterEvenNumbers test failing?"
- "Fix the bug in filterEvenNumbers"

### 7. Adding TypeScript Types

**What to say:** "TypeScript helps us catch errors. Let's see Claude work with types."

**Try asking:**

- "Add a Result type that can be either Success or Error"
- "Create an interface for a Student with name, age, and grades"
- "Add a function that validates a Student object"

### 8. Code Explanation

**What to say:** "Claude can explain complex code to help us learn."

**Try asking:**

- "Explain how the reduce function works in the sum function"
- "What does the regex in isPalindrome do?"
- "Explain the TypeScript type system used in this project"

### 9. Project Setup and Configuration

**What to say:** "Claude understands our build tools and configuration."

**Try asking:**

- "What testing framework are we using?"
- "How does the build process work?"
- "What happens when I run pnpm validate?"

### 10. Real-World Features

**What to say:** "Let's build something practical."

**Try asking:**

- "Add a function that validates email addresses"
- "Create a simple shopping cart class with add, remove, and total methods"
- "Add a function that calculates the Fibonacci sequence"

## Tips for a Great Demo

1. **Start Simple**: Begin with basic questions before moving to complex tasks
2. **Show Failures**: Demonstrate how Claude handles and fixes errors
3. **Be Interactive**: Let students suggest features or functions to add
4. **Show the Workflow**: Demonstrate the full cycle: write code → write tests → run tests → fix issues
5. **Highlight TypeScript**: Show how Claude works with types and interfaces
6. **Show Testing**: Emphasize test-driven development with Vitest
7. **Discuss Code Quality**: Show linting, formatting, and validation

## Interactive Exercise Ideas

After the demo, let students try:

1. **Add a Math Function**: "Add a function that calculates the factorial of a number"
2. **String Manipulation**: "Create a function that counts vowels in a string"
3. **Array Operations**: "Add a function that removes duplicates from an array"
4. **Object Manipulation**: "Create a function that merges two Person objects"
5. **Validation**: "Add a function that validates a phone number format"

## Expected Student Questions

**Q: Can Claude write code from scratch?**
A: Yes! Claude can create new functions, classes, and entire files.

**Q: Does Claude understand TypeScript?**
A: Absolutely! Claude works well with TypeScript types, interfaces, and generics.

**Q: Can Claude fix my bugs?**
A: Yes! Claude can analyze errors, understand test failures, and suggest fixes.

**Q: Will Claude write tests for me?**
A: Yes! Claude can write comprehensive test suites using Vitest.

**Q: Can I use Claude for my homework?**
A: Claude is a learning tool! Use it to understand concepts, debug issues, and learn best practices. Make sure you understand the code Claude writes.

## Key Takeaways for Students

1. **AI is a Coding Partner**: Claude helps you code faster and learn as you go
2. **Understanding is Key**: Always read and understand the code Claude writes
3. **Testing Matters**: Claude emphasizes good testing practices
4. **Types Help**: TypeScript catches errors before runtime
5. **Iterative Development**: You can ask Claude to refine and improve code
6. **Best Practices**: Claude follows modern development standards

## Project Structure Reference

```
acton-stem-playground/
├── src/
│   └── index.ts          # Main library code with example functions
├── test/
│   └── hello-world.spec.ts  # Test suite with multiple test cases
├── dist/                 # Built output (after running pnpm build)
├── package.json          # Project configuration and scripts
├── tsconfig.json         # TypeScript configuration
├── vitest.config.ts      # Test configuration
├── tsup.config.ts        # Build configuration
└── README.md             # Project documentation
```

## Development Commands Reference

```bash
# Run all validation (format, lint, test, build)
pnpm validate

# Individual commands
pnpm format        # Format code with Prettier
pnpm lint          # Fix ESLint issues
pnpm test          # Run tests once
pnpm test:watch    # Run tests in watch mode
pnpm test:ui       # Launch Vitest UI
pnpm build         # Production build
pnpm dev           # Development mode with watch
```

## Additional Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code/)

---

Have fun demonstrating the power of AI-assisted development! 🚀
