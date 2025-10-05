import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-illustration.jpg";

const AboutUs = () => {
  const highlights = [
    "Personalized career assessment and guidance",
    "Expert counsellors with industry experience",
    "Proven track record of successful placements",
    "Comprehensive support throughout your journey",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">MomKopter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in career development and professional growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={aboutImage}
              alt="About MomKopter"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed">
                MomKopter is a premier career counselling organization dedicated to helping students and professionals make informed career decisions. With over 15 years of experience, we've guided hundreds of individuals towards their dream careers.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-secondary">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower every individual with the knowledge, resources, and confidence needed to navigate their career journey successfully and achieve their professional aspirations.
              </p>
            </Card>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <p className="text-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
