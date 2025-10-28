
import React from 'react';
import { Shield } from 'lucide-react';

import SEO from '../components/SEO';


const Privacy = ({ darkMode }) => {
  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  return (


    <>
    
        
       <SEO 
        title="Privacy Policy - ColorKits"
        description="ColorKits privacy policy. Learn how we handle your data and protect your privacy while using our color tools."
        keywords="privacy policy, data protection, user privacy"
        url="https://www.colorkits.online/support/privacy"
      />




    <div className="space-y-8">
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
        <h1 className={`text-4xl font-bold ${textClass} mb-6 flex items-center`}>
          <Shield className="w-10 h-10 mr-3 text-purple-500" />
          Privacy Policy
        </h1>
        <div className={`space-y-4 ${textSecondaryClass} leading-relaxed`}>
          <p className="text-sm">Effective Date: July 25, 2025</p>
          <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <p className={`${textClass} font-semibold mt-4`}>
            ColorKits ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>1. Information We Collect</h2>
          <p>
            ColorKits collects minimal information to provide and improve our services:
          </p>
          
          <h3 className={`text-xl font-semibold ${textClass} mt-4 mb-2`}>Information You Provide:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Contact information (name, email) when you contact us</li>
            <li>Feedback and suggestions you submit</li>
            <li>Color palettes you create and save locally</li>
          </ul>

          <h3 className={`text-xl font-semibold ${textClass} mt-4 mb-2`}>Automatically Collected Information:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Browser type and version</li>
            <li>Device information and operating system</li>
            <li>IP address and general location data</li>
            <li>Pages visited and features used</li>
            <li>Time and date of visits</li>
            <li>Referring website addresses</li>
          </ul>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve user experience and website functionality</li>
            <li>Analyze usage patterns and trends</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send administrative information and updates</li>
            <li>Prevent fraudulent activities and ensure security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>3. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
          </p>
          <p className="mt-2">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>

          <h3 className={`text-xl font-semibold ${textClass} mt-4 mb-2`}>Types of Cookies We Use:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
            <li><strong>Preference Cookies:</strong> Remember your settings (like dark mode)</li>
          </ul>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>4. Third-Party Advertising</h2>
          <p>
            ColorKits may use third-party advertising services (such as Google AdSense) to display advertisements on our website. If we implement advertising services:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
            <li>Third-party vendors, including Google, may use cookies to serve ads based on your prior visits to our website or other websites</li>
            <li>These advertising cookies enable personalized advertising based on your browsing activity and interests</li>
            <li>Ad partners may collect information about your visits to provide relevant advertisements</li>
          </ul>
          <p className="mt-2">
            You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">Google Ads Settings</a> or <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">aboutads.info</a>.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>5. Third-Party Services</h2>
          <p>We may use the following third-party services:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
            <li><strong>Google AdSense:</strong> To display advertisements</li>
            <li><strong>Formspree:</strong> To process contact form submissions</li>
          </ul>
          <p className="mt-2">
            These third-party services have their own privacy policies addressing how they use such information. We recommend reviewing their privacy policies.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>6. Data Storage and Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          <p className="mt-2">
            Most of your data (such as saved color palettes) is stored locally in your browser using localStorage and is not transmitted to our servers.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>7. Your Privacy Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Objection:</strong> Object to processing of your personal data</li>
            <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at koripankaj8169@gmail.com
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>8. Do Not Track Signals</h2>
          <p>
            We do not currently respond to Do Not Track (DNT) signals. However, you can disable cookies through your browser settings.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>9. Children's Privacy</h2>
          <p>
            Our service is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>11. California Privacy Rights (CCPA)</h2>
          <p>
            If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Right to know what personal information is collected</li>
            <li>Right to know if personal information is sold or disclosed</li>
            <li>Right to opt-out of the sale of personal information</li>
            <li>Right to deletion of personal information</li>
            <li>Right to non-discrimination for exercising CCPA rights</li>
          </ul>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>12. European Privacy Rights (GDPR)</h2>
          <p>
            If you are located in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>13. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>14. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>15. Your Consent</h2>
          <p>
            By using our website, you consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>16. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none space-y-2 ml-4 mt-2">
            <li><strong>Email:</strong> koripankaj8169@gmail.com</li>
            <li><strong>Website:</strong> ColorKits</li>
          </ul>
          
          <div className={`mt-8 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <p className={`text-sm ${textClass}`}>
              <strong>Note:</strong> This Privacy Policy was last updated on {new Date().toLocaleDateString()}. Please check back regularly for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
        </>
  );
};

export default Privacy;
