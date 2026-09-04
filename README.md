# Sous web

Marketing pages, onboarding, authentication screens, and the restaurant dashboard for Sous.

## Commands

```bash
npm run dev
npm run check
```

`npm run check` runs ESLint, strict TypeScript checking, the Vitest suite, and the production build.

## API mode

Copy `.env.example` to `.env` and set `VITE_API_BASE_URL` to your API origin. The frontend calls:

- `POST /auth/login`
- `POST /auth/signup`
- `POST /contact`

Requests include credentials. Without an API URL, Sous uses a browser-persistent local adapter so signup, login, contact, and dashboard edits remain testable across reloads without pretending that a production backend is connected.
