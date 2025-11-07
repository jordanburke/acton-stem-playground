# Manual Workflow Setup

Due to GitHub App permissions, the workflow file must be added manually.

## Quick Setup

Copy the `deploy.yml` file to `.github/workflows/`:

```bash
mkdir -p .github/workflows
cp .github-workflows-manual/deploy.yml .github/workflows/
git add .github/workflows/deploy.yml
git commit -m "Add deployment workflow"
git push origin main
```

## What This Does

The workflow automatically:
1. Builds your TypeScript library
2. Builds the React demo app
3. Deploys to GitHub Pages

After setup, every push to main will trigger automatic deployment!

## Alternative: Use GitHub UI

1. Go to your repo → **Actions** → **New workflow**
2. Click "set up a workflow yourself"
3. Copy contents from `deploy.yml`
4. Commit directly on GitHub

---

See `../DEPLOYMENT_SETUP.md` for complete instructions.
