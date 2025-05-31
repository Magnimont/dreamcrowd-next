"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ArrowRight, Users, Zap, Target, Code, Lightbulb, Rocket } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function Cards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 bg-[#030303]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Why Choose <span style={gradientTextStyles}>Magnimont</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          We don't just deliver projects – we build partnerships that drive your business forward with cutting-edge technology and unwavering support.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        {/* Main Feature Card - Innovation & Technology */}
        <motion.div
          variants={itemVariants}
          className={cn(
            "lg:col-span-8 min-h-[400px]",
            "bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl relative overflow-hidden group cursor-pointer"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30">
                  <Rocket className="w-6 h-6" style={gradientTextStyles} />
                </div>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-300">
                  Innovation First
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Cutting-Edge Technology
                <br />
                <span style={gradientTextStyles}>Tailored Solutions</span>
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-2xl">
                From AI-powered automation to scalable web applications, we leverage the latest technologies to create solutions that give you a competitive edge. Every line of code is crafted with precision and purpose.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/get-started">
                <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full text-white font-medium transition-all duration-300 hover:scale-105">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 border-2 border-[#030303] flex items-center justify-center text-xs font-bold text-black">
                      {i}
                    </div>
                  ))}
                </div>
                <span>150+ Projects Delivered</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Side Card - Expert Team */}
        <motion.div
          variants={itemVariants}
          className={cn(
            "lg:col-span-4 min-h-[400px]",
            "bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl relative overflow-hidden group cursor-pointer"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
          
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                  <Users className="w-6 h-6 text-purple-300" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Expert Team
                <br />
                <span style={gradientTextStyles}>Proven Results</span>
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Our seasoned developers and designers bring years of experience across multiple industries, ensuring your project is in capable hands.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                <span className="text-gray-300">98% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                <span className="text-gray-300">24/7 Support & Monitoring</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                <span className="text-gray-300">3+ Years of Excellence</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Row - Three Equal Cards */}
        
        {/* Speed & Performance */}
        <motion.div
          variants={itemVariants}
          className={cn(
            "lg:col-span-4 min-h-[300px]",
            "bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl relative overflow-hidden group cursor-pointer"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
          
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 w-fit mb-4">
                <Zap className="w-5 h-5 text-yellow-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Lightning Fast
                <br />
                <span style={gradientTextStyles}>Performance</span>
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Optimized code and modern architecture ensure your applications run at peak performance, delivering exceptional user experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Custom Solutions */}
        <motion.div
          variants={itemVariants}
          className={cn(
            "lg:col-span-4 min-h-[300px]",
            "bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl relative overflow-hidden group cursor-pointer"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
          
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 w-fit mb-4">
                <Target className="w-5 h-5 text-green-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Custom Built
                <br />
                <span style={gradientTextStyles}>For You</span>
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                No cookie-cutter solutions. Every project is uniquely designed and developed to meet your specific business needs and goals.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Future-Proof */}
        <motion.div
          variants={itemVariants}
          className={cn(
            "lg:col-span-4 min-h-[300px]",
            "bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl relative overflow-hidden group cursor-pointer"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
          
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 w-fit mb-4">
                <Lightbulb className="w-5 h-5 text-indigo-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Future-Proof
                <br />
                <span style={gradientTextStyles}>Technology</span>
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Built with scalability in mind, our solutions grow with your business and adapt to emerging technologies and market changes.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
