"use client";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { AnimatePresence, motion } from "framer-motion";
import { Application } from "@splinetool/runtime";

import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const gradientTextStyles = {
  background: `linear-gradient(
    130deg,
    hsl(270deg 73% 35%) 0%,
    hsl(271deg 79% 28%) 14%,
    hsl(272deg 89% 21%) 24%,
    hsl(271deg 98% 15%) 32%,
    hsl(272deg 75% 23%) 40%,
    hsl(273deg 58% 37%) 47%,
    hsl(273deg 53% 51%) 54%,
    hsl(273deg 61% 55%) 60%,
    hsl(272deg 56% 48%) 67%,
    hsl(271deg 64% 40%) 73%,
    hsl(270deg 74% 34%) 80%,
    hsl(271deg 76% 30%) 86%,
    hsl(271deg 80% 27%) 93%,
    hsl(271deg 85% 23%) 100%
  )`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}

const Hero: React.FC = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState<boolean>(false);

  // Only render fullscreen 3D Spline
  const onSplineLoad = (spline: Application): void => {
    setIsSplineLoaded(true);
    if (spline) {
      // spline.setZoom(0.8);
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black z-40 flex items-center justify-center relative">
      
      {/* 3d stuff */}
      <div className="w-full h-full flex items-center justify-center"> {/* Container for 3D element */}
        <AnimatePresence>
          {!isSplineLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative flex gap-2">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="w-3 h-3 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSplineLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          style={{ overflow: 'hidden' }}
        >
          <Spline
            className="w-full h-full"
            style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
            scene="https://prod.spline.design/pHX39Qf8c8Euunae/scene.splinecode"
            onLoad={onSplineLoad}
          />
        </motion.div>
      </div>

      {/* The content */}
      <div
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-start"
        style={{ paddingTop: '15vh' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium leading-tight text-center mb-6">
            <span>Hosting</span>
            <br />
            <span style={gradientTextStyles}>for ventures</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Scalable, secure, and lightning-fast hosting solutions designed for ambitious startups and growing businesses. 
            <span className="text-white/90"> Deploy with confidence.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              className="rounded-full font-medium text-black border-0 hover:scale-105 transition-all duration-300 relative overflow-hidden group px-8 py-3 text-lg"
              style={{ 
                background: `linear-gradient(
                  130deg,
                  hsl(270deg 73% 35%) 0%,
                  hsl(271deg 79% 28%) 14%,
                  hsl(272deg 89% 21%) 24%,
                  hsl(271deg 98% 15%) 32%,
                  hsl(272deg 75% 23%) 40%,
                  hsl(273deg 58% 37%) 47%,
                  hsl(273deg 53% 51%) 54%,
                  hsl(273deg 61% 55%) 60%,
                  hsl(272deg 56% 48%) 67%,
                  hsl(271deg 64% 40%) 73%,
                  hsl(270deg 74% 34%) 80%,
                  hsl(271deg 76% 30%) 86%,
                  hsl(271deg 80% 27%) 93%,
                  hsl(271deg 85% 23%) 100%
                )`
              }}
            >
              <span className="relative z-10 flex items-center">
                Start Your Journey
                <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
            
            <Button 
              variant="ghost" 
              className="rounded-full font-medium text-white/80 border border-white/20 hover:bg-white/10 hover:text-white transition-all duration-300 px-8 py-3 text-lg"
            >
              View Plans
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
