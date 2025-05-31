'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statisticsData = [
  {
    value: "150+",
    label: "Projects delivered successfully",
  },
  {
    value: "100+",
    label: "Custom automation solutions",
  },
  {
    value: "24/7",
    label: "Client support and monitoring",
  },
  {
    value: "98%",
    label: "Client satisfaction rate",
  },
  {
    value: "25+",
    label: "AI integrations deployed",
  },
  {
    value: "100+",
    label: "Websites optimized",
  },
  {
    value: "3 years",
    label: "Of innovation and consistency",
  },
  {
    value: "25+",
    label: "Industries served",
  },
];

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="about" className="relative text-white min-h-[60rem] flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Enhanced Background elements */}
      <div className="absolute top-0 -left-32 w-1/3 h-1/3 opacity-25">
        <Image
          src="/home/aboutBg1.png"
          alt=""
          width={300}
          height={300}
          className="object-cover hidden max-[2800px]:flex"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-transparent"></div>
      </div>
      <div className="absolute top-20 -right-16 h-1/3 opacity-25">
        <Image
          src="/home/aboutBg2.png"
          alt=""
          width={300}
          height={300}
          className="object-cover hidden max-[2800px]:flex"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/30 to-transparent"></div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10 max-w-7xl">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-6 py-2 border border-teal-500/30">
              <span className="text-sm font-medium text-teal-300">About Our Journey</span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Transforming Ideas Into
            <br />
            <span style={gradientTextStyles}>Digital Reality</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
            >
              We don't just build software – we craft digital experiences that revolutionize how businesses operate and grow.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
            >
              From AI-powered automation to stunning web experiences, every solution we create is designed to give you a competitive edge in today's digital landscape.
            </motion.p>
          </div>
        </motion.div>

        {/* Redesigned Statistics with Cards Layout */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {statisticsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card with glassmorphism effect */}
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 hover:border-teal-400/30 hover:shadow-lg hover:shadow-teal-500/10 flex items-center justify-center">
                
                {/* Centered Content */}
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">
                      <span style={gradientTextStyles}>{stat.value}</span>
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 text-teal-300 text-sm font-medium">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-teal-400"></div>
            Ready to transform your business?
            <div className="w-8 h-px bg-gradient-to-r from-teal-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
    </div>
  );
}
