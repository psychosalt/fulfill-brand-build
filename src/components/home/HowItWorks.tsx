import { Search, SlidersHorizontal, CalendarCheck, Utensils } from "lucide-react";

const steps = [
  { icon: Search, title: "Browse", desc: "Explore our protein-packed menu" },
  { icon: SlidersHorizontal, title: "Customize", desc: "Pick meals that match your taste" },
  { icon: CalendarCheck, title: "Subscribe", desc: "Choose a weekly or monthly plan" },
  { icon: Utensils, title: "Enjoy", desc: "Fresh meals delivered to your door" },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28 bg-primary text-primary-foreground">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium opacity-70 uppercase tracking-wider">Simple Process</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          How It Works
        </h2>
        <p className="opacity-70 text-lg">
          Getting started with Fulfill is easier than ordering food online.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="relative text-center p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-5">
              <s.icon className="h-7 w-7" />
            </div>
            <div className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-full text-6xl font-display font-bold opacity-10">
              {i + 1}
            </div>
            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
            <p className="opacity-70 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
