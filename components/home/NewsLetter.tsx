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
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Subscribe to our newsletter
        </h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus amet
          dui quam vitae quis leo.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow bg-gray-800 py-8 px-6 rounded-full border-gray-700 text-white placeholder-gray-400"
            required
          />
          <Button
            type="submit"
            className="bg-gradient-to-r py-8 from-purple-500 to-blue-500 text-white font-medium px-6 rounded-full hover:opacity-90 transition-opacity"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
