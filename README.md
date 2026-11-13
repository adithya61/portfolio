# Portfolio

Personal portfolio for Adithya T R. Plain HTML, CSS and JavaScript: no framework, no build step, no dependencies.

## Structure

| File | Responsibility |
| --- | --- |
| `index.html` | Page structure and the text that rarely changes (name, pitch, headings, nav, meta tags). |
| `style.css` | All styling. Colours and fonts are tokens at the top, with light and dark themes. |
| `data.js` | **All content that changes:** projects, skills, links, open-source pull requests, build-log lines. |
| `script.js` | Reads `data.js` and renders it into `index.html`. Also runs the build-log animation. |

Content, structure and behaviour live in separate files, so updating the site is a data edit, not a markup edit.

## Everyday edits (all in `data.js`)

- **Add a project:** copy an object in `projects`, change the fields. Remove `live` or `video` if there is none.
- **Add an open-source pull request:** add an object to `contributions` (a template is in the comment above it). The section lists them automatically.
- **Change skills or links:** edit `skills` and `links`.
- **Add your email:** set `site.email`. It appears as plain text in the contact section.
- **Change the build log:** edit `buildSteps`. Keep each line something a reader can verify.

Numbers such as `{repoCount}` and `{projectCount}` are filled in by `script.js`. The repo count is refreshed from GitHub when the site is online.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy to Netlify

- **Drag and drop:** open your site's Deploys tab and drop the whole folder (or a zip of it).
- **From GitHub:** push this folder to a repository, connect it in Netlify, leave the build command empty and set the publish directory to `.`.

## Design notes

- Fonts are loaded from Google Fonts with system fallbacks, so the page is readable if they fail to load.
- Colours follow the visitor's light or dark setting. The build log stays dark in both.
- With "reduce motion" turned on, the build log is shown in its finished state and the re-run button is hidden.
- Everything is rendered with `textContent`, so text in `data.js` cannot inject markup. Only `http(s)` links are accepted.
- Trade-off: projects and skills are rendered by JavaScript. Search engines run it, but a tool that does not (some link scrapers and résumé parsers) sees only the static text in `index.html`. The meta tags there cover link previews.
