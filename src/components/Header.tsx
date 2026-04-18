import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ContactForm } from './ContactForm';

interface NavLink {
  label: string;
  to?: string;
  href?: string;
  active?: boolean;
}

interface HeaderProps {
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Battery Passport', to: '/products/dbp' },
  { label: 'Technology', href: '#technology' },
  { label: 'Blogs', to: '/blogs' },
];

export function Header({ links = defaultLinks }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2.5 flex-shrink-0">
              <Logo className="h-8 w-8" size={32} />
              <span className="font-semibold text-lg text-gray-900 tracking-tight">TrustTrack</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {links.map(link =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`text-sm font-medium transition-colors ${
                      link.active
                        ? 'text-gray-900 border-b-2 border-blue-500 pb-0.5'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <button
                onClick={() => setContactOpen(true)}
                className="ml-2 bg-blue-500 text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Get a Demo
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-gray-500 hover:text-gray-700 p-1"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-1">
              {links.map(link =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2.5 text-sm font-medium transition-colors ${
                      link.active ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="pt-2">
                <button
                  onClick={() => { setContactOpen(true); setMobileOpen(false); }}
                  className="w-full bg-blue-500 text-white text-sm px-4 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Get a Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
