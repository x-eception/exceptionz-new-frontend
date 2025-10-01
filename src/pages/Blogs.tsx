import { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogs = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      author: 'Sarah Johnson',
      date: '2024-03-15',
      readTime: '5 min read',
      tags: ['AI', 'Web Development', 'Technology'],
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure',
      excerpt: 'Best practices and strategies for designing cloud infrastructure that grows with your business.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      author: 'Michael Chen',
      date: '2024-03-12',
      readTime: '7 min read',
      tags: ['Cloud', 'DevOps', 'Infrastructure'],
    },
    {
      id: 3,
      title: 'Mobile-First Design Principles',
      excerpt: 'Why mobile-first approach is crucial for modern web design and how to implement it effectively.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      author: 'Emily Rodriguez',
      date: '2024-03-10',
      readTime: '6 min read',
      tags: ['Design', 'Mobile', 'UX'],
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every business should implement to protect their digital assets.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      author: 'David Kim',
      date: '2024-03-08',
      readTime: '8 min read',
      tags: ['Security', 'Cybersecurity', 'Best Practices'],
    },
    {
      id: 5,
      title: 'The Rise of Progressive Web Apps',
      excerpt: 'Understanding PWAs and why they are becoming the preferred choice for modern web applications.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      author: 'Sarah Johnson',
      date: '2024-03-05',
      readTime: '5 min read',
      tags: ['PWA', 'Web Development', 'Mobile'],
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How to leverage data analytics to make informed business decisions and drive growth.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      author: 'Michael Chen',
      date: '2024-03-01',
      readTime: '6 min read',
      tags: ['Analytics', 'Data Science', 'Business'],
    },
  ];

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tutorials, and industry trends from our team of experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredBlogs.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden border border-border shadow-elegant">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={filteredBlogs[0].image}
                  alt={filteredBlogs[0].title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {filteredBlogs[0].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-4">{filteredBlogs[0].title}</h2>
                <p className="text-muted-foreground mb-6">{filteredBlogs[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{filteredBlogs[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(filteredBlogs[0].date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{filteredBlogs[0].readTime}</span>
                  </div>
                </div>
                <Button className="gradient-primary w-fit">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.slice(1).map((blog) => (
                <article
                  key={blog.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-3 w-3" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
