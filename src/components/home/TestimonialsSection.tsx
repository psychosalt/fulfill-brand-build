import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Engineering Student, Delhi",
    text: "Finally, a meal that's high-protein AND affordable. I eat Fulfill almost every day between classes!",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Software Developer, Bangalore",
    text: "As someone who works long hours, having a healthy meal ready in 2 minutes is a game-changer. Way better than ordering out.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Fitness Coach, Mumbai",
    text: "I recommend Fulfill to all my clients. Clean ingredients, transparent labels, and the protein content is legit. Love the Dal Chawal bowl!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-accent uppercase tracking-wider">Real Stories</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Loved by Thousands
        </h2>
        <p className="text-muted-foreground text-lg">
          Hear from students, professionals, and fitness enthusiasts who made the switch to Fulfill.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-secondary rounded-2xl p-8 border transition-transform hover:-translate-y-1"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
            <div>
              <div className="font-bold text-sm">{t.name}</div>
              <div className="text-muted-foreground text-xs">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
