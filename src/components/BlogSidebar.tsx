import { Search, Zap } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface BlogSidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSearch: (query: string) => void;
  popularPosts: Array<{ slug: string; title: string }>;
  onPostClick: (slug: string) => void;
}

export default function BlogSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  onSearch,
  popularPosts,
  onPostClick,
}: BlogSidebarProps) {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <>
      <div className="hidden lg:block sticky top-24">
        <div className="space-y-6">
          <SearchBox theme={theme} searchQuery={searchQuery} handleSearch={handleSearch} />
          <CategoriesBox theme={theme} categories={categories} selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
          <PopularPostsBox theme={theme} popularPosts={popularPosts} onPostClick={onPostClick} />
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden w-full mb-6 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
          theme === 'light'
            ? 'bg-[#2D8CFF] text-white hover:bg-[#2563eb] shadow-md'
            : 'bg-gradient-to-r from-[#2D8CFF]/20 to-[#14F4FF]/20 border border-[#14F4FF]/30 text-[#14F4FF] hover:border-[#14F4FF]/50 hover:bg-[#14F4FF]/10'
        }`}
      >
        {isOpen ? 'Hide Filters' : 'Show Filters'}
      </button>

      {isOpen && (
        <div className="lg:hidden space-y-4 mb-8 animate-fadeIn">
          <div className={`p-4 backdrop-blur-xl rounded-lg ${
            theme === 'light' ? 'bg-white border border-[#e2e8f0] shadow-md' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20'
          }`}>
            <label className={`block text-sm font-semibold mb-3 ${theme === 'light' ? 'text-[#1a2332]' : 'text-white'}`}>Search</label>
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                className={`w-full pl-9 pr-3 py-2 rounded focus:outline-none text-sm ${
                  theme === 'light'
                    ? 'bg-[#F7F9FC] border border-[#e2e8f0] text-[#1a2332] placeholder-gray-400 focus:border-[#2D8CFF]'
                    : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 text-white placeholder-gray-500 focus:border-[#14F4FF]'
                }`}
              />
            </div>
          </div>

          <div className={`p-4 backdrop-blur-xl rounded-lg ${
            theme === 'light' ? 'bg-white border border-[#e2e8f0] shadow-md' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20'
          }`}>
            <label className={`block text-sm font-semibold mb-3 ${theme === 'light' ? 'text-[#1a2332]' : 'text-white'}`}>Category</label>
            <div className="space-y-2">
              <button
                onClick={() => { onCategoryChange(''); setIsOpen(false); }}
                className={`block w-full text-left px-3 py-2 rounded text-sm font-medium transition-all ${
                  selectedCategory === '' ? (theme === 'light' ? 'bg-[#2D8CFF] text-white' : 'bg-[#14F4FF]/20 text-[#14F4FF]') : (theme === 'light' ? 'text-[#4a5568] hover:text-[#1a2332] hover:bg-gray-100' : 'text-gray-400 hover:text-white')
                }`}
              >
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => { onCategoryChange(category); setIsOpen(false); }}
                  className={`block w-full text-left px-3 py-2 rounded text-sm font-medium transition-all ${
                    selectedCategory === category ? (theme === 'light' ? 'bg-[#2D8CFF] text-white' : 'bg-[#14F4FF]/20 text-[#14F4FF]') : (theme === 'light' ? 'text-[#4a5568] hover:text-[#1a2332] hover:bg-gray-100' : 'text-gray-400 hover:text-white')
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SearchBox({ theme, searchQuery, handleSearch }: { theme: string; searchQuery: string; handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="relative group">
      {theme === 'dark' && <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/20 to-[#8A4FFF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />}
      <div className={`relative p-6 backdrop-blur-xl rounded-2xl transition-all duration-300 ${
        theme === 'light' ? 'bg-white border border-[#e2e8f0] hover:shadow-md' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 hover:border-[#14F4FF]/30'
      }`}>
        <label className={`block text-sm font-semibold mb-3 uppercase tracking-wide ${theme === 'light' ? 'text-[#1a2332]' : 'text-white'}`}>Search Articles</label>
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />
          <input type="text" placeholder="Search blog posts..." value={searchQuery} onChange={handleSearch}
            className={`w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all text-sm ${
              theme === 'light' ? 'bg-[#F7F9FC] border border-[#e2e8f0] text-[#1a2332] placeholder-gray-400 focus:border-[#2D8CFF] focus:ring-[#2D8CFF]/20' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 text-white placeholder-gray-500 focus:border-[#14F4FF] focus:ring-[#14F4FF]/20'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

function CategoriesBox({ theme, categories, selectedCategory, onCategoryChange }: { theme: string; categories: string[]; selectedCategory: string; onCategoryChange: (cat: string) => void }) {
  return (
    <div className="relative group">
      {theme === 'dark' && <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/20 to-[#8A4FFF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />}
      <div className={`relative p-6 backdrop-blur-xl rounded-2xl transition-all duration-300 ${
        theme === 'light' ? 'bg-white border border-[#e2e8f0] hover:shadow-md' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 hover:border-[#14F4FF]/30'
      }`}>
        <h3 className={`text-sm font-semibold mb-4 uppercase tracking-wide flex items-center gap-2 ${theme === 'light' ? 'text-[#1a2332]' : 'text-white'}`}>
          <Zap className={`w-4 h-4 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />Categories
        </h3>
        <div className="space-y-2">
          <button onClick={() => onCategoryChange('')}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
              selectedCategory === '' ? (theme === 'light' ? 'bg-[#2D8CFF] text-white' : 'bg-gradient-to-r from-[#2D8CFF]/30 to-[#14F4FF]/30 border border-[#14F4FF]/30 text-[#14F4FF]') : (theme === 'light' ? 'bg-[#F7F9FC] border border-[#e2e8f0] text-[#4a5568] hover:bg-gray-100 hover:text-[#1a2332]' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/10 text-gray-400 hover:border-[#14F4FF]/30 hover:text-white')
            }`}>
            All Articles
          </button>
          {categories.map((category) => (
            <button key={category} onClick={() => onCategoryChange(category)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                selectedCategory === category ? (theme === 'light' ? 'bg-[#2D8CFF] text-white' : 'bg-gradient-to-r from-[#2D8CFF]/30 to-[#14F4FF]/30 border border-[#14F4FF]/30 text-[#14F4FF]') : (theme === 'light' ? 'bg-[#F7F9FC] border border-[#e2e8f0] text-[#4a5568] hover:bg-gray-100 hover:text-[#1a2332]' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/10 text-gray-400 hover:border-[#14F4FF]/30 hover:text-white')
              }`}>
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PopularPostsBox({ theme, popularPosts, onPostClick }: { theme: string; popularPosts: Array<{ slug: string; title: string }>; onPostClick: (slug: string) => void }) {
  return (
    <div className="relative group">
      {theme === 'dark' && <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/20 to-[#8A4FFF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />}
      <div className={`relative p-6 backdrop-blur-xl rounded-2xl transition-all duration-300 ${
        theme === 'light' ? 'bg-white border border-[#e2e8f0] hover:shadow-md' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 hover:border-[#14F4FF]/30'
      }`}>
        <h3 className={`text-sm font-semibold mb-4 uppercase tracking-wide flex items-center gap-2 ${theme === 'light' ? 'text-[#1a2332]' : 'text-white'}`}>
          <Zap className={`w-4 h-4 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`} />Popular Posts
        </h3>
        <div className="space-y-3">
          {popularPosts.map((post, index) => (
            <button key={post.slug} onClick={() => onPostClick(post.slug)}
              className={`group/post flex items-start gap-3 p-3 rounded-lg transition-all duration-300 ${
                theme === 'light' ? 'bg-[#F7F9FC] border border-[#e2e8f0] hover:bg-gray-100 hover:shadow-sm' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/10 hover:border-[#14F4FF]/30 hover:bg-[#14F4FF]/5'
              }`}>
              <span className={`font-bold text-xs mt-0.5 ${theme === 'light' ? 'text-[#2D8CFF]' : 'text-[#14F4FF]'}`}>{index + 1}</span>
              <span className={`text-xs transition-colors line-clamp-2 ${
                theme === 'light' ? 'text-[#4a5568] group-hover/post:text-[#1a2332]' : 'text-gray-400 group-hover/post:text-white'
              }`}>{post.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
