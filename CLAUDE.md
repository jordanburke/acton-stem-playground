# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **STEM education project** designed for hands-on demonstrations at exhibits where students learn to code with AI assistance. The project consists of:

1. **TypeScript Library** (`src/`) - Simple utility functions that students add to during exhibits
2. **React Demo App** (`demo/`) - Web interface showcasing the library functions with live interactions
3. **Auto-Deployment** - GitHub Actions automatically deploys to GitHub Pages on every push

**Live Demo**: https://jordanburke.github.io/acton-stem-playground/

**Target Audience**: STEM exhibit visitors (students aged 10-18) learning to code with AI assistance in a 5-10 minute hands-on session.

## Development Commands

### Pre-Checkin Command

- `pnpm validate` - **Main command**: Format, lint, test, and build everything for checkin

### Library Development (Root Directory)

```bash
# Formatting
pnpm format           # Format code with Prettier (write mode)
pnpm format:check     # Check Prettier formatting without writing

# Linting
pnpm lint             # Fix ESLint issues (write mode)
pnpm lint:check       # Check ESLint issues without fixing

# Testing
pnpm test             # Run tests once
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Run tests with coverage report
pnpm test:ui          # Launch Vitest UI for interactive testing

# Building
pnpm build            # Production build (outputs to dist/)
pnpm build:watch      # Watch mode build
pnpm dev              # Development build with watch mode (alias for build:watch)

# Type Checking
pnpm ts-types         # Check TypeScript types with tsc
```

### Demo App Development (demo/ Directory)

```bash
cd demo
pnpm dev              # Start Vite dev server at http://localhost:5173
pnpm build            # Production build (outputs to demo/dist/)
pnpm preview          # Preview production build locally
```

## Architecture

### Overall Structure

```
acton-stem-playground/
├── src/                       # Library source (utility functions)
│   └── index.ts              # Exported functions with JSDoc
├── test/                      # Vitest test suite
│   └── hello-world.spec.ts   # Comprehensive tests for all functions
├── demo/                      # React demo app
│   ├── src/
│   │   ├── routes/           # TanStack Router pages
│   │   ├── lib/              # Demo-specific utilities
│   │   └── main.tsx          # React app entry point
│   └── dist/                 # Built demo (deployed to GitHub Pages)
└── dist/                      # Built library (dual format: CJS + ESM)
```

### Library Functions Pattern

All functions in `src/index.ts` follow this pattern for STEM exhibit demos:

```typescript
/**
 * Brief description
 * @param paramName - Parameter description
 * @returns Return value description
 */
export const functionName = (param: Type): ReturnType => {
  // Simple, readable implementation
}
```

**Design Goals**:
- Functions are intentionally simple (5-15 lines) for educational clarity
- Focus on fundamental concepts: arrays, strings, numbers, objects
- Include comprehensive JSDoc for learning
- Cover common programming tasks students can relate to

### Demo App Stack

- **React 19 RC**: Latest React with modern features
- **TanStack Router**: File-based routing with type safety
- **Mantine UI**: Component library for consistent styling
- **Vite**: Fast development server and build tool

### Build System

- **tsup**: Library build tool (outputs CommonJS + ES modules + TypeScript declarations)
- **Dual Output**:
  - `lib/` - Development builds (NODE_ENV !== "production")
  - `dist/` - Production builds (NODE_ENV === "production", used for publishing)
- **Vitest**: Testing framework with coverage and UI
- **GitHub Actions**: Automatic deployment to GitHub Pages

### Deployment Flow

```
1. Push to main branch
   ↓
2. GitHub Actions triggers (.github/workflows/deploy.yml)
   ↓
3. Build library (pnpm build at root)
   ↓
4. Build demo app (cd demo && pnpm build)
   ↓
5. Deploy demo/dist to GitHub Pages
   ↓
6. Live at https://jordanburke.github.io/acton-stem-playground/
   (Available in ~1-2 minutes)
```

## Working with STEM Exhibit Sessions

### Adding New Functions

When students request new functions during exhibits:

1. **Add function to `src/index.ts`**:
   - Include proper TypeScript types
   - Add JSDoc documentation
   - Export the function
   - Keep implementation simple and readable

2. **Write tests in `test/hello-world.spec.ts`**:
   - Multiple test cases (happy path, edge cases, error cases)
   - Use descriptive test names
   - Follow existing pattern with `describe` and `it` blocks

3. **Run validation**:
   ```bash
   pnpm validate  # Format, lint, test, build
   ```

4. **Optionally update demo app** (`demo/src/routes/`):
   - Add interactive UI component if time permits
   - Import function from parent library
   - Create visual demonstration

### Function Ideas for Quick Demos

These are proven to work well in 5-10 minute sessions:

**Math Functions** (visual, relatable):
- `calculateCircleArea(radius)` - Geometry
- `fibonacci(n)` - Classic sequence
- `isPrime(number)` - Number properties
- `factorial(n)` - Recursive concept

**String Functions** (fun, immediate feedback):
- `reverseWords(sentence)` - Word manipulation
- `countVowels(text)` - Character counting
- `toTitleCase(text)` - Text formatting
- `isPalindrome(str)` - Already implemented!

**Practical Functions** (real-world applicable):
- `calculateAge(birthYear)` - Date math
- `generatePassword(length)` - Security concept
- `validateEmail(email)` - Input validation
- `convertToEmoji(number)` - Fun Unicode

## Testing Strategy

- **Match complexity**: Simple functions get simple tests; complex logic gets comprehensive tests
- **Coverage goals**: Aim for >80% coverage
- **Edge cases**: Always test empty arrays, zero, negative numbers, empty strings
- **Type safety**: Let TypeScript catch type errors at compile time

Example test structure:
```typescript
describe("functionName", () => {
  it("should handle typical case", () => {
    expect(functionName(input)).toBe(expected)
  })

  it("should handle edge case", () => {
    expect(functionName(edgeInput)).toBe(edgeExpected)
  })

  it("should handle error case", () => {
    expect(() => functionName(invalidInput)).toThrow()
  })
})
```

## Key Documentation Files

- **README.md** - Project overview and features
- **STEM_EXHIBIT_GUIDE.md** - Exhibit hosts/teachers guide with setup and flow
- **DEMO.md** - Detailed student demo scenarios and examples
- **DEPLOYMENT_SETUP.md** - GitHub Pages and Actions configuration
- **STANDARDIZATION_GUIDE.md** - Guide for applying this pattern to other TypeScript projects

## Important Notes

### For Exhibit Context

- **Speed matters**: Students have 5-10 minutes. Simple functions work best.
- **Visual feedback**: The live website provides immediate gratification.
- **No migration code**: This is always a feature branch. Delete old code cleanly.
- **Keep it fun**: Use relatable examples (ages, passwords, emojis, games).

### Code Organization

- **No versioned names**: Avoid patterns like `processV2`, `handleNew`, `ClientOld`
- **Delete, don't deprecate**: Remove old code completely on this feature branch
- **Flat is better**: Use early returns to reduce nesting
- **Comments = refactor opportunity**: If you need comments to explain sections, split into functions

### TypeScript Configuration

- **Strict mode**: Enabled with pragmatic exceptions
- **Target**: ESNext for modern features
- **Output**: tsup handles transpilation; tsc only for type checking
