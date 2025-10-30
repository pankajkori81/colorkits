

// export const AD_CONFIG = {
//   enabled: false, // ← Change to true
  
//   bannerKey: 'paste_your_728x90_key',
//   squareKey: 'paste_your_300x250_key',
//   largeKey: 'paste_your_970x250_key',
  
//   showTopAd: true,
//   showBottomAd: true,
// };





export const AD_CONFIG = {
  enabled: false,
  bannerKey: 'paste_your_728x90_key',
  squareKey: 'paste_your_300x250_key',
  largeKey: 'paste_your_970x250_key',
  showTopAd: true,
  showBottomAd: true,
};

// ✅ ADD THIS FUNCTION
export const getAdKey = (size) => {
  if (!AD_CONFIG.enabled) return null;
  
  switch(size) {
    case '728x90':
      return AD_CONFIG.bannerKey;
    case '300x250':
      return AD_CONFIG.squareKey;
    case '970x250':
      return AD_CONFIG.largeKey;
    default:
      return null;
  }
};