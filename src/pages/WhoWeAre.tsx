import { Target, Eye, Heart, Award } from 'lucide-react';

const WhoWeAre = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the global leader in technology innovation, creating solutions that shape the future of business.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Innovation, Integrity, Excellence, and Customer Success are the pillars that guide everything we do.',
    },
    {
      icon: Award,
      title: 'Our Commitment',
      description: 'Delivering world-class solutions with unwavering dedication to quality, reliability, and client satisfaction.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground">
              A team of passionate technologists committed to transforming businesses through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Building the Future of Technology</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Founded in 2020, Settlo Tech has rapidly grown into a leading technology solutions provider,
                serving clients across the globe. Our journey began with a simple mission: to make cutting-edge
                technology accessible to businesses of all sizes.
              </p>
              <p className="text-muted-foreground text-lg">
                Today, we're proud to have helped hundreds of companies transform their operations, engage
                their customers, and achieve their business goals through innovative technology solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-2xl border border-border text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Team Members</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">25+</h3>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-elegant transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl gradient-accent flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
