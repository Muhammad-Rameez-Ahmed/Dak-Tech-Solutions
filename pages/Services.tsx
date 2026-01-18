
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECH_SERVICES, MARKETING_SERVICES } from '../constants';
import { Code2, BarChart4 } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tech' | 'marketing'>('tech');

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
          >
            Our <span className="gradient-text">Specialized</span> Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            We bridge the gap between complex engineering and powerful marketing. 
            Choose a category to explore our capabilities.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <button
              onClick={() => setActiveTab('tech')}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'tech' 
                  ? 'bg-brand-primary text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-5 h-5" />
              <span>Technology & Dev</span>
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'marketing' 
                  ? 'bg-brand-secondary text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart4 className="w-5 h-5" />
              <span>Digital Marketing</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'tech' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === 'tech' ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeTab === 'tech' ? TECH_SERVICES : MARKETING_SERVICES).map((service, idx) => (
              <div 
                key={service.title}
                className="glass-card p-8 rounded-[2rem] group hover:border-brand-primary/40 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.tags && (
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
