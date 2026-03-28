import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">
              Have a question, feedback, or just want to say hi? We'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">help@fulfillfood.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 99999 99999</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="text-primary text-sm font-medium hover:underline">
                      Chat with us →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Your name" />
              <Input type="email" placeholder="Your email" />
              <Textarea placeholder="Your message" rows={5} />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
