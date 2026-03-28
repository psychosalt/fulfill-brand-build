import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I heat the meals?", a: "Simply add hot water or microwave for 2 minutes. Each packet has easy instructions." },
  { q: "Are the meals truly high in protein?", a: "Yes! Every meal has 18–26g of protein from natural sources like lentils, millets, paneer, and chickpeas. No protein powders added." },
  { q: "Is there any added sugar?", a: "No. We use zero added sugar in all our meals. Any sweetness comes from natural ingredients." },
  { q: "Can I cancel my subscription?", a: "Absolutely. You can pause, modify, or cancel your subscription anytime from your account. No lock-in period." },
  { q: "Do you deliver to my city?", a: "We currently deliver to 15+ cities across India. Enter your pincode at checkout to verify availability." },
  { q: "Are the meals vegetarian?", a: "Yes, all our current meals are 100% vegetarian and made with plant-based and dairy protein sources." },
  { q: "How long do the meals last?", a: "Our meals have a shelf life of 6 months without refrigeration, thanks to our retort packaging — no preservatives needed." },
  { q: "What if I don't like a meal?", a: "We offer a satisfaction guarantee. If you don't enjoy a meal, reach out to us and we'll make it right." },
];

const FAQ = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about Fulfill meals.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-secondary border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default FAQ;
