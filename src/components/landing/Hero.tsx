import { Button } from "@/components/ui/button";
import {
  Play,
  Zap,
  MessageSquare,
  Clock,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    const container = document.getElementById("video-carousel");
    const leftBtn = document.getElementById("slide-left");
    const rightBtn = document.getElementById("slide-right");

    let autoSlide: any;

    const startAuto = () => {
      autoSlide = setInterval(() => {
        container?.scrollBy({ left: 350, behavior: "smooth" });
      }, 3500);
    };

    const stopAuto = () => clearInterval(autoSlide);

    startAuto();

    container?.addEventListener("mouseenter", stopAuto);
    container?.addEventListener("mouseleave", startAuto);

    leftBtn?.addEventListener("click", () => {
      container?.scrollBy({ left: -350, behavior: "smooth" });
    });

    rightBtn?.addEventListener("click", () => {
      container?.scrollBy({ left: 350, behavior: "smooth" });
    });

    return () => clearInterval(autoSlide);
  }, []);

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
              AI-Powered Customer Automation
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}>
            Automate Your Customer Support with{" "}
            <span className="text-gradient">SmartDials AI</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Connect instantly across WhatsApp, Telegram, Messenger, and Web Chat
            using real-time AI automation.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#demo">
              <Button variant="hero" size="xl">
                Try Live Demo <Play className="w-5 h-5 ml-2" />
              </Button>
            </a>

            <a
              href="https://t.me/SmartDialsBot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="glass" size="xl">
                <MessageSquare className="w-5 h-5" />
                Chat on Telegram
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="glass rounded-xl p-4 md:p-6">
              <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold">&lt; 1 min</div>
              <div className="text-sm text-muted-foreground">
                Avg. Response Time
              </div>
            </div>

            <div className="glass rounded-xl p-4 md:p-6">
              <Zap className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold">60%</div>
              <div className="text-sm text-muted-foreground">
                Operational Savings
              </div>
            </div>

            <div className="glass rounded-xl p-4 md:p-6">
              <MessageSquare className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>

          {/* Horizontal Mockup Slider */}
          <div className="relative w-full max-w-5xl mx-auto">

            {/* Left button */}
            <button
              id="slide-left"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/70 p-3 rounded-full shadow-lg z-20 hover:bg-background transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right button */}
            <button
              id="slide-right"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/70 p-3 rounded-full shadow-lg z-20 hover:bg-background transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slider */}
            <div
              id="video-carousel"
              className="flex overflow-x-auto no-scrollbar gap-6 px-12 scroll-smooth"
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="min-w-[420px] rounded-2xl overflow-hidden glass border border-border/50 shadow-glow shrink-0"
                >
                  <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 text-center text-xs text-muted-foreground">
                      mockup-scene-{i}
                    </div>
                  </div>

                  <div className="aspect-video bg-muted/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full glass flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Mockup Scene {i} (Replace With Link)
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Demo Video */}
          <div id="demo" className="max-w-4xl mx-auto mt-20 animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden glass border border-border/50 shadow-glow">

              {/* Browser UI */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 text-center text-xs text-muted-foreground">
                  demo.smartdials.ai
                </div>
              </div>

              {/* Video */}
              <div className="aspect-video bg-black flex items-center justify-center">
                <video className="w-full h-full" controls>
                  <source src="/videos/telegram-demo.mp4" type="video/mp4" />
                </video>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
