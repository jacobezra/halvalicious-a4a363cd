import { Card, CardContent } from "@/components/ui/card";
import dessert1 from "@/assets/dessert-1.jpg";
import dessert2 from "@/assets/dessert-2.jpg";
import dessert3 from "@/assets/dessert-3.jpg";

const desserts = [
  {
    id: 1,
    name: "Chocolate Artistry",
    description: "Handmade chocolate tart with gold leaf and seasonal berries",
    image: dessert1,
  },
  {
    id: 2,
    name: "Macaron Collection",
    description: "Delicate French macarons in a rainbow of flavors",
    image: dessert2,
  },
  {
    id: 3,
    name: "Signature Cake",
    description: "Layered masterpiece adorned with edible flowers",
    image: dessert3,
  },
];

const FeaturedDesserts = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Creations
          </h2>
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
