import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'ai', 'design'];

  const projects = [
    {
      title: 'MahaLakshmi Garments',
      category: 'web',
      image: 'https://assets-for-personal-use.s3.ap-south-1.amazonaws.com/Screenshot+2025-10-03+141018.png',
      description: 'Growing Clothing Company.',
      tags: ['MERN', 'GCP'],
    },
    {
      title: 'Scoops Dreamz',
      category: 'web',
      image: 'https://assets-for-personal-use.s3.ap-south-1.amazonaws.com/Screenshot+2025-10-03+141101.png',
      description: 'ice Cream Website',
      tags: ['MERN', 'AWS'],
    },
    {
      title: 'Sparkling Events',
      category: 'web',
      image: 'https://assets-for-personal-use.s3.ap-south-1.amazonaws.com/Screenshot+2025-10-03+141356.png',
      description: 'Intelligent customer service chatbot with NLP capabilities',
      tags: ['MERN', 'AWS'],
    },
    {
      title: 'Brand Identity System',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      description: 'Complete brand identity and design system for a fintech startup',
      tags: ['Figma', 'Brand Design', 'UI/UX'],
    },
    {
      title: 'SaaS Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      description: 'Analytics dashboard for business intelligence',
      tags: ['Vue.js', 'D3.js', 'PostgreSQL'],
    },
    {
      title: 'Fitness Tracker App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
      description: 'Personal fitness tracking with social features',
      tags: ['Flutter', 'Firebase', 'Wearables'],
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcasing our best work and success stories from clients around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sticky top-20 bg-background/80 backdrop-blur-lg border-b border-border z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? 'default' : 'outline'}
                className={filter === category ? 'gradient-primary' : ''}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    {/* <Button variant="secondary" size="sm">
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button> */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
