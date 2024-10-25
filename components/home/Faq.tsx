"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Faq() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqItems = [
    { question: "What is outreach AI?", answer: "Answer for outreach AI..." },
    {
      question: "What is AI personalization?",
      answer: "Answer for AI personalization...",
    },
    {
      question: "What's the impact of AI on prospecting?",
      answer: "Answer for AI impact on prospecting...",
    },
    {
      question: "Can AI replace human interaction in outreach?",
      answer: "Answer about AI replacing human interaction...",
    },
    {
      question: "How does AI improve outreach effectiveness?",
      answer: "Answer about AI improving outreach effectiveness...",
    },
    {
      question: "What are the benefits of using AI in outreach?",
      answer: "Answer about benefits of AI in outreach...",
    },
    {
      question: "Can AI help in optimizing outreach campaigns?",
      answer: "Answer about AI optimizing outreach campaigns...",
    },
    {
      question: "How to generate personalized campaigns with lemlist AI?",
      answer: "Answer about generating personalized campaigns...",
    },
  ];

  const handleItemToggle = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value) 
        ? [] 
        : [value] 
    );
  };

  return (
    <div className="relative px-4 py-12 sm:px-6 lg:px-8 lg:min-h-[50rem] min-h-[60rem] max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-[linear-gradient(150deg,#fff_50%,transparent_100%)]">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h2>
          <div className="relative w-full aspect-square max-w-[300px] mx-auto lg:mx-0">
            <Image
              src={"/home/faq1.png"}
              alt="FAQ Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3">
          <Accordion
            type="multiple"
            value={openItems}
            className="w-full space-y-3 sm:space-y-4"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <AccordionTrigger
                  onClick={() => handleItemToggle(`item-${index}`)}
                  className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-left bg-muted/10 hover:bg-muted/25 transition-colors"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-muted/10">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="hidden sm:block absolute top-0 -z-10 right-0 w-32 sm:w-48 h-32 sm:h-48 overflow-hidden">
        <Image
          src={"/home/faq2.png"}
          alt="FAQ Image 2"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}