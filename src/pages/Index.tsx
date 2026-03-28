import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import WhyFulfill from "@/components/home/WhyFulfill";
import HowItWorks from "@/components/home/HowItWorks";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SubscriptionSection from "@/components/home/SubscriptionSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductShowcase />
      <WhyFulfill />
      <HowItWorks />
      <TestimonialsSection />
      <SubscriptionSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
