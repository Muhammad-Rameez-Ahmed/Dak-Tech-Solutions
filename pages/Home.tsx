
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Star, Users, Globe, Trophy, ChevronLeft, ChevronRight, CheckCircle2, 
  TrendingUp, ArrowUpRight, Code2, BarChart4, Sparkles, Quote, Target, 
  Zap, DollarSign, BarChart3, Rocket, Activity, ShieldCheck, ZapIcon, 
  Globe2, Layers, MousePointer2, Briefcase, RefreshCcw, TrendingDown, 
  ShieldAlert, UserPlus, Cpu, BarChart, Calendar, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHY_CHOOSE_US, CLIENT_TYPES, GROWTH_FRAMEWORK, MARKETING_KPIS, TESTIMONIALS, BLOGS } from '../constants';

const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { stiffness: 45, damping: 20 });
  const display = useTransform(spring, (current) => 
    `${prefix}${Math.floor(current)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Home: React.FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(TESTIMONIALS[(testimonialIndex + i) % TESTIMONIALS.length]);
    }
    return items;
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* SECTION 1: HERO (BLACK) - CENTERED DESIGN */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden">
        
        {/* Background Decor - Fixed to center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] h-[1000px] bg-brand-primary/5 rounded-full blur-[160px] -z-10 pointer-events-none"></div>

        {/* Constrained Container for Layout Integrity on Large Screens (Capped at 1440px) */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 relative min-h-[700px] flex items-center justify-center">
          
          {/* Central Content Block */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center text-center max-w-4xl z-10 w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-accent text-xs md:text-sm font-black mb-8 md:mb-12 shadow-2xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <span className="tracking-[0.2em] uppercase">The Global Growth Engine</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-3xl sm:text-5xl lg:text-[5.25rem] font-black tracking-tight mb-8 md:mb-12 leading-[1.1] uppercase px-4"
            >
              We Don’t Just Build Software — <br className="hidden md:block" />
              <span className="gradient-text">We Build Businesses.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg lg:text-xl mb-12 md:mb-16 leading-relaxed max-w-3xl px-6"
            >
              At DAK TECH SOLUTIONS, we partner with visionary founders to design, build, and scale 
              high-performance digital products and marketing systems that actually generate revenue.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16 md:mb-24 w-full justify-center px-8"
            >
              <Link 
                to="/contact" 
                className="px-10 py-5 sm:px-12 sm:py-6 rounded-full bg-brand-primary text-white font-black text-base sm:text-lg hover:bg-brand-primary/90 transition-all shadow-[0_20px_50px_rgba(99,102,241,0.3)] flex items-center justify-center space-x-3 group active:scale-95"
              >
                <span>Book a Strategy Call</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link 
                to="/portfolio" 
                className="px-10 py-5 sm:px-12 sm:py-6 rounded-full bg-white/5 border border-white/10 text-white font-black text-base sm:text-lg hover:bg-white/10 transition-all flex items-center justify-center active:scale-95"
              >
                Case Studies
              </Link>
            </motion.div>

            {/* Centered Trust Indicators */}
            <motion.div 
              variants={containerVariants}
              className="flex flex-col items-center space-y-10 md:space-y-16 w-full"
            >
              <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-slate-500 font-medium px-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-black">ROI Focused</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-black">Founder-Led</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-black">Scalable Systems</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-16 md:gap-20 pt-10 border-t border-white/10 w-full max-w-4xl px-4">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-4xl font-black text-white mb-2 tracking-tighter">350%+</div>
                  <div className="text-[9px] uppercase font-black text-slate-500 tracking-[0.3em]">Avg. Client ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-4xl font-black text-white mb-2 tracking-tighter">10x</div>
                  <div className="text-[9px] uppercase font-black text-slate-500 tracking-[0.3em]">Lead Scaling</div>
                </div>
                <div className="text-center col-span-2 md:col-span-1">
                  <div className="text-3xl sm:text-4xl lg:text-4xl font-black text-white mb-2 tracking-tighter">24/7</div>
                  <div className="text-[9px] uppercase font-black text-slate-500 tracking-[0.3em]">Revenue Monitoring</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Background Geometry */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-20 opacity-10 pointer-events-none">
             <svg viewBox="0 0 100 100" className="w-full h-full scale-[1.2] lg:scale-[1.8]">
                <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.03" strokeDasharray="1 4" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#grad1)" strokeWidth="0.05" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#6366f1', stopOpacity:0.3}} />
                    <stop offset="100%" style={{stopColor:'#06b6d4', stopOpacity:0.3}} />
                  </linearGradient>
                </defs>
             </svg>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full"
        >
          {MARKETING_KPIS.map((kpi, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-8 rounded-[2.5rem] relative group overflow-hidden border border-white/10 text-left"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <ArrowUpRight className="w-10 h-10" />
              </div>
              
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 ${kpi.color}`}>
                {kpi.icon}
              </div>

              <div className="mb-2">
                <span className={`text-4xl md:text-5xl font-black font-heading ${kpi.color}`}>
                  <AnimatedNumber value={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix} />
                </span>
              </div>

              <div className="font-bold text-white text-base mb-2 uppercase tracking-tight">{kpi.label}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{kpi.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 2: SERVICES BLUEPRINT (GRADIENT) */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[10px] font-black uppercase tracking-widest mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Our Blueprint</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 uppercase">Dual-Engine Growth</h2>
              <p className="text-white/80 text-lg leading-relaxed font-medium">We combine high-performance engineering with psychological marketing to build unstoppable revenue engines.</p>
            </div>
            <Link 
              to="/services" 
              className="group flex items-center space-x-3 px-8 py-4 bg-white text-brand-dark rounded-2xl font-bold hover:scale-105 transition-all active:scale-95"
            >
              <span>Explore All Services</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tech Pillar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white/20 relative group overflow-hidden text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-6 uppercase">Engineering Pillar</h3>
              <ul className="space-y-4 mb-10">
                {['Scalable Web Architectures', 'Cross-Platform Mobile Apps', 'Custom AI & Automation', 'Secure Cloud Infrastructure'].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-white/90 font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="text-white font-black underline underline-offset-4 inline-flex items-center space-x-2">
                <span>View Tech Stack</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Marketing Pillar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white/20 relative group overflow-hidden text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8">
                <BarChart4 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-6 uppercase">Marketing Engine</h3>
              <ul className="space-y-4 mb-10">
                {['High-ROAS Paid Ads', 'Conversion Rate Optimization', 'Predictable Lead Funnels', 'Growth Analytics & Data'].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-white/90 font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="text-white font-black underline underline-offset-4 inline-flex items-center space-x-2">
                <span>View Growth Tactics</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CLIENT FILTERING (BLACK) */}
      <section className="py-24 bg-brand-darker text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 uppercase tracking-tight">Built for <span className="text-brand-primary">Growth-Focused</span> Partners</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We filter for quality. We work best with those who value long-term systems over short-term shortcuts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLIENT_TYPES.map((type, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-3xl">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 uppercase">{type.title}</h3>
                <p className="text-slate-400 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PARTNERS TESTIMONIALS (GRADIENT) - SLIDER */}
      <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white relative overflow-hidden border-y border-white/10 text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[10px] font-black uppercase tracking-widest mb-4">
              <Star className="w-3 h-3 fill-white" />
              <span>Partner Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 uppercase tracking-tight">What Our <span className="text-brand-dark">Partners</span> Say</h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-medium">We build long-term relationships based on real revenue growth.</p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
              <AnimatePresence mode="popLayout">
                {getVisibleTestimonials().map((testimonial, idx) => (
                  <motion.div 
                    key={`${testimonial.name}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/20 relative group hover:bg-white/15 transition-all flex flex-col h-full text-left"
                  >
                    <div className="absolute top-6 right-6 text-white/5 group-hover:text-white/10 transition-colors">
                      <Quote className="w-12 h-12" />
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-6">
                      {[1,2,3,4,5].map(star => (
                        <Star key={star} className="w-3 h-3 text-brand-accent fill-brand-accent" />
                      ))}
                    </div>

                    <p className="text-white text-lg leading-relaxed mb-8 italic font-light relative z-10 flex-grow">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center space-x-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-white border border-white/30 text-sm uppercase">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base uppercase tracking-tight">{testimonial.name}</h4>
                        <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-all active:scale-90"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-all active:scale-90"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
          </div>

          <div className="text-center mt-16">
             <Link to="/portfolio" className="text-white font-black text-sm uppercase tracking-widest border-b-2 border-white pb-1 hover:text-brand-dark hover:border-brand-dark transition-all">
               View All Case Studies
             </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: METHODOLOGY (BLACK) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="text-center mb-20">
          <div className="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">The Growth Engine</div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 uppercase">How We Scale Your Revenue</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A standardized system designed to eliminate guesswork and maximize ROI.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
          <div className="absolute top-20 left-10 right-10 h-px bg-gradient-to-r from-brand-primary/0 via-brand-primary/40 to-brand-primary/0 -z-10 hidden lg:block"></div>
          
          {GROWTH_FRAMEWORK.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left group"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-3xl bg-brand-dark border border-white/10 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-brand-primary/20">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-darker border border-brand-primary/30 flex items-center justify-center text-xs font-black text-brand-primary">
                  0{idx + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-brand-primary transition-colors uppercase">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6: WHY PARTNER (GRADIENT) */}
      <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 uppercase">Why Partner With Us?</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed font-medium">We think like business owners, not just developers or marketers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all group backdrop-blur-lg text-left">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: BLOG INSIGHTS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
          <div className="max-w-2xl">
            <div className="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">Latest from our Growth Blog</div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 uppercase tracking-tight text-white">Insights & <span className="gradient-text">Innovation</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">Strategies, tech trends, and psychological marketing for high-performance founders.</p>
          </div>
          <Link 
            to="/blogs" 
            className="group flex items-center space-x-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
          >
            <span>Read All Insights</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-brand-primary/40 transition-all group cursor-pointer text-left"
            >
              <Link to="/blogs" className="block">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-primary text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-slate-500 text-xs mb-4">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-4 text-white group-hover:text-brand-primary transition-colors leading-tight uppercase">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-brand-primary font-bold text-sm space-x-2">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 8: FOUNDER MESSAGE */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-8">
        <div className="glass-card p-12 md:p-20 rounded-[3rem] border-white/10 relative overflow-hidden">
          <div className="flex flex-col items-center text-center">
             <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-secondary border-4 border-brand-primary/20 mb-8 text-white font-heading font-bold text-3xl shadow-2xl">
               DK
             </div>
             <h2 className="text-3xl font-bold font-heading mb-8 uppercase tracking-wide text-white">A Message from the Founder</h2>
             <div className="text-xl md:text-2xl text-slate-300 italic leading-relaxed font-light mb-10 max-w-3xl">
               "I started DAK TECH SOLUTIONS with a simple belief—technology and marketing should solve real business problems, not just look good. We don’t sell services; we build solutions that make sense for your business."
             </div>
             <div className="font-heading">
                <p className="text-brand-primary font-bold text-lg">Daniyal Ahmed Khan</p>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">CEO & CO-Founder</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent p-12 md:p-24 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 text-white uppercase leading-tight tracking-tight">Ready to <span className="text-brand-dark">Build & Scale</span> Your Business?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-medium leading-relaxed">
              If you’re serious about growth and want a technology & marketing partner who thinks like a founder — let’s talk.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-3 px-12 py-6 bg-white text-brand-darker font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-2xl shadow-black/20 group active:scale-95"
            >
              <span>Book a Free Strategy Call</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1),transparent_70%)]"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
