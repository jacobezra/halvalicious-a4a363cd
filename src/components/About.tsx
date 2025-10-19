const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crafted with Love
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-6">
            Each dessert is carefully hand-crafted using traditional techniques and premium ingredients. 
            We believe that creating exceptional desserts is an art form that requires patience, 
            skill, and genuine passion.
          </p>
          <p className="font-inter text-lg text-muted-foreground leading-relaxed">
            From the first sketch to the final flourish, every element is thoughtfully designed 
            to create not just a dessert, but an unforgettable experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
