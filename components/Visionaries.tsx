'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Quote, ArrowUpRight } from 'lucide-react';

const founders = [
  {
    initial: "B",
    name: "Late Sri. B.M. Sreenivasaiah",
    role: "Founder, B.M.S. Educational Trust",
    desc: "Visionary and philanthropist who pioneered private engineering education in India in 1946."
  },
  {
    initial: "N",
    name: "Late Sri. B.S. Narayan",
    role: "Donor Trustee, B.M.S. Educational Trust",
    desc: "Continued his father's legacy, transforming BMSCE into a world-class institution over decades."
  }
];

export default function Visionaries() {
  return (
    <section className="py-24 bg-[#F4F6F9] relative overflow-hidden border-t border-navy-deep/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="font-sans text-[11px] text-navy-deep/50 uppercase tracking-[0.4em] font-bold">Our Foundation</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-5xl font-black text-navy-deep leading-tight">
              The <span className="text-gold italic drop-shadow-sm">Visionaries</span>
            </h2>
          </div>
          <p className="max-w-md text-navy-deep/60 font-sans text-sm leading-relaxed border-l-2 border-gold/30 pl-6 font-medium">
            B.M.S. College of Engineering was founded in 1946 by Late Sri. B. M. Sreenivasaiah — a great visionary — and nurtured by his son Late Sri. B. S. Narayan.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-10 lg:p-12 rounded-3xl flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 group hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 transition-all duration-500 border border-navy-deep/5"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#F4F6F9] border border-navy-deep/5 shadow-sm flex items-center justify-center font-sans text-3xl font-black text-navy-deep group-hover:bg-gold group-hover:text-white transition-all duration-500 shrink-0">
                {founder.initial}
              </div>
              <div className="space-y-3 text-center md:text-left">
                <h3 className="font-sans text-2xl font-black text-navy-deep leading-tight group-hover:text-gold transition-colors">{founder.name}</h3>
                <div className="font-sans text-[10px] text-navy-deep/50 uppercase tracking-[0.2em] font-bold">{founder.role}</div>
                <p className="text-navy-deep/70 font-sans text-sm leading-relaxed font-medium">{founder.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Principal's Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-navy-deep/5 shadow-sm relative overflow-hidden group flex flex-col lg:flex-row"
        >
          <div className="absolute top-0 left-0 w-full lg:w-2 h-2 lg:h-full bg-gold" />
          
          {/* Left Panel */}
          <div className="lg:w-1/3 p-10 lg:p-12 bg-[#F8FAFC] border-b lg:border-b-0 lg:border-r border-navy-deep/5 flex flex-col items-center text-center space-y-6">
            <div className="w-32 h-32 rounded-3xl border-2 border-navy-deep/5 p-1 group-hover:border-gold/50 transition-colors duration-500 shadow-sm bg-white">
              <div className="w-full h-full rounded-2xl bg-[#F4F6F9] flex items-center justify-center overflow-hidden">
                <span className="font-sans text-5xl font-black text-navy-deep/20 group-hover:text-gold transition-colors">BA</span>
              </div>
            </div>
            <div>
              <h4 className="font-sans text-xl font-black text-navy-deep">Dr. Bheemsha Arya</h4>
              <div className="font-sans text-[10px] text-navy-deep/50 uppercase tracking-[0.2em] font-bold mt-2">Principal, BMSCE</div>
            </div>
            <button className="flex items-center space-x-2 text-gold font-sans text-[11px] uppercase tracking-[0.2em] font-black hover:text-navy-deep transition-all group border-b border-gold/30 pb-1">
              <span>View Profile</span>
              <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Panel */}
          <div className="lg:w-2/3 p-10 lg:p-16 relative flex flex-col justify-center">
            <Quote size={80} className="text-navy-deep/[0.03] absolute top-8 right-8 z-0" />
            <div className="space-y-6 relative z-10 text-center lg:text-left">
              <p className="text-navy-deep/80 text-xl md:text-2xl leading-relaxed italic font-sans font-medium">
                &ldquo;A nation&apos;s real and sustainable growth is possible with technological advancement... The key to meet the demand for such quality engineers remains in providing <span className="text-gold font-black underline decoration-gold/30 underline-offset-4">holistic engineering education</span>.&rdquo;
              </p>
              <p className="text-navy-deep/50 font-sans text-sm leading-relaxed max-w-3xl font-medium">
                BMSCE has been at the forefront of engineering education for over 75 years, consistently adapting to the changing needs of the industry while maintaining its core values of excellence and innovation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
