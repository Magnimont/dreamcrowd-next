"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NewsLetter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    // Add your subscription logic here
  };

  return (
<div className="relative min-h-[30rem] w-full my-6 py-16 px-4 max-w-screen-2xl mx-auto">
  {/* Background grid with inner borders */}
  <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20 opacity-[0.02]" />

  {/* Left decorative element */}
  <div className="hidden sm:block absolute top-0 -z-10 right-0 w-32 sm:w-56 h-32 sm:h-48 overflow-hidden">
    <Image
      src={"/home/news1.png"}
      alt="FAQ Image 2"
      fill
      className="object-contain"
    />
  </div>

  {/* Right decorative element */}
  <div className="hidden sm:block absolute bottom-0 -z-10 left-0 w-32 sm:w-56 h-32 sm:h-48 overflow-hidden">
    <Image
      src={"/home/news2.png"}
      alt="FAQ Image 2"
      fill
      className="object-contain"
    />
  </div>

  <div className="max-w-3xl mx-auto text-center relative z-10">
    <h2 className="text-3xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#4a90e2] via-white to-transparent">
      Stay Ahead in Tech Innovation
    </h2>
    <p className="text-gray-400 mb-12 max-w-xl mx-auto">
      Get exclusive insights on AI, digital transformation, and tech trends delivered straight to your inbox. Join innovators who lead the future.
    </p>

    <div className="relative group ">
      <div className="absolute -inset-1 bg-gradient-to-br from-[#1a237e] via-[#4a90e2] to-[#82b1ff] rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
      
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col sm:flex-row gap-4 bg-[#030303] p-2 rounded-full"
      >
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow bg-[#1a237e]/30 py-8 px-6 rounded-full border-gray-700 
            text-white placeholder-gray-400 focus:border-[#4a90e2] focus:ring-1 
            focus:ring-[#4a90e2] transition-all duration-300"
          required
        />
        <Button
          type="submit"
          className="bg-gradient-to-br from-[#1a237e] via-[#4a90e2] to-[#82b1ff] 
            text-white font-medium px-8 py-8 rounded-full hover:scale-[1.02] 
            hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500"
        >
          Subscribe
        </Button>
      </form>
    </div>
  </div>
</div>

  );
}
