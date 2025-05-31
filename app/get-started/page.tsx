"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Code, Rocket, Globe, Cpu, Send, CheckCircle, Sparkles, ArrowLeft, Star, Zap, Shield, Clock, Settings, Lightbulb, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast"
import Confetti from 'react-confetti';
import Link from 'next/link';

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
  custom?: boolean;
};

type FormData = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function GetStartedHero() {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const services: Service[] = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website Development",
      description: "Transform your online presence with high-performance websites built for conversion and growth.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Analytics Integration"],
      price: "Starting at $2,500",
      popular: true
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Software Development",
      description: "From web apps to enterprise solutions, we bring your unique vision to life with scalable code.",
      features: ["Custom Development", "API Integration", "Database Design", "Cloud Deployment"],
      price: "Starting at $5,000"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that automate processes and provide actionable insights for your business.",
      features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Automation"],
      price: "Starting at $7,500"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Service",
      description: "Have a unique project in mind? Let's discuss your specific requirements and create a tailored solution.",
      features: ["Tailored Solutions", "Flexible Pricing", "Dedicated Consultation", "Custom Timeline"],
      price: "Let's discuss",
      custom: true
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please select a service.',
      });
      return;
    }
    if (!formData.name.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter your name.',
      });
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter a valid email address.',
      });
      return;
    }
    if (!formData.budget.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter your budget.',
      });
      return;
    }
    if (!formData.message.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter your message.',
      });
      return;
    }
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/api/get-started', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [
            {
              title: "🚀 New Project Inquiry",
              description: "A new project inquiry has been submitted.",
              color: 0x0099ff,
              fields: [
                { name: "🔧 Service Requested", value: selectedService?.title || "Not specified", inline: false },
                { name: "👤 Client Name", value: formData.name, inline: false },
                { name: "📧 Email", value: formData.email, inline: false },
                { name: "🏢 Company", value: formData.company || "Not specified", inline: false },
                { name: "💰 Budget", value: formData.budget, inline: false },
                { name: "📝 Message", value: formData.message, inline: false },
              ],
              footer: {
                text: "Magnimont",
                icon_url: "https://www.magnimont.com/images/logo.png",
              },
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        toast({
          variant: 'destructive',
          title: 'Error',
          description: `Submission failed: ${errorData.message || 'Unknown error'}`,
        });
      } else {
        toast({
          title: 'Success',
          description: 'Thank you for your inquiry! We\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', company: '', budget: '', message: '' });
        setSelectedService(null);
  
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 6000);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'There was an error submitting your inquiry. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {showConfetti && <Confetti />}
      
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/6 to-teal-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-gray-400 hover:text-white group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* Section Badge */}
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-6 py-2 border border-teal-500/30">
                <span className="text-sm font-medium text-teal-300 flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Start Your Journey
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Launch Your Next <span style={gradientTextStyles}>Project</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your ideas into reality? Our team of expert developers 
              is here to build your next breakthrough solution with cutting-edge technology.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-400">4.9/5 Client Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-400">48hr Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-400">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
              Choose Your <span style={gradientTextStyles}>Service</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {service.custom && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Lightbulb className="w-3 h-3" />
                        Custom Solution
                      </div>
                    </div>
                  )}
                  
                  <Card 
                     className={`h-full transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-teal-500/10 ${
                      service.custom 
                        ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-400/50' 
                        : 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border-white/10 hover:border-teal-400/30'
                    } ${
                      selectedService?.title === service.title 
                        ? service.custom 
                          ? 'border-purple-400 ring-2 ring-purple-400/20' 
                          : 'border-teal-400 ring-2 ring-teal-400/20'
                        : ''
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                          service.custom 
                            ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30' 
                            : 'bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-teal-500/30'
                        }`}>
                          <div className={service.custom ? 'text-purple-400' : 'text-teal-400'}>
                            {service.icon}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">
                            {service.custom ? (
                              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {service.price}
                              </span>
                            ) : (
                              <span style={gradientTextStyles}>{service.price}</span>
                            )}
                          </div>
                          <div className="text-xs text-gray-400">
                            {service.custom ? 'Custom quote' : 'Base price'}
                          </div>
                        </div>
                      </div>
                      
                      <CardTitle className={`text-xl font-bold mb-3 transition-all duration-300 ${
                        service.custom 
                          ? 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400'
                          : 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400'
                      }`}>
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white">
                          {service.custom ? "What We Offer:" : "What's Included:"}
                        </h4>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                                service.custom ? 'text-purple-400' : 'text-green-400'
                              }`} />
                              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {service.custom && (
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Plus className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium text-purple-300">Custom Benefits</span>
                          </div>
                          <ul className="text-xs text-purple-200 space-y-1">
                            <li>• Unlimited revisions during development</li>
                            <li>• Direct access to senior developers</li>
                            <li>• Flexible payment terms</li>
                            <li>• Priority support and maintenance</li>
                          </ul>
                        </div>
                      )}

                      <div className="pt-4 border-t border-white/10">
                        <Button
                          variant={selectedService?.title === service.title ? "default" : "outline"}
                          className={`w-full transition-all duration-300 ${
                            selectedService?.title === service.title
                              ? service.custom
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                                : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white'
                              : 'border-white/20 text-white hover:bg-white/10'
                          }`}
                        >
                          {selectedService?.title === service.title ? 'Selected' : 'Select Service'}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Custom Service Info */}
            <motion.div variants={itemVariants} className="mt-8">
              <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Have Something Unique in Mind?
                    </h3>
                    <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                      Our custom service option is perfect for unique projects that don't fit into standard categories. 
                      Whether it's blockchain development, IoT solutions, mobile apps, or innovative tech integrations, 
                      we'll work with you to create a tailored solution that meets your exact requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                    <Send className="w-4 h-4 text-teal-400" />
                  </div>
                  Tell Us About Your Project
                </CardTitle>
                <p className="text-gray-400 mt-2">
                  Share your vision with us and we'll create a custom proposal tailored to your needs
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        Full Name
                        <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border-white/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300 hover:border-white/30"
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        Email Address
                        <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border-white/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300 hover:border-white/30"
                        placeholder="john@company.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-white/5 border-white/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300 hover:border-white/30"
                        placeholder="Your Company"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        Project Budget
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white h-12 rounded-xl transition-all duration-300 hover:border-white/30 px-3"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="" className="bg-black">Select your budget range</option>
                        <option value="$2,500 - $5,000" className="bg-black">$2,500 - $5,000</option>
                        <option value="$5,000 - $10,000" className="bg-black">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000" className="bg-black">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000" className="bg-black">$25,000 - $50,000</option>
                        <option value="$50,000+" className="bg-black">$50,000+</option>
                        <option value="Custom Quote Needed" className="bg-black">Custom Quote Needed</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      Project Details
                      <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      placeholder={
                        selectedService?.custom 
                          ? "Describe your unique project requirements, technologies you'd like to use, specific features needed, timeline expectations, and any other details that would help us understand your custom solution..."
                          : "Tell us about your project goals, timeline, specific requirements, and any other details that would help us understand your vision..."
                      }
                      className="bg-white/5 border-white/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white placeholder:text-gray-500 rounded-xl transition-all duration-300 hover:border-white/30 resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Selected Service Display */}
                  {selectedService && (
                    <div className={`border rounded-xl p-4 ${
                      selectedService.custom 
                        ? 'bg-purple-500/10 border-purple-500/20' 
                        : 'bg-teal-500/10 border-teal-500/20'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                          selectedService.custom 
                            ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30' 
                            : 'bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-teal-500/30'
                        }`}>
                          {selectedService.icon}
                        </div>
                        <div>
                          <h4 className={`font-medium ${
                            selectedService.custom ? 'text-purple-300' : 'text-teal-300'
                          }`}>
                            Selected Service
                          </h4>
                          <p className={`text-sm ${
                            selectedService.custom ? 'text-purple-200' : 'text-teal-200'
                          }`}>
                            {selectedService.title} - {selectedService.price}
                          </p>
                          {selectedService.custom && (
                            <p className="text-xs text-purple-300 mt-1">
                              💡 We'll provide a detailed custom quote based on your requirements
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || !selectedService}
                    className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-none transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Your Request...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        {selectedService?.custom ? 'Get My Custom Quote' : 'Get My Custom Proposal'}
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </Button>

                  {/* Form Footer */}
                  <div className="pt-4 border-t border-white/10 text-center">
                    <p className="text-xs text-gray-400">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy-policy" className="text-teal-400 hover:text-teal-300 transition-colors">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms-of-service" className="text-teal-400 hover:text-teal-300 transition-colors">
                        Terms of Service
                      </Link>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <Card className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Why Choose <span style={gradientTextStyles}>Magnimont</span>?
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    We're not just developers – we're your strategic partners in digital transformation
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Fast Delivery",
                      description: "Most projects delivered within 4-8 weeks with regular updates",
                      color: "text-blue-400"
                    },
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Quality Guarantee",
                      description: "100% satisfaction guarantee with unlimited revisions",
                      color: "text-green-400"
                    },
                    {
                      icon: <Sparkles className="w-6 h-6" />,
                      title: "Cutting-Edge Tech",
                      description: "Latest technologies and best practices for future-proof solutions",
                      color: "text-purple-400"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className={benefit.color}>
                          {benefit.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/10">
                  {[
                    { number: "150+", label: "Projects Completed" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "48hrs", label: "Response Time" },
                    { number: "3+", label: "Years Experience" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold mb-1">
                        <span style={gradientTextStyles}>{stat.number}</span>
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Custom Service Showcase */}
          <motion.div variants={itemVariants} className="mt-20">
            <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                    <Settings className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Custom Solutions We've <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Built</span>
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Every business is unique. Here are some custom solutions we've crafted for our clients
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Blockchain Integration",
                      description: "Custom smart contracts and DeFi solutions for fintech startups",
                      tech: ["Solidity", "Web3.js", "Ethereum"]
                    },
                    {
                      title: "IoT Dashboard",
                      description: "Real-time monitoring system for industrial equipment",
                      tech: ["React", "Node.js", "MQTT"]
                    },
                    {
                      title: "AR/VR Experience",
                      description: "Immersive training platform for healthcare professionals",
                      tech: ["Unity", "C#", "WebXR"]
                    },
                    {
                      title: "AI Chatbot Platform",
                      description: "Multi-language customer service automation",
                      tech: ["Python", "TensorFlow", "NLP"]
                    },
                    {
                      title: "Mobile App Suite",
                      description: "Cross-platform app with offline capabilities",
                      tech: ["React Native", "SQLite", "Redux"]
                    },
                    {
                      title: "Data Analytics Engine",
                      description: "Custom reporting and visualization platform",
                      tech: ["Python", "D3.js", "PostgreSQL"]
                    }
                  ].map((project, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300 group">
                      <h4 className="font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <p className="text-gray-300 mb-4">
                    Don't see your project type? No problem!
                  </p>
                  <Button 
                    onClick={() => {
                      setSelectedService(services.find(s => s.custom) || null);
                      document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6 py-3 transition-all duration-300 hover:scale-105"
                  >
                    Discuss Your Custom Project
                    <Lightbulb className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Process Timeline */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our <span style={gradientTextStyles}>Process</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                From initial consultation to final delivery, we follow a proven methodology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "We discuss your vision, requirements, and goals in detail",
                  duration: "1-2 days"
                },
                {
                  step: "02",
                  title: "Proposal & Planning",
                  description: "Custom proposal with timeline, milestones, and pricing",
                  duration: "2-3 days"
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Agile development with regular updates and feedback",
                  duration: "4-8 weeks"
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description: "Deployment, testing, and ongoing maintenance support",
                  duration: "Ongoing"
                }
              ].map((process, index) => (
                <div key={index} className="relative group">
                  <Card className="h-full bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-teal-400/30 transition-all duration-500">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-3">
                        {process.step}
                      </div>
                      <h4 className="font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                        {process.title}
                      </h4>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-3">
                        {process.description}
                      </p>
                      <div className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full text-xs font-medium">
                        {process.duration}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-teal-400/50 to-transparent transform -translate-y-1/2 z-10" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Frequently Asked <span style={gradientTextStyles}>Questions</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      question: "How long does a typical project take?",
                      answer: "Most projects are completed within 4-8 weeks, depending on complexity and scope. Custom projects may vary based on requirements."
                    },
                    {
                      question: "Do you provide ongoing support?",
                      answer: "Yes, we offer 30 days of free support and ongoing maintenance packages for all projects."
                    },
                    {
                      question: "Can you work with my existing team?",
                      answer: "Absolutely! We integrate seamlessly with your existing development workflow and team structure."
                    },
                    {
                      question: "What technologies do you use?",
                      answer: "We use modern tech stacks including React, Next.js, Node.js, Python, AI/ML frameworks, and cloud platforms."
                    },
                    {
                      question: "How do custom projects work?",
                      answer: "Custom projects start with a detailed consultation to understand your unique needs, followed by a tailored proposal and development plan."
                    },
                    {
                      question: "What's included in the custom service?",
                      answer: "Custom services include unlimited revisions, direct access to senior developers, flexible payment terms, and priority support."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="font-semibold text-white">{faq.question}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Final CTA */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Build Something <span style={gradientTextStyles}>Amazing</span>?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join 150+ successful businesses that have transformed their operations with our solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    onClick={() => document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                  >
                    Start Your Project Now
                    <Rocket className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Link href="https://calendly.com/magnimont/30min" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="px-8 py-4 border-white/20 text-white hover:bg-white/10 rounded-full font-semibold text-lg transition-all duration-300">
                      Schedule a Call
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 text-sm text-gray-400">
                  <p>✨ Free consultation • 🚀 Fast turnaround • 💯 Satisfaction guaranteed</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Custom Service Benefits */}
          <motion.div variants={itemVariants} className="mt-20">
            <Card className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Custom Service</span>?
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    When standard solutions don't fit, our custom service delivers exactly what you need
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <Lightbulb className="w-6 h-6" />,
                      title: "Unlimited Creativity",
                      description: "No constraints on technology, features, or implementation approach"
                    },
                    {
                      icon: <Settings className="w-6 h-6" />,
                      title: "Flexible Scope",
                      description: "Adapt and evolve requirements as your project develops"
                    },
                    {
                      icon: <Star className="w-6 h-6" />,
                      title: "Senior Developers",
                      description: "Direct access to our most experienced team members"
                    },
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Risk-Free",
                      description: "Detailed planning phase before any development begins"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-purple-400">
                          {benefit.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-block bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                    <h4 className="font-semibold text-purple-300 mb-2">Custom Service Process</h4>
                    <div className="text-sm text-purple-200 space-y-1">
                      <p>1. Free consultation to understand your unique needs</p>
                      <p>2. Detailed technical specification and timeline</p>
                      <p>3. Custom quote based on complexity and scope</p>
                      <p>4. Flexible development with regular check-ins</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
