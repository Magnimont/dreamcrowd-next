'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

type TeamMember = {
  name: string
  role: keyof typeof roleColors
  details: string
  image: string
}

const teamMembers: TeamMember[] = [
  { name: 'Vikash Jah Saizuo', role: 'CEO', details: 'Visionary leader with 15 years of experience', image: '/team/ceo.png' },
  { name: 'Jane Smith', role: 'Project Manager', details: 'Expert in Agile methodologies', image: '/placeholder.svg' },
  { name: 'Mike Johnson', role: 'Project Manager', details: 'Specializes in large-scale projects', image: '/placeholder.svg' },
  { name: 'Emily Brown', role: 'Head of Design', details: 'Award-winning UX/UI designer', image: '/placeholder.svg' },
  { name: 'Alex Lee', role: 'Lead Developer', details: 'Full-stack expert with 10+ years experience', image: '/placeholder.svg' },
  { name: 'Sarah Davis', role: 'Marketing Lead', details: 'Digital marketing specialist', image: '/placeholder.svg' },
]

const roleColors = {
  CEO: 'bg-red-500',
  'Project Manager': 'bg-blue-500',
  'Head of Design': 'bg-purple-500',
  'Lead Developer': 'bg-green-500',
  'Marketing Lead': 'bg-yellow-500',
} as const

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
  )
}

function TeamMemberCard({ name, role, details, image }: TeamMember) {
  const [isHovered, setIsHovered] = useState(false)

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
              <Image width={1200} height={720} src={"/images/404errors.png"} alt={name} className="w-full h-full object-cover blur-[2px] brightness-50" />
            </motion.div>
            <Badge className={`absolute top-4 right-4 ${roleColors[role] || 'bg-gray-500'}`}>
              {role}
            </Badge>
          </div>
          <div className="p-6 z-20 relative">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
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
  )
}