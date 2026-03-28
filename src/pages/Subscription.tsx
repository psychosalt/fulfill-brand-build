import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionSection from "@/components/home/SubscriptionSection";
import { CheckCircle2 } from "lucide-react";

const Subscription = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Subscribe & Save</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Get your favourite protein meals delivered regularly. Cancel anytime, no questions asked.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Free Delivery", "Pause Anytime", "Change Meals Weekly", "No Lock-in"].map((f) => (
              <div key={f} className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SubscriptionSection />
    </main>
    <Footer />
  </>
);

export default Subscription;
