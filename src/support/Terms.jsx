import React from 'react';
import { FileText } from 'lucide-react';

import SEO from '../components/SEO';


const Terms = ({ darkMode }) => {

  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';

  return (

    <>
    
    
       <SEO 
        title="Terms of Service - ColorKits"
        description="ColorKits terms of service. Read our usage terms and conditions for using our free color tools."
        keywords="terms of service, usage terms, conditions"
        url="https://www.colorkits.online/support/terms"
      />
    
    
    


    <div className="space-y-8">
      <div className={`${cardClass} rounded-2xl border p-8 shadow-xl`}>
        <h1 className={`text-4xl font-bold ${textClass} mb-6 flex items-center`}>
          <FileText className="w-10 h-10 mr-3 text-purple-500" />
          Terms of Service
        </h1>
        <div className={`space-y-4 ${textSecondaryClass} leading-relaxed`}>
          <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>1. Acceptance of Terms</h2>
          <p>
            By accessing and using ColorKits, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>2. Use License</h2>
          <p>
            Permission is granted to use ColorKits for personal and commercial projects. You may:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Use generated colors and palettes in any project</li>
            <li>Download and save color palettes</li>
            <li>Share generated gradients and colors</li>
            <li>Use the tools for commercial purposes</li>
          </ul>
          <p className="mt-4">You may not:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Reproduce, redistribute, or resell our service</li>
            <li>Attempt to copy or clone ColorKits</li>
            <li>Use the service for any illegal purpose</li>
            <li>Reverse engineer or decompile any part of the service</li>
          </ul>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>3. Service Availability</h2>
          <p>
            We strive to keep ColorKits available 24/7, but we do not guarantee uninterrupted access. We may suspend or discontinue the service at any time without notice.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>4. Disclaimer</h2>
          <p>
            The materials on ColorKits are provided on an 'as is' basis. ColorKits makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>5. Limitations of Liability</h2>
          <p>
            In no event shall ColorKits or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ColorKits.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>6. Accuracy of Materials</h2>
          <p>
            The materials appearing on ColorKits could include technical, typographical, or photographic errors. ColorKits does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>7. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Use the service in any way that violates applicable laws</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the service</li>
            <li>Transmit any viruses or malicious code</li>
          </ul>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>8. Modifications to Terms</h2>
          <p>
            ColorKits may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>9. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2 className={`text-2xl font-bold ${textClass} mt-8 mb-4`}>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at: <strong>koripankaj8169@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>

        </>
  );
};

export default Terms;
