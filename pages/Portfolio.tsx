
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
          >
            Case <span className="gradient-text">Studies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            A collection of digital products and marketing campaigns we've crafted for world-class clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 mb-6 bg-brand-dark">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <button className="p-4 rounded-full bg-brand-primary text-white hover:scale-110 transition-transform">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                  <button className="p-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:scale-110 transition-transform">
                    <Github className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold font-heading group-hover:text-brand-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-slate-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-slate-500 mb-8">Want to see more of our work?</p>
          <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white font-bold">
            View More Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
