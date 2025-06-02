"use client";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { Check, Zap, Crown, Rocket } from "lucide-react";

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

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Perfect for personal projects and experimentation",
    popular: false,
    features: [
      "1 Project",
      "100GB Bandwidth",
      "Dokploy Dashboard Access",
      "SSL Certificates",
      "Git Integration",
      "Community Support"
    ],
    buttonText: "Start Free",
    spotlightColor: "rgba(59, 130, 246, 0.15)"
  },
  {
    name: "Pro",
    icon: Rocket,
    price: "$29",
    period: "per month",
    description: "Ideal for growing startups and small teams",
    popular: true,
    features: [
      "10 Projects",
      "1TB Bandwidth",
      "Advanced Analytics",
      "Custom Domains",
      "Serverless Functions",
      "Priority Support",
      "Team Collaboration",
      "Preview Deployments"
    ],
    buttonText: "Start Pro Trial",
    spotlightColor: "rgba(139, 92, 246, 0.25)"
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "$99",
    period: "per month",
    description: "For established businesses with advanced needs",
    popular: false,
    features: [
      "Unlimited Projects",
      "Unlimited Bandwidth",
      "Advanced Security",
      "SLA Guarantee",
      "Dedicated Support",
      "Custom Integrations",
      "Advanced Monitoring",
      "White-label Options"
    ],
    buttonText: "Contact Sales",
    spotlightColor: "rgba(251, 191, 36, 0.15)"
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
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
            <span className="text-white">Simple, transparent</span>
            <br />
            <span style={gradientTextStyles}>pricing</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Start free, scale as you grow. No hidden fees, no surprises. 
            Just powerful hosting that grows with your venture.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="px-4 py-2 rounded-full text-sm font-medium text-black"
                    style={{ 
                      background: `linear-gradient(
                        130deg,
                        hsl(270deg 73% 35%) 0%,
                        hsl(271deg 79% 28%) 25%,
                        hsl(272deg 89% 21%) 50%,
                        hsl(271deg 98% 15%) 75%,
                        hsl(272deg 75% 23%) 100%
                      )`
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              
              <SpotlightCard 
                className={`h-full p-8 ${plan.popular ? 'border-purple-500/50' : ''}`}
                spotlightColor={plan.spotlightColor}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30' 
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-purple-400' : 'text-white/70'}`} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/60">/{plan.period}</span>
                    </div>
                    <p className="text-white/70 mt-2">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <button 
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'text-black hover:scale-105'
                        : 'text-white border border-white/20 hover:bg-white/10'
                    }`}
                    style={plan.popular ? { 
                      background: `linear-gradient(
                        130deg,
                        hsl(270deg 73% 35%) 0%,
                        hsl(271deg 79% 28%) 25%,
                        hsl(272deg 89% 21%) 50%,
                        hsl(271deg 98% 15%) 75%,
                        hsl(272deg 75% 23%) 100%
                      )`
                    } : {}}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60">
            All plans include our Dokploy-powered dashboard and 99.9% uptime guarantee.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;