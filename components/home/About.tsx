import { cn } from "@/lib/utils";
import Image from "next/image";

const statisticsData = [
  {
    value: "~$100 billion",
    label: "cumulative trading volume to date",
  },
  {
    value: "0.8%",
    label: "of the global crypto spot trading volume",
    gradient: true,
  },
  {
    value: "~30",
    label: "Gravity Teammates (& growing)",
  },
  {
    value: "25+",
    label: "leading global and local crypto exchanges",
  },
  {
    value: "2017",
    label: "start, crypto-natives",
  },
  {
    value: "1,200+",
    label: "crypto-asset pairs",
  },
  {
    value: "24/7",
    label: "liquidity",
  },
  {
    value: "5 billion+",
    label: "trades done to date",
  },
];

export default function About() {
  return (
    <div className="relative text-white min-h-[60rem] flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 -left-32 w-1/3 h-1/3">
        <Image
          src="/home/aboutBg1.png"
          alt=""
          width={300}
          height={300}
          className="object-cover hidden max-[2800px]:flex"
        />
      </div>
      <div className="absolute bottom-0 -right-16 h-1/3">
        <Image
          src="/home/aboutBg2.png"
          alt=""
          width={300}
          height={300}
          className="object-cover hidden max-[2800px]:flex"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          About Us
        </h2>

        <p className="text-center mx-auto mb-12 text-sm md:text-base max-w-2xl">
          At Gravity Team, we are on the mission to balance the supply and
          demand across crypto markets worldwide. We are a crypto native market
          maker founded by traders, developers, and innovators who are strong
          believers and supporters of the future of decentralization and digital
          assets.
        </p>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col justify-center items-center p-6 md:p-8",
                stat.gradient
                  ? "bg-gradient-to-br from-[#130C5E] via-[#5FABE6] to-[#F0D1FF]"
                  : "bg-black"
              )}
            >
              <p className="text-2xl md:text-3xl font-bold mb-2">
                {stat.value}
              </p>
              <p
                className={cn(
                  "text-xs md:text-sm text-center",
                  stat.gradient ? "text-white" : "text-gray-400"
                )}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}