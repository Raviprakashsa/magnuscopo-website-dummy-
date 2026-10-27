import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PostFooterBrandReveal from './components/PostFooterBrandReveal';
import ThemeStyles from './components/ThemeStyles';
import HomePage from './pages/HomePage';
import CollegesPage from './pages/CollegesPage';
import CorporatesPage from './pages/CorporatesPage';
import BusinessPage from './pages/BusinessPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';
import { useTheme } from './context/ThemeContext';
import { MessageCircle } from 'lucide-react';
import blogPosts from './data/blog-posts.json';
import { updateSeoMetadata } from './utils/seo';

const pageMetadata = {
  home: {
    title: 'Magnus Copo | EdTech, Hiring & Digital Solutions',
    description: 'Magnus Copo delivers EdTech platforms, skill development, hiring, corporate training, and digital solutions for growing organisations.',
    path: '/',
  },
  business: {
    title: 'Business Solutions | Magnus Copo',
    description: 'Build your digital presence with website development, software, branding, and digital solutions from Magnus Copo.',
    path: '/business/',
  },
  colleges: {
    title: 'College EdTech & Placement Solutions | Magnus Copo',
    description: 'Help students become job-ready with learning platforms, coding practice, assessments, training, and placement solutions from Magnus Copo.',
    path: '/colleges/',
  },
  corporates: {
    title: 'Corporate Hiring & Training Solutions | Magnus Copo',
    description: 'Improve hiring, assessments, workforce training, and talent development with Magnus Copo corporate solutions.',
    path: '/corporates/',
  },
  blog: {
    title: 'Insights & Industry Perspectives | Magnus Copo',
    description: 'Explore Magnus Copo insights on EdTech, training, corporate hiring, digital solutions, and business innovation.',
    path: '/blog/',
  },
  contact: {
    title: 'Contact Magnus Copo',
    description: 'Contact Magnus Copo for EdTech, hiring, corporate training, digital solutions, and business enquiries.',
    path: '/contact/',
  },
  notFound: {
    title: 'Page Not Found | Magnus Copo',
    description: 'The requested Magnus Copo page could not be found.',
    path: '/',
  },
};

function getRouteFromLocation() {
  const normalizePath = (value: string) => {
    const normalized = value.replace(/\/+$/, '');
    return normalized || '/';
  };
  const path = normalizePath(window.location.pathname);
  const articleMatch = path.match(/^\/blog\/([^/]+)$/);
  if (articleMatch) {
    return { page: 'article', slug: decodeURIComponent(articleMatch[1]) };
  }
  const route = Object.entries(pageMetadata).find(([, metadata]) => normalizePath(metadata.path) === path);
  return { page: route?.[0] || 'not-found', slug: null };
}

function App() {
  const { theme } = useTheme();
  const initialRoute = getRouteFromLocation();
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [articleSlug, setArticleSlug] = useState<string | null>(initialRoute.slug);

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page);
    setArticleSlug(slug || null);
    const path = slug ? `/blog/${encodeURIComponent(slug)}/` : pageMetadata[page as keyof typeof pageMetadata]?.path || '/';
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const route = getRouteFromLocation();
      setCurrentPage(route.page);
      setArticleSlug(route.slug);
    };
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0.5');
        (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (currentPage === 'article' && articleSlug) {
      const article = blogPosts.find((post) => post.slug === articleSlug);
      updateSeoMetadata({
        title: article ? `${article.title} | Magnus Copo` : 'Article Not Found | Magnus Copo',
        description: article?.excerpt || 'Magnus Copo insights on EdTech, hiring, training, and digital solutions.',
        path: `/blog/${encodeURIComponent(articleSlug)}/`,
        type: 'article',
        image: article?.featured_image,
        publishedTime: article?.created_at,
        indexable: Boolean(article),
      });
      return;
    }
    if (currentPage === 'not-found') {
      updateSeoMetadata({
        ...pageMetadata.notFound,
        path: `${window.location.pathname.replace(/\/+$/, '') || '/'}/`,
        indexable: false,
      });
      return;
    }
    updateSeoMetadata(pageMetadata[currentPage as keyof typeof pageMetadata] || pageMetadata.home);
  }, [articleSlug, currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'colleges':
        return <CollegesPage />;
      case 'corporates':
        return <CorporatesPage />;
      case 'business':
        return <BusinessPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'article':
        return articleSlug ? <BlogArticlePage slug={articleSlug} onNavigate={handleNavigate} /> : <BlogPage onNavigate={handleNavigate} />;
      case 'not-found':
        return (
          <section className="min-h-screen px-4 pb-20 pt-40 text-center">
            <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
            <p className="mb-8 text-gray-500">The page you requested does not exist.</p>
            <a href="/" className="font-semibold text-[#2D8CFF] hover:underline">Return to the homepage</a>
          </section>
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0A1A2F]' : 'bg-[#F7F9FC]'}`}>
      <ThemeStyles />
      <PostFooterBrandReveal />
      <div className="relative z-10">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="relative">
          {renderPage()}
        </main>
        <div className="relative">
          <Footer onNavigate={handleNavigate} />
          <div className="h-screen" />
        </div>
      </div>
      <a
        href="https://wa.me/+917899899691"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#20BD5A] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  );
}

export default App;
