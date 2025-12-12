# ⚡ Quick Commands for kroy3

Copy and paste these commands in order. That's it!

## First Time Setup

```bash
# 1. Clone your repository
git clone https://github.com/kroy3/ggalign-notebook.git
cd ggalign-notebook

# 2. Copy all the downloaded project files into this folder
# (Do this manually - copy all files from the download)

# 3. Install dependencies
npm install

# 4. Test it works locally
npm run dev
# Open browser to http://localhost:5173
# Press Ctrl+C when done testing

# 5. Push your changes
git add .
git commit -m "Add ggalign Learning Hub"
git push origin main

# 6. Deploy to GitHub Pages
npm run deploy
```

## Enable GitHub Pages

1. Go to: https://github.com/kroy3/ggalign-notebook/settings/pages
2. Source → Branch: **gh-pages**, Folder: **/ (root)**
3. Click **Save**
4. Wait 2-5 minutes
5. Visit: https://kroy3.github.io/ggalign-notebook

## Making Updates Later

```bash
# Make your changes to files, then:
git add .
git commit -m "Your update message"
git push origin main
npm run deploy
```

## Your Live Site

```
https://kroy3.github.io/ggalign-notebook
```

That's it! 🎉
