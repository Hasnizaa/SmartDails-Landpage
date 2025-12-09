import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the AI fully automated or do I need staff?",
    answer: "Yes, SmartDials is fully automated and can handle customer inquiries 24/7 without human intervention. However, you can configure human takeover for complex issues at any time. The AI handles routine queries while your team focuses on high-value interactions.",
  },
  {
    question: "What languages does SmartDials support?",
    answer: "SmartDials supports multiple languages including Malay (Bahasa Malaysia), English, Chinese (Mandarin & Cantonese), Tamil, and more. The AI automatically detects the customer's language and responds accordingly.",
  },
  {
    question: "How secure is my customer data?",
    answer: "We use enterprise-grade encryption for all data in transit and at rest. Our infrastructure complies with industry security standards, and we never share your data with third parties. Your customer information is safe with us.",
  },
  {
    question: "Can SmartDials integrate with my existing CRM or POS?",
    answer: "Absolutely! SmartDials integrates seamlessly with popular CRM systems, POS systems, and other business tools via API or no-code connectors. Our team can help set up custom integrations for your specific needs.",
  },
  {
    question: "How long does it take to set up SmartDials?",
    answer: "Most businesses are up and running within 24-48 hours. We provide guided onboarding, help train the AI on your company knowledge base, and ensure everything is configured correctly before you go live.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer: "When the AI encounters a query it can't confidently answer, it automatically escalates to a human agent with full context of the conversation. You can customize escalation rules based on topics, sentiment, or specific keywords.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
