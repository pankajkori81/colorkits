

import React, { useState } from 'react';
import { Layers, Plus, Trash2, Copy, Check, Eye } from 'lucide-react';
import AdSpace from '../components/AdSpace';
import SEO from '../components/SEO';


const Gradients = ({ darkMode }) => {

  const [gradientColors, setGradientColors] = useState(['#B0FE76', '#81E979']);
  const [gradientAngle, setGradientAngle] = useState(90);
  const [copiedGradient, setCopiedGradient] = useState(false);


  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  const copyGradient = () => {
    const css = `background: linear-gradient(${gradientAngle}deg, ${gradientColors.join(', ')});`;
    navigator.clipboard.writeText(css);
    setCopiedGradient(true);
    setTimeout(() => setCopiedGradient(false), 2000);
  };

  const addColor = () => {
    setGradientColors([...gradientColors, '#000000']);
  };

  const removeColor = () => {
    if (gradientColors.length > 2) {
      setGradientColors(gradientColors.slice(0, -1));
    }
  };

  const updateColor = (index, newColor) => {
    const newColors = [...gradientColors];
    newColors[index] = newColor.toUpperCase();
    setGradientColors(newColors);
  };

  // ============ RENDER ============
  return (

    
    <>
    
     <SEO 
        title="Gradient Maker - Create Smooth CSS Gradients"
        description="Design beautiful gradients and get instant CSS code. Pick colors, adjust angles, and copy ready-to-use gradient code for your designs."
        keywords="gradient maker, css gradient, gradient generator, linear gradient, color gradient, gradient tool"
        url="https://www.colorkits.online/pages/gradients"
      />
    
 
    <div className="space-y-6">
            <div className="text-center">
  <h2 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
    Gradient Builder for Modern Designs
  </h2>
  
  <p className={`text-md ${textSecondaryClass}`}>
   Mix colors, set the direction, preview it live, then grab the CSS. Simple as that.

  </p>
</div>
      {/* Gradient Maker Card */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-xl transition-all duration-500`}>
        <h2 className={`text-2xl font-bold ${textClass} mb-6 flex items-center`}>
          <Layers className="w-6 h-6 mr-2" />
          Gradient Maker
        </h2>

        {/* Gradient Preview */}
        <div
          className="w-full h-64 rounded-2xl shadow-xl mb-6 border-4 border-white transition-all duration-500 hover:shadow-2xl"
          style={{
            background: `linear-gradient(${gradientAngle}deg, ${gradientColors.join(', ')})`
          }}
        />

        {/* Controls */}
        <div className="space-y-4">
          {/* Angle Slider */}
          <div>
            <label className={`block text-sm font-medium ${textSecondaryClass} mb-2`}>
              Gradient Angle: {gradientAngle}°
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={gradientAngle}
              onChange={(e) => setGradientAngle(parseInt(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
            />
          </div>

          {/* Color Inputs */}
          <div className="grid sm:grid-cols-2 gap-4">
            {gradientColors.map((color, idx) => (
              <div key={idx}>
                <label className={`block text-sm font-medium ${textSecondaryClass} mb-2`}>
                  Color {idx + 1}
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => updateColor(idx, e.target.value)}
                    className="w-16 h-12 rounded-lg cursor-pointer border-2 border-gray-300 transition-all duration-300 hover:scale-110"
                  />
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => updateColor(idx, e.target.value)}
                    className={`flex-1 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} font-mono transition-all duration-300 focus:ring-2 focus:ring-purple-500 border-2 border-transparent`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Add/Remove Color Buttons */}
          <div className="flex gap-2">
            <button
              onClick={addColor}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02]"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Color
            </button>
            {gradientColors.length > 2 && (
              <button
                onClick={removeColor}
                className={`px-4 py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* CSS Code Display */}
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4 transition-all duration-300 border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${textSecondaryClass}`}>CSS Code:</span>
              <button
                onClick={copyGradient}
                className="p-1.5 rounded bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                {copiedGradient ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <code className={`text-sm ${textClass} break-all block`}>
              background: linear-gradient({gradientAngle}deg, {gradientColors.join(', ')});
            </code>
          </div>
        </div>
      </div>

      {/* Ad Space */}
      {/* <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-100 to-blue-100'} rounded-xl p-8`}>
          <Eye className="w-12 h-12 mx-auto mb-3 text-green-500 animate-pulse" />
          <p className={`${textSecondaryClass} font-medium`}>Advertisement Space</p>
          <p className={`${textSecondaryClass} text-sm`}>728 x 90</p>
        </div>
      </div> */}

  <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
            <AdSpace size="728x90" darkMode={darkMode} />
          </div>

    </div>

       </>
  );
};

export default Gradients;
