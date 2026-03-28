import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBowl from "@/assets/hero-bowl.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBowl} alt="Healthy protein meal bowl" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>

    <div className="container relative z-10 pt-20">
      <div className="max-w-2xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
          🌱 Made for India
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-primary-foreground mb-6" style={{ animationDelay: "0.1s" }}>
          Protein-Powered{" "}
          <span className="italic">Everyday</span> Meals
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Affordable, tasty, and nutritious ready-to-eat meals. No compromise between taste and nutrition.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" asChild>
            <Link to="/products">Order Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/subscription">Start Subscription</Link>
          </Button>
        </div>
        <div className="flex gap-8 mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { val: "20g+", label: "Protein" },
            { val: "₹120", label: "Starting at" },
            { val: "2 min", label: "Ready in" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">{s.val}</div>
              <div className="text-xs text-primary-foreground/60 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
