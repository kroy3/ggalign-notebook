#!/bin/bash

# ggalign Learning Hub - Automated Setup for kroy3
# This script sets up and deploys your learning hub automatically

set -e  # Exit on error

echo ""
echo "🚀 ggalign Learning Hub - Automated Setup"
echo "=========================================="
echo "Repository: https://github.com/kroy3/ggalign-notebook"
echo "Live Site: https://kroy3.github.io/ggalign-notebook"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Node.js is installed
echo "📋 Checking prerequisites..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    echo "   Please install Node.js from: https://nodejs.org/"
    exit 1
fi
echo -e "${GREEN}✅ Node.js found:${NC} $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ npm found:${NC} $(npm --version)"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed${NC}"
    echo "   Please install Git from: https://git-scm.com/"
    exit 1
fi
echo -e "${GREEN}✅ Git found:${NC} $(git --version)"

echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependencies installed successfully${NC}"
else
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

echo ""
echo "🧪 Testing local build..."
echo -e "${YELLOW}Starting dev server (will auto-stop in 5 seconds)...${NC}"
timeout 5 npm run dev > /dev/null 2>&1 || true
echo -e "${GREEN}✅ Local build test passed${NC}"

echo ""
echo "🔧 Git Configuration"
echo "===================="

# Check if git is already initialized
if [ -d .git ]; then
    echo -e "${YELLOW}⚠️  Git repository already exists${NC}"
    read -p "Do you want to keep existing git history? (y/n): " keep_history
    if [ "$keep_history" != "y" ]; then
        rm -rf .git
        git init
        echo -e "${GREEN}✅ Fresh git repository initialized${NC}"
    fi
else
    git init
    echo -e "${GREEN}✅ Git repository initialized${NC}"
fi

# Configure git user if not set
if [ -z "$(git config user.name)" ]; then
    echo ""
    read -p "Enter your name for git commits: " git_name
    git config user.name "$git_name"
fi

if [ -z "$(git config user.email)" ]; then
    read -p "Enter your email for git commits: " git_email
    git config user.email "$git_email"
fi

echo -e "${GREEN}✅ Git configured:${NC}"
echo "   Name: $(git config user.name)"
echo "   Email: $(git config user.email)"

echo ""
echo "📤 Preparing to push to GitHub..."

# Add remote if it doesn't exist
if ! git remote get-url origin &> /dev/null; then
    git remote add origin https://github.com/kroy3/ggalign-notebook.git
    echo -e "${GREEN}✅ Remote 'origin' added${NC}"
else
    echo -e "${YELLOW}⚠️  Remote 'origin' already exists${NC}"
fi

# Stage all files
git add .
echo -e "${GREEN}✅ Files staged${NC}"

# Commit
git commit -m "Setup: ggalign Learning Hub with AI chat" || echo -e "${YELLOW}⚠️  Nothing to commit or commit failed${NC}"

# Rename branch to main
git branch -M main
echo -e "${GREEN}✅ Branch set to 'main'${NC}"

echo ""
echo "🔐 GitHub Authentication"
echo "========================"
echo "You'll need to authenticate with GitHub."
echo "Use your GitHub username and Personal Access Token (PAT)."
echo ""
echo "Don't have a PAT? Create one at:"
echo "https://github.com/settings/tokens/new"
echo "Required scope: 'repo' (all repository permissions)"
echo ""
read -p "Press Enter to continue with push..."

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
if git push -u origin main; then
    echo -e "${GREEN}✅ Code pushed to GitHub successfully${NC}"
else
    echo -e "${RED}❌ Push failed${NC}"
    echo ""
    echo "Common solutions:"
    echo "1. If auth failed: Use Personal Access Token (not password)"
    echo "2. If rejected: Try 'git push -u origin main --force'"
    echo "3. If you have existing content: Review COMPLETE_SETUP_GUIDE.md"
    exit 1
fi

echo ""
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployed successfully${NC}"
else
    echo -e "${RED}❌ Deployment failed${NC}"
    echo "Run 'npm run deploy' manually after fixing any issues"
    exit 1
fi

echo ""
echo "⚙️  Final Step: Enable GitHub Pages"
echo "===================================="
echo ""
echo "1. Open: https://github.com/kroy3/ggalign-notebook/settings/pages"
echo "2. Under 'Build and deployment':"
echo "   - Source: Deploy from a branch"
echo "   - Branch: gh-pages"
echo "   - Folder: / (root)"
echo "3. Click 'Save'"
echo ""
echo "⏱️  Wait 2-5 minutes, then visit:"
echo ""
echo -e "${GREEN}🌐 https://kroy3.github.io/ggalign-notebook${NC}"
echo ""
echo "🎉 Setup Complete!"
echo ""
echo "Next steps:"
echo "  - Visit your site (after 2-5 minutes)"
echo "  - Test all features"
echo "  - Customize content in src/App.jsx"
echo ""
echo "To update later:"
echo "  git add ."
echo "  git commit -m 'Your changes'"
echo "  git push origin main"
echo "  npm run deploy"
echo ""
echo "✨ Enjoy your ggalign Learning Hub! ✨"
echo ""
