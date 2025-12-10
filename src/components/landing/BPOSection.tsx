import { 
  Building2, 
  Users, 
  Settings, 
  Eye, 
  Target, 
  Layers 
} from "lucide-react";

const bpoFeatures = [
  {
    icon: Layers,
    title: "Multi-Project Environment",
    description: "Manage multiple client projects with separate configurations and team assignments.",
  },
  {
    icon: Users,
    title: "Advanced Queue & Assignment",
    description: "Smart queue management with skill-based routing and workload balancing.",
  },
  {
    icon: Eye,
    title: "Supervisor Monitoring",
    description: "Real-time visibility into agent activities, conversations, and performance metrics.",
  },
  {
    icon: Target,
    title: "SLA & KPI Tracking",
    description: "Monitor service levels, response times, and key performance indicators.",
  },
  {
    icon: Settings,
    title: "High-Throughput Handling",
    description: "Built to handle thousands of concurrent conversations without performance issues.",
  },
];

const BPOSection = () => {
  return (
    <section id="bpo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">For BPO Companies</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Built for{" "}
              <span className="text-gradient">High-Volume Operations</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              SmartDails is engineered for BPO teams managing thousands of conversations 
              across multiple clients. Scale your operations with enterprise-grade tools 
              designed for maximum efficiency.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Daily Conversations</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Agents Per Team</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-4">
            {bpoFeatures.map((feature) => (
              <div
                key={feature.title}
                className="glass rounded-xl p-5 flex gap-4 items-start hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BPOSection;
