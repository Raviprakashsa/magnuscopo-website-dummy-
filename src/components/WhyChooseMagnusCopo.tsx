import { useState } from 'react';
import { Lightbulb, Users, GraduationCap, Building2, TrendingUp, Target, Briefcase, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const reasons = [
  {
    id: 1,
    title: 'Innovation at the Core',
    icon: Lightbulb,
    description: 'We build future-ready solutions using AI-driven platforms, smart automation, and data-backed insights. Our products are designed to solve real problems in education, hiring and business operations.',
  },
  {
    id: 2,
    title: 'Strong & Scalable Technical Team',
    icon: Users,
    description: 'Our expert team builds secure, scalable, and high-performance digital platforms. From LMS and assessment systems to enterprise dashboards and custom solutions, we deliver reliable, future-ready systems designed to scale with business needs.',
  },
  {
    id: 3,
    title: 'Growth-Focused Digital Solutions for Business Owners',
    icon: TrendingUp,
    description: 'For business owners, we deliver end-to-end digital solutions including website development, automation, and custom software that drive efficiency, visibility, and scalable growth.',
  },
  {
    id: 4,
    title: 'One Partner. Multiple Solutions. Real Impact.',
    icon: Target,
    description: 'Magnus Copo combines education, technology, and business understanding to deliver solutions that create measurable results.',
  },
  {
    id: 5,
    title: 'Proven Solutions for Corporates',
    icon: Briefcase,
    description: 'We help corporates hire smarter and train faster with data-driven assessments, talent analytics, and workforce upskilling tools that reduce hiring time and improve decision-making.',
  },
];

export default function WhyChooseMagnusCopo() {
  const { theme } = useTheme();
  const [activeCard, setActiveCard] = useState<number | null>(1);

  return (
    <section className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${
      theme === 'light' ? 'bg-gradient-to-b from-gray-50 via-white to-gray-50' : 'bg-gradient-to-b from-[#0A1A2F] via-[#0D2340] to-[#0A1A2F]'
    }`}>
      {theme === 'dark' && (
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full filter blur-[200px] opacity-10" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500 rounded-full filter blur-[200px] opacity-10" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title and Separator */}
          <div className="space-y-8">
            <div className="animate-fadeInUp">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>Why Choose </span>
                <span className="bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] bg-clip-text text-transparent">
                  Us
                </span>
              </h2>
              
              {/* Decorative Separator with Moving Light */}
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] animate-pulse`}
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </div>
                <div className="relative w-32 h-1 bg-gradient-to-r from-[#2D8CFF]/30 via-[#14F4FF]/50 to-[#8A4FFF]/30 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#14F4FF] to-transparent w-16 h-full animate-pulse rounded-full" 
                       style={{ animation: 'moveLight 2s ease-in-out infinite' }} />
                </div>
              </div>
              
              <style>{`
                @keyframes moveLight {
                  0% { transform: translateX(-100%); }
                  50% { transform: translateX(400%); }
                  100% { transform: translateX(-100%); }
                }
              `}</style>
            </div>

            {/* Description for active card - Desktop only */}
            {activeCard && (
              <div className={`hidden lg:block p-6 rounded-2xl backdrop-blur-xl border animate-slideInLeft ${
                theme === 'light'
                  ? 'bg-white/70 border-white/20 shadow-xl'
                  : 'bg-[#0A1A2F]/40 border-[#14F4FF]/20 shadow-2xl shadow-[#2D8CFF]/10'
              }`}>
                <div className="flex items-start gap-4">
                  {(() => {
                    const reason = reasons.find(r => r.id === activeCard);
                    if (!reason) return null;
                    const Icon = reason.icon;
                    return (
                      <>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          theme === 'light'
                            ? 'bg-gradient-to-br from-[#2D8CFF]/10 to-[#14F4FF]/10'
                            : 'bg-gradient-to-br from-[#2D8CFF]/30 to-[#14F4FF]/30'
                        }`}>
                          <Icon className={`w-6 h-6 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold mb-3 ${
                            theme === 'light' ? 'text-[#1a2332]' : 'text-white'
                          }`}>
                            {reason.title}
                          </h3>
                          <p className={`leading-relaxed ${
                            theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'
                          }`}>
                            {reason.description}
                          </p>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Cards */}
          <div className="hidden lg:grid gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.id}
                  onClick={() => setActiveCard(activeCard === reason.id ? null : reason.id)}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeCard === reason.id
                      ? theme === 'light'
                        ? 'bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] text-white shadow-2xl transform scale-105'
                        : 'bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] text-white shadow-2xl shadow-[#2D8CFF]/30 transform scale-105'
                      : theme === 'light'
                      ? 'bg-white border border-gray-200 hover:border-[#2D8CFF]/30 hover:shadow-lg hover:-translate-y-1'
                      : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/10 hover:border-[#14F4FF]/30 hover:bg-[#14F4FF]/5 hover:-translate-y-1'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeCard === reason.id
                        ? 'bg-white/20 backdrop-blur-sm'
                        : theme === 'light'
                        ? 'bg-[#2D8CFF]/10 group-hover:bg-[#2D8CFF]/20'
                        : 'bg-[#14F4FF]/10 group-hover:bg-[#14F4FF]/20'
                    }`}>
                      <Icon className={`w-5 h-5 transition-all duration-300 ${
                        activeCard === reason.id
                          ? 'text-white'
                          : theme === 'light'
                          ? 'text-[#2D8CFF]'
                          : 'text-[#14F4FF]'
                      }`} />
                    </div>
                    <h3 className={`font-semibold transition-colors duration-300 ${
                      activeCard === reason.id
                        ? 'text-white'
                        : theme === 'light'
                        ? 'text-[#1a2332] group-hover:text-[#2D8CFF]'
                        : 'text-white group-hover:text-[#14F4FF]'
                    }`}>
                      {reason.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Dropdown Cards */}
          <div className="lg:hidden space-y-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isExpanded = activeCard === reason.id;
              return (
                <div key={reason.id} className={`rounded-2xl border transition-all duration-300 ${
                  theme === 'light' ? 'border-gray-200 bg-white' : 'border-[#14F4FF]/10 bg-[#0A1A2F]/50'
                }`}>
                  <button
                    onClick={() => setActiveCard(isExpanded ? null : reason.id)}
                    className={`w-full p-4 flex items-center justify-between transition-all duration-300 ${
                      isExpanded
                        ? theme === 'light'
                          ? 'bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] text-white rounded-t-2xl'
                          : 'bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] text-white rounded-t-2xl'
                        : 'hover:bg-gray-50 dark:hover:bg-[#14F4FF]/5 rounded-2xl'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isExpanded
                          ? 'bg-white/20 backdrop-blur-sm'
                          : theme === 'light'
                          ? 'bg-[#2D8CFF]/10'
                          : 'bg-[#14F4FF]/10'
                      }`}>
                        <Icon className={`w-4 h-4 ${
                          isExpanded
                            ? 'text-white'
                            : theme === 'light'
                            ? 'text-[#2D8CFF]'
                            : 'text-[#14F4FF]'
                        }`} />
                      </div>
                      <h3 className={`font-semibold text-left ${
                        isExpanded
                          ? 'text-white'
                          : theme === 'light'
                          ? 'text-[#1a2332]'
                          : 'text-white'
                      }`}>
                        {reason.title}
                      </h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    } ${
                      isExpanded
                        ? 'text-white'
                        : theme === 'light'
                        ? 'text-[#4a5568]'
                        : 'text-gray-400'
                    }`} />
                  </button>
                  {isExpanded && (
                    <div className={`p-4 border-t ${
                      theme === 'light' ? 'border-gray-100 bg-gray-50' : 'border-[#14F4FF]/10 bg-[#0A1A2F]/30'
                    }`}>
                      <p className={`leading-relaxed ${
                        theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'
                      }`}>
                        {reason.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
