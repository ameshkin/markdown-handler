# Publishing to GitHub Packages

This package is configured to publish to GitHub Packages.

## Prerequisites

1. **GitHub Personal Access Token (PAT)** with `write:packages` permission
   - Go to: https://github.com/settings/tokens
   - Generate new token (classic)
   - Select scope: `write:packages`
   - Save the token securely

## Method 1: Manual Publish (Local)

### Setup

1. Create `.npmrc` file in the project root:
   ```bash
   @ameshkin:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

   Or use environment variable:
   ```bash
   @ameshkin:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

2. Export your token:
   ```bash
   export GITHUB_TOKEN=your_token_here
   ```

### Publish

```bash
# Build the package
npm run build

# Bump version (patch, minor, or major)
npm run version:patch   # 0.1.0 -> 0.1.1
npm run version:minor   # 0.1.0 -> 0.2.0
npm run version:major   # 0.1.0 -> 1.0.0

# Or manually edit package.json version, then:
npm publish
```

## Method 2: Automated Publish (GitHub Actions)

### Option A: Publish on Release

1. Create a new release on GitHub:
   - Go to: https://github.com/ameshkin/markdown-handler/releases/new
   - Create a new tag (e.g., `v0.1.0`)
   - The workflow will automatically publish

### Option B: Manual Workflow Dispatch

1. Go to: https://github.com/ameshkin/markdown-handler/actions/workflows/publish.yml
2. Click "Run workflow"
3. Select version bump type (patch/minor/major)
4. Click "Run workflow"

The workflow will:
- Run tests
- Build the package
- Bump version
- Publish to GitHub Packages

## Installing the Published Package

### Configure .npmrc in consuming project

```bash
@ameshkin:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Install

```bash
npm install @ameshkin/markdown-handler
```

Or with specific version:
```bash
npm install @ameshkin/markdown-handler@0.1.0
```

## Package Location

After publishing, your package will be available at:
- **GitHub Packages**: https://github.com/ameshkin/markdown-handler/packages
- **npm registry**: `@ameshkin/markdown-handler` (via GitHub Packages)

## Troubleshooting

### Authentication Error
- Make sure your token has `write:packages` permission
- Check that `.npmrc` is configured correctly
- Verify token is not expired

### 403 Forbidden
- Ensure the repository is private (required for restricted packages)
- Check that your token has access to the repository

### Version Already Exists
- Bump the version in `package.json` before publishing
- Use `npm version patch/minor/major` to auto-bump

