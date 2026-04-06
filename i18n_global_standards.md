# i18n & Global Localization Standards
*Part of the Chiti Technologies V3 Ecosystem*

## 1. Core Principle
Chiti Technologies builds for global scaling. A UI is only complete if it can survive translation into German (text expansion) or Arabic (Right-to-Left formatting) without breaking the grid.

---

## 2. CSS Logical Properties (The Death of Directional CSS)
Do not use hardcoded left or right physical properties. We strictly enforce the use of Logical Properties to allow automatic structural flipping when the HTML `dir="rtl"` attribute is set.

- **Bad:** `margin-left: 16px;` | **Good:** `margin-inline-start: 16px;`
- **Bad:** `padding-right: 8px;` | **Good:** `padding-inline-end: 8px;`
- **Bad:** `text-align: left;` | **Good:** `text-align: start;`

---

## 3. Translating UI Geometry (Text Expansion)
If your button perfectly fits the English word "Settings", it will break when translated to the German "Einstellungen" (+150% expansion).
- **Rule:** Never hardcode fixed `width` or `height` on buttons, cards, or text-heavy components.
- **Solution:** Use `min-width`, intrinsic sizing (`fit-content`), and `flex-wrap` to allow components to push and grow naturally according to the translated string length.

---

## 4. Typography Fallbacks
Our primary fonts (`Outfit` and `Inter`) are optimized for Latin scripts. If a product scales to Asia or the Middle East, the system must deploy designated fallbacks.
- **Japanese (Kanji):** Fallback to `Noto Sans JP`.
- **Arabic:** Fallback to `Tajawal` or `Cairo`.
- *Note: Ensure the line-heights on fallback fonts are increased slightly, as complex scripts require more vertical breathing room to remain legible at small sizes.*
