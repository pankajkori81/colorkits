
import { useEffect } from 'react';
import { AD_CONFIG } from '../config/ads';

const PopunderAd = () => {
  useEffect(() => {

   
    if (!AD_CONFIG.enabled || !AD_CONFIG.enablePopunder || !AD_CONFIG.popunderKey) {
      console.log('Popunder ads disabled or no key provided');
      return;
    }

    
    try {
      console.log('🚀 Loading Adsterra popunder ad...');

      const atOptions = {
        'key': AD_CONFIG.popunderKey,
        'format': 'iframe',
        'height': 60,
        'width': 468,
        'params': {}
      };

      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.text = `var atOptions = ${JSON.stringify(atOptions)};`;
      
  
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
 
      const key = AD_CONFIG.popunderKey;
      const path = `${key.substring(0, 2)}/${key.substring(2, 4)}/${key.substring(4, 6)}`;
      invokeScript.src = `//pl27959419.effectivegatecpm.com/${path}/${key}.js`;
      invokeScript.async = true;

 

      invokeScript.onload = () => {
        console.log('✅ Popunder ad loaded successfully');
      };
      

      invokeScript.onerror = () => {
        console.error('❌ Failed to load popunder ad');
      };

    
      document.head.appendChild(configScript);
      document.head.appendChild(invokeScript);

 
      return () => {
        if (configScript.parentNode) {
          configScript.parentNode.removeChild(configScript);
        }
        if (invokeScript.parentNode) {
          invokeScript.parentNode.removeChild(invokeScript);
        }
      };
      
    } catch (error) {
      console.error('❌ Error loading popunder ad:', error);
    }
  }, []); 


  return null;
};

export default PopunderAd;
