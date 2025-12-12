# Quick Start Guide 🚀

Get your ggalign Learning Hub live in **5 minutes**!

## Prerequisites ✓

- Git installed
- Node.js 16+ installed
- GitHub account

## Step 1: Get the Code (30 seconds)

```bash
# Download/clone the project
cd your-projects-folder

# If you have the files, skip to Step 2
# If downloading from GitHub:
git clone https://github.com/YOUR-USERNAME/ggalign-notebook.git
cd ggalign-notebook
```

## Step 2: Quick Setup (1 minute)

### Option A: Automated Setup (Linux/Mac)
```bash
./setup.sh
# Enter your GitHub username when prompted
```

### Option B: Manual Setup (All platforms)

1. **Update package.json**
   - Find `YOUR-USERNAME` (3 places)
   - Replace with your GitHub username

2. **Update README.md**
   - Replace `YOUR-USERNAME` with your GitHub username
   - Replace `Your Name` with your actual name

3. **Install dependencies**
   ```bash
   npm install
   ```

## Step 3: Test Locally (1 minute)

```bash
npm run dev
```

- Browser opens automatically at `localhost:5173`
- ✅ Verify everything works
- 🎨 See your learning hub in action!

## Step 4: Create GitHub Repo (1 minute)

### Option A: GitHub CLI
```bash
gh repo create ggalign-notebook --public --source=. --remote=origin
```

### Option B: GitHub Website
1. Go to [github.com/new](https://github.com/new)
2. Name: `ggalign-notebook`
3. Description: `Interactive learning hub for ggalign`
4. Make it **Public**
5. Click **Create**

## Step 5: Push Code (1 minute)

```bash
# Initialize git (if not done)
git init

# Stage all files
git add .

# Commit
git commit -m "Initial commit: ggalign Learning Hub"

# Add GitHub remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/ggalign-notebook.git

# Push
git branch -M main
git push -u origin main
```

## Step 6: Deploy (1 minute)

```bash
npm run deploy
```

Wait 2-3 minutes, then visit:
```
https://YOUR-USERNAME.github.io/ggalign-notebook
```

**🎉 Done! Your site is live!**

---

## Common Issues & Fixes

### ❌ "npm: command not found"
**Fix**: Install Node.js from [nodejs.org](https://nodejs.org/)

### ❌ Blank page after deployment
**Fix**: Check `vite.config.js` - ensure `base: '/ggalign-notebook/'`

### ❌ CSS not loading
**Fix**: Verify `package.json` homepage matches your GitHub username

### ❌ Git push rejected
**Fix**: 
```bash
git pull origin main --rebase
git push origin main
```

---

## Next Steps

### Make Changes
```bash
# Edit files in src/
npm run dev  # See changes live

# Commit and deploy
git add .
git commit -m "Your changes"
git push origin main
npm run deploy
```

### Customize Content

1. **Update knowledge base**
   - Edit `ggalignKnowledge` in `src/App.jsx`

2. **Add code examples**
   - Edit `quickExamples` in `src/App.jsx`

3. **Change colors**
   - Modify `tailwind.config.js`

### Enable Auto-Deploy

Your site will auto-deploy on every push to main (already configured!)

---

## Commands Cheat Sheet

```bash
npm run dev      # Start development (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages

git add .                    # Stage changes
git commit -m "message"      # Commit
git push origin main         # Push to GitHub
```

---

## Resources

📖 **Full docs**: See `README.md`  
🚀 **Detailed deployment**: See `DEPLOYMENT.md`  
🤝 **Contributing**: See `CONTRIBUTING.md`  
📁 **Project structure**: See `PROJECT_STRUCTURE.md`  

---

## Need Help?

1. Check `DEPLOYMENT.md` for detailed troubleshooting
2. Open an issue on GitHub
3. Review error messages carefully

**Good luck! 🎯**
