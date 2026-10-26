import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { theme } = useTheme();
  const quickLinks = [
    { label: 'Home', value: 'home' },
    { label: 'For Business', value: 'business' },
    { label: 'For Colleges', value: 'colleges' },
    { label: 'For Corporates', value: 'corporates' },
    { label: 'Blog', value: 'blog' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <footer className={`relative border-t transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#0A1A2F] to-[#050F1A] border-[#14F4FF]/20'
        : 'bg-gradient-to-b from-[#F0F6FD] to-[#E8F1FC] border-[#D8E4F0]'
    }`}>
      <div className={`absolute inset-0 bg-[size:4rem_4rem] ${
        theme === 'dark'
          ? 'bg-[linear-gradient(to_right,#14F4FF05_1px,transparent_1px),linear-gradient(to_bottom,#14F4FF05_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#D8E4F005_1px,transparent_1px),linear-gradient(to_bottom,#D8E4F005_1px,transparent_1px)]'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent mb-4">
              Magnus Copo
            </h3>
            <p className={`leading-relaxed mb-4 text-lg font-bold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className={`bg-gradient-to-r bg-clip-text text-transparent animate-pulse ${
                theme === 'dark' ? 'from-white via-[#14F4FF] to-[#2D8CFF]' : 'from-[#1a2332] via-[#2D8CFF] to-[#1a2332]'
              }`}>
                Your vision
              </span>
              <span> </span>
              <span className={`bg-gradient-to-r bg-clip-text text-transparent animate-pulse ${
                theme === 'dark' ? 'from-[#2D8CFF] to-[#8A4FFF]' : 'from-[#2D8CFF] to-[#1a2332]'
              }`} style={{ animationDelay: '0.5s' }}>
                our execution
              </span>
            </p>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.value}>
                  <button
                    onClick={() => onNavigate(link.value)}
                    className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-[#14F4FF]' : 'text-gray-600 hover:text-[#2D8CFF]'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Solutions</h4>
            <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>EdTech Platform</li>
              <li>Training Programs</li>
              <li>Placement Services</li>
              <li>Corporate Hiring</li>
              <li>Business Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact</h4>
            <ul className="space-y-3">
              <li className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <Mail className="w-5 h-5 text-[#14F4FF] flex-shrink-0 mt-0.5" />
                <a href="mailto:marketing@magnuscopo.com" className="text-sm hover:text-[#14F4FF] transition-colors">
                  marketing@magnuscopo.com
                </a>
              </li>
              <li className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <Phone className="w-5 h-5 text-[#14F4FF] flex-shrink-0 mt-0.5" />
                <a href="tel:+917899899691" className="text-sm hover:text-[#14F4FF] transition-colors">
                  +91 7899899691
                </a>
              </li>
              <li className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin className="w-5 h-5 text-[#14F4FF] flex-shrink-0 mt-0.5" />
                <span className="text-sm">Magnuscopo LLP, 8/2, Novel Office, Halsoor Road, Bangalore, Karnataka - 560042</span>
              </li>
              <li className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <MessageCircle className="w-5 h-5 text-[#14F4FF] flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/+917899899691"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-[#14F4FF] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t ${theme === 'dark' ? 'border-[#14F4FF]/20' : 'border-[#D8E4F0]'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm text-center md:text-left ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Magnus Copo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className={`transition-colors text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-[#14F4FF]' : 'text-gray-600 hover:text-[#2D8CFF]'}`}>
                Privacy Policy
              </a>
              <a href="#" className={`transition-colors text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-[#14F4FF]' : 'text-gray-600 hover:text-[#2D8CFF]'}`}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#14F4FF] to-transparent" />
    </footer>
  );
}
