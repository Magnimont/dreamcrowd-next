// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import Image from "next/image"

// const expertiseData = [
//   {
//     title: "Website Development",
//     description: "Expertly coded websites tailored to your business needs.",
//   },
//   {
//     title: "UI/UX Design",
//     description: "Intuitive interfaces focused on exceptional user experiences.",
//   },
//   {
//     title: "AI Software Development",
//     description: "Cutting-edge AI integrations to drive efficiency and insights.",
//   },
//   {
//     title: "Custom Software",
//     description: "Innovative custom software aligning with your unique requirements.",
//   },
//   {
//     title: "Branding & Graphics",
//     description: "Visually compelling assets that reinforce your brand identity.",
//   },
//   {
//     title: "Custom Scripts",
//     description: "Tailored automation scripts to streamline your workflows.",
//   },
// ]

// export default function Component() {
//   return (
//     <div className="container mx-auto px-4 py-16 text-white">
//       <h2 className="text-4xl font-bold text-center mb-2">Our Expertise</h2>
//       <p className="text-xl text-center text-gray-400 mb-12">Innovative solutions</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {expertiseData.map((item, index) => (
//           <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
//             <CardHeader>
//             <Image
//               src={"/placeholder.svg"}
//               alt={`Project ${index + 1}`}
//               width={300}
//               height={300}
//               className="w-full h-auto"
//             />              <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-400">{item.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }
"use client";
import { LegacyRef, useEffect, useRef } from "react";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const Expertises: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.getElementsByClassName("service-card");
      for (const card of cards) {
        const element = card as HTMLElement;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        element.style.setProperty("--mouse-x", `${x}px`);
        element.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const element = cardsRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const services: Service[] = [
    {
      title: "Website Development",
      description: "Expertly coded websites tailored to your business needs.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive interfaces focused on exceptional user experiences.",
      icon: "🎨",
    },
    {
      title: "AI Software Development",
      description:
        "Cutting-edge AI integrations to drive efficiency and insights.",
      icon: "🤖",
    },
    {
      title: "Custom Software",
      description:
        "Innovative custom software aligning with your unique requirements.",
      icon: "💻",
    },
    {
      title: "Branding & Graphics",
      description:
        "Visually compelling assets that reinforce your brand identity.",
      icon: "✨",
    },
    {
      title: "Custom Scripts",
      description: "Tailored automation scripts to streamline your workflows.",
      icon: "📝",
    },
  ];

  return (
    <div className="w-full max-w-[1206px] mx-auto px-5 py-20 my-4  dark:bg-[#030303] bg-white  relative"> 
     {/*  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#030303] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">
        Our Expertise
      </h1>
      <p className="text-center text-gray-400 mb-10">Innovative solutions</p>

      <div
        ref={cardsRef}
        className="flex flex-wrap justify-center gap-8 relative hover:text-black"
      >
        {services.map((service, index) => (
          <div
        key={index}
        className="service-card bg-black relative w-[300px] h-[260px] border border-amber-100/20 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 max-md:h-[180px] hover:bg-white hover:text-black"
          >
        <div className="absolute inset-[1px] rounded-lg z-20 p-3 flex flex-col">
          <div className="flex items-center justify-center h-[140px] max-md:h-[80px]">
            <span className="text-6xl opacity-25 max-md:text-3xl">
          {/* {service.icon} */}
            </span>
          </div>
          <div className="px-5 flex-grow flex items-start">
            <div className="flex gap-3">
          <span className="text-white text-sm mt-1 hover:text-black">
            {/* {service.icon} */}
          </span>
          <div>
            <h3 className="text-lg text-white font-normal max-md:text-base hover:text-black">
              {service.title}
            </h3>
            <h4 className="text-sm text-white/50 mt-2 max-md:text-xs max-md:mt-1 hover:text-black">
              {service.description}
            </h4>
          </div>
            </div>
          </div>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertises;
