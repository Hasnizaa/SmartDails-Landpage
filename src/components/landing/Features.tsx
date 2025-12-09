import { 
  Bot, 
  TicketCheck, 
  Workflow, 
  UserCheck, 
  Brain, 
  Languages, 
  BarChart3, 
  Clock,
  Zap,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Auto-Reply",
    description: "Instant responses to FAQs, order tracking, and common inquiries 24/7.",
  },
  {
    icon: TicketCheck,
    title: "Smart Ticketing",
    description: "Auto-assignment and routing to the right agents based on context.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate approvals, routing, and follow-ups without manual intervention.",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description: "AI scores and qualifies leads, routing hot prospects to sales instantly.",
  },
  {
    icon: Brain,
    title: "Sentiment Analysis",
    description: "Detect customer emotions and escalate negative experiences immediately.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Communicate in Malay, English, Chinese, Tamil, and more languages.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into performance, response times, and customer satisfaction.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a customer inquiry, even outside business hours.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Powerful Features</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Scale Support</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From automated responses to deep analytics, SmartDials provides 
            enterprise-grade tools to transform your customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mt-20 glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              Automation Scenarios
            </h3>
            <p className="text-muted-foreground">
              See how SmartDials handles your everyday customer interactions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Order Tracking",
              "Quotation Requests",
              "Lead Qualification",
              "Customer Support",
              "Appointment Booking",
              "Post-Sales Follow-up",
            ].map((scenario) => (
              <div
                key={scenario}
                className="bg-secondary/50 rounded-xl px-4 py-3 text-center hover:bg-secondary transition-colors cursor-pointer"
              >
                <span className="text-sm font-medium text-foreground">
                  {scenario}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
