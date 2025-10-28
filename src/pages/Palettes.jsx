
import React, { useState } from 'react';
import { Grid3x3, Sparkles, Download, Trash2, Palette, Layers } from 'lucide-react';
import { generateRandomColor } from '../utils/colorUtils';
import SEO from '../components/SEO';
const Palettes = ({ darkMode }) => {
  // ============ STATE ============
  const [currentPalette, setCurrentPalette] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // ============ STYLING CLASSES ============
  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  // ============ FUNCTIONS ============
  const generateRandomPalette = () => {
    const colors = [];
    for (let i = 0; i < 5; i++) {
      colors.push(generateRandomColor());
    }
    setCurrentPalette(colors);
  };

  const savePalette = () => {
    if (currentPalette.length > 0) {
      setSavedPalettes(prev => [
        ...prev, 
        { 
          colors: [...currentPalette], 
          name: `Palette ${prev.length + 1}` 
        }
      ]);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 1600);
    }
  };

  const deleteSavedPalette = (index) => {
    setSavedPalettes(savedPalettes.filter((_, i) => i !== index));
  };

  const handleColorClick = (color) => {
    // Copy color to clipboard
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  // ============ RENDER ============
  return (

    <>
    
       <SEO 
        title="Palette Generator - Create Beautiful Color Schemes"
        description="Generate harmonious color palettes instantly. Create monochromatic, complementary, and analogous color schemes. Save and share your palettes."
        keywords="color palette generator, color scheme generator, color harmony, palette creator, color combinations"
        url="https://www.colorkits.online/pages/palettes"
      />
    
 
    <div className="space-y-6">
      <div className="text-center">
  <h2 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
    Color Palettes in One Click

  </h2>
  <p className={`text-md ${textSecondaryClass}`}>
   Whether you need monochromatic, complementary, or triadic colors, this tool generates them all. No design degree required.
  </p>
</div>
      {/* Palette Generator Card */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-xl transition-all duration-500`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className={`text-2xl font-bold ${textClass} flex items-center`}>
            <Grid3x3 className="w-6 h-6 mr-2" />
            Palette Generator
          </h2>
          <button
            onClick={generateRandomPalette}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Generate Random
          </button>
        </div>

        {currentPalette.length > 0 ? (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {currentPalette.map((color, idx) => (
                <div key={idx} className="group">
                  <div
                    className="h-32 rounded-xl shadow-lg cursor-pointer transform group-hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorClick(color)}
                  />
                  <div className="mt-2 text-center">
                    <code className={`text-sm font-mono ${textSecondaryClass}`}>{color}</code>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={savePalette}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center mx-auto"
            >
              <Download className="w-5 h-5 mr-2" />
              {saveSuccess ? 'Saved!' : 'Save Palette'}
            </button>
          </div>
        ) : (
          <div className={`text-center py-12 ${textSecondaryClass}`}>
            <Palette className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Click "Generate Random" to create a color palette</p>
          </div>
        )}
      </div>

      {/* Saved Palettes */}
      {savedPalettes.length > 0 && (
        <div className={`${cardClass} rounded-2xl border p-6 shadow-xl transition-all duration-500`}>
          <h3 className={`text-xl font-bold ${textClass} mb-4`}>Saved Palettes</h3>
          <div className="space-y-4">
            {savedPalettes.map((palette, idx) => (
              <div key={idx} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4 transition-all duration-300 hover:shadow-lg`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-semibold ${textClass}`}>{palette.name}</span>
                  <button
                    onClick={() => deleteSavedPalette(idx)}
                    className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {palette.colors.map((color, colorIdx) => (
                    <div
                      key={colorIdx}
                      className="h-16 rounded-lg shadow cursor-pointer hover:scale-105 transition-all duration-300"
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
      )}

      {/* Ad Space */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-100 to-purple-100'} rounded-xl p-12`}>
          <Layers className="w-16 h-16 mx-auto mb-4 text-blue-500 animate-pulse" />
          <p className={`${textSecondaryClass} font-medium text-lg`}>Advertisement Space</p>
          <p className={`${textSecondaryClass}`}>970 x 250</p>
        </div>
      </div>
    </div>

       </>
  );
};

export default Palettes;
