
import React from 'react';
import { motion } from 'framer-motion';
import { BLOGS } from '../constants';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blogs: React.FC = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6 uppercase"
          >
            Insights & <span className="gradient-text">Innovation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Stay ahead of the curve with our latest thoughts on technology, engineering, and digital growth. Designed specifically for founders who value ROI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {BLOGS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card flex flex-col md:flex-row overflow-hidden rounded-[2.5rem] hover:border-brand-primary/40 transition-all group min-h-[300px]"
            >
              <div className="w-full md:w-2/5 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black rounded-full uppercase tracking-[0.15em]">
                      {post.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-brand-primary transition-colors leading-tight uppercase">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-6 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center text-slate-400 text-[11px] font-medium uppercase tracking-widest">
                    <User className="w-3 h-3 mr-2 text-brand-primary" />
                    {post.author}
                  </div>
                  <button className="flex items-center space-x-2 text-brand-primary font-bold text-sm hover:translate-x-1 transition-transform">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-brand-primary/10 via-brand-dark to-brand-secondary/10 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 uppercase">Subscribe to DAK TECH Weekly</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
              Join 5,000+ founders receiving the latest case studies, tech trends, and marketing tips.
            </p>
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className="flex-grow px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-primary text-white text-lg"
              />
              <button className="px-8 py-4 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 active:scale-95">
                Join Now
              </button>
            </form>
            <p className="text-slate-600 text-xs mt-6">Zero spam. Only high-signal growth content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;