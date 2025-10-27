
import React, { useState, useRef } from 'react';
import { Upload, Image, Download, Copy, Check, X, Palette , Layers } from 'lucide-react';
import AdSpace from '../components/AdSpace';
import SEO from '../components/SEO';


// Utility function: Convert RGB to HEX
const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => Math.max(0, Math.min(255, x)).toString(16).padStart(2, '0')).join('').toUpperCase();
};

const ImageColorExtractor = ({ darkMode }) => {
  const [image, setImage] = useState(null);
  const [palette, setPalette] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-50';

  // Extract colors from image
  const extractColors = (img) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const colorMap = {};
    const step = 5;

    for (let i = 0; i < data.length; i += 4 * step) {
      const r = Math.round(data[i] / 10) * 10;
      const g = Math.round(data[i + 1] / 10) * 10;
      const b = Math.round(data[i + 2] / 10) * 10;
      if ((r + g + b) > 700 || (r + g + b) < 50) continue;
      const hex = rgbToHex(r, g, b);
      colorMap[hex] = (colorMap[hex] || 0) + 1;
    }

    const sortedColors = Object.entries(colorMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([color]) => color);
    setPalette(sortedColors);
    setLoading(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, GIF, WebP)');
      return;
    }
    setLoading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        setImage(event.target.result);
        extractColors(img);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadPalette = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    palette.forEach((color, index) => {
      ctx.fillStyle = color;
      ctx.fillRect((800 / palette.length) * index, 0, 800 / palette.length, 200);
    });
    const link = document.createElement('a');
    link.download = 'color-palette.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const clearImage = () => {
    setImage(null);
    setPalette([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        handleImageUpload({ target: { files: [file] } });
      } else {
        alert('Please upload a valid image file');
      }
    }
  };

  return (


    <>
    

      <SEO 
        title="Image Color Extractor - Extract Colors from Photos"
        description="Upload any image and extract dominant colors with HEX codes. Perfect for creating color palettes from photos and matching brand colors."
        keywords="color extractor, image color picker, extract colors from image, photo color palette, color from image"
        url="https://colorkits.vercel.app/pages/image-color"
      />
    


    <div className={`min-h-screen ${bgClass} transition-colors duration-300 p-4 md:p-8`}>
      <div className="max-w-6xl mx-auto space-y-8">
        <canvas ref={canvasRef} className="hidden" />
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

        <div className="text-center">
          <h1 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>🎨 Extract Color Palettes from Photos</h1>
          <p className={`text-md ${textSecondaryClass}`}>Upload an image, get a complete color palette with codes. Perfect when you want your design to match a specific photo or brand asset.</p>
        </div>

        {!image ? (
          <div className={`${cardClass} rounded-2xl border-2 border-dashed p-12 shadow-xl text-center cursor-pointer hover:border-purple-500 transition-all duration-300`}
            onClick={() => fileInputRef.current?.click()} onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className="mb-6">
              <Upload className={`w-24 h-24 mx-auto ${textSecondaryClass} mb-4`} />
              <h3 className={`text-2xl font-bold ${textClass} mb-2`}>Upload an Image</h3>
              <p className={`${textSecondaryClass}`}>Click to browse or drag and drop your image here</p>
              <p className={`text-sm ${textSecondaryClass} mt-2`}>Supports JPG, PNG, GIF, WebP</p>
            </div>
            <button onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              Choose Image
            </button>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className={`${cardClass} rounded-2xl border p-6 shadow-xl`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${textClass} flex items-center gap-2`}>
                    <Image className="w-6 h-6" />Uploaded Image
                  </h3>
                  <button onClick={clearImage} className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-all" title="Remove image">
                    <X className="w-5 h-5 text-red-500" />
                  </button>
                </div>
                <img src={image} alt="Uploaded" className="w-full h-auto rounded-xl shadow-lg" />
              </div>

              <div className={`${cardClass} rounded-2xl border p-6 shadow-xl`}>
                <h3 className={`text-xl font-bold ${textClass} mb-4 flex items-center gap-2`}>
                  <Palette className="w-6 h-6" />Extracted Colors
                </h3>
                {loading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"></div>
                  </div>
                ) : palette.length > 0 ? (
                  <>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {palette.map((color, idx) => (
                        <div key={idx} className="group">
                          <div className="w-full h-32 rounded-xl shadow-lg cursor-pointer transform group-hover:scale-105 transition-all duration-300"
                            style={{ backgroundColor: color }} onClick={() => copyToClipboard(color)} title="Click to copy" />
                          <div className="mt-2 flex items-center justify-between">
                            <code className={`text-sm font-mono font-bold ${textClass}`}>{color}</code>
                            <button onClick={() => copyToClipboard(color)} className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => copyToClipboard(palette.join(', '))}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        {copied ? 'Copied!' : 'Copy All'}
                      </button>
                      <button onClick={downloadPalette}
                        className={`flex-1 px-6 py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2`}>
                        <Download className="w-5 h-5" />Download
                      </button>
                    </div>
                  </>
                ) : (
                  <div className={`text-center py-12 ${textSecondaryClass}`}>
                    <Palette className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>No colors extracted yet</p>
                  </div>
                )}
              </div>
            </div>

            {palette.length > 0 && (
              <div className={`${cardClass} rounded-2xl border p-6 shadow-xl`}>
                <h3 className={`text-xl font-bold ${textClass} mb-4`}>Gradient Preview</h3>
                <div className="w-full h-48 rounded-xl shadow-lg" style={{ background: `linear-gradient(90deg, ${palette.join(', ')})` }} />
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-semibold ${textSecondaryClass}`}>CSS Gradient:</span>
                    <button onClick={() => copyToClipboard(`background: linear-gradient(90deg, ${palette.join(', ')});`)}
                      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <code className={`block p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-sm overflow-x-auto`}>
                    background: linear-gradient(90deg, {palette.join(', ')});
                  </code>
                </div>
              </div>
            )}

            <div className="text-center">
              <button onClick={() => fileInputRef.current?.click()}
                className={`px-8 py-4 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-xl font-bold transition-all duration-300 flex items-center gap-2 mx-auto`}>
                <Upload className="w-5 h-5" />Upload Another Image
              </button>
            </div>
          </>
        )}



       {/* AdSpace */}
     <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
            <AdSpace size="728x90" darkMode={darkMode} />
          </div>


        <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
          <h3 className={`text-2xl font-bold ${textClass} mb-6`}>Examples & Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className={`text-lg font-semibold ${textClass} mb-3`}>Best Results From:</h4>
              <ul className={`space-y-2 ${textSecondaryClass}`}>
                <li>✅ High-quality images with vibrant colors</li>
                <li>✅ Photos with distinct color areas</li>
                <li>✅ Artwork and illustrations</li>
                <li>✅ Product photography</li>
                <li>✅ Nature and landscape photos</li>
              </ul>
            </div>
            <div>
              <h4 className={`text-lg font-semibold ${textClass} mb-3`}>Tips for Better Palettes:</h4>
              <ul className={`space-y-2 ${textSecondaryClass}`}>
                <li>💡 Use images with 4-8 distinct colors</li>
                <li>💡 Avoid overly complex or noisy images</li>
                <li>💡 Crop images to focus on specific areas</li>
                <li>💡 Try different lighting and angles</li>
                <li>💡 Experiment with various image types</li>
              </ul>
            </div>
          </div>
        </div>


     <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
            <AdSpace size="728x90" darkMode={darkMode} />
          </div>
        <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
          <h3 className={`text-2xl font-bold ${textClass} mb-6`}>Try Sample Palettes</h3>
          <p className={`${textSecondaryClass} mb-6`}>Don't have an image? Try these sample palettes for inspiration:</p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: 'Sunset', colors: ['#FF6B35', '#F7931E', '#FDC830', '#F37335', '#C73E1D'] },
              { name: 'Ocean', colors: ['#006994', '#00A8CC', '#3DCDDF', '#7DDFF8', '#B8E6F0'] },
              { name: 'Forest', colors: ['#1B4D3E', '#2D6A4F', '#40916C', '#52B788', '#74C69D'] },
              { name: 'Autumn', colors: ['#8D5524', '#C68642', '#E0AC69', '#F1C27D', '#FFDBAC'] },
            ].map((sample, idx) => (
              <button key={idx} onClick={() => { setPalette(sample.colors); setImage('sample'); }}
                className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}>
                <div className="h-24 rounded-lg mb-3 overflow-hidden flex">
                  {sample.colors.map((color, i) => (
                    <div key={i} style={{ backgroundColor: color }} className="flex-1" />
                  ))}
                </div>
                <p className={`font-semibold ${textClass}`}>{sample.name}</p>
              </button>
            ))}
          </div>
        </div>

        <div className={`${cardClass} rounded-2xl border p-6 shadow-lg`}>
          <h4 className={`text-lg font-bold ${textClass} mb-3`}>🔍 How It Works</h4>
          <div className={`space-y-2 ${textSecondaryClass}`}>
            <p>1. Upload an image from your device or drag and drop</p>
            <p>2. Our algorithm analyzes the image and identifies dominant colors</p>
            <p>3. Colors are extracted and sorted by frequency</p>
            <p>4. A beautiful palette is generated with up to 8 colors</p>
            <p>5. Click any color to copy its HEX code</p>
            <p>6. Download the palette or copy all colors at once</p>
          </div>
        </div>
      </div>
    </div>

        </>
  );
};

export default ImageColorExtractor;