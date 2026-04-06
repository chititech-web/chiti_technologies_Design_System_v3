# Chiti Technologies — Unified Design System v3

Created by **Prabhakar Kumar**, this proprietary component architecture powers BazaarSetu, NetQ Command, and Project Nova.

## Features

- ✅ Runtime density multiplier via `--dm` CSS variable
- ✅ Multi-sensory haptic audio engine (15ms tick)
- ✅ 3-layer token architecture: Primitive → Semantic → Component
- ✅ Colorblind-safe DataViz palette
- ✅ Ethical Protocol governance layer
- ✅ Full dark/light mode support
- ✅ 1-click copy component showcase
- ✅ Cross-promotion integration with Chiti Studio agency

## Quick Links

| Resource | URL |
|----------|-----|
| **Live Demo** | https://chitiusdv30.vercel.app/ |
| **Storybook** | `npm run storybook` (runs on port 6006) |
| **NPM Package** | https://www.npmjs.com/package/@chiti/ui |
| **GitHub** | https://github.com/prabhakarmdes12-cmyk/chiti_technologies_Design_System_v3 |
| **Chiti Studio** | https://portfolio2026-ruby.vercel.app/ |

## Installation

### 1. HTML/CSS (Direct Use)
Copy `design_system_showcase_v3.html` and use the component classes directly.

### 2. React Components
```bash
npm install @chiti/ui
```

**Peer Dependencies:** React 18+, React DOM 18+

```tsx
import { ChitiButton, ChitiCard } from '@chiti/ui';

function App() {
  return (
    <ChitiCard tilt={true}>
      <ChitiButton variant="cinematic" audioHapticTick={true}>
        Click Me
      </ChitiButton>
    </ChitiCard>
  );
}
```

### 3. Storybook (Development)
```bash
npm install
npm run storybook
```
Opens at http://localhost:6006

## For Designers

- **Figma Library** — Coming soon (contact design team for access)
- **Live Demo** — Use https://chitiusdv30.vercel.app/ for reference

## For Developers

### Small Teams (1-5 people)
- Use the live demo for quick prototyping
- Copy components directly from the showcase
- Customize tokens in `tokens.css` for branding

### Large Teams (6+ people)
- Integrate via npm for version control
- Use the token architecture for consistent theming
- Leverage the haptic engine for enhanced UX

## Storybook

Run `npm run storybook` to view the interactive component documentation. Storybook provides:
- Live component playground
- State variations (default, hover, disabled, error)
- Copy-paste code snippets

## Links

- **Chiti Studio**: https://portfolio2026-ruby.vercel.app/
- **Live Demo**: https://chitiusdv30.vercel.app/
- **NPM Package**: https://www.npmjs.com/package/@chiti/ui
- **GitHub Repo**: https://github.com/prabhakarmdes12-cmyk/chiti_technologies_Design_System_v3

---

**Chiti Technologies © 2026 | Built by Prabhakar Kumar**
