# GitHub Pages Deployment Setup

This guide explains how to set up automatic deployment of the React demo app to GitHub Pages.

## Prerequisites

The React demo app is ready to deploy! It's built with:
- React 19 + Vite
- Tanstack Router
- Mantine UI
- TypeScript

## Setup GitHub Pages (One-Time Setup)

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Save

### Step 2: Create GitHub Actions Workflow

The workflow file `.github/workflows/deploy.yml` has been created locally but needs to be pushed manually (GitHub Apps can't create workflow files).

**Option A: Push manually via git (recommended)**

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

**Option B: Create via GitHub UI**

1. Go to your repo → **Actions** → **New workflow**
2. Click "set up a workflow yourself"
3. Copy the contents from `.github/workflows/deploy.yml`
4. Commit to main branch

### Step 3: Verify Deployment

After the workflow file is added:

1. Go to **Actions** tab on GitHub
2. Watch the "Deploy to GitHub Pages" workflow run
3. Once complete, visit: `https://jordanburke.github.io/acton-stem-playground/`

## How It Works

The GitHub Actions workflow:

1. **Triggers** on every push to `main` branch
2. **Installs** dependencies for both root project and demo app
3. **Builds** the library (`pnpm build` at root)
4. **Builds** the React demo app (`cd demo && pnpm build`)
5. **Deploys** the `demo/dist` folder to GitHub Pages

## For STEM Exhibit Students

Once set up, the workflow is automatic:

1. **Make changes** with Claude Code
2. **Commit**: `git add . && git commit -m "Your message"`
3. **Push**: `git push origin main`
4. **Wait 1-2 minutes** for deployment
5. **View**: Visit `https://jordanburke.github.io/acton-stem-playground/`

## Workflow File Contents

The `.github/workflows/deploy.yml` file contains:

- Node.js 20 setup
- pnpm package manager
- Dependency caching for faster builds
- Library build step
- Demo app build step
- GitHub Pages deployment

## Troubleshooting

### Build fails in Actions

Check the Actions log for errors:
- Library build issues: Run `pnpm build` locally
- Demo build issues: Run `cd demo && pnpm build` locally

### Page shows 404

- Verify GitHub Pages is enabled in Settings
- Check the deployment URL matches your repository name
- Wait a few minutes after first deployment

### Changes don't appear

- Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- Check Actions tab to see if workflow completed
- Clear browser cache

## Local Development

To work on the demo app locally:

```bash
# Install dependencies
cd demo
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Next Steps

Once deployed, you can:

1. **Create a QR code** pointing to the live URL for exhibit visitors
2. **Customize** the demo app colors and styling
3. **Add more demos** as students create new functions
4. **Share** the URL with students to showcase their work

---

🚀 Ready to go live! Just push the workflow file to main branch.
