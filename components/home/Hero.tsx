"use client";
import { useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Application } from "@splinetool/runtime";

const Hero: React.FC = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const [isSplineLoaded, setIsSplineLoaded] = useState<boolean>(false);

  // Optimize performance by debouncing resize handler
  useEffect(() => {
    const handleResize = (): void => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    // Debounce with requestAnimationFrame for better performance
    let frameId: number;
    const debouncedResize = (): void => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(handleResize);
    };

    handleResize();
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Handle Spline load
  const onSplineLoad = (spline: Application): void => {
    setIsSplineLoaded(true);
    // Optimize scene after load
    if (spline) {
      spline.setZoom(0.8);
    }
  };

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
        {/* Glowing background similar to your existing design */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.0000001] h-[0.0000001] rounded-full"
          style={{
            boxShadow: "#9B99FF 0px 0px 150px 90px",
            background: "#9B99FF",
          }}
        />
        {/* Loading circles animation */}
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

  return (
    <div className="min-h-[40rem] max-w-screen-2xl mx-auto text-white p-6 md:p-12 flex flex-col">
      <main className="flex-grow flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 font-inter max-h-[50rem]">
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
            className="text-5xl md:text-6xl lg:text-8xl font-medium leading-tight"
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
        {/* Hero Media with Loading State */}
        <div className="w-full h-2/4 md:h-full flex items-center justify-center relative -z-10 max-h-[17rem] pt-24 lg:pt-0 lg:max-h-[50rem] lg:min-h-[50rem]">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.0000001] h-[0.0000001] rounded-full animate-pulse -z-10"
            style={{
              boxShadow: "#9B99FF 0px 0px 290px 170px",
              background: "#9B99FF",
            }}
          />

          <AnimatePresence>
            {!isSplineLoaded && <LoadingAnimation />}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isSplineLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="max-h-[40rem] flex justify-center items-center overflow-hidden"
          >
            <Spline
              className="w-full flex items-center justify-center"
              style={{ overflow: "visible" }}
              // scene="https://prod.spline.design/ZiqyYsBzgvZY6PTk/scene.splinecode"
              // scene="https://prod.spline.design/5km77ydj1V7-CpvQ/scene.splinecode"
              scene="https://prod.spline.design/hzePL2w2MjAF8Zrh/scene.splinecode"
              onLoad={onSplineLoad}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
