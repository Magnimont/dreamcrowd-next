"use client"
import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, AlertCircle, CheckCircle, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const CookiePolicy: NextPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: ["Session management", "Security features", "Load balancing"],
      retention: "Session or up to 1 year",
      canDisable: false,
      color: "text-green-400"
    },
    {
      icon: Eye,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: ["Google Analytics", "Page views", "User behavior"],
      retention: "Up to 2 years",
      canDisable: true,
      color: "text-blue-400"
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Remember your preferences and settings",
      examples: ["Language preferences", "Theme settings", "Form data"],
      retention: "Up to 1 year",
      canDisable: true,
      color: "text-purple-400"
    },
    {
      icon: Cookie,
      title: "Marketing Cookies",
      description: "Used to show relevant advertisements",
      examples: ["Ad targeting", "Social media integration", "Conversion tracking"],
      retention: "Up to 1 year",
      canDisable: true,
      color: "text-orange-400"
    }
  ];

  const browserGuides = [
    {
      name: "Google Chrome",
      steps: [
        "Click the three dots menu → Settings",
        "Go to Privacy and security → Cookies and other site data",
        "Choose your preferred cookie settings"
      ]
    },
    {
      name: "Mozilla Firefox",
      steps: [
        "Click the menu button → Settings",
        "Select Privacy & Security",
        "Under Cookies and Site Data, click Manage Data"
      ]
    },
    {
      name: "Safari",
      steps: [
        "Safari menu → Preferences",
        "Click Privacy tab",
        "Choose your cookie preferences"
      ]
    },
    {
      name: "Microsoft Edge",
      steps: [
        "Click the three dots menu → Settings",
        "Select Cookies and site permissions",
        "Click Cookies and site data"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Cookie Policy - Magnimont | How We Use Cookies</title>
        <meta name="description" content="Learn how Magnimont uses cookies to improve your browsing experience. Understand our cookie policy and manage your preferences." />
        <meta name="keywords" content="cookie policy, privacy, data protection, website cookies, Magnimont" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/3 to-teal-500/3 rounded-full blur-3xl" />
        </div>

        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto px-6 py-20"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-6 py-2 border border-teal-500/30 mb-6">
              <Cookie className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-medium text-teal-300">Cookie Policy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How We Use <span style={gradientTextStyles}>Cookies</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We believe in transparency. This policy explains how Magnimont uses cookies and similar technologies 
              to enhance your browsing experience and improve our services.
            </p>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </motion.div>

          {/* What Are Cookies */}
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-teal-400" />
                  </div>
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit a website. They help websites 
                  remember information about your visit, such as your preferred language, login status, and other settings 
                  that can make your next visit easier and the site more useful to you.
                </p>
                <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
                  <p className="text-teal-300 text-sm">
                    <strong>Good to know:</strong> Cookies cannot access, read, or modify any other data on your computer. 
                    They are simply small pieces of data that help improve your browsing experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Types of Cookies */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Types of <span style={gradientTextStyles}>Cookies We Use</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieTypes.map((cookie, index) => {
                const IconComponent = cookie.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <Card className="h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-teal-400/30 transition-all duration-500">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                              <IconComponent className={`w-5 h-5 ${cookie.color}`} />
                            </div>
                            <div>
                              <CardTitle className="text-lg font-bold text-white">
                                {cookie.title}
                              </CardTitle>
                              <p className="text-sm text-gray-400 mt-1">
                                {cookie.description}
                              </p>
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cookie.canDisable 
                              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                              : 'bg-green-500/20 text-green-400 border border-green-500/30'
                          }`}>
                            {cookie.canDisable ? 'Optional' : 'Required'}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-white mb-2">Examples:</h4>
                          <ul className="space-y-1">
                            {cookie.examples.map((example, idx) => (
                              <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                                <div className="w-1 h-1 bg-teal-400 rounded-full" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-2 border-t border-white/10">
                          <p className="text-xs text-gray-500">
                            <strong>Retention:</strong> {cookie.retention}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Managing Cookies */}
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                    <Settings className="w-4 h-4 text-teal-400" />
                  </div>
                  Managing Your Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  You have full control over your cookie preferences. You can manage cookies through your browser settings 
                  or use our cookie preference center when available.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {browserGuides.map((browser, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full" />
                        {browser.name}
                      </h4>
                      <ol className="space-y-2">
                        {browser.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-sm text-gray-400 flex gap-3">
                            <span className="text-teal-400 font-medium">{stepIndex + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-orange-300 mb-1">Important Note</h4>
                      <p className="text-sm text-orange-200">
                        Disabling certain cookies may impact the functionality of our website. Essential cookies 
                        cannot be disabled as they are necessary for the site to work properly.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Third-Party Services */}
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Third-Party Services              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We use trusted third-party services to enhance your experience. These services may also use cookies 
                  in accordance with their own privacy policies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                      Google Analytics
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Helps us understand website usage and improve user experience.
                    </p>
                    <Link 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors underline"
                    >
                      View Google's Privacy Policy
                    </Link>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-purple-400" />
                      Hotjar
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Provides heatmaps and user session recordings to improve UX.
                    </p>
                    <Link 
                      href="https://www.hotjar.com/legal/policies/privacy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-purple-400 hover:text-purple-300 transition-colors underline"
                    >
                      View Hotjar's Privacy Policy
                    </Link>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-green-400" />
                      Calendly
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Enables appointment scheduling and consultation booking.
                    </p>
                    <Link 
                      href="https://calendly.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-green-400 hover:text-green-300 transition-colors underline"
                    >
                      View Calendly's Privacy Policy
                    </Link>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-red-400" />
                      YouTube
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Embedded videos and content delivery.
                    </p>
                    <Link 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-red-400 hover:text-red-300 transition-colors underline"
                    >
                      View YouTube's Privacy Policy
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Your Rights */}
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-teal-400" />
                  </div>
                  Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white mb-1">Access & Control</h4>
                        <p className="text-sm text-gray-400">
                          You can view, modify, or delete your cookie preferences at any time through your browser settings.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white mb-1">Opt-Out Options</h4>
                        <p className="text-sm text-gray-400">
                          You can opt out of non-essential cookies while still enjoying core website functionality.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white mb-1">Data Portability</h4>
                        <p className="text-sm text-gray-400">
                          Request a copy of your data or have it transferred to another service provider.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white mb-1">Transparency</h4>
                        <p className="text-sm text-gray-400">
                          We provide clear information about what data we collect and how we use it.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white mb-1">Right to Erasure</h4>
                        <p className="text-sm text-gray-400">
                          Request deletion of your personal data under certain circumstances.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white mb-1">Support</h4>
                        <p className="text-sm text-gray-400">
                          Our team is available to help with any privacy-related questions or concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Updates & Changes */}
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Policy Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices, 
                  technology, legal requirements, or other factors. When we make significant changes, we will:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full" />
                    <span className="text-gray-300">Post the updated policy on this page with a new "Last Updated" date</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full" />
                    <span className="text-gray-300">Notify you via email if you've subscribed to our newsletter</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full" />
                    <span className="text-gray-300">Display a prominent notice on our website for 30 days</span>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
                  <p className="text-blue-300 text-sm">
                    <strong>Stay Informed:</strong> We recommend reviewing this policy periodically to stay 
                    informed about how we protect your privacy and use cookies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Contact Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Questions About Our Cookie Policy?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  We're here to help! If you have any questions about how we use cookies or need assistance 
                  managing your preferences, don't hesitate to reach out.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="mailto:privacy@magnimont.com">
                    <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full px-8 py-3">
                      Contact Privacy Team
                    </Button>
                  </Link>
                  
                  <Link href="/privacy-policy">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3">
                      View Privacy Policy
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 text-sm text-gray-400">
                  <p>Email: <Link href="mailto:privacy@magnimont.com" className="text-teal-400 hover:text-teal-300">privacy@magnimont.com</Link></p>
                  <p>Response time: Within 48 hours</p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Related Links */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-bold text-white mb-6">Related Policies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy">
                <Button variant="ghost" className="text-gray-400 hover:text-white border border-white/20 hover:border-white/40">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/terms-of-service">
                <Button variant="ghost" className="text-gray-400 hover:text-white border border-white/20 hover:border-white/40">
                  Terms of Service
                </Button>
              </Link>
              <Link href="/data-protection">
                <Button variant="ghost" className="text-gray-400 hover:text-white border border-white/20 hover:border-white/40">
                  Data Protection
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </>
  );
};

export default CookiePolicy;

