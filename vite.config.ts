import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolveSiteConfig } from './site.config';

type StaticMetadata = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
};

const pageMetadata: StaticMetadata[] = [
  {
    title: 'Magnus Copo | EdTech, Hiring & Digital Solutions',
    description: 'Magnus Copo delivers EdTech platforms, skill development, hiring, corporate training, and digital solutions for growing organisations.',
    path: '/',
  },
  {
    title: 'Business Solutions | Magnus Copo',
    description: 'Build your digital presence with website development, software, branding, and digital solutions from Magnus Copo.',
    path: '/business/',
  },
  {
    title: 'College EdTech & Placement Solutions | Magnus Copo',
    description: 'Help students become job-ready with learning platforms, coding practice, assessments, training, and placement solutions from Magnus Copo.',
    path: '/colleges/',
  },
  {
    title: 'Corporate Hiring & Training Solutions | Magnus Copo',
    description: 'Improve hiring, assessments, workforce training, and talent development with Magnus Copo corporate solutions.',
    path: '/corporates/',
  },
  {
    title: 'Insights & Industry Perspectives | Magnus Copo',
    description: 'Explore Magnus Copo insights on EdTech, training, corporate hiring, digital solutions, and business innovation.',
    path: '/blog/',
  },
  {
    title: 'Contact Magnus Copo',
    description: 'Contact Magnus Copo for EdTech, hiring, corporate training, digital solutions, and business enquiries.',
    path: '/contact/',
  },
  {
    title: 'How AI Is Transforming Skill Development & Employability | Magnus Copo',
    description: 'Discover how artificial intelligence is revolutionizing the way we learn, develop skills, and prepare for future careers.',
    path: '/blog/ai-skill-development-employability/',
    type: 'article',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedTime: '2024-12-01T10:00:00Z',
  },
  {
    title: 'The Future of Corporate Hiring: Data, Assessments & Automation | Magnus Copo',
    description: 'Explore how data-driven hiring, smart assessments, and automation are redefining recruitment and talent acquisition strategies.',
    path: '/blog/future-corporate-hiring-data-automation/',
    type: 'article',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedTime: '2024-12-02T10:00:00Z',
  },
];

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function createRouteHtml(
  siteUrl: string,
  allowIndexing: boolean,
  metadata: StaticMetadata,
  entryFile: string,
  styleFiles: string[],
) {
  const canonicalUrl = `${siteUrl}${metadata.path}`;
  const image = metadata.image || `${siteUrl}/MagnusCOPO_Light.svg`;
  const robots = allowIndexing ? 'index,follow' : 'noindex,follow';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': metadata.type === 'article' ? 'Article' : 'Organization',
    ...(metadata.type === 'article'
      ? {
          headline: metadata.title.replace(' | Magnus Copo', ''),
          description: metadata.description,
          url: canonicalUrl,
          image,
          datePublished: metadata.publishedTime,
          author: { '@type': 'Organization', name: 'Magnuscopo LLP' },
        }
      : {
          name: 'Magnuscopo LLP',
          url: siteUrl,
          logo: `${siteUrl}/MagnusCOPO_Light.svg`,
          email: 'marketing@magnuscopo.com',
          telephone: '+917899899691',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '8/2, Novel Office, Halsoor Road',
            addressLocality: 'Bangalore',
            addressRegion: 'Karnataka',
            postalCode: '560042',
            addressCountry: 'IN',
          },
        }),
  };

  return `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/MagnusCOPO_Light.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(metadata.title)}</title>
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta property="og:title" content="${escapeHtml(metadata.title)}" />
    <meta property="og:description" content="${escapeHtml(metadata.description)}" />
    <meta property="og:type" content="${metadata.type || 'website'}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:site_name" content="Magnus Copo" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta property="og:image:alt" content="Magnus Copo logo" />
    <meta name="twitter:card" content="${metadata.type === 'article' ? 'summary_large_image' : 'summary'}" />
    <meta name="twitter:title" content="${escapeHtml(metadata.title)}" />
    <meta name="twitter:description" content="${escapeHtml(metadata.description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
${styleFiles.map((file) => `    <link rel="stylesheet" crossorigin href="/${file}">`).join('\n')}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" crossorigin src="/${entryFile}"></script>
  </body>
</html>
`;
}

function seoBuildPlugin(siteUrl: string, allowIndexing: boolean): Plugin {
  return {
    name: 'seo-build-assets',
    transformIndexHtml(html) {
      return html
        .replaceAll('__SITE_URL__', siteUrl)
        .replaceAll('content="noindex,follow"', `content="${allowIndexing ? 'index,follow' : 'noindex,follow'}"`);
    },
    generateBundle(_, bundle) {
      const routes = pageMetadata.map(({ path }) => path);
      const sitemap = allowIndexing
        ? `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n')}\n</urlset>\n`
        : `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n`;

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });

      const entry = Object.values(bundle).find((item) => item.type === 'chunk' && item.isEntry);
      const styleFiles = Object.values(bundle)
        .filter((item) => item.type === 'asset' && item.fileName.endsWith('.css'))
        .map((item) => item.fileName);
      if (!entry) {
        throw new Error('Unable to find the Vite entry chunk for static SEO pages.');
      }

      for (const metadata of pageMetadata.slice(1)) {
        this.emitFile({
          type: 'asset',
          fileName: `${metadata.path.slice(1)}index.html`,
          source: createRouteHtml(siteUrl, allowIndexing, metadata, entry.fileName, styleFiles),
        });
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const siteConfig = resolveSiteConfig(loadEnv(mode, process.cwd(), ''));

  return {
    plugins: [react(), seoBuildPlugin(siteConfig.siteUrl, siteConfig.allowIndexing)],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    build: {
      assetsDir: 'assets',
      copyPublicDir: true,
    },
  };
});
