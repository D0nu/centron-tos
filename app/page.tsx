"use client";

import React, { useState } from 'react';

export default function Home() {

  type Section = 'terms' | 'privacy' | null;

  const [openSection, setOpenSection] = useState<Section>('terms');
  const [accepted, setAccepted] = useState(false);

  const toggleSection = (section: Exclude<Section, null>) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="relative overflow-hidden bg-white py-8 px-8">
          <div className="relative z-10 flex items-center justify-center mb-4">
            <h1 className="text-2xl text-black text-center uppercase font-bold">
              Centron Bot&apos;s Terms of Service &amp; Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-center font-medium text-black uppercase relative z-10">
            Please read our Terms of Service and Privacy Policy carefully.
          </p>
        </div>

        <div className="p-6">
          {/* Terms of Service */}
          <div className={`mb-6 border border-gray-200 rounded-lg transition-all duration-300 ${openSection === 'terms' ? 'shadow-md' : ''}`}>
            <div
              className="flex justify-between items-center p-4 bg-gray-50 rounded-t-lg cursor-pointer"
              onClick={() => toggleSection('terms')}
            >
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 text-green-600 transition-transform duration-300 ${openSection === 'terms' ? 'rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Terms of Service
              </h2>
              <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full">Required</span>
            </div>
            {openSection === 'terms' && (
              <div className="p-4 bg-white rounded-b-lg animate-fadeIn max-h-[70vh] overflow-y-auto">
                <div className="prose max-w-none text-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h3>
                  <p className="mb-4">
                    Welcome to Centron Bot (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our Telegram-based cryptocurrency trading bot and related services, including our website located at tos.centronbot.app (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not access or use our Services.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">2. Eligibility and Acceptance</h3>
                  <p className="mb-4">
                    By using our Services, you represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>You are at least 18 years old or of legal age to form a binding contract in your jurisdiction.</li>
                    <li>You have full legal capacity and authority to enter into these Terms.</li>
                    <li>Your use of the Services does not violate any applicable laws, regulations, or agreements.</li>
                    <li>You are not a resident or located in any Restricted Jurisdiction (as defined below).</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">3. Restricted Jurisdictions</h3>
                  <h4 className="font-semibold text-gray-800 mb-2">3.1 Prohibited Jurisdictions</h4>
                  <p className="mb-4">
                    Our Services are not intended for use by individuals or entities who are located in, incorporated in, or have a registered office in any jurisdiction where the use of our Services would be illegal or otherwise violate any applicable law or regulation. This includes, but is not limited to, the following countries and regions: United States of America, Algeria, Belarus, Bolivia, Cuba, Crimea Region, Democratic Republic of Congo, Iran, Iraq, Ivory Coast, Liberia, Libya, North Korea, Somalia, Sudan, Syria, Venezuela, Yemen, Zimbabwe.
                  </p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">3.2 Representation and Warranties</h4>
                  <p className="mb-4">
                    By accessing or using our Services, you represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>You are not a resident or located in any Restricted Jurisdiction.</li>
                    <li>You are not a person or entity subject to any sanctions or restrictions imposed by the European Union, United Nations, or any other applicable governmental authority.</li>
                    <li>You will not use any technology (e.g., VPN) to circumvent the restrictions set forth herein.</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">3.3 Prohibition on Restricted Persons</h4>
                  <p className="mb-4">
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Use the Services if you are a Restricted Person.</li>
                    <li>Make the Services available to any Restricted Person.</li>
                    <li>Modify, disassemble, decompile, reverse engineer, or create derivative works of the Services to make them available to any Restricted Person.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">4. Account Registration</h3>
                  <h4 className="font-semibold text-gray-800 mb-2">4.1 Account Creation</h4>
                  <p className="mb-4">
                    To access certain features of the Services, you may need to create an account (&quot;Account&quot;). You agree to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Provide accurate, current, and complete information during the registration process.</li>
                    <li>Update your information promptly to keep it accurate and complete.</li>
                    <li>Maintain the security and confidentiality of your Account credentials.</li>
                    <li>Accept responsibility for all activities that occur under your Account.</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">4.2 Account Security</h4>
                  <p className="mb-4">
                    You are solely responsible for safeguarding your Account credentials, including private keys, seed phrases, and any other authentication information. We are not liable for any loss or damage arising from your failure to protect your credentials.
                  </p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">4.3 Unauthorized Access</h4>
                  <p className="mb-4">
                    You agree to notify us immediately at support@centronbot.app if you suspect any unauthorized access to or use of your Account.
                  </p>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <div className="flex">
                      <svg className="h-5 w-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-yellow-700">
                        <strong>Important:</strong> This is an abbreviated version of our Terms of Service. For the complete document, please visit our website.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Acknowledgement</h3>
                    <p className="mb-4">
                      By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                      Please read these Terms carefully before using the Services. Your use of the Services signifies your acceptance of these Terms.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Privacy Policy */}
          <div className={`mb-6 border border-gray-200 rounded-lg transition-all duration-300 ${openSection === 'privacy' ? 'shadow-md' : ''}`}>
            <div
              className="flex justify-between items-center p-4 bg-gray-50 rounded-t-lg cursor-pointer"
              onClick={() => toggleSection('privacy')}
            >
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 text-green-600 transition-transform duration-300 ${openSection === 'privacy' ? 'rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Privacy Policy
              </h2>
              <span className="text-xs font-semibold bg-green-100 text-green-800 py-1 px-2 rounded-full">Important</span>
            </div>
            {openSection === 'privacy' && (
              <div className="p-4 bg-white rounded-b-lg animate-fadeIn max-h-[70vh] overflow-y-auto">
                <div className="prose max-w-none text-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h3>
                  <p className="mb-4">
                    Centron Bot (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy (&quot;Policy&quot;) explains how we collect, use, disclose, and safeguard your information when you use our Telegram-based cryptocurrency trading bot and related services, including our website located at tos.centronbot.app (collectively, the &quot;Services&quot;). It also informs you about your privacy rights and how the law protects you. This Policy is part of our Terms and Conditions, and by accessing or using our Services, you agree to both this Policy and the Terms and Conditions. If you do not agree with the terms of this Policy, please do not use our Services.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">2. Data Controller Contact Information</h3>
                  <p className="mb-4">
                    For the purposes of the General Data Protection Regulation (&quot;GDPR&quot;) and other applicable data protection laws, the data controller is:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Centron Bot</li>
                    <li>Email: support@centronbot.app</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">3. Scope of This Policy</h3>
                  <p className="mb-4">
                    This Policy applies to information we collect:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Through our Services.</li>
                    <li>In email, text, and other electronic communications between you and the Services.</li>
                    <li>Through mobile and desktop applications you download from the Services.</li>
                    <li>When you interact with our advertising and applications on third-party websites and services.</li>
                  </ul>
                  <p className="mb-4">
                    This Policy does not apply to information collected by:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Us offline or through any other means not specified above.</li>
                    <li>Any third party, including through any application or content that may link to or be accessible from the Services.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">4. Children Under the Age of 16</h3>
                  <p className="mb-4">
                    Our Services are not intended for children under 16 years of age. We do not knowingly collect personal data from children under 16. If you are under 16, do not use or provide any information on our Services. If we learn we have collected or received personal data from a child under 16 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 16, please contact us at support@centronbot.app.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">5. Information We Collect About You</h3>
                  <h4 className="font-semibold text-gray-800 mb-2">5.1 Personal Data</h4>
                  <p className="mb-4">
                    We may collect, use, store, and transfer different kinds of personal data about you, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Identity Data:</strong> Username, real name, or other identifiers.</li>
                    <li><strong>Contact Data:</strong> Email address, telephone numbers.</li>
                    <li><strong>Technical Data:</strong> Internet Protocol (IP) address, login data, browser type and version, time zone setting, browser plug-in types, operating system, and platform.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our Services.</li>
                    <li><strong>Transaction Data:</strong> Details of cryptocurrency transactions you carry out through the Services.</li>
                    <li><strong>Wallet Information:</strong> Cryptocurrency wallet addresses, keys, and transaction history.</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">5.2 Aggregated Data</h4>
                  <p className="mb-4">
                    We also collect, use, and share Aggregated Data such as statistical or demographic data. Aggregated Data may be derived from your personal data but is not considered personal data under the law as it does not directly or indirectly reveal your identity.
                  </p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">5.3 Special Categories of Personal Data</h4>
                  <p className="mb-4">
                    We do not collect any Special Categories of Personal Data about you (e.g., details about your race, religion, sexual orientation, health, or biometric data).
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                    <div className="flex">
                      <svg className="h-5 w-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-blue-700">
                        <strong>Data Security:</strong> We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">6. How We Collect Your Personal Data</h3>
                  <h4 className="font-semibold text-gray-800 mb-2">6.1 Direct Interactions</h4>
                  <p className="mb-4">
                    You may give us your Identity and Contact Data by:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Filling in forms on our Services.</li>
                    <li>Corresponding with us by email or otherwise.</li>
                    <li>Registering for an account (if applicable).</li>
                    <li>Participating in surveys or promotions.</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">6.2 Automated Technologies</h4>
                  <p className="mb-4">
                    As you interact with our Services, we may automatically collect Technical Data and Usage Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, server logs, and other similar technologies.
                  </p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">6.3 Third Parties or Public Sources</h4>
                  <p className="mb-4">
                    We may receive personal data about you from various third parties:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Technical Data from analytics providers.</li>
                    <li>Contact and Transaction Data from providers of technical, payment, and delivery services.</li>
                    <li>Identity and Contact Data from publicly available sources.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">7. Cookies and Similar Technologies</h3>
                  <p className="mb-4">
                    We use cookies to distinguish you from other users of our Services and to improve your experience. You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">8. How We Use Your Personal Data</h3>
                  <p className="mb-4">
                    We use your personal data for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>To Provide Services:</strong> Facilitate your use of the Services, including processing transactions and providing customer support.</li>
                    <li><strong>Account Management:</strong> Manage your account, including verifying your identity and maintaining your profile.</li>
                    <li><strong>Improve Services:</strong> Analyze how you use our Services to improve functionality and user experience.</li>
                    <li><strong>Marketing:</strong> Provide you with information about goods and services that may interest you.</li>
                    <li><strong>Legal Obligations:</strong> Comply with legal and regulatory obligations, such as anti-money laundering and fraud prevention.</li>
                    <li><strong>Security:</strong> Ensure the security of our Services and prevent fraudulent activities.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">9. Disclosure of Your Personal Data</h3>
                  <p className="mb-4">
                    We may share your personal data with:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Service Providers:</strong> Third parties who provide services on our behalf, such as payment processing, data analysis, and marketing assistance.</li>
                    <li><strong>Affiliates:</strong> Our subsidiaries and affiliates for business purposes.</li>
                    <li><strong>Legal and Regulatory Authorities:</strong> When required by law or necessary to comply with legal processes.</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, sale, or reorganization of all or part of our business.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">10. International Data Transfers</h3>
                  <p className="mb-4">
                    Your personal data may be transferred to and processed in countries outside the European Economic Area (&quot;EEA&quot;). We ensure that appropriate safeguards are in place to protect your personal data in accordance with this Policy and applicable laws.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">11. Data Security</h3>
                  <p className="mb-4">
                    We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. These measures include encryption and access controls. However, no security measures are entirely secure.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">12. Data Retention</h3>
                  <p className="mb-4">
                    We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including satisfying any legal, accounting, or reporting requirements.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">13. Your Legal Rights</h3>
                  <p className="mb-4">
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal data.</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data.</li>
                    <li><strong>Restriction:</strong> Request restriction of processing your personal data.</li>
                    <li><strong>Objection:</strong> Object to processing of your personal data.</li>
                    <li><strong>Data Portability:</strong> Request transfer of your personal data to you or a third party.</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent where we are relying on consent to process your personal data.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">14. Automated Decision-Making</h3>
                  <p className="mb-4">
                    We do not use your personal data for automated decision-making processes that have legal or similarly significant effects on you.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">15. Third-Party Links</h3>
                  <p className="mb-4">
                    Our Services may include links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy policies.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">16. Do Not Track Signals</h3>
                  <p className="mb-4">
                    Our Services do not respond to Do Not Track (&quot;DNT&quot;) signals. DNT is a preference you can set in your browser to inform websites that you do not want to be tracked.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">17. Changes to This Privacy Policy</h3>
                  <p className="mb-4">
                    We may update this Policy from time to time. We will notify you of any significant changes by posting the new Policy on this page and updating the &quot;Effective Date&quot; at the top. Your continued use of the Services after any changes indicates your acceptance of the updated Policy.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">18. Contact Information</h3>
                  <p className="mb-4">
                    If you have any questions or concerns about this Policy or our privacy practices, please contact us:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Email: support@centronbot.app</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">19. Definitions</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>&quot;Personal Data&quot;:</strong> Any information relating to an identified or identifiable natural person.</li>
                    <li><strong>&quot;Processing&quot;:</strong> Any operation performed on personal data, such as collection, storage, use, disclosure, etc.</li>
                    <li><strong>&quot;Controller&quot;:</strong> The entity that determines the purposes and means of processing personal data.</li>
                    <li><strong>&quot;Processor&quot;:</strong> The entity that processes personal data on behalf of the controller.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">20. Your Responsibility</h3>
                  <p className="mb-4">
                    You are responsible for ensuring that any personal data you provide to us is accurate and up to date.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">21. Language</h3>
                  <p className="mb-4">
                    This Policy is drawn up in English. If it is translated into any other language, the English version shall prevail in the event of any inconsistencies.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Acceptance Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="accept-terms"
                  name="accept-terms"
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="accept-terms" className="font-medium text-gray-700">
                  I have read and agree to Centron Bot&apos;s Terms of Service and Privacy Policy
                </label>
                <p className="text-gray-500 mt-1">
                  You must accept these terms to continue using Centron Bot services.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <a
                href={accepted ? "https://centronbot.com" : undefined}
                onClick={(e) => {
                  if (!accepted) e.preventDefault();
                }}
              >
                <button
                  type="button"
                  disabled={!accepted}
                  className={`px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition ${
                    accepted
                      ? 'bg-green-600 hover:bg-green-700 cursor-pointer transform hover:scale-105'
                      : 'bg-green-300 opacity-50 cursor-not-allowed'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300`}
                >
                  Continue to Centron Bot
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}