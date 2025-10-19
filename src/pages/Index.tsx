import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedDesserts from "@/components/FeaturedDesserts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <FeaturedDesserts />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
