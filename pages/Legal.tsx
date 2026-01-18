
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, FileSignature, Globe } from 'lucide-react';

const Legal: React.FC<{ type: 'privacy' | 'terms' }> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold mb-8"
          >
            {isPrivacy ? <ShieldCheck className="w-4 h-4" /> : <Scale className="w-4 h-4" />}
            <span>Legal Infrastructure</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 uppercase">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h1>
          <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Last Updated: October 2024</p>
        </div>

        <div className="glass-card p-10 md:p-20 rounded-[3rem] border border-white/5 text-slate-300 space-y-12 text-lg leading-relaxed font-light">
          {isPrivacy ? (
            <>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase">1. Information Collection</h2>
                <p>We collect information you provide directly to us when you request a consultation, subscribe to our newsletter, or engage in a project. This may include your name, business email, phone number, and company details.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase">2. Data Usage</h2>
                <p>Your data is used exclusively to improve our service delivery, communicate project updates, and share strategic insights. We never sell or lease your information to third-party marketing companies.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase">3. Security Standards</h2>
                <p>DAK TECH SOLUTIONS employs industry-standard encryption and security protocols to protect your business intelligence. We follow stringent internal data handling policies to prevent unauthorized access.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase">4. Cookies & Analytics</h2>
                <p>We use essential cookies to ensure our platform functions correctly and analytics to understand user behavior, helping us optimize the digital experience for our clients.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase">1. Professional Engagement</h2>
                <p>Engagement with DAK TECH SOLUTIONS begins with a formal Statement of Work (SOW). All deliverables, timelines, and payment schedules will be explicitly defined in that document.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase">2. Intellectual Property</h2>
                <p>Unless otherwise agreed upon in writing, all custom source code, design assets, and marketing materials developed for the client become the exclusive property of the client upon final payment.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase">3. Limitation of Liability</h2>
                <p>While we strive for 100% uptime and conversion growth, DAK TECH SOLUTIONS is not liable for indirect or consequential damages resulting from unforeseen market shifts or third-party platform changes.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase">4. Termination of Service</h2>
                <p>Either party may terminate the engagement with 30 days' written notice, subject to the completion of pending payment cycles and the handover of existing project assets.</p>
              </section>
            </>
          )}
        </div>

        <div className="mt-20 text-center text-slate-500 text-sm">
           <p>For detailed legal inquiries, please contact our legal department at <span className="text-brand-primary font-bold">legal@daktech.solutions</span></p>
        </div>
      </div>
    </div>
  );
};

export default Legal;