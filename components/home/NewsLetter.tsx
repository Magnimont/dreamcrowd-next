"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Bell,
  ArrowRight,
  Gift,
  Zap,
  Star
} from "lucide-react";

const gradientTextStyles = {
  background: `linear-gradient(120deg, hsl(166deg 48% 37%) 0%, hsl(165deg 51% 33%) 9%, hsl(163deg 59% 28%) 18%, hsl(163deg 98% 19%) 26%, hsl(173deg 99% 24%) 35%, hsl(176deg 99% 28%) 43%, hsl(178deg 100% 31%) 52%, hsl(179deg 99% 31%) 60%, hsl(180deg 99% 32%) 68%,hsl(181deg 99% 33%) 76%, hsl(182deg 99% 27%) 84%, hsl(183deg 99% 20%) 92%, hsl(193deg 100% 9%) 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function NewsLetter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const subscribed = localStorage.getItem("newsletterSubscribed");
    if (subscribed) {
      setIsSubscribed(true);
    }
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubscribed) {
      toast({
        title: "Already Subscribed",
        description: "You have already subscribed to our newsletter.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      localStorage.setItem("newsletterSubscribed", "true");
      setIsSubscribed(true);
      toast({
        title: "Welcome Aboard! 🎉",
        description: "You're now part of our exclusive tech innovation community.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact our support team.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Latest trends in AI & tech"
    },
    {
      icon: Zap,
      title: "Exclusive Tips",
      description: "Actionable growth strategies"
    },
    {
      icon: Gift,
      title: "Early Access",
      description: "New tools & resources first"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with innovators"
    }
  ];

  const stats = [
    { number: "10K+", label: "Subscribers" },
    { number: "98%", label: "Open Rate" },
    { number: "Weekly", label: "Updates" },
    { number: "Free", label: "Forever" }
  ];

  return (
    <div className="relative min-h-[50rem] w-full py-20 px-4 max-w-screen-2xl mx-auto bg-[#030303] overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-teal-500/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/6 to-teal-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
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
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/20 rounded-full"
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
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Decorative Images - Enhanced */}
      <div className="hidden lg:block absolute top-10 right-10 w-40 h-40 opacity-30">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src={"/home/news1.png"}
            alt="Newsletter Decoration"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <div className="hidden lg:block absolute bottom-10 left-10 w-40 h-40 opacity-30">
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src={"/home/news2.png"}
            alt="Newsletter Decoration"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* Badge */}
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-6 py-2 border border-teal-500/30">
                <span className="text-sm font-medium text-teal-300 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Join 1000+ Innovators
                </span>
            </div>     </div>
         

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stay Ahead in{" "}
              <span style={gradientTextStyles}>Tech Innovation</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get exclusive insights on AI, digital transformation, and cutting-edge tech trends 
              delivered straight to your inbox. Join forward-thinking leaders who shape the future.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold mb-1">
                    <span style={gradientTextStyles}>{stat.number}</span>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Benefits Section */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-teal-400" />
                What You'll Get
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-teal-400/30 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-400">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Proof */}
              <motion.div variants={itemVariants} className="mt-8 p-6 rounded-xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 border-2 border-[#030303] flex items-center justify-center text-xs font-bold text-white">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  "The insights from Magnimont's newsletter have been game-changing for our tech strategy."
                </p>
                <p className="text-xs text-gray-400 mt-2">- Sarah Chen, CTO at TechCorp</p>
              </motion.div>
            </motion.div>

            {/* Newsletter Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
                  {!isSubscribed ? (
                    <>
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                          <Mail className="w-8 h-8 text-teal-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Join the Innovation Hub
                        </h3>
                        <p className="text-gray-400">
                          Be the first to know about breakthrough technologies and exclusive opportunities
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                          <div className="relative flex flex-col sm:flex-row gap-4 bg-[#030303] p-2 rounded-2xl border border-white/20">
                            <Input
                              type="email"
                              placeholder="Enter your email address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="flex-grow bg-white/5 border-none py-4 px-6 rounded-xl text-white placeholder:text-gray-400 focus:ring-2 focus:ring-teal-400/50 transition-all duration-300 text-lg"
                              required
                              disabled={loading}
                            />
                            <Button
                              type="submit"
                              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                              disabled={loading}
                            >
                              {loading ? (
                                <div className="flex items-center gap-2">
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  Subscribing...
                                </div>
                              ) : (
                                <div className="flex items-center gap-2">
                                  Subscribe Free
                                  <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </div>
                              )}
                            </Button>
                          </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            No spam, ever
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Unsubscribe anytime
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Weekly insights
                          </div>
                        </div>
                      </form>

                      {/* Recent Newsletter Preview */}
                      <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-teal-400" />
                          Latest Newsletter Preview
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-300">
                            <ArrowRight className="w-3 h-3 text-teal-400" />
                            "5 AI Tools That Will Transform Your Business in 2024"
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <ArrowRight className="w-3 h-3 text-teal-400" />
                            "The Future of Web Development: What's Coming Next"
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <ArrowRight className="w-3 h-3 text-teal-400" />
                            "Exclusive: Behind the Scenes of Our Latest AI Project"
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Success State */
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center"
                      >
                        <CheckCircle className="w-10 h-10 text-green-400" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        🎉 Welcome to the Innovation Hub!
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        You're now part of an exclusive community of 1000+ tech innovators. 
                        Check your inbox for a special welcome gift!
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Button
                          onClick={() => {
                            localStorage.removeItem("newsletterSubscribed");
                            setIsSubscribed(false);
                          }}
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          Subscribe Another Email
                        </Button>
                        <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
                          Explore Our Blog
                        </Button>
                      </div>

                      {/* Next Steps */}
                      <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 text-left">
                        <h4 className="text-white font-semibold mb-3">What happens next?</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-xs font-bold text-teal-400">1</div>
                            Check your email for a welcome message with exclusive resources
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-xs font-bold text-teal-400">2</div>
                            Get your first newsletter this Friday with cutting-edge insights
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-xs font-bold text-teal-400">3</div>
                            Join our exclusive community forum for deeper discussions
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Don't just read about innovation – be part of it. Join thousands of leaders 
                who trust Magnimont for their digital transformation journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
                
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Free Consultation
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    No Commitment
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Floating Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-500/3 to-cyan-500/3 rounded-full blur-3xl -z-10" />
    </div>
  );
}
