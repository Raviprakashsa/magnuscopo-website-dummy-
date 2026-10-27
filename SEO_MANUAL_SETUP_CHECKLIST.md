# SEO manual setup checklist

These steps require access to external services and were intentionally not performed by the repository update.

## Build environment

### Staging

Create a local `.env.staging` or set the variables in the staging build environment:

```text
VITE_SITE_ENV=staging
VITE_SITE_URL=https://the360connect.com
VITE_ALLOW_INDEXING=false
VITE_PRODUCTION_URL=
```

Run `npm run build`. Verify `dist/index.html` contains `noindex,follow`, its canonical and social URLs use `https://the360connect.com`, and `dist/sitemap.xml` contains no `<url>` entries. The dummy domain is staging metadata only and is not published as an indexable sitemap. `dist/robots.txt` should still contain `Allow: /` so crawlers can read the noindex response.

### Production

Set all production values explicitly:

```text
VITE_SITE_ENV=production
VITE_SITE_URL=https://magnuscopo.com
VITE_ALLOW_INDEXING=true
VITE_PRODUCTION_URL=https://magnuscopo.com
```

Run `npm run build`. Verify `dist/index.html` and every generated route document under `dist/` contains `index,follow`, route-specific canonical/social/structured-data URLs use the final production URL, and every sitemap URL uses that same host. If `VITE_PRODUCTION_URL` is missing, mismatched, or not HTTPS, the build intentionally remains `noindex,follow` with an empty sitemap. Do not copy a staging `dist` directory to production.

## Local versus Hostinger Git builds

- Local builds read `.env`, `.env.local`, `.env.[mode]`, and shell environment variables through Vite. Keep real deployment values out of committed files; use `.env.local` or an approved secret store.
- Hostinger Git deployments must define the same `VITE_*` variables in the build/deployment environment before `npm run build` runs. Setting them only on your local machine does not affect Hostinger.
- After either build, inspect `dist/index.html`, `dist/robots.txt`, and `dist/sitemap.xml` before uploading the output.

## Hostinger

1. Back up the current public web root.
2. Upload the contents of the tested `dist/` directory, including `.htaccess`, `robots.txt`, and `sitemap.xml`.
3. Confirm Apache rewrite support and that requests for `/business/`, `/colleges/`, `/corporates/`, `/blog/`, and `/contact/` return the SPA entry instead of a 404.
4. Configure one permanent redirect from `https://www.magnuscopo.com/*` to `https://magnuscopo.com/*`, preserving the path and query string, if approved. Test both HTTP and HTTPS variants.
5. Confirm the response headers from the uploaded site include the intended security headers and do not conflict with Hostinger defaults.

## Cloudflare

1. If Cloudflare is authoritative for DNS/proxying, configure the www-to-non-www redirect in Redirect Rules or equivalent.
2. Do not enable HSTS until HTTPS is confirmed stable for the apex and all required subdomains.
3. Purge cached HTML after deployment, then check both canonical and redirecting hosts.

## Search Console

1. Verify the `https://magnuscopo.com/` Domain or URL-prefix property.
2. Submit `https://magnuscopo.com/sitemap.xml`.
3. Inspect the homepage and each sitemap URL. Confirm the selected canonical is the non-www HTTPS URL.
4. Recheck indexing, Core Web Vitals, and enhancements after Google has recrawled the site. No ranking or indexing guarantee is implied.

## Analytics

1. Confirm whether Google Analytics or Tag Manager is already configured outside this repository.
2. If not, create the property and supply the real measurement ID before adding tracking code.
3. Configure consent and privacy disclosures appropriate to the visitors and jurisdictions served.
4. If analytics is added later, measure aggregate clicks for email, phone, WhatsApp, and successful enquiry submission without sending form contents or personal data.

## Local SEO and email

1. Confirm the exact legal/public business name, address, phone, category, hours, and service area.
2. Update and verify the Google Business Profile using the same approved details; use only genuine photos and reviews.
3. Add only official social profiles after their URLs are supplied and verified.
4. Configure SPF, DKIM, and DMARC with the email provider's exact records. Do not copy generic values.
