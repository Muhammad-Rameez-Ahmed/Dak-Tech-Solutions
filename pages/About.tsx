
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, TrendingUp, Linkedin, Twitter, Quote, User } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: 'Innovation', desc: 'Constantly pushing the boundaries of what is possible in tech.', icon: <Lightbulb className="text-brand-primary" /> },
    { title: 'Transparency', desc: 'Clear communication and honest feedback at every step.', icon: <Target className="text-brand-secondary" /> },
    { title: 'Scalability', desc: 'Building solutions that grow with your business goals.', icon: <TrendingUp className="text-brand-accent" /> },
    { title: 'Results', desc: 'Data-driven decisions focused on your ROI.', icon: <Eye className="text-brand-primary" /> },
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-6">
              More than an Agency — A Growth Partner
            </div>
            <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 uppercase">
              We Think Like <span className="gradient-text">Business Owners</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-8">
              DAK TECH SOLUTIONS was born out of a frustration with the status quo. Founders were tired of developers who didn't understand marketing, and marketers who couldn't explain the tech.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our founder, Daniyal Ahmed Khan, realized that the best products are built by people who understand the P&L as well as they understand the code. We are a team of entrepreneurs building for entrepreneurs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-video lg:aspect-square group bg-white/5 flex items-center justify-center p-12">
               <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 flex items-center justify-center border border-white/10 relative">
                  <div className="text-8xl font-black font-heading text-white opacity-20 uppercase">DAK TECH</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="w-32 h-32 text-brand-primary opacity-40" />
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-2xl hidden md:block border-brand-primary/20">
              <div className="text-4xl font-bold text-brand-primary tracking-tighter uppercase">ROI FIRST</div>
              <div className="text-slate-400 font-medium">Our Core Philosophy</div>
            </div>
          </motion.div>
        </div>

        {/* Founder Story Deep Dive */}
        <section className="mb-32">
          <div className="glass-card p-10 md:p-20 rounded-[4rem] border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/5 to-transparent -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="rounded-[3rem] overflow-hidden border-8 border-brand-dark shadow-2xl transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500 aspect-square bg-gradient-to-br from-brand-dark to-slate-900 flex items-center justify-center">
                    <div className="text-white font-heading font-black text-9xl opacity-10">DK</div>
                    <User className="w-40 h-40 text-brand-primary absolute opacity-30" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-brand-primary p-6 rounded-3xl text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Linkedin className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="flex items-center space-x-2 text-brand-primary mb-6">
                  <Quote className="w-10 h-10 fill-brand-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 uppercase">The Founder's Story</h2>
                <div className="space-y-8 text-slate-300 text-xl leading-relaxed font-light">
                  <p>
                    "I started DAK TECH SOLUTIONS because I saw too many great business ideas fail due to poor execution. As an entrepreneur, I know that you don't care about 'clean code' if the site doesn't load fast enough to convert a customer."
                  </p>
                  <p>
                    "We built this company to be the partner I wish I had when I started my first business. We don't just take a brief and build it; we challenge the brief. If we think your idea won't scale or your marketing spend is being wasted, we tell you. We're here to grow with you, not just invoice you."
                  </p>
                  <div className="pt-4">
                    <p className="text-white font-bold text-2xl mb-1">Daniyal Ahmed Khan</p>
                    <p className="text-brand-primary font-bold uppercase tracking-widest text-sm">CEO & CO-Founder, Entrepreneur at Heart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          <div className="glass-card p-16 rounded-[3rem] border-t-8 border-t-brand-primary hover:translate-y-[-10px] transition-all">
            <h2 className="text-3xl font-bold font-heading mb-6 flex items-center space-x-4">
              <div className="p-3 bg-brand-primary/10 rounded-2xl"><Target className="w-8 h-8 text-brand-primary" /></div>
              <span>The Mission</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-xl">
              Helping businesses scale digitally with smart technology and performance marketing. We simplify complexity so our clients can focus on what they do best—running their business.
            </p>
          </div>
          <div className="glass-card p-16 rounded-[3rem] border-t-8 border-t-brand-secondary hover:translate-y-[-10px] transition-all">
            <h2 className="text-3xl font-bold font-heading mb-6 flex items-center space-x-4">
              <div className="p-3 bg-brand-secondary/10 rounded-2xl"><Eye className="w-8 h-8 text-brand-secondary" /></div>
              <span>The Vision</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-xl">
              To become the world's most trusted digital transformation partner, setting the standard for how technology and marketing work together to build global brands.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase">Our Principles</h2>
            <p className="text-slate-500 mt-4 text-xl">The foundation of every partnership we form.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-10 rounded-[2.5rem] text-center hover:border-brand-primary/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-brand-primary/10 transition-all"></div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 uppercase">{v.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto py-16">
          <h2 className="text-4xl font-bold font-heading text-center mb-24 underline decoration-brand-primary decoration-4 underline-offset-8 uppercase">Our Journey</h2>
          <div className="space-y-16">
            {[
              { year: '2012', title: 'The Vision Begins', desc: 'Daniyal Khan launched DAK TECH as a solo venture focused on high-performance e-commerce.' },
              { year: '2016', title: 'Breaking the Agency Mold', desc: 'Recognized that tech alone isn\'t enough. We pivoted to an integrated "Tech + Growth" model.' },
              { year: '2019', title: 'Going Global', desc: 'Reached our first 50 international clients. Scaled operations to serve founders across 3 continents.' },
              { year: '2023', title: 'The Intelligent Agency', desc: 'Integrated AI across all client funnels, moving from manual processes to intelligent automation.' },
            ].map((m, idx) => (
              <div key={idx} className="flex space-x-12 group">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-4 border-brand-primary bg-brand-dark group-hover:bg-brand-primary transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                  <div className="w-1 flex-grow bg-white/10 my-4"></div>
                </div>
                <div className="pb-12">
                  <div className="text-brand-primary font-black text-2xl mb-2 tracking-tighter">{m.year}</div>
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-brand-primary transition-colors uppercase">{m.title}</h3>
                  <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;