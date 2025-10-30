
import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, Palette, Download, Plus, Trash2, Sparkles, Droplet, Grid3x3, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { hexToRgb, hexToHsl, hslToHex } from '../utils/colorUtils';
import AdSpace from '../components/AdSpace';
import SEO from '../components/SEO';
import { getAdKey } from '../config/ads';



const ColorPicker = ({ darkMode }) => {
  // ============ HERO SLIDER STATE ============
  const [currentSlide, setCurrentSlide] = useState(0);

  // Beautiful gradient backgrounds
  const gradientBackgrounds = [
    'linear-gradient(135deg,rgb(0, 205, 219) 0%,rgb(66, 0, 133) 100%)',
    'linear-gradient(135deg,rgb(168, 0, 187) 0%,rgb(255, 72, 96) 100%)',
    'linear-gradient(135deg,rgb(60, 164, 255) 0%,rgb(44, 58, 255) 100%)',
    'linear-gradient(135deg,rgb(107, 0, 247) 0%,rgb(218, 167, 0) 100%)',
    'linear-gradient(135deg,rgb(146, 0, 44) 0%,rgb(0, 186, 211) 100%)',
    'linear-gradient(135deg,rgb(48, 48, 48) 0%,rgb(221, 3, 50) 100%)'
  ];

  // ============ STATE ============
  const [currentColor, setCurrentColor] = useState('#B0FE76');
  const [colorFormat, setColorFormat] = useState('HEX');
  const [copied, setCopied] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [currentPalette, setCurrentPalette] = useState([]);
  const [hue, setHue] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(75);
  const canvasRef = useRef(null);

  // ============ DEFAULT DATA ============
  const defaultPalettes = [
    { name: 'Document Colors', colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DFE6E9'] },
    { name: 'Pastel Dream', colors: ['#FFB6C1', '#FFD700', '#98D8C8', '#B19CD9', '#FF6F61'] },
    { name: 'Ocean Breeze', colors: ['#006994', '#00A8CC', '#3DCDDF', '#7DDFF8', '#B8E6F0'] },
    { name: 'Sunset Vibes', colors: ['#FF6B35', '#F7931E', '#FDC830', '#F37335', '#C73E1D'] },
    { name: 'Forest Green', colors: ['#1B4D3E', '#2D6A4F', '#40916C', '#52B788', '#74C69D'] },
    { name: 'Royal Purple', colors: ['#240046', '#3C096C', '#5A189A', '#7209B7', '#9D4EDD'] },
  ];

  const defaultColors = [
    '#000000', '#3D3D3D', '#5C5C5C', '#7A7A7A', '#999999', '#B8B8B8', '#D6D6D6', '#FFFFFF',
    '#FF0000', '#FF5252', '#FF80AB', '#C48EFF', '#B388FF', '#8C9EFF', '#536DFE', '#3F51B5',
    '#0091EA', '#00B8D4', '#00BFA5', '#00C853', '#64DD17', '#AEEA00', '#FFD600', '#FFAB00',
    '#FF6D00', '#DD2C00'
  ];

  // ============ STYLING CLASSES ============
  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  // ============ HERO SLIDER EFFECT ============
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gradientBackgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [gradientBackgrounds.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gradientBackgrounds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gradientBackgrounds.length) % gradientBackgrounds.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToPalettes = () => {
    const palettesSection = document.getElementById('palettes-section');
    if (palettesSection) {
      palettesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ============ FIXED CANVAS EFFECT ============
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);
      
      canvas.width = width;
      canvas.height = height;

      const saturationGradient = ctx.createLinearGradient(0, 0, width, 0);
      saturationGradient.addColorStop(0, '#FFFFFF');
      saturationGradient.addColorStop(1, `hsl(${hue}, 100%, 50%)`);
      ctx.fillStyle = saturationGradient;
      ctx.fillRect(0, 0, width, height);

      const lightnessGradient = ctx.createLinearGradient(0, 0, 0, height);
      lightnessGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      lightnessGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      ctx.fillStyle = lightnessGradient;
      ctx.fillRect(0, 0, width, height);
    };

    draw();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(draw, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [hue]);

  // ============ UPDATE COLOR FROM HSL ============
  useEffect(() => {
    const hex = hslToHex(hue, saturation, lightness);
    setCurrentColor(hex);
  }, [hue, saturation, lightness]);

  // ============ HELPER FUNCTIONS ============
  const getColorValue = () => {
    const rgb = hexToRgb(currentColor);
    const hsl = hexToHsl(currentColor);
    
    switch(colorFormat) {
      case 'RGB':
        return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
      case 'HSL':
        return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
      default:
        return currentColor;
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addToPalette = () => {
    if (!currentPalette.includes(currentColor)) {
      setCurrentPalette([...currentPalette, currentColor]);
    }
  };

  const savePalette = () => {
    if (currentPalette.length > 0) {
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 1600);
      console.log('Saved palette:', currentPalette);
    }
  };

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(x, y, 1, 1).data;
    
    const hex = '#' + [imageData[0], imageData[1], imageData[2]]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase();
    
    setCurrentColor(hex);
    updateHSLFromColor(hex);
  };

  const updateHSLFromColor = (color) => {
    const hsl = hexToHsl(color);
    setHue(hsl.h);
    setSaturation(hsl.s);
    setLightness(hsl.l);
  };

  const handleColorClick = (color) => {
    setCurrentColor(color);
    updateHSLFromColor(color);
  };

  // ============ RENDER ============
  return (

    <>
    
      
        <SEO 
        title="Color Picker - Pick Any Color, Get Instant Codes"
        description="Professional color picker tool with HEX, RGB, and HSL codes. Pick colors visually with sliders and get instant codes. Perfect for web designers and developers."
        keywords="color picker, pick color, hex color picker, rgb color picker, hsl color, color selector, visual color picker"
        url="https://www.colorkits.online/"
      />
      

 

    <div className="space-y-6">
      {/* ============ HERO SECTION ============ */}
      <div className="relative w-full h-[660px] md:h-[660px] overflow-hidden rounded-3xl shadow-2xl mb-8">
        {/* Animated Gradient Backgrounds */}
        <div className="absolute inset-0">
          {gradientBackgrounds.map((gradient, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ background: gradient }}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl">
        

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Pick, Create & Copy
              <br />
              <span className="text-yellow-300">
                Perfect Colors Instantly
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-md md:text-md text-white/90 mb-8 leading-relaxed max-w-2xl animate-slide-up-delay">
              Your ultimate color companion for designers and developers. Pick colors visually, 
              get instant HEX, RGB & HSL codes, create beautiful palettes, and copy them with 
              a single click. No more guessing color codes!
            </p>

            {/* CTA Button */}
            <div className="animate-slide-up-delay-2">
              <button 
                onClick={scrollToPalettes}
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Palette className="w-5 h-5" />
                View Palettes
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 animate-fade-in-delay">
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-white/80 text-sm">Colors Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/80 text-sm">Preset Palettes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-white/80 text-sm">Format Options</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3 h-5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {gradientBackgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 sm:w-12 h-2 sm:h-3 bg-white'
                  : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
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
      
      
              {/* Banner - Mobile/Tablet */}
      
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
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column - Color Picker */}
        <div className={`${cardClass} rounded-2xl border p-6 shadow-xl transform hover:scale-[1.01] transition-all duration-500`}>
          <h2 className={`text-2xl font-bold ${textClass} mb-4 flex items-center`}>
            <Droplet className="w-6 h-6 mr-2 animate-pulse" />
            Color Picker
          </h2>
          
          <div className="space-y-4">
            <div 
              className="w-full h-48 rounded-xl shadow-lg cursor-pointer border-4 border-white transition-all duration-300 hover:shadow-2xl"
              style={{ backgroundColor: currentColor }}
              onClick={() => {
                const tempInput = document.createElement('input');
                tempInput.type = 'color';
                tempInput.value = currentColor;
                tempInput.addEventListener('change', (e) => {
                  handleColorClick(e.target.value.toUpperCase());
                });
                tempInput.click();
              }}
            />
            
            <div className="relative">
              <canvas
                ref={canvasRef}
                onClick={handleCanvasClick}
                className="w-full h-48 rounded-xl cursor-crosshair shadow-lg border-2 border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
                style={{ display: 'block' }}
              />
            </div>

            <div className="space-y-3">
              <div>
                <label className={`block text-sm font-medium ${textSecondaryClass} mb-2`}>
                  Hue: {hue}°
                </label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={hue}
                  onChange={(e) => setHue(parseInt(e.target.value))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer transition-all duration-300"
                  style={{
                    background: 'linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))'
                  }}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${textSecondaryClass} mb-2`}>
                  Saturation: {saturation}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={saturation}
                  onChange={(e) => setSaturation(parseInt(e.target.value))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer transition-all duration-300"
                  style={{
                    background: `linear-gradient(to right, hsl(${hue}, 0%, 50%), hsl(${hue}, 100%, 50%))`
                  }}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${textSecondaryClass} mb-2`}>
                  Lightness: {lightness}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={lightness}
                  onChange={(e) => setLightness(parseInt(e.target.value))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer transition-all duration-300"
                  style={{
                    background: `linear-gradient(to right, hsl(${hue}, ${saturation}%, 0%), hsl(${hue}, ${saturation}%, 50%), hsl(${hue}, ${saturation}%, 100%))`
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className={`${cardClass} rounded-2xl border p-6 shadow-xl transition-all duration-500`}>
            <h3 className={`text-xl font-bold ${textClass} mb-4`}>Color Values</h3>
            
            <div className="flex gap-2 mb-4">
              {['HEX', 'RGB', 'HSL'].map(format => (
                <button
                  key={format}
                  onClick={() => setColorFormat(format)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    colorFormat === format
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                      : darkMode ? 'bg-gray-700 text-gray-300 hover:scale-105' : 'bg-gray-100 text-gray-600 hover:scale-105'
                  }`}
                >
                  {format}
                </button>
              ))}
            </div>

            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4 flex items-center justify-between transition-all duration-300`}>
              <code className={`text-lg font-mono font-bold ${textClass}`}>
                {getColorValue()}
              </code>
              <button
                onClick={() => copyToClipboard(getColorValue())}
                className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            <button
              onClick={addToPalette}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add to Palette
            </button>
          </div>

          <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
            <AdSpace size="728x90" darkMode={darkMode} />
          </div>
        </div>
      </div>

      {/* Default Solid Colors */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-xl transition-all duration-500`}>
        <h3 className={`text-xl font-bold ${textClass} mb-4 flex items-center`}>
          <Palette className="w-5 h-5 mr-2" />
          Default Solid Colors
        </h3>
        <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-13 gap-2">
          {defaultColors.map((color, idx) => (
            <div
              key={idx}
              className="h-12 rounded-lg shadow cursor-pointer transform hover:scale-110 transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Document Colors - WITH ID FOR SCROLL */}
      <div id="palettes-section" className={`${cardClass} rounded-2xl border p-6 shadow-xl transition-all duration-500`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold ${textClass} flex items-center`}>
            <Grid3x3 className="w-5 h-5 mr-2" />
            Document Colors
          </h3>
        </div>
        <div className="space-y-4">
          {defaultPalettes.map((palette, idx) => (
            <div key={idx} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4 transition-all duration-300 hover:shadow-lg`}>
              <h4 className={`font-semibold ${textClass} mb-3`}>{palette.name}</h4>
              <div className="grid grid-cols-6 gap-2">
                {palette.colors.map((color, colorIdx) => (
                  <div
                    key={colorIdx}
                    className="h-16 rounded-lg shadow cursor-pointer hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorClick(color)}
                    title={color}
                  />
                ))}
              </div>
            </div>
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
      
      
              {/* Banner - Mobile/Tablet */}
      
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

   

      {/* Current Palette */}
      {currentPalette.length > 0 && (
        <div className={`${cardClass} rounded-2xl border p-6 shadow-xl transition-all duration-500`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-xl font-bold ${textClass}`}>Current Palette</h3>
            <button
              onClick={savePalette}
              disabled={currentPalette.length === 0}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                currentPalette.length === 0 
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transform hover:scale-105'
              }`}
            >
              <Download className="w-4 h-4 mr-2" />
              {saveSuccess ? 'Saved!' : 'Save'}
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {currentPalette.map((color, idx) => (
              <div key={idx} className="group relative">
                <div
                  className="h-24 rounded-xl shadow-lg cursor-pointer transform group-hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                />
                <div className="mt-2 flex items-center justify-between">
                  <code className={`text-xs font-mono ${textSecondaryClass}`}>{color}</code>
                  <button
                    onClick={() => setCurrentPalette(currentPalette.filter((_, i) => i !== idx))}
                    className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>

       </>
  );
};

export default ColorPicker;
