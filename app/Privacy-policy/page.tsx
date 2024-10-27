'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-8 pt-20 text-center bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="privacy-heading mb-8  text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient">Privacy Policy</h1>
        <div className="text-left space-y-8">
          <section>
            <p className="policy-text mb-6">
              At Magnimont™, we respect your privacy and are committed to protecting any personal information you may share with us. This Privacy Policy explains what personal data we collect, how we use it, and the steps we take to ensure it is protected. This policy was last updated on October 27, 2024.
            </p>
          </section>

          <section>
            <h2 className="policy-subheading mb-4 text-2xl font-semibold ">1. Information We Collect</h2>
            <p className="policy-text mb-4">
              We collect the following types of information when you interact with our website and services:
            </p>
            <div className="ml-6 space-y-4">
              <div>
                <h3 className="font-medium mb-2">1.1 Personal Identification Information:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Full name and contact details</li>
                  <li>Email address and phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Company information (if applicable)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">1.2 Usage Data:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Browsing patterns and history</li>
                  <li>Feature preferences and settings</li>
                  <li>Interaction with our content</li>
                  <li>Time spent on different pages</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">1.3 Technical Data:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and identifiers</li>
                  <li>Operating system details</li>
                  <li>Cookie data and local storage information</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="policy-subheading mb-4 text-2xl font-semibold ">2. How We Use Your Information</h2>
            <p className="policy-text mb-4">
              We process your personal information for the following legitimate business purposes:
            </p>
            <div className="ml-6 space-y-4">
              <div>
                <h3 className="font-medium mb-2">2.1 Service Improvement:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Analyzing user behavior to enhance website functionality</li>
                  <li>Identifying and fixing technical issues</li>
                  <li>Developing new features based on user feedback</li>
                  <li>Optimizing user experience and interface</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">2.2 Communication:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sending service updates and notifications</li>
                  <li>Providing customer support assistance</li>
                  <li>Delivering marketing communications (with consent)</li>
                  <li>Responding to inquiries and feedback</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="policy-subheading mb-4 text-2xl font-semibold ">3. Data Protection and Security</h2>
            <p className="policy-text mb-4">
              We implement comprehensive security measures to protect your data, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access control and authentication mechanisms</li>
              <li>Data backup and recovery procedures</li>
              <li>Employee training on data protection practices</li>
            </ul>
          </section>

          <section>
            <h2 className="policy-subheading mb-4 text-2xl font-semibold ">4. Cookie Policy</h2>
            <p className="policy-text mb-4">
              Our website uses cookies and similar technologies to enhance your browsing experience. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for targeted advertising (optional)</li>
            </ul>
          </section>

          <section>
            <h2 className="policy-subheading mb-4 text-2xl font-semibold ">5. Your Rights</h2>
            <p className="policy-text mb-4">
              Under applicable data protection laws, you have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (right to be forgotten)</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="policy-subheading mb-4 text-2xl font-semibold ">6. International Data Transfers</h2>
            <p className="policy-text mb-4">
              We may transfer your data to servers located outside your country of residence. In such cases, we ensure appropriate safeguards are in place through:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>Standard contractual clauses</li>
              <li>Privacy Shield certification (where applicable)</li>
              <li>Data processing agreements</li>
              <li>Compliance with local data protection laws</li>
            </ul>
          </section>

          <section>
            <h2 className="policy-subheading mb-4 text-2xl font-semibold ">7. Contact Information</h2>
            <p className="policy-text mb-4">
              For any questions about this Privacy Policy or to exercise your rights, please contact us through:
            </p>
            <div className="space-y-2 ml-6">
              <p>Email: <a href="mailto:hi@magnimont.com" className="bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient">hi@magnimont.com</a></p>
              <p>Phone: <a href="tel:+918076974315" className="bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient">+91 8076974315</a></p>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`

    padding-top: 5rem;
    padding-bottom: 0rem;


      `}</style>
    </motion.main>
  );
}