"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Cards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/20 max-w-7xl mx-auto w-full"
    >
      <motion.div
        variants={itemVariants}
        className={cn(
          "col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]",
          "bg-[#030303] relative overflow-hidden group"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#130C5E] via-[#5FABE6] to-[#F0D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
        <div className="relative z-10 p-8">
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-left text-base/6 text-gray-400 group-hover:text-white transition-colors duration-500">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={cn(
          "col-span-1 min-h-[300px]",
          "bg-[#030303] relative overflow-hidden group"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#130C5E] via-[#5FABE6] to-[#F0D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
        <div className="relative z-10 p-8">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-400 group-hover:text-white transition-colors duration-500">
            If someone yells &quot;stop!&quot;, goes limp, or taps out, the fight is over.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={cn(
          "col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]",
          "bg-[#030303] relative overflow-hidden group"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#130C5E] via-[#5FABE6] to-[#F0D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
        <div className="relative z-10 p-8">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-400 group-hover:text-white transition-colors duration-500">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
