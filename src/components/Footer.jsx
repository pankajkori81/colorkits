import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin , Github } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t mt-16 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-around gap-8 mb-8">
          {/* Tools Section */}
          <div className="min-w-[200px]">
            <h4 className={`font-bold ${textClass} mb-4`}>Tools</h4>
            <ul className="space-y-2">
              <li><Link to="/" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300`}>Color Picker</Link></li>
              <li><Link to="/pages/palettes" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300`}>Palette Generator</Link></li>
              <li><Link to="/pages/gradients" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300`}>Gradient Maker</Link></li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div className="min-w-[200px]">
            <h4 className={`font-bold ${textClass} mb-4`}>Support</h4>
            <ul className="space-y-2">
              <li><Link to="/support/faq" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300`}>FAQ</Link></li>
              <li><Link to="/support/about" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300`}>About Us</Link></li>
              <li><Link to="/pages/contact" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300`}>Contact</Link></li>
              <li><Link to="/support/privacy" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300`}>Privacy Policy</Link></li>
              <li><Link to="/support/terms" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300`}>Terms of Service</Link></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="min-w-[200px]">
            <h4 className={`font-bold ${textClass} mb-4`}>Connect</h4>
            <p className={`${textSecondaryClass} mb-3`}>Follow us on social media</p>
            <div className="flex space-x-3">
             
              <a href="https://x.com/kori_pankajr?t=hqfN00u55IrLzl0_13Ib3g&s=08" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300 transform hover:scale-110`}>
                <Twitter className="w-5 h-5" />
              </a>
               <a href="#" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300 transform hover:scale-110`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/pankaj-kori8169/" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300 transform hover:scale-110`}>
                <Linkedin className="w-5 h-5" />
              </a>

                <a href="http://github.com/pankajkori81" className={`${textSecondaryClass} hover:text-purple-500 transition-all duration-300 transform hover:scale-110`}>
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-8`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className={`text-sm ${textSecondaryClass} text-center md:text-left`}>
              <p>
        &copy; {new Date().getFullYear()} ColorKits by <strong>Pankaj Kori</strong> — Free Online Tool for Designers & Developers
          </p>
             
            </div>
     
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
