import { useEffect, useState, useRef } from 'react';
import { Users, Code, Trophy, Building } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const stats = [
  { icon: Users, value: 1500000, label: 'Active Users', suffix: '+', prefix: '' },
  { icon: Code, value: 4500, label: 'DSA Problems', suffix: '+', prefix: '' },
  { icon: Trophy, value: 50, label: 'Live Contests', suffix: '+', prefix: '' },
  { icon: Building, value: 200, label: 'Partner Campuses', suffix: '+', prefix: '' },
];

export default function StatsStrip() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
      theme === 'light' ? 'bg-[#EEF2F7]' : 'bg-[#0A1A2F]'
    }`}>
      {theme === 'dark' && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#14F4FF10_1px,transparent_1px),linear-gradient(to_bottom,#14F4FF10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] via-transparent to-[#0A1A2F]" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 100}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCounterProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
  prefix: string;
  isVisible: boolean;
  delay: number;
  theme: string;
}

function StatCounter({ icon: Icon, value, label, suffix, prefix, isVisible, delay, theme }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="group relative text-center animate-fadeInUp" style={{ animationDelay: `${delay}ms` }}>
      {theme === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/20 to-[#8A4FFF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      )}

      <div className={`relative p-6 backdrop-blur-xl rounded-2xl transition-all duration-500 group-hover:transform group-hover:-translate-y-2 ${
        theme === 'light'
          ? 'bg-white border border-[#e2e8f0] hover:shadow-lg'
          : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 hover:border-[#14F4FF]/50'
      }`}>
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#2D8CFF]/30 to-[#14F4FF]/30 flex items-center justify-center border border-[#14F4FF]/30 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-8 h-8 text-[#14F4FF]" />
        </div>

        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent mb-2">
          {prefix}{formatNumber(count)}{suffix}
        </div>

        <div className={`font-medium uppercase text-sm tracking-wider ${
          theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'
        }`}>
          {label}
        </div>

        {theme === 'dark' && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#14F4FF]/5 to-[#8A4FFF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
      </div>
    </div>
  );
}
