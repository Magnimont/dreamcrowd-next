'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const positions = [
  {
    title: "Backend Developer",
    location: "Remote Location",
    description: "Join our team of backend developers and help us build the next generation of our product. Should have experience with Node.js, Express...",
    requirements: "None",
    image: "/images/backend.JPG",
  },
];

const OpenPositions = () => {
  return (
    <section className="py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient">
        Open positions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {positions.map((position, index) => (
          <motion.div
            key={position.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
             <Image
              src={position.image}
              alt={position.title}
              width={500}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]">
                {position.title}
              </h3>
              <p className="text-gray-600 mb-4">{position.location}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {position.description}
              </p>
              <a href="https://forms.gle/oENrR24zutvBgWpa6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
      `}</style>
    </section>
  );
};

export default OpenPositions;