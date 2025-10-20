import { Card, CardContent } from "@/components/ui/card";
import dessert1 from "@/assets/halva-production.jpg";
import dessert2 from "@/assets/halva-product.jpg";
import dessert3 from "@/assets/halva-trays.jpg";

const desserts = [
  {
    id: 1,
    name: "Artisanal Craftsmanship",
    description: "Every batch hand-crafted with care and attention to detail",
    image: dessert1,
  },
  {
    id: 2,
    name: "Premium Halva",
    description: "Traditional halva made with authentic recipes and finest ingredients",
    image: dessert2,
  },
  {
    id: 3,
    name: "Fresh Daily",
    description: "Prepared fresh in small batches to ensure quality and taste",
    image: dessert3,
  },
];

const FeaturedDesserts = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perfect for Your Special Occasions
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Elegant party favors and gifts for weddings, birthdays, and celebrations
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {desserts.map((dessert, index) => (
            <Card 
              key={dessert.id}
              className="overflow-hidden border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={dessert.image} 
                  alt={dessert.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6 bg-card">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                  {dessert.name}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {dessert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDesserts;
