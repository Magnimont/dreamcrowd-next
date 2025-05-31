'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowRight, Eye } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "A next-generation e-commerce solution with AI-driven product recommendations and automated customer service.",
      tech: ["React", "Node.js", "AI/ML", "PostgreSQL"],
      category: "E-commerce",
      status: "Live",
      liveUrl: "https://demo-ecommerce.magnimont.com",
      githubUrl: "https://github.com/magnimont/ai-ecommerce",
      hasLive: true,
      hasGithub: true
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform streamlining patient management, appointments, and medical records.",
      tech: ["Next.js", "TypeScript", "MongoDB", "AWS"],
      category: "Healthcare",
      status: "In Development",
      liveUrl: null,
      githubUrl: "https://github.com/magnimont/healthcare-system",
      hasLive: false,
      hasGithub: true
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization and analytics platform for investment firms.",
      tech: ["React", "D3.js", "Python", "Redis"],
      category: "FinTech",
      status: "Live",
      liveUrl: "https://analytics.magnimont.com",
      githubUrl: null,
      hasLive: true,
      hasGithub: false
    },
    {
      title: "Smart Automation Suite",
      description: "Custom automation tools that streamline business processes and increase operational efficiency.",
      tech: ["Python", "Docker", "Kubernetes", "API"],
      category: "Automation",
      status: "Live",
      liveUrl: "https://automation.magnimont.com",
      githubUrl: "https://github.com/magnimont/automation-suite",
      hasLive: true,
      hasGithub: true
    },
    {
      title: "Social Media Analytics",
      description: "Advanced social media monitoring and analytics platform with sentiment analysis.",
      tech: ["Vue.js", "Node.js", "AI/ML", "GraphQL"],
      category: "Analytics",
      status: "Live",
      liveUrl: "https://social-analytics.magnimont.com",
      githubUrl: "https://github.com/magnimont/social-analytics",
      hasLive: true,
      hasGithub: true
    },
    {
      title: "Custom CRM Solution",
      description: "Tailored customer relationship management system designed for growing businesses.",
      tech: ["React", "Express", "MySQL", "Socket.io"],
      category: "Business",
      status: "Live",
      liveUrl: "https://crm.magnimont.com",
      githubUrl: "https://github.com/magnimont/custom-crm",
      hasLive: true,
      hasGithub: true
    }
  ];

  const gradientTextStyles = {
    background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const handleProjectClick = (e: React.MouseEvent, url: string | null, type: 'live' | 'github') => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!url) {
      alert(`${type === 'live' ? 'Live demo' : 'GitHub repository'} is not available for this project.`);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id='portfolio' ref={ref} className="min-h-[50rem] bg-[#030303] py-20">
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-foreground flex flex-col items-center justify-center px-4 max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span style={gradientTextStyles}>Projects</span>
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mb-8 text-lg leading-relaxed">
                Discover how we've transformed ideas into reality. Each project represents our commitment to innovation, quality, and client success.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4,
                  },
                },
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:border-teal-400/30 hover:shadow-lg hover:shadow-teal-500/10">
                    
                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-300">
                        {project.category}
                      </span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        project.status === 'Live' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project Content */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Action Buttons */}
                    <div className="flex gap-3 mt-auto relative z-10">
                      {/* Live Demo Button */}
                      <button
                        onClick={(e) => handleProjectClick(e, project.liveUrl, 'live')}
                        disabled={!project.hasLive}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          project.hasLive
                            ? 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white hover:scale-105 cursor-pointer active:scale-95'
                            : 'bg-gray-800/50 border border-gray-700/50 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {project.hasLive ? <ExternalLink className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        {project.hasLive ? 'View Live' : 'Coming Soon'}
                      </button>

                      {/* GitHub Button */}
                      <button
                        onClick={(e) => handleProjectClick(e, project.githubUrl, 'github')}
                        disabled={!project.hasGithub}
                        title={project.hasGithub ? 'View on GitHub' : 'Private Repository'}
                        className={`flex items-center justify-center px-3 py-2 rounded-lg transition-all duration-300 ${
                          project.hasGithub
                            ? 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white hover:scale-105 cursor-pointer active:scale-95'
                            : 'bg-gray-800/50 border border-gray-700/50 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-center"
            >
              <Link href="/portfolio">
                <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
