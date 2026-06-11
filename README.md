# TwoPercent

A modern React starter site for an early-stage leadership development startup. The site uses Vite, React Router, and Tailwind CSS, with no backend, login, signup, or database.

## Pages

- `/` - Home
- `/about` - About
- `/survey` - Survey
- `/game` - Future game placeholder

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Updating The Survey Link

The Google Forms URL is stored in `src/config.js`:

```js
export const GOOGLE_FORMS_URL = 'https://forms.gle/your-google-form-id';
```

Replace the placeholder URL when the real survey is ready.
