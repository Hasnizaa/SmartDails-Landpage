import { 
  Inbox, 
  Users, 
  Workflow, 
  Send, 
  BarChart3,
  Monitor,
  Settings
} from "lucide-react";

const screens = [
  {
    icon: Inbox,
    title: "Unified Multi-Channel Inbox",
    description: "All conversations from WhatsApp, Messenger, Instagram, Email, and more in one place.",
    video: "/wasap.mp4",
    poster: "/inbox-poster.png",
  },
  {
    icon: Users,
    title: "Contact & Lead Management",
    description: "Comprehensive contact database with lead scoring, tags, and conversation history.",
    video: "/contact.mp4",
  },
  {
    icon: Workflow,
    title: "Automation Builder",
    description: "Visual workflow builder to create complex automation sequences without code.",
    video: "/tele.mp4",
    poster: "/automation-poster.png",
  },
  {
    icon: Send,
    title: "Campaign & Broadcast Manager",
    description: "Send targeted messages and campaigns to segmented contact lists at scale.",
    video: "/campaign.mp4",
    poster: "/campaign-poster.png",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into team performance, response times, and customer satisfaction.",
    video: "/dashboardvid.mp4",
    poster: "/analytics-poster.png",
  },
  {
    icon: Settings,
    title: "Client Project Management",
    description: "Switch between multiple client workspaces with isolated automation and chat routing.",
    video: "/projects.mp4",
    poster: "/projects-poster.png",
  },
];

const ProductScreens = () => {
  return (
    <section id="product" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Monitor className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Product Features</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Powerful Dashboard for{" "}
            <span className="text-gradient">BPO Operations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to manage high-volume customer communications in one intuitive platform.
          </p>
        </div>

        {/* Grid – now 6 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screens.map((screen, index) => (
            <div
              key={screen.title}
              className="glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
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

              {/* Video mockup (no play button) */}
              <div className="aspect-video bg-black relative">
                <video
                  src={screen.video}
                  poster={screen.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">{screen.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  {screen.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductScreens;
