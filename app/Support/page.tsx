"use client"
import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

const Support: NextPage = () => {
  const [supportType, setSupportType] = useState<string | null>(null);
  const [contactMethod, setContactMethod] = useState<string>("");

  const handleSupportTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSupportType(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Support - Magnimont</title>
        <meta
          name="description"
          content="Get support from Magnimont for website issues, services, or inquiries."
        />
      </Head>
      <main className="px-8 pt-20 text-center bg-black text-white min-h-screen">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient mb-6">
          Support
        </h1>
        <p className="mb-8 text-lg">
          Need help with our services or your website? Fill out the form below, and our support team will assist you.
        </p>

        <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg">
          <label htmlFor="supportType" className="block text-lg mb-2">
            What type of support do you need?
          </label>
          <select
            id="supportType"
            onChange={handleSupportTypeChange}
            className="w-full mb-6 p-3 bg-gray-700 text-white rounded"
          >
            <option value="">Select an option</option>
            <option value="website">Website Support</option>
            <option value="services">Services Support</option>
          </select>

          <AnimatePresence mode="wait">
            {supportType === "website" && (
              <motion.div
                key="website"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6"
              >
                <label htmlFor="errorType" className="block text-lg mb-2">
                  What type of error are you encountering?
                </label>
                <select
                  id="errorType"
                  className="w-full mb-6 p-3 bg-gray-700 text-white rounded"
                >
                  <option value="">Select an error type</option>
                  <option value="frontend">Frontend Issues</option>
                  <option value="backend">Backend Issues</option>
                  <option value="performance">Performance Issues</option>
                  <option value="other">Other Issues</option>
                </select>
              </motion.div>
            )}

            {supportType === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6"
              >
                <label htmlFor="serviceType" className="block text-lg mb-2">
                  What type of support do you need?
                </label>
                <select
                  id="serviceType"
                  className="w-full mb-6 p-3 bg-gray-700 text-white rounded"
                >
                  <option value="">Select a service</option>
                  <option value="website-development">Website Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="ai-software-development">
                    AI Software Development
                  </option>
                  <option value="custom-software">Custom Software</option>
                  <option value="branding-graphics">Branding & Graphics</option>
                  <option value="custom-scripts">Custom Scripts</option>
                </select>

                <label htmlFor="orderId" className="block text-lg mb-2">
                  Order ID (if applicable)
                </label>
                <input
                  id="orderId"
                  type="text"
                  placeholder="Enter your Order ID"
                  className="w-full mb-6 p-3 bg-gray-700 text-white rounded"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <label htmlFor="contactMethod" className="block text-lg mb-2">
            How shall we contact you?
          </label>
          <select
            id="contactMethod"
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
            className="w-full mb-4 p-3 bg-gray-700 text-white rounded"
          >
            <option value="">Select a contact method</option>
            <option value="email">E-mail</option>
            <option value="twitter">Twitter</option>
            <option value="discord">Discord</option>
            <option value="linkedin">LinkedIn</option>
            <option value="whatsapp">WhatsApp</option>
          </select>

          {contactMethod && (
            <motion.div
              key="contactDetails"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6"
            >
              <label htmlFor="contactDetails" className="block text-lg mb-2">
                Provide your {contactMethod} details
              </label>
              <input
                id="contactDetails"
                type="text"
                placeholder={`Enter your ${contactMethod} details`}
                className="w-full p-3 bg-gray-700 text-white rounded"
              />
            </motion.div>
          )}

          <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold">
            Submit Support Request
          </button>
        </div>
      </main>
    </>
  );
};

export default Support;
