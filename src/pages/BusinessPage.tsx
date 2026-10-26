import { useState, useRef, useEffect } from 'react';
import { Palette, Code, Megaphone, Lightbulb, Smartphone, Cog, Rocket, Sparkles, Settings, Target, Headphones, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BusinessPageProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    icon: Code,
    title: 'Web & App Development',
    description: 'Full-stack development services for web applications, mobile apps, and progressive web apps.',
    deliverables: ['Custom web applications', 'iOS & Android apps', 'E-commerce platforms', 'SaaS solutions'],
  },
  {
    icon: Palette,
    title: 'UI/UX & Branding',
    description: 'Design systems, brand identity, and user experiences that captivate and convert.',
    deliverables: ['Brand identity design', 'UI/UX prototyping', 'Design systems', 'Marketing collateral'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to amplify your brand and drive measurable growth.',
    deliverables: ['SEO & SEM campaigns', 'Social media marketing', 'Content strategy', 'Performance analytics'],
  },
  {
    icon: Cog,
    title: 'Software Solutions',
    description: 'Enterprise software, automation tools, and custom integrations tailored to your needs.',
    deliverables: ['ERP systems', 'CRM solutions', 'Workflow automation', 'API integrations'],
  },
  {
    icon: Lightbulb,
    title: 'Product Strategy',
    description: 'From ideation to launch, we help you build products that solve real problems.',
    deliverables: ['Market research', 'Product roadmapping', 'MVP development', 'Go-to-market strategy'],
  },
  {
    icon: Smartphone,
    title: 'Mechanical Prototyping',
    description: 'Hardware prototyping and product design for physical products and IoT solutions.',
    deliverables: ['CAD modeling', '3D prototyping', 'IoT integration', 'Product testing'],
  },
];

const portfolioItems = [
  {
    title: 'Versionext',
    category: 'Education Technology (EdTech)',
    description: 'A dynamic EdTech platform delivering scalable digital learning and academic support systems.',
    image: '/Projects_1.svg',
    url: 'https://versionext.co.in/',
  },
  {
    title: 'EK Corp',
    category: 'Energy & Power Sector',
    description: 'Energy sector specialists driving power solutions and sustainable energy initiatives.',
    image: '/Projects_2.svg',
    url: 'https://ekcorp.co.in/',
  },
  {
    title: 'VB Industries',
    category: 'Mechanical Manufacturing',
    description: 'Mechanical manufacturing experts providing industrial engineering and precision fabrication.',
    image: '/Projects_3.svg',
    url: 'https://vb-industries.in/',
  },
  {
    title: 'Savvyimpexllp',
    category: 'Consumer Goods & Supply Chain',
    description: 'FMCG supplier of quality consumer products and tableware solutions.',
    image: '/Projects_4.svg',
    url: 'https://savvyimpexllp.com/',
  },
  {
    title: 'Sa Productions',
    category: 'Event Management & Production',
    description: 'Full-service event production and experiential management company.',
    image: '/Projects_5.svg',
    url: 'https://saproduction.in/',
  },
  {
    title: 'HS Solutions',
    category: 'Healthcare Supplies',
    description: 'Healthcare supply partner offering high-quality medical equipment and clinical resources.',
    image: '/Projects_6.svg',
    url: 'https://hs-solutions.in/',
  },
  {
    title: 'Reintenspark',
    category: 'Innovation & R&D',
    description: 'Innovation-driven R&D firm enabling tech advancement and product ideation.',
    image: '/Projects_7.svg',
    url: 'https://reintenspark.com/',
  },
];

const whyChooseReasons = [
  {
    id: 1,
    title: 'Customized Solutions',
    icon: Settings,
    description: 'We provide tailored strategies and services designed specifically for your business needs and growth.',
  },
  {
    id: 2,
    title: 'End-to-End Expertise',
    icon: Cog,
    description: 'From web development to digital marketing and custom software, we offer complete technology solutions under one roof.',
  },
  {
    id: 3,
    title: 'Result-Oriented Approach',
    icon: Target,
    description: 'We focus on delivering measurable outcomes that boost your brand visibility, leads, and revenue.',
  },
  {
    id: 4,
    title: 'Dedicated Support',
    icon: Headphones,
    description: 'Our team ensures continuous support, timely delivery, and long-term partnership to drive your success.',
  },
];

export default function BusinessPage({ onNavigate }: BusinessPageProps) {
  const { theme } = useTheme();
  const [activeCard, setActiveCard] = useState<number | null>(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileScrollRef.current && window.innerWidth < 640) {
        const element = mobileScrollRef.current;
        const scrollLeft = element.scrollLeft;
        const cardWidth = element.offsetWidth - 64; // Container width minus padding (32px each side)
        const newSlide = Math.round(scrollLeft / cardWidth);
        setCurrentSlide(Math.max(0, Math.min(newSlide, portfolioItems.length - 1)));
      }
    };

    const scrollElement = mobileScrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (desktopScrollRef.current) {
      const scrollAmount = 400;
      desktopScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#F7F9FC]' : 'bg-[#0A1A2F]'}`}>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {theme === 'dark' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A4FFF]/20 via-transparent to-[#14F4FF]/20" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#8A4FFF] rounded-full filter blur-[150px] opacity-20" />
          </>
        )}

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#8A4FFF]/10 border border-[#8A4FFF]/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#8A4FFF]" />
              <span className="text-sm font-medium text-[#8A4FFF]">Your Vision Our Expertise</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8A4FFF] via-[#14F4FF] to-[#2D8CFF] bg-clip-text text-transparent">
                Empowering Business Owners
              </span>
              <br />
              <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>to Lead the Future</span>
            </h1>


          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {theme === 'dark' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8A4FFF]/20 to-[#14F4FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                )}

                <div className={`relative h-full p-8 backdrop-blur-xl rounded-2xl transition-all duration-500 group-hover:-translate-y-2 ${
                  theme === 'light' ? 'bg-white border border-[#e2e8f0] hover:shadow-xl' : 'bg-[#0A1A2F]/50 border border-[#8A4FFF]/20 hover:border-[#8A4FFF]/50 group-hover:shadow-2xl group-hover:shadow-[#8A4FFF]/20'
                }`}>
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#8A4FFF]/30 to-[#14F4FF]/30 flex items-center justify-center border border-[#8A4FFF]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-[#8A4FFF]" />
                  </div>

                  <h3 className={`text-xl font-bold mb-3 transition-colors ${
                    theme === 'light' ? 'text-[#1a2332] group-hover:text-[#8A4FFF]' : 'text-white group-hover:text-[#8A4FFF]'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`mb-4 leading-relaxed ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'}`}>
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'}`}>
                        <Rocket className="w-4 h-4 text-[#8A4FFF] flex-shrink-0 mt-0.5" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 ${
        theme === 'light' ? 'bg-white' : 'bg-gradient-to-b from-[#0A1A2F] to-[#0D2340]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>Featured </span>
              <span className="bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
              Transforming visions into reality with cutting-edge technology and creative excellence
            </p>
          </div>

          <div className="relative">
            {/* Desktop Navigation */}
            <button
              onClick={() => scroll('left')}
              className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-white border border-[#e2e8f0] hover:border-[#8A4FFF]/30 hover:bg-[#8A4FFF]/5 text-[#8A4FFF] shadow-lg'
                  : 'bg-[#0A1A2F]/80 border border-[#8A4FFF]/20 hover:border-[#8A4FFF]/50 hover:bg-[#8A4FFF]/10 text-[#14F4FF] shadow-2xl'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Mobile Carousel */}
            <div 
              ref={mobileScrollRef}
              className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory px-8 py-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => window.open(item.url, '_blank')}
                  className={`group relative flex-shrink-0 w-[87vw] cursor-pointer snap-center transition-all duration-300`}
                >
                  <div className={`relative backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 h-[400px] flex flex-col ${
                    theme === 'light' ? 'bg-white border border-[#e2e8f0] shadow-lg' : 'bg-[#0A1A2F]/50 border border-[#8A4FFF]/30 shadow-xl'
                  }`}>
                    <div className="relative h-40 overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-[#8A4FFF]/10 to-[#14F4FF]/10 border border-[#8A4FFF]/20 rounded-full mb-3">
                        <span className="text-xs font-semibold bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] bg-clip-text text-transparent">{item.category}</span>
                      </div>

                      <h3 className={`text-lg font-bold mb-2 line-clamp-2 ${
                        theme === 'light' ? 'text-[#1a2332]' : 'text-white'
                      }`}>
                        {item.title}
                      </h3>

                      <p className={`text-sm leading-relaxed mb-4 flex-1 line-clamp-3 ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm font-medium bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] bg-clip-text text-transparent">
                          View project
                        </span>
                        <div className="text-[#8A4FFF]">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Carousel */}
            <div 
              ref={desktopScrollRef}
              className="hidden sm:flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-4 sm:mx-20 py-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => window.open(item.url, '_blank')}
                  className="group relative animate-fadeInUp flex-shrink-0 w-72 sm:w-64 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] h-[420px] sm:h-96 flex flex-col ${
                    theme === 'light' ? 'bg-white border border-[#e2e8f0] shadow-lg hover:shadow-xl' : 'bg-[#0A1A2F]/50 border border-[#8A4FFF]/30 hover:border-[#8A4FFF]/50 shadow-xl hover:shadow-[#8A4FFF]/20'
                  }`}>
                    <div className="relative h-44 sm:h-40 overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-[#8A4FFF]/10 to-[#14F4FF]/10 border border-[#8A4FFF]/20 rounded-full mb-3 group-hover:from-[#8A4FFF]/20 group-hover:to-[#14F4FF]/20 transition-all duration-300">
                        <span className="text-xs font-semibold bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] bg-clip-text text-transparent">{item.category}</span>
                      </div>

                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 line-clamp-2 ${
                        theme === 'light' ? 'text-[#1a2332] group-hover:text-[#8A4FFF]' : 'text-white group-hover:text-[#14F4FF]'
                      }`}>
                        {item.title}
                      </h3>

                      <p className={`text-sm leading-relaxed mb-4 flex-1 line-clamp-3 ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm font-medium bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] bg-clip-text text-transparent group-hover:drop-shadow-sm transition-all duration-300">
                          View project
                        </span>
                        <div className="text-[#8A4FFF] group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className={`hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-white border border-[#e2e8f0] hover:border-[#8A4FFF]/30 hover:bg-[#8A4FFF]/5 text-[#8A4FFF] shadow-lg'
                  : 'bg-[#0A1A2F]/80 border border-[#8A4FFF]/20 hover:border-[#8A4FFF]/50 hover:bg-[#8A4FFF]/10 text-[#14F4FF] shadow-2xl'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Mobile Pagination Dots */}
            <div className="sm:hidden flex justify-center mt-6 gap-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (mobileScrollRef.current) {
                      const element = mobileScrollRef.current;
                      const cardWidth = element.offsetWidth - 64; // Container width minus padding
                      element.scrollTo({
                        left: index * cardWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] w-6'
                      : theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="px-4 sm:px-0">
              <button 
                onClick={() => onNavigate('contact')}
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A4FFF]/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#14F4FF] to-[#2D8CFF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </section>

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
            <div className="space-y-8">
              <div className="animate-fadeInUp">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                  <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>Why Choose </span>
                  <span className="bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] bg-clip-text text-transparent">Us</span>
                </h2>
                
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    ))}
                  </div>
                  <div className="relative w-32 h-1 bg-gradient-to-r from-[#8A4FFF]/30 via-[#14F4FF]/50 to-[#2D8CFF]/30 overflow-hidden rounded-full">
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

              {activeCard && (
                <div className={`hidden lg:block p-6 rounded-2xl backdrop-blur-xl border animate-slideInLeft ${
                  theme === 'light'
                    ? 'bg-white/70 border-white/20 shadow-xl'
                    : 'bg-[#0A1A2F]/40 border-[#14F4FF]/20 shadow-2xl shadow-[#8A4FFF]/10'
                }`}>
                  <div className="flex items-start gap-4">
                    {(() => {
                      const reason = whyChooseReasons.find(r => r.id === activeCard);
                      if (!reason) return null;
                      const Icon = reason.icon;
                      return (
                        <>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            theme === 'light'
                              ? 'bg-gradient-to-br from-[#8A4FFF]/10 to-[#14F4FF]/10'
                              : 'bg-gradient-to-br from-[#8A4FFF]/30 to-[#14F4FF]/30'
                          }`}>
                            <Icon className={`w-6 h-6 ${theme === 'light' ? 'text-[#8A4FFF]' : 'text-[#14F4FF]'}`} />
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

            <div className="hidden lg:grid gap-4">
              {whyChooseReasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.id}
                    onClick={() => setActiveCard(activeCard === reason.id ? null : reason.id)}
                    className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeCard === reason.id
                        ? theme === 'light'
                          ? 'bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] text-white shadow-2xl transform scale-105'
                          : 'bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] text-white shadow-2xl shadow-[#8A4FFF]/30 transform scale-105'
                        : theme === 'light'
                        ? 'bg-white border border-gray-200 hover:border-[#8A4FFF]/30 hover:shadow-lg hover:-translate-y-1'
                        : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/10 hover:border-[#14F4FF]/30 hover:bg-[#14F4FF]/5 hover:-translate-y-1'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeCard === reason.id
                          ? 'bg-white/20 backdrop-blur-sm'
                          : theme === 'light'
                          ? 'bg-[#8A4FFF]/10 group-hover:bg-[#8A4FFF]/20'
                          : 'bg-[#14F4FF]/10 group-hover:bg-[#14F4FF]/20'
                      }`}>
                        <Icon className={`w-5 h-5 transition-all duration-300 ${
                          activeCard === reason.id
                            ? 'text-white'
                            : theme === 'light'
                            ? 'text-[#8A4FFF]'
                            : 'text-[#14F4FF]'
                        }`} />
                      </div>
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        activeCard === reason.id
                          ? 'text-white'
                          : theme === 'light'
                          ? 'text-[#1a2332] group-hover:text-[#8A4FFF]'
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
              {whyChooseReasons.map((reason) => {
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
                          ? 'bg-gradient-to-r from-[#8A4FFF] to-[#14F4FF] text-white rounded-t-2xl'
                          : 'hover:bg-gray-50 dark:hover:bg-[#14F4FF]/5 rounded-2xl'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isExpanded
                            ? 'bg-white/20 backdrop-blur-sm'
                            : theme === 'light'
                            ? 'bg-[#8A4FFF]/10'
                            : 'bg-[#14F4FF]/10'
                        }`}>
                          <Icon className={`w-4 h-4 ${
                            isExpanded
                              ? 'text-white'
                              : theme === 'light'
                              ? 'text-[#8A4FFF]'
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
    </div>
  );
}
