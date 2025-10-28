
import React from 'react';
import { Info, Mail } from 'lucide-react';
import AdSpace from '../components/AdSpace';

import SEO from '../components/SEO';


const About = ({ darkMode }) => {
  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-50';
  

  return (


    <>
    
     
          <SEO 
        title="About ColorKits - Free Color Tools by Pankaj Kori"
        description="Learn about ColorKits and why we built these free color tools for designers and developers. Created by Pankaj Kori to make color work easier."
        keywords="about colorkits, pankaj kori, color tools, free design tools"
        url="https://www.colorkits.online/support/about"
        type="about"
      />
    


  
    <div className={`min-h-screen ${bgClass} p-4 md:p-8`}>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main About Section */}
        <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Info className="w-6 h-6 text-white" />
            </div>
            <h1 className={`text-4xl font-bold ${textClass}`}>About ColorKits</h1>
          </div>

          <div className={`space-y-4 ${textSecondaryClass} text-lg leading-relaxed`}>
            <p>
              Welcome to ColorKits! I'm Pankaj Kori, and I created this platform to solve a problem I faced countless times - finding the perfect color combinations for web projects and banner designs.
            </p>
            <p>
              Whether you're designing a website, creating banners, or working on any digital project, choosing the right colors can be challenging. That's why ColorKits exists - to make color selection simple, fast, and free for everyone.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
          <h2 className={`text-2xl font-bold ${textClass} mb-6`}>Meet the Founder</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Profile Image - Option 1: With Photo */}
            <div className="flex-shrink-0">
              <img 
                src="/images/profile/Pankaj_Profile_Img.png" 
                alt="Pankaj Kori - Founder of ColorKits"
                className="w-32 h-32 rounded-full object-cover border-2 border-blue-500 shadow-lg"
              />
            </div>
          

         
            
            {/* Founder Story */}
            <div className="flex-1">
              <h3 className={`text-xl font-bold ${textClass} mb-2`}>Pankaj Kori</h3>
              <p className={`${textSecondaryClass} mb-3 font-semibold`}>Founder & Creator</p>
              <p className={`${textSecondaryClass}`}>
                I started ColorKits in 2025 after spending hours searching for color palettes across multiple websites. As someone who regularly designs websites and banners, I realized there was a need for a single platform with all the color tools in one place. So I built ColorKits to help designers and developers work more efficiently.
              </p>
            </div>
          </div>
        </div>
             
                  <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
            <AdSpace size="728x90" darkMode={darkMode} />
          </div>


        {/* Why ColorKits Section */}
        <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
          <h2 className={`text-2xl font-bold ${textClass} mb-6`}>Why I Created ColorKits</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-purple-500 text-2xl font-bold">•</span>
              <div>
                <p className={`${textClass} font-semibold mb-1`}>For Website Designers</p>
                <p className={`${textSecondaryClass}`}>
                  I noticed designers spending too much time jumping between different tools for color picking, palette generation, and gradient creation.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-500 text-2xl font-bold">•</span>
              <div>
                <p className={`${textClass} font-semibold mb-1`}>For Banner Creators</p>
                <p className={`${textSecondaryClass}`}>
                  Finding complementary colors for graphics and banners shouldn't be complicated. ColorKits makes it quick and easy.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-500 text-2xl font-bold">•</span>
              <div>
                <p className={`${textClass} font-semibold mb-1`}>For Everyone</p>
                <p className={`${textSecondaryClass}`}>
                  Good design tools should be accessible to everyone, not just professionals. That's why ColorKits is completely free.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
          <h2 className={`text-2xl font-bold ${textClass} mb-4`}>Our Mission</h2>
          <p className={`${textSecondaryClass} text-lg leading-relaxed`}>
            My goal is simple: provide designers, developers, and creative professionals with powerful color tools that are easy to use and completely free. I believe great design should be accessible to everyone, and color is one of the most important elements of visual communication.
          </p>
        </div>

        {/* What We Offer */}
        <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
          <h2 className={`text-2xl font-bold ${textClass} mb-6`}>What ColorKits Offers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-all hover:scale-105`}>
              <h3 className={`font-semibold ${textClass} mb-2 text-lg`}>🎨 Color Picker</h3>
              <p className={`text-sm ${textSecondaryClass}`}>
                Advanced color picker with HSL controls for precise color selection
              </p>
            </div>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-all hover:scale-105`}>
              <h3 className={`font-semibold ${textClass} mb-2 text-lg`}>🎭 Palette Generator</h3>
              <p className={`text-sm ${textSecondaryClass}`}>
                Create instant color palettes for your next project
              </p>
            </div>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-all hover:scale-105`}>
              <h3 className={`font-semibold ${textClass} mb-2 text-lg`}>🌈 Gradient Maker</h3>
              <p className={`text-sm ${textSecondaryClass}`}>
                Design beautiful gradients with customizable angles
              </p>
            </div>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-all hover:scale-105`}>
              <h3 className={`font-semibold ${textClass} mb-2 text-lg`}>🖼️ Image Color Extractor</h3>
              <p className={`text-sm ${textSecondaryClass}`}>
                Extract color palettes from any image instantly
              </p>
            </div>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-all hover:scale-105`}>
              <h3 className={`font-semibold ${textClass} mb-2 text-lg`}>🔄 Color Converters</h3>
              <p className={`text-sm ${textSecondaryClass}`}>
                Convert between HEX, RGB, and HSL formats easily
              </p>
            </div>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-all hover:scale-105`}>
              <h3 className={`font-semibold ${textClass} mb-2 text-lg`}>📚 Color Library</h3>
              <p className={`text-sm ${textSecondaryClass}`}>
                Pre-made palettes ready for your projects
              </p>
            </div>
          </div>
        </div>


             <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
            <AdSpace size="728x90" darkMode={darkMode} />
          </div>

        {/* Contact Section */}
        <div className={`${cardClass} border-2 border-purple-500 rounded-2xl p-8 shadow-xl text-center`}>
          <h2 className={`text-2xl font-bold ${textClass} mb-3`}>Get in Touch</h2>
          <p className={`${textSecondaryClass} mb-6 text-lg`}>
            Have suggestions or feedback? I'd love to hear from you!
          </p>
          <a 
            href="mailto:koripankaj8169@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
        </div>
      </div>
    </div>
      </>
  );
};

export default About;
