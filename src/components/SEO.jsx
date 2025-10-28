import React from 'react';

import { Helmet } from 'react-helmet';


const SEO = ({ 
  title = 'ColorKits - Free Color Picker & Design Tools',
  description = 'Professional color tools for designers and developers. Pick colors, generate palettes, create gradients, convert formats, and check contrast. Free HEX, RGB, HSL color codes.',
  keywords = 'color picker, hex color, rgb to hex, color palette generator, gradient maker, contrast checker, color converter, color tools, web design, design tools',
  ogImage = '/images/og-image.png',
  url = 'https://www.colorkits.online/',
  type = 'website',
  author = 'Pankaj Kori'
}) => {
  
  const fullTitle = title.includes('colorkits') ? title : `${title} | colorkits`;
  const canonicalUrl = url.endsWith('/') ? url.slice(0, -1) : url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ColorKits" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@kori_pankajr" />
      <meta name="twitter:site" content="@colorkits" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="global" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#667eea" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="ColorKits" />

      {/* Verification (Add when you get codes) */}
      {/* <meta name="google-site-verification" content="YOUR_CODE_HERE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_CODE_HERE" /> */}

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "ColorKits",
          "applicationCategory": "DesignApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "creator": {
            "@type": "Person",
            "name": "Pankaj Kori"
          },
          "description": description,
          "url": canonicalUrl,
          "image": ogImage,
          "featureList": [
            "Color Picker",
            "Palette Generator",
            "Gradient Maker",
            "RGB to HEX Converter",
            "HEX to RGB Converter",
            "Contrast Checker",
            "Color Mixer",
            "Image Color Extractor",
            "Color Library"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
