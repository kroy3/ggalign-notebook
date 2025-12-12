# 📤 How to Upload to GitHub (Step-by-Step)

This guide assumes you have **zero Git/GitHub experience**. Follow exactly!

## Part 1: Install Required Software

### 1. Install Git
- **Windows**: Download from [git-scm.com](https://git-scm.com/download/win)
- **Mac**: Open Terminal, type `git --version` (will auto-install if needed)
- **Linux**: `sudo apt-get install git` (Ubuntu/Debian)

### 2. Install Node.js
- Download from [nodejs.org](https://nodejs.org/)
- Choose "LTS" version
- Install with default settings
- Restart computer after installation

### 3. Verify Installation
Open Terminal (Mac/Linux) or Git Bash (Windows):
```bash
git --version     # Should show version number
node --version    # Should show version number
```

## Part 2: Create GitHub Account & Repository

### 1. Sign up for GitHub
- Go to [github.com](https://github.com/)
- Click "Sign up"
- Follow the steps

### 2. Create New Repository
1. Click **"+"** (top right) → **"New repository"**
2. **Repository name**: `ggalign-notebook`
3. **Description**: `Interactive learning hub for ggalign`
4. Select **"Public"**
5. ❌ **DO NOT** check "Add a README"
6. Click **"Create repository"**

### 3. Keep This Page Open!
You'll need it in the next steps.

## Part 3: Prepare Your Project Files

### 1. Organize Files
- Put ALL project files in one folder
- Folder name: `ggalign-notebook`
- Location: Anywhere you like (Desktop is fine)

### 2. Update Configuration
Open these files in a text editor and replace:

**In `package.json`** (line 25 and 30):
```json
"YOUR-USERNAME"  →  "your-actual-github-username"
```

**In `README.md`** (line 10):
```markdown
YOUR-USERNAME  →  your-actual-github-username
Your Name      →  Your Actual Name
```

**In `vite.config.js`** (if repo name is different):
```javascript
base: '/ggalign-notebook/'  →  base: '/your-repo-name/'
```

### 3. Open Terminal in Project Folder

**Windows**:
- Open folder in File Explorer
- Right-click inside folder
- Select "Git Bash Here"

**Mac**:
- Open Terminal
- Type `cd ` (with space)
- Drag folder into Terminal
- Press Enter

**Linux**:
- Right-click folder
- Select "Open in Terminal"

## Part 4: Upload to GitHub

Copy and paste these commands **ONE AT A TIME**, pressing Enter after each:

### Step 1: Install Dependencies
```bash
npm install
```
⏱️ Wait 30-60 seconds...

### Step 2: Initialize Git
```bash
git init
```

### Step 3: Configure Git (First Time Only)
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Step 4: Stage All Files
```bash
git add .
```

### Step 5: Commit Files
```bash
git commit -m "Initial commit: ggalign Learning Hub"
```

### Step 6: Add GitHub Connection
**⚠️ IMPORTANT: Replace YOUR-USERNAME with your GitHub username!**
```bash
git remote add origin https://github.com/YOUR-USERNAME/ggalign-notebook.git
```

### Step 7: Rename Branch
```bash
git branch -M main
```

### Step 8: Push to GitHub
```bash
git push -u origin main
```

**First time?** You'll be asked to login:
- Enter your GitHub username
- For password, use a **Personal Access Token** (see below)

#### How to Get Personal Access Token (PAT)
1. Go to GitHub.com
2. Click your profile picture → **Settings**
3. Scroll down → **Developer settings**
4. **Personal access tokens** → **Tokens (classic)**
5. **Generate new token** → **Generate new token (classic)**
6. Note: "ggalign-notebook"
7. Select scopes: ✅ **repo** (all options)
8. Click **Generate token**
9. **COPY TOKEN IMMEDIATELY** (you can't see it again!)
10. Use this as your password when pushing

## Part 5: Deploy to GitHub Pages

### Step 1: Build and Deploy
```bash
npm run deploy
```
⏱️ Wait 1-2 minutes...

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under "Source":
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Click **Save**

### Step 3: Wait and Visit
⏱️ Wait 2-5 minutes for deployment...

Then visit:
```
https://YOUR-USERNAME.github.io/ggalign-notebook
```

## 🎉 Success!

Your learning hub is now live! 

## Making Updates Later

After making changes to files:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
npm run deploy
```

Wait 2-3 minutes, refresh your site to see changes!

---

## Troubleshooting

### Error: "git: command not found"
**Fix**: Install Git (see Part 1)

### Error: "npm: command not found"
**Fix**: Install Node.js (see Part 1)

### Error: "remote origin already exists"
**Fix**: 
```bash
git remote remove origin
# Then try Step 6 again
```

### Error: "failed to push"
**Fix**: Make sure you're using a Personal Access Token (PAT) as password, not your GitHub password

### Error: "Permission denied"
**Fix**: 
```bash
git remote set-url origin https://YOUR-USERNAME@github.com/YOUR-USERNAME/ggalign-notebook.git
# Then try pushing again
```

### Site shows 404
**Fix**: 
1. Check GitHub Pages is enabled
2. Wait 5 minutes
3. Verify URL format

### Blank page after deployment
**Fix**: Check `vite.config.js` → `base` should match repo name

---

## Video Tutorials (Recommended)

- [Git & GitHub for Beginners](https://www.youtube.com/watch?v=RGOj5yH7evk)
- [How to Use GitHub](https://www.youtube.com/watch?v=nhNq2kIvi9s)

---

## Need More Help?

1. Read `DEPLOYMENT.md` for detailed instructions
2. Google the exact error message
3. Ask in GitHub Discussions
4. Open an issue with screenshots

**You've got this! 💪**
