# SEO manual setup checklist

These steps require access to external services and were intentionally not performed by the repository update.

## Hostinger

1. Back up the current public web root.
2. Upload the contents of the tested `dist/` directory, including `.htaccess`, `robots.txt`, and `sitemap.xml`.
3. Confirm Apache rewrite support and that requests for `/business/`, `/colleges/`, `/corporates/`, `/blog/`, and `/contact/` return the SPA entry instead of a 404.
4. Configure one permanent redirect from `https://www.the360connect.com/*` to `https://the360connect.com/*`, preserving the path and query string. Test both HTTP and HTTPS variants.
5. Confirm the response headers from the uploaded site include the intended security headers and do not conflict with Hostinger defaults.

## Cloudflare

1. If Cloudflare is authoritative for DNS/proxying, configure the www-to-non-www redirect in Redirect Rules or equivalent.
2. Do not enable HSTS until HTTPS is confirmed stable for the apex and all required subdomains.
3. Purge cached HTML after deployment, then check both canonical and redirecting hosts.

## Search Console

1. Verify the `https://the360connect.com/` Domain or URL-prefix property.
2. Submit `https://the360connect.com/sitemap.xml`.
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

