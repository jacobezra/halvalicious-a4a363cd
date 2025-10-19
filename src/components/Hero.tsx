import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-desserts.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-slow">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6">
          Artisanal Sweet Creations
        </h1>
        <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Hand-crafted desserts made with passion, precision, and the finest ingredients. 
          Every creation is a unique work of art.
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="font-inter bg-gradient-accent text-accent-foreground hover:opacity-90 transition-opacity shadow-elegant"
        >
          Order Your Creation
        </Button>
      </div>
    </section>
  );
};

export default Hero;
