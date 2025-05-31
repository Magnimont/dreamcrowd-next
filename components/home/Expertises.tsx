"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { 
  FaRocket, 
  FaMagic, 
  FaBrain, 
  FaCogs, 
  FaLightbulb
} from "react-icons/fa";
import { 
  HiLightningBolt 
} from "react-icons/hi";
import { 
  VscSparkleFilled 
} from "react-icons/vsc";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  bgColor: string;
}

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const Expertises: FC = () => {
  const services: Service[] = [    
    {
      title: "Website Development",
      description: "Transform your online presence with high-performance websites built for conversion. Our development team delivers responsive, secure, and scalable solutions.",
      icon: <FaRocket className="w-6 h-6" />,
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure & Scalable"],
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "UI/UX Design",
      description: "Create meaningful digital experiences that users love. We blend data-driven insights with creative excellence to design interfaces that engage and convert.",
      icon: <VscSparkleFilled className="w-6 h-6" />,
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "AI Software Development",
      description: "Harness the power of artificial intelligence to revolutionize your operations. We build custom AI solutions that automate tasks and deliver actionable insights.",
      icon: <FaBrain className="w-6 h-6" />,
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Custom Software",
      description: "Your unique challenges deserve powerful solutions. We develop tailored software that streamlines operations and drives efficiency across your organization.",
      icon: <FaCogs className="w-6 h-6" />,
      features: ["Custom Development", "API Integration", "Database Design", "Cloud Solutions"],
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Branding & Graphics",
      description: "Stand out with compelling visual narratives. Our design team creates cohesive brand experiences that capture attention and build lasting connections.",
      icon: <FaMagic className="w-6 h-6" />,
      features: ["Brand Identity", "Logo Design", "Marketing Materials", "Visual Guidelines"],
      color: "text-pink-400",
      bgColor: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Custom Scripts",
      description: "Automate with confidence. Our custom scripts eliminate repetitive tasks and optimize workflows, letting you focus on growing your business.",
      icon: <HiLightningBolt className="w-6 h-6" />,
      features: ["Process Automation", "Data Processing", "Workflow Optimization", "Integration Scripts"],
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-amber-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="services" className="relative bg-[#030303] overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/4 to-teal-500/4 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Badge */}
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-6 py-2 border border-teal-500/30">
              <span className="text-sm font-medium text-teal-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Our Services
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span style={gradientTextStyles}>Expertise</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Solutions That Scale With Your Ambition. We deliver cutting-edge technology 
            solutions that transform businesses and drive unprecedented growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group h-full">
              <Card className="h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-teal-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-teal-500/10">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.bgColor} border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className={service.color}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                    {service.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-white mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-white/10">
                    <Link href="/get-started">
                      <Button
                        variant="ghost"
                        className="w-full justify-between bg-white/5 hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-cyan-500/20 hover:border-teal-400/30 border border-white/10 text-white transition-all duration-300 hover:scale-[1.02] group/btn"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
1000
     
      </div>
    </div>
  );
};

export default Expertises;
