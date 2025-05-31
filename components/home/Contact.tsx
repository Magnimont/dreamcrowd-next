"use client";
import { useState, useEffect, useTransition } from "react";
import { ArrowUpRight, Send, MapPin, Phone, Mail, Clock, CheckCircle, Sparkles, Globe, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export async function sendContactInfoFromComponent(formData: ContactFormData): Promise<{ success: boolean; data?: string }> {
  try {
    const response = await fetch('/api/get-started', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [
          {
            title: "🚀 New Contact Form Submission",
            description: "A new contact form submission has been received.",
            color: 0x0099ff,
            fields: [
              { name: "👤 First Name", value: formData.firstName },
              { name: "👤 Last Name", value: formData.lastName },
              { name: "📧 Email", value: formData.email },
              { name: "📝 Message", value: formData.message },
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
      const error = await response.text();
      return { success: false, data: `Discord API Error: ${error}` };
    }

    return { success: true, data: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Error sending contact info:", error);
    return { success: false, data: "There was an error sending your message. Please try again." };
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [greeting, setGreeting] = useState("Get in touch");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [disabled, setDisable] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const updateGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();

    if (day === 0 || day === 6) {
      setGreeting("Let's Connect This Weekend");
      return;
    }

    if (hour >= 5 && hour < 12) {
      setGreeting("Start Your Morning Right");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Transform Your Afternoon");
    } else if (hour >= 17 && hour < 22) {
      setGreeting("Elevate Your Evening");
    } else {
      setGreeting("Dream Big Tonight");
    }
  };

  useEffect(() => {
    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const data = await sendContactInfoFromComponent(formData);
      if (!data.success) {
        toast({
          variant: "destructive",
          title: "Error",
          description: data.data,
        });
      } else {
        setDisable(true);
        toast({
          title: "Success",
          description: data.data,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hi@magnimont.com",
      description: "Get a response within 2 hours",
      action: "mailto:hi@magnimont.com"
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Remote First",
      description: "Serving clients worldwide",
      action: "#"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "< 2 Hours",
      description: "Average response time",
      action: "#"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030303] overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/8 to-teal-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex justify-center p-4 max-w-screen-2xl mx-auto min-h-screen">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full max-w-7xl py-20"
        >
          {/* Enhanced Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* Section Badge */}
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-6 py-2 border border-teal-500/30">
                <span className="text-sm font-medium text-teal-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Ready to Start?
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span style={gradientTextStyles}>{greeting}</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your vision into reality. Let's discuss how we can accelerate your digital transformation and drive unprecedented growth.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold">
                  <span style={gradientTextStyles}>24/7</span>
                </div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <span style={gradientTextStyles}>{"< 2hrs"}</span>
                </div>
                <div className="text-sm text-gray-400">Response</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <span style={gradientTextStyles}>150+</span>
                </div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Sidebar - Enhanced */}
            <motion.div variants={itemVariants} className="xl:col-span-4 space-y-6">
              {/* Contact Information Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <Link href={info.action}>
                        <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-teal-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <IconComponent className="w-5 h-5 text-teal-400" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                                  {info.label}
                                </h3>
                                <p className="text-gray-300 font-medium mb-1">{info.value}</p>
                                <p className="text-sm text-gray-400">{info.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Enhanced Platform Cards */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-teal-400/30 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-white text-xl flex items-center gap-2">
                      <Globe className="w-5 h-5 text-teal-400" />
                      Hire Us Directly
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link href="https://fiverr.com/" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        className="w-full py-6 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-cyan-500/20 hover:border-teal-400/30 border border-white/10 text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/10 group"
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                              <Image
                                width={20}
                                height={20}
                                src="/home/fiver.png"
                                alt="Fiverr"
                                className="w-5 h-5"
                              />
                            </div>
                            <div className="text-left">
                              <div className="font-medium">Fiverr</div>
                              <div className="text-xs text-gray-400">Quick projects</div>
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>
                      </Button>
                    </Link>

                    <Link href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        className="w-full py-6 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-cyan-500/20 hover:border-teal-400/30 border border-white/10 text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/10 group"
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                              <Image
                                width={20}
                                height={20}
                                src="/home/upwork.png"
                                alt="Upwork"
                                className="w-5 h-5"
                              />
                            </div>
                            <div className="text-left">
                              <div className="font-medium">Upwork</div>
                              <div className="text-xs text-gray-400">Long-term projects</div>
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Consultation Card */}
              <motion.div variants={itemVariants} className="group">
                <Card className="relative overflow-hidden border-none bg-gradient-to-br from-teal-500/10 to-cyan-500/10 hover:from-teal-500/20 hover:to-cyan-500/20 transition-all duration-700">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-[#030303] to-[#0a0a0a] rounded-[inherit]"></div>
                  
                  <Link
                    href="https://calendly.com/magnimont/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative z-10"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="mb-4">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Calendar className="w-8 h-8 text-teal-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                        Free Strategy Session
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        Book a 30-minute consultation to discuss your project and get expert insights
                      </p>
                      <div className="flex items-center justify-center gap-2 text-teal-400 font-medium group-hover:gap-3 transition-all duration-300">
                        Schedule Now 
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Why Choose Magnimont?
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        98% client satisfaction rate
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        150+ successful projects delivered
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        3+ years of consistent innovation
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        24/7 dedicated support
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div variants={itemVariants} className="xl:col-span-8">
              <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm">
                {/* Subtle animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-transparent to-cyan-500/20 opacity-50"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-[#030303] to-[#0a0a0a] rounded-[inherit]"></div>
                
                <div className="relative z-10">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                        <Send className="w-4 h-4 text-teal-400" />
                      </div>
                      Send us a message
                    </CardTitle>
                    <p className="text-gray-400 mt-2">
                      Tell us about your project and we'll get back to you within 2 hours
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div 
                          variants={itemVariants}
                          className="space-y-2"
                        >
                          <label htmlFor="firstName" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            First Name
                            <span className="text-red-400">*</span>
                          </label>
                          <Input
                            disabled={isPending || disabled}
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-white/5 border-white/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300 hover:border-white/30"
                            placeholder="John"
                            required
                          />
                        </motion.div>

                        <motion.div 
                          variants={itemVariants}
                          className="space-y-2"
                        >
                          <label htmlFor="lastName" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            Last Name
                            <span className="text-red-400">*</span>
                          </label>
                          <Input
                            disabled={isPending || disabled}
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="bg-white/5 border-white/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300 hover:border-white/30"
                            placeholder="Doe"
                            required
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                          Email Address
                          <span className="text-red-400">*</span>
                        </label>
                        <Input
                          disabled={isPending || disabled}
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-white/5 border-white/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300 hover:border-white/30"
                          placeholder="john@example.com"
                          required
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                          Project Details
                          <span className="text-red-400">*</span>
                        </label>
                        <Textarea
                          disabled={isPending || disabled}
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          className="bg-white/5 border-white/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white placeholder:text-gray-500 rounded-xl transition-all duration-300 hover:border-white/30 resize-none"
                          required
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Button
                          disabled={isPending || disabled}
                          type="submit"
                          className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-none transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                          {isPending ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Sending Message...
                            </div>
                          ) : disabled ? (
                            <div className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5" />
                              Message Sent Successfully!
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              Send Message
                              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          )}
                        </Button>
                      </motion.div>

                      {/* Form Footer */}
                      <motion.div variants={itemVariants} className="pt-4 border-t border-white/10">
                        <p className="text-xs text-gray-400 text-center">
                          By submitting this form, you agree to our{" "}
                          <Link href="/privacy" className="text-teal-400 hover:text-teal-300 transition-colors">
                            Privacy Policy
                          </Link>{" "}
                          and{" "}
                          <Link href="/terms" className="text-teal-400 hover:text-teal-300 transition-colors">
                            Terms of Service
                          </Link>
                        </p>
                      </motion.div>
                    </form>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-20 hidden xl:block">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/home/faq2.png"
            alt="Decorative Element"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Success Overlay */}
      {disabled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-[#030303] to-[#0a0a0a] border border-teal-500/30 rounded-2xl p-8 max-w-md mx-4 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-300 mb-6">
              Thank you for reaching out. We'll get back to you within 2 hours with next steps.
            </p>
            <Button
              onClick={() => setDisable(false)}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full px-6"
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
