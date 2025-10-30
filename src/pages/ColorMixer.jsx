import React, { useState, useEffect } from 'react';
import { Plus, Copy, Check, RefreshCw } from 'lucide-react';
import AdSpace from '../components/AdSpace';
import SEO from '../components/SEO';
import { getAdKey } from '../config/ads';



const ColorMixer = ({ darkMode }) => {
  const [color1, setColor1] = useState('#FF0000');
  const [color2, setColor2] = useState('#0000FF');
  const [mixRatio, setMixRatio] = useState(50);
  const [mixedColor, setMixedColor] = useState('#800080');
  const [copied, setCopied] = useState(false);

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  // Mix two colors based on ratio
  const mixColors = (c1, c2, ratio) => {
    const hex1 = c1.replace('#', '');
    const hex2 = c2.replace('#', '');

    const r1 = parseInt(hex1.substring(0, 2), 16);
    const g1 = parseInt(hex1.substring(2, 4), 16);
    const b1 = parseInt(hex1.substring(4, 6), 16);

    const r2 = parseInt(hex2.substring(0, 2), 16);
    const g2 = parseInt(hex2.substring(2, 4), 16);
    const b2 = parseInt(hex2.substring(4, 6), 16);

    const weight1 = ratio / 100;
    const weight2 = 1 - weight1;

    const r = Math.round(r1 * weight2 + r2 * weight1);
    const g = Math.round(g1 * weight2 + g2 * weight1);
    const b = Math.round(b1 * weight2 + b2 * weight1);

    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
  };

  useEffect(() => {
    const mixed = mixColors(color1, color2, mixRatio);
    setMixedColor(mixed);
  }, [color1, color2, mixRatio]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateGradientSteps = () => {
    const steps = [];
    for (let i = 0; i <= 100; i += 20) {
      steps.push(mixColors(color1, color2, i));
    }
    return steps;
  };

  const gradientSteps = generateGradientSteps();

  return (


    <>
    
    
         <SEO 
        title="Color Mixer - Blend Two Colors Together"
        description="Mix any two colors and create custom shades. Adjust the blend ratio and get the resulting color code. Perfect for finding that exact shade."
        keywords="color mixer, blend colors, mix colors, color blender, combine colors, color mixing tool"
        url="https://www.colorkits.online/tools/color-mixer"
      />

 

 


    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
          Create Custom Shades by Mixing
        </h1>
        <p className={`text-md ${textSecondaryClass}`}>
          Take two colors, blend them together, and generate something completely new. Adjust the mix ratio until it's exactly what you want.
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

      {/* Visual Mixer */}
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Color 1 */}
          <div className="text-center">
            <div
              className="w-full h-48 rounded-2xl shadow-xl border-4 border-white mb-4 transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: color1 }}
            />
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value.toUpperCase())}
              className="w-full h-16 rounded-xl cursor-pointer border-2 border-gray-300 mb-3"
            />
            <input
              type="text"
              value={color1}
              onChange={(e) => setColor1(e.target.value.toUpperCase())}
              className={`w-full px-4 py-3 text-center font-mono font-bold rounded-xl ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
              } border-2 border-transparent focus:border-purple-500 transition-all`}
              maxLength={7}
            />
          </div>

          {/* Mixed Result */}
          <div className="text-center">
            <Plus className={`w-12 h-12 mx-auto mb-4 ${textSecondaryClass}`} />
            <div
              className="w-full h-48 rounded-2xl shadow-2xl border-4 border-white mb-4 transition-all duration-300 hover:scale-110 relative overflow-hidden"
              style={{ backgroundColor: mixedColor }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="text-white text-2xl font-bold drop-shadow-lg">Mixed</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={mixedColor}
                readOnly
                className={`flex-1 px-4 py-3 text-center font-mono font-bold rounded-xl ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
                } border-2 border-purple-500`}
              />
              <button
                onClick={() => copyToClipboard(mixedColor)}
                className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all"
              >
                {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Color 2 */}
          <div className="text-center">
            <div
              className="w-full h-48 rounded-2xl shadow-xl border-4 border-white mb-4 transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: color2 }}
            />
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value.toUpperCase())}
              className="w-full h-16 rounded-xl cursor-pointer border-2 border-gray-300 mb-3"
            />
            <input
              type="text"
              value={color2}
              onChange={(e) => setColor2(e.target.value.toUpperCase())}
              className={`w-full px-4 py-3 text-center font-mono font-bold rounded-xl ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
              } border-2 border-transparent focus:border-purple-500 transition-all`}
              maxLength={7}
            />
          </div>
        </div>
      </div>

      {/* Mix Ratio Slider */}
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold ${textClass}`}>Mix Ratio</h3>
          <span className={`text-3xl font-bold ${textClass}`}>{mixRatio}%</span>
        </div>
        
        <div className="mb-6">
          <input
            type="range"
            min="0"
            max="100"
            value={mixRatio}
            onChange={(e) => setMixRatio(parseInt(e.target.value))}
            className="w-full h-4 rounded-lg appearance-none cursor-pointer transition-all"
            style={{
              background: `linear-gradient(to right, ${color1}, ${mixedColor}, ${color2})`
            }}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-lg mb-2" style={{ backgroundColor: color1 }}></div>
            <p className={`text-sm font-semibold ${textSecondaryClass}`}>{100 - mixRatio}%</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-lg mb-2" style={{ backgroundColor: color2 }}></div>
            <p className={`text-sm font-semibold ${textSecondaryClass}`}>{mixRatio}%</p>
          </div>
        </div>

        <button
          onClick={() => setMixRatio(50)}
          className={`w-full mt-6 px-6 py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-xl font-bold transition-all flex items-center justify-center gap-2`}
        >
          <RefreshCw className="w-5 h-5" />
          Reset to 50/50
        </button>
      </div>

      {/* Gradient Steps */}
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
        <h3 className={`text-2xl font-bold ${textClass} mb-6`}>Gradient Steps</h3>
        <div className="grid grid-cols-6 gap-4">
          {gradientSteps.map((color, index) => (
            <div key={index} className="text-center">
              <div
                className="w-full h-32 rounded-xl shadow-lg cursor-pointer hover:scale-110 transition-all duration-300"
                style={{ backgroundColor: color }}
                onClick={() => copyToClipboard(color)}
                title="Click to copy"
              />
              <p className={`text-xs font-mono mt-2 ${textSecondaryClass}`}>{color}</p>
              <p className={`text-xs ${textSecondaryClass}`}>{index * 20}%</p>
            </div>
          ))}
        </div>
        <p className={`text-sm ${textSecondaryClass} mt-4 text-center`}>
          Click any color to copy to clipboard
        </p>
      </div>

      {/* Preset Mixes */}
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
        <h3 className={`text-2xl font-bold ${textClass} mb-6`}>Popular Color Combinations</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Fire', c1: '#FF0000', c2: '#FFA500' },
            { name: 'Ocean', c1: '#0000FF', c2: '#00FFFF' },
            { name: 'Sunset', c1: '#FF1493', c2: '#FFD700' },
            { name: 'Forest', c1: '#228B22', c2: '#006400' },
            { name: 'Purple Dream', c1: '#9370DB', c2: '#FF69B4' },
            { name: 'Mint', c1: '#00FF7F', c2: '#AFEEEE' },
          ].map((preset, index) => (
            <button
              key={index}
              onClick={() => {
                setColor1(preset.c1);
                setColor2(preset.c2);
                setMixRatio(50);
              }}
              className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
            >
              <div className="flex gap-2 mb-3">
                <div className="flex-1 h-16 rounded-lg" style={{ backgroundColor: preset.c1 }}></div>
                <div className="flex-1 h-16 rounded-lg" style={{ backgroundColor: preset.c2 }}></div>
              </div>
              <p className={`font-semibold ${textClass}`}>{preset.name}</p>
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

      {/* Info */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-lg`}>
        <h4 className={`text-lg font-bold ${textClass} mb-3`}>💡 How to Use</h4>
        <ul className={`space-y-2 ${textSecondaryClass}`}>
          <li>• Select two colors using the color pickers or enter HEX codes</li>
          <li>• Adjust the mix ratio slider to blend colors</li>
          <li>• View gradient steps to see the transition</li>
          <li>• Click on any color in the gradient to copy it</li>
          <li>• Try preset combinations for inspiration</li>
        </ul>
      </div>
    </div>


       </>
  );
};

export default ColorMixer;
