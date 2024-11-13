'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const placeholderImages = [
    '/projects/stevie.webp',
    '/projects/mikuni.webp',
    '/projects/onlyfans.webp',
    '/projects/pizza.webp',
    '/projects/hfai.webp',
    '/projects/noerror.webp'
  ];

  return (
    <div id='portfolio' ref={ref} className="min-h-[40rem]">
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-foreground flex flex-col items-center justify-center py-16 px-4"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Projects
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-center max-w-2xl mb-12"
            >
              Discover how we&apos;ve transformed ideas into reality
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full max-w-screen-xl"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6,
                  },
                },
              }}
            >
{placeholderImages.map((src, index) => (
  <motion.div
    key={index}
    className="relative group hover:transform hover:scale-[1.02] transition-all duration-500 ease-out"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5 }}
  >
    {/* Gradient Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] via-[#4a90e2] to-[#82b1ff] opacity-0 group-hover:opacity-50 transition-opacity duration-700 ease-in-out blur-lg" />
    
    {/* Gradient Outline */}
    <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-[#1a237e] via-[#4a90e2] to-[#82b1ff] opacity-0 group-hover:opacity-100 transition-opacity duration-700" >
      <div className="absolute inset-0 bg-black rounded-lg" />
    </div>

    {/* Content Container */}
    <div className="relative bg-black rounded-lg overflow-hidden aspect-[4/2] shadow-md">
      <Image
        src={src}
        alt={`Project ${index + 1}`}
        layout="responsive"
        width={600}
        height={1000}
        className="w-full h-full"
      />
    </div>
  </motion.div>
))}

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Button variant="secondary" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 rounded-full">
                View All
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}








// DONT REMOVE THIS
//THIS IS FOR FUTURE USE IF WE WANT TO ADD A HOVER EFFECT OKAYYY 
// export default function Projects() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const projects = [
//     {
//       image: '/projects/hfai.webp',
//       title: 'HFAI Project',
//       description: 'AI-powered healthcare solutions'
//     },
//     {
//       image: '/projects/stevie.webp',
//       title: 'Stevie Platform',
//       description: 'E-commerce solution'
//     },
//     // ... add more projects
//   ];

//   return (
//     <div id='portfolio' ref={ref} className="min-h-[40rem]">
//       <AnimatePresence>
//         {inView && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-foreground flex flex-col items-center justify-center py-16 px-4"
//           >
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               className="text-4xl md:text-5xl font-bold mb-4"
//             >
//               Our Projects
//             </motion.h2>
            
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="text-muted-foreground text-center max-w-2xl mb-12"
//             >
//               Discover how we've transformed ideas into reality
//             </motion.p>

//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 w-full max-w-screen-xl auto-rows-fr"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: {
//                   opacity: 1,
//                   transition: {
//                     staggerChildren: 0.1,
//                     delayChildren: 0.6,
//                   },
//                 },
//               }}
//             >
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative group aspect-square rounded-xl overflow-hidden"
//                   variants={{
//                     hidden: { opacity: 0, y: 20 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                   transition={{ duration: 0.5 }}
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   {/* Project Info */}
//                   <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
//                     <p className="text-white/80 text-sm">{project.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, duration: 0.6 }}
//             >
//               <Button variant="secondary" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 rounded-full">
//                 View All
//               </Button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
