"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function Reviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="testimonials" className="relative min-h-[50rem] bg-[#030303] py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-6 py-2 border border-teal-500/30">
              <span className="text-sm font-medium text-teal-300">Client Success Stories</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            What Our Clients
            <br />
            <span style={gradientTextStyles}>Say About Us</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their experience working with Magnimont.
          </p>

        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="mb-8"
          />
          <InfiniteMovingCards
            items={testimonials2}
            direction="left"
            speed="slow"
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-teal-300 text-sm font-medium mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-teal-400"></div>
            Ready to join our success stories?
            <div className="w-8 h-px bg-gradient-to-r from-teal-400 to-transparent"></div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "We wish to thank Vikas Nath and his team at Magnimont for delivering our platform ahead of schedule. We transitioned smoothly thanks to the level of precision and the clean code. Could not recommend them more & I would 100% work with them again!",
    name: "Chelsey Childers",
    title: "Project Manager",
    image: "/reviews/ChelseyChilders.webp",
    rating: 5,
    company: "TechFlow Solutions"
  },
  {
    quote:
      "Choosing to partner with Magnimont for implementation of AI was indeed our smartest decision. They have a professional, responsive and technically brilliant team. They took it from our idea to reality without exceeding our budget.",
    name: "Kish Kuruppath",
    title: "CTO",
    image: "/reviews/KishKuruppath.webp",
    rating: 5,
    company: "InnovateAI"
  },
  {
    quote:
      "Superb job of making web applications! Magnimont brought new life to our old site by creating a sharp design, fast-loading site that appeals to our customers. It is simply a testament to their experience in UI/UX.",
    name: "Varun Dosapati",
    title: "Marketing Director",
    image: "/reviews/VarunDosapati.webp",
    rating: 5,
    company: "Digital Dynamics"
  },
  {
    quote:
      "Working with Magnimont has been an incredible experience. Their attention to detail and commitment to delivering quality solutions is unmatched. They truly understand what it takes to build great software.",
    name: "Bilal Bhat",
    title: "Founder",
    image: "/reviews/BilalBhat.webp",
    rating: 5,
    company: "StartupVenture"
  },
];

const testimonials2 = [
  {
    quote:
      "We saw 40% more conversions with the website Magnimont delivered for us. They are in tune with business needs and deliver solutions that actually drive results.",
    name: "Rakesh Rangori",
    title: "Business Owner",
    image: "/reviews/RakeshRangori.webp",
    rating: 5,
    company: "Growth Enterprises"
  },
  {
    quote:
      "Right from ideation to execution, Vikas Nath and his team at Magnimont have exceeded expectations. Their code quality and documentation is really great. We are already onto our second project with them.",
    name: "Shashwat Poddar",
    title: "Product Manager",
    image: "/reviews/ShashwatPoddar.webp",
    rating: 5,
    company: "ProductCorp"
  },
  {
    quote:
      "Vikas and the Magnimont team are exceptional at what they do. They built our custom software exactly to specification and delivered on time. Professional service from start to finish.",
    name: "Shashikant Chaubey",
    title: "Operations Director",
    image: "/reviews/ShashikantChaubey.webp",
    rating: 5,
    company: "OptiSystems"
  },
];
