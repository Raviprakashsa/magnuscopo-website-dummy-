# SEO page metadata map

The production canonical base is `https://magnuscopo.com/`. The public dummy
domain `https://the360connect.com/` is staging-only and remains
`noindex,follow`. Production metadata uses `VITE_SITE_URL` only when it
matches `VITE_PRODUCTION_URL` and indexing is enabled by the production build
variables.

| Path | Title | Indexability | H1/content |
|---|---|---|---|
| `/` | Magnus Copo \| EdTech, Hiring & Digital Solutions | Index | Home hero H1 and supporting sections |
| `/business/` | Business Solutions \| Magnus Copo | Index | Business solutions H1 |
| `/colleges/` | College EdTech & Placement Solutions \| Magnus Copo | Index | Colleges H1 |
| `/corporates/` | Corporate Hiring & Training Solutions \| Magnus Copo | Index | Corporates H1 |
| `/blog/` | Insights & Industry Perspectives \| Magnus Copo | Index | Blog H1 |
| `/blog/ai-skill-development-employability/` | Article title \| Magnus Copo | Index | Article H1 |
| `/blog/future-corporate-hiring-data-automation/` | Article title \| Magnus Copo | Index | Article H1 |
| `/contact/` | Contact Magnus Copo | Index | Contact H1 |

Article titles, descriptions, images, and publication dates are read from `src/data/blog-posts.json` at runtime.
