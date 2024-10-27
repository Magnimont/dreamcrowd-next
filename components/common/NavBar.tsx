"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-screen z-50 top-0 left-0"
    >
      <nav className={`max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4 transition-all duration-300 ease-in-out after:opacity-100
        ${hasScrolled ? 'after:opacity-100' : 'md:after:opacity-0'} 
        after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white/10 
        after:transition-opacity after:duration-300 after:ease-in-out`}>
        
        {/* Premium glass effect background with transition */}
        <div className={`absolute top-0 left-0 w-full h-full -z-20 transition-all duration-300 ease-in-out opacity-100 backdrop-blur-md bg-[#000000b6]
          ${hasScrolled ? 'opacity-100 backdrop-blur-md bg-[#00000080]' : 'md:opacity-0 md:blur-none md:bg-transparent'}
          before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-white/[0.08] before:to-white/[0.02]`}>
        </div>
        
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
            <span className="self-center whitespace-nowrap text-xl font-semibold font-calsans text-white ml-2">
              Magnimont
            </span>
          </Link>
        </motion.div>

        {/* Mobile Hamburger Button */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden"
        >
          <button onClick={toggleHamburger} className="focus:outline-none">
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex md:space-x-8 text-[#999CA1] font-inter"
        >
          <li>
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-white transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:text-white transition">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:text-white transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#faq" className="hover:text-white transition">
              FAQ
            </Link>
          </li>
        </motion.ul>

        {/* Get Started Button (Desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:block"
        >
          <Button variant="default" className="rounded-full">
            Get Started <ChevronRight />
          </Button>
        </motion.div>

        {/* Mobile Menu with glass effect */}
        {isOpen && (
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[4.4rem] left-0 w-full backdrop-blur-lg bg-black/80 text-[#999CA1] font-inter space-y-4 p-4
              border-t border-white/[0.08] shadow-lg"
          >
            <li>
              <Link href="/" className="block" onClick={toggleHamburger}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="block" onClick={toggleHamburger}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="block" onClick={toggleHamburger}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="block" onClick={toggleHamburger}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#faq" className="block" onClick={toggleHamburger}>
                FAQ
              </Link>
            </li>
            <li>
              <Button variant="default" className="w-full">
                Get Started <ChevronRight />
              </Button>
            </li>
          </motion.ul>
        )}
      </nav>
    </motion.div>
  );
}