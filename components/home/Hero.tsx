"use client";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Optimize performance by debouncing resize handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobileOrTablet(window.innerWidth < 1024);
      }, 150);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-[40rem] max-w-screen-xl mx-auto text-white p-6 md:p-12 flex flex-col">
      <main className="flex-grow flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 font-inter">
        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-7/12 space-y-8 text-center lg:text-left"
        >
          <motion.header variants={itemVariants} className="mb-2 mt-8">
            <button className="rounded-full p-[1px] bg-gradient-to-r to-blue-700 from-purple-600 transform transition-transform hover:scale-105 animate-shimmer">
              <span className="bg-[#030303] flex flex-row gap-1 items-center justify-center text-xs md:text-sm rounded-full px-4 py-1.5 font-medium hover:bg-opacity-80 transition-colors">
                Magnimont V2 <ChevronRight size={"16"} />
              </span>
            </button>
          </motion.header>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient">
              Software
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient">
              for Ventures
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 mx-auto lg:mx-0 max-w-lg text-sm md:text-base leading-relaxed"
          >
            At Magnimont, we blend innovation with expertise to create tailored
            tech solutions that drive your business forward. From digital
            transformation to scalable growth, we&apos;re your partner in
            progress.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row gap-4"
          >
            <Button className="w-full lg:w-auto py-7 bg-gradient-to-r text-black bg-white rounded-full px-8 text-sm md:text-base font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 animate-fade-in">
              Get Started
            </Button>

            <Button
              variant={"ghost"}
              className="w-full lg:w-auto py-7 rounded-full bg-gradient-to-r flex flex-row items-center justify-center bg-[#030303] px-7 text-sm md:text-base font-medium hover:bg-opacity-80 transition-all duration-300 hover:scale-105"
            >
              Forums <ChevronRight />
            </Button>
          </motion.div>
        </motion.div>
        {/* Hero Media - Moved to top for mobile */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative flex items-center justify-center">
          {isMobileOrTablet ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <video
                src="home/hexagons.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover animate-fade-in"
                style={{
                  background: "transparent",
                }}
              />
            </motion.div>
          ) : (
            <div className="relative w-full max-w-2xl aspect-square">
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.0000001] h-[0.0000001] rounded-full z-0 animate-pulse"
                style={{
                  boxShadow: "#9B99FF 0px 0px 290px 170px",
                  background: "#9B99FF",
                }}
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <Spline
                  scene="https://prod.spline.design/o76QGK9E7uoqyn61/scene.splinecode"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    position: "relative",
                  }}
                  className="flex items-center justify-center w-full scale-[.25] sm:scale-[.35] lg:scale-[.5] md:justify-start"
                />
                {/* <iframe src='https://my.spline.design/hexagons-38acc934f2f8af861e54901b7ab6a967/' frameborder='0' width='100%' height='100%'></iframe> */}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
