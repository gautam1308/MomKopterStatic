import { Card } from "@/components/ui/card";
import { Award, Heart, Lightbulb, Shield } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Our team of certified career counsellors brings years of industry experience and a track record of helping students succeed.",
      color: "primary",
    },
    {
      icon: Heart,
      title: "Personalized Approach",
      description: "We understand that every individual is unique. Our counselling is tailored to your specific needs, aspirations, and circumstances.",
      color: "secondary",
    },
    {
      icon: Lightbulb,
      title: "Holistic Guidance",
      description: "From career exploration to skill development and job placement, we support you at every step of your professional journey.",
      color: "accent",
    },
    {
      icon: Shield,
      title: "Trusted Support",
      description: "Build confidence with our continuous support system. We're committed to your long-term success and growth.",
      color: "primary",
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-secondary">MomKopter</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the preferred choice for career counselling
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-${reason.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`text-${reason.color}`} size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
