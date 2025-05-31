"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";
import { motion } from "framer-motion";

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
          after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white/10 
          after:transition-opacity after:duration-300 after:ease-in-out`}
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
          <Link href="/" className="flex items-center">
            <Image
              width={39}
              height={35}
              src="/images/logo.png"
              alt="Magnimont Logo"
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
            <Button variant="ghost" className="p-0 md:hidden" size="icon"> 
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full h-[100dvh] border-none bg-black p-0"
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center p-6 border-b border-white/[0.08]">
<<<<<<< Updated upstream
                <span className="text-xl font-semibold font-calsans text-white">
=======
                <span 
                  className="text-xl font-semibold"
                  style={{
                    ...gradientTextStyles,
                    fontFamily: 'Calsans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                  }}
                >
>>>>>>> Stashed changes
                  Magnimont
                </span>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-4">
                  <SheetTrigger asChild>
                    <Link href="/get-started"><Button
                      variant="outline"
                      size="lg"
                      className="w-full bg-white text-black hover:bg-white/90"
                    >
                      Get Started <ChevronRight className="ml-2 h-4 w-4" />
                    </Button></Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Button variant={"ghost"} className="w-full ">
                      Forums <ChevronRight />
                    </Button>
                  </SheetTrigger>
                  <nav className="border-t border-white/[0.08]">
                    {mobileMenuItems.map((item) => (
                      <Link
                        href={item.href}
                        className="flex w-full items-center justify-between px-6 py-4 text-white/60 hover:text-white border-b border-white/[0.08] transition-colors"
                        key={item.href}
                      >
                        <SheetTrigger>{item.text}</SheetTrigger>
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
              <Link href={item.href} className="hover:text-white transition">
                {item.text}
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
        ><Link href="/get-started">
          <Button variant="default" className="rounded-full">
            Get Started <ChevronRight className="ml-2 h-4 w-4" />
          </Button></Link>
        </motion.div>
      </nav>
    </motion.div>
  );
}
