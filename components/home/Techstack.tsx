import Image from "next/image";
import React from "react";

const techLogos = [
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "AWS",
    src: "https://cloudinary-marketing-res.cloudinary.com/image/upload/f_auto,q_auto/v1688759801/integ-AWS-logo_whiteAWS",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Google",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "NodeJS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "NextJS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Heroku",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
  },
  {
    name: "Vercel",
    src: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitLab",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },
  {
    name: "PHP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Linux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: ".NET",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
];

const Techstack = () => {
  return (
    <div className="relative overflow-hidden py-16 mx-auto max-w-[2000px]">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 z-10 h-full w-60 bg-gradient-to-l from-transparent to-black" />
      <div className="absolute right-0 top-0 z-10 h-full w-60 bg-gradient-to-r from-transparent to-black" />

      {/* Logo container */}
      <div className="flex whitespace-nowrap">
        {/* First set of logos */}
        <div className="flex animate-slide">
          {techLogos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex w-[160px] flex-col items-center justify-center px-4"
            >
              <div className="relative h-12 w-12">
                <Image
                  fill
                  src={logo.src}
                  alt={logo.name}
                  className="object-contain grayscale brightness-200 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:scale-110"
                />
              </div>
              <span className="mt-2 text-xs text-gray-400 transition-colors duration-300 group-hover:text-white">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate set of logos for seamless loop */}
        <div className="flex animate-slide">
          {techLogos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex w-[160px] flex-col items-center justify-center px-4"
            >
              <div className="relative h-12 w-12">
                <Image
                  fill
                  src={logo.src}
                  alt={logo.name}
                  className="object-contain grayscale brightness-200 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:scale-110"
                />
              </div>
              <span className="mt-2 text-xs text-gray-400 transition-colors duration-300 group-hover:text-white">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;