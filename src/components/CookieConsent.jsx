
import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
  };

  const closeBanner = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-2xl z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between gap-4">
          {/* Content Section */}
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <p className="text-sm leading-relaxed">
                We may use cookies and third-party advertising services to improve your experience and show relevant ads. 
                By continuing, you accept our{' '}
                <a href="/support/privacy" className="underline hover:text-yellow-400 font-semibold">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/support/terms" className="underline hover:text-yellow-400 font-semibold">
                  Terms of Service
                </a>.
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={closeBanner}
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4 justify-end flex-wrap">
          <button
            onClick={declineCookies}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-all duration-300 text-sm"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-all duration-300 text-sm shadow-lg"
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CookieConsent;