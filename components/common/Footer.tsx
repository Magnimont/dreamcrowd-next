import React from 'react';
import { Twitter, Github, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Documentation: [
      { name: 'Getting Started', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Examples', href: '#' },
      { name: 'SDKs', href: '#' },
    ],
    Resources: [
      { name: 'Changelog', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'SOC 2', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Brand', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Customers', href: '#' },
      { name: 'Philosophy', href: '#' },
    ],
    Handbook: [
      { name: 'Why we exist', href: '#' },
      { name: 'How we work', href: '#' },
      { name: 'Engineering', href: '#' },
      { name: 'Design', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Marketing', href: '#' },
    ],
    Legal: [
      { name: 'Acceptable Use', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Subprocessors', href: '#' },
      { name: 'DPA', href: '#' },
    ],
  };

  const socialLinks = [
    { 
      name: 'Twitter', 
      href: '#', 
      icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800">
              <Twitter size={16} />
            </div>
    },
    { 
      name: 'GitHub', 
      href: '#', 
      icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800">
              <Github size={16} />
            </div>
    },
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800">
              <Linkedin size={16} />
            </div>
    },
    { 
      name: 'Discord', 
      href: '#', 
      icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800">
              <MessageCircle size={16} />
            </div>
    },
  ];

  return (
    <footer className="bg-black text-zinc-500 py-16 px-6 font-[Inter]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-16">
        {/* Header Section */}
        <div className="mb-16 lg:mb-0 lg:w-1/3 space-y-6">
          <div className="space-y-1">
            <p className="text-sm">2261 Market Street #5039</p>
            <p className="text-sm">San Francisco, CA 94114</p>
          </div>
          <div className="flex space-x-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-zinc-400 hover:text-zinc-300 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 rounded-full px-4 py-2 w-fit">
            <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
            <span className="text-sm text-zinc-400">All systems operational</span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 lg:flex-1">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-white font-medium">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-zinc-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
