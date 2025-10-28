import React, { useState, useEffect } from 'react';
import { Copy, Check, ArrowRight, RefreshCw } from 'lucide-react';
import AdSpace from '../components/AdSpace';
import SEO from '../components/SEO';



const RgbToHex = ({ darkMode }) => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(150);
  const [blue, setBlue] = useState(32);
  const [hexResult, setHexResult] = useState('#FF9620');
  const [copied, setCopied] = useState(false);

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  // Convert RGB to HEX
  const rgbToHex = (r, g, b) => {
    const toHex = (num) => {
      const hex = Math.max(0, Math.min(255, num)).toString(16).padStart(2, '0');
      return hex.toUpperCase();
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
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
    const hex = rgbToHex(red, green, blue);
    setHexResult(hex);
  }, [red, green, blue]);

  const handleConvert = () => {
    const hex = rgbToHex(red, green, blue);
    setHexResult(hex);
  };

  const handleReset = () => {
    setRed(255);
    setGreen(150);
    setBlue(32);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hsl = rgbToHsl(red, green, blue);

  return (


    <>
    
        <SEO 
        title="RGB to HEX Converter - Convert RGB Colors to HEX Codes"
        description="Convert RGB values to HEX color codes instantly. Get HSL and CMYK values too. Free color format converter for designers."
        keywords="rgb to hex, convert rgb to hex, rgb hex converter, color converter, rgb to hexadecimal"
        url="https://www.colorkits.online/convert/rgb-to-hex"
      />



    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
          Convert RGB Numbers to Hex Codes
        </h1>
        <p className={`text-md ${textSecondaryClass}`}>
          Enter red, green, and blue values, and get the hex code plus every other format you might need.
        </p>
      </div>

        <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
            <AdSpace size="728x90" darkMode={darkMode} />
          </div>

      {/* Color Preview Bar */}
      <div className="flex items-center gap-4">
        <div
          className="flex-1 h-24 rounded-2xl shadow-xl border-4 border-white transition-all duration-300"
          style={{ backgroundColor: hexResult }}
        />
        <div className={`${cardClass} rounded-2xl border p-6 shadow-lg min-w-[200px]`}>
          <p className={`text-sm ${textSecondaryClass} mb-2`}>Current Color</p>
          <div className="flex items-center gap-3">
            <code className={`text-2xl font-bold font-mono ${textClass}`}>{hexResult}</code>
            <button
              onClick={() => copyToClipboard(hexResult)}
              className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Converter Card */}
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
        <h2 className={`text-2xl font-bold ${textClass} mb-6 flex items-center gap-2`}>
          Convert RGB to Hex
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Red Input */}
          <div>
            <label className={`block text-sm font-semibold ${textClass} mb-3`}>
              Red (R)
            </label>
            <input
              type="number"
              min="0"
              max="255"
              value={red}
              onChange={(e) => setRed(Math.max(0, Math.min(255, parseInt(e.target.value) || 0)))}
              className={`w-full px-4 py-4 text-xl font-bold rounded-xl ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
              } border-2 border-transparent focus:border-red-500 transition-all text-center`}
              placeholder="0-255"
            />
            <input
              type="range"
              min="0"
              max="255"
              value={red}
              onChange={(e) => setRed(parseInt(e.target.value))}
              className="w-full mt-3 h-3 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, rgb(0, ${green}, ${blue}), rgb(255, ${green}, ${blue}))`
              }}
            />
          </div>

          {/* Green Input */}
          <div>
            <label className={`block text-sm font-semibold ${textClass} mb-3`}>
              Green (G)
            </label>
            <input
              type="number"
              min="0"
              max="255"
              value={green}
              onChange={(e) => setGreen(Math.max(0, Math.min(255, parseInt(e.target.value) || 0)))}
              className={`w-full px-4 py-4 text-xl font-bold rounded-xl ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
              } border-2 border-transparent focus:border-green-500 transition-all text-center`}
              placeholder="0-255"
            />
            <input
              type="range"
              min="0"
              max="255"
              value={green}
              onChange={(e) => setGreen(parseInt(e.target.value))}
              className="w-full mt-3 h-3 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, rgb(${red}, 0, ${blue}), rgb(${red}, 255, ${blue}))`
              }}
            />
          </div>

          {/* Blue Input */}
          <div>
            <label className={`block text-sm font-semibold ${textClass} mb-3`}>
              Blue (B)
            </label>
            <input
              type="number"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => setBlue(Math.max(0, Math.min(255, parseInt(e.target.value) || 0)))}
              className={`w-full px-4 py-4 text-xl font-bold rounded-xl ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
              } border-2 border-transparent focus:border-blue-500 transition-all text-center`}
              placeholder="0-255"
            />
            <input
              type="range"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => setBlue(parseInt(e.target.value))}
              className="w-full mt-3 h-3 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, rgb(${red}, ${green}, 0), rgb(${red}, ${green}, 255))`
              }}
            />
          </div>
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

      {/* Result Card */}
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
        <h3 className={`text-2xl font-bold ${textClass} mb-6`}>Color Values</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* RGB */}
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6`}>
            <p className={`text-sm font-semibold ${textSecondaryClass} mb-2`}>RGB</p>
            <div className="flex items-center justify-between">
              <code className={`text-xl font-bold font-mono ${textClass}`}>
                rgb({red}, {green}, {blue})
              </code>
              <button
                onClick={() => copyToClipboard(`rgb(${red}, ${green}, ${blue})`)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* HEX */}
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6`}>
            <p className={`text-sm font-semibold ${textSecondaryClass} mb-2`}>HEX</p>
            <div className="flex items-center justify-between">
              <code className={`text-xl font-bold font-mono ${textClass}`}>
                {hexResult}
              </code>
              <button
                onClick={() => copyToClipboard(hexResult)}
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

          {/* CMYK (Approximate) */}
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6`}>
            <p className={`text-sm font-semibold ${textSecondaryClass} mb-2`}>CMYK</p>
            <div className="flex items-center justify-between">
              <code className={`text-xl font-bold font-mono ${textClass}`}>
                {Math.round((1 - red/255) * 100)}, {Math.round((1 - green/255) * 100)}, {Math.round((1 - blue/255) * 100)}, 0
              </code>
              <button
                onClick={() => copyToClipboard(`cmyk(${Math.round((1 - red/255) * 100)}, ${Math.round((1 - green/255) * 100)}, ${Math.round((1 - blue/255) * 100)}, 0)`)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

        <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
            <AdSpace size="728x90" darkMode={darkMode} />
          </div>

      {/* Info Card */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-lg`}>
        <h4 className={`text-lg font-bold ${textClass} mb-3`}>💡 How to Use</h4>
        <ul className={`space-y-2 ${textSecondaryClass}`}>
          <li>• Enter RGB values between 0-255 for each color channel</li>
          <li>• Use sliders for quick adjustments</li>
          <li>• Click "Convert" to see the HEX, HSL, and CMYK values</li>
          <li>• Copy any format with one click</li>
        </ul>
      </div>
    </div>

        </>
  );
};

export default RgbToHex;
