import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import milletBowl from "@/assets/product-millet-bowl.jpg";
import quinoaBowl from "@/assets/product-quinoa-bowl.jpg";
import oatsBowl from "@/assets/product-oats-bowl.jpg";
import dalRice from "@/assets/product-dal-rice.jpg";

const products = [
  { name: "High-Protein Millet Bowl", protein: "22g", calories: "380 kcal", fiber: "8g", price: 120, rating: 4.8, reviews: 234, tag: "Bestseller", image: milletBowl, desc: "A wholesome millet bowl with grilled paneer, fresh veggies, and aromatic spices." },
  { name: "Quinoa Chickpea Power Bowl", protein: "20g", calories: "350 kcal", fiber: "10g", price: 140, rating: 4.7, reviews: 189, tag: "New", image: quinoaBowl, desc: "Protein-rich quinoa paired with chickpeas, avocado, and a tangy dressing." },
  { name: "Protein Oats Berry Bowl", protein: "18g", calories: "320 kcal", fiber: "7g", price: 110, rating: 4.9, reviews: 312, tag: "Breakfast", image: oatsBowl, desc: "Creamy oats topped with fresh berries, nuts, and a drizzle of honey." },
  { name: "Dal Chawal Protein Bowl", protein: "24g", calories: "410 kcal", fiber: "9g", price: 130, rating: 4.8, reviews: 276, tag: "Comfort", image: dalRice, desc: "Classic dal chawal reimagined with extra protein and wholesome brown rice." },
  { name: "Paneer Tikka Bowl", protein: "26g", calories: "400 kcal", fiber: "6g", price: 150, rating: 4.6, reviews: 145, tag: "Popular", image: milletBowl, desc: "Smoky paneer tikka over a bed of flavoured rice with mint chutney." },
  { name: "Rajma Rice Bowl", protein: "21g", calories: "390 kcal", fiber: "11g", price: 125, rating: 4.7, reviews: 198, tag: "Comfort", image: dalRice, desc: "North Indian favourite rajma chawal with a high-protein twist." },
];

const Products = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-muted-foreground text-lg">
              Every meal is protein-packed, made with clean ingredients, and ready in 2 minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.name} className="group bg-card rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative overflow-hidden aspect-square">
                  <img src={p.image} alt={p.name} width={800} height={800} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">{p.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{p.desc}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{p.rating}</span>
                    <span className="text-muted-foreground text-xs">({p.reviews} reviews)</span>
                  </div>
                  {/* Nutrition */}
                  <div className="flex gap-3 text-xs text-muted-foreground mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-semibold">{p.protein} Protein</span>
                    <span className="px-2 py-1 bg-secondary rounded-full">{p.calories}</span>
                    <span className="px-2 py-1 bg-secondary rounded-full">{p.fiber} Fiber</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹{p.price}</span>
                    <Button>Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Products;
