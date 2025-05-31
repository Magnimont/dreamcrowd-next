"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Code, Palette, Briefcase, Users, Sparkles, Star, Award, Coffee } from "lucide-react";

type TeamMember = {
  name: string;
  role: keyof typeof roleColors;
  bio: string;
  skills: string[];
  location: string;
  joinedYear: string;
  avatar: string; // This will be initials or emoji
  gradient: string;
  achievements: string[];
  funFact: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: "Vikas Nath Jha",
    role: "CEO AND FOUNDER",
    bio: "Visionary leader driving innovation in AI and digital transformation. Passionate about building solutions that make a real impact.",
    skills: ["Strategic Planning", "AI/ML", "Business Development", "Team Leadership"],
    location: "Remote",
    joinedYear: "2021",
    avatar: "VJ",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    achievements: ["Founded Magnimont", "150+ Projects Delivered", "AI Innovation Leader"],
    funFact: "Can code in 8+ programming languages",
    social: {
      linkedin: "#",
      email: "vikas@magnimont.com"
    }
  },
  {
    name: "Mohammed Jariullah",
    role: "CHRO",
    bio: "Expert in building high-performing teams and creating amazing workplace cultures. Believes in people-first approach to business.",
    skills: ["Team Building", "HR Strategy", "Culture Development", "Talent Acquisition"],
    location: "Remote",
    joinedYear: "2022",
    avatar: "MJ",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    achievements: ["Built 25+ Person Team", "HR Excellence Award", "Culture Champion"],
    funFact: "Speaks 4 languages fluently",
    social: {
      linkedin: "#",
      email: "mohammed@magnimont.com"
    }
  },
  {
    name: "Cut Zahara Riyanta",
    role: "Marketing",
    bio: "Creative marketing strategist who turns complex tech into compelling stories. Master of digital campaigns and brand building.",
    skills: ["Digital Marketing", "Brand Strategy", "Content Creation", "Social Media"],
    location: "Indonesia",
    joinedYear: "2022",
    avatar: "CR",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    achievements: ["300% Growth in Leads", "Brand Recognition Expert", "Content Creator"],
    funFact: "Creates viral content in her sleep",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "zahara@magnimont.com"
    }
  },
  {
    name: "Akash Jha",
    role: "Marketing",
    bio: "Data-driven marketing specialist with a knack for turning analytics into actionable strategies. Growth hacker extraordinaire.",
    skills: ["Growth Marketing", "Analytics", "SEO/SEM", "Conversion Optimization"],
    location: "India",
    joinedYear: "2023",
    avatar: "AJ",
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    achievements: ["ROI Optimization Expert", "Analytics Wizard", "Growth Hacker"],
    funFact: "Can predict trends before they happen",
    social: {
      linkedin: "#",
      email: "akash@magnimont.com"
    }
  },
  {
    name: "Vimukthi Indunil",
    role: "Developer",
    bio: "Full-stack wizard who brings ideas to life with clean, scalable code. Passionate about creating seamless user experiences.",
    skills: ["React", "Node.js", "Python", "Cloud Architecture"],
    location: "Sri Lanka",
    joinedYear: "2022",
    avatar: "VI",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    achievements: ["50+ Apps Built", "Code Quality Champion", "Performance Optimizer"],
    funFact: "Debugs code faster than most people read it",
    social: {
      github: "#",
      linkedin: "#",
      email: "vimukthi@magnimont.com"
    }
  },
  {
    name: "Niranjan Iyer",
    role: "Developer",
    bio: "Backend architect and API specialist who builds the invisible magic that powers amazing applications. Security-first mindset.",
    skills: ["Backend Development", "API Design", "Database Architecture", "DevOps"],
    location: "India",
    joinedYear: "2023",
    avatar: "NI",
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    achievements: ["API Architecture Expert", "Security Specialist", "Performance Guru"],
    funFact: "Can optimize any database query in under 5 minutes",
    social: {
      github: "#",
      linkedin: "#",
      email: "niranjan@magnimont.com"
    }
  },
];

const roleColors = {
  "CEO AND FOUNDER": "from-red-500 to-orange-500",
  CHRO: "from-blue-500 to-purple-500",
  "Project Manager": "from-blue-500 to-indigo-500",
  Marketing: "from-purple-500 to-pink-500",
  "Lead Developer": "from-green-500 to-teal-500",
  Developer: "from-yellow-500 to-green-500",
} as const;

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function TeamMembers() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/6 to-teal-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
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
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* Section Badge */}
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-6 py-2 border border-teal-500/30">
                <span className="text-sm font-medium text-teal-300 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Meet the Team
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Minds Behind <span style={gradientTextStyles}>Magnimont</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              A diverse team of innovators, creators, and problem-solvers united by our passion 
              for building exceptional digital experiences that transform businesses.
            </p>

            {/* Team Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold">
                  <span style={gradientTextStyles}>15</span>
                </div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <span style={gradientTextStyles}>5</span>
                </div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <span style={gradientTextStyles}>24/7</span>
                </div>
                <div className="text-sm text-gray-400">Global Coverage</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <span style={gradientTextStyles}>150+</span>
                </div>
                <div className="text-sm text-gray-400">Projects Together</div>
              </div>
            </div>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredMember(member.name)}
                onHoverEnd={() => setHoveredMember(null)}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-teal-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-teal-500/10 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header with Avatar */}
                    <div className="relative p-6 pb-4">
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        {/* Avatar */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {member.avatar}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                              {member.name}
                            </h3>
                            <Badge className={`bg-gradient-to-r ${roleColors[member.role]} text-white border-none text-xs`}>
                              {member.role}
                            </Badge>
                          </div>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed mb-4">
                          {member.bio}
                        </p>

                        {/* Skills */}
                        <div className="mb-4">
                                               <h4 className="text-xs font-medium text-gray-300 mb-2">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.slice(0, 3).map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="text-xs px-2 py-1 bg-white/10 text-gray-300 border border-white/20 rounded-full group-hover:bg-teal-500/20 group-hover:border-teal-400/30 group-hover:text-teal-300 transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                            {member.skills.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-white/5 text-gray-400 border border-white/10 rounded-full">
                                +{member.skills.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-xs text-gray-400">{member.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-xs text-gray-400">Since {member.joinedYear}</span>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-xs font-medium text-gray-300 mb-2 flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            Achievements
                          </h4>
                          <div className="space-y-1">
                            {member.achievements.slice(0, 2).map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-center gap-2">
                                <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                <span className="text-xs text-gray-400">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Fun Fact */}
                        <div className="mb-6">
                          <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Coffee className="w-3 h-3 text-teal-400" />
                              <span className="text-xs font-medium text-teal-300">Fun Fact</span>
                            </div>
                            <p className="text-xs text-teal-200">{member.funFact}</p>
                          </div>
                        </div>

                        {/* Social Links */}
                        {member.social && (
                          <div className="flex gap-3">
                            {member.social.github && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-8 h-8 p-0 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                                asChild
                              >
                                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 text-gray-400 hover:text-white" />
                                </a>
                              </Button>
                            )}
                            {member.social.linkedin && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-8 h-8 p-0 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                                asChild
                              >
                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                  <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                                </a>
                              </Button>
                            )}
                            {member.social.twitter && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-8 h-8 p-0 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                                asChild
                              >
                                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                  <Twitter className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                                </a>
                              </Button>
                            )}
                            {member.social.email && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-8 h-8 p-0 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                                asChild
                              >
                                <a href={`mailto:${member.social.email}`}>
                                  <Mail className="w-4 h-4 text-gray-400 hover:text-green-400" />
                                </a>
                              </Button>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-t-lg`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Team Culture Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <Card className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Our <span style={gradientTextStyles}>Culture</span>
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    What makes Magnimont special isn't just our skills – it's how we work together
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Sparkles className="w-6 h-6" />,
                      title: "Innovation First",
                      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
                      color: "text-yellow-400"
                    },
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: "Collaborative Spirit",
                      description: "Remote-first culture that brings together diverse talents from around the globe.",
                      color: "text-blue-400"
                    },
                    {
                      icon: <Star className="w-6 h-6" />,
                      title: "Excellence Driven",
                      description: "We're committed to delivering exceptional results that exceed client expectations.",
                      color: "text-purple-400"
                    }
                  ].map((value, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className={value.color}>
                          {value.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Join Our Team Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <CardContent className="p-8 text-center">
                <div className="max-w-3xl mx-auto">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-teal-400" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Want to Join Our <span style={gradientTextStyles}>Team</span>?
                  </h3>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    We're always looking for talented individuals who share our passion for innovation 
                    and excellence. If you're ready to work on cutting-edge projects with a global team, 
                    we'd love to hear from you.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Remote-First",
                        description: "Work from anywhere in the world with flexible hours",
                        icon: <MapPin className="w-5 h-5" />
                      },
                      {
                        title: "Growth Focused",
                        description: "Continuous learning and career development opportunities",
                        icon: <Star className="w-5 h-5" />
                      },
                      {
                        title: "Cutting-Edge Projects",
                        description: "Work on innovative solutions using latest technologies",
                        icon: <Code className="w-5 h-5" />
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                          <div className="text-teal-400">
                            {benefit.icon}
                          </div>
                        </div>
                        <h4 className="font-medium text-white mb-2">{benefit.title}</h4>
                        <p className="text-sm text-gray-400">{benefit.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full px-8 py-3 transition-all duration-300 hover:scale-105">
                      View Open Positions
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3">
                      Send Your Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Team Stats */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "6", label: "Team Members", icon: <Users className="w-5 h-5" /> },
                { number: "5", label: "Time Zones", icon: <MapPin className="w-5 h-5" /> },
                { number: "15+", label: "Skills Combined", icon: <Code className="w-5 h-5" /> },
                { number: "3+", label: "Years Together", icon: <Calendar className="w-5 h-5" /> }
              ].map((stat, index) => (
                <Card key={index} className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-teal-400/30 transition-all duration-500 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-teal-400">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold mb-1">
                      <span style={gradientTextStyles}>{stat.number}</span>
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
