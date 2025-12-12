# 🖱️ Easy Drag & Drop Upload Guide for GitHub

## Option 1: Upload via GitHub Website (Easiest!)

### Step 1: Go to Your Repository
Open: https://github.com/kroy3/ggalign-notebook

### Step 2: Upload Files
1. Click **"Add file"** (top right)
2. Click **"Upload files"**

### Step 3: Drag & Drop
**Drag these folders into the upload area:**

📁 **Drag the entire `src` folder** (contains 3 files)
```
src/
├── App.jsx
├── index.css
└── main.jsx
```

📁 **Drag the entire `.github` folder** (contains workflows)
```
.github/
└── workflows/
    └── deploy.yml
```

📄 **Drag all root files** (one by one or all together):
- .gitignore
- index.html
- LICENSE
- package.json ⭐
- postcss.config.js
- tailwind.config.js
- vite.config.js
- All .md files (README.md, DEPLOYMENT.md, etc.)
- All .sh and .bat files (setup scripts)

### Step 4: Commit
1. Scroll to bottom
2. Commit message: `Add ggalign Learning Hub files`
3. Click **"Commit changes"**

✅ **Done!** Files are uploaded!

---

## Option 2: Upload via Git Command Line

### Step 1: Download All Files
Download all files to a folder called `ggalign-notebook`

### Step 2: Open Terminal
- **Mac**: Right-click folder → "New Terminal at Folder"
- **Windows**: Right-click folder → "Git Bash Here"
- **Linux**: Right-click folder → "Open in Terminal"

### Step 3: Copy-Paste These Commands

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Add ggalign Learning Hub"

# Connect to GitHub
git remote add origin https://github.com/kroy3/ggalign-notebook.git

# Set branch to main
git branch -M main

# Push to GitHub (you'll login here)
git push -u origin main
```

When prompted:
- **Username**: kroy3
- **Password**: Use your Personal Access Token
  - Get one at: https://github.com/settings/tokens/new
  - Required scope: `repo`

✅ **Done!** Files are uploaded!

---

## ⚠️ Important: Folder Structure

Make sure these folders maintain their structure:

```
ggalign-notebook/
├── .github/          ← Keep this folder structure!
│   └── workflows/
│       └── deploy.yml
│
└── src/             ← Keep this folder structure!
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

**On GitHub Web Upload:**
- When you drag the `src` folder, it will preserve the structure
- When you drag the `.github` folder, it will preserve the structure

---

## 📋 Quick Checklist

After upload, verify on GitHub:

- [ ] Files appear at: https://github.com/kroy3/ggalign-notebook
- [ ] `src` folder exists with 3 files
- [ ] `.github/workflows` folder exists with deploy.yml
- [ ] `README.md` displays on the main page
- [ ] `package.json` exists

---

## 🚀 After Upload - Deploy Your Site

### Step 1: Clone the Repository
```bash
git clone https://github.com/kroy3/ggalign-notebook.git
cd ggalign-notebook
```

### Step 2: Install & Deploy
```bash
npm install
npm run deploy
```

### Step 3: Enable GitHub Pages
1. Go to: https://github.com/kroy3/ggalign-notebook/settings/pages
2. Source → Branch: **gh-pages**, Folder: **/ (root)**
3. Click **Save**

### Step 4: Visit Your Site! 🎉
Wait 2-5 minutes, then visit:
**https://kroy3.github.io/ggalign-notebook**

---

## 🆘 Troubleshooting

### ".github folder doesn't show up"
- On Mac/Linux, folders starting with "." are hidden
- In terminal: `ls -la` to see all files
- They're there, just hidden! Upload anyway.

### "Some files didn't upload"
- Try uploading in smaller batches
- Upload folders separately from root files
- Check file size limits (each file should be < 100MB)

### "Upload failed"
- Check your internet connection
- Try fewer files at once
- Make sure you're logged into GitHub

---

## 🎯 What's Most Important?

**Minimum required files** (if upload limits are an issue):

1. ✅ `src/` folder (3 files)
2. ✅ `.github/workflows/` folder (1 file)
3. ✅ `package.json`
4. ✅ `vite.config.js`
5. ✅ `tailwind.config.js`
6. ✅ `postcss.config.js`
7. ✅ `index.html`
8. ✅ `.gitignore`
9. ✅ `README.md`

Upload the rest later!

---

## ✨ You're Ready!

Choose your method:
- 🖱️ **Drag & Drop** (easiest, no terminal)
- 💻 **Git Commands** (traditional way)

Both work perfectly! Good luck! 🚀
