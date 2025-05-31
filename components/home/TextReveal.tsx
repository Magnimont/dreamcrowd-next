"use client";
import React, { useEffect, useState } from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Code, Zap, ArrowRight } from "lucide-react";

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function TextReveal() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["INNOVATION", "EXCELLENCE", "TRANSFORMATION", "MAGNIMONT"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: Code,
      title: "Cutting-Edge Development",
      description: "Modern tech stack with future-proof solutions"
    },
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Rapid prototyping to production deployment"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Solutions",
      description: "Intelligent automation for business growth"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030303] overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/6 to-teal-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
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
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 min-h-screen flex flex-col"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center pt-20 pb-12 px-4">
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-6 py-2 border border-teal-500/30">
              <span className="text-sm font-medium text-teal-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Experience the Magic
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Discover What Makes Us{" "}
            <span style={gradientTextStyles}>Different</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Hover over the card below to reveal the power behind our name. 
            Experience the interactive magic that defines our approach to digital innovation.
          </p>

          {/* Animated Word Cycle */}
          <div className="mb-8">
            <p className="text-lg text-gray-400 mb-2">We deliver</p>
            <div className="h-12 flex items-center justify-center">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl md:text-3xl font-bold"
                style={gradientTextStyles}
              >
                {words[currentWordIndex]}
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Main TextReveal Card */}
        <motion.div 
          variants={itemVariants}
          className="flex-grow flex items-center justify-center px-4"
        >
          <div className="w-full max-w-screen-lg mx-auto">
            {/* Enhanced TextReveal Card Container */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
              
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-2 group-hover:border-teal-400/30 transition-all duration-500">
                <TextRevealCard
                  className="w-full rounded-2xl overflow-hidden"
                  text="MAGNIMONT"
                  revealText="INNOVATION"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#030303] to-[#0a0a0a] rounded-2xl" />
                  
                  {/* Enhanced Content Overlay */}
                  <div className="relative z-10 p-8 md:p-12 text-center">
                    <TextRevealCardTitle className="text-white text-xl md:text-2xl font-semibold mb-4">
                      Hover to reveal our essence
                    </TextRevealCardTitle>
                    <TextRevealCardDescription className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                      Move your cursor over this card to discover the driving force behind everything we create. 
                      This interactive experience represents our commitment to engaging, innovative solutions.
                    </TextRevealCardDescription>
                    
                    {/* Interactive Hint */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-teal-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Move your cursor here</span>
                      <ArrowRight className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>
                </TextRevealCard>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div variants={itemVariants} className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Why Choose <span style={gradientTextStyles}>Magnimont</span>?
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We don't just build software – we craft experiences that transform businesses and delight users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="relative">
                      {/* Card Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                      
                      <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-teal-400/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
                        {/* Icon */}
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-teal-400" />
                        </div>
                        
                        {/* Content */}
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Let's create something extraordinary together. Your vision, our innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                View Our Work
                <Sparkles className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-500/3 to-cyan-500/3 rounded-full blur-3xl -z-10" />
    </div>
  );
}
