"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  MessageCircle, 
  ArrowRight,
  Bot,
  TrendingUp,
  Zap,
  Rocket,
  DollarSign,
  Star,
  Settings,
  Target
} from "lucide-react";
import Link from "next/link";

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function Faq() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqItems = [
    {
      question: "Can AI really transform my business operations?",
      answer: "Absolutely. Our AI solutions have helped businesses reduce operational costs by up to 40% and increase customer engagement by 300%. Whether it's automating customer support with intelligent chatbots or streamlining workflows with custom scripts, we'll help you leverage AI to create measurable impact.",
      category: "AI & Automation",
      icon: Bot
    },
    {
      question: "What ROI can I expect from your digital solutions?",
      answer: "Our clients typically see significant returns within the first 6 months. Recent projects have delivered 200% increases in lead generation, 45% improvements in customer satisfaction, and 60% reductions in operational costs. We'll work with you to set clear KPIs and track your success metrics.",
      category: "Business Impact",
      icon: TrendingUp
    },
    {
      question: "How quickly can you bring my digital vision to life?",
      answer: "Speed without compromising quality is our specialty. Most websites launch within 4 weeks, custom AI solutions within 6-8 weeks. We use an agile approach that gets your core features live fast, then iterate based on real user data. You'll see progress from day one.",
      category: "Timeline",
      icon: Zap
    },
    {
      question: "Will my solution scale as my business grows?",
      answer: "That's exactly what we design for. Every solution we build uses scalable architecture and future-proof technology. Whether you're handling 100 or 100,000 users, your digital infrastructure will grow seamlessly with your business.",
      category: "Scalability",
      icon: Rocket
    },
    {
      question: "How do you ensure my project stays on budget?",
      answer: "Transparency is built into our process. You'll receive detailed cost breakdowns, milestone-based payments, and regular progress updates. We've maintained a 98% on-budget delivery rate across hundreds of projects through careful planning and clear communication.",
      category: "Budget",
      icon: DollarSign
    },
    {
      question: "What makes Magnimont different from other agencies?",
      answer: "We're not just developers – we're strategic partners in your growth. Our team brings expertise from working with industry leaders, cutting-edge AI capabilities, and a track record of delivering solutions that drive real business results. Plus, you'll work directly with senior experts, not junior teams.",
      category: "Why Choose Us",
      icon: Star
    },
    {
      question: "Do you provide ongoing support and updates?",
      answer: "Your success is our long-term commitment. Every project includes dedicated support, regular performance optimization, and proactive updates. Our average client partnership spans 3+ years because we continue delivering value long after launch.",
      category: "Support",
      icon: Settings
    },
    {
      question: "How do we get started?",
      answer: "Let's begin with a strategic consultation. We'll discuss your goals, explore potential solutions, and create a roadmap for your digital transformation. Book your free consultation today, and we'll show you exactly how we can drive your business forward.",
      category: "Getting Started",
      icon: Target
    }
  ];
  
  const handleItemToggle = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

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
    <div id="faqs" className="relative px-4 py-20 bg-[#030303] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/3 to-teal-500/3 rounded-full blur-3xl"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left Section - Enhanced */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Section Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-6 py-2 border border-teal-500/30 w-fit">
                <span className="text-sm font-medium text-teal-300 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Got Questions?
                </span>
              </div>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Frequently
              <br />
              Asked
              <br />
              <span style={gradientTextStyles}>Questions</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Everything you need to know about working with Magnimont. Can't find what you're looking for? 
              <Link href="/contact" className="text-teal-400 hover:text-teal-300 transition-colors ml-1">
                Get in touch with our team.
              </Link>
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold">
                  <span style={gradientTextStyles}>24/7</span>
                </div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold">
                  <span style={gradientTextStyles}>{"< 2hrs"}</span>
                </div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/get-started">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white rounded-full font-medium transition-all duration-300">
                  <MessageCircle className="w-4 h-4" />
                  Contact Support
                </button>
              </Link>
            </motion.div>

            {/* Decorative Image - Hidden on mobile for better UX */}
            <motion.div 
              variants={itemVariants}
              className="hidden lg:block relative w-full max-w-[300px] aspect-square mt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-2xl blur-xl"></div>
              <Image
                src={"/home/faq1.png"}
                alt="FAQ Illustration"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Section - Enhanced FAQ */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <Accordion
              type="multiple"
              value={openItems}
              className="w-full space-y-4"
            >
              {faqItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={`item-${index}`}
                    variants={itemVariants}
                    className="group"
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-none bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-400/30 hover:shadow-lg hover:shadow-teal-500/10"
                    >
                      <AccordionTrigger
                        onClick={() => handleItemToggle(`item-${index}`)}
                        className="px-6 py-5 text-left hover:no-underline group/trigger"
                      >
                        <div className="flex items-start gap-4 w-full">
                          {/* Category Badge */}
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                              <IconComponent className="w-4 h-4 text-teal-400" />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-medium text-teal-400 mb-2">
                              {item.category}
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-white group-hover/trigger:text-transparent group-hover/trigger:bg-clip-text group-hover/trigger:bg-gradient-to-r group-hover/trigger:from-teal-400 group-hover/trigger:to-cyan-400 transition-all duration-300 leading-relaxed">
                              {item.question}
                            </h3>
                          </div>

                          {/* Custom Toggle Icon */}
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-8 h-8 rounded-full bg-white/10 group-hover/trigger:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300">
                              {openItems.includes(`item-${index}`) ? (
                                <Minus className="w-4 h-4 text-teal-400" />
                              ) : (
                                <Plus className="w-4 h-4 text-gray-400 group-hover/trigger:text-teal-400" />
                              )}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="px-6 pb-6">
                        <div className="ml-12 pt-2">
                          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>

            {/* Still have questions CTA */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl text-center"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Our team is here to help you succeed. Get personalized answers to your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact">
                  <button className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                    <MessageCircle className="w-4 h-4" />
                    Contact Us
                  </button>
                </Link>
                <Link href="https://forum.magnimont.com/">
                  <button className="flex items-center justify-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white rounded-full text-sm font-medium transition-all duration-300">
                    Join Community
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden xl:block absolute top-10 right-10 w-32 h-32 opacity-30">
        <Image
          src={"/home/faq2.png"}
          alt="FAQ Decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* Floating Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-teal-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
