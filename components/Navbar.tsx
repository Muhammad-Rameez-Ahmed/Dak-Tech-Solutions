
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 5, scale: 0.98 }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'
    }`}>
      {/* Container width increased to 95% for a wider layout */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="logo.png" 
            alt="DAK TECH SOLUTIONS" 
            className="h-10 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="hidden items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center font-bold text-white text-xl shadow-lg">
              D
            </div>
            <span className="font-heading font-bold text-lg md:text-xl tracking-tight leading-tight uppercase">
              DAK TECH <span className="text-brand-primary">SOLUTIONS</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.label}
              className="relative py-2 group"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center space-x-1 cursor-pointer">
                <NavLink 
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) => 
                    `text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-brand-primary flex items-center ${
                      isActive ? 'text-brand-primary' : 'text-slate-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                {link.subLinks && (
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                )}
              </div>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {link.subLinks && activeDropdown === link.label && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                  >
                    <div className="glass-card rounded-3xl p-4 border border-white/10 shadow-2xl overflow-hidden">
                      <div className="grid grid-cols-1 gap-1">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="flex items-start space-x-3 p-3 rounded-2xl hover:bg-white/5 transition-all group/item"
                          >
                            <div className="mt-1 p-1.5 rounded-lg bg-white/5 text-slate-400 group-hover/item:text-brand-primary transition-colors">
                              {sub.icon}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white group-hover/item:text-brand-primary transition-colors leading-tight">
                                {sub.label}
                              </div>
                              {sub.description && (
                                <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">
                                  {sub.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link 
            to="/contact" 
            className="px-8 py-3.5 rounded-full bg-brand-primary text-white text-[12px] font-black uppercase tracking-[0.15em] flex items-center space-x-2 hover:bg-brand-primary/90 transition-all active:scale-95 shadow-lg shadow-brand-primary/20 ml-4"
          >
            <span>Start project</span>
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
            className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <div 
                    className="flex items-center justify-between py-3 border-b border-white/5"
                    onClick={() => link.subLinks && setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                  >
                    <NavLink 
                      to={link.href}
                      end={link.href === '/'}
                      className={({ isActive }) => 
                        `text-lg font-bold uppercase tracking-tight ${
                          isActive ? 'text-brand-primary' : 'text-slate-100'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                    {link.subLinks && (
                      <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {link.subLinks && activeDropdown === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white/5 rounded-2xl mt-2"
                      >
                        <div className="flex flex-col p-4 space-y-4">
                          {link.subLinks.map((sub) => (
                            <Link 
                              key={sub.label} 
                              to={sub.href}
                              className="flex items-center space-x-3 group"
                            >
                              <div className="text-brand-primary">{sub.icon}</div>
                              <div>
                                <div className="text-sm font-bold text-slate-200">{sub.label}</div>
                                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{sub.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link 
                to="/contact" 
                className="w-full text-center mt-6 px-5 py-5 rounded-2xl bg-brand-primary text-white font-black uppercase tracking-[0.2em] shadow-2xl"
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
