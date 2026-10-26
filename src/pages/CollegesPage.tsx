import { useState } from 'react';
import { Brain, BarChart, Target, Trophy, Zap, Award, Shield, Lightbulb, Building2, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    icon: BarChart,
    title: 'Real-time performance analytics',
    description: 'Stay updated with live performance data as students learn and grow. Make smarter academic decisions backed by instant analytics.',
    highlights: ['Smart content recommendations', 'Adaptive assessments', 'Learning analytics dashboard', 'Mobile-first interface'],
  },
  {
    icon: Brain,
    title: 'Behavior insights',
    description: 'Gain clarity on student behavior with real-time engagement analytics. Help them improve with deeper understanding and timely actions.',
    highlights: ['Student progress tracking', 'Engagement metrics', 'Placement readiness scores', 'Custom report generation'],
  },
  {
    icon: Target,
    title: 'Skill-level tracking',
    description: 'Get a clear picture of student skill development at every stage. Use precise tracking to personalise learning and boost outcomes.',
    highlights: ['Competency mapping', 'Skill gap analysis', 'Industry alignment tracking', 'Certification management'],
  },
  {
    icon: Trophy,
    title: 'Formative assessments',
    description: 'Track learning in real time through continuous formative evaluations. Identify gaps early and provide timely, effective support.',
    highlights: ['Multi-language support', 'Auto-graded submissions', 'Plagiarism detection', 'Code quality analysis'],
  },
  {
    icon: Zap,
    title: 'AI-driven recommendations',
    description: 'With AI-powered recommendations, learners get support that adapts to their needs. Improve outcomes with smarter, data-backed suggestions at every step.',
    highlights: ['Live leaderboards', 'Custom problem sets', 'Team competitions', 'Prize management'],
  },
];

const platforms = [
  {
    title: 'Student Portal',
    description: 'Personalized dashboards with course access, progress tracking, and skill development metrics.',
    features: ['Course enrollment', 'Assignment submission', 'Performance analytics', 'Placement preparation'],
  },
  {
    title: 'Faculty Portal',
    description: 'Tools for content creation, student monitoring, and comprehensive analytics.',
    features: ['Course management', 'Grading automation', 'Student insights', 'Resource library'],
  },
  {
    title: 'Admin Dashboard',
    description: 'Institution-wide analytics, placement tracking, and comprehensive reporting.',
    features: ['Campus analytics', 'Placement outcomes', 'Department insights', 'ROI tracking'],
  },
];

const whyChooseReasons = [
  {
    id: 1,
    title: 'One Platform. Complete Learning & Employability.',
    icon: Lightbulb,
    description: 'Say goodbye to juggling multiple tools. Assessments, learning modules, coding practice, and placement preparation, all unified into one seamless experience.',
  },
  {
    id: 2,
    title: 'Data-Driven Decisions',
    icon: BarChart,
    description: 'Access intelligent performance dashboards for every batch, department, and individual empowering you to track progress, identify gaps, and make smarter academic decisions.',
  },
  {
    id: 3,
    title: '360° Student Development',
    icon: Target,
    description: 'Academic excellence, skill-building, and career preparation. all combined to shape fully industry-ready students.',
  },
  {
    id: 4,
    title: 'Enterprise Grade Security',
    icon: Shield,
    description: 'Your student\'s data is safeguarded with advanced protection protocols, encrypted systems and industry-standard security practices.',
  },
  {
    id: 5,
    title: 'Chosen by Forward-Thinking Institutions',
    icon: Building2,
    description: 'Institutions that prioritize innovation and student success choose our platform for its reliability, advanced features, and measurable impact on learning and employability.',
  },
];

export default function CollegesPage() {
  const { theme } = useTheme();
  const [activeCard, setActiveCard] = useState<number | null>(1);
  
  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#F7F9FC]' : 'bg-[#0A1A2F]'}`}>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {theme === 'dark' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/20 via-transparent to-[#8A4FFF]/20" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#14F4FF] rounded-full filter blur-[150px] opacity-20" />
          </>
        )}

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 ${
              theme === 'light' ? 'bg-[#2D8CFF]/10 border border-[#2D8CFF]/30' : 'bg-[#14F4FF]/10 border border-[#14F4FF]/30'
            }`}>
              <Award className={`w-4 h-4 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
              <span className={`text-sm font-medium ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`}>For Educational Institutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent">
                Concerned about
              </span>
              <br />
              <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>placement outcomes?</span>
            </h1>

            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
              Let us help bridge your student's skill gap.
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] bg-clip-text text-transparent">
                Next-Gen LMS, Assessments & Exams
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {theme === 'dark' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/20 to-[#8A4FFF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                )}

                <div className={`relative h-full p-8 backdrop-blur-xl rounded-2xl transition-all duration-500 group-hover:-translate-y-2 ${
                  theme === 'light' ? 'bg-white border border-[#e2e8f0] hover:shadow-xl' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 hover:border-[#14F4FF]/50'
                }`}>
                  <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-500 ${
                    theme === 'light' ? 'bg-[#2D8CFF]/10 border-[#2D8CFF]/30' : 'bg-gradient-to-br from-[#2D8CFF]/30 to-[#14F4FF]/30 border-[#14F4FF]/30'
                  }`}>
                    <feature.icon className={`w-8 h-8 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
                  </div>

                  <h3 className={`text-xl font-bold mb-3 transition-colors ${
                    theme === 'light' ? 'text-[#1a2332] group-hover:text-[#2D8CFF]' : 'text-white group-hover:text-[#14F4FF]'
                  }`}>
                    {feature.title}
                  </h3>

                  <p className={`mb-4 leading-relaxed ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'}`}>
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'}`}>
                        <Zap className={`w-4 h-4 flex-shrink-0 mt-0.5 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
                        <span>{highlight}</span>
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
        theme === 'light' ? 'bg-[#F7F9FC]' : 'bg-gradient-to-b from-[#0D2340] to-[#0A1A2F]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] bg-clip-text text-transparent">
                Placement Drive Preparation
              </span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto mb-8 ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
              Mock Interviews, Mock drives test Bundles. Unlimited attempts and analysis to improve after every test Based on the top companies questioners pattern
            </p>
          </div>

          <div className={`relative p-8 lg:p-12 backdrop-blur-xl rounded-3xl overflow-hidden ${theme === 'light' ? 'bg-white/80 border border-white/40 shadow-xl' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20'}`}>
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-2 ${theme === 'light' ? 'text-[#1a2332]' : 'text-white'}`}>
                Preparing students for success at top companies
              </h3>
            </div>
            
            <div className="relative">
              {/* Desktop Layout */}
              <div className="hidden md:flex justify-center items-center gap-6 md:gap-8">
                {[
                  { name: 'TCS', logo: '/TCS.svg' },
                  { name: 'Wipro', logo: '/wipro.svg' },
                  { name: 'Infosys', logo: '/Infosys.svg' },
                  { name: 'Capgemini', logo: '/Capgemini.svg' },
                  { name: 'Tech Mahindra', logo: '/techmahindra.svg' },
                  { name: 'Cognizant', logo: '/cognizant.svg' },
                  { name: 'Google', logo: '/google.svg' },
                  { name: 'IBM', logo: '/IBM.svg' }
                ].map((company) => (
                  <div
                    key={company.name}
                    className="group relative transition-all duration-300 ease-out"
                  >
                    <div className={`relative w-28 h-24 p-1 rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 ${
                      theme === 'light'
                        ? 'bg-white/80 border border-gray-200/50 shadow-md group-hover:shadow-lg group-hover:border-[#2D8CFF]/50'
                        : 'bg-[#0A1A2F]/60 border border-[#14F4FF]/20 group-hover:border-[#14F4FF]/50'
                    }`}>
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className="max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <span className={`text-xs font-medium whitespace-nowrap ${
                          theme === 'light' ? 'text-[#1a2332]' : 'text-white'
                        }`}>
                          {company.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Scrolling Layout */}
              <div className="md:hidden overflow-hidden">
                <div className="flex animate-scroll gap-6">
                  {/* First set of logos */}
                  {[
                    { name: 'TCS', logo: '/TCS.svg' },
                    { name: 'Wipro', logo: '/wipro.svg' },
                    { name: 'Infosys', logo: '/Infosys.svg' },
                    { name: 'Capgemini', logo: '/Capgemini.svg' },
                    { name: 'Tech Mahindra', logo: '/techmahindra.svg' },
                    { name: 'Cognizant', logo: '/cognizant.svg' },
                    { name: 'Google', logo: '/google.svg' },
                    { name: 'IBM', logo: '/IBM.svg' }
                  ].map((company) => (
                    <div key={`first-${company.name}`} className="flex-shrink-0">
                      <div className={`w-20 h-16 p-1 rounded-xl backdrop-blur-sm ${
                        theme === 'light'
                          ? 'bg-white/80 border border-gray-200/50 shadow-md'
                          : 'bg-[#0A1A2F]/60 border border-[#14F4FF]/20'
                      }`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src={company.logo} 
                            alt={company.name}
                            className="max-w-[85%] max-h-[85%] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[
                    { name: 'TCS', logo: '/TCS.svg' },
                    { name: 'Wipro', logo: '/wipro.svg' },
                    { name: 'Infosys', logo: '/Infosys.svg' },
                    { name: 'Capgemini', logo: '/Capgemini.svg' },
                    { name: 'Tech Mahindra', logo: '/techmahindra.svg' },
                    { name: 'Cognizant', logo: '/cognizant.svg' },
                    { name: 'Google', logo: '/google.svg' },
                    { name: 'IBM', logo: '/IBM.svg' }
                  ].map((company) => (
                    <div key={`second-${company.name}`} className="flex-shrink-0">
                      <div className={`w-20 h-16 p-1 rounded-xl backdrop-blur-sm ${
                        theme === 'light'
                          ? 'bg-white/80 border border-gray-200/50 shadow-md'
                          : 'bg-[#0A1A2F]/60 border border-[#14F4FF]/20'
                      }`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src={company.logo} 
                            alt={company.name}
                            className="max-w-[85%] max-h-[85%] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Row - Desktop Layout */}
              <div className="hidden md:flex justify-center items-center gap-6 md:gap-8 mt-12">
                {[
                  { name: 'Accenture', logo: '/Accenture.svg' },
                  { name: 'Amazon', logo: '/Amazon.svg' },
                  { name: 'CISCO', logo: '/CISCO.svg' },
                  { name: 'L&T', logo: '/L&T.svg' },
                  { name: 'Microsoft', logo: '/MICROSOFT.svg' },
                  { name: 'SAP', logo: '/SAP.svg' },
                  { name: 'TATA', logo: '/TATA.svg' },
                  { name: 'ZOHO', logo: '/ZOHO.svg' }
                ].map((company) => (
                  <div
                    key={company.name}
                    className="group relative transition-all duration-300 ease-out"
                  >
                    <div className={`relative w-28 h-24 p-1 rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 ${
                      theme === 'light'
                        ? 'bg-white/80 border border-gray-200/50 shadow-md group-hover:shadow-lg group-hover:border-[#2D8CFF]/50'
                        : 'bg-[#0A1A2F]/60 border border-[#14F4FF]/20 group-hover:border-[#14F4FF]/50'
                    }`}>
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className="max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <span className={`text-xs font-medium whitespace-nowrap ${
                          theme === 'light' ? 'text-[#1a2332]' : 'text-white'
                        }`}>
                          {company.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Row - Mobile Scrolling Layout */}
              <div className="md:hidden overflow-hidden mt-8">
                <div className="flex animate-scroll gap-6">
                  {/* First set of logos */}
                  {[
                    { name: 'Accenture', logo: '/Accenture.svg' },
                    { name: 'Amazon', logo: '/Amazon.svg' },
                    { name: 'CISCO', logo: '/CISCO.svg' },
                    { name: 'L&T', logo: '/L&T.svg' },
                    { name: 'Microsoft', logo: '/MICROSOFT.svg' },
                    { name: 'SAP', logo: '/SAP.svg' },
                    { name: 'TATA', logo: '/TATA.svg' },
                    { name: 'ZOHO', logo: '/ZOHO.svg' }
                  ].map((company) => (
                    <div key={`first-${company.name}`} className="flex-shrink-0">
                      <div className={`w-20 h-16 p-1 rounded-xl backdrop-blur-sm ${
                        theme === 'light'
                          ? 'bg-white/80 border border-gray-200/50 shadow-md'
                          : 'bg-[#0A1A2F]/60 border border-[#14F4FF]/20'
                      }`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src={company.logo} 
                            alt={company.name}
                            className="max-w-[85%] max-h-[85%] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[
                    { name: 'Accenture', logo: '/Accenture.svg' },
                    { name: 'Amazon', logo: '/Amazon.svg' },
                    { name: 'CISCO', logo: '/CISCO.svg' },
                    { name: 'L&T', logo: '/L&T.svg' },
                    { name: 'Microsoft', logo: '/MICROSOFT.svg' },
                    { name: 'SAP', logo: '/SAP.svg' },
                    { name: 'TATA', logo: '/TATA.svg' },
                    { name: 'ZOHO', logo: '/ZOHO.svg' }
                  ].map((company) => (
                    <div key={`second-${company.name}`} className="flex-shrink-0">
                      <div className={`w-20 h-16 p-1 rounded-xl backdrop-blur-sm ${
                        theme === 'light'
                          ? 'bg-white/80 border border-gray-200/50 shadow-md'
                          : 'bg-[#0A1A2F]/60 border border-[#14F4FF]/20'
                      }`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src={company.logo} 
                            alt={company.name}
                            className="max-w-[85%] max-h-[85%] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <style>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-6px); }
              }
              .animate-float {
                animation: float 4s ease-in-out infinite;
              }
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll {
                animation: scroll 12s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </section>

      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 ${
        theme === 'light' ? 'bg-white' : 'bg-gradient-to-b from-[#0D2340] to-[#0A1A2F]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>Platform </span>
              <span className="bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
              Comprehensive portals for students, faculty, and administrators
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="relative group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {theme === 'dark' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/30 to-[#8A4FFF]/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                )}

                <div className={`relative p-8 backdrop-blur-xl rounded-2xl transition-all duration-500 group-hover:-translate-y-2 ${
                  theme === 'light' ? 'bg-white border border-[#e2e8f0] hover:shadow-xl' : 'bg-[#0A1A2F]/70 border border-[#14F4FF]/30 hover:border-[#14F4FF]/50'
                }`}>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                    theme === 'light' ? 'text-[#1a2332] group-hover:text-[#2D8CFF]' : 'text-white group-hover:text-[#14F4FF]'
                  }`}>
                    {platform.title}
                  </h3>

                  <p className={`mb-6 leading-relaxed ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
                    {platform.description}
                  </p>

                  <ul className="space-y-3">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF]" />
                        <span className={theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
                  <span className="bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] bg-clip-text text-transparent">Us</span>
                </h2>
                
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] animate-pulse"
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

              {activeCard && (
                <div className={`hidden lg:block p-6 rounded-2xl backdrop-blur-xl border animate-slideInLeft ${
                  theme === 'light'
                    ? 'bg-white/70 border-white/20 shadow-xl'
                    : 'bg-[#0A1A2F]/40 border-[#14F4FF]/20 shadow-2xl shadow-[#2D8CFF]/10'
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
                          ? 'bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] text-white rounded-t-2xl'
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
     </div>
  );
}
