import { Button } from "@/components/ui/button";
import { Check, Zap, Star, Building } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small businesses getting started",
    price: "RM 299",
    period: "/month",
    icon: Zap,
    features: [
      "1 channel integration",
      "500 chats/month",
      "Basic AI replies",
      "Email support",
      "Basic analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    description: "For growing companies",
    price: "RM 799",
    period: "/month",
    icon: Star,
    features: [
      "Multi-channel support",
      "Unlimited chats",
      "Advanced AI training",
      "Ticketing system",
      "Workflow automation",
      "Priority support",
      "Full analytics dashboard",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: "Custom",
    period: "",
    icon: Building,
    features: [
      "All Business features",
      "Custom integrations",
      "Dedicated account manager",
      "Full AI training",
      "SLA guarantee",
      "API access",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business. Scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-primary shadow-glow"
                  : "glass hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-foreground text-background text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                plan.popular ? "bg-background/20" : "bg-primary/10"
              }`}>
                <plan.icon className={`w-6 h-6 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
              </div>

              <h3 className={`font-heading text-xl font-bold mb-1 ${
                plan.popular ? "text-primary-foreground" : "text-foreground"
              }`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${
                plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-background/20" : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.popular ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </div>
                    <span className={`text-sm ${
                      plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "secondary" : "hero"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
