import React from 'react';
import { Twitter, Github, Linkedin, Heart } from 'lucide-react';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About', href: '/#about' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/#contact' },
    ],
    Services: [
      { name: 'Web Development', href: '/#services' },
      { name: 'AI Solutions', href: '/#services' },
      { name: 'UI/UX Design', href: '/#services' },
      { name: 'Support', href: '/support' },
    ],
    Resources: [
      { name: 'Portfolio', href: '/#portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Forums', href: 'https://forum.magnimont.com/' },
      { name: 'Status', href: '/status' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/Magnimont', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/magnimont/', icon: Linkedin },
    { name: 'Discord', href: 'https://discord.gg/magnimont-876113814314164256', icon: DiscordLogoIcon },
  ];

  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center mb-12">
          <Image
            width={32}
            height={28}
            src="/images/logo.png"
            alt="Magnimont Logo"
            className="mr-3"
          />
          <span className="text-xl font-bold text-white font-calsans">
            Magnimont
          </span>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800">
          {/* Copyright */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-sm">© {new Date().getFullYear()} Magnimont. All rights reserved.</span>
            <div className="flex items-center gap-2 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for innovators</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center mt-8 pt-8 border-t border-zinc-800">
          <div className="flex items-center gap-2 bg-zinc-900/50 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
