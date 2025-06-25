"use client";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { AnimatePresence, motion } from "framer-motion";
import { Application } from "@splinetool/runtime";

import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const gradientTextStyles = {
  background: `linear-gradient(
    140deg,
    hsl(231deg 65% 65%) 0%,
    hsl(236deg 46% 54%) 11%,
    hsl(242deg 46% 43%) 20%,
    hsl(249deg 68% 29%) 28%,
    hsl(228deg 50% 44%) 36%,
    hsl(219deg 55% 58%) 43%,
    hsl(213deg 79% 74%) 50%,
    hsl(216deg 81% 63%) 57%,
    hsl(220deg 77% 54%) 64%,
    hsl(236deg 64% 50%) 72%,
    hsl(226deg 64% 43%) 81%,
    hsl(224deg 45% 40%) 90%,
    hsl(224deg 19% 37%) 100%
  )`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}

const theme = {
  bg: `linear-gradient(
    130deg,
    hsl(237deg 86% 86%) 0%,
    hsl(234deg 86% 87%) 7%,
    hsl(231deg 84% 88%) 15%,
    hsl(228deg 81% 90%) 25%,
    hsl(226deg 76% 91%) 36%,
    hsl(226deg 73% 91%) 49%,
    hsl(228deg 74% 90%) 62%,
    hsl(230deg 73% 89%) 76%,
    hsl(233deg 73% 88%) 89%,
    hsl(236deg 71% 88%) 100%
  )`
}

const Hero: React.FC = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);  

  const [show3DAsset, setShow3DAsset] = useState<boolean>(true);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
      setShow3DAsset(windowWidth > 200);
  }, [windowWidth]);

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

  const LoadingAnimation = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.0000001] h-[0.0000001] rounded-full"
          // style={{
          //   boxShadow: "#9B99FF 0px 0px 150px 90px",
          //   background: "#000",
          // }}
        />
        <div className="relative flex gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-3 h-3 bg-white rounded-full animate-bounce`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Handle Spline load
  const onSplineLoad = (spline: Application): void => {
    setIsSplineLoaded(true);
    if (spline) {
      // spline.setZoom(2);
    }
  };

  return (
    <div className="min-h-[100dvh] mx-auto text-white p-6 md:p-12 flex flex-col relative" style={{ overflow: 'hidden' }}>
      <main
        style={{ width: '100dvw', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}
        className="flex-grow flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 font-inter max-h-[50rem]">
        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          className="lg:w-5/6 space-y-8 text-center"
        >

          {/* <motion.header variants={itemVariants} className="mb-2 mt-8">
            <button className="rounded-full p-[1px] transform transition-transform hover:scale-105 animate-shimmer" 
              style={{
                background: gradientTextStyles.background,
              }}>
              <span className="flex flex-row gap-1 items-center justify-center text-xs md:text-sm rounded-full px-4 py-1.5 font-medium transition-colors" 
                style={{ backgroundColor: 'rgba(3, 3, 3, 0.8)' }}>
                <span style={gradientTextStyles}>DreamCrowd</span> 
                <span style={gradientTextStyles}>›</span>
              </span>
            </button>
          </motion.header> */}

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-8xl font-medium leading-tight mt-20"
          >Where Dreams Meet Capital
          </motion.h1>


            <motion.p
            variants={itemVariants}
            style={{ maxWidth: '85%' }}
            className="text-gray-300 mx-auto text-xl md:text-2xl leading-relaxed"
            >
            At DreamCrowd, we blend innovation with expertise to create tailored
            tech solutions that drive your business forward. From digital
            transformation to scalable growth, we&apos;re your partner in
            progress.
            </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row gap-4"
          >
            <Link href={"/get-started"}>
              <Button className="w-full lg:w-auto py-7 bg-gradient-to-r text-black bg-white rounded-full px-8 text-sm md:text-base font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 animate-fade-in">
                Get Started
              </Button>
            </Link>
            <Link href={"https://forum.magnimont.com/"}>
              <Button
                variant={"ghost"}
                className="w-full lg:w-auto py-7 rounded-full bg-gradient-to-r flex flex-row items-center justify-center bg-[#030303] px-7 text-sm md:text-base font-medium hover:bg-opacity-80 transition-all duration-300 hover:scale-105"
              >
                Forums <ChevronRight />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Media Section */}
        {show3DAsset && 
        <div 
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '-110%', scale: 1.5, overflow: 'hidden', filter: 'brightness(0.9)' }}
          className="w-full flex items-center justify-center relative pt-32 lg:pt-0">
          <AnimatePresence>
            {!isSplineLoaded && <LoadingAnimation />}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isSplineLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ overflow: 'hidden' }}
            className="w-100 min-h-100dvh flex justify-center items-center"
          >
            <Spline
              className="w-full h-full flex items-center justify-center scale-90 sm:scale-100 pt-10"
              style={{ overflow: "hidden" }}
              scene="https://prod.spline.design/Jqebk5VLcSqfAdDB/scene.splinecode"
              // scene="https://prod.spline.design/3sSK3WiA8vNrX6SE/scene.splinecode"
              onLoad={onSplineLoad}
            />
          </motion.div>
        </div>}
      </main>

      {/* <div style={{background: 'red', width: '100%', height: '1%0', zIndex: 100 }}>
            <motion.div>
              <Spline 
                scene='https://prod.spline.design/MCJ4gfZhP0dgE1cz/scene.splinecode'
              />
            </motion.div>
      </div> */}
    </div>
  );
};

export default Hero;
