import { useState, useEffect } from 'react';
import { Sparkles, BookOpen } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import BlogSidebar from '../components/BlogSidebar';
import blogPosts from '../data/blog-posts.json';
import { useTheme } from '../context/ThemeContext';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  featured_image: string;
  created_at: string;
}

interface BlogPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPosts(blogPosts as BlogPost[]);
    setFilteredPosts(blogPosts as BlogPost[]);
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (selectedCategory) {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery, posts]);

  const categories = [...new Set(posts.map((post) => post.category))];
  const popularPosts = posts.slice(0, 5);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#F7F9FC]' : 'bg-[#0A1A2F]'}`}>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {theme === 'dark' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/20 via-transparent to-[#8A4FFF]/20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14F4FF] rounded-full filter blur-[150px] opacity-20" />
          </>
        )}

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#14F4FF]/10 border border-[#14F4FF]/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#14F4FF]" />
              <span className="text-sm font-medium text-[#14F4FF]">Magnus Copo Insights</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent">
                Insights, Innovations
              </span>
              <br />
              <span className={theme === 'light' ? 'text-[#1a2332]' : 'text-white'}>&Industry Perspectives</span>
            </h1>

            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-300'}`}>
              Dive into expert articles on EdTech, training, corporate hiring, business innovation, and more.
            </p>
          </div>

          <div className={`relative p-8 backdrop-blur-xl rounded-3xl mb-12 animate-fadeIn ${
            theme === 'light' ? 'bg-white border border-[#e2e8f0] shadow-lg' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20 shadow-2xl shadow-[#2D8CFF]/20'
          }`}>
            {theme === 'dark' && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/5 to-[#8A4FFF]/5 rounded-3xl" />
            )}

            <div className="relative flex items-center gap-4 justify-center">
              <BookOpen className="w-8 h-8 text-[#14F4FF] animate-float" />
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#14F4FF] to-transparent" />
              <span className="text-sm font-semibold text-[#14F4FF] uppercase tracking-wider">
                {filteredPosts.length} Articles
              </span>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#14F4FF] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#14F4FF] border-r-transparent" />
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post, index) => (
                      <div
                        key={post.id}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <BlogCard
                          id={post.id}
                          title={post.title}
                          excerpt={post.excerpt || ''}
                          category={post.category}
                          author={post.author}
                          date={formatDate(post.created_at)}
                          image={post.featured_image || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'}
                          slug={post.slug}
                          onRead={(slug) => onNavigate('article', slug)}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={`text-center py-20 p-8 backdrop-blur-xl rounded-2xl ${
                    theme === 'light' ? 'bg-white border border-[#e2e8f0]' : 'bg-[#0A1A2F]/50 border border-[#14F4FF]/20'
                  }`}>
                    <p className={`text-lg ${theme === 'light' ? 'text-[#4a5568]' : 'text-gray-400'}`}>No articles found matching your criteria.</p>
                  </div>
                )}
              </div>

              <BlogSidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                onSearch={setSearchQuery}
                popularPosts={popularPosts}
                onPostClick={(slug) => onNavigate('article', slug)}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
