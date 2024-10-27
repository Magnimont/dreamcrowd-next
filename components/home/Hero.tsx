"use client";
import { useEffect, useState, useRef, Suspense } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

// Dynamically import Spline with no SSR
const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
});

export default function Hero() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const splineContainerRef = useRef(null);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  // Debounced resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    const debouncedHandleResize = debounce(handleResize, 150);

    handleResize();
    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  // Debounce utility function
  function debounce(fn: Function, ms: number) {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  // Handle Spline load
  const onSplineLoad = (spline: any) => {
    setIsSplineLoaded(true);
    // Optional: Implement any performance optimizations here
    if (spline) {
      // Reduce quality settings for better performance
      spline.setZoom(0.8); // Reduce zoom level
      spline.setPixelRatio(Math.min(1.5, window.devicePixelRatio)); // Limit pixel ratio
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
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
          {/* Header content remains the same */}
          <motion.header variants={itemVariants} className="mb-2 mt-8">
            <button className="rounded-full p-[1px] bg-gradient-to-r to-blue-700 from-purple-600 transform transition-transform hover:scale-105 animate-shimmer">
              <span className="bg-[#030303] flex flex-row gap-1 items-center justify-center text-xs md:text-sm rounded-full px-4 py-1.5 font-medium hover:bg-opacity-80 transition-colors">
                Magnimont V2 <ChevronRight size={"16"} />
              </span>
            </button>
          </motion.header>

          {/* Title and other content remains the same */}
          {/* ... */}
        </motion.div>

        {/* Spline Container */}
        <div 
          ref={splineContainerRef}
          className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative flex items-center justify-center"
        >
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
                style={{ background: "transparent" }}
              />
            </motion.div>
          ) : (
            <div className="relative w-full max-w-2xl aspect-square">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              }>
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <Spline
                    scene="https://prod.spline.design/qAeSAPc3a3AhaGlf/scene.splinecode"
                    onLoad={onSplineLoad}
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'transparent',
                      position: 'relative',
                    }}
                    className="flex items-center justify-center w-full scale-[.25] sm:scale-[.35] lg:scale-[.5] md:justify-start"
                  />
                </div>
              </Suspense>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}