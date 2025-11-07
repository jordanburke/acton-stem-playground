# STEM Exhibit Quick Start Guide

Welcome to the STEM Playground! This guide is specifically designed for hands-on demonstrations at STEM exhibits.

## 🎯 For Exhibit Visitors

### What You'll Do

1. **Code with AI** - Use Claude Code to write functions
2. **See it Live** - Push your code and watch it deploy to a real website
3. **Share Your Work** - Show friends and family your creation at the live URL

### The Experience (5-10 minutes)

```
1. Ask Claude to add a new function
   ↓
2. Watch Claude write the code and tests
   ↓
3. Push to GitHub
   ↓
4. See your code live at:
   https://jordanburke.github.io/acton-stem-playground/
```

## 🚀 Quick Start Commands

### Step 1: Make Changes with Claude

Just ask Claude! Examples:
- "Add a function that calculates the area of a circle"
- "Create a function that checks if a number is even"
- "Add a function that reverses the words in a sentence"

### Step 2: Push Your Changes

```bash
git add .
git commit -m "Added my function at STEM exhibit"
git push origin main
```

### Step 3: View Live

Open this URL in any browser:
**https://jordanburke.github.io/acton-stem-playground/**

Your changes will appear in 1-2 minutes!

## 📱 QR Code Setup (For Exhibit Hosts)

Generate a QR code pointing to:
```
https://jordanburke.github.io/acton-stem-playground/
```

Students can scan with their phones to see their code running live!

## 🎓 For Exhibit Hosts/Teachers

### Pre-Exhibit Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jordanburke/acton-stem-playground.git
   cd acton-stem-playground
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Verify everything works:**
   ```bash
   pnpm validate
   ```

4. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - Save

5. **Test deployment:**
   - Make a small change
   - Push to main
   - Visit https://jordanburke.github.io/acton-stem-playground/
   - Verify it works

### During the Exhibit

**Opening Script:**
> "Today you're going to write code using AI, and we'll deploy it to a real website that anyone can visit! Let's start by asking Claude to add a new function..."

**Key Points to Emphasize:**
- Real code, real deployment
- AI assists but you're in control
- Your work is visible to the world
- This is how modern developers work

### Suggested Demo Flow (10 minutes)

**Minutes 0-2:** Introduction
- Show the live website
- Explain what we'll build

**Minutes 2-5:** Code with Claude
- Ask Claude to add a function
- Show how Claude writes code and tests
- Run the tests to verify it works

**Minutes 5-7:** Deploy
- Commit and push changes
- Explain GitHub Actions

**Minutes 7-10:** View Live
- Refresh the live website
- See the new function working
- Let student interact with it

## 💡 Great Functions for Quick Demos

These are quick to implement and visually interesting:

### Math Functions
- `calculateCircleArea(radius)` - Visual with circles
- `fibonacci(n)` - Generate sequence
- `isPrime(number)` - Check if prime

### String Functions
- `reverseWords(sentence)` - Flip word order
- `countVowels(text)` - Count a, e, i, o, u
- `toTitleCase(text)` - Capitalize Each Word

### Fun Functions
- `generatePassword(length)` - Random password
- `calculateAge(birthYear)` - Age calculator
- `convertToEmoji(number)` - Number to emoji

## 🎨 Customization Ideas

Want to make it yours? Ask Claude to:

1. **Change colors:** "Update the website colors to blue and green"
2. **Add animations:** "Add a bounce effect when clicking buttons"
3. **New demos:** "Add a card for my new function to the demo page"
4. **Personalization:** "Add my name to the footer"

## 🐛 Troubleshooting

### "I pushed but don't see changes"
- Wait 1-2 minutes for deployment
- Check GitHub Actions tab for build status
- Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)

### "Tests are failing"
- Ask Claude: "Why are the tests failing?"
- Ask Claude: "Fix the failing tests"

### "Git won't push"
- Check if changes are committed
- Ensure you have write access to the repository

## 📊 Tracking Engagement

You can track exhibit engagement by:
1. **Commits:** Check GitHub commit history
2. **Deployments:** View GitHub Actions runs
3. **Functions Added:** Count exports in `src/index.ts`

## 🎉 After the Exhibit

Students can:
- Fork the repository to keep their work
- Continue building at home
- Share the live URL with friends

## Resources

- **Full Demo Guide:** See [DEMO.md](./DEMO.md)
- **Project Docs:** See [README.md](./README.md)
- **Claude Code Help:** Visit https://docs.claude.com/en/docs/claude-code/

---

**Make it memorable!** Students are creating real software that deploys to the internet. That's powerful! 🚀
