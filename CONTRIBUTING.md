# Contributing

## Pre-commit Hooks

This project uses Husky to automatically:

1. **Update package-lock.json**: If `package.json` is modified, the lock file is automatically updated and staged

## Before Committing

1. Make sure your code passes type checking: `npm run typecheck`
2. Run tests: `npm run test:run`
3. Build the project: `npm run build`

## Commit Process

1. Stage your changes: `git add .`
2. Commit your changes: `git commit -m "your message"`
3. The pre-commit hook will automatically update `package-lock.json` if `package.json` changed
4. Push your changes: `git push`

