# Security & Privacy UI Guidelines
*Part of the Chiti Technologies V3 Ecosystem*

Because we engineer Enterprise SaaS endpoints (e.g., `NetQ Command`), our UI must programmatically safeguard Personally Identifiable Information (PII) and project authority to external auditors.

## 1. Data Masking (PII)
- **Default State:** Highly sensitive data (Social Security Numbers, API Keys, Passwords, Banking Routing) must be masked by default using `***` or bullet entities.
- **Exposure Mechanic:** Data is only revealed when the user clicks an adjacent "Reveal (Eye)" icon. This action triggers a 60-second time-to-live (TTL) visibility timer, after which the UI automatically animates back to the masked state.

## 2. Multi-Factor Authentication (MFA) Patterns
MFA inputs must not cause friction.
- Implement auto-advancing 6-digit OTP fields. When a user types a number, focus immediately jumps to the next box.
- Support clipboard pasting. If a user pastes "123456" into the first box, the UI must automatically parse and distribute the array across all 6 inputs sequentially.

## 3. Session Timeout Modals
If the application detects 15 minutes of idle time:
1. **Warning State (At 14:00):** A modal drops from the top utilizing the semantic `--semantic-warning` token. "Your session will expire in 60 seconds."
2. **Execution:** If no mouse/keyboard interaction is detected, fire the logout API and route the user cleanly back to the `/login` portal.

## 4. Data Processing Consent (GDPR/CCPA)
Consent banners are no longer intrusive bottom-of-screen monoliths.
By default, the UDS utilizes a non-blocking toast notification utilizing the `Glassmorphism` tokens, hovering in the bottom-left corner. It must contain explicit toggles for `Marketing`, `Analytics`, and `Necessary` cookies. There is no pre-checking of non-essential options.
