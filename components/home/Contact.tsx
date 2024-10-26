"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [greeting, setGreeting] = useState("Get in touch");

  const updateGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday

    // Check if it's weekend
    if (day === 0 || day === 6) {
      setGreeting("Get in touch this Weekend");
      return;
    }

    // Time-based greetings
    if (hour >= 5 && hour < 12) {
      setGreeting("Get in touch this Morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Get in touch this Afternoon");
    } else if (hour >= 17 && hour < 22) {
      setGreeting("Get in touch this Evening");
    } else {
      setGreeting("Get in touch Tonight");
    }
  };

  useEffect(() => {
    // Initial update
    updateGreeting();

    // Update greeting every minute
    const interval = setInterval(updateGreeting, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-[50rem] flex justify-center p-4 max-w-screen-2xl mx-auto">
      <div className="w-full max-w-6xl">
        <h1 className="text-6xl md:text-7xl font-medium mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-transparent">
          {greeting}
        </h1>
        <div className="grid md:grid-cols-2 gap-8 text-lg">
          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-[#3b58ff75] via-[#403dfa56] to-[#471cf523] backdrop-blur-md border-none text-center">
              <CardHeader>
                <CardTitle className="text-white text-3xl">
                  Hire us Directly from
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button
                  variant="ghost"
                  className="w-full py-8 text-center bg-[#fff]/5 hover:bg-[#fff]/10 text-white"
                >
                  <span className="flex items-center text-2xl">
                    <Image
                      width={30}
                      height={30}
                      src="/home/fiver.png"
                      alt="Fiverr"
                      className="w-8 h-8 mr-2"
                    />
                    Fiverr
                  </span>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full py-8 text-center bg-[#fff]/5 hover:bg-[#fff]/10 text-white"
                >
                  <span className="flex items-center text-2xl">
                    <Image
                      width={30}
                      height={30}
                      src="/home/upwork.png"
                      alt="Upwork"
                      className="w-8 h-8 mr-2"
                    />
                    Upwork
                  </span>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-none relative overflow-hidden py-16 hover:bg-[#1a1a2e]/80">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50 blur-lg"></div>
              <div className="absolute inset-[1px] bg-black rounded-[inherit]"></div>
              <CardContent className="relative space-y-6 p-6">
                <Button
                  variant="ghost"
                  className="w-full bg-transparent hover:bg-transparent text-white"
                >
                  BOOK US FOR CONSULTATION{" "}
                  <ArrowUpRight className="inline ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card className="w-full bg-[#0a0a1e] space-y-8">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-xs text-gray-400"
                    >
                      First name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-transparent p-8 text-white border border-gray-700 rounded-md focus:border-blue-500 focus:ring-0"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs text-gray-400">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-transparent p-8 text-white border border-gray-700 rounded-md focus:border-blue-500 focus:ring-0"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    aria-required="true"
                    className="text-xs text-gray-400"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent p-8 text-white border border-gray-700 rounded-md focus:border-blue-500 focus:ring-0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your message here"
                    className="bg-transparent p-8 text-white border border-gray-700 rounded-md focus:border-blue-500 focus:ring-0 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-8 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold px-4 rounded-md transition duration-300 ease-in-out"
                >
                  SUBMIT
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
