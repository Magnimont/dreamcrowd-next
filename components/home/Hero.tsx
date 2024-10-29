"use client";
import { useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Application } from "@splinetool/runtime";
import Image from "next/image";
import HeroGif from "@/public/hero5mb.gif";

const Hero: React.FC = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);
  const [canHandle3D, setCanHandle3D] = useState<boolean>(true);
  const [isSplineLoaded, setIsSplineLoaded] = useState<boolean>(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const performanceCheckRef = useRef<boolean>(false);

  useEffect(() => {
    const checkDeviceCapabilities = async () => {
      // Basic checks
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobileOrTablet(isMobileDevice);
      if (isMobileDevice) {
        setCanHandle3D(false);
      }
      // WebGL capability check
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");

      if (!gl) {
        setCanHandle3D(false);
        return;
      }

      // Get GPU renderer info if available
      let renderer = "";
      try {
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
          renderer = gl
            .getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
            .toLowerCase();
        }
      } catch (e) {
        console.log("GPU info not available");
      }

      // Check for known low-performance indicators
      const isLowEndGPU =
        renderer.includes("intel") ||
        renderer.includes("mesa") ||
        renderer.includes("swiftshader");

      // Device memory check (if available)
      const deviceMemory = (navigator as any).deviceMemory || 4;

      // CPU cores check
      const cpuCores = navigator.hardwareConcurrency || 4;

      // Screen resolution check
      const pixelRatio = window.devicePixelRatio || 1;
      const screenResolution =
        window.screen.width * window.screen.height * pixelRatio;

      // Performance check using requestAnimationFrame
      if (!performanceCheckRef.current) {
        performanceCheckRef.current = true;

        let frameCount = 0;
        let lastTime = performance.now();
        const measurePerformance = (timestamp: number) => {
          frameCount++;

          if (timestamp - lastTime >= 1000) {
            // Check after 1 second
            const fps = frameCount;
            const performanceScore = calculatePerformanceScore(
              fps,
              deviceMemory,
              cpuCores,
              screenResolution,
              isLowEndGPU,
              isMobileDevice
            );

            setPerformanceScore(performanceScore);
            console.log(performanceScore);
            setCanHandle3D(performanceScore >= 30); // Threshold can be adjusted
            return;
          }

          requestAnimationFrame(measurePerformance);
        };

        requestAnimationFrame(measurePerformance);
      }
    };

    const calculatePerformanceScore = (
      fps: number,
      memory: number,
      cores: number,
      resolution: number,
      isLowEndGPU: boolean,
      isMobile: boolean
    ): number => {
      // Base score from FPS (max 40 points)
      let score = Math.min(40, (fps / 60) * 40);

      // Memory score (max 20 points)
      score += Math.min(20, (memory / 8) * 20);

      // CPU score (max 20 points)
      score += Math.min(20, (cores / 8) * 20);

      // Resolution penalty for very high-res screens
      const resolutionPenalty =
        resolution > 1920 * 1080
          ? Math.min(10, ((resolution - 1920 * 1080) / (3840 * 2160)) * 10)
          : 0;
      score -= resolutionPenalty;

      // GPU penalty
      if (isLowEndGPU) score *= 0.8;

      // Mobile penalty
      if (isMobile) score *= 0.9;

      return Math.round(score);
    };

    // Run the check
    checkDeviceCapabilities();

    // Cleanup
    return () => {
      performanceCheckRef.current = false;
    };
  }, []);

  // Performance monitoring during 3D scene usage
  useEffect(() => {
    if (!canHandle3D || !isSplineLoaded) return;

    let frameCount = 0;
    let lastCheck = performance.now();
    let lowPerformanceStrikes = 0;
    const MAX_STRIKES = 3;

    const monitorPerformance = (timestamp: number) => {
      frameCount++;

      if (timestamp - lastCheck >= 1000) {
        const currentFPS = frameCount;

        if (currentFPS < 30) {
          lowPerformanceStrikes++;

          if (lowPerformanceStrikes >= MAX_STRIKES) {
            setCanHandle3D(false);
            return;
          }
        } else {
          lowPerformanceStrikes = Math.max(0, lowPerformanceStrikes - 1);
        }

        frameCount = 0;
        lastCheck = timestamp;
      }

      if (canHandle3D) {
        requestAnimationFrame(monitorPerformance);
      }
    };

    requestAnimationFrame(monitorPerformance);

    return () => {
      // Cleanup
    };
  }, [canHandle3D, isSplineLoaded]);

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
          style={{
            boxShadow: "#9B99FF 0px 0px 150px 90px",
            background: "#9B99FF",
          }}
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
      spline.setZoom(0.8);
    }
  };

  const Fallback = () => (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <Image
        src={HeroGif} // Replace with your fallback GIF path
        alt="3D Animation Fallback"
        width={500}
        height={500}
        className="relative z-10 w-full flex items-center justify-center scale-75 sm:scale-100 md:pt-16 overflow-visible min-w-[24rem] sm:min-w-[25rem] md:min-w-[30rem]"
      />
    </div>
  );

  return (
    <div className="min-h-[40rem] max-w-screen-2xl mx-auto text-white p-6 md:p-12 flex flex-col">
      <main className="flex-grow flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 font-inter max-h-[50rem]">
        {/* Content Section - Same as before */}
        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-5/6 space-y-8 text-center lg:text-left"
        >
          <motion.header variants={itemVariants} className="mb-2 mt-8">
            <button className="rounded-full p-[1px] bg-gradient-to-r to-blue-700 from-purple-600 transform transition-transform hover:scale-105 animate-shimmer">
              <span className="bg-[#030303] flex flex-row gap-1 items-center justify-center text-xs md:text-sm rounded-full px-4 py-1.5 font-medium hover:bg-opacity-80 transition-colors">
                Magnimont V2 {performanceScore} <ChevronRight size={"16"} />
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

        {/* Hero Media Section */}
        <div className="w-full lg:w-1/2 h-2/4 md:h-full flex items-center justify-center relative -z-10 max-h-[17rem] pt-64 lg:pt-0 lg:max-h-[50rem] lg:min-h-[50rem]">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.0000001] h-[0.0000001] rounded-full animate-pulse -z-10"
            style={{
              boxShadow: "#9B99FF 0px 0px 290px 170px",
              background: "#9B99FF",
            }}
          />

          <AnimatePresence>
            {!isSplineLoaded && canHandle3D && <LoadingAnimation />}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isSplineLoaded || !canHandle3D ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="max-h-[40rem] flex justify-center items-center overflow-hidden"
          >
            {canHandle3D ? (
              <Spline
                className="w-full flex items-center justify-center scale-75 sm:scale-100 pt-16"
                style={{ overflow: "visible" }}
                scene="https://prod.spline.design/WUmILM0xKzQjygfB/scene.splinecode"
                onLoad={onSplineLoad}
              />
            ) : (
              <Fallback />
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
