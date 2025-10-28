import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, Palette, FileQuestion } from 'lucide-react';
import SEO from '../components/SEO';


const NotFound = ({ darkMode }) => {
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  const popularPages = [
    { name: 'Color Picker', path: '/', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Palettes', path: '/pages/palettes', icon: Palette, color: 'from-blue-500 to-cyan-500' },
    { name: 'Gradients', path: '/pages/gradients', icon: Palette, color: 'from-green-500 to-teal-500' },
    { name: 'Contrast Checker', path: '/tools/contrast-checker', icon: Palette, color: 'from-orange-500 to-red-500' },
  ];

  return (

    <>
    
   <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Explore ColorKits color tools including color picker, palette generator, gradient maker, and more."
        keywords="404, page not found, ColorKits, color tools"
        url="https://colorkits.vercel.app/404"
        type="website"
      />

    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8 relative">
          <div className="text-9xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FileQuestion className="w-32 h-32 text-gray-300 dark:text-gray-700 opacity-20" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
          Oops! Page Not Found
        </h1>
        <p className={`text-lg ${textSecondaryClass} mb-8 max-w-md mx-auto`}>
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className={`flex items-center gap-2 px-6 py-3 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-200'
            } rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Popular Pages */}
        <div className="text-left">
          <h2 className={`text-xl font-bold ${textClass} mb-4 flex items-center justify-center gap-2`}>
            <Search className="w-5 h-5" />
            Try These Popular Pages
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {popularPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className={`flex items-center gap-3 p-4 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } rounded-xl border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${page.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <page.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold ${textClass}`}>{page.name}</h3>
                  <p className={`text-sm ${textSecondaryClass}`}>
                    {page.path}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className={`mt-12 p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`${textSecondaryClass} mb-3`}>
            Still can't find what you're looking for?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/support/faq"
              className="text-purple-500 hover:text-purple-600 font-semibold hover:underline"
            >
              Visit FAQ
            </Link>
            <span className={textSecondaryClass}>•</span>
            <Link
              to="/pages/contact"
              className="text-purple-500 hover:text-purple-600 font-semibold hover:underline"
            >
              Contact Support
            </Link>
            <span className={textSecondaryClass}>•</span>
            <Link
              to="/pages/blog"
              className="text-purple-500 hover:text-purple-600 font-semibold hover:underline"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </div>

        </>
  );
};

export default NotFound;