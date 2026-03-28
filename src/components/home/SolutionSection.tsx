import { CheckCircle2 } from "lucide-react";
import productImg from "@/assets/product-millet-bowl.jpg";

const benefits = [
  "20g+ protein per meal",
  "No added sugar or preservatives",
  "Ready in under 2 minutes",
  "Starts at just ₹120",
  "Designed for Indian taste buds",
];

const SolutionSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={productImg}
              alt="Fulfill High-Protein Millet Bowl"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg">
            <div className="text-2xl font-bold">₹120</div>
            <div className="text-sm opacity-80">per meal</div>
          </div>
        </div>
        <div>
          <span className="text-sm font-medium text-accent uppercase tracking-wider">The Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Meet <span className="italic">Fulfill</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            High-protein, ready-to-eat meals made with clean ingredients. 
            Tasty enough to crave, affordable enough to eat every day.
          </p>
          <div className="space-y-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-base font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
