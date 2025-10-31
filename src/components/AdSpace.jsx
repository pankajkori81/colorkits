

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Layers, Eye } from 'lucide-react';

const AdSpace = ({ size = "728x90", type = "default", darkMode = false, adKey = null }) => {
  const adRef = useRef(null);
  const [adLoaded, setAdLoaded] = useState(false);

  // Icons for placeholder
  const icons = {
    default: Sparkles,
    large: Layers,
    medium: Eye
  };

  const Icon = icons[type] || Sparkles;

  useEffect(() => {
    // Only load real ads if adKey is provided
    if (adKey && adRef.current) {
      try {
        // Clear previous content
        adRef.current.innerHTML = '';
        
        // Parse dimensions from size string (e.g., "728x90")
        const [width, height] = size.split('x').map(Number);
        
        // Create Adsterra configuration script
        const configScript = document.createElement('script');
        configScript.type = 'text/javascript';
        
        const atOptions = {
          'key': adKey,
          'format': 'iframe',
          'height': height,
          'width': width,
          'params': {}
        };
        
        configScript.text = `atOptions = ${JSON.stringify(atOptions)};`;
        
        // Create invoke script to load the actual ad
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
  
        invokeScript.src = `//stopperscared.com/${adKey}/invoke.js`;
        invokeScript.async = true;

        
        invokeScript.onload = () => {
          console.log('✅ Adsterra ad loaded successfully');
          setAdLoaded(true);
        };
        
        invokeScript.onerror = () => {
          console.error('❌ Failed to load Adsterra ad');
          setAdLoaded(false);
        };
        
        // Append both scripts to load the ad
        adRef.current.appendChild(configScript);
        adRef.current.appendChild(invokeScript);
        
      } catch (error) {
        console.error('Error loading Adsterra ad:', error);
      }
    }
  }, [adKey, size]);

  // Show placeholder if no ad key provided
  if (!adKey) {
    return (
      <div className={`${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-purple-100 to-pink-100'} rounded-xl p-8 text-center`}>
        <Icon className="w-12 h-12 mx-auto mb-3 text-purple-500 animate-pulse" />
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Advertisement Space</p>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{size}</p>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs mt-2`}>
          Add Adsterra key to display ads
        </p>
      </div>
    );
  }

  // Show real ad container when key is provided
  return (
    <div className="w-full flex items-center justify-center relative">
      <div 
        ref={adRef} 
        className="ad-container"
        style={{ 
          minHeight: size.split('x')[1] + 'px',
          minWidth: size.split('x')[0] + 'px' 
        }}
      />
      {/* Loading indicator while ad loads */}
      {!adLoaded && (
        <div className="absolute">
          <Icon className="w-8 h-8 text-gray-400 animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default AdSpace;
