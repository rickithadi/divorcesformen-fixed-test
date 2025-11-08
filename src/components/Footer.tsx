import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface FooterProps {
  siteName: string;
  links: Array<{ text: string; href: string; internal: boolean }>;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  socialLinks: Array<{ text: string; href: string; internal: boolean }>;
  html: string;
}

const Footer: React.FC<FooterProps> = ({
  siteName,
  links,
  contactInfo,
  socialLinks,
  html,
}) => {
  return (
    <footer className="bg-brand-1 text-brand-2 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{siteName}</h3>
            <p className="mb-4">{contactInfo.address}</p>
            <p className="mb-4">
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </p>
            <p className="mb-4">
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  {link.internal ? (
                    <NavLink to={link.href} className="hover:text-brand-6">
                      {link.text}
                    </NavLink>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-6"
                    >
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  {link.internal ? (
                    <NavLink to={link.href} className="hover:text-brand-6">
                      {link.text}
                    </NavLink>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-6"
                    >
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-brand-5">
          <p>
            <a href="/terms-of-use" className="hover:text-brand-6">
              Terms of Use
            </a>{' '}
            |{' '}
            <a href="/privacy-policy" className="hover:text-brand-6">
              Privacy Policy
            </a>
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;