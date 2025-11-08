import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  siteName: string;
  navigation: {
    html: string;
    links: Array<{
      text: string;
      href: string;
    }>;
  };
  contactInfo: {
    phone: string;
    email: string;
  };
}

const Header: React.FC<HeaderProps> = ({
  siteName,
  navigation,
  contactInfo,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-brand-3 border-b border-brand-5 shadow-lg">
      <nav className="navbar container mx-auto py-4 px-6">
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-cinzel text-brand-2 font-bold">
            {siteName}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 space-x-4">
            {navigation.links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-brand-2 font-semibold'
                      : 'text-brand-2 hover:text-brand-6'
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <a
            href={`tel:${contactInfo.phone}`}
            className="text-brand-2 font-semibold hidden lg:block"
          >
            {contactInfo.phone}
          </a>
          <Link
            to="/free-consultation"
            className="btn btn-primary btn-sm rounded-full"
          >
            Free Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;