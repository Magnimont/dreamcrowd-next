"use client";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  GitBranch, 
  Rocket,
  Database,
  Clock,
  Users
} from "lucide-react";

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

const features = [
  {
    icon: BarChart3,
    title: "Intuitive Dashboard",
    description: "Built on Dokploy's open-source foundation, our dashboard provides the simplicity of Netlify with the power of enterprise-grade hosting.",
    highlight: "Dokploy-powered"
  },
  {
    icon: Rocket,
    title: "One-Click Deployments",
    description: "Deploy your applications instantly with our streamlined workflow. Git integration, automatic builds, and zero-downtime deployments.",
    highlight: "Deploy in seconds"
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description: "Lightning-fast content delivery with 200+ edge locations worldwide. Your users get the best performance, everywhere.",
    highlight: "200+ locations"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SSL certificates, DDoS protection, and advanced firewall rules. Your applications are secure by default.",
    highlight: "Bank-grade security"
  },
  {
    icon: Database,
    title: "Managed Databases",
    description: "PostgreSQL, MySQL, Redis, and MongoDB. Fully managed, automatically backed up, and optimized for performance.",
    highlight: "Zero maintenance"
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Connect your GitHub, GitLab, or Bitbucket repositories. Automatic deployments on every push with preview environments.",
    highlight: "Auto-deploy"
  },
  {
    icon: Zap,
    title: "Serverless Functions",
    description: "Run backend logic without managing servers. Auto-scaling, pay-per-use, and seamless integration with your frontend.",
    highlight: "Auto-scaling"
  },
  {
    icon: Clock,
    title: "99.9% Uptime SLA",
    description: "Industry-leading reliability with automated failover, health monitoring, and instant incident response.",
    highlight: "Always online"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Invite team members, manage permissions, and collaborate seamlessly. Built for modern development workflows.",
    highlight: "Team-first"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      
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
            <span className="text-white">Everything you need to</span>
            <br />
            <span style={gradientTextStyles}>deploy with confidence</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our platform combines the best of open-source innovation with enterprise reliability. 
            Built on Dokploy's foundation, enhanced for modern ventures.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard 
                className="h-full p-6 hover:scale-[1.02] transition-transform duration-300"
                spotlightColor="rgba(139, 92, 246, 0.15)"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Ready to experience the future of hosting?
          </p>
          <button className="px-8 py-3 rounded-full font-medium text-black border-0 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
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
            Start Building Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;