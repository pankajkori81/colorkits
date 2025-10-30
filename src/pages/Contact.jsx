




import React, { useState } from 'react';
import { Phone, Mail, Share2 } from 'lucide-react';
import AdSpace from '../components/AdSpace';
import SEO from '../components/SEO';
import { getAdKey } from '../config/ads';



const Contact = ({ darkMode }) => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  const validateForm = () => {
    const newErrors = {};
    if (!contactForm.name.trim()) newErrors.name = 'Name is required';
    if (!contactForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contactForm.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!contactForm.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xwpwkoel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        setSuccessMessage('Thank you! Your message has been sent.');
        setContactForm({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setSuccessMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>

       <SEO 
        title="Contact Us - Get in Touch with ColorKits"
        description="Have questions or feedback about ColorKits? Contact us and we'll get back to you within 24-48 hours."
        keywords="contact colorkits, support, feedback, contact us"
        url="https://www.colorkits.online/pages/contact"
      />
    
   

    <div className="space-y-8">
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl max-w-3xl mx-auto`}>
        <h1 className={`text-4xl font-bold ${textClass} mb-6 flex items-center`}>
          <Phone className="w-10 h-10 mr-3 text-purple-500" />
          Contact Us
        </h1>
        <p className={`${textSecondaryClass} text-lg mb-8`}>
          Have questions, suggestions, or feedback? We'd love to hear from you!
        </p>

        <form onSubmit={handleContactSubmit} className="space-y-6">
          <div>
            <label className={`block text-sm font-medium ${textClass} mb-2`}>Name *</label>
            <input
              type="text"
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} border-2 ${errors.name ? 'border-red-500' : 'border-transparent'} focus:border-purple-500 transition-all duration-300`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className={`block text-sm font-medium ${textClass} mb-2`}>Email *</label>
            <input
              type="email"
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} border-2 ${errors.email ? 'border-red-500' : 'border-transparent'} focus:border-purple-500 transition-all duration-300`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className={`block text-sm font-medium ${textClass} mb-2`}>Message *</label>
            <textarea
              rows={6}
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} border-2 ${errors.message ? 'border-red-500' : 'border-transparent'} focus:border-purple-500 transition-all duration-300`}
              placeholder="Tell us what's on your mind..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {successMessage && (
          <p className="mt-4 text-center text-green-500 font-medium">{successMessage}</p>
        )}

        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <h3 className={`text-xl font-bold ${textClass} mb-4`}>Other Ways to Reach Us</h3>
          <div className={`space-y-3 ${textSecondaryClass}`}>
            <p className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-purple-500" />
              Email: koripankaj8169@gmail.com
            </p>
            <p className="flex items-center">
              <Share2 className="w-5 h-5 mr-3 text-purple-500" />
              Follow us on social media for updates and tips
            </p>
          </div>
        </div>
      </div>

      <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
        <AdSpace size="728x90" darkMode={darkMode} />
      </div>

      {/*  banner - desktop */}
                  <div className="hidden lg:block">
                    <div className={`${cardClass} rounded-2xl border p-4 shadow-xl`}>
                      <AdSpace 
                        size="728x90" 
                        darkMode={darkMode}
                        adKey={getAdKey('728x90')}
          
                      />
                    </div>
                  </div>
          
          
                  {/* Banner - Mobile/Tablet */}
                   <div className="block lg:hidden">
                    <div className={`${cardClass} rounded-2xl border p-4 shadow-xl`}>
                      <AdSpace 
                        size="300x250" 
                        type="medium"
                        darkMode={darkMode}
                        adKey={getAdKey('300x250')}
                      
                      />
                    </div>
                  </div>  
      
    </div>
        </>
  );
};

export default Contact;
