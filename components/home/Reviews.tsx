"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";

export default function Reviews() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
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
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success (as in Roaring Drunk)",
    name: "Jane Cooper",
    title: "Marketing Coordinator",
    image: "/placeholder.svg", // You'll need to add actual image paths
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
  {
    quote:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success (as in Roaring Drunk)",
    name: "Jane Cooper",
    title: "Marketing Coordinator",
    image: "/placeholder.svg",
  },
];
const testimonials2 = [
  {
    quote:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success (as in Roaring Drunk)",
    name: "Jane Cooper",
    title: "Marketing Coordinator",
    image: "/placeholder.svg", // You'll need to add actual image paths
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
  {
    quote:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success (as in Roaring Drunk)",
    name: "Jane Cooper",
    title: "Marketing Coordinator",
    image: "/placeholder.svg",
  },
];
