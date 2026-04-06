# Chiti Technologies — Unified Design System (UDS) v3.0.0
*Codename: "Enterprise Component Architecture"*
*Context: Transitioning from a visual framework to a strict, developer-installable ecosystem with DataViz, skeleton states, and multi-sensory feedback.*

---

## 1. Single Source of Truth (Token Automation)
V3 abolishes manual CSS variable editing. All values originate from a central `tokens.json` file managed via Figma API/Style Dictionary.
When a designer updates a color in Figma, a CI/CD pipeline automatically:
1. Re-compiles `tokens.json`
2. Generates updated CSS/SCSS variables
3. Exports strictly typed TypeScript interfaces for the React component package (`@chiti/ui`).

---

## 2. Advanced Multi-Theming & Tokens

### 2.1 The Core Theme Layer
*Backgrounds, Surfaces, Text, and Glassmorphism remain synchronized with V2, scaling perfectly across Dark and Light parameters.*

### 2.2 Data Visualization Spaces (NEW)
Designing for `NetQ Command` and `BatchFlow` requires categorical color scales for complex charts. V3 introduces a strictly color-blind safe (WCAG AAA) data palette, avoiding the red/green overlap.
- **Categorical 1 (Sapphire):** `hsl(215, 90%, 55%)`
- **Categorical 2 (Teal):** `hsl(175, 80%, 45%)`
- **Categorical 3 (Violet):** `hsl(270, 70%, 65%)`
- **Categorical 4 (Amber):** `hsl(45, 95%, 60%)`
- **Categorical 5 (Rose):** `hsl(340, 80%, 65%)`

### 2.3 Spatial Scale & Grid
V3 continues to enforce the deterministic 8pt grid (`--space-1` through `--space-12`) ensuring exact alignment across massive B2B data grids and airy D2C landing pages.

---

## 3. High-Fidelity Interaction Patterns

### 3.1 Skeleton Perception States (NEW)
When data is fetching (e.g., waiting for APIs in `BazaarSetu`), the UI must not pop dynamically. Instead, it relies on mathematically rigid Skeleton Loaders.
- **Behavior:** Shimmering gradient overlay intersecting the baseline surface colors.
- **Rules:** Heights and widths must adhere to the 8pt scale to prevent layout shifting when the real data hydrates.

### 3.2 Immersive Micro-Audio & Haptics (NEW)
Elite agencies engage multiple senses. V3 introduces subtle, programmatic audio/haptic responses for critical actions.
- **Primary Click Actions:** A soft, high-frequency 15ms synthetic "tick" (like a premium camera shutter or watch bezel) played via the Web Audio API. 
- **Error States:** A low-frequency dual-pulse to signal invalidation without harsh alarm noises.
- **Mobile Feedback:** Triggers `navigator.vibrate([10])` for high-end tactile feedback.

---

## 4. Component Implementation Strategy (DX)

The HTML/CSS specs are now translated directly into a React/Next.js package.

### Example: The ChitiButton
Developers no longer write classes. They consume the system.
```tsx
import { ChitiButton } from '@chiti/ui';

// Cinematic Conversion Button
<ChitiButton variant="cinematic" size="lg" audioHapticTick>
  Confirm Purchase
</ChitiButton>

// High-Density SaaS Button
<ChitiButton variant="solid" size="sm" loading={isFetching}>
  Export Logs
</ChitiButton>
```

### Example: The ChitiCard
```tsx
import { ChitiCard, ChitiSkeleton } from '@chiti/ui';

<ChitiCard tilt={true} elevation="md">
   {isLoading ? <ChitiSkeleton lines={3} /> : <MetricData />}
</ChitiCard>
```

---
*End of Protocol V3.0.0. The framework is now structured to support deep SaaS dashboards, complex data visualization, and elite multi-sensory marketing platforms.*
