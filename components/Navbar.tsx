
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring, Variants } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown, Sparkles } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const dropdownVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 10, 
      scale: 0.98, 
      filter: 'blur(10px)',
      pointerEvents: 'none'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      pointerEvents: 'auto',
      transition: { 
        type: 'spring' as const, 
        stiffness: 400, 
        damping: 35,
        staggerChildren: 0.04
      } 
    },
    exit: { 
      opacity: 0, 
      y: 8, 
      scale: 0.99, 
      filter: 'blur(5px)', 
      transition: { duration: 0.15, ease: "easeOut" } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      {/* Dynamic Progress Line */}
      <motion.div 
        className="h-[1.5px] bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary origin-left w-full absolute top-0 left-0"
        style={{ scaleX }}
      />

      <nav className={`mx-auto transition-all duration-1000 ease-out pointer-events-auto ${
        scrolled 
          ? 'max-w-4xl mt-6 px-4 sm:px-0' 
          : 'max-w-full mt-0 px-4 sm:px-10'
      }`}>
        <div className={`relative flex items-center justify-between transition-all duration-700 ${
          scrolled 
            ? 'bg-brand-darker/70 backdrop-blur-[40px] border border-white/10 rounded-full py-3 px-8 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent py-10 px-0 border-b border-white/5'
        }`}>
          
          {/* Brand Identity */}
          <Link to="/" className="relative flex items-center group z-20">
            <div className="flex items-center space-x-3">
              <div className="relative h-6 md:h-7 flex items-center">
                <img 
                  src="logo.png" 
                  alt="DAK TECH" 
                  className={`h-full w-auto object-contain transition-all duration-500 group-hover:scale-110 ${scrolled ? 'scale-90' : 'scale-100'}`}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="flex items-center space-x-2">
                  <span className={`font-heading font-black text-xs tracking-[-0.03em] uppercase transition-all duration-500 ${scrolled ? 'text-white/90' : 'text-white'}`}>
                    DAK TECH <span className="text-brand-primary">SOLUTIONS</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.label}
                className="relative py-2"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink 
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) => 
                    `relative px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-500 flex items-center space-x-1.5 rounded-full ${
                      isActive ? 'text-brand-primary' : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`
                  }
                >
                  <span className="z-10">{link.label}</span>
                  {link.subLinks && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-500 opacity-30 ${activeDropdown === link.label ? 'rotate-180 opacity-100 text-brand-primary' : ''}`} />
                  )}
                </NavLink>

                {/* Dark Luxury Submenu */}
                <AnimatePresence>
                  {link.subLinks && activeDropdown === link.label && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-80 z-50"
                    >
                      {/* Top Accent Line */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-brand-primary/40 blur-sm z-10" />
                      
                      <div className="relative bg-brand-darker/95 backdrop-blur-[50px] rounded-[2rem] p-4 border border-white/20 shadow-[0_40px_100px_-15px_rgba(0,0,0,1)] overflow-hidden">
                        {/* Subtle inner highlight */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                        
                        <div className="relative grid grid-cols-1 gap-1">
                          {link.subLinks.map((sub) => (
                            <motion.div key={sub.label} variants={itemVariants}>
                              <Link
                                to={sub.href}
                                className="flex items-center space-x-4 p-3.5 rounded-[1.25rem] hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all duration-300 group/item"
                              >
                                <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 group-hover/item:text-brand-primary group-hover/item:border-brand-primary/30 group-hover/item:bg-brand-primary/5 transition-all duration-300">
                                  {sub.icon}
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[11px] font-bold text-white group-hover/item:text-brand-primary transition-colors leading-none tracking-wide uppercase">
                                    {sub.label}
                                  </span>
                                  {sub.description && (
                                    <span className="text-[9px] text-slate-400 font-medium uppercase tracking-widest mt-2 opacity-80 group-hover/item:opacity-100 transition-opacity">
                                      {sub.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Luxury CTA Button */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/contact" 
              className={`hidden sm:flex items-center space-x-2 px-7 py-3 rounded-full transition-all duration-700 font-black uppercase tracking-[0.25em] group relative overflow-hidden active:scale-95 ${
                scrolled 
                  ? 'bg-brand-primary text-white text-[9px] shadow-[0_15px_30px_-5px_rgba(99,102,241,0.4)]' 
                  : 'bg-white text-brand-dark text-[10px]'
              }`}
            >
              <span className="relative z-10">Get Growth</span>
              <Sparkles className={`w-3.5 h-3.5 relative z-10 transition-transform duration-700 group-hover:rotate-[30deg] ${scrolled ? 'text-white' : 'text-brand-primary'}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </Link>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-slate-300 hover:text-white transition-all bg-white/[0.03] rounded-full border border-white/5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Experience (Dark Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brand-darker/95 backdrop-blur-xl z-[90] md:hidden pointer-events-auto"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 35, stiffness: 350 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-brand-dark border-l border-white/10 z-[100] md:hidden pointer-events-auto shadow-2xl flex flex-col"
            >
              <div className="p-10 flex items-center justify-between border-b border-white/5">
                <span className="font-heading font-black tracking-[-0.05em] uppercase text-xl">DAK <span className="text-brand-primary">TECH</span></span>
                <button onClick={() => setIsOpen(false)} className="p-3 text-slate-400 hover:text-white bg-white/[0.05] rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-10 space-y-9">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="space-y-5">
                    <div 
                      className="flex items-center justify-between"
                      onClick={() => link.subLinks && setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    >
                      <NavLink 
                        to={link.href}
                        className={({ isActive }) => 
                          `text-2xl font-black uppercase tracking-tight transition-all ${
                            isActive ? 'text-brand-primary translate-x-1' : 'text-white'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                      {link.subLinks && (
                        <div className={`p-2 rounded-xl bg-white/[0.05] transition-all duration-500 ${activeDropdown === link.label ? 'rotate-180 bg-brand-primary/20 text-brand-primary' : 'text-slate-600'}`}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {link.subLinks && activeDropdown === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden space-y-6 pl-5 border-l-2 border-brand-primary/40"
                        >
                          {link.subLinks.map((sub) => (
                            <Link 
                              key={sub.label} 
                              to={sub.href}
                              className="block group"
                            >
                              <div className="text-sm font-black text-slate-100 uppercase tracking-wide group-hover:text-brand-primary transition-colors">{sub.label}</div>
                              <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-medium">{sub.description}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="p-10 border-t border-white/5 bg-brand-darker/60">
                <Link 
                  to="/contact" 
                  className="w-full flex items-center justify-center space-x-3 px-8 py-5 rounded-[2rem] bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.25em] shadow-2xl active:scale-95 transition-transform"
                >
                  <span>Claim My Growth Strategy</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
