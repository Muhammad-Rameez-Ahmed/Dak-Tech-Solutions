
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Star, Users, Globe, Trophy, ChevronRight, CheckCircle2, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHY_CHOOSE_US, CLIENT_TYPES, GROWTH_FRAMEWORK, MARKETING_KPIS } from '../constants';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px] -z-10"></div>
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-accent text-sm font-bold mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
          </span>
          <span>A Technology & Marketing Partner That Thinks Like a Founder</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-5xl md:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl leading-tight uppercase"
        >
          We Don’t Just Build Software — <span className="gradient-text">We Build Scalable Businesses.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed"
        >
          At DAK TECH SOLUTIONS, we partner with founders to design, build, and scale 
          digital products and marketing systems that actually generate revenue.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link 
            to="/contact" 
            className="px-10 py-5 rounded-full bg-brand-primary text-white font-bold text-xl hover:bg-brand-primary/90 transition-all shadow-2xl shadow-brand-primary/30 flex items-center justify-center space-x-2 group"
          >
            <span>Get a Free Strategy Call</span>
          </Link>
          <Link 
            to="/portfolio" 
            className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center"
          >
            See How We Scale Businesses
          </Link>
        </motion.div>

        {/* Quick Trust Indicators */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-16 text-slate-500 font-medium"
        >
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-brand-primary" />
            <span>ROI Focused</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-brand-primary" />
            <span>Founder-Led</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-brand-primary" />
            <span>Scalable Systems</span>
          </div>
        </motion.div>
      </section>

      {/* Animated Marketing KPIs Section */}
      <section className="py-24 bg-gradient-to-b from-brand-darker to-brand-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">Marketing Impact</div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Real Results for Real Businesses</h2>
              <p className="text-slate-400">Our systems are engineered for one thing: growth. Here's the performance data from our portfolio companies over the last 12 months.</p>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center space-x-4 text-sm font-medium text-slate-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-darker bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span>Trusted by 50+ Global Founders</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MARKETING_KPIS.map((kpi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-[2.5rem] relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                   <ArrowUpRight className="w-12 h-12" />
                </div>
                
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 ${kpi.color}`}>
                  {kpi.icon}
                </div>

                <div className="mb-2">
                  <span className={`text-4xl md:text-5xl font-black font-heading ${kpi.color}`}>
                    <AnimatedNumber value={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix} />
                  </span>
                </div>

                <div className="font-bold text-white text-lg mb-2">{kpi.label}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{kpi.description}</p>

                {/* Pulsing decoration */}
                <div className="mt-6 flex items-end space-x-1 h-8 opacity-40">
                   {[1,2,3,4,5,6].map(bar => (
                     <motion.div 
                        key={bar}
                        animate={{ height: [4, Math.random() * 20 + 8, 4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: bar * 0.1 }}
                        className={`w-1 rounded-full ${kpi.color.replace('text-', 'bg-')}`}
                     />
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Client Filtering */}
      <section className="py-24 bg-brand-dark/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Built for Founders & Growth-Focused Companies</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We filter for quality. We work best with those who value long-term systems over short-term shortcuts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLIENT_TYPES.map((type, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-3xl">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">{type.title}</h3>
                <p className="text-slate-400 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UPDATED: How We Work / Growth Framework Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">The Growth Engine</div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our Methodology: How We Scale You</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A standardized system designed to eliminate guesswork and maximize ROI for every partner.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
          {/* Connector Line for Desktop */}
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
              
              <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-brand-primary transition-colors">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              
              <div className="mt-auto pt-6 lg:hidden">
                <div className="w-px h-12 bg-gradient-to-b from-brand-primary/40 to-transparent mx-auto"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12 md:p-20 rounded-[3rem] border-white/10 relative">
          <div className="flex flex-col items-center text-center">
             <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-secondary border-4 border-brand-primary/20 mb-8 text-white font-heading font-bold text-3xl shadow-2xl">
               DK
             </div>
             <h2 className="text-3xl font-bold font-heading mb-8">A Message from the Founder</h2>
             <div className="text-xl md:text-2xl text-slate-300 italic leading-relaxed font-light mb-10 max-w-3xl">
               "I started DAK TECH SOLUTIONS with a simple belief—technology and marketing should solve real business problems, not just look good. As an entrepreneur myself, I understand budgets, pressure, and growth challenges. We don’t sell services; we build solutions that make sense for your business."
             </div>
             <div className="font-heading">
                <p className="text-brand-primary font-bold text-lg">Daniyal Ahmed Khan</p>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">CEO & CO-Founder</p>
             </div>
          </div>
        </div>
      </section>

      {/* WHY US Grid */}
      <section className="py-24 bg-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Why Partner With Us?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We think like business owners, not just developers or marketers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent p-12 md:p-24 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 text-white">Ready to Build, Scale & Grow Your Business?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
              If you’re serious about growth and want a technology & marketing partner who thinks like a founder — let’s talk.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-3 px-12 py-6 bg-white text-brand-darker font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-2xl shadow-black/20"
            >
              <span>Book a Free Strategy Call</span>
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1),transparent_70%)]"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;