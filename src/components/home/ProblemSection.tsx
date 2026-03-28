import { XCircle } from "lucide-react";

const problems = [
  { title: "Junk Food", desc: "Cheap but loaded with sugar, oil, and empty calories." },
  { title: "Healthy Food", desc: "Either too expensive or too bland to eat daily." },
  { title: "Cooking at Home", desc: "Time-consuming when you're juggling work or studies." },
];

const ProblemSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-accent uppercase tracking-wider">The Problem</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Eating Well Shouldn't Be This Hard
        </h2>
        <p className="text-muted-foreground text-lg">
          Most people are stuck choosing between unhealthy fast food and overpriced "healthy" options.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <div
            key={p.title}
            className="bg-background rounded-2xl p-8 border transition-transform hover:-translate-y-1"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <XCircle className="h-10 w-10 text-destructive mb-4" />
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
