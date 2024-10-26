'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statisticsData = [
  {
    value: "~$100 billion",
    label: "cumulative trading volume to date",
  },
  {
    value: "0.8%",
    label: "of the global crypto spot trading volume",
  },
  {
    value: "~30",
    label: "Gravity Teammates (& growing)",
  },
  {
    value: "25+",
    label: "leading global and local crypto exchanges",
  },
  {
    value: "2017",
    label: "start, crypto-natives",
  },
  {
    value: "1,200+",
    label: "crypto-asset pairs",
  },
  {
    value: "24/7",
    label: "liquidity",
  },
  {
    value: "5 billion+",
    label: "trades done to date",
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
    <div className="relative text-white min-h-[40rem] flex items-center justify-center overflow-hidden">
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
          At Gravity Team, we are on the mission to balance the supply and
          demand across crypto markets worldwide. We are a crypto native market
          maker founded by traders, developers, and innovators who are strong
          believers and supporters of the future of decentralization and digital
          assets.
        </motion.p>

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