import React from 'react';
import { Link } from 'react-router-dom';

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

const Footer: React.FC<FooterProps> = () => {
  const practiceAreas = [
    { name: "Divorce Attorney", href: "/services/divorce" },
    { name: "Child Custody", href: "/services/child-custody" },
    { name: "Child Support", href: "/services/child-support" },
    { name: "Property Division", href: "/services/property-division" },
    { name: "Alimony", href: "/services/alimony" },
    { name: "Paternity", href: "/services/paternity" }
  ];

  const quickLinks = [
    { name: "About Alan Rosenthal", href: "/about" },
    { name: "Free Consultation", href: "/consultation" },
    { name: "Client Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" }
  ];

  return (
    <footer className="bg-gradient-to-b from-law-navy to-slate-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="text-blue-400">Rosenthal</span> Law Group
                </h3>
                <p className="text-slate-300 mb-6">
                  Compassionate • Accessible • Aggressive • Dedicated
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-white font-medium">3909 Central Ave.</p>
                    <p className="text-slate-300">St. Petersburg, FL 33713</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <a href="tel:(727)347-2299" className="text-white font-bold text-lg hover:text-blue-400 transition-colors">
                      (727) 347-2299
                    </a>
                    <p className="text-slate-300 text-sm">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:info@rosenthallaw.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                    info@rosenthallaw.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Business Hours</h4>
                <div className="text-slate-300 text-sm space-y-1">
                  <p>Mon - Thu: 9:00 AM - 5:00 PM</p>
                  <p>Friday: 9:00 AM - 12:00 PM</p>
                  <p>Sat - Sun: Closed</p>
                  <p className="text-blue-400 font-medium">Emergency consultations available</p>
                </div>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Practice Areas</h4>
              <ul className="space-y-3">
                {practiceAreas.map((area, index) => (
                  <li key={index}>
                    <Link 
                      to={area.href} 
                      className="text-slate-300 hover:text-blue-400 transition-colors flex items-center group"
                    >
                      <svg className="w-4 h-4 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-slate-300 hover:text-blue-400 transition-colors flex items-center group"
                    >
                      <svg className="w-4 h-4 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Get Help Today</h4>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6">
                <h5 className="text-lg font-bold text-white mb-3">
                  Free Consultation
                </h5>
                <p className="text-blue-100 mb-4 text-sm">
                  Don't wait. Protect your rights and your family's future. Call now for a confidential consultation.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:(727)347-2299"
                    className="block w-full btn bg-white hover:bg-gray-100 text-law-navy border-none font-bold text-center py-3 rounded-lg transition-colors"
                  >
                    Call (727) 347-2299
                  </a>
                  <Link
                    to="/consultation"
                    className="block w-full btn btn-outline border-white text-white hover:bg-white hover:text-law-navy text-center py-3 rounded-lg transition-colors"
                  >
                    Schedule Online
                  </Link>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6">
                <h5 className="text-white font-semibold mb-3">Payment Methods</h5>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-800 rounded p-2 flex justify-center items-center">
                    <img src="/images/visa.png" alt="Visa" className="h-6 w-auto" />
                  </div>
                  <div className="bg-slate-800 rounded p-2 flex justify-center items-center">
                    <img src="/images/mastercard.png" alt="MasterCard" className="h-6 w-auto" />
                  </div>
                  <div className="bg-slate-800 rounded p-2 flex justify-center items-center">
                    <img src="/images/amex.png" alt="American Express" className="h-6 w-auto" />
                  </div>
                  <div className="bg-slate-800 rounded p-2 flex justify-center items-center">
                    <img src="/images/discover.png" alt="Discover" className="h-6 w-auto" />
                  </div>
                  <div className="bg-slate-800 rounded p-2 flex justify-center items-center">
                    <img src="/images/cash.png" alt="Cash" className="h-6 w-auto" />
                  </div>
                  <div className="bg-slate-800 rounded p-2 flex justify-center items-center">
                    <img src="/images/check.png" alt="Check" className="h-6 w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-slate-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Rosenthal Law Group PA. All rights reserved.</p>
              <p className="mt-1">Serving St. Petersburg, Tampa Bay, and surrounding areas since 1998.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Use
              </Link>
              <a 
                href="https://facebook.com/Divorce-for-Men-160823053939229" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-slate-500 text-xs">
              <strong>Disclaimer:</strong> The information on this website is for general information purposes only. 
              Nothing on this site should be taken as legal advice for any individual case or situation. 
              This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;