import { ChevronRight, Calendar, Tag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  onRead: (slug: string) => void;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  author,
  date,
  image,
  slug,
  onRead,
}: BlogCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className="group relative h-full animate-fadeInUp">
      {theme === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/20 to-[#8A4FFF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      )}

      <div className={`relative h-full flex flex-col backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 ${
        theme === 'light'
          ? 'bg-white border border-[#e2e8f0] hover:shadow-xl'
          : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 hover:border-[#14F4FF]/50 group-hover:shadow-2xl group-hover:shadow-[#14F4FF]/30'
      }`}>
        {theme === 'dark' && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/5 to-[#8A4FFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}

        <div className="relative h-48 overflow-hidden">
          {theme === 'dark' && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/30 to-[#8A4FFF]/30 z-10" />
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          {theme === 'dark' && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-transparent" />
          )}

          <div className="absolute top-4 left-4 z-20">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#2D8CFF]/40 to-[#14F4FF]/40 backdrop-blur-md border border-[#14F4FF]/30 rounded-full text-xs font-semibold text-[#14F4FF] group-hover:border-[#14F4FF] transition-all duration-300">
              {category}
            </span>
          </div>
        </div>

        <div className="relative flex-1 p-6 flex flex-col">
          <h3 className={`text-lg sm:text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300 leading-tight ${
            theme === 'light'
              ? 'text-[#1a2332] group-hover:text-[#2D8CFF]'
              : 'text-white group-hover:text-[#14F4FF]'
          }`}>
            {title}
          </h3>

          <p className={`text-sm mb-4 line-clamp-2 flex-grow leading-relaxed ${
            theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'
          }`}>
            {excerpt}
          </p>

          <div className={`space-y-3 pt-4 border-t ${
            theme === 'light' ? 'border-[#e2e8f0]' : 'border-[#14F4FF]/10'
          }`}>
            <div className={`flex items-center justify-between gap-4 text-xs ${
              theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'
            }`}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#14F4FF]" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#14F4FF]" />
                <span className="truncate">{author}</span>
              </div>
            </div>

            <button
              onClick={() => onRead(slug)}
              className={`group/btn relative w-full px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden ${
                theme === 'light'
                  ? 'bg-[#2D8CFF] text-white hover:bg-[#2563eb] shadow-md hover:shadow-lg'
                  : 'bg-gradient-to-r from-[#2D8CFF]/20 to-[#14F4FF]/20 border border-[#14F4FF]/30 text-[#14F4FF] hover:border-[#14F4FF]/50 hover:bg-[#14F4FF]/10 group-hover/btn:shadow-lg group-hover/btn:shadow-[#14F4FF]/30'
              }`}
            >
              <span className="relative z-10">Read More</span>
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              {theme === 'dark' && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D8CFF]/10 to-[#14F4FF]/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
