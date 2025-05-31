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

const TermsOfService: NextPage = () => {
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

  return (
    <>
      <Head>
        <title>Terms of Service - Magnimont | Legal Terms and Conditions</title>
        <meta name="description" content="Read Magnimont's Terms of Service. Understand our legal terms, conditions, and policies for using our software development services." />
        <meta name="keywords" content="terms of service, legal, conditions, software development, Magnimont" />
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
              <Shield className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-medium text-teal-300">Terms of Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of <span style={gradientTextStyles}>Service</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of Magnimont's services 
              and establish the legal relationship between you and our company.
            </p>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-teal-400" />
                  </div>
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using Magnimont's services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not 
                  use this service.
                </p>
                <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
                  <p className="text-teal-300 text-sm">
                    <strong>Important:</strong> These terms constitute a legally binding agreement between you 
                    and Magnimont. Please read them carefully before using our services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                    <Settings className="w-4 h-4 text-teal-400" />
                  </div>
                  2. Services Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Magnimont provides custom software development, web development, AI solutions, and related 
                  technology services. Our services include but are not limited to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Custom web application development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>AI and machine learning solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>UI/UX design and branding services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Custom automation and scripting solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Technical consultation and support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-teal-400" />
                  </div>
                  3. User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  As a user of our services, you agree to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Provide Accurate Information</h4>
                    <p className="text-sm text-gray-400">
                      Ensure all information provided is accurate, current, and complete.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Respect Intellectual Property</h4>
                    <p className="text-sm text-gray-400">
                      Not infringe upon any third-party intellectual property rights.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Timely Communication</h4>
                    <p className="text-sm text-gray-400">
                      Respond promptly to requests for information or feedback.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Payment Obligations</h4>
                    <p className="text-sm text-gray-400">
                      Make payments according to agreed terms and schedules.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                    <Eye className="w-4 h-4 text-teal-400" />
                  </div>
                  4. Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Intellectual property rights are handled as follows:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-400 pl-4">
                    <h4 className="font-semibold text-white mb-2">Client-Owned Work</h4>
                    <p className="text-sm text-gray-400">
                      Upon full payment, clients own the custom code and designs created specifically for their project.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-white mb-2">Magnimont-Owned Assets</h4>
                    <p className="text-sm text-gray-400">
                      We retain rights to our proprietary tools, frameworks, and general methodologies.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-semibold text-white mb-2">Third-Party Components</h4>
                    <p className="text-sm text-gray-400">
                      Open-source and third-party components remain subject to their respective licenses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">5. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Payment Schedule</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• 50% deposit required to begin work</li>
                      <li>• Milestone payments as agreed</li>
                      <li>• Final payment upon project completion</li>
                      <li>• Net 15 payment terms for invoices</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Late Payment Policy</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• 1.5% monthly interest on overdue amounts</li>
                      <li>• Work suspension after 30 days overdue</li>
                      <li>• Collection fees may apply</li>
                      <li>• Legal action for amounts over $5,000</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">6. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="text-yellow-300 text-sm font-medium mb-2">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    Important Legal Notice
                  </p>
                  <p className="text-yellow-200 text-sm">
                    Our liability is limited to the amount paid for services. We are not liable for 
                    indirect, incidental, or consequential damages.
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  In no event shall Magnimont, its directors, employees, partners, agents, suppliers, 
                  or affiliates be liable for any indirect, incidental, punitive, consequential, or 
                  special damages arising from or related to your use of our services.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Liability Limitations Include:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Loss of profits or business opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Data loss or corruption (beyond our reasonable control)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Third-party service interruptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Force majeure events</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">7. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Either party may terminate services under the following conditions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Client Termination</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• 30-day written notice required</li>
                      <li>• Payment for completed work due</li>
                      <li>• Delivery of completed components</li>
                      <li>• No refund of deposits</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Magnimont Termination</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Immediate for non-payment</li>
                      <li>• 15-day notice for other breaches</li>
                      <li>• Refund of unused deposits</li>
                      <li>• Transfer of completed work</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">8. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We are committed to protecting your privacy and handling your data responsibly:
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2">Data Collection</h4>
                    <p className="text-blue-200 text-sm">
                      We collect only necessary information to provide our services effectively.
                    </p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2">Data Security</h4>
                    <p className="text-green-200 text-sm">
                      Industry-standard security measures protect your information.
                    </p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">Data Usage</h4>
                    <p className="text-purple-200 text-sm">
                      Your data is used solely for service delivery and improvement.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  For detailed information about our data practices, please review our{" "}
                  <Link href="/Privacy-policy" className="text-teal-400 hover:text-teal-300 underline">
                    Privacy Policy
                  </Link>.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">9. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We prefer to resolve disputes amicably through the following process:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Direct Communication</h4>
                      <p className="text-sm text-gray-400">
                        Contact us directly to discuss and resolve the issue informally.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Mediation</h4>
                      <p className="text-sm text-gray-400">
                        If direct communication fails, we'll engage in mediation with a neutral third party.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-400 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Arbitration</h4>
                      <p className="text-sm text-gray-400">
                        Final disputes will be resolved through binding arbitration under applicable laws.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">10. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be communicated as follows:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-teal-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Email Notification</h4>
                    <p className="text-sm text-gray-400">
                      Active clients receive email updates about significant changes.
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-teal-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Website Update</h4>
                    <p className="text-sm text-gray-400">
                      Updated terms are posted on our website with revision dates.
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-teal-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Continued Use</h4>
                    <p className="text-sm text-gray-400">
                      Using our services after changes constitutes acceptance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Contact Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Questions About Our <span style={gradientTextStyles}>Terms</span>?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  If you have any questions about these Terms of Service, please don't hesitate to contact us. 
                  We're here to help clarify any concerns you may have.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="mailto:legal@magnimont.com">
                    <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full px-8 py-3">
                      Contact Legal Team
                    </Button>
                  </Link>
                  <Link href="/get-started">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3">
                      Start a Project
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    <strong>Magnimont</strong> • Email: legal@magnimont.com • 
                    <Link href="/Privacy-policy" className="text-teal-400 hover:text-teal-300 ml-2">
                      Privacy Policy
                    </Link> • 
                    <Link href="/Cookie-Policy" className="text-teal-400 hover:text-teal-300 ml-2">
                      Cookie Policy
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Legal Disclaimer */}
          <motion.section variants={itemVariants}>
            <Card className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-300 mb-2">Legal Disclaimer</h4>
                    <p className="text-sm text-red-200 leading-relaxed">
                      These terms of service constitute the entire agreement between you and Magnimont 
                      concerning the use of our services. If any provision of these terms is found to be 
                      unenforceable, the remainder shall continue in full force and effect. These terms 
                      are governed by the laws of the jurisdiction in which Magnimont operates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Footer Navigation */}
          <motion.div variants={itemVariants} className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/Privacy-policy">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                ← Privacy Policy
              </Button>
            </Link>
            <div className="text-center">
              <p className="text-sm text-gray-400">
                Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <Link href="/Cookie-Policy">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                Cookie Policy →
              </Button>
            </Link>
          </motion.div>
        </motion.main>
      </div>
    </>
  );
};

export default TermsOfService;
