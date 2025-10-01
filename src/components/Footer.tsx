import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Github, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Who We Are', path: '/who-we-are' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
  ];

  const resources = [
    { label: 'Blogs', path: '/blogs' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Settlo Tech" className="h-10 w-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
                Exceptionz
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transforming ideas into innovative technology solutions. Your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 text-primary" />
                <span>exceptionzofficial@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 mt-0.5 text-primary" />
                <span>+91 9361016097</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Exceptionz. All rights reserved. Built with innovation and passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
