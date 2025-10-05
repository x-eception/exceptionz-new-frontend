import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'exceptionzofficial@gmail.com',
      link: 'mailto:exceptionzofficial@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9361016097',
      link: 'tel:+919361016097',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Gobichettipalaym, Erode, TamilNadu, India-638 453',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-700' },
    // { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-800 dark:hover:text-gray-300' },
    // { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-elegant">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-elegant transition-all duration-300 group"
                  >
                    <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-semibold text-xl mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.5868356834449!2d77.4346136441607!3d11.454835781306626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d004860940d%3A0x6bfc173982757892!2sBus%20stand!5e0!3m2!1sen!2sin!4v1759378460101!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
