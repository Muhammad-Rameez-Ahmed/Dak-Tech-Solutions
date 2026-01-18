
import React from 'react';
import { motion } from 'framer-motion';
import { FREE_RESOURCES } from '../constants';
import { ArrowRight, Sparkles, Download, Calendar, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Exclusive Founder Resources</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold font-heading mb-6"
          >
            Free Value to Fuel <span className="gradient-text">Your Growth</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed"
          >
            We believe in building trust before business. Access our proprietary tools and audits to start scaling today — no strings attached.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {FREE_RESOURCES.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/5 hover:border-brand-primary/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {resource.icon}
              </div>
              
              <div className="mb-8">
                <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black rounded-full uppercase tracking-[0.15em] mb-4 inline-block">
                  {resource.tag}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-300">
                  {resource.icon}
                </div>
                <h3 className="text-3xl font-bold font-heading mb-4 text-white group-hover:text-brand-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {resource.description}
                </p>
              </div>

              <Link 
                to="/contact" 
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-brand-primary hover:text-white transition-all shadow-xl active:scale-95 group/btn"
              >
                <span>{resource.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured: Free Consultation Banner */}
        <section className="relative rounded-[4rem] overflow-hidden bg-brand-dark border border-white/10 p-12 md:p-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">Still Unsure Where to Start?</h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-10">
                Book a direct, no-pitch strategy session with our founder. We'll look at your current numbers and give you a clear roadmap for the next 90 days.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="p-2 rounded-lg bg-green-500/20 text-green-500"><Calendar className="w-5 h-5" /></div>
                  <span className="font-medium">1-on-1 Founder Session</span>
                </div>
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500"><Sparkles className="w-5 h-5" /></div>
                  <span className="font-medium">Custom 90-Day Roadmap</span>
                </div>
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-500"><Sparkles className="w-5 h-5" /></div>
                  <span className="font-medium">Zero Sales Pitch Guarantee</span>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="mt-12 inline-flex items-center space-x-4 px-10 py-5 bg-brand-primary text-white font-bold rounded-full hover:scale-105 transition-transform shadow-2xl shadow-brand-primary/20"
              >
                <span>Claim My Free Session</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <div className="relative hidden lg:block">
               <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full"></div>
               <div className="relative glass-card p-10 rounded-[3rem] border-white/20 transform rotate-3">
                  <div className="flex items-center justify-between mb-8">
                     <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Growth Forecast</div>
                     <div className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-[10px] font-black">+240% Target</div>
                  </div>
                  <div className="space-y-6">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.random() * 60 + 40}%` }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                            className="h-full bg-gradient-to-r from-brand-primary to-brand-accent"
                          />
                       </div>
                     ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                     <div className="flex -space-x-3">
                        {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-slate-800" />)}
                     </div>
                     <div className="text-xs text-slate-400 font-medium">Joined by 12 founders this week</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Form / Newsletter */}
        <div className="mt-32 text-center">
           <h3 className="text-2xl font-bold font-heading mb-6">Get More Strategic Insights</h3>
           <p className="text-slate-500 mb-10">We send one high-signal email every week. No fluff, just growth.</p>
           <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Work email..." 
                className="flex-grow px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-primary text-white"
              />
              <button className="px-8 py-4 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-primary/90 transition-all">
                Subscribe
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
