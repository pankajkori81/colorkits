

import React, { useState } from 'react';
import {
  Palette, Sun, Moon, Menu, X,
  Image as ImageIcon, Book, Settings, ChevronDown , Contact , PenTool  , LoaderPinwheel , NotebookPen  , FileEdit
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [convertOpen, setConvertOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Picker' , icon:<PenTool className='w-5 h-5' /> },

    { path: '/pages/palettes', label: 'Palettes' , icon: <Palette className="w-5 h-5" />  },
    { path: '/pages/gradients', label: 'Gradients' , icon:<LoaderPinwheel className='w-5 h-5'/> },
    { path: '/pages/image-color', label: 'Image', icon: <ImageIcon className="w-5 h-5" /> },
    { path: '/pages/library', label: 'Library', icon: <Book className="w-5 h-5" /> },
    {
      label: 'Convert',
      icon: <ChevronDown className="w-4 h-4" />,
      dropdown: [
        { path: '/convert/rgb-to-hex', label: 'RGB to Hex' },
        { path: '/convert/hex-to-rgb', label: 'Hex to RGB' },
      ],
    },
    {
      label: 'Tools',
      icon: <ChevronDown className="w-4 h-4" />,
      dropdown: [
        { path: '/tools/contrast-checker', label: 'Contrast Checker' },
        { path: '/tools/color-mixer', label: 'Color Mixer' },
      ],
    },
    { path: '/pages/blog', label: 'Blog', icon: <NotebookPen className="w-5 h-5" /> },

    { path: '/pages/contact', label: 'Contact' ,icon: <Contact className="w-5 h-5"/> },
    { path: '/pages/feedback', label: 'Feedback' ,icon: <FileEdit className="w-5 h-5"/> },

  ];

  const linkClasses = `px-4 py-2 rounded-lg text-xl flex items-center space-x-2 transition-all duration-300 ${
    darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
  }`;

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b transition-all duration-500`}>
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
     
 <Link to="/" className="flex items-center">
  <img 
    src="/images/ColorKits.png" 
    alt="ColorKits" 
    className="h-10 w-auto transform hover:scale-105 transition-all duration-300"
  />
    </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index} className="relative group">
                  <button
                    onClick={() =>
                      item.label === 'Convert'
                        ? setConvertOpen(!convertOpen)
                        : setToolsOpen(!toolsOpen)
                    }
                    className={linkClasses}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg ${
                      darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
                    } ${item.label === 'Convert' && convertOpen ? 'block' : item.label === 'Tools' && toolsOpen ? 'block' : 'hidden'}`}
                  >
                    {item.dropdown.map(sub => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.path} to={item.path} className={linkClasses}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              )
            )}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-500 ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-700'} hover:scale-110 hover:rotate-180`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index} className="space-y-1">
                  <span className={`block px-4 py-2 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.label}
                  </span>
                  {item.dropdown.map(sub => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-6 py-2 rounded-lg transition-all duration-300 ${
                        darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
