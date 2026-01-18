
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, idx }: { question: string, answer: string, idx: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="mb-6"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 md:p-8 rounded-[2rem] glass-card transition-all flex justify-between items-center group ${isOpen ? 'border-brand-primary/40 bg-brand-primary/5' : 'hover:border-white/20'}`}
      >
        <span className="text-lg md:text-xl font-bold text-white group-hover:text-brand-primary transition-colors pr-8">
          {question}
        </span>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-white/5 text-slate-400'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-4 text-slate-400 text-lg leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold mb-8"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Clarifying the Process</span>
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-bold font-heading mb-6">Frequently Asked <span className="gradient-text">Questions</span></h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Transparency is one of our core principles. If your question isn't answered here, reach out to us directly for a custom breakdown.
          </p>
        </div>

        <div className="mb-24">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} {...faq} idx={idx} />
          ))}
        </div>

        {/* Support CTA */}
        <div className="glass-card p-12 md:p-16 rounded-[3rem] border border-white/5 text-center bg-gradient-to-br from-brand-primary/10 to-transparent">
          <MessageCircle className="w-16 h-16 text-brand-primary mx-auto mb-8 opacity-40" />
          <h2 className="text-3xl font-bold font-heading mb-6">Still have a question?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Our strategic advisors are ready to discuss your specific business requirements and clear any doubts you might have.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-3 px-10 py-5 bg-brand-primary text-white font-bold rounded-full hover:scale-105 transition-transform shadow-2xl shadow-brand-primary/20"
          >
            <span>Ask Us Anything</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
