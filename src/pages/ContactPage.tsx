import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, GraduationCap, Briefcase, Lightbulb } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const segments = [
  { id: 'colleges', label: 'Colleges', icon: GraduationCap, color: '#2D8CFF' },
  { id: 'corporates', label: 'Corporates', icon: Briefcase, color: '#14F4FF' },
  { id: 'business', label: 'Business Owners', icon: Lightbulb, color: '#8A4FFF' },
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'marketing@magnuscopo.com',
    link: 'mailto:marketing@magnuscopo.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 7899899691',
    link: 'tel:+917899899691',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Magnuscopo LLP, 8/2, Novel Office, Halsoor Road, Bangalore, Karnataka - 560042',
    link: 'https://maps.google.com/?q=Magnuscopo+LLP+8%2F2+Novel+Office+Halsoor+Road+Bangalore+Karnataka+560042',
  },
];

export default function ContactPage() {
  const { theme } = useTheme();
  const [selectedSegment, setSelectedSegment] = useState('colleges');
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [conversationMessage, setConversationMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const isFormComplete = Object.values(formData).every(value => value.trim() !== '');

  const getSegmentConfig = () => {
    const configs = {
      colleges: {
        organizationPlaceholder: 'Your College/University Name',
        messagePlaceholder: 'Tell us about your student placement goals, curriculum needs, or training requirements...',
        confirmationMessage: 'Perfect! We\'ll help you build job-ready students.',
      },
      corporates: {
        organizationPlaceholder: 'Your Company Name',
        messagePlaceholder: 'Describe your hiring challenges, training needs, or talent acquisition goals...',
        confirmationMessage: 'Great! We\'ll help you find and develop the right talent.',
      },
      business: {
        organizationPlaceholder: 'Your Business Name',
        messagePlaceholder: 'Share your digital transformation needs, growth goals, or technical challenges...',
        confirmationMessage: 'Excellent! We\'ll help accelerate your business growth.',
      },
    };
    return configs[selectedSegment as keyof typeof configs];
  };

  const handleSegmentChange = (segment: string) => {
    setSelectedSegment(segment);
    const configs = {
      colleges: {
        organizationPlaceholder: 'Your College/University Name',
        messagePlaceholder: 'Tell us about your student placement goals, curriculum needs, or training requirements...',
        confirmationMessage: 'Perfect! We\'ll help you build job-ready students.',
      },
      corporates: {
        organizationPlaceholder: 'Your Company Name',
        messagePlaceholder: 'Describe your hiring challenges, training needs, or talent acquisition goals...',
        confirmationMessage: 'Great! We\'ll help you find and develop the right talent.',
      },
      business: {
        organizationPlaceholder: 'Your Business Name',
        messagePlaceholder: 'Share your digital transformation needs, growth goals, or technical challenges...',
        confirmationMessage: 'Excellent! We\'ll help accelerate your business growth.',
      },
    };
    const config = configs[segment as keyof typeof configs];
    setConversationMessage(config.confirmationMessage);
    setTimeout(() => setConversationMessage(''), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    setShowTypingIndicator(true);
    
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }
    
    typingTimerRef.current = setTimeout(() => {
      setShowTypingIndicator(false);
    }, 2000);
  };

  const handleFieldFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setConversationMessage('Thank you! We\'ll be in touch within 24 hours.');
  };

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);



  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#F7F9FC]' : 'bg-[#0A1A2F]'}`}>
      <section ref={sectionRef} className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Gradient Mesh */}
          <div className={`absolute top-10 left-10 w-96 h-96 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-[#2D8CFF]/8' : 'bg-[#2D8CFF]/15'
          }`} style={{ animation: 'floatMesh 25s ease-in-out infinite' }} />
          <div className={`absolute top-1/3 right-20 w-80 h-80 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-[#14F4FF]/6' : 'bg-[#14F4FF]/12'
          }`} style={{ animation: 'floatMesh 30s ease-in-out infinite reverse' }} />
          <div className={`absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-2xl ${
            theme === 'light' ? 'bg-[#8A4FFF]/7' : 'bg-[#8A4FFF]/14'
          }`} style={{ animation: 'floatMesh 35s ease-in-out infinite' }} />
          
          {/* Soft Wave Background */}
          <div className={`absolute inset-0 opacity-20 ${
            theme === 'light' 
              ? 'bg-gradient-to-br from-[#2D8CFF]/4 via-transparent to-[#8A4FFF]/4'
              : 'bg-gradient-to-br from-[#2D8CFF]/10 via-transparent to-[#8A4FFF]/10'
          }`} style={{ animation: 'waveShift 45s ease-in-out infinite' }} />
        </div>

        <style>{`
          @keyframes floatMesh {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-20px) translateX(10px) rotate(1deg); }
            50% { transform: translateY(-10px) translateX(-15px) rotate(-1deg); }
            75% { transform: translateY(-25px) translateX(8px) rotate(0.5deg); }
          }
          @keyframes waveShift {
            0%, 100% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(2deg) scale(1.05); }
          }
          @keyframes headerFadeUp {
            0% { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          @keyframes touchGlow {
            0%, 100% { 
              text-shadow: 0 0 20px rgba(45, 140, 255, 0.3);
            }
            50% { 
              text-shadow: 0 0 30px rgba(20, 244, 255, 0.5), 0 0 40px rgba(138, 79, 255, 0.3);
            }
          }
          @keyframes fieldFocus {
            0% { 
              box-shadow: 0 0 0 0 rgba(45, 140, 255, 0.4);
            }
            100% { 
              box-shadow: 0 0 0 8px rgba(45, 140, 255, 0);
            }
          }
          .header-animate {
            opacity: 0;
          }
          .header-animate.visible {
            animation: headerFadeUp 1000ms ease-out forwards;
          }
          .touch-glow {
            animation: touchGlow 3s ease-in-out infinite;
          }
          .field-focus {
            animation: fieldFocus 0.6s ease-out;
          }
          @keyframes typingFade {
            0% { 
              opacity: 0; 
              transform: translateY(5px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          .typing-indicator {
            animation: typingFade 0.3s ease-out;
          }
        `}</style>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className={`text-center mb-16 header-animate ${isVisible ? 'visible' : ''}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>Get In </span>
              <span className="bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent touch-glow">
                Touch
              </span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
              Let's build something extraordinary together. Reach out and start your transformation journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fadeInLeft">
              <div className={`relative p-8 backdrop-blur-xl rounded-3xl transition-all duration-500 ${
                theme === 'light' ? 'bg-white border border-[#e2e8f0] shadow-xl' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 shadow-2xl shadow-[#2D8CFF]/20'
              } ${selectedSegment ? 'ring-2 ring-[#2D8CFF]/20' : ''}`}>
                {theme === 'dark' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/5 to-[#8A4FFF]/5 rounded-3xl" />
                )}

                <div className="relative">
                  <h2 className={`text-2xl font-bold mb-6 ${theme === 'light' ? 'text-[#1a2332]' : 'text-white'}`}>I'm interested as a:</h2>

                  {/* Conversational Message */}
                  {conversationMessage && (
                    <div className={`mb-4 text-sm p-3 rounded-lg border transition-all duration-500 ${
                      theme === 'light' 
                        ? 'bg-[#2D8CFF]/10 border-[#2D8CFF]/20 text-[#2D8CFF]' 
                        : 'bg-[#14F4FF]/10 border-[#14F4FF]/20 text-[#14F4FF]'
                    }`}>
                      {conversationMessage}
                    </div>
                  )}

                  {/* Typing Indicator */}
                  {showTypingIndicator && (
                    <div className={`mb-4 text-sm flex items-center gap-2 typing-indicator ${
                      theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'
                    }`}>
                      <span>We're listening…</span>
                      <span className="flex gap-1">
                        <span className="w-1 h-1 rounded-full bg-current animate-pulse" style={{ animationDelay: '0ms' }} />
                        <span className="w-1 h-1 rounded-full bg-current animate-pulse" style={{ animationDelay: '150ms' }} />
                        <span className="w-1 h-1 rounded-full bg-current animate-pulse" style={{ animationDelay: '300ms' }} />
                      </span>
                    </div>
                  )}

                  {/* Form Complete Indicator */}

                  <div className="flex flex-wrap gap-3 mb-8">
                    {segments.map((segment) => {
                      const Icon = segment.icon;
                      return (
                        <button
                          key={segment.id}
                          onClick={() => handleSegmentChange(segment.id)}
                          className={`relative flex-1 p-3 sm:p-4 rounded-xl transition-all duration-500 group overflow-hidden ${
                            selectedSegment === segment.id
                              ? theme === 'light'
                                ? 'bg-[#2D8CFF] border-2 border-[#2D8CFF] shadow-lg transform scale-105'
                                : 'bg-gradient-to-br from-[#2D8CFF]/30 to-[#14F4FF]/30 border-2 border-[#14F4FF] shadow-lg shadow-[#14F4FF]/30 transform scale-105'
                              : theme === 'light'
                              ? 'bg-[#F7F9FC] border border-[#e2e8f0] hover:border-[#2D8CFF]/50 hover:scale-102'
                              : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 hover:border-[#14F4FF]/50 hover:scale-102'
                          }`}
                        >
                          {selectedSegment === segment.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2D8CFF]/20 to-[#14F4FF]/20 animate-pulse" />
                          )}
                          <Icon
                            className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                              selectedSegment === segment.id
                                ? theme === 'light' ? 'text-white' : 'text-[#14F4FF]'
                                : theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'
                            }`}
                          />
                          <span
                            className={`text-xs sm:text-sm font-medium relative z-10 ${
                              selectedSegment === segment.id
                                ? 'text-white'
                                : theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'
                            }`}
                          >
                            {segment.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                      <label className={`block text-sm font-medium mb-2 ${theme === 'light' ? 'text-[#1a2332]' : 'text-gray-300'}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onFocus={() => handleFieldFocus('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                          theme === 'light'
                            ? 'bg-[#F7F9FC] border border-[#e2e8f0] text-[#1a2332] placeholder-gray-400 focus:border-[#2D8CFF] focus:ring-[#2D8CFF]/20'
                            : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 text-white placeholder-gray-500 focus:border-[#14F4FF] focus:ring-[#14F4FF]/20'
                        } ${focusedField === 'name' ? 'field-focus' : ''}`}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                        <label className={`block text-sm font-medium mb-2 ${theme === 'light' ? 'text-[#1a2332]' : 'text-gray-300'}`}>
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          onFocus={() => handleFieldFocus('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                            theme === 'light'
                              ? 'bg-[#F7F9FC] border border-[#e2e8f0] text-[#1a2332] placeholder-gray-400 focus:border-[#2D8CFF] focus:ring-[#2D8CFF]/20'
                              : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 text-white placeholder-gray-500 focus:border-[#14F4FF] focus:ring-[#14F4FF]/20'
                          } ${focusedField === 'email' ? 'field-focus' : ''}`}
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                        <label className={`block text-sm font-medium mb-2 ${theme === 'light' ? 'text-[#1a2332]' : 'text-gray-300'}`}>
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          onFocus={() => handleFieldFocus('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                            theme === 'light'
                              ? 'bg-[#F7F9FC] border border-[#e2e8f0] text-[#1a2332] placeholder-gray-400 focus:border-[#2D8CFF] focus:ring-[#2D8CFF]/20'
                              : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 text-white placeholder-gray-500 focus:border-[#14F4FF] focus:ring-[#14F4FF]/20'
                          } ${focusedField === 'phone' ? 'field-focus' : ''}`}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                      <label className={`block text-sm font-medium mb-2 ${theme === 'light' ? 'text-[#1a2332]' : 'text-gray-300'}`}>
                        Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        onFocus={() => handleFieldFocus('organization')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                          theme === 'light'
                            ? 'bg-[#F7F9FC] border border-[#e2e8f0] text-[#1a2332] placeholder-gray-400 focus:border-[#2D8CFF] focus:ring-[#2D8CFF]/20'
                            : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 text-white placeholder-gray-500 focus:border-[#14F4FF] focus:ring-[#14F4FF]/20'
                        } ${focusedField === 'organization' ? 'field-focus' : ''}`}
                        placeholder={getSegmentConfig().organizationPlaceholder}
                      />
                    </div>

                    <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                      <label className={`block text-sm font-medium mb-2 ${theme === 'light' ? 'text-[#1a2332]' : 'text-gray-300'}`}>
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        onFocus={() => handleFieldFocus('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                          theme === 'light'
                            ? 'bg-[#F7F9FC] border border-[#e2e8f0] text-[#1a2332] placeholder-gray-400 focus:border-[#2D8CFF] focus:ring-[#2D8CFF]/20'
                            : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 text-white placeholder-gray-500 focus:border-[#14F4FF] focus:ring-[#14F4FF]/20'
                        } ${focusedField === 'message' ? 'field-focus' : ''}`}
                        placeholder={getSegmentConfig().messagePlaceholder}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className={`group relative w-full px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#14F4FF]/50 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed'
                          : isSubmitted
                          ? 'bg-green-500'
                          : 'bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF]'
                      } ${isFormComplete && !isSubmitted ? 'animate-pulse' : ''}`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : isFormComplete ? 'Send Message' : 'Send Message'}
                        {!isSubmitting && !isSubmitted && (
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#14F4FF] to-[#8A4FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {isFormComplete && !isSubmitted && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2D8CFF]/20 to-[#14F4FF]/20 animate-pulse" />
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fadeInRight">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`group relative block p-6 backdrop-blur-xl rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    theme === 'light'
                      ? 'bg-white border border-[#e2e8f0] hover:shadow-xl hover:shadow-[#2D8CFF]/20'
                      : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 hover:border-[#14F4FF]/50 hover:shadow-xl hover:shadow-[#14F4FF]/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-[#2D8CFF]/30 to-[#14F4FF]/30 flex items-center justify-center border border-[#14F4FF]/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <info.icon className={`w-7 h-7 transition-all duration-300 ${
                        theme === 'light' ? 'text-[#2D8CFF] group-hover:text-[#14F4FF]' : 'text-[#14F4FF] group-hover:text-white'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                        theme === 'light' ? 'text-[#1a2332] group-hover:text-[#2D8CFF]' : 'text-white group-hover:text-[#14F4FF]'
                      }`}>
                        {info.title}
                      </h3>
                      <p className={`transition-colors duration-300 ${
                        theme === 'light' ? 'text-[#4a5568] group-hover:text-[#2D8CFF]/80' : 'text-gray-400 group-hover:text-[#14F4FF]/80'
                      }`}>{info.content}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2D8CFF]/5 to-[#14F4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
