import { MessageCircle, Mail, Instagram, Globe, Send, Phone } from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    name: "WhatsApp",
    description: "Order updates & tracking",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MessageCircle,
    name: "Messenger",
    description: "Service inquiries & quotes",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Instagram,
    name: "Instagram DM",
    description: "Product info & sales",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Mail,
    name: "Email",
    description: "Auto-create tickets",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Globe,
    name: "Web Chat",
    description: "Lead capture & support",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Send,
    name: "Telegram",
    description: "Instant notifications",
    color: "from-sky-500 to-blue-600",
  },
];

const Channels = () => {
  return (
    <section id="channels" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            One Platform, <span className="text-gradient">All Channels</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with your customers wherever they are. Seamless integration across 
            all major messaging platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {channels.map((channel, index) => (
            <div
              key={channel.name}
              className="group glass rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <channel.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{channel.name}</h3>
              <p className="text-sm text-muted-foreground">{channel.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Plus integrations with{" "}
            <span className="text-foreground font-medium">CRM</span>,{" "}
            <span className="text-foreground font-medium">POS Systems</span>,{" "}
            <span className="text-foreground font-medium">Google Business</span> & more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Channels;
