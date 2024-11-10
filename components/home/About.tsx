'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statisticsData = [
  {
    value: "150+",
    label: "Project delivered successfully",
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
    label: "AI integration deployed",
  },
  {
    value: "100+",
    label: "websites optimized",
  },
  {
    value: "3 years",
    label: "of innovation and consistency",
  },
  {
    value: "25+",
    label: "industries served",
  },
];

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
        staggerChildren: 0.1,
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
    <div id="about" className="relative text-white min-h-[40rem] flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 -left-32 w-1/3 h-1/3">
        <Image
          src="/home/aboutBg1.png"
          alt=""
          width={300}
          height={300}
          className="object-cover hidden max-[2800px]:flex"
        />
      </div>
      <div className="absolute bottom-0 -right-16 h-1/3">
        <Image
          src="/home/aboutBg2.png"
          alt=""
          width={300}
          height={300}
          className="object-cover hidden max-[2800px]:flex"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center mx-auto mb-12 text-sm md:text-base max-w-2xl"
        >
Magnimont is your strategic partner in digital transformation. We blend cutting-edge technology with creative innovation to build intelligent solutions that drive growth. From AI-powered chatbots and automation systems to compelling web experiences, we transform complex challenges into competitive advantages for forward-thinking businesses.  </motion.p>

        {/* Statistics Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20"
        >
          {statisticsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "flex flex-col justify-center items-center p-6 md:p-8 cursor-pointer",
                "bg-[#030303]",
                "group",
                "relative overflow-hidden"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#130C5E] via-[#5FABE6] to-[#F0D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
              <p className="text-2xl md:text-3xl font-bold mb-2 relative z-10">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-center text-gray-400 group-hover:text-white transition-colors duration-500 ease-in-out relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}