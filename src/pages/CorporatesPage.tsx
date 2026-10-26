import { useState } from 'react';
import { Briefcase, UserCheck, TrendingUp, Users, Zap, Target, Settings, Award, Clock, CheckCircle, Layers, Shield as ShieldIcon, GraduationCap, DollarSign, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const solutions = [
  {
    icon: UserCheck,
    title: 'AI-Powered Hiring',
    description: 'Smart recruitment tools with skill-based candidate assessments and automated screening.',
    benefits: ['Resume parsing & ranking', 'Technical assessments', 'Video interview analysis', 'Cultural fit evaluation'],
  },
  {
    icon: Target,
    title: 'Skill Evaluations',
    description: 'Comprehensive technical and soft skill assessments tailored to your requirements.',
    benefits: ['Custom test creation', 'Proctored assessments', 'Detailed analytics', 'Benchmark scoring'],
  },
  {
    icon: TrendingUp,
    title: 'Employee Upskilling',
    description: 'Continuous learning programs to keep your workforce ahead of industry trends.',
    benefits: ['Personalized learning paths', 'Micro-learning modules', 'Certification tracking', 'Progress monitoring'],
  },
  {
    icon: Users,
    title: 'Staffing Solutions',
    description: 'End-to-end staffing pipelines connecting you with pre-vetted, job-ready talent.',
    benefits: ['Campus recruitment', 'Lateral hiring', 'Contract staffing', 'Talent pooling'],
  },
  {
    icon: Settings,
    title: 'Corporate Bootcamps',
    description: 'Intensive training programs designed for rapid skill development in emerging technologies.',
    benefits: ['Custom curriculum', 'Expert trainers', 'Hands-on projects', 'Placement support'],
  },
  {
    icon: Award,
    title: 'Consulting Services',
    description: 'Strategic consulting for talent acquisition, training infrastructure, and HR tech adoption.',
    benefits: ['HR process optimization', 'Training strategy', 'Tech stack evaluation', 'ROI analysis'],
  },
];

const whyChooseReasons = [
  {
    id: 1,
    title: 'Reduce hiring time by 50%',
    icon: Clock,
    description: 'Cut your hiring cycle in half with streamlined, skill-based evaluations.',
  },
  {
    id: 2,
    title: 'Get quality, pre-assessed candidates',
    icon: CheckCircle,
    description: 'Access candidates who are already skill-verified and ready to perform from day one.',
  },
  {
    id: 3,
    title: 'Industry-experienced trainers',
    icon: GraduationCap,
    description: 'Learn from trainers with real industry experience and practical expertise.',
  },
  {
    id: 4,
    title: 'Faster onboarding & better retention',
    icon: TrendingUp,
    description: 'Speed up onboarding while improving retention through better skill alignment.',
  },
  {
    id: 5,
    title: 'Flexible & cost-effective',
    icon: DollarSign,
    description: 'Choose training and assessment solutions that are both flexible and cost-efficient.',
  },
];

export default function CorporatesPage() {
  const { theme } = useTheme();
  const [activeCard, setActiveCard] = useState<number | null>(1);
  
  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#F7F9FC]' : 'bg-[#0A1A2F]'}`}>
      <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {theme === 'dark' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/20 via-transparent to-[#8A4FFF]/20" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#14F4FF] rounded-full filter blur-[150px] opacity-20" />
          </>
        )}

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#14F4FF]/10 border border-[#14F4FF]/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-[#14F4FF]" />
              <span className="text-sm font-medium text-[#14F4FF]">For Corporate Leaders</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent">
                Concerned about
              </span>
              <br />
              <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>hiring outcomes?</span>
            </h1>

            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
              A complete solution for companies to assess talent, hire efficiently, upskill employees, and run corporate training programs all under one ecosystem
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] bg-clip-text text-transparent">
                What we offer to organizations
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {solutions.map((solution, index) => (
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
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#2D8CFF]/30 to-[#14F4FF]/30 flex items-center justify-center border border-[#14F4FF]/30 group-hover:scale-110 transition-transform duration-500">
                    <solution.icon className={`w-8 h-8 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
                  </div>

                  <h3 className={`text-xl font-bold mb-3 transition-colors ${
                    theme === 'light' ? 'text-[#1a2332] group-hover:text-[#2D8CFF]' : 'text-white group-hover:text-[#14F4FF]'
                  }`}>
                    {solution.title}
                  </h3>

                  <p className={`mb-4 leading-relaxed ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'}`}>
                    {solution.description}
                  </p>

                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'}`}>
                        <Zap className={`w-4 h-4 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'} flex-shrink-0 mt-0.5`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`relative pt-8 pb-12 px-4 sm:px-6 lg:px-8 ${
        theme === 'light' ? 'bg-[#F7F9FC]' : 'bg-gradient-to-b from-[#0A1A2F] to-[#0D2340]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] bg-clip-text text-transparent">
                Corporate Problems We Solve
              </span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto mb-8 ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
              Every company faces similar challenges
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className={`relative p-8 lg:p-12 backdrop-blur-xl rounded-3xl overflow-hidden ${
              theme === 'light' ? 'bg-white border border-[#e2e8f0] shadow-xl' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20'
            }`}>
              <div className="space-y-8">
                {[
                  'Difficulty finding job-ready candidates - Struggling to find candidates with the right skills and practical readiness required for the job.',
                  'Time-consuming interview cycles - Long interview processes slow down hiring and delay project execution.',
                  'Communication gaps in freshers - Fresh graduates often struggle with communication skills needed for workplace success.',
                  'Resumes don\'t reveal real skills - Traditional resumes fail to show whether candidates truly have the skills needed for the job.',
                  'Low coding or technical fundamentals - Many candidates lack strong coding or technical fundamentals required for real-world work.',
                  'Workforce not aligned to industry expectations - Many candidates are not trained in the skills and standards today\'s industries expect.'
                ].map((problem, index) => {
                  const [title, description] = problem.split(' - ');
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-6 p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] animate-fadeInUp"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className={`relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-12 ${
                        theme === 'light'
                          ? 'bg-gradient-to-br from-[#2D8CFF]/10 to-[#14F4FF]/10 border-2 border-[#2D8CFF]/30'
                          : 'bg-gradient-to-br from-[#2D8CFF]/20 to-[#14F4FF]/20 border-2 border-[#14F4FF]/30'
                      }`}>
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] animate-pulse`} />
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#2D8CFF]/20 to-[#14F4FF]/20 animate-ping`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          theme === 'light' ? 'text-[#1a2332] group-hover:text-[#2D8CFF]' : 'text-white group-hover:text-[#14F4FF]'
                        }`}>
                          {title}
                        </h3>
                        <p className={`leading-relaxed ${
                          theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'
                        }`}>
                          {description}
                        </p>
                      </div>
                      
                      <div className={`w-1 h-16 rounded-full bg-gradient-to-b from-[#2D8CFF] to-[#14F4FF] opacity-30 group-hover:opacity-100 transition-all duration-500`} />
                    </div>
                  );
                })}
              </div>
              
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2D8CFF]/10 to-transparent rounded-bl-full`} />
              <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#14F4FF]/10 to-transparent rounded-tr-full`} />
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
              {whyChooseReasons.map((reason, index) => {
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
