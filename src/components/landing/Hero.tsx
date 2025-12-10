import { Button } from "@/components/ui/button";
import { Play, Zap, Send } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              AI-Powered BPO Automation Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}>
            Transform Customer Support with{" "}
            <span className="text-gradient">SmartDails AI</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Designed for high-volume BPO teams, SmartDails centralizes all conversations 
            into one intelligent dashboard. Automate interactions, reduce costs, and improve 
            agent performance with seamless AI-driven workflows.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#features">
              <Button variant="hero" size="xl">
                Get Started <Play className="w-5 h-5 ml-2" />
              </Button>
            </a>

            <a
              href="https://t.me/SmartDailsBot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="glass" size="xl">
                <Send className="w-5 h-5" />
                Chat on Telegram
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
