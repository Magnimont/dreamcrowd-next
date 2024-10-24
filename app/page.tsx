import About from "@/components/home/About";
import Cards from "@/components/home/Cards";
import Expertises from "@/components/home/Expertises";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Techstack from "@/components/home/Techstack";
import Image from "next/image";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Techstack />
      <About/>
      <Projects/>
      <Cards/>
      <Expertises/>
      <Footer/>

      

    </>
  );
}
