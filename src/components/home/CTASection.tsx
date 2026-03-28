import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-primary-foreground">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Start Eating Better Today
        </h2>
        <p className="text-lg opacity-80 max-w-xl mx-auto mb-8">
          Join thousands of Indians who've switched to protein-packed, affordable meals. Your body will thank you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/products">Order Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/subscription">Start Subscription</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
