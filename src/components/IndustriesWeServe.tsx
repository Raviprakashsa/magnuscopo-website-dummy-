import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Building2, Heart, Sparkles, Wrench, Factory, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const industries = [
  {
    icon: GraduationCap,
    title: 'Educational Institutes',
    subtitle: 'Learning Excellence',
    gradient: 'from-[#2D8CFF]/25 via-[#14F4FF]/15 to-white/80',
    hoverGradient: 'from-[#2D8CFF]/35 via-[#14F4FF]/25 to-white/90',
    darkGradient: 'from-[#1a2332]/95 via-[#0f1419]/90 to-[#1a2332]/95',
    darkHoverGradient: 'from-[#1a2332] via-[#0f1419]/95 to-[#1a2332]',
    iconColor: '#1B5A96',
    subtitleColor: '#2D8CFF',
    darkIconColor: '#4A9EFF',
    darkSubtitleColor: '#6BB6FF',
    accentGlow: '#2D8CFF'
  },
  {
    icon: Building2,
    title: 'Real Estate Industries',
    subtitle: 'Property Innovation',
    gradient: 'from-[#14F4FF]/25 via-[#8A4FFF]/15 to-white/80',
    hoverGradient: 'from-[#14F4FF]/35 via-[#8A4FFF]/25 to-white/90',
    darkGradient: 'from-[#1a2332]/95 via-[#0f1419]/90 to-[#1a2332]/95',
    darkHoverGradient: 'from-[#1a2332] via-[#0f1419]/95 to-[#1a2332]',
    iconColor: '#0B7A8F',
    subtitleColor: '#0B7A8F',
    darkIconColor: '#3DBECD',
    darkSubtitleColor: '#5CCDE0',
    accentGlow: '#14F4FF'
  },
  {
    icon: Heart,
    title: 'Health Care',
    subtitle: 'Wellness Technology',
    gradient: 'from-[#8A4FFF]/25 via-[#2D8CFF]/15 to-white/80',
    hoverGradient: 'from-[#8A4FFF]/35 via-[#2D8CFF]/25 to-white/90',
    darkGradient: 'from-[#1a2332]/95 via-[#0f1419]/90 to-[#1a2332]/95',
    darkHoverGradient: 'from-[#1a2332] via-[#0f1419]/95 to-[#1a2332]',
    iconColor: '#5A2D91',
    subtitleColor: '#8A4FFF',
    darkIconColor: '#B47FFF',
    darkSubtitleColor: '#C99AFF',
    accentGlow: '#8A4FFF'
  },
  {
    icon: Sparkles,
    title: 'Beauty',
    subtitle: 'Aesthetic Solutions',
    gradient: 'from-[#2D8CFF]/20 via-[#14F4FF]/20 to-white/80',
    hoverGradient: 'from-[#2D8CFF]/30 via-[#14F4FF]/30 to-white/90',
    darkGradient: 'from-[#1a2332]/95 via-[#0f1419]/90 to-[#1a2332]/95',
    darkHoverGradient: 'from-[#1a2332] via-[#0f1419]/95 to-[#1a2332]',
    iconColor: '#0B7A8F',
    subtitleColor: '#0B7A8F',
    darkIconColor: '#3DBECD',
    darkSubtitleColor: '#5CCDE0',
    accentGlow: '#14F4FF'
  },
  {
    icon: Wrench,
    title: 'Service Providers',
    subtitle: 'Professional Services',
    gradient: 'from-[#8A4FFF]/20 via-[#2D8CFF]/20 to-white/80',
    hoverGradient: 'from-[#8A4FFF]/30 via-[#2D8CFF]/30 to-white/90',
    darkGradient: 'from-[#1a2332]/95 via-[#0f1419]/90 to-[#1a2332]/95',
    darkHoverGradient: 'from-[#1a2332] via-[#0f1419]/95 to-[#1a2332]',
    iconColor: '#5A2D91',
    subtitleColor: '#8A4FFF',
    darkIconColor: '#B47FFF',
    darkSubtitleColor: '#C99AFF',
    accentGlow: '#8A4FFF'
  },
  {
    icon: Factory,
    title: 'Manufacturing Industries',
    subtitle: 'Industrial Innovation',
    gradient: 'from-[#14F4FF]/20 via-[#8A4FFF]/20 to-white/80',
    hoverGradient: 'from-[#14F4FF]/30 via-[#8A4FFF]/30 to-white/90',
    darkGradient: 'from-[#1a2332]/95 via-[#0f1419]/90 to-[#1a2332]/95',
    darkHoverGradient: 'from-[#1a2332] via-[#0f1419]/95 to-[#1a2332]',
    iconColor: '#1B5A96',
    subtitleColor: '#2D8CFF',
    darkIconColor: '#4A9EFF',
    darkSubtitleColor: '#6BB6FF',
    accentGlow: '#2D8CFF'
  },
];

export default function IndustriesWeServe() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-[#0B1426] via-[#0F1B2E] to-[#0B1426]' 
          : 'bg-gradient-to-b from-[#FAFBFC] via-[#F5F7FA] to-[#FAFBFC]'
      }`}>
      
      {/* Dark Mode Texture Overlay */}
      {theme === 'dark' && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332]/30 via-transparent to-[#0f1419]/30" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,_#2D8CFF08_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,_#8A4FFF08_0%,_transparent_50%)]" />
        </div>
      )}
      
      {/* Abstract Background Pattern */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'opacity-30' : 'opacity-15'}`}>
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
          theme === 'light' ? 'bg-[#2D8CFF]/8' : 'bg-[#2D8CFF]/20'
        }`} style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
          theme === 'light' ? 'bg-[#14F4FF]/6' : 'bg-[#14F4FF]/18'
        }`} style={{ animation: 'float 10s ease-in-out infinite reverse' }} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl ${
          theme === 'light' ? 'bg-[#8A4FFF]/5' : 'bg-[#8A4FFF]/15'
        }`} style={{ animation: 'float 12s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-15px) scale(1.02); opacity: 0.4; }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className={`${
              theme === 'light' ? 'text-[#1a2332]' : 'text-white'
            }`}>Industries </span>
            <span className="bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] rounded-full transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`} />
          <p className={`text-xl max-w-3xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${theme === 'dark' ? 'text-gray-300' : 'text-[#4a5568]'}`}>
            Empowering diverse sectors with cutting-edge digital solutions and innovative technology
          </p>
        </div>

        {/* Industries Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className={`absolute -left-4 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 touch-manipulation ${
              theme === 'light'
                ? 'bg-white/90 hover:bg-white border border-gray-200 hover:border-[#2D8CFF]/30 shadow-lg hover:shadow-xl active:scale-95'
                : 'bg-[#1a2332]/95 hover:bg-[#1a2332] border border-[#14F4FF]/30 hover:border-[#14F4FF]/50 shadow-xl active:scale-95'
            }`}
          >
            <ChevronLeft className={`w-5 h-5 sm:w-6 sm:h-6 ${
              theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'
            }`} />
          </button>
          
          <button
            onClick={nextCard}
            className={`absolute -right-4 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 touch-manipulation ${
              theme === 'light'
                ? 'bg-white/90 hover:bg-white border border-gray-200 hover:border-[#2D8CFF]/30 shadow-lg hover:shadow-xl active:scale-95'
                : 'bg-[#1a2332]/95 hover:bg-[#1a2332] border border-[#14F4FF]/30 hover:border-[#14F4FF]/50 shadow-xl active:scale-95'
            }`}
          >
            <ChevronRight className={`w-5 h-5 sm:w-6 sm:h-6 ${
              theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'
            }`} />
          </button>

          {/* Carousel Container */}
          <div className="px-8 sm:px-20 py-8">
            <div className="flex items-end justify-center gap-6">
              {/* Create looped array for seamless display */}
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + industries.length) % industries.length;
                const industry = industries[index];
                const Icon = industry.icon;
                const isCentered = offset === 0;
                
                return (
                  <div
                    key={`${index}-${offset}`}
                    className={`transition-all duration-700 ease-out ${
                      isCentered ? 'scale-110 z-10' : 'scale-90 z-0'
                    }`}
                    style={{ 
                      opacity: isCentered ? 1 : 0.5,
                      filter: isCentered ? 'none' : 'blur(1px)'
                    }}
                  >
                    {/* Card with dynamic height */}
                    <div className={`relative w-72 p-8 cursor-pointer transition-all duration-700 ease-out ${
                      isCentered ? 'h-64' : 'h-56'
                    } ${
                      theme === 'light'
                        ? `bg-gradient-to-br ${isCentered ? industry.hoverGradient : industry.gradient} backdrop-blur-sm border border-white/40 shadow-lg`
                        : `bg-gradient-to-br ${isCentered ? industry.darkHoverGradient : industry.darkGradient} backdrop-blur-sm border shadow-xl`
                    }`} style={{
                      borderRadius: isCentered ? '3rem' : '1.5rem',
                      borderColor: theme === 'dark' ? (isCentered ? `${industry.accentGlow}50` : `${industry.accentGlow}25`) : undefined,
                      boxShadow: theme === 'dark' ? (
                        isCentered 
                          ? `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${industry.accentGlow}40, inset 0 1px 0 rgba(255,255,255,0.1)`
                          : `0 6px 20px rgba(0,0,0,0.3), 0 0 0 1px ${industry.accentGlow}20, inset 0 1px 0 rgba(255,255,255,0.05)`
                      ) : `0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`
                    }}>
                      
                      {/* Content Layout */}
                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-4">
                        {/* Icon */}
                        <div className={`relative rounded-full flex items-center justify-center transition-all duration-700 ease-out w-14 h-14 ${
                          theme === 'light'
                            ? 'bg-white/80 backdrop-blur-sm shadow-sm border border-white/50'
                            : 'bg-[#1a2332]/90 backdrop-blur-sm border shadow-md'
                        }`} style={{
                          borderColor: theme === 'dark' ? `${industry.accentGlow}40` : undefined,
                          boxShadow: theme === 'dark' ? `0 4px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)` : undefined
                        }}>
                          <Icon 
                            className="w-6 h-6 transition-all duration-700 ease-out"
                            style={{ color: theme === 'light' ? industry.iconColor : industry.darkIconColor }}
                          />
                        </div>

                        {/* Text Content */}
                        <div className="w-full">
                          <h3 className={`font-bold transition-all duration-700 ease-out leading-tight mb-2 text-center ${
                            isCentered ? 'text-xl' : 'text-lg'
                          } ${
                            theme === 'light' ? 'text-[#1a2332]' : 'text-white'
                          }`}>
                            {industry.title}
                          </h3>
                          <p className={`font-medium transition-all duration-500 leading-tight text-center ${
                            isCentered ? 'text-sm' : 'text-xs'
                          }`} style={{ 
                            color: theme === 'light' ? industry.subtitleColor : industry.darkSubtitleColor
                          }}>
                            {industry.subtitle}
                          </p>
                        </div>

                        {/* Center Indicator */}
                        <div className={`h-1 rounded-full transition-all duration-500 ${
                          isCentered ? 'w-16 opacity-100' : 'w-0 opacity-0'
                        }`} style={{ 
                          backgroundColor: theme === 'light' ? industry.subtitleColor : industry.darkSubtitleColor
                        }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
