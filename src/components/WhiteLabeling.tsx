import whiteLabelImage from "@/assets/white-label-boxes.jpg";

const WhiteLabeling = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src={whiteLabelImage} 
              alt="Custom white label packaging with your logo" 
              className="rounded-lg shadow-elegant w-full h-full object-cover"
            />
          </div>
          
          <div className="animate-fade-in">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              Make a Lasting Impression
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mb-8"></div>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Want to make an impression at your next event? Explore white labeling or co-branding options 
              to create a truly personalized experience for your guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabeling;
