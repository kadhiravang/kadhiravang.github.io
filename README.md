# Kadhiravan Gopal – Portfolio

Personal portfolio built with React, Vite and TypeScript. Designed in Figma, dark and light themes, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

Needs Node 20.19+ or 22.12+.

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run lint
```

## Where things live

| To change | Edit |
| --- | --- |
| Bio, experience, education, certifications, skills | `src/data/profile.ts` |
| Project cards, hidden repos, labels | `src/data/projects.ts` |
| Colors and layout (tokens match the Figma file) | `src/styles.css` |
| Page title and description (SEO) | `gitprofile.config.ts` |
| Profile photo | drop `public/profile.jpg` (shown automatically; a placeholder shows until then) |
| Résumé | edit `resume/resume.html`, then regenerate the PDF (below) |

## Projects update themselves

The site reads your public repos from the GitHub API on each visit.

- Add the GitHub topic **`portfolio`** to a repo and it appears as a card, using its description, language and topics.
- Add an entry to `curated` in `src/data/projects.ts` for a hand-written blurb or key result.
- Every other original repo shows up under "Earlier work". Hide one with `hiddenRepos`.
- If GitHub is unreachable or rate-limited, the curated cards still render.

## Regenerate the résumé PDF

```bash
chromium --headless --no-sandbox --no-pdf-header-footer --virtual-time-budget=15000 \
  --print-to-pdf=public/Kadhiravan_Gopal_Resume.pdf resume/resume.html
```

Needs internet (the résumé loads Fraunces, Inter and JetBrains Mono from Google Fonts). It should stay one page: check with `pdfinfo public/Kadhiravan_Gopal_Resume.pdf | grep Pages`.
