'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OpenPositions from '../../components/OpenPositions';

const employees = [
  {
    id: 1,
    name: "Saizuo(Vikas Nath Jha)",
    role: "CEO & Founder",
    quote: "We didn't just build a company at Magnimont—we created an environment of innovation, team work and true care Each day, our team store this desire for the well-made of which spurs us onward to make built goods that aim not only towards meet however, exceed. We are proud of being people that lift each other up and fill our brains with new ideas all the times, in a business where no one ever feels like they have outworked or accomplished by anyone else. The energy is infectious and this collective determination propels us to constantly question what could be.",
    image: "/images/CEO_Vikas.jpg",
  },
  {
    id: 2,
    name: "Mohammed Jariullah",
    role: "CHRO",
    quote: "Until now Magnimont was truly an incredible journey of growing as a person and professional. But at the end of the day we clearly stand out because of our staunch commitment to cultivate a welcoming work culture. The people who work here are all about delivering the very best, and they always have been. A place where all team members are valued, listened to and provided the possibility for growth.",
    image: "/images/CHRO_Jariullah.jpg",
  },
];

const values = [
  {
    title: "Passion for Product",
    description: "Creating a seamless experience for our users starts with unlocking the creativity within! We lead with a curious mind and dare to ask questions, make our voices heard, and challenge each other and our product in order to bring the latest technology to the market.",
    icon: "📝",
  },
  {
    title: "Passion for Business",
    description: "Enthusiasm and grit are the driving force behind everything we do! This translates into daring to set and meet ambitious goals, walk the extra mile, and always strive for better. We bring out the best in each other by continually challenging one another and do not settle for average.",
    icon: "📈",
  },
  {
    title: "Passion for People",
    description: "Cultivating a humanized workplace on trust, empathy, and transparency is key for us and something that is permeating our entire culture. We believe that the key to real success lies in people feeling safe enough to be their full selves at work.",
    icon: "❤️",
  },
];

export default function TeamAndValues() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [imageCache, setImageCache] = useState(new Map());

  useEffect(() => {
    employees.forEach((employee) => {
      const img = new Image();
      img.src = employee.image;
      img.onload = () => {
        setImageCache(prev => new Map(prev).set(employee.id, img.src));
      };
    });
  }, []);

  return (
    <>
      <div className="bg-black px-4 py-24 md:pt-32 md:pb-16">
        <h2 className=" text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient">
          Let&apos;s hear from the team
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
          <div className="w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEmployee.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center md:text-left"
              >
                <p className="text-white mb-4 px-4 md:px-0">
                  {selectedEmployee.quote}
                </p>
                <p className="text-[#ce6020] font-semibold">
                  {selectedEmployee.name}, {selectedEmployee.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedEmployee.id}
                  src={selectedEmployee.image}
                  alt={selectedEmployee.name}
                  className="absolute top-0 left-0 w-full h-full rounded-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>

            <div className="flex justify-center space-x-3">
              {employees.map((employee) => (
                <button
                  key={employee.id}
                  onClick={() => setSelectedEmployee(employee)}
                  className={`w-12 h-12 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-110 ${
                    selectedEmployee.id === employee.id ? 'ring-2' : ''
                  }`}
                >
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-0 pb-12 text-center bg-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text animate-gradient">
          Our Values
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-300">
          We believe in assembling a dream team of exceptional individuals who can
          achieve extraordinary results and conquer our goals together. Our ultimate
          aim? To cultivate an environment where creativity thrives and where everyone
          can unlock their full potential.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="value-wrapper"
            >
              <div className="value-card">
                <div className="icon text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-md text-white">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <OpenPositions />
      </div>

      <style jsx>{`

        .value-wrapper {
          width: 100%;
          padding: 2px;
          background-image: linear-gradient(
            to bottom,
            #cfc09f 27%,
            #ffecb3 40%,
            #3a2c0f 78%
          );
          border-radius: 20px;
          transition: all 0.3s;
        }

        .value-wrapper:hover {
          box-shadow: 0px 0px 30px 1px #eece6f;
          transform: translateY(-5px);
        }

        .value-card {
          background-color: #1a1a1a;
          padding: 2rem;
          border-radius: 19px;
          height: 100%;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .icon {
          color: #ffecb3;
        }

        @media (max-width: 768px) {
          .value-card {
            min-height: 250px;
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}