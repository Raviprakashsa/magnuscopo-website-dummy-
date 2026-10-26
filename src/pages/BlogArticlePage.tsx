import { useState, useEffect } from 'react';
import { ChevronLeft, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import blogPosts from '../data/blog-posts.json';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  featured_image: string;
  created_at: string;
}

interface BlogArticlePageProps {
  slug: string;
  onNavigate: (page: string, articleSlug?: string) => void;
}

export default function BlogArticlePage({ slug, onNavigate }: BlogArticlePageProps) {
  const [article, setArticle] = useState<BlogPost | null>(null);
  const [recommendedPosts, setRecommendedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const found = (blogPosts as BlogPost[]).find((post) => post.slug === slug);
    if (found) {
      setArticle(found);
      const recommended = (blogPosts as BlogPost[])
        .filter((post) => post.slug !== slug)
        .slice(0, 3);
      setRecommendedPosts(recommended);
    } else {
      setArticle(null);
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A1A2F] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#14F4FF] border-r-transparent" />
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0A1A2F]">
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] rounded-lg font-semibold text-white hover:scale-105 transition-transform"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Blog
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1A2F]">
      <div className="sticky top-20 z-40 bg-[#0A1A2F]/90 backdrop-blur-xl border-b border-[#14F4FF]/20 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => onNavigate('blog')}
            className="group flex items-center gap-2 text-[#14F4FF] hover:text-white transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>
        </div>
      </div>

      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/20 via-transparent to-[#8A4FFF]/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14F4FF] rounded-full filter blur-[150px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-12 animate-fadeInUp">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#2D8CFF]/30 to-[#14F4FF]/30 border border-[#14F4FF]/30 rounded-full mb-6">
              <span className="text-sm font-semibold text-[#14F4FF] uppercase tracking-wide">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 pb-8 border-b border-[#14F4FF]/20">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#14F4FF]" />
                <span>{formatDate(article.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#14F4FF]" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-[#14F4FF]" />
                <span>{article.category}</span>
              </div>
            </div>
          </div>

          <div className="relative mb-16 group rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/30 to-[#8A4FFF]/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative border border-[#14F4FF]/30 rounded-2xl overflow-hidden">
              <img
                src={article.featured_image || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200'}
                alt={article.title}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-transparent" />
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-20 animate-fadeIn">
            <div className="prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[#14F4FF] prose-a:hover:text-white prose-a:transition-colors prose-strong:text-white prose-strong:font-semibold">
              {article.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </div>

          <div className="relative p-8 bg-[#0A1A2F]/50 backdrop-blur-xl border border-[#14F4FF]/20 rounded-2xl mb-20 animate-fadeIn">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D8CFF]/5 to-[#8A4FFF]/5 rounded-2xl" />

            <div className="relative flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D8CFF]/30 to-[#14F4FF]/30 flex items-center justify-center flex-shrink-0 border border-[#14F4FF]/30">
                <User className="w-6 h-6 text-[#14F4FF]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">About the Author</h3>
                <p className="text-gray-400">{article.author} is an expert contributor at Magnus Copo, sharing insights on EdTech, corporate training, and digital transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1A2F] to-[#0D2340]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">More From </span>
              <span className="bg-gradient-to-r from-[#2D8CFF] via-[#14F4FF] to-[#8A4FFF] bg-clip-text text-transparent">
                Magnus Copo Insights
              </span>
            </h2>
            <p className="text-gray-400">Continue reading our latest articles and industry perspectives</p>
          </div>

          {recommendedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recommendedPosts.map((post, index) => (
                <div key={post.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogCard
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt || ''}
                    category={post.category}
                    author={post.author}
                    date={formatDate(post.created_at)}
                    image={post.featured_image || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'}
                    slug={post.slug}
                    onRead={(articleSlug) => onNavigate('article', articleSlug)}
                  />
                </div>
              ))}
            </div>
          ) : null}

          <div className="text-center">
            <button
              onClick={() => onNavigate('blog')}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#14F4FF]/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore All Articles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#14F4FF] to-[#8A4FFF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
