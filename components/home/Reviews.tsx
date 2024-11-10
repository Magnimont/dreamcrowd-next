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
      "We wish to thank Vikas Nath and his team at Magnimont for delivering our platform ahead of schedule. We transitioned smoothly thanks to the level of precision and the clean code. Could not recommend them more & I would 100% work with them again!",
    name: "Chelsey Childers",
    // title: "Anime girl",
    image: "/reviews/ChelseyChilders.webp", // You'll need to add actual image paths
  },
  {
    quote:
      "Choosing to partner with Magnimont for implementation of AI was indeed our smartest decision. They have a professional, responsive and technically brilliant team. They took it from our idea to reality without exceeding our budget.",
    name: "Kish Kuruppath",
    // title: "Purav Jha ",
    image: "/reviews/KishKuruppath.webp",
  },
  {
    quote:
      "Superb job of making web Divisions! Magnimont brought new life to our old site by creating a sharp design, fast-loading site that appeals to our customers. It is simply a testament to their experience in UI/UX.",
    name: "Varun Dosapati",
    // title: "Kapil sharma 2.0",
    image: "/reviews/VarunDosapati.webp",
  },
  {
    quote:
      "İ have no idea about this website but it's good to see what they discovered for the future and helping the nation with great skills good to be part of the team",
    name: "Bilal Bhat",
    // title: "Turkey",
    image: "/reviews/BilalBhat.webp",
  },
];
const testimonials2 = [
  {
    quote:
      "We saw 40% more conversions with the website Magnimont delivered for us. They are in tune with business needs.",
    name: "Rakesh Rangori",
    // title: "Turkey",
    image: "/reviews/RakeshRangori.webp",
  },
  {
    quote:
      " Right from ideation to execution, Vikas Nath and his team at Magnimont have exceeded expectations. There code quality and documentation is really great. We are already onto our second project with them",
    name: "Shashwat Poddar",
    // title: "Marketing Coordinator",
    image: "/reviews/ShashwatPoddar.webp",
  },
  {
    quote:
      "Vikas and the Magnimont team are exceptional at what they do. They built our custom software exactly to specification. ",
    name: "Shashikant Chaubey",
    // title: "Marketing Coordinator",
    image: "/reviews/ShashikantChaubey.webp",
  },
];
