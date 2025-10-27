
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ColorPicker from './pages/ColorPicker';
import Palettes from './pages/Palettes';
import Gradients from './pages/Gradients';
import About from "./support/About"
import Privacy from "./support/Privacy"
import Terms from "./support/Terms";
import Contact from './pages/Contact';
import ContrastChecker from './pages/ContrastChecker';
import ColorMixer from './pages/ColorMixer';
import ImageColorExtractor from './pages/ImageColorExtractor';
import HexToRgb from './pages/HexToRgb';
import RgbToHex from './pages/RgbToHex';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Library from './pages/Library';
import Feedback from './pages/Feedback';
import CookieConsent from './components/CookieConsent';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50';

  return (
    <div className={`min-h-screen ${bgClass} transition-all duration-700 ease-in-out`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<ColorPicker darkMode={darkMode} />} />
           <Route path="/pages/palettes" element={<Palettes darkMode={darkMode} />} />
          <Route path="/pages/gradients" element={<Gradients darkMode={darkMode} />} />
          <Route path="/support/about" element={<About darkMode={darkMode} />} />
          <Route path="/support/privacy" element={<Privacy darkMode={darkMode} />} />
          <Route path="/support/terms" element={<Terms darkMode={darkMode} />} />
          <Route path="/pages/library" element={<Library darkMode={darkMode} />} />

          <Route path="/pages/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/pages/image-color" element={<ImageColorExtractor darkMode={darkMode} />} />
          <Route path="/pages/blog" element={<Blog darkMode={darkMode} />} />
          <Route path="/pages/blog/:slug" element={<BlogPost darkMode={darkMode} />} />
          <Route path="/pages/feedback" element={<Feedback darkMode={darkMode} />} />
          <Route path="/convert/hex-to-rgb" element={<HexToRgb darkMode={darkMode} />} />
          <Route path="/convert/rgb-to-hex" element={<RgbToHex darkMode={darkMode}/>} />

          <Route path="/tools/contrast-checker" element={<ContrastChecker darkMode={darkMode} />} />
          <Route path="/tools/color-mixer" element={<ColorMixer darkMode={darkMode} />} />

        </Routes>
      </main>
      
      <Footer darkMode={darkMode} />

      <CookieConsent/>
    </div>
  );
}

export default App;