import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Reduced our support workload by 50% in the first month. The AI handles most inquiries perfectly.",
    author: "E-Commerce Owner",
    role: "Online Retail",
    metric: "50% workload reduction",
  },
  {
    quote: "Response time went from 2 hours to under 1 minute. Our customers are amazed by the speed.",
    author: "Service Provider",
    role: "Professional Services",
    metric: "120x faster responses",
  },
  {
    quote: "Managing high-volume WhatsApp inquiries used to be a nightmare. Now it's completely automated.",
    author: "Agriculture SME",
    role: "Agribusiness",
    metric: "1000s of chats handled",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from businesses using SmartDials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 md:p-8 relative group hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/30 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {testimonial.role}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
