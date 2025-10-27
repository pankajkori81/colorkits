import React, { useState } from 'react';
import { Search, Copy, Check, Palette, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';


const Library = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [copied, setCopied] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState(['Red']); // Red expanded by default

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  // Color Library Data
  const colorLibrary = [
    {
      category: 'Shades of Red',
      colors: [
        { name: 'Maroon', hex: '800000', rgb: '128, 0, 0', hsl: '0, 100%, 25%' },
        { name: 'Dark Red', hex: '8B0000', rgb: '139, 0, 0', hsl: '0, 100%, 27%' },
        { name: 'Red', hex: 'FF0000', rgb: '255, 0, 0', hsl: '0, 100%, 50%' },
        { name: 'Crimson', hex: 'DC143C', rgb: '220, 20, 60', hsl: '348, 83%, 47%' },
        { name: 'Fire Brick', hex: 'B22222', rgb: '178, 34, 34', hsl: '0, 68%, 42%' },
        { name: 'Indian Red', hex: 'CD5C5C', rgb: '205, 92, 92', hsl: '0, 53%, 58%' },
        { name: 'Light Coral', hex: 'F08080', rgb: '240, 128, 128', hsl: '0, 79%, 72%' },
        { name: 'Salmon', hex: 'FA8072', rgb: '250, 128, 114', hsl: '6, 93%, 71%' },
        { name: 'Light Salmon', hex: 'FFA07A', rgb: '255, 160, 122', hsl: '17, 100%, 74%' },
      ]
    },
    {
      category: 'Shades of Orange',
      colors: [
        { name: 'Dark Orange', hex: 'FF8C00', rgb: '255, 140, 0', hsl: '33, 100%, 50%' },
        { name: 'Orange', hex: 'FFA500', rgb: '255, 165, 0', hsl: '39, 100%, 50%' },
        { name: 'Orange Red', hex: 'FF4500', rgb: '255, 69, 0', hsl: '16, 100%, 50%' },
        { name: 'Tomato', hex: 'FF6347', rgb: '255, 99, 71', hsl: '9, 100%, 64%' },
        { name: 'Coral', hex: 'FF7F50', rgb: '255, 127, 80', hsl: '16, 100%, 66%' },
        { name: 'Chocolate', hex: 'D2691E', rgb: '210, 105, 30', hsl: '25, 75%, 47%' },
        { name: 'Sandy Brown', hex: 'F4A460', rgb: '244, 164, 96', hsl: '28, 87%, 67%' },
        { name: 'Peach Puff', hex: 'FFDAB9', rgb: '255, 218, 185', hsl: '28, 100%, 86%' },
      ]
    },
    {
      category: 'Shades of Yellow',
      colors: [
        { name: 'Dark Goldenrod', hex: 'B8860B', rgb: '184, 134, 11', hsl: '43, 89%, 38%' },
        { name: 'Goldenrod', hex: 'DAA520', rgb: '218, 165, 32', hsl: '43, 74%, 49%' },
        { name: 'Gold', hex: 'FFD700', rgb: '255, 215, 0', hsl: '51, 100%, 50%' },
        { name: 'Yellow', hex: 'FFFF00', rgb: '255, 255, 0', hsl: '60, 100%, 50%' },
        { name: 'Khaki', hex: 'F0E68C', rgb: '240, 230, 140', hsl: '54, 77%, 75%' },
        { name: 'Lemon Chiffon', hex: 'FFFACD', rgb: '255, 250, 205', hsl: '54, 100%, 90%' },
        { name: 'Light Yellow', hex: 'FFFFE0', rgb: '255, 255, 224', hsl: '60, 100%, 94%' },
        { name: 'Ivory', hex: 'FFFFF0', rgb: '255, 255, 240', hsl: '60, 100%, 97%' },
      ]
    },
    {
      category: 'Shades of Green',
      colors: [
        { name: 'Dark Green', hex: '006400', rgb: '0, 100, 0', hsl: '120, 100%, 20%' },
        { name: 'Green', hex: '008000', rgb: '0, 128, 0', hsl: '120, 100%, 25%' },
        { name: 'Forest Green', hex: '228B22', rgb: '34, 139, 34', hsl: '120, 61%, 34%' },
        { name: 'Lime Green', hex: '32CD32', rgb: '50, 205, 50', hsl: '120, 61%, 50%' },
        { name: 'Lime', hex: '00FF00', rgb: '0, 255, 0', hsl: '120, 100%, 50%' },
        { name: 'Spring Green', hex: '00FF7F', rgb: '0, 255, 127', hsl: '150, 100%, 50%' },
        { name: 'Medium Spring Green', hex: '00FA9A', rgb: '0, 250, 154', hsl: '157, 100%, 49%' },
        { name: 'Light Green', hex: '90EE90', rgb: '144, 238, 144', hsl: '120, 73%, 75%' },
        { name: 'Pale Green', hex: '98FB98', rgb: '152, 251, 152', hsl: '120, 93%, 79%' },
      ]
    },
    {
      category: 'Shades of Blue',
      colors: [
        { name: 'Navy', hex: '000080', rgb: '0, 0, 128', hsl: '240, 100%, 25%' },
        { name: 'Dark Blue', hex: '00008B', rgb: '0, 0, 139', hsl: '240, 100%, 27%' },
        { name: 'Medium Blue', hex: '0000CD', rgb: '0, 0, 205', hsl: '240, 100%, 40%' },
        { name: 'Blue', hex: '0000FF', rgb: '0, 0, 255', hsl: '240, 100%, 50%' },
        { name: 'Royal Blue', hex: '4169E1', rgb: '65, 105, 225', hsl: '225, 73%, 57%' },
        { name: 'Steel Blue', hex: '4682B4', rgb: '70, 130, 180', hsl: '207, 44%, 49%' },
        { name: 'Dodger Blue', hex: '1E90FF', rgb: '30, 144, 255', hsl: '210, 100%, 56%' },
        { name: 'Deep Sky Blue', hex: '00BFFF', rgb: '0, 191, 255', hsl: '195, 100%, 50%' },
        { name: 'Sky Blue', hex: '87CEEB', rgb: '135, 206, 235', hsl: '197, 71%, 73%' },
        { name: 'Light Sky Blue', hex: '87CEFA', rgb: '135, 206, 250', hsl: '203, 92%, 75%' },
        { name: 'Light Blue', hex: 'ADD8E6', rgb: '173, 216, 230', hsl: '195, 53%, 79%' },
        { name: 'Powder Blue', hex: 'B0E0E6', rgb: '176, 224, 230', hsl: '187, 52%, 80%' },
      ]
    },
    {
      category: 'Shades of Purple',
      colors: [
        { name: 'Indigo', hex: '4B0082', rgb: '75, 0, 130', hsl: '275, 100%, 25%' },
        { name: 'Dark Violet', hex: '9400D3', rgb: '148, 0, 211', hsl: '282, 100%, 41%' },
        { name: 'Dark Magenta', hex: '8B008B', rgb: '139, 0, 139', hsl: '300, 100%, 27%' },
        { name: 'Purple', hex: '800080', rgb: '128, 0, 128', hsl: '300, 100%, 25%' },
        { name: 'Medium Purple', hex: '9370DB', rgb: '147, 112, 219', hsl: '260, 60%, 65%' },
        { name: 'Blue Violet', hex: '8A2BE2', rgb: '138, 43, 226', hsl: '271, 76%, 53%' },
        { name: 'Magenta', hex: 'FF00FF', rgb: '255, 0, 255', hsl: '300, 100%, 50%' },
        { name: 'Orchid', hex: 'DA70D6', rgb: '218, 112, 214', hsl: '302, 59%, 65%' },
        { name: 'Violet', hex: 'EE82EE', rgb: '238, 130, 238', hsl: '300, 76%, 72%' },
        { name: 'Plum', hex: 'DDA0DD', rgb: '221, 160, 221', hsl: '300, 47%, 75%' },
        { name: 'Thistle', hex: 'D8BFD8', rgb: '216, 191, 216', hsl: '300, 24%, 80%' },
        { name: 'Lavender', hex: 'E6E6FA', rgb: '230, 230, 250', hsl: '240, 67%, 94%' },
      ]
    },
    {
      category: 'Shades of Pink',
      colors: [
        { name: 'Medium Violet Red', hex: 'C71585', rgb: '199, 21, 133', hsl: '322, 81%, 43%' },
        { name: 'Deep Pink', hex: 'FF1493', rgb: '255, 20, 147', hsl: '328, 100%, 54%' },
        { name: 'Hot Pink', hex: 'FF69B4', rgb: '255, 105, 180', hsl: '330, 100%, 71%' },
        { name: 'Pale Violet Red', hex: 'DB7093', rgb: '219, 112, 147', hsl: '340, 60%, 65%' },
        { name: 'Light Pink', hex: 'FFB6C1', rgb: '255, 182, 193', hsl: '351, 100%, 86%' },
        { name: 'Pink', hex: 'FFC0CB', rgb: '255, 192, 203', hsl: '350, 100%, 88%' },
        { name: 'Lavender Blush', hex: 'FFF0F5', rgb: '255, 240, 245', hsl: '340, 100%, 97%' },
      ]
    },
    {
      category: 'Shades of Brown',
      colors: [
        { name: 'Saddle Brown', hex: '8B4513', rgb: '139, 69, 19', hsl: '25, 76%, 31%' },
        { name: 'Sienna', hex: 'A0522D', rgb: '160, 82, 45', hsl: '19, 56%, 40%' },
        { name: 'Brown', hex: 'A52A2A', rgb: '165, 42, 42', hsl: '0, 59%, 41%' },
        { name: 'Peru', hex: 'CD853F', rgb: '205, 133, 63', hsl: '30, 59%, 53%' },
        { name: 'Tan', hex: 'D2B48C', rgb: '210, 180, 140', hsl: '34, 44%, 69%' },
        { name: 'Burlywood', hex: 'DEB887', rgb: '222, 184, 135', hsl: '34, 57%, 70%' },
        { name: 'Wheat', hex: 'F5DEB3', rgb: '245, 222, 179', hsl: '39, 77%, 83%' },
        { name: 'Bisque', hex: 'FFE4C4', rgb: '255, 228, 196', hsl: '33, 100%, 88%' },
      ]
    },
    {
      category: 'Shades of Gray',
      colors: [
        { name: 'Black', hex: '000000', rgb: '0, 0, 0', hsl: '0, 0%, 0%' },
        { name: 'Dim Gray', hex: '696969', rgb: '105, 105, 105', hsl: '0, 0%, 41%' },
        { name: 'Gray', hex: '808080', rgb: '128, 128, 128', hsl: '0, 0%, 50%' },
        { name: 'Dark Gray', hex: 'A9A9A9', rgb: '169, 169, 169', hsl: '0, 0%, 66%' },
        { name: 'Silver', hex: 'C0C0C0', rgb: '192, 192, 192', hsl: '0, 0%, 75%' },
        { name: 'Light Gray', hex: 'D3D3D3', rgb: '211, 211, 211', hsl: '0, 0%, 83%' },
        { name: 'Gainsboro', hex: 'DCDCDC', rgb: '220, 220, 220', hsl: '0, 0%, 86%' },
        { name: 'White Smoke', hex: 'F5F5F5', rgb: '245, 245, 245', hsl: '0, 0%, 96%' },
        { name: 'White', hex: 'FFFFFF', rgb: '255, 255, 255', hsl: '0, 0%, 100%' },
      ]
    },
    {
      category: 'Shades of Cyan',
      colors: [
        { name: 'Teal', hex: '008080', rgb: '0, 128, 128', hsl: '180, 100%, 25%' },
        { name: 'Dark Cyan', hex: '008B8B', rgb: '0, 139, 139', hsl: '180, 100%, 27%' },
        { name: 'Light Sea Green', hex: '20B2AA', rgb: '32, 178, 170', hsl: '177, 70%, 41%' },
        { name: 'Cyan', hex: '00FFFF', rgb: '0, 255, 255', hsl: '180, 100%, 50%' },
        { name: 'Aqua', hex: '00FFFF', rgb: '0, 255, 255', hsl: '180, 100%, 50%' },
        { name: 'Turquoise', hex: '40E0D0', rgb: '64, 224, 208', hsl: '174, 72%, 56%' },
        { name: 'Medium Turquoise', hex: '48D1CC', rgb: '72, 209, 204', hsl: '178, 60%, 55%' },
        { name: 'Pale Turquoise', hex: 'AFEEEE', rgb: '175, 238, 238', hsl: '180, 65%, 81%' },
        { name: 'Aquamarine', hex: '7FFFD4', rgb: '127, 255, 212', hsl: '160, 100%, 75%' },
        { name: 'Light Cyan', hex: 'E0FFFF', rgb: '224, 255, 255', hsl: '180, 100%, 94%' },
      ]
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(cat => cat !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  // Filter colors based on search
  const filteredLibrary = colorLibrary.map(cat => ({
    ...cat,
    colors: cat.colors.filter(color =>
      color.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.colors.length > 0);

  return (

    <>
    
      <SEO 
        title="Color Library - Browse 100+ Named Colors with Codes"
        description="Complete library of named colors with HEX, RGB, and HSL codes. Search and copy codes for red, blue, green, and 100+ other colors."
        keywords="color library, named colors, color names, color codes, hex codes list, rgb codes, color reference"
        url="https://colorkits.vercel.app/pages/library"
      />

    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        {/* <p className={`text-sm ${textSecondaryClass} mb-2`}>ColorKits</p> */}
        <h1 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
          Color Shades Library 
        </h1>
        <p className={`text-md ${textSecondaryClass} max-w-3xl mx-auto`}>
         Explore all the colors shades from crimson to turquoise, find any standard color name and get all the codes you need. No more searching random websites.
        </p>
      </div>

      {/* Current Color Display (if selected) */}
      {selectedColor && (
        <div className={`${cardClass} rounded-2xl border p-6 shadow-xl`}>
          <div className="flex items-center gap-6">
            <div
              className="w-24 h-24 rounded-xl shadow-lg cursor-pointer"
              style={{ backgroundColor: `#${selectedColor.hex}` }}
            />
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className={`text-xs ${textSecondaryClass} mb-1`}>Hex</p>
                <code className={`text-lg font-bold font-mono ${textClass}`}>#{selectedColor.hex}</code>
              </div>
              <div>
                <p className={`text-xs ${textSecondaryClass} mb-1`}>RGB</p>
                <code className={`text-sm font-mono ${textClass}`}>{selectedColor.rgb}</code>
              </div>
              <div>
                <p className={`text-xs ${textSecondaryClass} mb-1`}>HSL</p>
                <code className={`text-sm font-mono ${textClass}`}>{selectedColor.hsl}</code>
              </div>
              <div>
                <p className={`text-xs ${textSecondaryClass} mb-1`}>OKLCH</p>
                <code className={`text-sm font-mono ${textClass}`}>0.77, 0.17, 61</code>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
                style={{ backgroundColor: `#${selectedColor.hex}` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${textSecondaryClass}`} />
        <input
          type="text"
          placeholder="Search colors by name or hex code..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full pl-12 pr-4 py-4 text-lg rounded-xl border-2 ${
            darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200'
          } focus:ring-2 focus:ring-purple-500 transition-all`}
        />
      </div>

      {/* Color Categories */}
      <div className="space-y-6">
        {filteredLibrary.length > 0 ? (
          filteredLibrary.map((category, catIndex) => (
            <div key={catIndex} className={`${cardClass} rounded-2xl border shadow-xl overflow-hidden`}>
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.category)}
                className={`w-full p-6 flex items-center justify-between hover:bg-opacity-80 transition-all ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <h2 className={`text-2xl font-bold ${textClass}`}>{category.category}</h2>
                <div className="flex items-center gap-3">
                  <span className={`${textSecondaryClass} text-sm`}>
                    {category.colors.length} colors
                  </span>
                  {expandedCategories.includes(category.category) ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              {/* Color Table */}
              {expandedCategories.includes(category.category) && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <tr>
                        <th className={`px-6 py-3 text-left text-sm font-semibold ${textClass}`}>Color</th>
                        <th className={`px-6 py-3 text-left text-sm font-semibold ${textClass}`}>Name</th>
                        <th className={`px-6 py-3 text-left text-sm font-semibold ${textClass}`}>Hex code</th>
                        <th className={`px-6 py-3 text-left text-sm font-semibold ${textClass}`}>RGB code</th>
                        <th className={`px-6 py-3 text-left text-sm font-semibold ${textClass}`}>HSL code</th>
                        <th className={`px-6 py-3 text-left text-sm font-semibold ${textClass}`}>Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {category.colors.map((color, colorIndex) => (
                        <tr
                          key={colorIndex}
                          className={`hover:bg-opacity-50 transition-all cursor-pointer ${
                            darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                          }`}
                          onClick={() => setSelectedColor(color)}
                        >
                          <td className="px-6 py-4">
                            <div
                              className="w-12 h-12 rounded-lg shadow border-2 border-white"
                              style={{ backgroundColor: `#${color.hex}` }}
                            />
                          </td>
                          <td className={`px-6 py-4 font-medium ${textClass}`}>{color.name}</td>
                          <td className={`px-6 py-4 font-mono ${textClass}`}>{color.hex}</td>
                          <td className={`px-6 py-4 font-mono text-sm ${textSecondaryClass}`}>{color.rgb}</td>
                          <td className={`px-6 py-4 font-mono text-sm ${textSecondaryClass}`}>{color.hsl}</td>
                          <td className="px-6 py-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(`#${color.hex}`);
                              }}
                              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                              title="Copy HEX code"
                            >
                              {copied ? (
                                <Check className="w-5 h-5 text-green-500" />
                              ) : (
                                <Copy className="w-5 h-5" />
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className={`${cardClass} rounded-2xl border p-12 text-center`}>
            <Palette className={`w-16 h-16 mx-auto mb-4 ${textSecondaryClass} opacity-50`} />
            <p className={`text-lg ${textSecondaryClass}`}>
              No colors found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-lg`}>
        <h3 className={`text-lg font-bold ${textClass} mb-3`}>💡 How to Use</h3>
        <ul className={`space-y-2 ${textSecondaryClass}`}>
          <li>• Click on any color row to preview it at the top</li>
          <li>• Use the copy button to copy HEX codes instantly</li>
          <li>• Search by color name or hex code</li>
          <li>• Click category headers to expand/collapse color groups</li>
          <li>• All colors include HEX, RGB, and HSL formats</li>
        </ul>
      </div>
    </div>


    </>
  );
};

export default Library;