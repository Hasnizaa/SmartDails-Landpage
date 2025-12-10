import { Button } from "@/components/ui/button";
import {
  Play,
  Zap,
  Send,
  ChevronLeft,
  ChevronRight,
  Inbox,
  BarChart3,
  Workflow,
  MessageSquare
} from "lucide-react";
import { useEffect } from "react";

const mockupScreens = [
  { id: 1, title: "Unified Inbox", icon: Inbox },
  { id: 2, title: "Automation Builder", icon: Workflow },
  { id: 3, title: "Analytics Dashboard", icon: BarChart3 },
  { id: 4, title: "Multi-Channel View", icon: MessageSquare },
  { id: 5, title: "Campaign Manager", icon: Send },
];

const Hero = () => {
  useEffect(() => {
    const container = document.getElementById("mockup-carousel");
    const leftBtn = document.getElementById("slide-left");
    const rightBtn = document.getElementById("slide-right");

    let autoSlide: ReturnType<typeof setInterval>;
    let direction = 1;

    const startAuto = () => {
      autoSlide = setInterval(() => {
        if (container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          if (container.scrollLeft >= maxScroll - 10) {
            direction = -1;
          } else if (container.scrollLeft <= 10) {
            direction = 1;
          }
          container.scrollBy({ left: direction * 350, behavior: "smooth" });
        }
      }, 3000);
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
              AI-Powered BPO Automation Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}>
            Transform Customer Support with{" "}
            <span className="text-gradient">SmartDials AI</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Designed for high-volume BPO teams, SmartDials centralizes all conversations 
            into one intelligent dashboard. Automate interactions, reduce costs, and improve 
            agent performance with seamless AI-driven workflows.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#features">
              <Button variant="hero" size="xl">
                Get Started <Play className="w-5 h-5 ml-2" />
              </Button>
            </a>

            <a
              href="https://t.me/SmartDialsBot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="glass" size="xl">
                <Send className="w-5 h-5" />
                Chat on Telegram
              </Button>
            </a>
          </div>

          {/* Dynamic Mockup Slider */}
          <div 
            className="relative w-full max-w-6xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >

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
              id="mockup-carousel"
              className="flex overflow-x-auto no-scrollbar gap-6 px-12 scroll-smooth"
            >
              {mockupScreens.map((screen) => (
                <div
                  key={screen.id}
                  className="min-w-[380px] md:min-w-[450px] rounded-2xl overflow-hidden glass border border-border/50 shadow-glow shrink-0 hover:border-primary/50 transition-all duration-300"
                >
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                      <screen.icon className="w-3 h-3" />
                      {screen.title}
                    </div>
                  </div>

                  {/* Mockup Content Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-4 border border-primary/30">
                        <screen.icon className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">
                        {screen.title}
                      </p>
                      <p className="text-muted-foreground/60 text-xs mt-1">
                        Product Screenshot Placeholder
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
