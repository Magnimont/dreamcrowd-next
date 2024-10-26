"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion" // Import AnimatePresence

export default function Projects() {
  const placeholderImages = Array(8).fill('/placeholder.svg')

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white min-h-[40rem] flex flex-col items-center justify-center py-16 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
        <p className="text-gray-400 text-center max-w-2xl mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit semper dalar elementum tempus hac tellus libero accumsan.
        </p>

        {/* Grid layout for projects */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full max-w-screen-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {placeholderImages.map((src, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden h-40 sm:h-52 md:h-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={src}
                alt={`Project ${index + 1}`}
                layout="responsive"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button variant="secondary" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 rounded-full">
            View All
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
