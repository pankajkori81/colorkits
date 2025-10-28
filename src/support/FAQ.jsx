import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdSpace from '../components/AdSpace';
import SEO from '../components/SEO';

const FAQ = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          q: "What is ColorKits?",
          a: "ColorKits is a free suite of professional color tools designed for designers and developers. It includes a color picker, palette generator, gradient maker, contrast checker, and image color extractor - all in one place."
        },
        {
          q: "Is ColorKits really free?",
          a: "Yes! ColorKits is completely free to use. All features are available without any signup, subscription, or hidden fees. We believe great design tools should be accessible to everyone."
        },
        {
          q: "Do I need to create an account?",
          a: "No account is required! You can use all ColorKits tools instantly without signing up. Your color palettes are saved locally in your browser."
        },
        {
          q: "Can I use ColorKits offline?",
          a: "ColorKits requires an internet connection to load initially, but once loaded, most features work offline. Your saved palettes are stored locally on your device."
        }
      ]
    },
    {
      category: "Color Picker",
      questions: [
        {
          q: "How do I use the color picker?",
          a: "Click on the color display area to open your browser's native color picker, or use the HSL sliders to adjust hue, saturation, and lightness. You can also click on the canvas area to select colors visually."
        },
        {
          q: "What color formats are supported?",
          a: "ColorKits supports HEX, RGB, and HSL formats. You can easily switch between formats using the format buttons and copy codes with one click."
        },
        {
          q: "How do I copy color codes?",
          a: "Click the copy button next to any color code, and it will be automatically copied to your clipboard. You'll see a confirmation checkmark when copied successfully."
        },
        {
          q: "Can I save my favorite colors?",
          a: "Yes! Click the 'Add to Palette' button to save colors to your current palette. Your palettes are automatically saved in your browser's local storage."
        }
      ]
    },
    {
      category: "Palette Generator",
      questions: [
        {
          q: "How does the palette generator work?",
          a: "Our palette generator creates harmonious color combinations using color theory principles. You can generate random palettes or create custom ones based on complementary, analogous, or triadic color schemes."
        },
        {
          q: "Can I customize generated palettes?",
          a: "Absolutely! You can click on any color in a generated palette to modify it, add new colors, remove colors, or shuffle the entire palette to get new combinations."
        },
        {
          q: "How do I export my palette?",
          a: "Click the 'Save' or 'Download' button on your palette. You can export palettes as CSS variables, JSON, or simply copy all color codes at once."
        },
        {
          q: "Are there preset palettes available?",
          a: "Yes! We provide 50+ professionally curated preset palettes organized by category (Pastel, Ocean, Sunset, etc.) that you can use as starting points."
        }
      ]
    },
    {
      category: "Gradient Maker",
      questions: [
        {
          q: "How do I create a gradient?",
          a: "Select two or more colors, choose your gradient direction (linear or radial), and adjust the angle. The gradient updates in real-time, and you can copy the CSS code with one click."
        },
        {
          q: "Can I add multiple color stops?",
          a: "Yes! Click 'Add Color' to add additional color stops to your gradient. You can have as many colors as you want and adjust each stop's position."
        },
        {
          q: "What gradient types are supported?",
          a: "We support linear gradients (with customizable angles) and radial gradients (circular). You can also choose different gradient directions like top-to-bottom or diagonal."
        },
        {
          q: "How do I copy the gradient code?",
          a: "Click the 'Copy CSS' button to copy the complete gradient code. The code is ready to paste directly into your CSS files or inline styles."
        }
      ]
    },
    {
      category: "Contrast Checker",
      questions: [
        {
          q: "What is color contrast and why does it matter?",
          a: "Color contrast is the difference between text color and background color. Good contrast ensures your content is readable for everyone, including people with visual impairments. It's also required for web accessibility compliance (WCAG)."
        },
        {
          q: "What do the AA and AAA ratings mean?",
          a: "AA and AAA are WCAG (Web Content Accessibility Guidelines) compliance levels. AA requires 4.5:1 contrast for normal text and 3:1 for large text. AAA requires 7:1 for normal text and 4.5:1 for large text. AA is the minimum recommended standard."
        },
        {
          q: "What contrast ratio should I aim for?",
          a: "Aim for at least 4.5:1 for normal text (AA standard). For maximum accessibility, target 7:1 (AAA standard). Large text (18px+ or 14px+ bold) only needs 3:1 for AA compliance."
        },
        {
          q: "Can I check contrast for my brand colors?",
          a: "Yes! Enter your brand colors as foreground and background to see if they meet accessibility standards. The tool will show you which text sizes work with your color combination."
        }
      ]
    },
    {
      category: "Image Color Extractor",
      questions: [
        {
          q: "How do I extract colors from an image?",
          a: "Click 'Upload Image' or drag and drop your image file. Our tool will automatically analyze the image and extract the dominant colors. You can then copy the color codes or save them to a palette."
        },
        {
          q: "What image formats are supported?",
          a: "We support JPG, PNG, GIF, and WebP formats. For best results, use high-resolution images with clear, distinct colors."
        },
        {
          q: "How many colors can I extract?",
          a: "Our tool extracts up to 8-10 dominant colors from your image. You can adjust the number of colors in the settings to get more or fewer results."
        },
        {
          q: "Is my uploaded image saved anywhere?",
          a: "No! All image processing happens in your browser. Your images are never uploaded to our servers or stored anywhere. Your privacy is protected."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          q: "Which browsers are supported?",
          a: "ColorKits works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. We recommend using the latest browser version for the best experience."
        },
        {
          q: "Is ColorKits mobile-friendly?",
          a: "Yes! ColorKits is fully responsive and optimized for mobile devices, tablets, and desktops. All features work seamlessly across different screen sizes."
        },
        {
          q: "Can I use ColorKits for commercial projects?",
          a: "Absolutely! You can use all colors, palettes, and gradients generated by ColorKits in any personal or commercial project without attribution."
        },
        {
          q: "Does ColorKits work with design tools like Figma?",
          a: "Yes! You can copy color codes from ColorKits and paste them directly into Figma, Adobe XD, Sketch, or any other design tool that accepts HEX, RGB, or HSL values."
        }
      ]
    },
    {
      category: "Account & Data",
      questions: [
        {
          q: "Where are my saved palettes stored?",
          a: "Your saved palettes are stored locally in your browser's localStorage. This means they're only accessible on the device and browser you used to create them."
        },
        {
          q: "Can I sync my palettes across devices?",
          a: "Currently, palettes are stored locally per device. We're working on adding cloud sync features in the future. For now, you can export palettes and import them on other devices."
        },
        {
          q: "What happens if I clear my browser data?",
          a: "If you clear your browser's cache and cookies, your saved palettes will be deleted. We recommend exporting important palettes before clearing browser data."
        },
        {
          q: "How can I backup my palettes?",
          a: "Click the 'Export' or 'Download' button on any palette to save it as a JSON file. You can import this file later to restore your palettes."
        }
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          q: "Why is the color picker not working?",
          a: "Make sure you're using a modern browser with JavaScript enabled. Try refreshing the page or clearing your browser cache. If the issue persists, please contact us."
        },
        {
          q: "The image extractor is not loading my image",
          a: "Ensure your image is in a supported format (JPG, PNG, GIF, WebP) and under 10MB. Try using a different image or converting it to a different format."
        },
        {
          q: "My saved palettes disappeared",
          a: "This can happen if you cleared your browser data or switched browsers. Unfortunately, locally stored data cannot be recovered. We recommend regularly exporting important palettes."
        },
        {
          q: "The tool is running slowly",
          a: "Try closing other browser tabs, clearing your cache, or using a different browser. Large images in the color extractor can also slow performance - try resizing them first."
        }
      ]
    }
  ];

  // Filter FAQs based on search
  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };


    // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category =>
      category.questions.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };

  return (

    <>
       <SEO 
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about ColorKits tools and features. Learn how to use color picker, palette generator, gradient maker, contrast checker, and more."
        keywords="ColorKits FAQ, color tools help, how to use color picker, palette generator guide, gradient maker tutorial, color questions, design tools help"
        url="https://www.colorkits.online/support/faq"
        type="website"
      />


      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>



    <div className="space-y-8">
      {/* Hero Section */}
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl text-center`}>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className={`text-4xl font-bold ${textClass} mb-4`}>
          Frequently Asked Questions
        </h1>
        <p className={`${textSecondaryClass} text-lg max-w-2xl mx-auto`}>
          Find answers to common questions about ColorKits tools and features. 
          Can't find what you're looking for? <Link to="/pages/contact" className="text-purple-500 hover:underline">Contact us</Link>
        </p>
      </div>

      {/* Search Bar */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-xl`}>
        <div className="relative">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${textSecondaryClass}`} />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${
              darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'
            } focus:ring-2 focus:ring-purple-500 transition-all`}
          />
        </div>
      </div>

      {/* FAQ Categories */}
      {filteredFAQs.length === 0 ? (
        <div className={`${cardClass} rounded-2xl border p-12 shadow-xl text-center`}>
          <p className={`${textSecondaryClass} text-lg`}>
            No results found for "{searchTerm}". Try different keywords or{' '}
            <Link to="/contact" className="text-purple-500 hover:underline">contact us</Link> directly.
          </p>
        </div>
      ) : (
        filteredFAQs.map((category, categoryIndex) => (
          <div key={categoryIndex} className={`${cardClass} rounded-2xl border p-6 shadow-xl`}>
            <h2 className={`text-2xl font-bold ${textClass} mb-6 flex items-center`}>
              <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></span>
              {category.category}
            </h2>

            <div className="space-y-3">
              {category.questions.map((item, questionIndex) => {
                const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                return (
                  <div
                    key={questionIndex}
                    className={`${
                      darkMode ? 'bg-gray-700' : 'bg-gray-50'
                    } rounded-xl overflow-hidden transition-all duration-300`}
                  >
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className={`w-full px-6 py-4 flex items-center justify-between text-left hover:opacity-80 transition-opacity`}
                    >
                      <span className={`font-semibold ${textClass} pr-4`}>
                        {item.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className={`w-5 h-5 ${textSecondaryClass} flex-shrink-0`} />
                      ) : (
                        <ChevronDown className={`w-5 h-5 ${textSecondaryClass} flex-shrink-0`} />
                      )}
                    </button>

                    {isOpen && (
                      <div className={`px-6 pb-4 ${textSecondaryClass} leading-relaxed`}>
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}

      {/* Ad Space */}
      <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center`}>
        <AdSpace size="728x90" darkMode={darkMode} />
      </div>

      {/* Still Need Help Section */}
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700`}>
        <MessageCircle className="w-12 h-12 mx-auto mb-4 text-purple-500" />
        <h2 className={`text-2xl font-bold ${textClass} mb-3`}>
          Still Need Help?
        </h2>
        <p className={`${textSecondaryClass} mb-6 max-w-xl mx-auto`}>
          Can't find the answer you're looking for? Our support team is ready to assist you.
        </p>
        <Link
          to="/pages/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Contact Support
        </Link>
      </div>
    </div>
        </>
  );
};

export default FAQ;
