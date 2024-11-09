"use client";
import { FC } from "react";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const Expertises: FC = () => {
  const services: Service[] = [    
   
        {
          title: "Website Development",
          description: "Transform your online presence with high-performance websites built for conversion. Our development team delivers responsive, secure, and scalable solutions that turn visitors into loyal customers.",
          icon: "🌐"
        },
        {
          title: "UI/UX Design",
          description: "Create meaningful digital experiences that users love. We blend data-driven insights with creative excellence to design interfaces that engage, convert, and leave lasting impressions.",
          icon: "🎨"
        },
        {
          title: "AI Software Development",
          description: "Harness the power of artificial intelligence to revolutionize your operations. We build custom AI solutions that automate tasks, analyze data, and deliver actionable insights for smarter decision-making.",
          icon: "🤖"
        },
        {
          title: "Custom Software",
          description: "Your unique challenges deserve powerful solutions. We develop tailored software that streamlines operations, optimizes workflows, and drives efficiency across your organization.",
          icon: "💻"
        },
        {
          title: "Branding & Graphics",
          description: "Stand out with compelling visual narratives. Our design team creates cohesive brand experiences that capture attention, build trust, and establish lasting connections with your audience.",
          icon: "✨"
        },
        {
          title: "Custom Scripts",
          description: "Automate with confidence. Our custom scripts eliminate repetitive tasks and optimize workflows, letting you focus on what matters most – growing your business.",
          icon: "⚡"
        }
      
    
    
  ];

  return (
    <div id="services" className="w-full max-w-[1206px] mx-auto px-5 py-20 my-4 bg-[#030303]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center"></div>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">
        Our Expertise
      </h1>
      <p className="text-center text-gray-400 mb-10"> Solutions That Scale With Your Ambition

</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card group bg-black relative w-full h-[200px] border border-amber-100/20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:bg-muted"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 group-hover:opacity-0 transition-opacity duration-300"></div>

            <div className="absolute inset-[1px] rounded-lg z-20 p-6 flex flex-col justify-between group-hover:bg-muted transition-colors duration-300">
              <div className="flex items-start gap-4">
                <h3 className="text-xl font-medium text-white transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              <p className="text-sm text-gray-400 transition-colors duration-300 mt-2">
                {service.description}
              </p>
            </div>

            {/* Hover effect border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertises;
