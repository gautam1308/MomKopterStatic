import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-counsellor.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Discover Your Perfect Career Path
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Expert <span className="text-secondary">Career</span> Counselling
              </h1>
              <p className="text-lg text-muted-foreground">
                Empowering students and professionals to make informed career decisions with personalized guidance and expert insights.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Students Guided</div>
              </Card>
              <Card className="p-4 text-center border-2 border-secondary/20 hover:border-secondary transition-colors">
                <div className="text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
              </Card>
              <Card className="p-4 text-center border-2 border-accent/20 hover:border-accent transition-colors">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
              >
                View Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Professional career counsellor"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
