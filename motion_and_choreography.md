# Motion & Choreography Standards
*Part of the Chiti Technologies V3 Ecosystem*

## 1. The Chiti Motion Philosophy
Motion in Chiti software is not decorative; it is functional. It establishes spatial relationships, provides tactile feedback, and guides the user's eye. We rely on physics-based motion over traditional linear easing.

---

## 2. Physics & Easing Mathematics

### Spring Animations (Primary Interactions)
Whenever possible, utilize spring physics (via Framer Motion, react-spring, or GSAP) instead of CSS `ease-out`. Springs feel natural and interruptible.
- **Hover/Scale States:** `Stiffness: 300, Damping: 20` (Snappy, weighty response)
- **Modal Pop-ins:** `Stiffness: 150, Damping: 15` (Slight, organic bounce)

### CSS Easing Curves (Fallbacks)
When raw CSS must be used, rely on custom cubic-bezier curves to simulate premium motion, avoiding standard browser `ease`.
- **Standard Entrance:** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Standard Exit:** `cubic-bezier(0.7, 0, 0.84, 0)`

---

## 3. The Rules of Choreography

### Asymmetric Durations
Entering elements should take longer than exiting elements.
- **Entrance:** `300ms - 400ms` (Allow the eye to track the incoming data).
- **Exit:** `150ms - 200ms` (Get it out of the way quickly).

### Staggered Entrances
When a list or grid loads (e.g., a dashboard grid in *BatchFlow*), do not animate them all in at once. Stagger the entrances by `30ms` to `50ms` per item to create a cascading, fluid reveal that directs attention from top-left to bottom-right.

---

## 4. Accessibility (Reduced Motion)
All motion must be wrapped in `prefers-reduced-motion: reduce`. If detected, instantly drop complex 3D tilts, spring bounces, and parallax elements to `0ms` cross-fades to protect users susceptible to vestibular motion sickness.
