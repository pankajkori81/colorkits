import React, { useState, useEffect } from 'react';
import { Copy, Check, ArrowRight, RefreshCw } from 'lucide-react';
import AdSpace from '../components/AdSpace';
import SEO from '../components/SEO';
import { getAdKey } from '../config/ads';




const HexToRgb = ({ darkMode }) => {
  const [hexInput, setHexInput] = useState('#FF9620');
  const [rgb, setRgb] = useState({ r: 255, g: 150, b: 32 });
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  // Convert HEX to RGB
  const hexToRgb = (hex) => {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Handle 3-digit hex
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }
    
    // Validate hex
    if (!/^[0-9A-F]{6}$/i.test(hex)) {
      setError('Invalid HEX color. Use format: #RRGGBB or #RGB');
      return null;
    }
    
    setError('');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return { r, g, b };
  };

  // Calculate HSL
  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
        default: h = 0;
      }
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  useEffect(() => {
    const result = hexToRgb(hexInput);
    if (result) {
      setRgb(result);
    }
  }, [hexInput]);

  const handleConvert = () => {
    const result = hexToRgb(hexInput);
    if (result) {
      setRgb(result);
    }
  };

  const handleReset = () => {
    setHexInput('#FF9620');
    setError('');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const normalizedHex = hexInput.startsWith('#') ? hexInput : `#${hexInput}`;
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);


  return (
  
    <>
    

       <SEO 
        title="HEX to RGB Converter - Convert HEX Colors to RGB Values"
        description="Convert HEX color codes to RGB values instantly. Break down hex codes into red, green, and blue numbers. Get HSL and CMYK too."
        keywords="hex to rgb, convert hex to rgb, hex rgb converter, color converter, hexadecimal to rgb"
        url="https://www.colorkits.online/convert/hex-to-rgb"
      />
    
    



  <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
          
         Convert Hex Colors into RGB Numbers   
        </h1>
        <p className={`text-md ${textSecondaryClass}`}>
        Turn that cryptic hex code into understandable red, green, and blue values. Plus get HSL and CMYK formats at the same time.
        </p>
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

      {/* Color Preview Bar */}
      <div className="flex items-center gap-4">
        <div
          className="flex-1 h-24 rounded-2xl shadow-xl border-4 border-white transition-all duration-300"
          style={{ backgroundColor: error ? '#cccccc' : normalizedHex }}
        />
        <div className={`${cardClass} rounded-2xl border p-6 shadow-lg min-w-[200px]`}>
          <p className={`text-sm ${textSecondaryClass} mb-2`}>Current Color</p>
          <div className="flex items-center gap-3">
            <code className={`text-2xl font-bold font-mono ${textClass}`}>
              {error ? '---' : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
            </code>
            <button
              onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}
              disabled={error}
              className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all disabled:opacity-50"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Converter Card */}
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
        <h2 className={`text-2xl font-bold ${textClass} mb-6 flex items-center gap-2`}>
          Convert Hex to RGB
        </h2>

        <div className="space-y-6">
          {/* HEX Input */}
          <div>
            <label className={`block text-sm font-semibold ${textClass} mb-3`}>
              Hex Color Code
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                value={hexInput}
                onChange={(e) => setHexInput(e.target.value.toUpperCase())}
                className={`flex-1 px-6 py-4 text-2xl font-bold font-mono rounded-xl ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
                } border-2 ${error ? 'border-red-500' : 'border-transparent'} focus:border-purple-500 transition-all`}
                placeholder="#FF9620"
                maxLength={7}
              />
              <input
                type="color"
                value={error ? '#cccccc' : normalizedHex}
                onChange={(e) => setHexInput(e.target.value.toUpperCase())}
                className="w-24 h-16 rounded-xl cursor-pointer border-2 border-gray-300"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2 font-semibold">⚠️ {error}</p>
            )}
            <p className={`text-sm ${textSecondaryClass} mt-2`}>
              Enter a 6-digit hex code (e.g., #FF9620 or FF9620) or 3-digit shorthand (e.g., #F96)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleConvert}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Convert
            </button>
            <button
              onClick={handleReset}
              className={`px-8 py-4 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-xl font-bold transition-all duration-300 flex items-center gap-2`}
            >
              <RefreshCw className="w-5 h-5" />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Result Card */}
      {!error && (
        <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
          <h3 className={`text-2xl font-bold ${textClass} mb-6`}>Color Values</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* HEX */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6`}>
              <p className={`text-sm font-semibold ${textSecondaryClass} mb-2`}>HEX</p>
              <div className="flex items-center justify-between">
                <code className={`text-xl font-bold font-mono ${textClass}`}>
                  {normalizedHex}
                </code>
                <button
                  onClick={() => copyToClipboard(normalizedHex)}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* RGB */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6`}>
              <p className={`text-sm font-semibold ${textSecondaryClass} mb-2`}>RGB</p>
              <div className="flex items-center justify-between">
                <code className={`text-xl font-bold font-mono ${textClass}`}>
                  rgb({rgb.r}, {rgb.g}, {rgb.b})
                </code>
                <button
                  onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* HSL */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6`}>
              <p className={`text-sm font-semibold ${textSecondaryClass} mb-2`}>HSL</p>
              <div className="flex items-center justify-between">
                <code className={`text-xl font-bold font-mono ${textClass}`}>
                  hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
                </code>
                <button
                  onClick={() => copyToClipboard(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Individual RGB Values */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6`}>
              <p className={`text-sm font-semibold ${textSecondaryClass} mb-3`}>RGB Components</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={textSecondaryClass}>Red:</span>
                  <code className={`font-bold ${textClass}`}>{rgb.r}</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className={textSecondaryClass}>Green:</span>
                  <code className={`font-bold ${textClass}`}>{rgb.g}</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className={textSecondaryClass}>Blue:</span>
                  <code className={`font-bold ${textClass}`}>{rgb.b}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

     
    {/* Bottom banner - desktop */}
        <div className="hidden lg:block">
          <div className={`${cardClass} rounded-2xl border p-4 shadow-xl`}>
            <AdSpace 
              size="728x90" 
              darkMode={darkMode}
              adKey={getAdKey('728x90')}

            />
          </div>
        </div>


        {/* Bottom Banner - Mobile/Tablet */}

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

      {/* Info Card */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-lg`}>
        <h4 className={`text-lg font-bold ${textClass} mb-3`}>💡 How to Use</h4>
        <ul className={`space-y-2 ${textSecondaryClass}`}>
          <li>• Enter a HEX color code with or without the # symbol</li>
          <li>• Supports 6-digit (#RRGGBB) and 3-digit (#RGB) formats</li>
          <li>• Use the color picker for visual selection</li>
          <li>• Copy any format with one click</li>
        </ul>
      </div>
    </div>

        </>
  );
};

export default HexToRgb;
