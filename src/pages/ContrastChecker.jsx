import React, { useState, useEffect } from 'react';
import { Check, X, AlertCircle, Eye } from 'lucide-react';
import AdSpace from '../components/AdSpace';
import SEO from '../components/SEO';



const ContrastChecker = ({ darkMode }) => {
  const [foreground, setForeground] = useState('#C25700');
  const [background, setBackground] = useState('#FFFFFF');
  const [contrastRatio, setContrastRatio] = useState(4.5);

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  // Calculate relative luminance
  const getLuminance = (hex) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  // Calculate contrast ratio
  const getContrastRatio = (fg, bg) => {
    const l1 = getLuminance(fg);
    const l2 = getLuminance(bg);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  };

  useEffect(() => {
    const ratio = getContrastRatio(foreground, background);
    setContrastRatio(ratio);
  }, [foreground, background]);

  // WCAG compliance levels
  const getCompliance = () => {
    return {
      normalAA: contrastRatio >= 4.5,
      normalAAA: contrastRatio >= 7,
      largeAA: contrastRatio >= 3,
      largeAAA: contrastRatio >= 4.5,
      graphicsAA: contrastRatio >= 3
    };
  };

  const compliance = getCompliance();

  const ComplianceIcon = ({ passed }) => (
    passed ? (
      <Check className="w-5 h-5 text-green-500" />
    ) : (
      <X className="w-5 h-5 text-red-500" />
    )
  );

  return (


    <>
    
     <SEO 
        title="Contrast Checker - Test Color Accessibility WCAG"
        description="Check if your text colors meet WCAG accessibility standards. Test contrast ratios between text and background colors for readable designs."
        keywords="contrast checker, wcag contrast, color contrast, accessibility checker, color accessibility, wcag compliance"
        url="https://www.colorkits.online/tools/contrast-checker"
      />
   


    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
            Check Color Contrast for Accessibility
        </h2>
        <p className={`text-md ${textSecondaryClass}`}>
          Make sure your text is readable for everyone. Test any color combination and see if it meets WCAG standards for accessible design.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Color Controls */}
        <div className="space-y-6">
          {/* Foreground Color */}
          <div className={`${cardClass} rounded-2xl border p-6 shadow-xl`}>
            <h3 className={`text-xl font-bold ${textClass} mb-4`}>Foreground (Text)</h3>
            <div className="flex gap-4 mb-4">
              <input
                type="color"
                value={foreground}
                onChange={(e) => setForeground(e.target.value.toUpperCase())}
                className="w-24 h-24 rounded-xl cursor-pointer border-2 border-gray-300"
              />
              <div className="flex-1">
                <label className={`block text-sm font-semibold ${textSecondaryClass} mb-2`}>
                  Color Hex
                </label>
                <input
                  type="text"
                  value={foreground}
                  onChange={(e) => setForeground(e.target.value.toUpperCase())}
                  className={`w-full px-4 py-3 text-lg font-mono font-bold rounded-xl ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
                  } border-2 border-transparent focus:border-purple-500 transition-all`}
                  maxLength={7}
                />
              </div>
            </div>
            <div className="flex gap-2">
              {['#000000', '#333333', '#666666', '#C25700', '#0000FF'].map(color => (
                <button
                  key={color}
                  onClick={() => setForeground(color)}
                  className="w-12 h-12 rounded-lg border-2 border-white shadow hover:scale-110 transition-all"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Background Color */}
          <div className={`${cardClass} rounded-2xl border p-6 shadow-xl`}>
            <h3 className={`text-xl font-bold ${textClass} mb-4`}>Background</h3>
            <div className="flex gap-4 mb-4">
              <input
                type="color"
                value={background}
                onChange={(e) => setBackground(e.target.value.toUpperCase())}
                className="w-24 h-24 rounded-xl cursor-pointer border-2 border-gray-300"
              />
              <div className="flex-1">
                <label className={`block text-sm font-semibold ${textSecondaryClass} mb-2`}>
                  Color Hex
                </label>
                <input
                  type="text"
                  value={background}
                  onChange={(e) => setBackground(e.target.value.toUpperCase())}
                  className={`w-full px-4 py-3 text-lg font-mono font-bold rounded-xl ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
                  } border-2 border-transparent focus:border-purple-500 transition-all`}
                  maxLength={7}
                />
              </div>
            </div>
            <div className="flex gap-2">
              {['#FFFFFF', '#F0F0F0', '#CCCCCC', '#FFE5D9', '#E3F2FD'].map(color => (
                <button
                  key={color}
                  onClick={() => setBackground(color)}
                  className="w-12 h-12 rounded-lg border-2 border-gray-300 shadow hover:scale-110 transition-all"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Swap Colors Button */}
          <button
            onClick={() => {
              const temp = foreground;
              setForeground(background);
              setBackground(temp);
            }}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            ⇅ Swap Colors
          </button>
        </div>

        {/* Right: Results */}
        <div className="space-y-6">
          {/* Contrast Ratio Display */}
          <div className={`${cardClass} rounded-2xl border p-8 shadow-xl text-center`}>
            <p className={`text-lg ${textSecondaryClass} mb-2`}>Contrast Ratio</p>
            <div className="text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {contrastRatio.toFixed(2)}
            </div>
            <p className={`text-sm ${textSecondaryClass}`}>: 1</p>
          </div>

          {/* WCAG Compliance */}
          <div className={`${cardClass} rounded-2xl border p-6 shadow-xl`}>
            <h3 className={`text-xl font-bold ${textClass} mb-4 flex items-center gap-2`}>
              <Eye className="w-6 h-6" />
              WCAG 2.1 Compliance
            </h3>

            <div className="space-y-4">
              {/* Normal Text AA */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-semibold ${textClass}`}>Normal Text (AA)</span>
                  <ComplianceIcon passed={compliance.normalAA} />
                </div>
                <p className={`text-sm ${textSecondaryClass}`}>
                  Minimum 4.5:1 - Body text, small text
                </p>
              </div>

              {/* Normal Text AAA */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-semibold ${textClass}`}>Normal Text (AAA)</span>
                  <ComplianceIcon passed={compliance.normalAAA} />
                </div>
                <p className={`text-sm ${textSecondaryClass}`}>
                  Minimum 7:1 - Enhanced accessibility
                </p>
              </div>

              {/* Large Text AA */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-semibold ${textClass}`}>Large Text (AA)</span>
                  <ComplianceIcon passed={compliance.largeAA} />
                </div>
                <p className={`text-sm ${textSecondaryClass}`}>
                  Minimum 3:1 - 18pt+ or 14pt+ bold
                </p>
              </div>

              {/* Large Text AAA */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-semibold ${textClass}`}>Large Text (AAA)</span>
                  <ComplianceIcon passed={compliance.largeAAA} />
                </div>
                <p className={`text-sm ${textSecondaryClass}`}>
                  Minimum 4.5:1 - Enhanced large text
                </p>
              </div>

              {/* Graphics */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-semibold ${textClass}`}>UI Components</span>
                  <ComplianceIcon passed={compliance.graphicsAA} />
                </div>
                <p className={`text-sm ${textSecondaryClass}`}>
                  Minimum 3:1 - Icons, buttons, focus indicators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
        <h3 className={`text-2xl font-bold ${textClass} mb-6`}>Preview</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Small Text Preview */}
          <div
            className="rounded-xl p-8 transition-all duration-300"
            style={{ backgroundColor: background, color: foreground }}
          >
            <h4 className="text-2xl font-bold mb-4">Heading Text</h4>
            <p className="text-base mb-4">
              This is normal body text (16px). It should have at least 4.5:1 contrast ratio for AA compliance.
            </p>
            <p className="text-sm">
              This is small text (14px). It also requires 4.5:1 for AA compliance.
            </p>
          </div>

          {/* Large Text Preview */}
          <div
            className="rounded-xl p-8 transition-all duration-300"
            style={{ backgroundColor: background, color: foreground }}
          >
            <h4 className="text-4xl font-bold mb-4">Large Heading</h4>
            <p className="text-xl mb-4">
              This is large text (20px+). It requires 3:1 contrast for AA compliance.
            </p>
            <button
              className="px-6 py-3 rounded-lg font-bold border-2 transition-all"
              style={{ 
                borderColor: foreground,
                backgroundColor: 'transparent',
                color: foreground
              }}
            >
              Button Example
            </button>
          </div>
        </div>
      </div>

{/* Adspace */}
         <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
            <AdSpace size="728x90" darkMode={darkMode} />
          </div>

      {/* Info Card */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-lg`}>
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className={`text-lg font-bold ${textClass} mb-2`}>About WCAG Standards</h4>
            <p className={`${textSecondaryClass}`}>
              WCAG (Web Content Accessibility Guidelines) defines contrast ratios to ensure text is readable for people with visual impairments. Level AA is the standard for most websites, while AAA provides enhanced accessibility.
            </p>
          </div>
        </div>
      </div>
    </div>

     </>
  );
};

export default ContrastChecker;
