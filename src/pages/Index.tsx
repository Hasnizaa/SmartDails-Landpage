import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Channels from "@/components/landing/Channels";
import Features from "@/components/landing/Features";
import ProductScreens from "@/components/landing/ProductScreens";
import BPOSection from "@/components/landing/BPOSection";
import Benefits from "@/components/landing/Benefits";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Channels />
      <Features />
      <ProductScreens />
      <BPOSection />
      <Benefits />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
