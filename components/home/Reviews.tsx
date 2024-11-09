"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";


export default function Reviews() {
  return (
    <div id="testimonials" className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials2}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "mangekyo sharingan ayo see ma amateratsu",
    name: "Chelsey Childers",
    title: "Anime girl",
    image: "/reviews/ChelseyChilders.webp", // You'll need to add actual image paths
  },
  {
    quote:
      "hi",
    name: "Kish Kuruppath",
    title: "Purav Jha ",
    image: "/reviews/KishKuruppath.webp",
  },
  {
    quote:
      "kya re bidu jake ciggerate lana!!",
    name: "Varun Dosapati",
    title: "Kapil sharma 2.0",
    image: "/reviews/VarunDosapati.webp",
  },
  {
    quote:
      "İ have no idea about this website but it's good to see what they discovered for the future and helping the nation with great skills good to be part of the team",
    name: "Bilal Bhat",
    title: "Turkey",
    image: "/reviews/BilalBhat.webp",
  },
];
const testimonials2 = [
  {
    quote:
      "İ have no idea about this website but it's good to see what they discovered for the future and helping the nation with great skills good to be part of the team",
    name: "Bilal Bhat",
    title: "Turkey",
    image: "/reviews/BilalBhat.webp",
  },
  {
    quote:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success (as in Roaring Drunk)",
    name: "Jane Cooper",
    title: "Marketing Coordinator",
    image: "/placeholder.svg",
  },
  {
    quote:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success (as in Roaring Drunk)",
    name: "Jane Cooper",
    title: "Marketing Coordinator",
    image: "/placeholder.svg",
  },
];
