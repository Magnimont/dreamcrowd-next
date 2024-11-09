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
  })

  const placeholderImages = Array(8).fill('/placeholder.svg')

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
            Discover how we've transformed ideas into reality            </motion.p>

            {/* Grid layout for projects */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full max-w-screen-xl"
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
                  className="bg-card rounded-lg overflow-hidden aspect-[4/3] shadow-md flex items-center justify-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={src}
                    alt={`Project ${index + 1}`}
                    layout="responsive"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    style={{
                      height: "100%"
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* View All button */}
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
  )
}