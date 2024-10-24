// components/Hero.jsx
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#030303] text-white p-6 md:p-12 flex flex-col">
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 font-inter">
        <div className="lg:w-1/2 space-y-8">
          <header className="mb-2 mt-8">
            <button className="rounded-full p-[1px] bg-gradient-to-r to-blue-700 from-purple-600">
              <span className="block bg-[#030303] text-xs md:text-sm rounded-full px-4 py-1.5 font-medium hover:bg-opacity-80 transition-colors">
                Magnimont V2 &rarr;
              </span>
            </button>
          </header>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
              Software
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
              for Ventures
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
            At Magnimont, we blend innovation with expertise to create tailored tech solutions that drive your business forward. From digital transformation to scalable growth, we&apos;re your partner in progress.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-gradient-to-r text-black bg-white rounded-full px-8 py-3 text-sm md:text-base font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="rounded-full p-[1px] bg-gradient-to-r">
              <span className="block bg-[#030303] rounded-full px-7 py-2.5 text-sm md:text-base font-medium hover:bg-opacity-80 transition-colors">
                Forums &rarr;
              </span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <div className="absolute w-1 h-1" style={{ boxShadow: '#9B99FF 0px 3px 460px 87px' }} />
          <Image
            src="/images/hero_image.png"
            alt="3D Geometric Shape"
            width={500}
            height={500}
            className="rounded-lg z-10"
          />
        </div>
      </main>

    </div>
  );
}
