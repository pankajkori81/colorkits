
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

const BlogPost = ({ darkMode }) => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className={`text-2xl font-bold ${textClass} mb-4`}>Post not found</h2>
        <Link to="/pages/blog" className="text-purple-500 hover:underline flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (


    <>
    
       <SEO 
        title={post.title}
        description={post.description}
        keywords={post.tags.join(', ')}
        url={`https://colorkits.vercel.app/pages/blog/${post.slug}`}
        type="article"
      />
    
  

    <div className="max-w-4xl mx-auto">
      <Link
        to="/pages/blog"
        className="flex items-center gap-2 text-purple-500 hover:text-purple-600 mb-6 font-semibold transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Blog
      </Link>

      <article className={`${cardClass} rounded-2xl border p-8 md:p-12 shadow-2xl`}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-bold">
              {post.category}
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                alert('Link copied to clipboard!');
              }}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
              title="Share this post"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          <h1 className={`text-3xl md:text-4xl font-bold ${textClass} mb-6 leading-tight`}>
            {post.title}
          </h1>

          <div className={`flex flex-wrap items-center gap-4 text-sm ${textSecondaryClass} mb-6`}>
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <strong>{post.author}</strong>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {post.readTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span
                key={tag}
                className={`px-3 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full text-sm ${textSecondaryClass}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content with Custom Styling - FIXED */}
        <div
          className={`blog-content-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`${textSecondaryClass} mb-4`}>Found this article helpful? Share it with others!</p>
          <div className="flex gap-3">
            <button
              onClick={() => {
                window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`, '_blank');
              }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Share on Twitter
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                alert('Link copied!');
              }}
              className={`px-6 py-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg hover:opacity-80 transition-opacity font-semibold`}
            >
              Copy Link
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <div className="mt-12">
        <h3 className={`text-2xl font-bold ${textClass} mb-6`}>📚 Continue Reading</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts
            .filter(p => p.id !== post.id)
            .slice(0, 2)
            .map(relatedPost => (
              <Link
                key={relatedPost.id}
                to={`/pages/blog/${relatedPost.slug}`}
                className={`${cardClass} rounded-xl border p-6 shadow hover:shadow-lg transition-all duration-300 block group`}
              >
                {relatedPost.image ? (
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-all"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <div 
                  className="h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-4 group-hover:scale-105 transition-all"
                  style={{ display: relatedPost.image ? 'none' : 'block' }}
                ></div>
                <h4 className={`font-bold ${textClass} mb-2 group-hover:text-purple-500 transition-colors`}>
                  {relatedPost.title}
                </h4>
                <p className={`text-sm ${textSecondaryClass} line-clamp-2`}>{relatedPost.description}</p>
              </Link>
            ))}
        </div>
      </div>

      {/* Custom CSS for Blog Content - CRITICAL */}
      <style>{`
        .blog-content-wrapper h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: ${darkMode ? '#ffffff' : '#111827'};
        }

        .blog-content-wrapper h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: ${darkMode ? '#ffffff' : '#111827'};
        }

        .blog-content-wrapper p {
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 1.25rem;
          color: ${darkMode ? '#d1d5db' : '#374151'};
        }

        .blog-content-wrapper ul,
        .blog-content-wrapper ol {
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-content-wrapper li {
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 0.75rem;
          color: ${darkMode ? '#d1d5db' : '#374151'};
        }

        .blog-content-wrapper ul li {
          list-style-type: disc;
        }

        .blog-content-wrapper code {
          background-color: ${darkMode ? '#374151' : '#f3f4f6'};
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: ${darkMode ? '#10b981' : '#059669'};
        }

        .blog-content-wrapper a {
          color: #8b5cf6;
          text-decoration: underline;
          transition: color 0.2s;
        }

        .blog-content-wrapper a:hover {
          color: #7c3aed;
        }

        .blog-content-wrapper img {
          width: 100%;
          border-radius: 0.75rem;
          margin: 1.5rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .blog-content-wrapper .color-example {
          background-color: ${darkMode ? '#1f2937' : '#f9fafb'};
          padding: 1.5rem;
          border-radius: 0.75rem;
          margin: 1.5rem 0;
        }

        .blog-content-wrapper .lead {
          font-size: 1.25rem;
          font-weight: 500;
          color: ${darkMode ? '#9ca3af' : '#6b7280'};
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
      </>
  );
};

export default BlogPost;