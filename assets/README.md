# Chiti Technologies Design System Assets

This folder is for storing design system assets including logos.

## Logo Files

Place your logo files here with these names:
- `logo.png` - Primary logo (recommended: 32x32px or 64x64px)
- `logo.svg` - Vector logo (preferred for scalability)

The design system will automatically detect and load your logo. If no logo is found, it will display the text fallback "C".

## Example Logo Placement

```
assets/
├── logo.png          # Your main logo
├── logo.svg          # Vector version (preferred)
└── icons/            # Future icon assets
```

## Logo Loading Priority

The system tries to load logos in this order:
1. `./assets/logo.png`
2. `./assets/logo.svg`
3. `./assets/chiti-logo.png`
4. `./assets/chiti-logo.svg`
5. `./logo.png`
6. `./logo.svg`

If none are found, the text "C" will be displayed.