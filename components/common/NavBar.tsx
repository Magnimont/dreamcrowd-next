"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";
import { motion } from "framer-motion";

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}

const buttonGradientBg = `linear-gradient(135deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 15%, hsl(163deg 59% 28%) 30%, hsl(163deg 98% 19%) 45%, hsl(173deg 99% 24%) 60%, hsl(176deg 99% 28%) 75%, hsl(178deg 100% 31%) 90%, hsl(179deg 99% 31%) 100%)`;

export default function NavbarComponent() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuItems = [
    { href: "/", text: "Home" },
    { href: "/#about", text: "About" },
    { href: "/#services", text: "Services" },
    { href: "/#portfolio", text: "Portfolio" },
    { href: "/#testimonials", text: "Testimonials" },
    { href: "/#faqs", text: "Faqs" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-screen z-50 top-0 left-0"
    >
      <nav
        className={`max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4 transition-all duration-300 ease-in-out after:opacity-100
          ${hasScrolled ? "after:opacity-100" : "md:after:opacity-0"} 
          after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
          after:transition-opacity after:duration-300 after:ease-in-out`}
        style={{
          '--after-bg': hasScrolled 
            ? 'linear-gradient(90deg, transparent 0%, hsl(166deg 48% 37%) 20%, hsl(178deg 100% 31%) 50%, hsl(183deg 99% 20%) 80%, transparent 100%)'
            : 'rgba(255, 255, 255, 0.1)'
        } as React.CSSProperties}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full -z-20 transition-all duration-300 ease-in-out opacity-100 backdrop-blur-md bg-[#000000b6]
            ${
              hasScrolled
                ? "opacity-100 backdrop-blur-md bg-[#00000080]"
                : "md:opacity-0 md:blur-none md:bg-transparent"
            }
            before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-white/[0.08] before:to-white/[0.02]`}
        ></div>

        {/* Logo - FIXED VERSION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center group">
            <Image
              width={39}
              height={35}
              src="/images/logo.png"
              alt="Magnimont Logo"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span 
              className="self-center whitespace-nowrap text-xl font-semibold text-white ml-2 transition-all duration-300"
              style={{
                fontFamily: 'Calsans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                fontFeatureSettings: '"kern" 1',
                fontOpticalSizing: 'auto',
              }}
            >
              Magnimont
            </span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="p-0 md:hidden hover:bg-transparent" size="icon"> 
              <div className="relative">
                <Menu className="h-6 w-6 text-white transition-all duration-300 hover:opacity-0" />
                <Menu 
                  className="h-6 w-6 absolute top-0 left-0 opacity-0 transition-all duration-300 hover:opacity-100" 
                  style={{ color: 'hsl(178deg 100% 31%)' }}
                />
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full h-[100dvh] border-none bg-black p-0"
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center p-6 border-b border-white/[0.08]">
                <span 
                  className="text-xl font-semibold"
                  style={{
                    ...gradientTextStyles,
                    fontFamily: 'Calsans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                  }}
                >
                  Magnimont
                </span>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-4">
                  <SheetTrigger asChild>
                    <Link href="/get-started">
                      <Button
                        size="lg"
                        className="w-full text-black font-medium border-0 hover:scale-105 transition-all duration-300 relative overflow-hidden"
                        style={{ background: buttonGradientBg }}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          Get Started <span style={{ marginLeft: '8px' }}>›</span>
                        </span>
                      </Button>
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Button variant={"ghost"} className="w-full hover:bg-white/5 transition-all duration-300">
                      <span className="flex items-center justify-center w-full">
                        Forums <span style={gradientTextStyles} className="ml-2">›</span>
                      </span>
                    </Button>
                  </SheetTrigger>
                  <nav className="border-t border-white/[0.08]">
                    {mobileMenuItems.map((item) => (
                      <Link
                        href={item.href}
                        className="flex w-full items-center justify-between px-6 py-4 text-white/60 hover:text-white border-b border-white/[0.08] transition-all duration-300 hover:bg-white/[0.02] group"
                        key={item.href}
                      >
                        <SheetTrigger className="flex items-center justify-between w-full">
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{item.text}</span>
                          <span style={gradientTextStyles} className="opacity-0 group-hover:opacity-100 transition-all duration-300">›</span>
                        </SheetTrigger>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex md:space-x-8 text-[#999CA1] font-inter"
        >
          {mobileMenuItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="hover:text-white transition-all duration-300 relative group"
              >
                <span className="group-hover:opacity-0 transition-opacity duration-300">{item.text}</span>
                <span 
                  className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={gradientTextStyles}
                >
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Get Started Button (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:block"
        >
          <Link href="/get-started">
            <Button 
              className="rounded-full font-medium text-black border-0 hover:scale-105 transition-all duration-300 relative overflow-hidden group px-6"
              style={{ background: buttonGradientBg }}
            >
              <span className="relative z-10 flex items-center">
                Get Started 
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
              </span>
            </Button>
          </Link>
        </motion.div>
      </nav>
    </motion.div>
  );
}
