import { 
  Bot, 
  Brain, 
  Workflow, 
  MessageSquare, 
  TicketCheck, 
  UserCheck, 
  Zap,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Auto-Reply",
    description: "Intelligent responses to FAQs, inquiries, and common requests 24/7 without human intervention.",
  },
  {
    icon: Brain,
    title: "Intent Detection",
    description: "AI understands customer intent from messages and takes appropriate action automatically.",
  },
  {
    icon: Workflow,
    title: "Conversation Routing",
    description: "Smart routing directs conversations to the right agent based on skills and availability.",
  },
  {
    icon: MessageSquare,
    title: "Chat Summarization",
    description: "AI generates summaries of long conversations for quick agent handoffs.",
  },
  {
    icon: TicketCheck,
    title: "Ticket Creation",
    description: "Automatically create support tickets from conversations with full context attached.",
  },
  {
    icon: UserCheck,
    title: "Lead Follow-up",
    description: "Automated follow-up sequences to nurture leads and increase conversions.",
  },
  {
    icon: Zap,
    title: "Event Triggers",
    description: "Trigger workflows based on events like new messages, status changes, or keywords.",
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Never miss a customer inquiry. AI works around the clock without breaks.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI Automation</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Your Strongest Agent,{" "}
            <span className="text-gradient">Active 24/7</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            SmartDials operates like your best agent — always on, always consistent. 
            Automate repetitive tasks, boost agent productivity, and ensure intelligent 
            responses across every conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
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
      </div>
    </section>
  );
};

export default Features;
