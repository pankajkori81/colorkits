import React from 'react';
import { Sparkles, Layers, Eye } from 'lucide-react';

const AdSpace = ({ size = "728x90", type = "default", darkMode = false }) => {
  const icons = {
    default: Sparkles,
    large: Layers,
    medium: Eye
  };

  const Icon = icons[type] || Sparkles;

  return (
    <div className={`${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-purple-100 to-pink-100'} rounded-xl p-8 text-center`}>
      <Icon className="w-12 h-12 mx-auto mb-3 text-purple-500 animate-pulse" />
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Advertisement Space</p>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{size}</p>
    </div>
  );
};

export default AdSpace;