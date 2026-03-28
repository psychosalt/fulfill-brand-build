import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl font-bold mb-3">Fulfill</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Protein-powered everyday meals. Affordable, tasty, and nutritious.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/products" className="hover:text-primary-foreground transition-colors">Products</Link>
            <Link to="/subscription" className="hover:text-primary-foreground transition-colors">Subscription</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link>
            <Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Support</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="hover:text-primary-foreground transition-colors">WhatsApp</a>
            <span>help@fulfillfood.in</span>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © 2026 Fulfill Foods. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
