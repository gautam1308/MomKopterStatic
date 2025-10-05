import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is career counselling and who needs it?",
      answer: "Career counselling is a professional service that helps individuals identify their strengths, interests, and career goals. It's beneficial for students choosing their stream, graduates exploring career options, professionals seeking career changes, or anyone feeling uncertain about their career path.",
    },
    {
      question: "How long does the counselling process take?",
      answer: "The duration varies based on individual needs. Typically, initial assessments take 2-3 sessions, while comprehensive career planning may require 4-6 sessions over a few weeks. We offer flexible scheduling to accommodate your timeline.",
    },
    {
      question: "What assessments are included in your services?",
      answer: "We conduct various scientifically validated assessments including aptitude tests, personality assessments, interest inventories, and skill evaluations. These help create a comprehensive profile to guide your career decisions.",
    },
    {
      question: "Do you provide support after the counselling sessions?",
      answer: "Yes! We believe in long-term relationships with our clients. You'll have access to follow-up consultations, email support, and resources to help you stay on track with your career goals.",
    },
    {
      question: "How is MomKopter different from other career counselling services?",
      answer: "MomKopter offers personalized, one-on-one attention with experienced counsellors who have real industry insights. We combine scientific assessments with practical guidance, and our holistic approach considers your unique circumstances, aspirations, and constraints.",
    },
    {
      question: "What age groups do you cater to?",
      answer: "We work with individuals across all life stages - from high school students (10th-12th grade) making stream choices, to college students selecting majors, to working professionals considering career transitions or upskilling opportunities.",
    },
    {
      question: "How can I book a counselling session?",
      answer: "Booking is easy! Simply fill out the contact form below, call us, or send us an email. We'll schedule an initial consultation at your convenience to understand your needs and explain our process.",
    },
    {
      question: "Are online counselling sessions as effective as in-person sessions?",
      answer: "Absolutely! Our online sessions are designed to be just as interactive and effective as in-person meetings. We use secure video conferencing tools and digital assessment platforms to ensure a seamless experience.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
