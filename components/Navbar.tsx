
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Use const to declare the location variable and avoid collision with global window.location
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center font-bold text-white text-xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
            D
          </div>
          <span className="font-heading font-bold text-lg md:text-xl tracking-tight leading-tight uppercase">
            DAK TECH <span className="text-brand-primary">SOLUTIONS</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink 
              key={link.label}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-brand-primary ${
                  isActive ? 'text-brand-primary underline underline-offset-4 decoration-2' : 'text-slate-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="px-5 py-2.5 rounded-full bg-brand-primary text-white text-sm font-semibold flex items-center space-x-2 hover:bg-brand-primary/90 transition-all active:scale-95 shadow-lg shadow-brand-primary/20"
          >
            <span>Start a Project</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <NavLink 
                  key={link.label}
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) => 
                    `text-lg font-medium transition-colors ${
                      isActive ? 'text-brand-primary' : 'text-slate-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link 
                to="/contact" 
                className="w-full text-center px-5 py-4 rounded-xl bg-brand-primary text-white font-semibold"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
