# Contributing

## Commit Message Format

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Examples

**✅ Correct (lowercase subject):**
```
feat: add search functionality to sidebar

fix: resolve navigation click handler issue

docs: update README with usage examples

test: add component tests for MarkdownDocsViewer

chore: update package-lock.json
```

**❌ Incorrect (sentence-case subject):**
```
feat: Add search functionality to sidebar  ❌
chore: Update package-lock.json            ❌
```

**Note:** The subject must be lowercase, not sentence-case!

## Pre-commit Hooks

This project uses Husky to run pre-commit hooks that:

1. **Type checking**: Ensures TypeScript code compiles without errors
2. **Lock file sync**: Automatically updates `package-lock.json` if `package.json` changes

## Before Committing

1. Make sure your code passes type checking: `npm run typecheck`
2. Run tests: `npm run test:run`
3. Build the project: `npm run build`

## Commit Process

1. Stage your changes: `git add .`
2. Commit with a proper message: `git commit -m "feat: your message"`
3. The pre-commit hook will automatically:
   - Run type checking
   - Update package-lock.json if needed
4. Push your changes: `git push`

