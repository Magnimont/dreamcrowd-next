import React from 'react';
import { Twitter, Github, Linkedin, MessageCircle } from 'lucide-react';
import { DiscordLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
  const footerLinks = {
    Magnimont: [
      { name: 'Host', href: 'https://host.magnimont.com/' },
      { name: 'Forums', href: 'https://forum.magnimont.com/' },

    ],
    Resources: [
      { name: 'Status', href: '#' },
      { name: 'Brand', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/Careers' },
      { name: 'Contact', href: '#' },
    ],
    Handbook: [
      { name: 'Why we exist', href: '#' },
      { name: 'How we work', href: '#' },
      { name: 'Support', href: '#' },
    ],
    Legal: [
      { name: 'Cookie Policy', href: '/Cookie-Policy' },
      { name: 'Privacy Policy', href: '/Privacy-policy' },
      { name: 'Terms of Service', href: '/Terms-of-Service' },
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
      href: 'https://github.com/Magnimont', 
      icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800">
              <Github size={16} />
            </div>
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/magnimont/', 
      icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800">
              <Linkedin size={16} />
            </div>
    },
    { 
      name: 'Discord', 
      href: 'https://discord.gg/magnimont-876113814314164256', 
      icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800">
              <DiscordLogoIcon width={16} height={16} />
            </div>
    },
  ];

  return (
    <footer className="bg-black text-zinc-500 py-16 px-6 font-[Inter]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-16">
        {/* Header Section */}
        <div className="mb-16 lg:mb-0 lg:w-1/3 space-y-6">
          <div className="space-y-1">
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
