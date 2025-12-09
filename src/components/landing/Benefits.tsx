import { ArrowDown, ArrowUp, Check } from "lucide-react";

const comparisons = [
  {
    traditional: "2+ hours response time",
    ai: "Under 1 minute response",
    improvement: "120x faster",
  },
  {
    traditional: "High operational costs",
    ai: "60% cost reduction",
    improvement: "Major savings",
  },
  {
    traditional: "Manual follow-ups",
    ai: "Automated sequences",
    improvement: "100% coverage",
  },
  {
    traditional: "Inconsistent answers",
    ai: "AI-trained responses",
    improvement: "Perfect accuracy",
  },
  {
    traditional: "Limited hours",
    ai: "24/7 availability",
    improvement: "Always on",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            AI vs Traditional <span className="text-gradient">Workflows</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the dramatic improvement when you switch to AI-powered automation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <ArrowDown className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item.traditional}</span>
                </div>
                
                <div className="hidden md:flex justify-center">
                  <div className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                    {item.improvement}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:justify-end">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <ArrowUp className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.ai}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mt-20 text-center">
          <h3 className="font-heading text-2xl font-bold mb-8">
            Trusted Across Industries
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["E-Commerce", "Service Providers", "Agriculture", "Corporate", "SMEs", "Healthcare"].map(
              (industry) => (
                <div
                  key={industry}
                  className="px-6 py-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all cursor-pointer"
                >
                  {industry}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
