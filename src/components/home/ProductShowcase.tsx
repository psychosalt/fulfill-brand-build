import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import milletBowl from "@/assets/product-millet-bowl.jpg";
import quinoaBowl from "@/assets/product-quinoa-bowl.jpg";
import oatsBowl from "@/assets/product-oats-bowl.jpg";
import dalRice from "@/assets/product-dal-rice.jpg";

const products = [
  {
    name: "High-Protein Millet Bowl",
    protein: "22g",
    price: 120,
    tag: "Bestseller",
    image: milletBowl,
  },
  {
    name: "Quinoa Chickpea Power Bowl",
    protein: "20g",
    price: 140,
    tag: "New",
    image: quinoaBowl,
  },
  {
    name: "Protein Oats Berry Bowl",
    protein: "18g",
    price: 110,
    tag: "Breakfast",
    image: oatsBowl,
  },
  {
    name: "Dal Chawal Protein Bowl",
    protein: "24g",
    price: 130,
    tag: "Comfort",
    image: dalRice,
  },
];

const ProductShowcase = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Menu</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Meals That <span className="italic">Actually</span> Taste Good
        </h2>
        <p className="text-muted-foreground text-lg">
          Every bowl is packed with protein, made with clean ingredients, and ready in 2 minutes.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div
            key={p.name}
            className="group bg-background rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative overflow-hidden aspect-square">
              <img
                src={p.image}
                alt={p.name}
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                {p.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base mb-2">{p.name}</h3>
              <div className="flex items-center justify-between">
                <div className="flex gap-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">{p.protein} Protein</span>
                  <span>•</span>
                  <span>No Sugar</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold">₹{p.price}</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button variant="outline" size="lg" asChild>
          <Link to="/products">View All Products →</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ProductShowcase;
