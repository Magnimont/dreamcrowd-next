import React from 'react';

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
    { name: 'Twitter', href: '#', icon: 'X' },
    { name: 'GitHub', href: '#', icon: 'GitHub' },
    { name: 'LinkedIn', href: '#', icon: 'LinkedIn' },
    { name: 'Discord', href: '#', icon: 'Discord' },
  ];

  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col space-y-4">
            <div>
              <p className="text-sm">2261 Market Street #5039</p>
              <p className="text-sm">San Francisco, CA 94114</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-sm">All systems operational</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-gray-300 transition-colors"
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