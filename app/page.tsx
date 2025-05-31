import About from "@/components/home/About";
import Cards from "@/components/home/Cards";
import Expertises from "@/components/home/Expertises";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Techstack from "@/components/home/Techstack";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import Reviews from "@/components/home/Reviews";
import Faq from "@/components/home/Faq";
import ContactForm from "@/components/home/Contact";
import NewsLetter from "@/components/home/NewsLetter";

export default function Home() {
  return (
    <>
      <Hero />
      <Techstack />
      <About />
      <Expertises />
      <Projects />
      <Cards />
      <Reviews />
      <Faq />
      <ContactForm />
      <NewsLetter />
    </>
  );
}
