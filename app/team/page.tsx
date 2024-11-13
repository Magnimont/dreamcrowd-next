"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: keyof typeof roleColors;
  details: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Vikas Nath Jha",
    role: "CEO AND FOUNDER",
    details: "Visionary leader with 15 years of experience",
    image: "/team/ceo.png",
  },
  {
    name: "Mohammed Jariullah",
    role: "CHRO",
    details: "Expert in Agile methodologies",
    image: "/team/sam.png",
  },
  {
    name: "Cut Zahara Riyanta",
    role: "Marketing",
    details: "Specializes in large-scale projects",
    image: "/team/ara.png",
  },
  {
    name: "Akash Jha",
    role: "Marketing",
    details: "Award-winning UX/UI designer",
    image: "/team/akash.png",
  },
  {
    name: "Vimukthi Indunil",
    role: "Developer",
    details: "Full-stack expert with 6+ years experience",
    image: "/placeholder.svg",
  },
  {
    name: "Niranjan Iyer",
    role: "Developer",
    details: "Digital marketing specialist",
    image: "/team/ninju.png",
  },
];

const roleColors = {
  "CEO AND FOUNDER": "bg-red-500",
  CHRO: "bg-blue-500",
  "Project Manager": "bg-blue-500",
  Marketing: "bg-purple-500",
  "Lead Developer": "bg-green-500",
  Developer: "bg-yellow-500",
} as const;

export default function TeamMembers() {
  return (
    <div className="min-h-screen bg-background py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamMemberCard({ name, role, details, image }: TeamMember) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0 relative">
          <div className="absolute w-full h-full">
            <motion.div
              className="w-full h-48 sm:h-64 overflow-hidden"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full object-cover inset-0 bg-gradient-to-br from-[#130C5E] via-[#5FABE6] to-[#F0D1FF] blur-[2px] brightness-50" />
            </motion.div>
            <Badge
              className={`absolute top-4 right-4 ${
                roleColors[role] || "bg-gray-500"
              }`}
            >
              {role}
            </Badge>
          </div>
          <div className="p-6 z-20 relative">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage className="object-cover" src={image} alt={name} />
              <AvatarFallback>
                {name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold mb-2 text-center">{name}</h2>
            <p className="text-muted-foreground text-center">{details}</p>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          {/* <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button variant="outline">View Profile</Button>
          </motion.div> */}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
