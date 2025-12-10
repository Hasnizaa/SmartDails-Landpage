import { MessageCircle, Mail, Instagram, Globe, Send, Sparkles, ArrowRight } from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    name: "WhatsApp",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MessageCircle,
    name: "Messenger",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Instagram,
    name: "Instagram DM",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Mail,
    name: "Email",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Globe,
    name: "Web Chat",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Send,
    name: "Telegram",
    color: "from-sky-500 to-blue-600",
  },
];

const Channels = () => {
  return (
    <section id="channels" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Multi-Channel Support</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            One AI Inbox, <span className="text-gradient">All Channels</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Connect, automate, and engage customers across all major communication platforms. 
            SmartDails unifies every channel into one AI-driven inbox that instantly identifies 
            customer intent, responds intelligently, and routes conversations to the right agent.
          </p>
        </div>

        {/* Channel Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-12">
          {channels.map((channel, index) => (
            <div
              key={channel.name}
              className="group glass rounded-2xl p-4 md:p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 mx-auto rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <channel.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-medium text-foreground text-sm md:text-base">{channel.name}</h3>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Intent Detection</h4>
              <p className="text-sm text-muted-foreground">
                AI instantly identifies what customers need
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Smart Responses</h4>
              <p className="text-sm text-muted-foreground">
                Intelligent replies based on context
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Auto Routing</h4>
              <p className="text-sm text-muted-foreground">
                Route to the right agent automatically
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Channels;
