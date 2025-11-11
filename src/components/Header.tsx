import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  siteName: string;
  logo: Array<string>;
  navigation: Array<{
    text: string;
    href: string;
  }>;
  contactInfo: {
    phone: string;
    email: string;
  };
}

const Header: React.FC<HeaderProps> = ({
  navigation,
  contactInfo,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-slate-800 text-white py-2 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              St. Petersburg, FL
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Available 24/7
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-300">Since 1998</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-300">Compassionate • Accessible • Aggressive • Dedicated</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-xl border-b border-slate-200">
        <nav className="navbar container mx-auto py-4 px-6">
          {/* Logo/Brand */}
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              {isMenuOpen && (
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navigation?.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? 'text-blue-600 font-semibold'
                            : 'text-slate-700 hover:text-blue-600'
                        }
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  ))}
                  <li className="lg:hidden mt-4">
                    <a href={`tel:${contactInfo.phone}`} className="text-blue-600 font-bold text-lg">
                      {contactInfo.phone}
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Rosenthal Law Group PA" className="h-10 lg:h-12 w-auto" />
              <span className="text-sm text-blue-600 font-semibold tracking-wide uppercase">
                Divorce for Men
              </span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navigation?.map((link, index) => (
                <li key={index} className="mx-1">
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                      }`
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and CTA */}
          <div className="navbar-end space-x-4">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Call Now</span>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                (727) 347-2299
              </a>
            </div>
            <div className="divider divider-horizontal hidden lg:flex"></div>
            <Link
              to="/free-consultation"
              className="btn btn-primary btn-lg bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white font-bold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Free Consultation
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;