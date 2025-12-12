@echo off
REM ggalign Learning Hub - Automated Setup for kroy3 (Windows)
REM This script sets up and deploys your learning hub automatically

echo.
echo ========================================
echo  ggalign Learning Hub - Automated Setup
echo ========================================
echo Repository: https://github.com/kroy3/ggalign-notebook
echo Live Site: https://kroy3.github.io/ggalign-notebook
echo.

REM Check if Node.js is installed
echo Checking prerequisites...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed
    echo Please install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [OK] Node.js found: %NODE_VERSION%

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm is not installed
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo [OK] npm found: %NPM_VERSION%

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git is not installed
    echo Please install Git from: https://git-scm.com/
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('git --version') do set GIT_VERSION=%%i
echo [OK] Git found: %GIT_VERSION%

echo.
echo Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [OK] Dependencies installed successfully

echo.
echo Git Configuration
echo ==================
echo.

REM Check if git is already initialized
if exist .git (
    echo [WARNING] Git repository already exists
    set /p keep_history="Do you want to keep existing git history? (y/n): "
    if /i not "%keep_history%"=="y" (
        rmdir /s /q .git
        git init
        echo [OK] Fresh git repository initialized
    )
) else (
    git init
    echo [OK] Git repository initialized
)

REM Configure git user if not set
for /f "tokens=*" %%i in ('git config user.name') do set GIT_USER=%%i
if "%GIT_USER%"=="" (
    echo.
    set /p git_name="Enter your name for git commits: "
    git config user.name "%git_name%"
)

for /f "tokens=*" %%i in ('git config user.email') do set GIT_EMAIL=%%i
if "%GIT_EMAIL%"=="" (
    set /p git_email="Enter your email for git commits: "
    git config user.email "%git_email%"
)

echo [OK] Git configured
for /f "tokens=*" %%i in ('git config user.name') do echo    Name: %%i
for /f "tokens=*" %%i in ('git config user.email') do echo    Email: %%i

echo.
echo Preparing to push to GitHub...

REM Add remote if it doesn't exist
git remote get-url origin >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    git remote add origin https://github.com/kroy3/ggalign-notebook.git
    echo [OK] Remote 'origin' added
) else (
    echo [WARNING] Remote 'origin' already exists
)

REM Stage all files
git add .
echo [OK] Files staged

REM Commit
git commit -m "Setup: ggalign Learning Hub with AI chat"
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] Nothing to commit or commit failed
)

REM Rename branch to main
git branch -M main
echo [OK] Branch set to 'main'

echo.
echo GitHub Authentication
echo ========================
echo You'll need to authenticate with GitHub.
echo Use your GitHub username and Personal Access Token (PAT).
echo.
echo Don't have a PAT? Create one at:
echo https://github.com/settings/tokens/new
echo Required scope: 'repo' (all repository permissions)
echo.
pause

REM Push to GitHub
echo.
echo Pushing to GitHub...
git push -u origin main
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Push failed
    echo.
    echo Common solutions:
    echo 1. If auth failed: Use Personal Access Token (not password)
    echo 2. If rejected: Try 'git push -u origin main --force'
    echo 3. If you have existing content: Review COMPLETE_SETUP_GUIDE.md
    pause
    exit /b 1
)
echo [OK] Code pushed to GitHub successfully

echo.
echo Deploying to GitHub Pages...
call npm run deploy
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Deployment failed
    echo Run 'npm run deploy' manually after fixing any issues
    pause
    exit /b 1
)
echo [OK] Deployed successfully

echo.
echo ====================================
echo  Final Step: Enable GitHub Pages
echo ====================================
echo.
echo 1. Open: https://github.com/kroy3/ggalign-notebook/settings/pages
echo 2. Under 'Build and deployment':
echo    - Source: Deploy from a branch
echo    - Branch: gh-pages
echo    - Folder: / (root)
echo 3. Click 'Save'
echo.
echo Wait 2-5 minutes, then visit:
echo.
echo    https://kroy3.github.io/ggalign-notebook
echo.
echo ====================================
echo  Setup Complete!
echo ====================================
echo.
echo Next steps:
echo   - Visit your site (after 2-5 minutes)
echo   - Test all features
echo   - Customize content in src/App.jsx
echo.
echo To update later:
echo   git add .
echo   git commit -m "Your changes"
echo   git push origin main
echo   npm run deploy
echo.
echo Enjoy your ggalign Learning Hub!
echo.
pause
