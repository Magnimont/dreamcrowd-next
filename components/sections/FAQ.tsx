"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { Plus, Minus } from "lucide-react";

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

const faqs = [
  {
    question: "What makes your platform different from Vercel or Netlify?",
    answer: "Our platform is built on Dokploy's open-source foundation, giving you the transparency and flexibility of open source with enterprise-grade reliability. Unlike other platforms, you get full control over your deployments, advanced monitoring, and the ability to customize your hosting environment to your exact needs."
  },
  {
    question: "How does the Dokploy-based dashboard work?",
    answer: "Our dashboard is a enhanced fork of Dokploy, an open-source deployment platform. We've added enterprise features like advanced analytics, team collaboration tools, and enhanced security while maintaining the intuitive interface that makes Dokploy so popular among developers."
  },
  {
    question: "Can I migrate from Heroku, Vercel, or other platforms?",
    answer: "Absolutely! We provide migration tools and dedicated support to help you move from any platform. Most migrations can be completed in under an hour with zero downtime. Our team will assist you throughout the entire process."
  },
  {
    question: "What kind of applications can I deploy?",
    answer: "You can deploy any type of application: static sites, SPAs, full-stack applications, APIs, microservices, and more. We support all major frameworks including React, Next.js, Vue, Angular, Node.js, Python, Go, and many others."
  },
  {
    question: "How does pricing work as I scale?",
    answer: "Our pricing is transparent and predictable. You only pay for what you use - bandwidth, compute time, and storage. There are no surprise charges, and you can set spending limits to control costs. Enterprise customers get custom pricing based on their specific needs."
  },
  {
    question: "What about security and compliance?",
    answer: "Security is built into every layer of our platform. We provide SSL certificates, DDoS protection, WAF, and SOC 2 compliance. Enterprise customers get additional security features like private networks, custom security policies, and dedicated security reviews."
  },
  {
    question: "Do you offer support for teams and collaboration?",
    answer: "Yes! Our platform includes built-in team collaboration features: role-based access control, shared projects, deployment approvals, and team analytics. You can invite unlimited team members on Pro and Enterprise plans."
  },
  {
    question: "What's your uptime guarantee?",
    answer: "We guarantee 99.9% uptime with our SLA. Our infrastructure is built on multiple cloud providers with automatic failover, health monitoring, and instant incident response. If we don't meet our SLA, you get service credits."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <SpotlightCard 
        className="mb-4"
        spotlightColor="rgba(139, 92, 246, 0.1)"
      >
        <button
          onClick={onToggle}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors duration-200"
        >
          <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
          <div className="flex-shrink-0">
            {isOpen ? (
              <Minus className="w-5 h-5 text-purple-400" />
            ) : (
              <Plus className="w-5 h-5 text-purple-400" />
            )}
          </div>
        </button>
        
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6">
            <p className="text-white/70 leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      </SpotlightCard>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            <span className="text-white">Frequently asked</span>
            <br />
            <span style={gradientTextStyles}>questions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers. Can't find what you're looking for? 
            Reach out to our support team.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="px-8 py-3 rounded-full font-medium text-black border-0 hover:scale-105 transition-all duration-300"
            style={{ 
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
              )`
            }}
          >
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;