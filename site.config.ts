export type SiteEnvironment = 'staging' | 'production';

export interface SiteConfig {
  environment: SiteEnvironment;
  siteUrl: string;
  productionUrl: string | null;
  allowIndexing: boolean;
}

function normalizeSiteUrl(value: string) {
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) {
      return '';
    }
    return url.toString().replace(/\/+$/, '');
  } catch {
    return '';
  }
}

function isHttpsUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function resolveSiteConfig(env: Record<string, string | undefined>): SiteConfig {
  const environment: SiteEnvironment = env.VITE_SITE_ENV === 'production' ? 'production' : 'staging';
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL || 'http://localhost:4173') || 'http://localhost:4173';
  const productionUrl = env.VITE_PRODUCTION_URL ? normalizeSiteUrl(env.VITE_PRODUCTION_URL) || null : null;
  const allowIndexing =
    environment === 'production' &&
    env.VITE_ALLOW_INDEXING === 'true' &&
    productionUrl === siteUrl &&
    isHttpsUrl(siteUrl);

  return { environment, siteUrl, productionUrl, allowIndexing };
}
