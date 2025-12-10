import { 
  TrendingDown, 
  Clock, 
  Zap, 
  MessageSquare, 
  Workflow, 
  Plug,
  Check
} from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "60% Cost Reduction",
    description: "Reduce manpower costs significantly with AI handling routine tasks.",
    highlight: "60%",
  },
  {
    icon: Clock,
    title: "24/7 AI Support",
    description: "Never miss a customer inquiry with round-the-clock AI assistance.",
    highlight: "24/7",
  },
  {
    icon: Zap,
    title: "Faster Response Times",
    description: "Respond to customers in seconds instead of hours with AI automation.",
    highlight: "<1min",
  },
  {
    icon: MessageSquare,
    title: "Centralized Communications",
    description: "All channels unified in one dashboard for seamless management.",
    highlight: "1 Inbox",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Eliminate manual tasks with intelligent automation sequences.",
    highlight: "100%",
  },
  {
    icon: Plug,
    title: "Easy Integration",
    description: "Connect with your existing CRM, POS, and business systems effortlessly.",
    highlight: "Plug & Play",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Check className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Why SmartDails</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Operational Value{" "}
            <span className="text-gradient">That Matters</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            BPO teams gain productivity, clarity, and control with SmartDails. 
            One platform to transform your customer operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{benefit.highlight}</div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="mt-20 text-center">
          <h3 className="font-heading text-2xl font-bold mb-8">
            Trusted Across Industries
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["E-Commerce", "BPO Services", "Healthcare", "Finance", "Retail", "Logistics"].map(
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
