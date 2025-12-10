#!/bin/bash

# Script to create GitHub repository and push code
# Usage: ./setup-github-repo.sh

set -e

echo "🚀 Setting up GitHub repository for markdown-handler..."

# Check if GH_PAT is set
if [ -z "$GH_PAT" ]; then
  echo "❌ GH_PAT environment variable is not set"
  echo ""
  echo "Please set it with:"
  echo "  export GH_PAT='your_github_token'"
  echo ""
  echo "Or create the repo manually at: https://github.com/new"
  echo "Then run: git push -u origin main"
  exit 1
fi

# Create repository via GitHub API
echo "📦 Creating private repository on GitHub..."
RESPONSE=$(curl -s -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $GH_PAT" \
  https://api.github.com/user/repos \
  -d '{
    "name": "markdown-handler",
    "private": true,
    "description": "Simple React + MUI library for displaying markdown help files with left navigation and right content panel"
  }')

# Check if repo was created or already exists
if echo "$RESPONSE" | grep -q '"message"'; then
  if echo "$RESPONSE" | grep -q "name already exists"; then
    echo "✅ Repository already exists"
  else
    echo "❌ Error creating repository:"
    echo "$RESPONSE" | grep -o '"message":"[^"]*"' || echo "$RESPONSE"
    exit 1
  fi
else
  echo "✅ Repository created successfully"
fi

# Push code
echo "📤 Pushing code to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Done! Repository is available at: https://github.com/ameshkin/markdown-handler"
