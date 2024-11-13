"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Code, Rocket, Globe, Cpu, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast"
import FluidCursor from '@/components/ui/fluid-cursor'; // Import the FluidCursor component

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
  rate: string;
};

type FormData = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

export default function GetStartedHero() {
  const { toast } = useToast()
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const services = [
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: "Custom Software Development",
      description: "From web apps to enterprise solutions, we bring your vision to life",
      rate: "Starting at $75/hour"
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Web Development",
      description: "Responsive, modern websites and progressive web applications",
      rate: "Starting at $65/hour"
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions for complex business problems",
      rate: "Starting at $95/hour"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your Discord webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/1300476058642022411/xneDEMoUCl2kUcVpe2W5g3E8hEa0CAcL4Z_puEjIDm6Tcm47E7MUseboVypEnb1UZbLf';

    const embedData = {
      embeds: [{
        title: "New Project Inquiry",
        color: 0x0099ff,
        fields: [
          {
            name: "Service Requested",
            value: selectedService?.title || "Not specified",
            inline: true
          },
          {
            name: "Client Name",
            value: formData.name,
            inline: true
          },
          {
            name: "Email",
            value: formData.email,
            inline: true
          },
          {
            name: "Company",
            value: formData.company || "Not specified",
            inline: true
          },
          {
            name: "Budget",
            value: formData.budget || "Not specified",
            inline: true
          },
          {
            name: "Message",
            value: formData.message || "No message provided"
          }
        ],
        timestamp: new Date().toISOString()
      }]
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(embedData)
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Thank you for your inquiry! We'll get back to you soon.",
        })
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          message: ''
        });
        setSelectedService(null);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was an error submitting your inquiry. Please try again.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error submitting your inquiry. Please try again.",
      })
    }

    setIsSubmitting(false);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FluidCursor /> {/* Add the FluidCursor component */}
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <Rocket className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Launch Your Next Project
              </h1>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Our team of expert developers 
              is here to build your next breakthrough solution.
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className={`p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all cursor-pointer ${
                    selectedService?.title === service.title ? 'ring-2 ring-blue-400' : ''
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg w-fit">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                    <p className="text-blue-400 font-medium">{service.rate}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Quotation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {selectedService 
                    ? `Request Quote for ${selectedService.title}`
                    : "Request a Quote"}
                </h3>
                
                <div className="space-y-2">
                  <Input
                    placeholder="Your Name"
                    className="bg-gray-700 border-gray-600 text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-gray-700 border-gray-600 text-white"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    placeholder="Company Name (Optional)"
                    className="bg-gray-700 border-gray-600 text-white"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    placeholder="Budget Range (Optional)"
                    className="bg-gray-700 border-gray-600 text-white"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Textarea
                    placeholder="Tell us about your project"
                    className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2">⌛</div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </div>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}