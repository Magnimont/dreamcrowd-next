"use client"
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    // Initial check
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-[40rem] max-w-screen-xl mx-auto text-white p-6 md:p-12 flex flex-col">
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 font-inter">
        <div className="lg:w-1/2 space-y-8">
          <header className="mb-2 mt-8">
            <button className="rounded-full p-[1px] bg-gradient-to-r to-blue-700 from-purple-600">
              <span className="block bg-[#030303] text-xs md:text-sm rounded-full px-4 py-1.5 font-medium hover:bg-opacity-80 transition-colors">
                Magnimont V2 &rarr;
              </span>
            </button>
          </header>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
              Software
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
              for Ventures
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
            At Magnimont, we blend innovation with expertise to create tailored
            tech solutions that drive your business forward. From digital
            transformation to scalable growth, we&apos;re your partner in
            progress.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-gradient-to-r text-black bg-white rounded-full px-8 py-3 text-sm md:text-base font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="rounded-full p-[1px] bg-gradient-to-r">
              <span className="block bg-[#030303] rounded-full px-7 py-2.5 text-sm md:text-base font-medium hover:bg-opacity-80 transition-colors">
                Forums &rarr;
              </span>
            </button>
          </div>
        </div>

        {/* Hero Media */}
        <div className="lg:w-1/2 h-[600px] relative flex items-center justify-center">
          {isMobileOrTablet ? (
            // Video for mobile/tablet view
            <video
              src="home/hexagons.mp4" // Replace with the path to your video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                background: "transparent",
              }}
            />
          ) : (
            // Spline model for desktop view
            <div className="relative w-full max-w-2xl aspect-square">
              {/* Glow effect */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-0"
                style={{
                  boxShadow: "#9B99FF 0px 0px 160px 60px",
                  background: "#9B99FF",
                }}
              />

              {/* Spline container */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <Spline
                  scene="https://prod.spline.design/o76QGK9E7uoqyn61/scene.splinecode"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    position: "relative",
                  }}
                  className="flex items-center justify-center"
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
