import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion" // Import Framer Motion

export default function Projects() {
  const placeholderImages = Array(8).fill('/placeholder.svg')

  return (
    <div className="text-white min-h-[40rem] flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit semper dalar elementum tempus hac tellus libero accumsan.
      </p>

      {/* Grid layout for projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full max-w-screen-lg">
        {placeholderImages.map((src, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg overflow-hidden h-40 sm:h-52 md:h-60" // Set height to make it rectangular
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
      </div>

      {/* View All button */}
      <Button variant="secondary" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 rounded-full">
        View All
      </Button>
    </div>
  )
}
