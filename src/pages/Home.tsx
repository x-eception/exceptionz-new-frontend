import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Sparkles, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBanner from '@/assets/hero-banner.jpg';
import AIFabButton from '@/components/AIFabButton';
import Galaxy from '@/components/Galaxy';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build powerful, scalable web applications with cutting-edge technologies',
    },
    {
      icon: Sparkles,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to transform your business',
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Modernize your business with innovative digital strategies',
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert guidance to navigate your technology journey',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
                <Galaxy 
                  mouseRepulsion={true}
                  mouseInteraction={true}
                  density={1.2}
                  glowIntensity={0.4}
                  saturation={0.6}
                  hueShift={200}
                  transparent={false}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/70 to-background/75" /> */}
              </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">

          <div className="animated-gradient-text text-5xl md:text-7xl font-bold mb-10">
            <span className="gradient-overlay"></span>
            <span className="text-content">
              Transform Your Vision Into Reality
            </span>
          </div>


            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-delay">
              We ex-ceptionz delivers world-class technology solutions that drive innovation and growth for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-lg px-8 hover:scale-105 transition-transform">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-transform">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="group">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gradient-primary rounded-3xl p-12 text-center text-white shadow-elegant">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with innovative technology solutions
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI FAB Button */}
      <AIFabButton />
    </div>
  );
};

export default Home;
