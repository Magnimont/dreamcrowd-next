"use client"
import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import TextReveal from '@/components/home/TextReveal';

const CookiePolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy - Magnimont</title>
        <meta name="description" content="Cookie Policy for Magnimont, a freelance software development company." />
      </Head>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-8 pt-20 text-center bg-black text-white min-h-screen"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient mb-8">
          Cookie Policy
        </h1>
        <p className="mb-6">
          This Cookie Policy explains how Magnimont (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and similar technologies on our
          website. By using our website, you agree to the use of cookies as described in this policy.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device by a website. They help the website remember information
            about your visit, such as your preferences and settings, to enhance your browsing experience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <p>We use cookies for various purposes, including:</p>
          <ul className="list-inside list-disc">
            <li>To ensure our website functions properly.</li>
            <li>To analyze website traffic and performance.</li>
            <li>To remember your preferences and settings.</li>
            <li>To provide you with relevant content and advertisements.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          <p>We use the following types of cookies:</p>
          <ul className="list-inside list-disc">
            <li>
              <strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be disabled.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website,
              enabling us to improve the user experience.
            </li>
            <li>
              <strong>Functional Cookies:</strong> These remember your preferences and settings to provide a more
              personalized experience.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> These are used to show you relevant ads based on your interests.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p>
            You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies, but
            please note that this may impact the functionality of our website.
          </p>
          <p>
            For more information on managing cookies, visit{" "}
            <a
              href="https://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated
            revision date. Please check back periodically for updates.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Cookie Policy, please contact us at:
          </p>
          <address className="not-italic">
            <strong>Magnimont</strong>
            <br />
            Email: <a href="mailto:support@magnimont.com" className="text-blue-400 underline">support@magnimont.com</a>
          </address>
        </section>
        <TextReveal />
      </motion.main>
    </>
  );
};

export default CookiePolicy;
