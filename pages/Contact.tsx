
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! Our team will get back to you within 24 hours.');
  };

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold font-heading mb-8"
            >
              Let's Build & Grow <span className="gradient-text">Something Great</span> Together
            </motion.h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-lg">
              Have a project in mind or just want to chat about digital strategy? We're here to help you scale.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-400">hello@daktech.solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-2xl bg-brand-secondary/10 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Support Chat</h4>
                  <p className="text-slate-400">Available Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-2xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-slate-400">Remote / Global Headquartered in Silicon Valley</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 md:p-12 rounded-[2.5rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary text-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary text-white transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Service Interest</label>
                <select className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary text-white transition-colors appearance-none">
                  <option className="bg-brand-dark">Web Development</option>
                  <option className="bg-brand-dark">Mobile Development</option>
                  <option className="bg-brand-dark">Digital Marketing</option>
                  <option className="bg-brand-dark">AI Solutions</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">How can we help?</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary text-white transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center space-x-3 active:scale-[0.98]"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
