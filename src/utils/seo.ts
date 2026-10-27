import { resolveSiteConfig } from '../../site.config';

export const SITE_CONFIG = resolveSiteConfig({
  VITE_SITE_ENV: import.meta.env.VITE_SITE_ENV,
  VITE_SITE_URL: import.meta.env.VITE_SITE_URL,
  VITE_ALLOW_INDEXING: import.meta.env.VITE_ALLOW_INDEXING,
  VITE_PRODUCTION_URL: import.meta.env.VITE_PRODUCTION_URL,
});
export const SITE_URL = SITE_CONFIG.siteUrl;
export const SITE_NAME = 'Magnus Copo';
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/MagnusCOPO_Light.svg`;

export interface SeoMetadata {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
  indexable?: boolean;
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

export function updateSeoMetadata(metadata: SeoMetadata) {
  const canonicalUrl = `${SITE_URL}${metadata.path}`;
  const image = metadata.image || DEFAULT_SOCIAL_IMAGE;

  document.title = metadata.title;
  document.documentElement.lang = 'en-IN';
  setMeta('name', 'description', metadata.description);
  const indexable = SITE_CONFIG.allowIndexing && metadata.indexable !== false;
  setMeta('name', 'robots', indexable ? 'index,follow' : 'noindex,follow');
  setCanonical(canonicalUrl);
  setMeta('property', 'og:title', metadata.title);
  setMeta('property', 'og:description', metadata.description);
  setMeta('property', 'og:type', metadata.type || 'website');
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:site_name', SITE_NAME);
  setMeta('property', 'og:image', image);
  setMeta('property', 'og:image:alt', `${SITE_NAME} logo`);
  setMeta('name', 'twitter:card', 'summary');
  setMeta('name', 'twitter:title', metadata.title);
  setMeta('name', 'twitter:description', metadata.description);
  setMeta('name', 'twitter:image', image);

  if (metadata.publishedTime) {
    setMeta('property', 'article:published_time', metadata.publishedTime);
  } else {
    const publishedTime = document.head.querySelector('meta[property="article:published_time"]');
    publishedTime?.remove();
  }
}
