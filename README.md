# Wedding Website Clone (Canva-Style)

A simple, editable, responsive wedding page inspired by your Canva site.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start local dev server:

```bash
npm run dev
```

3. Open the URL shown in terminal (usually `http://localhost:5173`).

## Easiest Way To Update Content

Edit one file: `src/content.js`

- Couple names: `siteContent.couple`
- RSVP text and URL: `siteContent.cta`
- Date/time and venue: `siteContent.event`
- Main image: `siteContent.media.heroImage`
- Extra links: `siteContent.links`
- Footer note: `siteContent.footer`

## Update Colors

In `src/content.js`, edit `theme`:

- `primary`
- `accent`
- `text`
- `textDark`
- `overlay`

## VS Code Rendering Options

1. Terminal + browser:
- Run `npm run dev` in VS Code terminal.
- Open the local URL.

2. VS Code integrated browser:
- Run `npm run dev`.
- Open command palette and use `Simple Browser: Show`.
- Paste `http://localhost:5173`.

3. Live preview extensions:
- You can also use "Live Preview" or "Live Server" extensions, but Vite (`npm run dev`) is the recommended workflow here.
