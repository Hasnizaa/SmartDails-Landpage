import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 relative">
            Ready to <span className="text-gradient">Transform</span> Your Customer Service?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto relative">
            Join hundreds of businesses already using SmartDials to automate support, 
            reduce costs, and delight customers 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <a href="#pricing">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="xl">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 relative">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
