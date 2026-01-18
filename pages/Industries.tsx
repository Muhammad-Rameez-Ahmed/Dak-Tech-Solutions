
import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries: React.FC = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold font-heading mb-6"
          >
            Specialized in <span className="gradient-text">Your Industry</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed"
          >
            One size doesn't fit all. We bring deep vertical expertise to ensure your specific business challenges are met with proven, high-ROI solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-[3rem] group hover:border-brand-primary/40 transition-all flex flex-col h-full"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
                  {industry.icon}
                </div>
                <div className="text-slate-700 font-black text-4xl opacity-10">0{idx + 1}</div>
              </div>

              <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-brand-primary transition-colors">
                {industry.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                {industry.description}
              </p>

              <div className="space-y-3 mb-10">
                {industry.focus.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact" 
                className="mt-auto flex items-center space-x-2 text-brand-primary font-bold hover:translate-x-1 transition-transform"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Industry Trust Banner */}
        <section className="mt-32 p-12 md:p-24 rounded-[4rem] bg-brand-dark border border-white/5 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">Don't See Your Industry?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            While we specialize in the sectors above, our growth framework is adaptable. We've helped niche businesses scale by applying the same first-principles thinking that drives our biggest wins.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-3 px-10 py-5 bg-brand-primary text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            <span>Ask Us About Your Business</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Industries;
