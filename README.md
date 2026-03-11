# strawpot.com

<p align="center">
  <a href="https://github.com/strawpot/strawpot.com/actions/workflows/deploy.yml"><img src="https://img.shields.io/github/actions/workflow/status/strawpot/strawpot.com/deploy.yml?branch=main&style=for-the-badge&label=Deploy" alt="Deploy"></a>
  <a href="https://discord.gg/2BRsCRUrKb"><img src="https://img.shields.io/discord/1476285531464929505?label=Discord&logo=discord&logoColor=white&color=5865F2&style=for-the-badge" alt="Discord"></a>
  <a href="https://github.com/strawpot/strawpot.com/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
</p>

Landing page for [StrawPot](https://github.com/strawpot/strawpot) — an open-source CLI for AI agent orchestration.

**Live at [strawpot.com](https://strawpot.com)**

## Tech Stack

- [Astro](https://astro.build) — static site generator
- Custom CSS with CSS custom properties (no framework)
- [Clash Display](https://www.fontshare.com/fonts/clash-display) + [Satoshi](https://www.fontshare.com/fonts/satoshi) fonts
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
strawpot.com/
├── .github/workflows/
│   ├── ci.yml              # Build verification on PRs
│   └── deploy.yml           # Deploy to GitHub Pages
├── public/
│   ├── favicon.svg
│   ├── favicon.png
│   ├── og-image.png
│   ├── CNAME
│   └── robots.txt
├── src/
│   ├── layouts/Layout.astro # Base layout, fonts, global CSS
│   └── pages/index.astro    # Homepage (all sections)
├── astro.config.mjs
└── package.json
```

## Related

- [strawpot](https://github.com/strawpot/strawpot) — the CLI
- [StrawHub](https://strawhub.dev) — skill & role registry
- [Discord](https://discord.gg/2BRsCRUrKb) — join the community
