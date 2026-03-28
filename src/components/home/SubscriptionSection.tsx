import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    meals: "15 meals/month",
    price: 1800,
    perMeal: 120,
    features: ["Mix & match any meals", "Free delivery", "Pause anytime", "Nutrition tracking"],
    popular: false,
  },
  {
    name: "Pro",
    meals: "30 meals/month",
    price: 3000,
    perMeal: 100,
    features: ["Everything in Starter", "Priority delivery", "Exclusive flavors", "Dietitian consultation"],
    popular: true,
  },
  {
    name: "Family",
    meals: "60 meals/month",
    price: 5400,
    perMeal: 90,
    features: ["Everything in Pro", "Family sharing", "Custom meal plans", "Dedicated support"],
    popular: false,
  },
];

const SubscriptionSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-accent uppercase tracking-wider">Subscribe & Save</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Plans That Fit Your Life
        </h2>
        <p className="text-muted-foreground text-lg">
          Save more when you subscribe. Cancel or pause anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl p-8 border transition-transform hover:-translate-y-1 ${
              p.popular ? "bg-primary text-primary-foreground ring-2 ring-primary scale-105" : "bg-background"
            }`}
          >
            {p.popular && (
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className={`text-sm mt-1 ${p.popular ? "opacity-70" : "text-muted-foreground"}`}>{p.meals}</p>
            <div className="mt-6 mb-6">
              <span className="text-4xl font-bold">₹{p.price}</span>
              <span className={`text-sm ${p.popular ? "opacity-70" : "text-muted-foreground"}`}>/month</span>
              <div className={`text-xs mt-1 ${p.popular ? "opacity-60" : "text-muted-foreground"}`}>
                ₹{p.perMeal} per meal
              </div>
            </div>
            <div className="space-y-3 mb-8">
              {p.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <Button
              className="w-full"
              variant={p.popular ? "secondary" : "default"}
              asChild
            >
              <Link to="/subscription">Get Started</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SubscriptionSection;
