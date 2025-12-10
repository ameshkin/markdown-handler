# Create GitHub Repository

The repository needs to be created manually or with a valid GitHub token.

## Option 1: Create via GitHub Web UI

1. Go to https://github.com/new
2. Repository name: `markdown-handler`
3. Description: `Simple React + MUI library for displaying markdown help files with left navigation and right content panel`
4. Set to **Private**
5. Don't initialize with README (we already have one)
6. Click "Create repository"

Then run:
```bash
cd ~/_code/my-npm-packages/markdown-handler
git remote add origin https://github.com/ameshkin/markdown-handler.git
git branch -M main
git push -u origin main
```

## Option 2: Create via GitHub API

If you have a GitHub Personal Access Token:

```bash
export GH_PAT="your_github_token_here"
curl -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $GH_PAT" \
  https://api.github.com/user/repos \
  -d '{
    "name": "markdown-handler",
    "private": true,
    "description": "Simple React + MUI library for displaying markdown help files with left navigation and right content panel"
  }'

# Then push
cd ~/_code/my-npm-packages/markdown-handler
git remote add origin https://github.com/ameshkin/markdown-handler.git
git branch -M main
git push -u origin main
```

## Option 3: Install GitHub CLI

```bash
brew install gh
gh auth login
gh repo create markdown-handler --private --source=. --remote=origin --push
```

## Current Status

✅ Git repository initialized  
✅ Code committed locally  
⏳ Waiting for remote repository creation  
⏳ Ready to push once remote is created
