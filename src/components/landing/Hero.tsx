import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, MessageSquare, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-60" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              AI-Powered Customer Automation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Automate Your{" "}
            <span className="text-gradient">Customer Support</span>{" "}
            Across Every Channel
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            AI that handles thousands of conversations on WhatsApp, Messenger, Email, 
            Instagram & Web Chat. Reduce costs by 60% with 24/7 intelligent automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#pricing">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="xl">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass rounded-xl p-4 md:p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                &lt;1 min
              </div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="glass rounded-xl p-4 md:p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">60%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="glass rounded-xl p-4 md:p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
