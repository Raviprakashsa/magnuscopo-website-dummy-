import { Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Logo {
  name: string;
  logo: string;
}

interface ClientsLogoRunnerProps {
  logos: Logo[];
}

export default function ClientsLogoRunner({ logos }: ClientsLogoRunnerProps) {
  const { theme } = useTheme();
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
      theme === 'light' ? 'bg-white' : 'bg-[#0A1A2F]'
    }`}>
      <div className="relative z-10 max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#14F4FF]/10 border border-[#14F4FF]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#14F4FF]" />
            <span className={`text-sm font-medium ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`}>Trusted By Leading Organizations</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>Our </span>
            <span className="bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className={`absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
          theme === 'light' ? 'bg-gradient-to-r from-white to-transparent' : 'bg-gradient-to-r from-[#0A1A2F] to-transparent'
        }`} />
        <div className={`absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
          theme === 'light' ? 'bg-gradient-to-l from-white to-transparent' : 'bg-gradient-to-l from-[#0A1A2F] to-transparent'
        }`} />

        <div className="flex overflow-hidden">
          <div className="flex gap-8 animate-scroll w-max">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="group flex-shrink-0 w-60 h-36 flex items-center justify-center transition-all duration-300"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
