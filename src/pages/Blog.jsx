

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, User, Tag, Search } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import AdSpace from '../components/AdSpace';
import { getAdKey } from "../config/ads";



const Blog = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (


    <>
    

         <SEO 
        title="ColorKits Blog - Color Guides and Design Tips"
        description="Learn about color codes, conversion tips, and design tricks. Practical guides for working with colors in design and development."
        keywords="color blog, design tips, color theory, web design blog, color guides, design tutorials"
        url="https://www.colorkits.online/pages/blog"
        type="blog"
      />

    
  


    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl text-white">
        <h1 className="text-4xl font-bold mb-4">ColorKits Blog</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-4">
          Short articles about working with colors in design and code. Everything I learned from building hundreds of websites.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${textSecondaryClass}`} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200'} focus:ring-2 focus:ring-purple-500 transition-all`}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>



      
               {/*  banner - desktop */}
        <div className="hidden lg:block">
          <div className={`${cardClass} rounded-2xl border p-4 shadow-xl`}>
            <AdSpace 
              size="728x90" 
              darkMode={darkMode}
              adKey={getAdKey('728x90')}

            />
          </div>
        </div>


        {/*  Banner - Mobile/Tablet */}

         <div className="block lg:hidden">
          <div className={`${cardClass} rounded-2xl border p-4 shadow-xl`}>
            <AdSpace 
              size="300x250" 
              type="medium"
              darkMode={darkMode}
              adKey={getAdKey('300x250')}
            
            />
          </div>
        </div>


      {/* Featured Posts */}
      {selectedCategory === 'All' && searchTerm === '' && featuredPosts.length > 0 && (
        <div>
          <h2 className={`text-3xl font-bold ${textClass} mb-6`}>⭐ Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map(post => (
              <Link
                key={post.id}
                to={`/pages/blog/${post.slug}`}
                className={`${cardClass} rounded-2xl border p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] block group`}
              >
                {/* Blog Image - FIXED */}
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-56 object-cover rounded-xl mb-4 group-hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <div 
                  className="h-56 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-xl mb-4 group-hover:scale-105 transition-all duration-300"
                  style={{ display: post.image ? 'none' : 'block' }}
                ></div>

                <div className="mb-3">
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-bold">
                    {post.category}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold ${textClass} mb-3 group-hover:text-purple-500 transition-colors`}>
                  {post.title}
                </h3>
                <p className={`${textSecondaryClass} mb-4 line-clamp-2`}>{post.description}</p>

                <div className={`flex items-center gap-4 text-sm ${textSecondaryClass}`}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}


      
               {/* Top banner - desktop */}
        <div className="hidden lg:block">
          <div className={`${cardClass} rounded-2xl border p-4 shadow-xl`}>
            <AdSpace 
              size="728x90" 
              darkMode={darkMode}
              adKey={getAdKey('728x90')}

            />
          </div>
        </div>


        {/* Top Banner - Mobile/Tablet */}

         <div className="block lg:hidden">
          <div className={`${cardClass} rounded-2xl border p-4 shadow-xl`}>
            <AdSpace 
              size="300x250" 
              type="medium"
              darkMode={darkMode}
              adKey={getAdKey('300x250')}
            
            />
          </div>
        </div>


      {/* All Posts */}
      <div>
        <h2 className={`text-3xl font-bold ${textClass} mb-6`}>
          {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
        </h2>
        
        {filteredPosts.length === 0 ? (
          <div className={`text-center py-12 ${textSecondaryClass}`}>
            <p className="text-xl">No articles found matching your search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                to={`/pages/blog/${post.slug}`}
                className={`${cardClass} rounded-xl border p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] block group`}
              >
             
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-all"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <div 
                  className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-4 group-hover:scale-105 transition-all"
                  style={{ display: post.image ? 'none' : 'block' }}
                ></div>

                <div className="mb-3">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>

                <h3 className={`text-xl font-bold ${textClass} mb-3 group-hover:text-purple-500 transition-colors`}>
                  {post.title}
                </h3>
                <p className={`${textSecondaryClass} mb-4 line-clamp-2`}>{post.description}</p>

                <div className={`flex items-center gap-4 text-sm ${textSecondaryClass} mb-3`}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className={`px-2 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded text-xs ${textSecondaryClass}`}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
      </>
  );
};

export default Blog;
