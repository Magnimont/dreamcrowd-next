import Hero from "@/components/home/Hero";
import NavbarComponent from "@/components/common/NavBar";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
}
