import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-halva.jpg";
import logo from "@/assets/logo.png";

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
        <img 
          src={logo} 
          alt="Halvalicious by Yashka logo" 
          className="w-64 md:w-80 mx-auto mb-8"
        />
        <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Exquisite artisanal halva, perfect as party favors and gifts for weddings, birthdays, and special celebrations. 
          Each piece is lovingly hand-crafted to create memorable moments your guests will treasure.
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
