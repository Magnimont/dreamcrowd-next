"use client";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const gradientTextStyles = {
  background: `linear-gradient(
    130deg,
    hsl(270deg 73% 35%) 0%,
    hsl(271deg 79% 28%) 14%,
    hsl(272deg 89% 21%) 24%,
    hsl(271deg 98% 15%) 32%,
    hsl(272deg 75% 23%) 40%,
    hsl(273deg 58% 37%) 47%,
    hsl(273deg 53% 51%) 54%,
    hsl(273deg 61% 55%) 60%,
    hsl(272deg 56% 48%) 67%,
    hsl(271deg 64% 40%) 73%,
    hsl(270deg 74% 34%) 80%,
    hsl(271deg 76% 30%) 86%,
    hsl(271deg 80% 27%) 93%,
    hsl(271deg 85% 23%) 100%
  )`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    quote: "The Dokploy-based dashboard is incredibly intuitive. We migrated from Heroku and the transition was seamless. Our deployment time went from 10 minutes to under 2 minutes.",
    highlight: "10x faster deployments"
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer",
    company: "StartupLab",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    quote: "Finally, a hosting platform that understands developers. The Git integration works flawlessly, and the serverless functions are a game-changer for our microservices architecture.",
    highlight: "Seamless Git integration"
  },
  {
    name: "Emily Watson",
    role: "Founder",
    company: "GreenTech Solutions",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    quote: "We've been using Magnimont for 8 months now. The uptime has been perfect, and their support team actually understands technical issues. Worth every penny.",
    highlight: "Perfect uptime"
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    company: "DataViz Pro",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    quote: "The monitoring and analytics are top-notch. We can see exactly what's happening with our applications in real-time. The Dokploy foundation really shows in the user experience.",
    highlight: "Real-time insights"
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    company: "CloudFirst",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    quote: "Scaling our application was effortless. The auto-scaling features work perfectly, and we've never had to worry about traffic spikes during our product launches.",
    highlight: "Effortless scaling"
  },
  {
    name: "Alex Johnson",
    role: "Full Stack Developer",
    company: "InnovateLabs",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    quote: "The developer experience is unmatched. From the CLI tools to the web dashboard, everything just works. It's like having a senior DevOps engineer on your team.",
    highlight: "Unmatched DX"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            <span className="text-white">Loved by</span>
            <br />
            <span style={gradientTextStyles}>developers worldwide</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who've made the switch to better hosting. 
            See what they're saying about our platform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard 
                className="h-full p-6"
                spotlightColor="rgba(139, 92, 246, 0.1)"
              >
                <div className="flex flex-col h-full">
                  {/* Quote Icon & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-purple-400/60" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-white/80 leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                      <span className="text-purple-300 font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/60">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-white/60">Happy Developers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/60">Uptime SLA</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">50M+</div>
            <div className="text-white/60">Requests Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/60">Expert Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
