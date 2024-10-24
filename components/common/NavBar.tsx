"use client"
// components/Navbar.jsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, MoveRight } from 'lucide-react';

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent max-w-screen-xl mx-auto pt-5 flex justify-between items-center px-4">
      {/* Logo and Branding */}
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

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button onClick={toggleHamburger} className="focus:outline-none">
          {/* Hamburger Icon */}
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:space-x-8 text-white font-inter">
        <li>
          <Link href="/" className="hover:text-amber-200 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="#services" className="hover:text-amber-200 transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="#testimonials" className="hover:text-amber-200 transition">
            Testimonials
          </Link>
        </li>
        <li>
          <Link href="#pricing" className="hover:text-amber-200 transition">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="#faq" className="hover:text-amber-200 transition">
            FAQ
          </Link>
        </li>
      </ul>

      {/* Get Started Button (Desktop) */}
      <div className="hidden md:block">
        <Button variant="default">Get Started <ChevronRight/></Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-black text-white font-inter space-y-4 p-4">
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
            <Button variant="default" className="w-full">Get Started <ChevronRight/></Button>
          </li>
        </ul>
      )}
    </nav>
  );
}
