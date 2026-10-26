import { useEffect, useRef, useState } from 'react';
import { Cpu, BarChart3, Code2, Shield, Rocket, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    icon: Cpu,
    title: 'AI-Powered LMS',
    description: 'Intelligent learning management with personalized pathways and adaptive content delivery.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Comprehensive dashboards tracking performance, engagement, and learning outcomes.',
  },
  {
    icon: Code2,
    title: 'Coding Ecosystem',
    description: '4500+ DSA problems, live contests, and hands-on programming challenges.',
  },
  {
    icon: Shield,
    title: 'AI-Proctored Assessments',
    description: 'Secure, automated proctoring with advanced fraud detection and integrity monitoring.',
  },
  {
    icon: Rocket,
    title: 'Skill Development',
    description: 'Industry-aligned training programs with certification and competency tracking.',
  },
  {
    icon: TrendingUp,
    title: 'Placement Outcomes',
    description: 'End-to-end placement ecosystem connecting talent with opportunities.',
  },
];

export default function WhyChooseUs() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-b from-[#0A1A2F] via-[#0D2340] to-[#0A1A2F]' : 'bg-gradient-to-b from-[#F7F9FC] via-[#EEF2F7] to-[#F7F9FC]'
      }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Light Blobs */}
        <div className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-2xl ${
          theme === 'light' ? 'bg-[#2D8CFF]/8' : 'bg-[#2D8CFF]/15'
        }`} style={{ animation: 'floatSlow 20s ease-in-out infinite' }} />
        <div className={`absolute top-40 right-20 w-24 h-24 rounded-full blur-2xl ${
          theme === 'light' ? 'bg-[#14F4FF]/6' : 'bg-[#14F4FF]/12'
        }`} style={{ animation: 'floatSlow 25s ease-in-out infinite reverse' }} />
        <div className={`absolute bottom-32 left-1/4 w-20 h-20 rounded-full blur-xl ${
          theme === 'light' ? 'bg-[#8A4FFF]/7' : 'bg-[#8A4FFF]/14'
        }`} style={{ animation: 'floatSlow 30s ease-in-out infinite' }} />
        <div className={`absolute bottom-20 right-1/3 w-28 h-28 rounded-full blur-2xl ${
          theme === 'light' ? 'bg-[#2D8CFF]/5' : 'bg-[#2D8CFF]/10'
        }`} style={{ animation: 'floatSlow 22s ease-in-out infinite reverse' }} />
        
        {/* Gradient Mesh Background */}
        <div className={`absolute inset-0 opacity-30 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-[#2D8CFF]/3 via-transparent to-[#8A4FFF]/3'
            : 'bg-gradient-to-br from-[#2D8CFF]/8 via-transparent to-[#8A4FFF]/8'
        }`} style={{ animation: 'gradientShift 40s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-8px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
        @keyframes gradientShift {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(1deg) scale(1.02); }
        }
        @keyframes headingFadeUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes underlineExpand {
          0% { 
            width: 0; 
            opacity: 0;
          }
          100% { 
            width: 100%; 
            opacity: 1;
          }
        }
        @keyframes textReveal {
          0% { 
            opacity: 0; 
            transform: translateY(15px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes missionHighlight {
          0% { 
            background-size: 0% 100%;
          }
          100% { 
            background-size: 100% 100%;
          }
        }
        .heading-animate {
          opacity: 0;
        }
        .heading-animate.visible {
          animation: headingFadeUp 800ms ease-out forwards;
        }
        .underline-animate {
          width: 0;
          opacity: 0;
        }
        .underline-animate.visible {
          animation: underlineExpand 600ms ease-out 400ms forwards;
        }
        .text-animate-1 {
          opacity: 0;
        }
        .text-animate-1.visible {
          animation: textReveal 600ms ease-out 800ms forwards;
        }
        .text-animate-2 {
          opacity: 0;
        }
        .text-animate-2.visible {
          animation: textReveal 600ms ease-out 1000ms forwards;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 heading-animate ${isVisible ? 'visible' : ''}`}>
            <span className="bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>
          <div className={`w-32 h-1 mx-auto bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] rounded-full underline-animate ${isVisible ? 'visible' : ''}`} />
          <p className={`text-xl max-w-3xl mx-auto mt-6 text-animate-1 ${isVisible ? 'visible' : ''} ${
            theme === 'dark' ? 'text-gray-300' : 'text-[#4a5568]'
          }`}>
            A complete innovation ecosystem powered by cutting-edge technology and AI-driven insights
          </p>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <p className={`text-xl sm:text-2xl leading-relaxed font-light text-animate-1 ${isVisible ? 'visible' : ''} ${
            theme === 'dark' ? 'text-gray-200' : 'text-[#2d3748]'
          }`} style={{ fontFamily: 'FK Grotesk, sans-serif', textAlign: 'justify' }}>
            <span className="bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent font-semibold">
              Magnus Copo
            </span>{' '}
            is an information technology and EdTech solutions company building modern digital products, automation systems, and AI-powered platforms that help businesses scale. We also enable colleges to create job-ready students through smart learning tools, skill assessments, and coding platforms, while helping corporates hire and train talent with data-driven insights.
          </p>
          <br />
          <p className={`text-xl sm:text-2xl leading-relaxed font-medium text-animate-2 ${isVisible ? 'visible' : ''} ${
            theme === 'dark' ? 'text-white' : 'text-[#1a2332]'
          }`}>
            Our mission is to{' '}
            <span className="bg-gradient-to-r from-[#2D8CFF] to-[#8A4FFF] bg-clip-text text-transparent font-bold">
              connect technology, learning, and hiring
            </span>{' '}
            through intelligent, scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
