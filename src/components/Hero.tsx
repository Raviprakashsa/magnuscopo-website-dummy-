import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [activeSegment, setActiveSegment] = useState<'colleges' | 'corporates' | 'business'>('business');

  const segments = {
    colleges: {
      title: 'Transform Campus Learning',
      description: 'AI-powered LMS, skill tracking, and placement ecosystem for educational institutions.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    corporates: {
      title: 'Revolutionize Corporate Hiring',
      description: 'Smart recruitment, skill assessments, and employee upskilling solutions.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    business: {
      title: 'Accelerate Business Growth',
      description: 'Full-stack development, branding, and digital transformation services.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  };

  const { theme } = useTheme();

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#0A1A2F] via-[#0D2340] to-[#0A1A2F]'
        : 'bg-gradient-to-b from-[#F7F9FC] via-[#EEF2F7] to-[#F7F9FC]'
    }`}>
      <ParticleBackground />

      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${
        theme === 'dark' ? 'from-[#2D8CFF]/20 via-transparent to-transparent' : 'from-[#2D8CFF]/10 via-transparent to-transparent'
      }`} />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14F4FF] rounded-full filter blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8A4FFF] rounded-full filter blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInUp">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  theme === 'dark' ? 'from-white via-[#14F4FF] to-[#2D8CFF]' : 'from-[#1a2332] via-[#2D8CFF] to-[#1a2332]'
                }`}>
                  Your vision
                </span>
                <br />
                <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  theme === 'dark' ? 'from-[#2D8CFF] to-[#8A4FFF]' : 'from-[#2D8CFF] to-[#1a2332]'
                }`}>
                  our execution
                </span>
              </h1>

              <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-[#4a5568]'
              }`}>
                A technology-driven ecosystem delivering intelligent IT solutions and AI-powered learning platforms that connect businesses, institutions, and talent through innovation.
              </p>

              <div>
                <p className={`text-sm font-medium mb-4 uppercase tracking-wider ${
                  theme === 'dark' ? 'text-gray-400' : 'text-[#6b7280]'
                }`}>Explore Solutions For</p>
                <div className="flex flex-wrap sm:flex-nowrap gap-3">
                  {(['business', 'colleges', 'corporates'] as const).map((segment) => (
                    <button
                      key={segment}
                      onClick={() => {
                        setActiveSegment(segment);
                        onNavigate(segment);
                      }}
                      onMouseEnter={() => setActiveSegment(segment)}
                      className={`relative px-3 py-2.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-lg font-medium transition-all duration-300 overflow-hidden group flex-1 sm:flex-none backdrop-blur-sm ${
                        activeSegment === segment
                          ? theme === 'dark'
                            ? 'bg-gradient-to-r from-[#2D8CFF]/40 to-[#14F4FF]/40 border-2 border-[#14F4FF]/60 text-[#14F4FF] shadow-xl shadow-[#14F4FF]/40 sm:shadow-lg sm:shadow-[#14F4FF]/30'
                            : 'bg-gradient-to-r from-[#2D8CFF] to-[#1e7ce8] border-2 border-[#2D8CFF] text-white shadow-xl shadow-[#2D8CFF]/40 sm:shadow-lg sm:shadow-[#2D8CFF]/30'
                          : theme === 'dark'
                            ? 'bg-[#0A1A2F]/70 border border-[#14F4FF]/30 text-gray-300 hover:border-[#14F4FF]/60 hover:text-white hover:bg-[#0A1A2F]/80 sm:bg-[#0A1A2F]/50 sm:border-[#14F4FF]/20 sm:hover:border-[#14F4FF]/50'
                            : 'bg-white/90 border border-[#e2e8f0] text-[#4a5568] hover:border-[#2D8CFF] hover:text-[#2D8CFF] hover:bg-white sm:bg-white sm:hover:bg-white'
                      }`}
                    >
                      <span className="relative z-10 uppercase text-xs sm:text-sm tracking-wide font-semibold sm:font-medium">
                        {segment === 'business' && 'For Business'}
                        {segment === 'colleges' && 'For Colleges'}
                        {segment === 'corporates' && 'For Corporates'}
                      </span>
                      {activeSegment !== segment && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2D8CFF]/20 to-[#14F4FF]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative animate-fadeInRight">
              <div className={`relative rounded-2xl overflow-hidden border shadow-2xl backdrop-blur-sm ${
                theme === 'dark'
                  ? 'border-[#14F4FF]/30 shadow-[#2D8CFF]/30 bg-[#0A1A2F]/30'
                  : 'border-[#e2e8f0] shadow-gray-200/50 bg-white/50'
              }`}>
                <div className={`absolute inset-0 ${
                  theme === 'dark' ? 'bg-gradient-to-br from-[#2D8CFF]/20 to-[#8A4FFF]/20' : 'bg-gradient-to-br from-[#2D8CFF]/5 to-[#8A4FFF]/5'
                }`} />
                <img
                  src={segments[activeSegment].image}
                  alt={segments[activeSegment].title}
                  className="w-full h-[400px] lg:h-[500px] object-cover transition-all duration-700 transform hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  theme === 'dark' ? 'from-[#0A1A2F] via-transparent to-transparent' : 'from-white via-transparent to-transparent'
                }`} />
                <div className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t ${
                  theme === 'dark' ? 'from-[#0A1A2F] to-transparent' : 'from-white to-transparent'
                }`}>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-[#1a2332]'
                  }`}>{segments[activeSegment].title}</h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-[#4a5568]'}>{segments[activeSegment].description}</p>
                </div>
              </div>

              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-[#14F4FF] rounded-full filter blur-[100px] animate-pulse ${
                theme === 'light' ? 'opacity-5' : 'opacity-5'
              }`} />
              <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-[#8A4FFF] rounded-full filter blur-[100px] animate-pulse ${
                theme === 'light' ? 'opacity-5' : 'opacity-5'
              }`} style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
