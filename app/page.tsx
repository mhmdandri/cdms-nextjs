import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hiw from "@/components/Hiw";
import Navbar from "@/components/Navbar";
import Preview from "@/components/Preview";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <Preview />
      <Benefits />
      <Hiw />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
