import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Dean, VIT University',
    content: 'Magnus Copo has revolutionized how we approach student training and placement. The AI-driven analytics and comprehensive LMS have improved our placement rates by 45%.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Priya Sharma',
    role: 'HR Director, Tech Innovations Ltd',
    content: 'The skill assessment platform is outstanding. We\'ve streamlined our hiring process and found candidates with exactly the technical competencies we need.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Amit Patel',
    role: 'CEO, StartupHub',
    content: 'Their business solutions team delivered a cutting-edge platform that transformed our digital presence. Professional, innovative, and results-driven.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Sarah Thompson',
    role: 'Training Head, Global Corp',
    content: 'The corporate training programs are exceptional. Our employees have upskilled significantly, and the platform\'s analytics help us track progress effectively.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${
      theme === 'light' ? 'bg-[#F7F9FC]' : 'bg-gradient-to-b from-[#0D2340] to-[#0A1A2F]'
    }`}>
      {theme === 'dark' && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8A4FFF] rounded-full filter blur-[150px] opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#14F4FF] rounded-full filter blur-[150px] opacity-20" />
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>What </span>
            <span className="bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent">
              Leaders Say
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'
          }`}>
            Trusted by educational institutions, corporations, and businesses worldwide
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="relative group">
                    {theme === 'dark' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/30 to-[#8A4FFF]/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                    )}

                    <div className={`relative p-8 sm:p-12 backdrop-blur-2xl rounded-3xl shadow-2xl ${
                      theme === 'light'
                        ? 'bg-white border border-[#e2e8f0]'
                        : 'bg-[#0A1A2F]/70 border border-[#14F4FF]/30'
                    }`}>
                      <div className={`absolute top-8 right-8 ${
                        theme === 'light' ? 'text-[#2D8CFF]/10' : 'text-[#14F4FF]/20'
                      }`}>
                        <Quote size={64} />
                      </div>

                      <div className="flex flex-col items-center text-center mb-8">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#14F4FF]/30 mb-4 shadow-lg shadow-[#14F4FF]/30">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <h3 className={`text-2xl font-bold mb-1 ${
                          theme === 'light' ? 'text-[#1a2332]' : 'text-white'
                        }`}>
                          {testimonial.name}
                        </h3>
                        <p className={`font-medium mb-4 ${
                          theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'
                        }`}>
                          {testimonial.role}
                        </p>

                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-[#14F4FF] text-[#14F4FF]"
                            />
                          ))}
                        </div>
                      </div>

                      <p className={`text-lg leading-relaxed text-center max-w-3xl mx-auto ${
                        theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'
                      }`}>
                        "{testimonial.content}"
                      </p>

                      {theme === 'dark' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#14F4FF]/5 to-[#8A4FFF]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 p-3 backdrop-blur-xl rounded-full hover:scale-110 transition-all duration-300 ${
              theme === 'light'
                ? 'bg-white border border-[#e2e8f0] text-[#2D8CFF] hover:bg-gray-50 shadow-lg'
                : 'bg-[#0A1A2F]/80 border border-[#14F4FF]/30 text-[#14F4FF] hover:bg-[#14F4FF]/20 shadow-lg shadow-[#14F4FF]/20'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 p-3 backdrop-blur-xl rounded-full hover:scale-110 transition-all duration-300 ${
              theme === 'light'
                ? 'bg-white border border-[#e2e8f0] text-[#2D8CFF] hover:bg-gray-50 shadow-lg'
                : 'bg-[#0A1A2F]/80 border border-[#14F4FF]/30 text-[#14F4FF] hover:bg-[#14F4FF]/20 shadow-lg shadow-[#14F4FF]/20'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF]'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
