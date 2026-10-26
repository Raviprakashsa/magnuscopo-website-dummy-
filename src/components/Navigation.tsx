import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'For Business', value: 'business' },
    { label: 'For Colleges', value: 'colleges' },
    { label: 'For Corporates', value: 'corporates' },
    { label: 'Blog', value: 'blog' },
    { label: 'Contact', value: 'contact' },
  ];

  const { theme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        theme === 'light'
          ? isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#D8E4F0] shadow-lg'
            : 'bg-transparent'
          : isScrolled
          ? 'bg-[#0A1A2F]/95 backdrop-blur-xl border-b border-[#14F4FF]/20 shadow-lg shadow-[#2D8CFF]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="hover:scale-105 transition-transform duration-300"
          >
            <img src={theme === 'light' ? '/MagnusCOPO_Light.svg' : '/MagnusCOPO_Dark.svg'} alt="Magnus Copo" className="h-56 w-auto sm:h-60" />
          </button>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 group ${
                  currentPage === item.value
                    ? theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'
                    : theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] transition-all duration-300 ${
                    currentPage === item.value ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                theme === 'light' ? 'text-[#2D8CFF] hover:bg-[#2D8CFF]/10' : 'text-[#14F4FF] hover:bg-[#14F4FF]/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div 
            className={`lg:hidden fixed top-20 left-0 right-0 bottom-0 backdrop-blur-sm animate-fadeIn z-40 ${
              theme === 'dark' ? 'bg-black/70' : 'bg-white/70'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className={`lg:hidden fixed top-20 left-0 right-0 border-b shadow-2xl animate-fadeIn z-50 ${
            theme === 'dark'
              ? 'bg-[#0A1A2F] border-[#14F4FF]/20 shadow-[#2D8CFF]/20'
              : 'bg-white border-[#D8E4F0] shadow-gray-200'
          }`}>
            <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === item.value
                    ? theme === 'light'
                      ? 'bg-[#2D8CFF] text-white'
                      : 'bg-gradient-to-r from-[#2D8CFF]/20 to-[#14F4FF]/20 text-[#14F4FF] border border-[#14F4FF]/30'
                    : theme === 'dark' ? 'text-gray-300 hover:bg-[#14F4FF]/10 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`group relative p-2 rounded-lg transition-all duration-300 ${
        theme === 'light' ? 'hover:bg-[#2D8CFF]/10' : 'hover:bg-[#14F4FF]/10'
      }`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-[#2D8CFF]" />
      ) : (
        <Sun size={20} className="text-[#14F4FF]" />
      )}
    </button>
  );
}
