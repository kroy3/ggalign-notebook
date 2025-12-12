# 🚀 Deployment Guide

## Step 1: Prepare Your Local Repository

### Initialize Git Repository
```bash
cd /path/to/your/project
git init
git add .
git commit -m "Initial commit: ggalign Learning Hub"
```

## Step 2: Create GitHub Repository

### Option A: Using GitHub CLI
```bash
gh repo create ggalign-notebook --public --source=. --remote=origin
git push -u origin main
```

### Option B: Using GitHub Website
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `ggalign-notebook`
3. Description: `Interactive learning hub for ggalign R package`
4. Make it **Public**
5. Click **Create repository**

### Connect Local to GitHub
```bash
git remote add origin https://github.com/YOUR-USERNAME/ggalign-notebook.git
git branch -M main
git push -u origin main
```

## Step 3: Update Configuration Files

### Update package.json
Replace `YOUR-USERNAME` with your GitHub username in these fields:
```json
"repository": {
  "url": "https://github.com/YOUR-USERNAME/ggalign-notebook.git"
},
"homepage": "https://YOUR-USERNAME.github.io/ggalign-notebook"
```

### Update vite.config.js
Ensure the `base` path matches your repo name:
```javascript
base: '/ggalign-notebook/'
```

### Update README.md
Replace `YOUR-USERNAME` with your GitHub username in the demo link.

## Step 4: Deploy to GitHub Pages

### Method 1: Using npm script (Recommended)
```bash
# Install dependencies
npm install

# Build and deploy
npm run deploy
```

This will:
1. Build your project
2. Create a `gh-pages` branch
3. Push the build to GitHub Pages

### Method 2: Manual deployment
```bash
# Build the project
npm run build

# Install gh-pages if not already installed
npm install -g gh-pages

# Deploy
gh-pages -d dist
```

### Method 3: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Navigate to **Pages** (left sidebar)
4. Under **Source**, select branch: `gh-pages`
5. Click **Save**
6. Your site will be live at: `https://YOUR-USERNAME.github.io/ggalign-notebook`

⏰ **Note**: It may take 2-5 minutes for your site to go live.

## Step 6: Verify Deployment

Visit your site at:
```
https://YOUR-USERNAME.github.io/ggalign-notebook
```

## 🔧 Troubleshooting

### Issue: Blank page after deployment
**Solution**: Check that `vite.config.js` has the correct `base` path:
```javascript
base: '/ggalign-notebook/'  // Must match your repo name
```

### Issue: 404 errors on refresh
**Solution**: This is normal for SPAs on GitHub Pages. The app should still work via navigation.

### Issue: CSS not loading
**Solution**: Ensure `homepage` in `package.json` is correct:
```json
"homepage": "https://YOUR-USERNAME.github.io/ggalign-notebook"
```

## 📝 Updating Your Site

After making changes:

```bash
# Commit changes
git add .
git commit -m "Update: description of changes"
git push origin main

# Rebuild and deploy
npm run deploy
```

## 🌐 Alternative Deployment Options

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🎯 Custom Domain (Optional)

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Add CNAME record in your DNS settings:
   - Type: `CNAME`
   - Name: `www` (or subdomain)
   - Value: `YOUR-USERNAME.github.io`

## ✅ Post-Deployment Checklist

- [ ] Site loads at GitHub Pages URL
- [ ] All navigation works correctly
- [ ] AI chat interface is functional
- [ ] Code examples are visible
- [ ] External links work (ggalign docs, GitHub)
- [ ] Responsive design works on mobile
- [ ] Updated README with correct URLs

## 📧 Need Help?

- GitHub Pages docs: https://docs.github.com/en/pages
- Vite deployment: https://vitejs.dev/guide/static-deploy.html
- Open an issue in your repository for questions

---

**Congratulations! 🎉** Your ggalign Learning Hub is now live!
