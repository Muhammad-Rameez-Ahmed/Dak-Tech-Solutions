
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail, MapPin, Shield, Scale, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center font-bold text-white shadow-lg">
              D
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white uppercase">
              DAK TECH <span className="text-brand-primary">SOLUTIONS</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            A technology & marketing partner designed for high-performance brands ready to scale with intelligent automation.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-6 text-white uppercase text-xs tracking-widest">Growth Tools</h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            <li><Link to="/resources" className="hover:text-brand-primary transition-colors flex items-center"><div className="w-1 h-1 bg-brand-primary rounded-full mr-2"></div>Free Audits</Link></li>
            <li><Link to="/resources" className="hover:text-brand-primary transition-colors flex items-center"><div className="w-1 h-1 bg-brand-primary rounded-full mr-2"></div>Growth Checklists</Link></li>
            <li><Link to="/blogs" className="hover:text-brand-primary transition-colors flex items-center"><div className="w-1 h-1 bg-brand-primary rounded-full mr-2"></div>Strategic Insights</Link></li>
            <li><Link to="/portfolio" className="hover:text-brand-primary transition-colors flex items-center"><div className="w-1 h-1 bg-brand-primary rounded-full mr-2"></div>Case Studies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-6 text-white uppercase text-xs tracking-widest">Enterprise Trust</h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            <li><Link to="/faq" className="hover:text-brand-primary transition-colors flex items-center space-x-2"><HelpCircle className="w-4 h-4" /><span>Client FAQ</span></Link></li>
            <li><Link to="/privacy" className="hover:text-brand-primary transition-colors flex items-center space-x-2"><Shield className="w-4 h-4" /><span>Privacy Policy</span></Link></li>
            <li><Link to="/terms" className="hover:text-brand-primary transition-colors flex items-center space-x-2"><Scale className="w-4 h-4" /><span>Terms of Service</span></Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-colors flex items-center space-x-2"><div className="w-4 h-4 rounded-full bg-brand-primary/20" /><span>Our Philosophy</span></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-6 text-white uppercase text-xs tracking-widest">Global Reach</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-brand-primary" />
              <span>hello@daktech.solutions</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-brand-primary mt-1" />
              <span>Remote First / Global HQ<br />Innovative Valley, CA</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-medium uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} DAK TECH SOLUTIONS. Engineered for Excellence.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/faq" className="hover:text-white transition-colors">Support</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;