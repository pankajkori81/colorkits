import React, { useState } from 'react';
import { MessageSquare, Send, Star } from 'lucide-react';
import AdSpace from '../components/AdSpace';

const Feedback = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'suggestion',
    rating: 5,
    message: '',
    stockSymbol: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Feedback message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mjkpvwbe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `New Feedback: ${formData.feedbackType} - Rating: ${formData.rating}/5`,
          ...formData,
          timestamp: new Date().toLocaleString(),
        })
      });

      if (response.ok) {
        setSuccessMessage('✅ Thank you! Your feedback has been submitted successfully.');
        setFormData({
          name: '',
          email: '',
          feedbackType: 'suggestion',
          rating: 5,
          message: '',
          stockSymbol: ''
        });
        setErrors({});
        setTimeout(() => setSuccessMessage(''), 5000);
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
    <div className="space-y-8">
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl max-w-3xl mx-auto`}>
        <h1 className={`text-4xl font-bold ${textClass} mb-6 flex items-center`}>
          <MessageSquare className="w-10 h-10 mr-3 text-purple-500" />
          Share Your Feedback
        </h1>
        <p className={`${textSecondaryClass} text-lg mb-8`}>
          Help us improve your stock screening experience! We value your thoughts and suggestions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-sm font-medium ${textClass} mb-2`}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
              } border-2 ${
                errors.name ? 'border-red-500' : 'border-transparent'
              } focus:border-purple-500 transition-all duration-300`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className={`block text-sm font-medium ${textClass} mb-2`}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
              } border-2 ${
                errors.email ? 'border-red-500' : 'border-transparent'
              } focus:border-purple-500 transition-all duration-300`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-2`}>
                Feedback Type
              </label>
              <select
                name="feedbackType"
                value={formData.feedbackType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
                } border-2 border-transparent focus:border-purple-500 transition-all duration-300`}
              >
                <option value="suggestion">Suggestion</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="improvement">Improvement</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium ${textClass} mb-2 flex items-center`}>
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                Rating (1-5)
              </label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
                } border-2 border-transparent focus:border-purple-500 transition-all duration-300`}
              >
                <option value="1">⭐ 1 - Poor</option>
                <option value="2">⭐⭐ 2 - Fair</option>
                <option value="3">⭐⭐⭐ 3 - Good</option>
                <option value="4">⭐⭐⭐⭐ 4 - Very Good</option>
                <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
              </select>
            </div>
          </div>

 

          <div>
            <label className={`block text-sm font-medium ${textClass} mb-2`}>
              Your Feedback *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
              } border-2 ${
                errors.message ? 'border-red-500' : 'border-transparent'
              } focus:border-purple-500 transition-all duration-300 resize-none`}
              placeholder="Tell us what you think about our platform..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Sending...' : 'Submit Feedback'}
          </button>
        </form>

        {successMessage && (
          <p className={`mt-4 text-center font-medium ${
            successMessage.includes('✅') ? 'text-green-500' : 'text-red-500'
          }`}>
            {successMessage}
          </p>
        )}

        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <h3 className={`text-xl font-bold ${textClass} mb-4`}>
            Why Your Feedback Matters
          </h3>
          <div className={`space-y-3 ${textSecondaryClass}`}>
            <p>• Help us identify and fix issues quickly</p>
            <p>• Suggest new features you'd like to see</p>
            <p>• Share your experience to help others</p>
            <p>• Shape the future of our platform</p>
          </div>
        </div>
      </div>

      <div className={`${cardClass} rounded-2xl border p-6 shadow-xl text-center transition-all duration-500 hover:shadow-2xl`}>
        <AdSpace size="728x90" darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Feedback;