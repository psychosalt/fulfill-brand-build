import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";

const About = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Story</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-8">
            We Believe Nutrition Shouldn't Be a <span className="italic">Luxury</span>
          </h1>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Fulfill was born from a simple frustration: why does eating healthy have to be so expensive or tasteless? 
              As students and working professionals ourselves, we were tired of choosing between greasy samosas and ₹400 "wellness bowls."
            </p>
            <p>
              So we built something different. Meals that are high in protein, made with real ingredients, designed for Indian taste buds, 
              and priced so anyone can afford them. No fancy marketing gimmicks — just honest food that does its job.
            </p>
            <p>
              Every Fulfill meal is crafted by nutritionists and food scientists who understand Indian dietary needs. 
              We source locally, minimize processing, and never use artificial preservatives or added sugar.
            </p>
            <p>
              Our mission? Make it possible for every student, every professional, every Indian to eat a protein-rich, 
              nutritious meal without burning a hole in their pocket. That's what Fulfill is all about.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { val: "50K+", label: "Meals Delivered" },
              { val: "4.8★", label: "Average Rating" },
              { val: "15+", label: "Cities" },
              { val: "0g", label: "Added Sugar" },
            ].map((s) => (
              <div key={s.label} className="text-center p-6 bg-secondary rounded-2xl">
                <div className="text-2xl md:text-3xl font-bold text-primary">{s.val}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
  </>
);

export default About;
