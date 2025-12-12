# 🚀 Complete Setup Guide for kroy3

This guide will get your ggalign Learning Hub live at:
**https://kroy3.github.io/ggalign-notebook**

## Prerequisites Check ✅

Open Terminal/Command Prompt and verify:

```bash
node --version    # Should show v16 or higher
npm --version     # Should show a version number
git --version     # Should show a version number
```

If any command fails:
- **Node.js**: Download from https://nodejs.org/
- **Git**: Download from https://git-scm.com/

---

## Method 1: Fresh Setup (Recommended) ⭐

### Step 1: Prepare Local Folder

```bash
# Create a new folder for your project
mkdir ggalign-learning-hub
cd ggalign-learning-hub

# Copy all the downloaded project files into this folder
# Make sure to include:
# - src/ folder
# - .github/ folder  
# - All .md, .js, .json files
# - index.html
# - .gitignore, LICENSE, setup.sh
```

### Step 2: Initialize Git

```bash
# Initialize git repository
git init

# Configure git (if first time)
git config --global user.name "kroy3"
git config --global user.email "your-email@example.com"

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: ggalign Learning Hub with AI chat"
```

### Step 3: Connect to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/kroy3/ggalign-notebook.git

# Rename branch to main
git branch -M main

# Push to GitHub (you'll need to authenticate)
git push -u origin main --force
```

**Note**: Using `--force` because we're replacing the existing repository content. This is safe for a new setup.

### Step 4: Install Dependencies

```bash
npm install
```

Wait 30-60 seconds for installation to complete.

### Step 5: Test Locally

```bash
npm run dev
```

Your browser should automatically open to `http://localhost:5173`

✅ **Verify**:
- Homepage loads correctly
- Navigation between topics works
- AI chat interface is visible
- Code examples are showing

Press `Ctrl+C` (or `Cmd+C` on Mac) to stop the server.

### Step 6: Deploy to GitHub Pages

```bash
npm run deploy
```

You should see:
```
Published
```

### Step 7: Configure GitHub Pages

1. Open: https://github.com/kroy3/ggalign-notebook/settings/pages
2. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
3. Click **Save**

### Step 8: Wait and Visit! 🎉

⏱️ Wait 2-5 minutes for GitHub Pages to build...

Then visit: **https://kroy3.github.io/ggalign-notebook**

---

## Method 2: Update Existing Repository

If you already have content in the repository you want to keep:

### Step 1: Clone Existing Repo

```bash
git clone https://github.com/kroy3/ggalign-notebook.git
cd ggalign-notebook
```

### Step 2: Copy New Files

Copy all downloaded project files into this folder, replacing existing files.

### Step 3: Review Changes

```bash
git status    # See what changed
git diff      # See detailed changes (press 'q' to exit)
```

### Step 4: Commit and Push

```bash
git add .
git commit -m "Update: Add ggalign Learning Hub interface"
git push origin main
```

### Step 5: Deploy

```bash
npm install
npm run deploy
```

### Step 6: Configure GitHub Pages

Follow Step 7 from Method 1 above.

---

## Troubleshooting 🔧

### "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### "git: command not found"  
**Solution**: Install Git from https://git-scm.com/

### "remote origin already exists"
**Solution**: 
```bash
git remote remove origin
git remote add origin https://github.com/kroy3/ggalign-notebook.git
```

### "Authentication failed"
**Solution**: Use a Personal Access Token (PAT) instead of password

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Select scopes: ✅ `repo` (all)
4. Generate and **copy the token**
5. Use token as password when Git asks

### "Push rejected / non-fast-forward"
**Solution**: 
```bash
git pull origin main --rebase
git push origin main
```

Or if starting fresh:
```bash
git push origin main --force
```

### Site shows 404 after deployment
**Solution**: 
- Wait 5 more minutes
- Clear browser cache
- Check GitHub Pages settings (Step 7)

### Blank page / white screen
**Solution**: 
- Check browser console (F12) for errors
- Verify `vite.config.js` has: `base: '/ggalign-notebook/'`
- Try hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R`)

### Build fails during deploy
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

---

## Verify Deployment Checklist ✅

- [ ] Local dev server works (`npm run dev`)
- [ ] Code pushed to GitHub successfully
- [ ] `npm run deploy` completed without errors
- [ ] GitHub Pages enabled with `gh-pages` branch
- [ ] Site loads at https://kroy3.github.io/ggalign-notebook
- [ ] All navigation links work
- [ ] AI chat is functional
- [ ] Responsive design works on mobile

---

## Making Updates Later 🔄

After making any changes to files:

```bash
# 1. Test locally
npm run dev

# 2. Commit changes
git add .
git commit -m "Description of changes"
git push origin main

# 3. Deploy
npm run deploy
```

Wait 2-3 minutes, then refresh your site.

---

## Enable Auto-Deploy (Optional) 🤖

Your project includes GitHub Actions for automatic deployment!

**To enable**:
1. Go to: https://github.com/kroy3/ggalign-notebook/settings/pages
2. Under "Build and deployment":
   - **Source**: GitHub Actions
3. Save

Now every push to `main` automatically deploys your site!

---

## File Structure Overview 📁

```
ggalign-notebook/
├── src/
│   ├── App.jsx          # Main app (edit this to customize)
│   ├── main.jsx         # React entry
│   └── index.css        # Styles
├── .github/workflows/
│   └── deploy.yml       # Auto-deploy config
├── package.json         # Dependencies (has your info)
├── vite.config.js       # Build settings
├── index.html           # HTML template
└── [documentation files]
```

---

## Customization Tips 🎨

### Change Content
Edit `src/App.jsx`:
- **Line ~18**: `ggalignKnowledge` object - Topics and explanations
- **Line ~150**: `quickExamples` array - Code examples

### Change Colors
Edit `tailwind.config.js`:
- Theme colors
- Font families
- Custom styles

### Add Your Name
Edit `LICENSE`:
- Replace `[Your Name]` with your actual name

---

## Quick Reference 📋

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Check status
git status

# Commit changes
git add .
git commit -m "message"
git push
```

---

## Success! 🎉

Once your site is live at https://kroy3.github.io/ggalign-notebook:

1. Test all features
2. Share the link!
3. Star the ggalign repo: https://github.com/Yunuuuu/ggalign
4. Customize the content to make it your own

**You did it!** 🚀

---

## Need Help? 💬

- Re-read this guide carefully
- Check the "Troubleshooting" section
- Google the specific error message
- Open an issue: https://github.com/kroy3/ggalign-notebook/issues

Good luck! You've got everything you need. 💪
