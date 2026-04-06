# Accessibility (a11y) QA Checklist
*Part of the Chiti Technologies V3 Ecosystem*

Before any component or page is merged into the `main` branch, the QA Engineer must verify the following checklist. Chiti aims for strict WCAG 2.1 AA Compliance.

## 1. Keyboard Navigation
- [ ] **Tab Order:** Does pressing `Tab` navigate through the interactive elements logically (top-to-bottom, left-to-right)?
- [ ] **Focus Rings:** Does every focused element trigger the high-contrast `box-shadow` ring defined in `design_v3.md`?
- [ ] **Trap Management:** When a Modal dialog opens, is the keyboard focus "trapped" inside the modal until it is closed?
- [ ] **Actionability:** Can all buttons, checkboxes, and toggles be activated using the `Enter` and `Spacebar` keys independently of a mouse?

## 2. Screen Readers & ARIA
- [ ] **Alt Text:** Do all non-decorative images and avatars have descriptive `alt` tags?
- [ ] **State Announcements:** Are dynamic loading states (like the V3 Skeleton loaders) utilizing `aria-busy="true"`?
- [ ] **Error Callouts:** Do form validation errors trigger an `aria-live="assertive"` region so the screen reader immediately interrupts to announce the error?

## 3. Visual Impairment & Contrast
- [ ] **Contrast Ratio:** Run the UI through a Contrast Checker. Do all primary test surfaces meet the `4.5:1` ratio against their background?
- [ ] **Color Blindness:** Is color the *only* way information is conveyed? (e.g., A red border isn't enough; an error icon or explicit text must accompany the red border using our DataViz tokens).

## 4. Motion Sensitivity
- [ ] **Reduced Motion Trigger:** Open OS Settings, check "Reduce Motion." Refresh the browser. Does the 3D Chiti Card tilt disable completely? Does the Aurora background infinite animation stop entirely?
