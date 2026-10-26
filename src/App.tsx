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

function App() {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState('home');
  const [articleSlug, setArticleSlug] = useState<string | null>(null);

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page);
    if (slug) {
      setArticleSlug(slug);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0.5');
        (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    </div>
  );
}

export default App;
