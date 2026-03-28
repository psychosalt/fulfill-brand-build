import { Leaf, IndianRupee, Dumbbell, Timer } from "lucide-react";

const usps = [
  { icon: Dumbbell, title: "High Protein", desc: "20g+ protein in every meal for your fitness goals." },
  { icon: IndianRupee, title: "Affordable", desc: "Starting at just ₹120. Premium nutrition at fair prices." },
  { icon: Leaf, title: "Clean Ingredients", desc: "No preservatives, no added sugar, no junk. Just real food." },
  { icon: Timer, title: "Ready in 2 Min", desc: "Heat, eat, repeat. Perfect for busy schedules." },
];

const WhyFulfill = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-accent uppercase tracking-wider">Why Choose Us</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Built for <span className="italic">Real</span> Indian Lives
        </h2>
        <p className="text-muted-foreground text-lg">
          We designed Fulfill for students, professionals, and anyone who refuses to compromise on health or budget.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {usps.map((u, i) => (
          <div key={u.title} className="text-center p-8 rounded-2xl bg-secondary border transition-transform hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
              <u.icon className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">{u.title}</h3>
            <p className="text-muted-foreground text-sm">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyFulfill;
