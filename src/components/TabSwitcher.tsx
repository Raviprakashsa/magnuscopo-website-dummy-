import { useState } from 'react';
import { Monitor, GraduationCap, Users, Sparkles, Target, Code, Award, Smartphone, Users2, Briefcase, TrendingUp, UserCheck, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const tabContent = {
  digital: {
    title: 'Digital Solutions',
    icon: Monitor,
    description: 'Professional digital solutions that build trust and drive growth for modern businesses.',
    items: [
      { text: 'Web development', icon: Globe, description: 'Modern, responsive websites that convert visitors into customers with optimized user experiences.' },
      { text: 'App development', icon: Smartphone, description: 'Native and cross-platform mobile applications for seamless user experiences across all devices.' },
      { text: 'Custom softwares', icon: Code, description: 'Tailored software solutions designed to streamline operations and boost productivity.' },
      { text: 'Digital marketing', icon: TrendingUp, description: 'Data-driven marketing strategies that maximize reach, engagement, and conversion rates.' },
    ],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  edtech: {
    title: 'EdTech Solutions',
    icon: GraduationCap,
    description: 'AI-powered learning solutions that transform education and build job-ready students.',
    items: [
      { text: 'AI-powered Learning Management System', icon: Sparkles, description: 'Intelligent LMS with personalized pathways and adaptive content delivery for enhanced learning outcomes.' },
      { text: 'Personalized learning paths with adaptive content', icon: Target, description: 'Customized learning journeys that adapt to individual student needs and learning pace.' },
      { text: 'Interactive coding playground with 4500+ problems', icon: Code, description: 'Comprehensive coding platform with extensive problem sets and real-time practice environments.' },
      { text: 'Automated grading and feedback system', icon: Award, description: 'AI-driven assessment tools that provide instant feedback and detailed performance analytics.' },
    ],
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  hiring: {
    title: 'Hiring & Training Solutions',
    icon: Users,
    description: 'Smart hiring solutions that connect talent with opportunities and build stronger teams.',
    items: [
      { text: 'Smart recruitment and talent acquisition', icon: UserCheck, description: 'AI-driven recruitment processes that identify and attract top talent efficiently and effectively.' },
      { text: 'Customized corporate training solutions', icon: Target, description: 'Tailored learning programs designed to meet specific organizational needs and industry requirements.' },
      { text: 'Staffing and consulting services', icon: Users2, description: 'End-to-end staffing solutions and strategic consulting for optimal workforce management.' },
      { text: 'Employer branding and campus partnerships', icon: Briefcase, description: 'Strategic partnerships and branding initiatives that strengthen talent pipeline and recruitment reach.' },
    ],
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
};

export default function TabSwitcher() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>('digital');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const tabs = [
    { key: 'digital' as const, label: 'Digital Solutions' },
    { key: 'edtech' as const, label: 'EdTech Solutions' },
    { key: 'hiring' as const, label: 'Hiring & Staffing' },
  ];

  const content = tabContent[activeTab];
  const Icon = content.icon;

  return (
    <section className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${
      theme === 'light' ? 'bg-gradient-to-b from-[#F7F9FC] via-[#EEF2F7] to-[#F7F9FC]' : 'bg-gradient-to-b from-[#0A1A2F] via-[#0D2340] to-[#0A1A2F]'
    }`}>
      {theme === 'dark' && (
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2D8CFF] rounded-full filter blur-[200px] opacity-10" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>Our </span>
            <span className="bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent">
              Complete Ecosystem
            </span>
          </h2>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] rounded-full" />
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'
          }`}>
            Explore our integrated solutions designed for the future of education and employment
          </p>
        </div>

        <div className={`relative backdrop-blur-xl rounded-3xl p-4 sm:p-8 ${
          theme === 'light'
            ? 'bg-white border border-[#e2e8f0] shadow-lg'
            : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 shadow-2xl shadow-[#2D8CFF]/20'
        }`}>
          {theme === 'dark' && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/5 to-[#8A4FFF]/5 rounded-3xl" />
          )}

          <div className="relative mb-12">
            {/* Desktop Tab Navigation */}
            <div className={`hidden md:flex gap-6 p-6 rounded-3xl backdrop-blur-xl border ${
              theme === 'light' 
                ? 'bg-white/70 border-white/20 shadow-xl' 
                : 'bg-[#0A1A2F]/40 border-[#14F4FF]/20 shadow-2xl shadow-[#2D8CFF]/10'
            }`}>
              {theme === 'dark' && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D8CFF]/5 via-[#14F4FF]/5 to-[#8A4FFF]/5 rounded-3xl" />
              )}
              
              {tabs.map((tab, index) => {
                const TabIcon = tabContent[tab.key].icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`group relative flex-1 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 overflow-hidden ${
                      activeTab === tab.key
                        ? 'transform -translate-y-2 scale-105'
                        : 'hover:transform hover:-translate-y-1 hover:scale-102'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {activeTab === tab.key ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/80 via-[#14F4FF]/80 to-[#8A4FFF]/80 rounded-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/70 to-[#8A4FFF]/70 rounded-2xl animate-pulse" />
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#2D8CFF]/60 via-[#14F4FF]/60 to-[#8A4FFF]/60 rounded-2xl blur-lg opacity-40 animate-pulse" />
                      </>
                    ) : (
                      <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                        theme === 'light'
                          ? 'bg-gradient-to-br from-gray-50 to-white border border-gray-200 group-hover:border-[#2D8CFF]/20 group-hover:shadow-lg'
                          : 'bg-gradient-to-br from-[#0A1A2F]/50 to-[#0D2340]/50 border border-[#14F4FF]/8 group-hover:border-[#14F4FF]/20 group-hover:bg-[#14F4FF]/3'
                      }`} />
                    )}
                    
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        activeTab === tab.key
                          ? 'bg-white/20 backdrop-blur-sm shadow-lg'
                          : theme === 'light'
                          ? 'bg-[#2D8CFF]/8 group-hover:bg-[#2D8CFF]/15 group-hover:scale-110'
                          : 'bg-[#14F4FF]/8 group-hover:bg-[#14F4FF]/15 group-hover:scale-110'
                      }`}>
                        <TabIcon className={`w-6 h-6 transition-all duration-500 ${
                          activeTab === tab.key
                            ? 'text-white'
                            : theme === 'light'
                            ? 'text-[#2D8CFF]/80 group-hover:scale-110'
                            : 'text-[#14F4FF]/80 group-hover:scale-110'
                        }`} />
                      </div>
                      <div className="text-center">
                        <h4 className={`font-bold text-base transition-all duration-300 ${
                          activeTab === tab.key
                            ? 'text-white'
                            : theme === 'light'
                            ? 'text-[#1a2332] group-hover:text-[#2D8CFF]/80'
                            : 'text-gray-300 group-hover:text-white'
                        }`}>{tab.label}</h4>
                      </div>
                    </div>

                    {activeTab === tab.key && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#14F4FF]/60 via-white/80 to-[#8A4FFF]/60 rounded-full animate-slideIn" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Pill Selector */}
            <div className={`md:hidden relative p-4 rounded-2xl backdrop-blur-xl border ${
              theme === 'light' 
                ? 'bg-white/70 border-white/20 shadow-xl' 
                : 'bg-[#0A1A2F]/40 border-[#14F4FF]/20 shadow-2xl shadow-[#2D8CFF]/10'
            }`}>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                {tabs.map((tab) => {
                  const TabIcon = tabContent[tab.key].icon;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        activeTab === tab.key
                          ? 'bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] text-white shadow-lg'
                          : theme === 'light'
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-[#0A1A2F]/50 text-gray-300 hover:bg-[#14F4FF]/10'
                      }`}
                    >
                      <TabIcon className="w-4 h-4" />
                      <span className="text-sm whitespace-nowrap">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center animate-fadeIn" key={activeTab}>
            {/* Desktop Layout */}
            <div className={`hidden lg:block relative space-y-8 p-8 rounded-2xl ${
              theme === 'light' ? 'bg-gradient-to-br from-[#EBF5FF] via-[#F7F9FC] to-[#F7F9FC]' : ''
            }`}>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    theme === 'light'
                      ? 'bg-gradient-to-br from-[#2D8CFF]/10 to-[#14F4FF]/10 border-[#2D8CFF]/30'
                      : 'bg-gradient-to-br from-[#2D8CFF]/30 to-[#14F4FF]/30 border-[#14F4FF]/30'
                  }`}>
                    <Icon className={`w-8 h-8 transition-all duration-500 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
                  </div>
                  <h3 className={`text-3xl font-bold animate-slideInLeft ${
                    theme === 'light' ? 'text-[#1a2332]' : 'text-white'
                  }`}>{content.title}</h3>
                </div>
              </div>

              <div className="space-y-3">
                {content.items.map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`group flex items-start gap-4 p-5 rounded-xl transition-all duration-300 animate-slideInLeft cursor-pointer ${
                        theme === 'light'
                          ? 'bg-white border border-[#e2e8f0] hover:border-[#2D8CFF]/50 hover:shadow-lg hover:-translate-y-1'
                          : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/10 hover:border-[#14F4FF]/30 hover:bg-[#14F4FF]/5 hover:-translate-y-1'
                      }`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onMouseEnter={() => setHoveredItem(item.text)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        theme === 'light'
                          ? 'bg-gradient-to-br from-[#2D8CFF]/10 to-[#14F4FF]/10 group-hover:from-[#2D8CFF]/20 group-hover:to-[#14F4FF]/20'
                          : 'bg-gradient-to-br from-[#2D8CFF]/20 to-[#14F4FF]/20 group-hover:from-[#2D8CFF]/30 group-hover:to-[#14F4FF]/30'
                      }`}>
                        <ItemIcon className={`w-5 h-5 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
                      </div>
                      <p className={`flex-1 leading-relaxed transition-colors duration-300 ${
                        theme === 'light' ? 'text-[#4a5568] group-hover:text-[#2d3748]' : 'text-gray-300 group-hover:text-white'
                      }`}>{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className={`lg:hidden relative p-6 rounded-2xl ${
              theme === 'light' ? 'bg-white border border-[#e2e8f0] shadow-lg' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20'
            }`}>
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  theme === 'light'
                    ? 'bg-gradient-to-br from-[#2D8CFF]/10 to-[#14F4FF]/10 border border-[#2D8CFF]/30'
                    : 'bg-gradient-to-br from-[#2D8CFF]/30 to-[#14F4FF]/30 border border-[#14F4FF]/30'
                }`}>
                  <Icon className={`w-8 h-8 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${
                  theme === 'light' ? 'text-[#1a2332]' : 'text-white'
                }`}>{content.title}</h3>
                <p className={`text-sm ${
                  theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'
                }`}>{content.description}</p>
              </div>



              <div className="space-y-2">
                {content.items.map((item, index) => {
                  const ItemIcon = item.icon;
                  const isExpanded = expandedItem === item.text;
                  return (
                    <div key={index} className={`rounded-lg border transition-all duration-300 ${
                      theme === 'light' ? 'border-[#e2e8f0]' : 'border-[#14F4FF]/10'
                    }`}>
                      <button
                        onClick={() => setExpandedItem(isExpanded ? null : item.text)}
                        className={`w-full flex items-center gap-3 p-4 text-left transition-all duration-300 ${
                          isExpanded
                            ? theme === 'light'
                              ? 'bg-[#2D8CFF]/5 border-b border-[#e2e8f0]'
                              : 'bg-[#14F4FF]/5 border-b border-[#14F4FF]/10'
                            : theme === 'light'
                            ? 'hover:bg-gray-50'
                            : 'hover:bg-[#14F4FF]/5'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          theme === 'light'
                            ? 'bg-gradient-to-br from-[#2D8CFF]/10 to-[#14F4FF]/10'
                            : 'bg-gradient-to-br from-[#2D8CFF]/20 to-[#14F4FF]/20'
                        }`}>
                          <ItemIcon className={`w-4 h-4 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
                        </div>
                        <span className={`flex-1 font-medium ${
                          theme === 'light' ? 'text-[#1a2332]' : 'text-white'
                        }`}>{item.text}</span>
                        <div className={`w-5 h-5 rounded transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}>
                          <svg className={`w-5 h-5 ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {isExpanded && (
                        <div className={`p-4 ${
                          theme === 'light' ? 'bg-gray-50' : 'bg-[#0A1A2F]/30'
                        }`}>
                          {/* Canvas Visual from Desktop */}
                          <div className={`relative h-32 mb-4 rounded-lg overflow-hidden ${
                            theme === 'light'
                              ? 'bg-gradient-to-br from-[#F7F9FC] to-[#EBF5FF] border border-[#e2e8f0]'
                              : 'bg-gradient-to-br from-[#0A1A2F] to-[#0D2340] border border-[#14F4FF]/20'
                          }`}>
                            <div className="absolute inset-0 p-3 flex items-center justify-center">
                              {activeTab === 'digital' && item.text === 'Web development' && (
                                <div className="w-full h-full border-2 border-dashed border-[#2D8CFF]/30 rounded-lg p-2">
                                  <div className={`h-4 rounded-t-lg flex items-center gap-1 px-2 ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                  }`}>
                                    <div className="w-2 h-2 rounded-full bg-red-400/70" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                                    <div className="w-2 h-2 rounded-full bg-green-400/70" />
                                  </div>
                                  <div className={`h-6 mt-1 rounded ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                  }`} />
                                  <div className="grid grid-cols-3 gap-1 mt-2 h-12">
                                    <div className={`rounded ${
                                      theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                    }`} />
                                    <div className={`rounded ${
                                      theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                    }`} />
                                    <div className={`rounded ${
                                      theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                    }`} />
                                  </div>
                                  <div className={`h-4 mt-2 rounded ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/35' : 'bg-[#8A4FFF]/55'
                                  }`} />
                                </div>
                              )}
                              {activeTab === 'digital' && item.text === 'App development' && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <div className={`w-20 h-full rounded-2xl border-2 p-2 ${
                                    theme === 'light' ? 'border-[#2D8CFF]/50 bg-[#F7F9FC]' : 'border-[#2D8CFF]/70 bg-[#0A1A2F]'
                                  }`}>
                                    <div className={`h-2 rounded-full mb-2 ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                    }`} />
                                    <div className={`h-6 rounded-lg mb-2 ${
                                      theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                    }`} />
                                    <div className="space-y-1">
                                      <div className={`h-8 rounded-lg ${
                                        theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                      }`} />
                                      <div className={`h-8 rounded-lg ${
                                        theme === 'light' ? 'bg-[#8A4FFF]/30' : 'bg-[#8A4FFF]/50'
                                      }`} />
                                      <div className={`h-8 rounded-lg ${
                                        theme === 'light' ? 'bg-[#14F4FF]/30' : 'bg-[#14F4FF]/50'
                                      }`} />
                                    </div>
                                    <div className={`h-6 rounded-lg mt-2 ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                    }`} />
                                  </div>
                                </div>
                              )}
                              {activeTab === 'digital' && item.text === 'Custom softwares' && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <div className="relative w-full h-full">
                                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl ${
                                      theme === 'light' ? 'bg-gradient-to-br from-[#2D8CFF]/50 to-[#14F4FF]/50' : 'bg-gradient-to-br from-[#2D8CFF]/70 to-[#14F4FF]/70'
                                    }`} />
                                    <div className={`absolute top-2 left-2 w-8 h-6 rounded-lg ${
                                      theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                    }`} />
                                    <div className={`absolute top-2 right-2 w-6 h-8 rounded-lg ${
                                      theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                                    }`} />
                                    <div className={`absolute bottom-2 left-2 w-10 h-5 rounded-lg ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                                    }`} />
                                    <div className={`absolute bottom-2 right-2 w-7 h-7 rounded-lg ${
                                      theme === 'light' ? 'bg-[#8A4FFF]/45' : 'bg-[#8A4FFF]/65'
                                    }`} />
                                    <svg className="absolute inset-0 w-full h-full">
                                      <line x1="50%" y1="50%" x2="20%" y2="20%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="1" strokeDasharray="2,2" />
                                      <line x1="50%" y1="50%" x2="80%" y2="20%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="1" strokeDasharray="2,2" />
                                      <line x1="50%" y1="50%" x2="20%" y2="80%" stroke={theme === 'light' ? '#8A4FFF80' : '#8A4FFF'} strokeWidth="1" strokeDasharray="2,2" />
                                      <line x1="50%" y1="50%" x2="80%" y2="80%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="1" strokeDasharray="2,2" />
                                    </svg>
                                  </div>
                                </div>
                              )}
                              {activeTab === 'digital' && item.text === 'Digital marketing' && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <div className="w-full h-full p-2">
                                    <div className="relative h-16 mb-2">
                                      <svg className="w-full h-full">
                                        <polyline
                                          points="5,60 25,50 45,40 65,30 85,20 105,10"
                                          fill="none"
                                          stroke={theme === 'light' ? '#2D8CFF' : '#14F4FF'}
                                          strokeWidth="2"
                                        />
                                        <circle cx="105" cy="10" r="2" fill={theme === 'light' ? '#2D8CFF' : '#14F4FF'} />
                                      </svg>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1 mb-2">
                                      <div className={`h-6 rounded-lg flex items-center justify-center ${
                                        theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                      }`}>
                                        <div className={`w-3 h-3 rounded ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                        }`} />
                                      </div>
                                      <div className={`h-6 rounded-lg flex items-center justify-center ${
                                        theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                      }`}>
                                        <div className={`w-3 h-3 rounded ${
                                          theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                        }`} />
                                      </div>
                                      <div className={`h-6 rounded-lg flex items-center justify-center ${
                                        theme === 'light' ? 'bg-[#8A4FFF]/35' : 'bg-[#8A4FFF]/55'
                                      }`}>
                                        <div className={`w-3 h-3 rounded ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/60' : 'bg-[#8A4FFF]/80'
                                        }`} />
                                      </div>
                                    </div>
                                    <div className="space-y-1">
                                      <div className={`h-3 w-full rounded ${
                                        theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                                      }`} />
                                      <div className={`h-3 w-4/5 rounded ${
                                        theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                                      }`} />
                                      <div className={`h-3 w-3/5 rounded ${
                                        theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                      }`} />
                                    </div>
                                  </div>
                                </div>
                              )}
                              {activeTab === 'edtech' && item.text === 'AI-powered Learning Management System' && (
                                <div className="w-full h-full p-2">
                                  <div className="flex gap-2 h-full">
                                    <div className={`w-8 rounded-lg ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                    }`}>
                                      <div className="p-1 space-y-1">
                                        <div className={`h-4 rounded ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                        }`} />
                                        <div className={`h-3 rounded ${
                                          theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                                        }`} />
                                        <div className={`h-3 rounded ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                        }`} />
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="grid grid-cols-2 gap-2 h-full">
                                        <div className={`rounded-lg p-2 ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                        }`}>
                                          <div className={`h-2 rounded mb-1 ${
                                            theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                          }`} />
                                          <div className={`h-1 rounded mb-1 w-3/4 ${
                                            theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                          }`} />
                                        </div>
                                        <div className={`rounded-lg p-2 ${
                                          theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                        }`}>
                                          <div className={`h-2 rounded mb-1 ${
                                            theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                          }`} />
                                          <div className={`h-1 rounded mb-1 w-2/3 ${
                                            theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                          }`} />
                                        </div>
                                        <div className={`rounded-lg p-2 ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/35' : 'bg-[#8A4FFF]/55'
                                        }`}>
                                          <div className={`h-2 rounded mb-1 ${
                                            theme === 'light' ? 'bg-[#8A4FFF]/60' : 'bg-[#8A4FFF]/80'
                                          }`} />
                                          <div className={`h-1 rounded mb-1 w-4/5 ${
                                            theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                          }`} />
                                        </div>
                                        <div className={`rounded-lg p-2 ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                        }`}>
                                          <div className={`h-2 rounded mb-1 ${
                                            theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                          }`} />
                                          <div className={`h-1 rounded mb-1 w-1/2 ${
                                            theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                          }`} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {activeTab === 'edtech' && item.text === 'Personalized learning paths with adaptive content' && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <div className="relative w-full h-full p-4">
                                    <div className={`absolute top-4 left-4 w-6 h-6 rounded-full ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/50 border-2 border-[#2D8CFF]/70' : 'bg-[#2D8CFF]/70 border-2 border-[#2D8CFF]/90'
                                    }`} />
                                    <div className={`absolute top-4 left-16 w-6 h-6 rounded-full ${
                                      theme === 'light' ? 'bg-[#14F4FF]/50 border-2 border-[#14F4FF]/70' : 'bg-[#14F4FF]/70 border-2 border-[#14F4FF]/90'
                                    }`} />
                                    <div className={`absolute top-10 left-28 w-6 h-6 rounded-full ${
                                      theme === 'light' ? 'bg-[#8A4FFF]/50 border-2 border-[#8A4FFF]/70' : 'bg-[#8A4FFF]/70 border-2 border-[#8A4FFF]/90'
                                    }`} />
                                    <div className={`absolute bottom-8 left-8 w-5 h-5 rounded-full ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                                    }`} />
                                    <div className={`absolute bottom-4 left-20 w-5 h-5 rounded-full ${
                                      theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                                    }`} />
                                    <div className={`absolute top-2 left-14 w-8 h-8 rounded-full border-2 ${
                                      theme === 'light' ? 'border-[#14F4FF]/80' : 'border-[#14F4FF]'
                                    } animate-pulse`} />
                                    <svg className="absolute inset-0 w-full h-full">
                                      <path d="M 25 25 Q 50 25 75 25" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="1" fill="none" strokeDasharray="2,2" />
                                      <path d="M 75 25 Q 100 30 125 50" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="1" fill="none" strokeDasharray="2,2" />
                                    </svg>
                                  </div>
                                </div>
                              )}
                              {activeTab === 'edtech' && item.text === 'Interactive coding playground with 4500+ problems' && (
                                <div className="w-full h-full p-2">
                                  <div className="grid grid-cols-2 gap-2 h-full">
                                    <div className={`rounded-lg p-2 ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/30 border border-[#2D8CFF]/50' : 'bg-[#2D8CFF]/50 border border-[#2D8CFF]/70'
                                    }`}>
                                      <div className={`h-3 rounded mb-1 ${
                                        theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                                      }`} />
                                      <div className="space-y-1">
                                        <div className={`h-1 rounded w-3/4 ${
                                          theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                        }`} />
                                        <div className={`h-1 rounded w-1/2 ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                        }`} />
                                        <div className={`h-1 rounded w-2/3 ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                        }`} />
                                        <div className={`h-1 rounded w-4/5 ${
                                          theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                        }`} />
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <div className={`h-1/2 rounded-lg p-2 ${
                                        theme === 'light' ? 'bg-[#14F4FF]/30' : 'bg-[#14F4FF]/50'
                                      }`}>
                                        <div className={`h-2 rounded mb-1 ${
                                          theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                        }`} />
                                        <div className={`h-1 rounded w-full mb-1 ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                                        }`} />
                                        <div className={`h-1 rounded w-3/4 ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                        }`} />
                                      </div>
                                      <div className={`h-1/2 rounded-lg p-2 ${
                                        theme === 'light' ? 'bg-[#8A4FFF]/30' : 'bg-[#8A4FFF]/50'
                                      }`}>
                                        <div className={`h-2 rounded mb-1 ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                        }`} />
                                        <div className={`h-1 rounded w-1/2 ${
                                          theme === 'light' ? 'bg-green-400/50' : 'bg-green-400/70'
                                        }`} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {activeTab === 'edtech' && item.text === 'Automated grading and feedback system' && (
                                <div className="w-full h-full p-3">
                                  <div className="space-y-2">
                                    <div className={`p-2 rounded-lg ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                    }`}>
                                      <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-2 h-2 rounded-full ${
                                          theme === 'light' ? 'bg-green-400/80' : 'bg-green-400'
                                        }`} />
                                        <div className={`h-1 rounded flex-1 ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                        }`} />
                                      </div>
                                      <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-2 h-2 rounded-full ${
                                          theme === 'light' ? 'bg-green-400/80' : 'bg-green-400'
                                        }`} />
                                        <div className={`h-1 rounded flex-1 ${
                                          theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                        }`} />
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${
                                          theme === 'light' ? 'bg-yellow-400/80' : 'bg-yellow-400'
                                        }`} />
                                        <div className={`h-1 rounded flex-1 ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                        }`} />
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className={`p-2 rounded-lg text-center ${
                                        theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                      }`}>
                                        <div className={`w-4 h-4 rounded-full mx-auto mb-1 ${
                                          theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                        }`} />
                                        <div className={`h-1 rounded ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                        }`} />
                                      </div>
                                      <div className={`p-2 rounded-lg text-center ${
                                        theme === 'light' ? 'bg-[#8A4FFF]/35' : 'bg-[#8A4FFF]/55'
                                      }`}>
                                        <div className={`w-4 h-4 rounded-full mx-auto mb-1 ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/60' : 'bg-[#8A4FFF]/80'
                                        }`} />
                                        <div className={`h-1 rounded ${
                                          theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                        }`} />
                                      </div>
                                      <div className={`p-2 rounded-lg text-center ${
                                        theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                      }`}>
                                        <div className={`w-4 h-4 rounded-full mx-auto mb-1 ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                        }`} />
                                        <div className={`h-1 rounded ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                        }`} />
                                      </div>
                                    </div>
                                    <div className={`p-2 rounded-lg ${
                                      theme === 'light' ? 'bg-[#14F4FF]/30' : 'bg-[#14F4FF]/50'
                                    }`}>
                                      <div className={`h-2 rounded mb-1 w-2/3 ${
                                        theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                      }`} />
                                      <div className={`h-1 rounded mb-1 w-full ${
                                        theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                                      }`} />
                                      <div className={`h-1 rounded w-4/5 ${
                                        theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                      }`} />
                                    </div>
                                  </div>
                                </div>
                              )}
                              {activeTab === 'hiring' && item.text === 'Smart recruitment and talent acquisition' && (
                                <div className="w-full h-full p-3">
                                  <div className="space-y-2">
                                    <div className={`h-8 rounded-lg p-2 ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                    }`}>
                                      <div className="flex gap-1">
                                        {[...Array(4)].map((_, i) => (
                                          <div key={i} className={`w-4 h-4 rounded ${
                                            theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                          }`} />
                                        ))}
                                      </div>
                                    </div>
                                    <div className={`h-8 rounded-lg p-2 ${
                                      theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                    }`}>
                                      <div className="flex gap-1">
                                        {[...Array(3)].map((_, i) => (
                                          <div key={i} className={`w-4 h-4 rounded ${
                                            theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                          }`} />
                                        ))}
                                      </div>
                                    </div>
                                    <div className={`h-8 rounded-lg p-2 border-2 ${
                                      theme === 'light' ? 'bg-[#8A4FFF]/35 border-[#8A4FFF]/60' : 'bg-[#8A4FFF]/55 border-[#8A4FFF]/80'
                                    } animate-pulse`}>
                                      <div className="flex gap-1">
                                        {[...Array(2)].map((_, i) => (
                                          <div key={i} className={`w-4 h-4 rounded ${
                                            theme === 'light' ? 'bg-[#8A4FFF]/60' : 'bg-[#8A4FFF]/80'
                                          }`} />
                                        ))}
                                      </div>
                                    </div>
                                    <div className={`h-6 rounded-lg p-1 ${
                                      theme === 'light' ? 'bg-green-400/35' : 'bg-green-400/55'
                                    }`}>
                                      <div className={`w-4 h-4 rounded ${
                                        theme === 'light' ? 'bg-green-400/60' : 'bg-green-400/80'
                                      }`} />
                                    </div>
                                  </div>
                                </div>
                              )}
                              {activeTab === 'hiring' && item.text === 'Customized corporate training solutions' && (
                                <div className="w-full h-full p-3">
                                  <div className="space-y-2">
                                    <div className="grid grid-cols-2 gap-2">
                                      <div className={`p-2 rounded-lg ${
                                        theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                      }`}>
                                        <div className={`h-2 rounded mb-1 w-3/4 ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                        }`} />
                                        <div className="flex gap-1">
                                          <div className={`w-2 h-2 rounded ${
                                            theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                          }`} />
                                          <div className={`w-2 h-2 rounded ${
                                            theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                          }`} />
                                          <div className={`w-2 h-2 rounded ${
                                            theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                          }`} />
                                        </div>
                                      </div>
                                      <div className={`p-2 rounded-lg ${
                                        theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                      }`}>
                                        <div className={`h-2 rounded mb-1 w-2/3 ${
                                          theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                        }`} />
                                        <div className="flex gap-1">
                                          <div className={`w-2 h-2 rounded ${
                                            theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                          }`} />
                                          <div className={`w-2 h-2 rounded ${
                                            theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                          }`} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className={`p-2 rounded-lg ${
                                      theme === 'light' ? 'bg-[#8A4FFF]/30' : 'bg-[#8A4FFF]/50'
                                    }`}>
                                      <div className="flex items-center justify-between">
                                        <div className={`w-3 h-3 rounded-full ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                        }`} />
                                        <div className={`flex-1 h-1 mx-1 ${
                                          theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                        }`} />
                                        <div className={`w-3 h-3 rounded-full ${
                                          theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                        }`} />
                                        <div className={`flex-1 h-1 mx-1 ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                        }`} />
                                        <div className={`w-3 h-3 rounded-full ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/60' : 'bg-[#8A4FFF]/80'
                                        }`} />
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-1">
                                      {[...Array(4)].map((_, i) => (
                                        <div key={i} className={`h-6 rounded ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                        }`} />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                              {activeTab === 'hiring' && item.text === 'Staffing and consulting services' && (
                                <div className="w-full h-full p-3">
                                  <div className="relative h-full">
                                    <div className="flex flex-col h-full justify-between">
                                      <div className="flex justify-center">
                                        <div className={`w-12 h-6 rounded-lg border ${
                                          theme === 'light' ? 'bg-[#2D8CFF]/40 border-[#2D8CFF]/60' : 'bg-[#2D8CFF]/60 border-[#2D8CFF]/80'
                                        } flex items-center justify-center`}>
                                          <div className={`w-3 h-3 rounded-full ${
                                            theme === 'light' ? 'bg-[#2D8CFF]/70' : 'bg-[#2D8CFF]/90'
                                          }`} />
                                        </div>
                                      </div>
                                      <div className="flex justify-center gap-4">
                                        <div className={`w-10 h-5 rounded-lg ${
                                          theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                                        } flex items-center justify-center`}>
                                          <div className={`w-2 h-2 rounded ${
                                            theme === 'light' ? 'bg-[#14F4FF]/70' : 'bg-[#14F4FF]/90'
                                          }`} />
                                        </div>
                                        <div className={`w-10 h-5 rounded-lg ${
                                          theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                        } flex items-center justify-center`}>
                                          <div className={`w-2 h-2 rounded ${
                                            theme === 'light' ? 'bg-[#8A4FFF]/70' : 'bg-[#8A4FFF]/90'
                                          }`} />
                                        </div>
                                      </div>
                                      <div className="flex justify-center gap-2">
                                        {[...Array(4)].map((_, i) => (
                                          <div key={i} className={`w-6 h-4 rounded ${
                                            i % 2 === 0 
                                              ? theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                              : theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                          } flex items-center justify-center`}>
                                            <div className={`w-1 h-1 rounded-full ${
                                              i % 2 === 0
                                                ? theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                                : theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                            }`} />
                                          </div>
                                        ))}
                                      </div>
                                      <div className="flex justify-between items-center px-2">
                                        <div className={`w-4 h-4 rounded-full border border-dashed ${
                                          theme === 'light' ? 'border-[#8A4FFF]/50 bg-[#8A4FFF]/20' : 'border-[#8A4FFF]/70 bg-[#8A4FFF]/40'
                                        }`} />
                                        <div className={`w-4 h-4 rounded-full border border-dashed ${
                                          theme === 'light' ? 'border-[#2D8CFF]/50 bg-[#2D8CFF]/20' : 'border-[#2D8CFF]/70 bg-[#2D8CFF]/40'
                                        }`} />
                                        <div className={`w-4 h-4 rounded-full border border-dashed ${
                                          theme === 'light' ? 'border-[#14F4FF]/50 bg-[#14F4FF]/20' : 'border-[#14F4FF]/70 bg-[#14F4FF]/40'
                                        }`} />
                                      </div>
                                    </div>
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                      <line x1="50%" y1="20%" x2="35%" y2="40%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="1" />
                                      <line x1="50%" y1="20%" x2="65%" y2="40%" stroke={theme === 'light' ? '#8A4FFF80' : '#8A4FFF'} strokeWidth="1" />
                                      <line x1="35%" y1="45%" x2="30%" y2="65%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="1" />
                                      <line x1="35%" y1="45%" x2="45%" y2="65%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="1" />
                                      <line x1="65%" y1="45%" x2="55%" y2="65%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="1" />
                                      <line x1="65%" y1="45%" x2="70%" y2="65%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="1" />
                                    </svg>
                                  </div>
                                </div>
                              )}
                              {activeTab === 'hiring' && item.text === 'Employer branding and campus partnerships' && (
                                <div className="w-full h-full p-3">
                                  <div className="relative h-full">
                                    <div className={`absolute top-4 left-4 w-8 h-6 rounded-lg ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/45 border border-[#2D8CFF]/60' : 'bg-[#2D8CFF]/65 border border-[#2D8CFF]/80'
                                    }`} />
                                    <div className={`absolute top-4 right-4 w-8 h-6 rounded-lg ${
                                      theme === 'light' ? 'bg-[#14F4FF]/45 border border-[#14F4FF]/60' : 'bg-[#14F4FF]/65 border border-[#14F4FF]/80'
                                    }`} />
                                    <div className={`absolute bottom-4 left-4 w-7 h-7 rounded-full ${
                                      theme === 'light' ? 'bg-[#8A4FFF]/45 border border-[#8A4FFF]/60' : 'bg-[#8A4FFF]/65 border border-[#8A4FFF]/80'
                                    }`} />
                                    <div className={`absolute bottom-4 right-4 w-7 h-7 rounded-full ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/45 border border-[#2D8CFF]/60' : 'bg-[#2D8CFF]/65 border border-[#2D8CFF]/80'
                                    }`} />
                                    <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full ${
                                      theme === 'light' ? 'bg-[#14F4FF]/45 border border-[#14F4FF]/60' : 'bg-[#14F4FF]/65 border border-[#14F4FF]/80'
                                    }`} />
                                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl ${
                                      theme === 'light' ? 'bg-gradient-to-br from-[#2D8CFF]/50 to-[#8A4FFF]/50 border border-[#14F4FF]/70' : 'bg-gradient-to-br from-[#2D8CFF]/70 to-[#8A4FFF]/70 border border-[#14F4FF]/90'
                                    } animate-pulse`} />
                                    <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-2 rounded ${
                                      theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                    }`} />
                                    <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 rounded ${
                                      theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                    }`} />
                                    <svg className="absolute inset-0 w-full h-full">
                                      <line x1="50%" y1="50%" x2="20%" y2="25%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="1" />
                                      <line x1="50%" y1="50%" x2="80%" y2="25%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="1" />
                                      <line x1="50%" y1="50%" x2="20%" y2="75%" stroke={theme === 'light' ? '#8A4FFF80' : '#8A4FFF'} strokeWidth="1" />
                                      <line x1="50%" y1="50%" x2="80%" y2="75%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="1" />
                                      <line x1="50%" y1="50%" x2="50%" y2="25%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="1" />
                                    </svg>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <p className={`text-sm leading-relaxed ${
                            theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'
                          }`}>{item.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden lg:block relative h-[520px]"> {/* Total 130% height: 400px + 120px */}
              {/* Visual Canvas Zone (100% - moved to top) */}
              <div className={`relative h-[400px] rounded-t-2xl overflow-hidden transition-all duration-500 ${
                theme === 'light'
                  ? 'bg-gradient-to-br from-[#F7F9FC] to-[#EBF5FF] border-t border-l border-r border-[#e2e8f0] shadow-lg'
                  : 'bg-gradient-to-br from-[#0A1A2F] to-[#0D2340] border-t border-l border-r border-[#14F4FF]/30 shadow-2xl shadow-[#2D8CFF]/30'
              }`}>
                <div className="absolute inset-0 p-6 flex items-center justify-center">
                  {activeTab === 'digital' && (
                    <div className="w-full h-full transition-all duration-500">
                      {/* Default State - Abstract Ecosystem */}
                      {!hoveredItem && (
                        <div className="w-full h-full flex items-center justify-center opacity-100 transition-opacity duration-500">
                          <div className="relative">
                            <div className={`w-32 h-32 rounded-2xl ${
                              theme === 'light' ? 'bg-gradient-to-br from-[#2D8CFF]/60 to-[#14F4FF]/60' : 'bg-gradient-to-br from-[#2D8CFF]/80 to-[#14F4FF]/80'
                            } flex items-center justify-center`}>
                              <div className={`w-16 h-16 rounded-xl ${
                                theme === 'light' ? 'bg-gradient-to-br from-[#2D8CFF]/80 to-[#8A4FFF]/80' : 'bg-gradient-to-br from-[#2D8CFF] to-[#8A4FFF]'
                              }`} />
                            </div>
                            <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-lg ${
                              theme === 'light' ? 'bg-[#14F4FF]/80' : 'bg-[#14F4FF]'
                            }`} />
                            <div className={`absolute -bottom-4 -left-4 w-12 h-12 rounded-xl ${
                              theme === 'light' ? 'bg-[#8A4FFF]/70' : 'bg-[#8A4FFF]/90'
                            }`} />
                          </div>
                        </div>
                      )}
                      
                      {/* Web Development Wireframe */}
                      {hoveredItem === 'Web development' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500">
                          <div className="w-full h-full border-2 border-dashed border-[#2D8CFF]/30 rounded-lg p-4">
                            {/* Browser Top Bar */}
                            <div className={`h-8 rounded-t-lg flex items-center gap-2 px-3 ${
                              theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                            }`}>
                              <div className="w-3 h-3 rounded-full bg-red-400/70" />
                              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                              <div className="w-3 h-3 rounded-full bg-green-400/70" />
                            </div>
                            {/* Header */}
                            <div className={`h-12 mt-2 rounded ${
                              theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                            }`} />
                            {/* Content Grid */}
                            <div className="grid grid-cols-3 gap-2 mt-4 h-24">
                              <div className={`rounded ${
                                theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                              }`} />
                              <div className={`rounded ${
                                theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                              }`} />
                              <div className={`rounded ${
                                theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                              }`} />
                            </div>
                            {/* Footer */}
                            <div className={`h-8 mt-4 rounded ${
                              theme === 'light' ? 'bg-[#8A4FFF]/35' : 'bg-[#8A4FFF]/55'
                            }`} />
                          </div>
                        </div>
                      )}
                      
                      {/* App Development Mobile Frame */}
                      {hoveredItem === 'App development' && (
                        <div className="w-full h-full flex items-center justify-center opacity-100 transition-all duration-500">
                          <div className={`w-48 h-80 rounded-3xl border-4 p-4 ${
                            theme === 'light' ? 'border-[#2D8CFF]/50 bg-[#F7F9FC]' : 'border-[#2D8CFF]/70 bg-[#0A1A2F]'
                          }`}>
                            {/* Status Bar */}
                            <div className={`h-4 rounded-full mb-4 ${
                              theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                            }`} />
                            {/* Header */}
                            <div className={`h-12 rounded-lg mb-4 ${
                              theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                            }`} />
                            {/* Content Cards */}
                            <div className="space-y-3">
                              <div className={`h-16 rounded-lg ${
                                theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                              }`} />
                              <div className={`h-16 rounded-lg ${
                                theme === 'light' ? 'bg-[#8A4FFF]/30' : 'bg-[#8A4FFF]/50'
                              }`} />
                              <div className={`h-16 rounded-lg ${
                                theme === 'light' ? 'bg-[#14F4FF]/30' : 'bg-[#14F4FF]/50'
                              }`} />
                            </div>
                            {/* Bottom Navigation */}
                            <div className={`h-12 rounded-lg mt-4 ${
                              theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                            }`} />
                          </div>
                        </div>
                      )}
                      
                      {/* Custom Software System Diagram */}
                      {hoveredItem === 'Custom softwares' && (
                        <div className="w-full h-full flex items-center justify-center opacity-100 transition-all duration-500">
                          <div className="relative w-full h-full">
                            {/* Central Hub */}
                            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-xl ${
                              theme === 'light' ? 'bg-gradient-to-br from-[#2D8CFF]/50 to-[#14F4FF]/50' : 'bg-gradient-to-br from-[#2D8CFF]/70 to-[#14F4FF]/70'
                            }`} />
                            {/* Connected Modules */}
                            <div className={`absolute top-8 left-8 w-16 h-12 rounded-lg ${
                              theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                            }`} />
                            <div className={`absolute top-8 right-8 w-12 h-16 rounded-lg ${
                              theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                            }`} />
                            <div className={`absolute bottom-8 left-8 w-20 h-10 rounded-lg ${
                              theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                            }`} />
                            <div className={`absolute bottom-8 right-8 w-14 h-14 rounded-lg ${
                              theme === 'light' ? 'bg-[#8A4FFF]/45' : 'bg-[#8A4FFF]/65'
                            }`} />
                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full">
                              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" />
                              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                              <line x1="50%" y1="50%" x2="20%" y2="80%" stroke={theme === 'light' ? '#8A4FFF80' : '#8A4FFF'} strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '1s' }} />
                              <line x1="50%" y1="50%" x2="80%" y2="80%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Graphic Suite Design System */}
                      {hoveredItem === 'Graphic suite' && (
                        <div className="w-full h-full flex items-center justify-center opacity-100 transition-all duration-500">
                          <div className="w-full h-full p-8">
                            {/* Color Palette */}
                            <div className="flex gap-3 mb-6">
                              <div className="w-8 h-8 rounded-full bg-[#2D8CFF]" />
                              <div className="w-8 h-8 rounded-full bg-[#14F4FF]" />
                              <div className="w-8 h-8 rounded-full bg-[#8A4FFF]" />
                              <div className={`w-8 h-8 rounded-full ${
                                theme === 'light' ? 'bg-gray-400' : 'bg-gray-500'
                              }`} />
                            </div>
                            {/* Typography Lines */}
                            <div className="space-y-3 mb-6">
                              <div className={`h-4 w-3/4 rounded ${
                                theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                              }`} />
                              <div className={`h-3 w-1/2 rounded ${
                                theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                              }`} />
                              <div className={`h-2 w-2/3 rounded ${
                                theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                              }`} />
                            </div>
                            {/* Layout Frames */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className={`h-20 rounded-lg border-2 border-dashed ${
                                theme === 'light' ? 'border-[#2D8CFF]/50' : 'border-[#2D8CFF]/70'
                              }`} />
                              <div className={`h-20 rounded-lg border-2 border-dashed ${
                                theme === 'light' ? 'border-[#14F4FF]/50' : 'border-[#14F4FF]/70'
                              }`} />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Digital Marketing Growth Visual */}
                      {hoveredItem === 'Digital marketing' && (
                        <div className="w-full h-full flex items-center justify-center opacity-100 transition-all duration-500">
                          <div className="w-full h-full p-8">
                            {/* Growth Chart */}
                            <div className="relative h-32 mb-6">
                              <svg className="w-full h-full">
                                <polyline
                                  points="10,120 50,100 90,80 130,60 170,40 210,20"
                                  fill="none"
                                  stroke={theme === 'light' ? '#2D8CFF' : '#14F4FF'}
                                  strokeWidth="3"
                                />
                                <circle cx="210" cy="20" r="4" fill={theme === 'light' ? '#2D8CFF' : '#14F4FF'} />
                              </svg>
                            </div>
                            {/* Metric Cards */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                              <div className={`h-12 rounded-lg flex items-center justify-center ${
                                theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                              }`}>
                                <div className={`w-6 h-6 rounded ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                }`} />
                              </div>
                              <div className={`h-12 rounded-lg flex items-center justify-center ${
                                theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                              }`}>
                                <div className={`w-6 h-6 rounded ${
                                  theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                }`} />
                              </div>
                              <div className={`h-12 rounded-lg flex items-center justify-center ${
                                theme === 'light' ? 'bg-[#8A4FFF]/35' : 'bg-[#8A4FFF]/55'
                              }`}>
                                <div className={`w-6 h-6 rounded ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/60' : 'bg-[#8A4FFF]/80'
                                }`} />
                              </div>
                            </div>
                            {/* Funnel Blocks */}
                            <div className="space-y-2">
                              <div className={`h-6 w-full rounded ${
                                theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                              }`} />
                              <div className={`h-6 w-4/5 rounded ${
                                theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                              }`} />
                              <div className={`h-6 w-3/5 rounded ${
                                theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                              }`} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* EdTech Solutions Visuals */}
                  {activeTab === 'edtech' && (
                    <div className="w-full h-full transition-all duration-500">
                      {/* Default State - Education-focused Abstract */}
                      {!hoveredItem && (
                        <div className="w-full h-full flex items-center justify-center opacity-100 transition-opacity duration-500">
                          <div className="relative">
                            <div className={`w-40 h-32 rounded-2xl ${
                              theme === 'light' ? 'bg-gradient-to-br from-[#2D8CFF]/50 to-[#14F4FF]/50' : 'bg-gradient-to-br from-[#2D8CFF]/70 to-[#14F4FF]/70'
                            } flex items-center justify-center`}>
                              <div className="grid grid-cols-2 gap-2">
                                <div className={`w-12 h-8 rounded ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/80' : 'bg-[#2D8CFF]'
                                }`} />
                                <div className={`w-12 h-8 rounded ${
                                  theme === 'light' ? 'bg-[#14F4FF]/80' : 'bg-[#14F4FF]'
                                }`} />
                                <div className={`w-12 h-8 rounded ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/80' : 'bg-[#8A4FFF]'
                                }`} />
                                <div className={`w-12 h-8 rounded ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/70' : 'bg-[#2D8CFF]/90'
                                }`} />
                              </div>
                            </div>
                            <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${
                              theme === 'light' ? 'bg-[#14F4FF]/90' : 'bg-[#14F4FF]'
                            }`} />
                            <div className={`absolute -bottom-2 -left-2 w-8 h-8 rounded-lg ${
                              theme === 'light' ? 'bg-[#8A4FFF]/75' : 'bg-[#8A4FFF]/95'
                            }`} />
                          </div>
                        </div>
                      )}
                      
                      {/* AI-powered LMS Dashboard */}
                      {hoveredItem === 'AI-powered Learning Management System' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500 p-6">
                          {/* Sidebar Navigation */}
                          <div className="flex gap-4 h-full">
                            <div className={`w-16 rounded-lg ${
                              theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                            }`}>
                              <div className="p-2 space-y-2">
                                <div className={`h-8 rounded ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                }`} />
                                <div className={`h-6 rounded ${
                                  theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                                }`} />
                                <div className={`h-6 rounded ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                }`} />
                              </div>
                            </div>
                            {/* Course Grid */}
                            <div className="flex-1">
                              <div className="grid grid-cols-2 gap-3 h-full">
                                <div className={`rounded-lg p-3 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                }`}>
                                  <div className={`h-4 rounded mb-2 ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                  }`} />
                                  <div className={`h-2 rounded mb-1 w-3/4 ${
                                    theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                  }`} />
                                  <div className={`h-1 rounded w-1/2 ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                  }`} />
                                </div>
                                <div className={`rounded-lg p-3 ${
                                  theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                }`}>
                                  <div className={`h-4 rounded mb-2 ${
                                    theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                  }`} />
                                  <div className={`h-2 rounded mb-1 w-2/3 ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                  }`} />
                                  <div className={`h-1 rounded w-3/4 ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                  }`} />
                                </div>
                                <div className={`rounded-lg p-3 ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/35' : 'bg-[#8A4FFF]/55'
                                }`}>
                                  <div className={`h-4 rounded mb-2 ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/60' : 'bg-[#8A4FFF]/80'
                                  }`} />
                                  <div className={`h-2 rounded mb-1 w-4/5 ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                  }`} />
                                  <div className={`h-1 rounded w-1/3 ${
                                    theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                  }`} />
                                </div>
                                <div className={`rounded-lg p-3 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                }`}>
                                  <div className={`h-4 rounded mb-2 ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                  }`} />
                                  <div className={`h-2 rounded mb-1 w-1/2 ${
                                    theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                  }`} />
                                  <div className={`h-1 rounded w-2/3 ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                  }`} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Personalized Learning Paths */}
                      {hoveredItem === 'Personalized learning paths with adaptive content' && (
                        <div className="w-full h-full flex items-center justify-center opacity-100 transition-all duration-500">
                          <div className="relative w-full h-full p-8">
                            {/* Learning Path Nodes */}
                            <div className={`absolute top-8 left-8 w-12 h-12 rounded-full ${
                              theme === 'light' ? 'bg-[#2D8CFF]/50 border-2 border-[#2D8CFF]/70' : 'bg-[#2D8CFF]/70 border-2 border-[#2D8CFF]/90'
                            }`} />
                            <div className={`absolute top-8 left-32 w-12 h-12 rounded-full ${
                              theme === 'light' ? 'bg-[#14F4FF]/50 border-2 border-[#14F4FF]/70' : 'bg-[#14F4FF]/70 border-2 border-[#14F4FF]/90'
                            }`} />
                            <div className={`absolute top-20 left-56 w-12 h-12 rounded-full ${
                              theme === 'light' ? 'bg-[#8A4FFF]/50 border-2 border-[#8A4FFF]/70' : 'bg-[#8A4FFF]/70 border-2 border-[#8A4FFF]/90'
                            }`} />
                            {/* Branching Paths */}
                            <div className={`absolute bottom-16 left-16 w-10 h-10 rounded-full ${
                              theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                            }`} />
                            <div className={`absolute bottom-8 left-40 w-10 h-10 rounded-full ${
                              theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                            }`} />
                            {/* Current Step Highlight */}
                            <div className={`absolute top-6 left-30 w-16 h-16 rounded-full border-4 ${
                              theme === 'light' ? 'border-[#14F4FF]/80' : 'border-[#14F4FF]'
                            } animate-pulse`} />
                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full">
                              <path d="M 50 50 Q 100 50 150 50" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="2" fill="none" strokeDasharray="3,3" />
                              <path d="M 150 50 Q 200 60 250 80" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="2" fill="none" strokeDasharray="3,3" />
                              <path d="M 100 100 Q 150 120 200 140" stroke={theme === 'light' ? '#8A4FFF80' : '#8A4FFF'} strokeWidth="2" fill="none" strokeDasharray="3,3" />
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Interactive Coding Playground */}
                      {hoveredItem === 'Interactive coding playground with 4500+ problems' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500 p-4">
                          <div className="grid grid-cols-2 gap-3 h-full">
                            {/* Code Editor */}
                            <div className={`rounded-lg p-3 ${
                              theme === 'light' ? 'bg-[#2D8CFF]/30 border border-[#2D8CFF]/50' : 'bg-[#2D8CFF]/50 border border-[#2D8CFF]/70'
                            }`}>
                              <div className={`h-6 rounded mb-2 ${
                                theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                              }`} />
                              <div className="space-y-1">
                                <div className={`h-2 rounded w-3/4 ${
                                  theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                }`} />
                                <div className={`h-2 rounded w-1/2 ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                }`} />
                                <div className={`h-2 rounded w-2/3 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                }`} />
                                <div className={`h-2 rounded w-4/5 ${
                                  theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                }`} />
                              </div>
                            </div>
                            {/* Problem & Output */}
                            <div className="space-y-3">
                              <div className={`h-1/2 rounded-lg p-3 ${
                                theme === 'light' ? 'bg-[#14F4FF]/30' : 'bg-[#14F4FF]/50'
                              }`}>
                                <div className={`h-4 rounded mb-2 ${
                                  theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                }`} />
                                <div className={`h-2 rounded w-full mb-1 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                                }`} />
                                <div className={`h-2 rounded w-3/4 ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                }`} />
                              </div>
                              <div className={`h-1/2 rounded-lg p-3 ${
                                theme === 'light' ? 'bg-[#8A4FFF]/30' : 'bg-[#8A4FFF]/50'
                              }`}>
                                <div className={`h-3 rounded mb-2 ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                }`} />
                                <div className={`h-2 rounded w-1/2 ${
                                  theme === 'light' ? 'bg-green-400/50' : 'bg-green-400/70'
                                }`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Virtual Classroom */}
                      {hoveredItem === 'Live virtual classrooms and webinar platform' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500 p-4">
                          <div className="h-full">
                            {/* Main Presenter Area */}
                            <div className={`h-2/3 rounded-lg mb-3 p-4 ${
                              theme === 'light' ? 'bg-[#2D8CFF]/15 border-2 border-[#2D8CFF]/30' : 'bg-[#2D8CFF]/25 border-2 border-[#2D8CFF]/50'
                            }`}>
                              <div className={`w-full h-full rounded ${
                                theme === 'light' ? 'bg-[#2D8CFF]/20' : 'bg-[#2D8CFF]/40'
                              } flex items-center justify-center`}>
                                <div className={`w-16 h-16 rounded-full ${
                                  theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                                }`} />
                              </div>
                            </div>
                            {/* Participant Tiles & Chat */}
                            <div className="grid grid-cols-4 gap-2 h-1/3">
                              <div className={`rounded ${
                                theme === 'light' ? 'bg-[#14F4FF]/15' : 'bg-[#14F4FF]/25'
                              }`} />
                              <div className={`rounded ${
                                theme === 'light' ? 'bg-[#8A4FFF]/15' : 'bg-[#8A4FFF]/25'
                              }`} />
                              <div className={`rounded ${
                                theme === 'light' ? 'bg-[#2D8CFF]/15' : 'bg-[#2D8CFF]/25'
                              }`} />
                              <div className={`rounded p-2 ${
                                theme === 'light' ? 'bg-[#14F4FF]/10' : 'bg-[#14F4FF]/20'
                              }`}>
                                <div className="space-y-1">
                                  <div className={`h-1 rounded w-full ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                  }`} />
                                  <div className={`h-1 rounded w-3/4 ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/30' : 'bg-[#8A4FFF]/50'
                                  }`} />
                                  <div className={`h-1 rounded w-1/2 ${
                                    theme === 'light' ? 'bg-[#14F4FF]/30' : 'bg-[#14F4FF]/50'
                                  }`} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Automated Grading System */}
                      {hoveredItem === 'Automated grading and feedback system' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500 p-6">
                          <div className="space-y-4">
                            {/* Grading Checklist */}
                            <div className={`p-4 rounded-lg ${
                              theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                            }`}>
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-4 h-4 rounded-full ${
                                  theme === 'light' ? 'bg-green-400/80' : 'bg-green-400'
                                }`} />
                                <div className={`h-2 rounded flex-1 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                }`} />
                              </div>
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-4 h-4 rounded-full ${
                                  theme === 'light' ? 'bg-green-400/80' : 'bg-green-400'
                                }`} />
                                <div className={`h-2 rounded flex-1 ${
                                  theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                }`} />
                              </div>
                              <div className="flex items-center gap-3">
                                <div className={`w-4 h-4 rounded-full ${
                                  theme === 'light' ? 'bg-yellow-400/80' : 'bg-yellow-400'
                                }`} />
                                <div className={`h-2 rounded flex-1 ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                }`} />
                              </div>
                            </div>
                            {/* Progress Indicators */}
                            <div className="grid grid-cols-3 gap-3">
                              <div className={`p-3 rounded-lg text-center ${
                                theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                              }`}>
                                <div className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                                  theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                }`} />
                                <div className={`h-1 rounded ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                }`} />
                              </div>
                              <div className={`p-3 rounded-lg text-center ${
                                theme === 'light' ? 'bg-[#8A4FFF]/35' : 'bg-[#8A4FFF]/55'
                              }`}>
                                <div className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/60' : 'bg-[#8A4FFF]/80'
                                }`} />
                                <div className={`h-1 rounded ${
                                  theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                }`} />
                              </div>
                              <div className={`p-3 rounded-lg text-center ${
                                theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                              }`}>
                                <div className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                }`} />
                                <div className={`h-1 rounded ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                }`} />
                              </div>
                            </div>
                            {/* Feedback Cards */}
                            <div className={`p-3 rounded-lg ${
                              theme === 'light' ? 'bg-[#14F4FF]/30' : 'bg-[#14F4FF]/50'
                            }`}>
                              <div className={`h-3 rounded mb-2 w-2/3 ${
                                theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                              }`} />
                              <div className={`h-2 rounded mb-1 w-full ${
                                theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                              }`} />
                              <div className={`h-2 rounded w-4/5 ${
                                theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                              }`} />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Mobile-first Responsive Experience */}
                      {hoveredItem === 'Mobile-first responsive learning experience' && (
                        <div className="w-full h-full flex items-center justify-center opacity-100 transition-all duration-500">
                          <div className="relative">
                            {/* Mobile Phone Frame */}
                            <div className={`w-32 h-56 rounded-2xl border-4 p-2 z-20 relative ${
                              theme === 'light' ? 'border-[#2D8CFF]/40 bg-[#F7F9FC]' : 'border-[#2D8CFF]/60 bg-[#0A1A2F]'
                            }`}>
                              <div className={`h-full rounded-lg ${
                                theme === 'light' ? 'bg-[#2D8CFF]/10' : 'bg-[#2D8CFF]/20'
                              } p-2`}>
                                <div className={`h-6 rounded mb-2 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                }`} />
                                <div className="space-y-1">
                                  <div className={`h-8 rounded ${
                                    theme === 'light' ? 'bg-[#14F4FF]/20' : 'bg-[#14F4FF]/40'
                                  }`} />
                                  <div className={`h-8 rounded ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/20' : 'bg-[#8A4FFF]/40'
                                  }`} />
                                  <div className={`h-8 rounded ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/20' : 'bg-[#2D8CFF]/40'
                                  }`} />
                                </div>
                              </div>
                            </div>
                            {/* Tablet Frame Behind */}
                            <div className={`absolute -top-4 -left-8 w-48 h-32 rounded-xl border-2 p-3 z-10 ${
                              theme === 'light' ? 'border-[#14F4FF]/30 bg-[#F7F9FC]/80' : 'border-[#14F4FF]/50 bg-[#0A1A2F]/80'
                            }`}>
                              <div className={`h-full rounded ${
                                theme === 'light' ? 'bg-[#14F4FF]/15' : 'bg-[#14F4FF]/25'
                              } p-2`}>
                                <div className="grid grid-cols-3 gap-1 h-full">
                                  <div className={`rounded ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/20' : 'bg-[#2D8CFF]/40'
                                  }`} />
                                  <div className={`rounded ${
                                    theme === 'light' ? 'bg-[#14F4FF]/20' : 'bg-[#14F4FF]/40'
                                  }`} />
                                  <div className={`rounded ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/20' : 'bg-[#8A4FFF]/40'
                                  }`} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Hiring & Staffing Solutions Visuals */}
                  {activeTab === 'hiring' && (
                    <div className="w-full h-full transition-all duration-500">
                      {/* Default State - Enterprise-focused Abstract */}
                      {!hoveredItem && (
                        <div className="w-full h-full flex items-center justify-center opacity-100 transition-opacity duration-500">
                          <div className="relative">
                            <div className={`w-48 h-32 rounded-2xl ${
                              theme === 'light' ? 'bg-gradient-to-br from-[#2D8CFF]/45 to-[#14F4FF]/45' : 'bg-gradient-to-br from-[#2D8CFF]/65 to-[#14F4FF]/65'
                            } flex items-center justify-center p-4`}>
                              <div className="grid grid-cols-3 gap-3 w-full">
                                <div className={`h-16 rounded-lg ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/75' : 'bg-[#2D8CFF]/95'
                                }`} />
                                <div className={`h-16 rounded-lg ${
                                  theme === 'light' ? 'bg-[#14F4FF]/75' : 'bg-[#14F4FF]/95'
                                }`} />
                                <div className={`h-16 rounded-lg ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/75' : 'bg-[#8A4FFF]/95'
                                }`} />
                              </div>
                            </div>
                            <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-lg ${
                              theme === 'light' ? 'bg-[#14F4FF]/80' : 'bg-[#14F4FF]'
                            }`} />
                            <div className={`absolute -bottom-3 -left-3 w-10 h-10 rounded-xl ${
                              theme === 'light' ? 'bg-[#8A4FFF]/70' : 'bg-[#8A4FFF]/90'
                            }`} />
                          </div>
                        </div>
                      )}
                      
                      {/* Smart Recruitment Pipeline */}
                      {hoveredItem === 'Smart recruitment and talent acquisition' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500 p-6">
                          <div className="h-full">
                            {/* Recruitment Funnel */}
                            <div className="space-y-4">
                              {/* Stage 1 - Applications */}
                              <div className={`h-16 rounded-lg p-3 ${
                                theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                              }`}>
                                <div className="flex gap-2">
                                  {[...Array(8)].map((_, i) => (
                                    <div key={i} className={`w-8 h-8 rounded ${
                                      theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                    }`} />
                                  ))}
                                </div>
                              </div>
                              {/* Stage 2 - Screening */}
                              <div className={`h-16 rounded-lg p-3 ${
                                theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                              }`}>
                                <div className="flex gap-2">
                                  {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`w-8 h-8 rounded ${
                                      theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                    }`} />
                                  ))}
                                </div>
                              </div>
                              {/* Stage 3 - Shortlisted (Highlighted) */}
                              <div className={`h-16 rounded-lg p-3 border-2 ${
                                theme === 'light' ? 'bg-[#8A4FFF]/35 border-[#8A4FFF]/60' : 'bg-[#8A4FFF]/55 border-[#8A4FFF]/80'
                              } animate-pulse`}>
                                <div className="flex gap-2">
                                  {[...Array(3)].map((_, i) => (
                                    <div key={i} className={`w-8 h-8 rounded ${
                                      theme === 'light' ? 'bg-[#8A4FFF]/60' : 'bg-[#8A4FFF]/80'
                                    }`} />
                                  ))}
                                </div>
                              </div>
                              {/* Stage 4 - Final */}
                              <div className={`h-12 rounded-lg p-2 ${
                                theme === 'light' ? 'bg-green-400/35' : 'bg-green-400/55'
                              }`}>
                                <div className={`w-8 h-8 rounded ${
                                  theme === 'light' ? 'bg-green-400/60' : 'bg-green-400/80'
                                }`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Skill-based Assessment */}
                      {hoveredItem === 'Skill-based candidate assessments' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500 p-6">
                          <div className="space-y-4">
                            {/* Skill Categories */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className={`p-3 rounded-lg ${
                                theme === 'light' ? 'bg-[#2D8CFF]/10' : 'bg-[#2D8CFF]/20'
                              }`}>
                                <div className={`h-3 rounded mb-2 w-2/3 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                }`} />
                                <div className={`h-2 rounded w-full ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/20' : 'bg-[#2D8CFF]/40'
                                }`}>
                                  <div className={`h-full w-4/5 rounded ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                  }`} />
                                </div>
                              </div>
                              <div className={`p-3 rounded-lg ${
                                theme === 'light' ? 'bg-[#14F4FF]/10' : 'bg-[#14F4FF]/20'
                              }`}>
                                <div className={`h-3 rounded mb-2 w-1/2 ${
                                  theme === 'light' ? 'bg-[#14F4FF]/30' : 'bg-[#14F4FF]/50'
                                }`} />
                                <div className={`h-2 rounded w-full ${
                                  theme === 'light' ? 'bg-[#14F4FF]/20' : 'bg-[#14F4FF]/40'
                                }`}>
                                  <div className={`h-full w-3/5 rounded ${
                                    theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                  }`} />
                                </div>
                              </div>
                              <div className={`p-3 rounded-lg ${
                                theme === 'light' ? 'bg-[#8A4FFF]/10' : 'bg-[#8A4FFF]/20'
                              }`}>
                                <div className={`h-3 rounded mb-2 w-3/4 ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/30' : 'bg-[#8A4FFF]/50'
                                }`} />
                                <div className={`h-2 rounded w-full ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/20' : 'bg-[#8A4FFF]/40'
                                }`}>
                                  <div className={`h-full w-full rounded ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                  }`} />
                                </div>
                              </div>
                              <div className={`p-3 rounded-lg ${
                                theme === 'light' ? 'bg-[#2D8CFF]/10' : 'bg-[#2D8CFF]/20'
                              }`}>
                                <div className={`h-3 rounded mb-2 w-1/3 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                }`} />
                                <div className={`h-2 rounded w-full ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/20' : 'bg-[#2D8CFF]/40'
                                }`}>
                                  <div className={`h-full w-2/3 rounded ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                  }`} />
                                </div>
                              </div>
                            </div>
                            {/* Score Badges */}
                            <div className="flex justify-center gap-3">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                theme === 'light' ? 'bg-green-400/20' : 'bg-green-400/40'
                              }`}>
                                <div className={`w-6 h-6 rounded-full ${
                                  theme === 'light' ? 'bg-green-400/60' : 'bg-green-400/80'
                                }`} />
                              </div>
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                theme === 'light' ? 'bg-[#14F4FF]/20' : 'bg-[#14F4FF]/40'
                              }`}>
                                <div className={`w-6 h-6 rounded-full ${
                                  theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                }`} />
                              </div>
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                theme === 'light' ? 'bg-yellow-400/20' : 'bg-yellow-400/40'
                              }`}>
                                <div className={`w-6 h-6 rounded-full ${
                                  theme === 'light' ? 'bg-yellow-400/60' : 'bg-yellow-400/80'
                                }`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Employee Upskilling */}
                      {hoveredItem === 'Employee upskilling and reskilling programs' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500 p-6">
                          <div className="space-y-6">
                            {/* Before/After Skill Levels */}
                            <div className="grid grid-cols-2 gap-6">
                              <div className={`p-4 rounded-lg ${
                                theme === 'light' ? 'bg-[#2D8CFF]/10' : 'bg-[#2D8CFF]/20'
                              }`}>
                                <div className={`text-center mb-3 h-3 rounded w-1/2 mx-auto ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                }`} />
                                <div className="space-y-2">
                                  <div className={`h-4 rounded w-1/3 ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/25' : 'bg-[#2D8CFF]/45'
                                  }`} />
                                  <div className={`h-4 rounded w-1/2 ${
                                    theme === 'light' ? 'bg-[#14F4FF]/25' : 'bg-[#14F4FF]/45'
                                  }`} />
                                  <div className={`h-4 rounded w-1/4 ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/25' : 'bg-[#8A4FFF]/45'
                                  }`} />
                                </div>
                              </div>
                              <div className={`p-4 rounded-lg border-2 ${
                                theme === 'light' ? 'bg-[#14F4FF]/10 border-[#14F4FF]/30' : 'bg-[#14F4FF]/20 border-[#14F4FF]/50'
                              }`}>
                                <div className={`text-center mb-3 h-3 rounded w-1/2 mx-auto ${
                                  theme === 'light' ? 'bg-[#14F4FF]/30' : 'bg-[#14F4FF]/50'
                                }`} />
                                <div className="space-y-2">
                                  <div className={`h-4 rounded w-4/5 ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/40' : 'bg-[#2D8CFF]/60'
                                  }`} />
                                  <div className={`h-4 rounded w-full ${
                                    theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                                  }`} />
                                  <div className={`h-4 rounded w-3/4 ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                  }`} />
                                </div>
                              </div>
                            </div>
                            {/* Learning Modules */}
                            <div className="flex justify-center">
                              <div className="flex gap-2 items-center">
                                <div className={`w-8 h-8 rounded ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/30' : 'bg-[#2D8CFF]/50'
                                }`} />
                                <div className={`w-4 h-0.5 ${
                                  theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                                }`} />
                                <div className={`w-8 h-8 rounded ${
                                  theme === 'light' ? 'bg-[#14F4FF]/30' : 'bg-[#14F4FF]/50'
                                }`} />
                                <div className={`w-4 h-0.5 ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                }`} />
                                <div className={`w-8 h-8 rounded ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/30' : 'bg-[#8A4FFF]/50'
                                }`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Corporate Training Dashboard */}
                      {hoveredItem === 'Customized corporate training solutions' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500 p-6">
                          <div className="space-y-4">
                            {/* Program Cards */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className={`p-3 rounded-lg ${
                                theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                              }`}>
                                <div className={`h-4 rounded mb-2 w-3/4 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                }`} />
                                <div className="flex gap-1">
                                  <div className={`w-4 h-4 rounded ${
                                    theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                  }`} />
                                  <div className={`w-4 h-4 rounded ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                  }`} />
                                  <div className={`w-4 h-4 rounded ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                  }`} />
                                </div>
                              </div>
                              <div className={`p-3 rounded-lg ${
                                theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                              }`}>
                                <div className={`h-4 rounded mb-2 w-2/3 ${
                                  theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                }`} />
                                <div className="flex gap-1">
                                  <div className={`w-4 h-4 rounded ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/50' : 'bg-[#2D8CFF]/70'
                                  }`} />
                                  <div className={`w-4 h-4 rounded ${
                                    theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                  }`} />
                                </div>
                              </div>
                            </div>
                            {/* Timeline Roadmap */}
                            <div className={`p-4 rounded-lg ${
                              theme === 'light' ? 'bg-[#8A4FFF]/30' : 'bg-[#8A4FFF]/50'
                            }`}>
                              <div className="flex items-center justify-between">
                                <div className={`w-6 h-6 rounded-full ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                }`} />
                                <div className={`flex-1 h-1 mx-2 ${
                                  theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                                }`} />
                                <div className={`w-6 h-6 rounded-full ${
                                  theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                }`} />
                                <div className={`flex-1 h-1 mx-2 ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                                }`} />
                                <div className={`w-6 h-6 rounded-full ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/60' : 'bg-[#8A4FFF]/80'
                                }`} />
                              </div>
                            </div>
                            {/* Team Learning Blocks */}
                            <div className="grid grid-cols-4 gap-2">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className={`h-12 rounded ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                }`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Staffing & Consulting */}
                      {hoveredItem === 'Staffing and consulting services' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500 p-6">
                          <div className="relative h-full">
                            {/* Organizational Chart Structure */}
                            <div className="flex flex-col h-full justify-between">
                              {/* Executive Level */}
                              <div className="flex justify-center">
                                <div className={`w-24 h-12 rounded-lg border-2 ${
                                  theme === 'light' ? 'bg-[#2D8CFF]/40 border-[#2D8CFF]/60' : 'bg-[#2D8CFF]/60 border-[#2D8CFF]/80'
                                } flex items-center justify-center`}>
                                  <div className={`w-6 h-6 rounded-full ${
                                    theme === 'light' ? 'bg-[#2D8CFF]/70' : 'bg-[#2D8CFF]/90'
                                  }`} />
                                </div>
                              </div>
                              
                              {/* Management Level */}
                              <div className="flex justify-center gap-8">
                                <div className={`w-20 h-10 rounded-lg ${
                                  theme === 'light' ? 'bg-[#14F4FF]/40' : 'bg-[#14F4FF]/60'
                                } flex items-center justify-center`}>
                                  <div className={`w-4 h-4 rounded ${
                                    theme === 'light' ? 'bg-[#14F4FF]/70' : 'bg-[#14F4FF]/90'
                                  }`} />
                                </div>
                                <div className={`w-20 h-10 rounded-lg ${
                                  theme === 'light' ? 'bg-[#8A4FFF]/40' : 'bg-[#8A4FFF]/60'
                                } flex items-center justify-center`}>
                                  <div className={`w-4 h-4 rounded ${
                                    theme === 'light' ? 'bg-[#8A4FFF]/70' : 'bg-[#8A4FFF]/90'
                                  }`} />
                                </div>
                              </div>
                              
                              {/* Team Level */}
                              <div className="flex justify-center gap-4">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className={`w-12 h-8 rounded ${
                                    i % 2 === 0 
                                      ? theme === 'light' ? 'bg-[#2D8CFF]/35' : 'bg-[#2D8CFF]/55'
                                      : theme === 'light' ? 'bg-[#14F4FF]/35' : 'bg-[#14F4FF]/55'
                                  } flex items-center justify-center`}>
                                    <div className={`w-2 h-2 rounded-full ${
                                      i % 2 === 0
                                        ? theme === 'light' ? 'bg-[#2D8CFF]/60' : 'bg-[#2D8CFF]/80'
                                        : theme === 'light' ? 'bg-[#14F4FF]/60' : 'bg-[#14F4FF]/80'
                                    }`} />
                                  </div>
                                ))}
                              </div>
                              
                              {/* Consultant Network */}
                              <div className="flex justify-between items-center px-4">
                                <div className={`w-8 h-8 rounded-full border-2 border-dashed ${
                                  theme === 'light' ? 'border-[#8A4FFF]/50 bg-[#8A4FFF]/20' : 'border-[#8A4FFF]/70 bg-[#8A4FFF]/40'
                                }`} />
                                <div className={`w-8 h-8 rounded-full border-2 border-dashed ${
                                  theme === 'light' ? 'border-[#2D8CFF]/50 bg-[#2D8CFF]/20' : 'border-[#2D8CFF]/70 bg-[#2D8CFF]/40'
                                }`} />
                                <div className={`w-8 h-8 rounded-full border-2 border-dashed ${
                                  theme === 'light' ? 'border-[#14F4FF]/50 bg-[#14F4FF]/20' : 'border-[#14F4FF]/70 bg-[#14F4FF]/40'
                                }`} />
                              </div>
                            </div>
                            
                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                              {/* Executive to Management */}
                              <line x1="50%" y1="20%" x2="35%" y2="40%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="2" />
                              <line x1="50%" y1="20%" x2="65%" y2="40%" stroke={theme === 'light' ? '#8A4FFF80' : '#8A4FFF'} strokeWidth="2" />
                              
                              {/* Management to Teams */}
                              <line x1="35%" y1="45%" x2="30%" y2="65%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="1" />
                              <line x1="35%" y1="45%" x2="45%" y2="65%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="1" />
                              <line x1="65%" y1="45%" x2="55%" y2="65%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="1" />
                              <line x1="65%" y1="45%" x2="70%" y2="65%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="1" />
                              
                              {/* Consultant Connections */}
                              <line x1="15%" y1="85%" x2="30%" y2="70%" stroke={theme === 'light' ? '#8A4FFF60' : '#8A4FFF80'} strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" />
                              <line x1="50%" y1="85%" x2="50%" y2="70%" stroke={theme === 'light' ? '#2D8CFF60' : '#2D8CFF80'} strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                              <line x1="85%" y1="85%" x2="70%" y2="70%" stroke={theme === 'light' ? '#14F4FF60' : '#14F4FF80'} strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '1s' }} />
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Employer Branding & Campus Partnerships */}
                      {hoveredItem === 'Employer branding and campus partnerships' && (
                        <div className="w-full h-full opacity-100 transition-all duration-500 p-6">
                          <div className="relative h-full">
                            {/* Company Nodes */}
                            <div className={`absolute top-8 left-8 w-16 h-12 rounded-lg ${
                              theme === 'light' ? 'bg-[#2D8CFF]/45 border-2 border-[#2D8CFF]/60' : 'bg-[#2D8CFF]/65 border-2 border-[#2D8CFF]/80'
                            }`} />
                            <div className={`absolute top-8 right-8 w-16 h-12 rounded-lg ${
                              theme === 'light' ? 'bg-[#14F4FF]/45 border-2 border-[#14F4FF]/60' : 'bg-[#14F4FF]/65 border-2 border-[#14F4FF]/80'
                            }`} />
                            {/* Campus Nodes */}
                            <div className={`absolute bottom-8 left-8 w-14 h-14 rounded-full ${
                              theme === 'light' ? 'bg-[#8A4FFF]/45 border-2 border-[#8A4FFF]/60' : 'bg-[#8A4FFF]/65 border-2 border-[#8A4FFF]/80'
                            }`} />
                            <div className={`absolute bottom-8 right-8 w-14 h-14 rounded-full ${
                              theme === 'light' ? 'bg-[#2D8CFF]/45 border-2 border-[#2D8CFF]/60' : 'bg-[#2D8CFF]/65 border-2 border-[#2D8CFF]/80'
                            }`} />
                            <div className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full ${
                              theme === 'light' ? 'bg-[#14F4FF]/45 border-2 border-[#14F4FF]/60' : 'bg-[#14F4FF]/65 border-2 border-[#14F4FF]/80'
                            }`} />
                            {/* Central Partnership Hub */}
                            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl ${
                              theme === 'light' ? 'bg-gradient-to-br from-[#2D8CFF]/50 to-[#8A4FFF]/50 border-2 border-[#14F4FF]/70' : 'bg-gradient-to-br from-[#2D8CFF]/70 to-[#8A4FFF]/70 border-2 border-[#14F4FF]/90'
                            } animate-pulse`} />
                            {/* Branding Touchpoints */}
                            <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded ${
                              theme === 'light' ? 'bg-[#14F4FF]/50' : 'bg-[#14F4FF]/70'
                            }`} />
                            <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded ${
                              theme === 'light' ? 'bg-[#8A4FFF]/50' : 'bg-[#8A4FFF]/70'
                            }`} />
                            {/* Connection Network */}
                            <svg className="absolute inset-0 w-full h-full">
                              <line x1="50%" y1="50%" x2="20%" y2="25%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="2" className="animate-pulse" />
                              <line x1="50%" y1="50%" x2="80%" y2="25%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                              <line x1="50%" y1="50%" x2="20%" y2="75%" stroke={theme === 'light' ? '#8A4FFF80' : '#8A4FFF'} strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                              <line x1="50%" y1="50%" x2="80%" y2="75%" stroke={theme === 'light' ? '#2D8CFF80' : '#2D8CFF'} strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
                              <line x1="50%" y1="50%" x2="50%" y2="25%" stroke={theme === 'light' ? '#14F4FF80' : '#14F4FF'} strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Explanation Zone (30% - moved to bottom) */}
              <div className={`h-[120px] rounded-b-2xl p-6 transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-white border-b border-l border-r border-[#e2e8f0] shadow-lg'
                  : 'bg-[#0A1A2F] border-b border-l border-r border-[#14F4FF]/30 shadow-2xl shadow-[#2D8CFF]/30'
              }`}>
                <div className="h-full flex flex-col justify-center">
                  <h4 className={`font-semibold text-sm mb-2 transition-all duration-300 ${
                    theme === 'light' ? 'text-[#1a2332]' : 'text-white'
                  }`}>
                    {hoveredItem ? hoveredItem : content.title}
                  </h4>
                  <p className={`text-xs leading-relaxed transition-all duration-300 ${
                    theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'
                  }`}>
                    {hoveredItem ? 
                      content.items.find(item => item.text === hoveredItem)?.description || content.description
                      : content.description
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
