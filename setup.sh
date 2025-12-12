#!/bin/bash

# ggalign Learning Hub - Quick Setup Script
# This script helps you set up and deploy the project quickly

echo "🚀 ggalign Learning Hub - Setup Script"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

echo ""
echo "📝 Updating configuration files..."

# Update package.json
sed -i "s/YOUR-USERNAME/$GITHUB_USER/g" package.json

# Update README.md
sed -i "s/YOUR-USERNAME/$GITHUB_USER/g" README.md
sed -i "s/Your Name/Your Actual Name/g" README.md

# Update LICENSE
sed -i "s/\[Your Name\]/Your Actual Name/g" LICENSE

echo "✅ Configuration files updated"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start development server"
echo "2. Create a GitHub repository named 'ggalign-notebook'"
echo "3. Push your code:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit'"
echo "   git remote add origin https://github.com/$GITHUB_USER/ggalign-notebook.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo "4. Deploy with 'npm run deploy'"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
echo ""
