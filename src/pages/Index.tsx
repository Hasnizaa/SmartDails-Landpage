import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Channels from "@/components/landing/Channels";
import Features from "@/components/landing/Features";
import Benefits from "@/components/landing/Benefits";
import FAQ from "@/components/landing/FAQ";
//import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Channels />
      <Features />
      <Benefits />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
