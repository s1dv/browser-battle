'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const accreditations = [
  { title: "NAAC", value: "A++", desc: "Third Cycle — Highest Grade" },
  { title: "NIRF 2022", value: "#83", desc: "National Institutional Ranking" },
  { title: "NBA", value: "✓", desc: "Multiple Programs Accredited" },
  { title: "AICTE", value: "✓", desc: "Approved Institution" }
];

const counters = [
  { value: 1946, label: "Established", sub: "Pioneering Education" },
  { value: 78, label: "Years of Legacy", sub: "Shaping Engineers", suffix: "+" },
  { value: 13, label: "UG Programs", sub: "Conventional & Emerging" },
  { value: 16, label: "PG Programs", sub: "Specialized Learning" },
  { value: 83, label: "NIRF Rank", sub: "Among India's Best", suffix: "rd" }
];

function Counter({ value, suffix = "" }: { value: number | string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && typeof value === 'number') {
      let start = 0;
      const end = value;
      const duration = 1800;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  if (typeof value === 'string') return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsAccreditations() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-navy-deep/5">
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="font-sans text-[11px] text-navy-deep/60 uppercase tracking-[0.4em] font-bold">Institutional Excellence</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-5xl font-black text-navy-deep leading-tight">
              A Legacy of <br/><span className="text-gold italic drop-shadow-sm">Academic Distinction</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-navy-deep/50 font-sans text-xs uppercase tracking-[0.2em] font-bold border-r-[3px] border-gold pr-6 text-right">
              NAAC A++ Accredited<br />Autonomous Institution
            </p>
          </div>
        </motion.div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {accreditations.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              className="p-8 text-center bg-[#F4F6F9] rounded-3xl border border-navy-deep/5 group hover:bg-white hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="font-sans text-[10px] text-navy-deep/60 uppercase tracking-[0.3em] font-bold mb-4">{item.title}</div>
              <div className="font-sans text-6xl font-black text-navy-deep mb-2 group-hover:text-gold group-hover:scale-110 transition-colors duration-500">{item.value}</div>
              <div className="text-navy-deep/60 text-[11px] font-sans uppercase tracking-[0.1em] font-bold leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-20">
          {counters.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 text-center glass-card border border-navy-deep/10 bg-white group hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-500 rounded-3xl"
            >
              <div className="font-sans text-4xl lg:text-5xl font-black text-navy-deep mb-3 group-hover:text-gold transition-colors duration-500">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-navy-deep/80 font-sans font-black text-[10px] uppercase tracking-[0.2em] mb-2">{stat.label}</div>
              <div className="text-navy-deep/40 text-[9px] uppercase tracking-[0.1em] font-bold">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8FAFC] rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden group border border-navy-deep/5 shadow-sm"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
          <div className="relative z-10">
            <h4 className="text-navy-deep font-sans text-2xl font-black mb-3">Times Engineering Survey Recognition</h4>
            <p className="text-navy-deep/60 font-sans text-sm leading-relaxed max-w-3xl font-medium">
              Consistently ranked among the elite institutions in India. <span className="text-navy-deep font-black">8th</span> among Top 140 Engineering Institutes nationwide.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-navy-deep text-white px-8 py-4 rounded-full font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-navy-deep hover:shadow-lg transition-colors duration-300 shrink-0"
          >
            View Full Rankings
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
