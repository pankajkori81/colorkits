

export const AD_CONFIG = {
  enabled: true,
  bannerKey: '68c71093f62360cca2d96b5e1e625c5f',
  squareKey: 'd8bc8781db2d47ccfe88ae877a533906',

  popunderKey: '1d04b0f9232fe3fb51d2ded147093276',

    
  showTopAd: true,
  showBottomAd: true,
  enablePopunder: true,
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
