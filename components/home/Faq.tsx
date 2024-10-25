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
        ? [] // If clicking on already open item, close it
        : [value] // Otherwise, open only this item
    );
};

  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-start justify-between p-8 min-h-screen text-white relative">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-[linear-gradient(150deg,#fff_50%,transparent_100%)]">
          Frequently
          <br />
          Asked
          <br />
          Questions
        </h2>
        <div className="relative w-full h-64 md:h-72">
          <Image
            src={"/home/faq1.png"}
            alt="FAQ Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="md:w-2/3">
        <Accordion
          type="multiple"
          value={openItems}
          className="w-full space-y-4"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <AccordionTrigger
                onClick={() => handleItemToggle(`item-${index}`)}
                className="px-6 py-4 bg-muted/10 hover:bg-muted/25 transition-colors"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-muted/10">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="absolute top-0 -z-10 -right-8 w-48 h-48 overflow-hidden">
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
