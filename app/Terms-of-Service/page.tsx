"use client"
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-8 py-16 text-gray-100 bg-black flex flex-col items-center min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient">Terms of Service</h1>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
        <p className="text-gray-300">
          Welcome to Magnimont. By accessing or using our services, you agree to
          comply with and be bound by these Terms of Service (&quot;Terms&quot;). Please
          read these Terms carefully before using our website. If you do not
          agree to these Terms, you should not access or use our services.
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">2. Eligibility</h2>
        <p className="text-gray-300">
          By using our services, you represent and warrant that you are at least
          18 years old, or the legal age of majority in your jurisdiction. If
          you are under 18, you may use our services only with the involvement
          and consent of a parent or guardian.
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">3. Account Registration</h2>
        <p className="text-gray-300">
          To use certain features of our website, you may be required to create an
          account. You agree to provide accurate and up-to-date information when
          creating an account and to keep this information current. You are
          responsible for maintaining the confidentiality of your account
          credentials and for any activity that occurs under your account.
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">4. Use of Services</h2>
        <p className="text-gray-300">
          You agree to use our services only for lawful purposes and in compliance
          with all applicable laws. You agree not to use our services for any
          activity that:
        </p>
        <ul className="list-disc ml-8 text-gray-400">
          <li>Violates any local, national, or international law or regulation.</li>
          <li>Is fraudulent, misleading, or deceptive.</li>
          <li>Infringes on the intellectual property rights of others.</li>
          <li>Distributes harmful or malicious software, viruses, or any other form of malware.</li>
          <li>Attempts to gain unauthorized access to our systems or those of third parties.</li>
        </ul>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">5. User Content</h2>
        <p className="text-gray-300">
          You retain ownership of any content that you submit, post, or display
          through our services. However, by submitting content, you grant us a
          worldwide, non-exclusive, royalty-free, sublicensable, and transferable
          license to use, reproduce, distribute, and display the content in
          connection with our services. You represent that you have the necessary
          rights to grant this license and that your content does not violate any
          third-party rights.
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">6. Termination</h2>
        <p className="text-gray-300">
          We reserve the right to suspend or terminate your access to our services
          at any time, with or without notice, if we believe you have violated
          these Terms or any applicable law. Upon termination, you must cease all
          use of our services, and we may delete your account and associated data.
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">7. Intellectual Property</h2>
        <p className="text-gray-300">
          All content, software, and materials available on our website, including
          but not limited to text, graphics, logos, and code, are the intellectual
          property of Magnimont or its licensors and are protected by copyright,
          trademark, and other intellectual property laws. You may not use, copy,
          reproduce, or distribute any content without our prior written consent.
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">8. Disclaimer of Warranties</h2>
        <p className="text-gray-300">
          Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without
          any warranties or guarantees of any kind, either express or implied. We
          do not warrant that our services will be uninterrupted, error-free, or
          free of viruses or other harmful components. To the fullest extent
          permitted by law, we disclaim all warranties, including any implied
          warranties of merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">9. Limitation of Liability</h2>
        <p className="text-gray-300">
          In no event shall Magnimont, its directors, officers, employees, or
          agents be liable for any indirect, incidental, special, consequential, or
          punitive damages, including but not limited to loss of profits, data,
          use, goodwill, or other intangible losses, arising out of or related to
          your use or inability to use our services, even if we have been advised
          of the possibility of such damages.
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">10. Governing Law</h2>
        <p className="text-gray-300">
          These Terms and any disputes arising from or related to them shall be
          governed by and construed in accordance with the laws of [Your
          Jurisdiction], without regard to its conflict of law principles. Any
          legal action or proceeding arising under these Terms shall be brought
          exclusively in the courts of [Your Jurisdiction].
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">11. Modifications</h2>
        <p className="text-gray-300">
          We reserve the right to modify these Terms at any time, at our sole
          discretion. We will notify you of any changes by posting the revised
          Terms on our website. Your continued use of our services after the
          changes take effect will constitute your acceptance of the revised
          Terms.
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Information</h2>
        <p className="text-gray-300">
          If you have any questions about these Terms or our services, please
          contact us at <a href="mailto:hi@magnimont.com" className="bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient">hi@magnimont.com</a>.
        </p>
      </section>
    </motion.main>
  );
}
