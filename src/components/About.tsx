import craftedImage from "@/assets/crafted-with-love.jpg";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crafted with Love
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src={craftedImage} 
              alt="Crafting Halvalicious products with love" 
              className="rounded-lg shadow-elegant w-full h-full object-cover"
            />
          </div>
          
          <div className="animate-fade-in">
            <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-6">
              Each batch of halva is carefully hand-crafted using traditional techniques and premium ingredients. 
              We believe that creating exceptional treats is an art form that requires patience, 
              skill, and genuine passion.
            </p>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              It's a family affair - from preparation to packaging, every element is thoughtfully crafted 
              to create not just a dessert, but an unforgettable experience made with love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
