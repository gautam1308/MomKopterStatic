import { Card } from "@/components/ui/card";
import { GraduationCap, Target, TrendingUp, Users, Briefcase, BookOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Career Assessment",
      description: "Comprehensive aptitude and personality tests to identify your strengths and ideal career paths.",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Strategic planning and roadmap creation to help you achieve your career objectives effectively.",
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Identify skill gaps and receive guidance on courses and certifications to enhance your profile.",
    },
    {
      icon: Users,
      title: "One-on-One Counselling",
      description: "Personalized sessions with experienced counsellors who understand your unique aspirations.",
    },
    {
      icon: Briefcase,
      title: "Industry Insights",
      description: "Stay updated with current industry trends, job market analysis, and emerging opportunities.",
    },
    {
      icon: BookOpen,
      title: "College & Course Selection",
      description: "Expert advice on choosing the right educational path aligned with your career goals.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive career counselling services tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
