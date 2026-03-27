'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Rocket, Layers, FlaskConical, Cpu, Lightbulb, Microscope } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: "100+", label: "Patents Filed" },
  { value: "50+", label: "Funded Projects" },
  { value: "20+", label: "Research Centers" },
  { value: "500+", label: "Ph.D Scholars" }
];

const labs = [
  { icon: Rocket, tag: "Propel Lab 1", name: "Product Innovation Lab", desc: "Robotics, embedded systems and product ideation" },
  { icon: Layers, tag: "Propel Lab 2", name: "3D Printing Lab", desc: "Advanced additive manufacturing and prototyping" },
  { icon: FlaskConical, tag: "Propel Lab 3", name: "Aerospace Propel Lab", desc: "Cutting-edge aerospace engineering experiments" },
  { icon: Cpu, tag: "Skill Lab", name: "IoT Lab", desc: "Internet of Things, sensors and connected devices" },
  { icon: Lightbulb, tag: "B.S. Narayan CoE", name: "AI & ML Centre", desc: "Research in artificial intelligence and machine learning" },
  { icon: Microscope, tag: "Research Lab", name: "Polymer Composites", desc: "Materials research and composite engineering" }
];

export default function Research() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-navy-deep/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="font-sans text-[11px] text-navy-deep/50 uppercase tracking-[0.4em] font-bold">R&D & Innovation</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-5xl font-black text-navy-deep leading-tight">
              Advancing <span className="text-gold italic drop-shadow-sm">Global Knowledge</span>
            </h2>
          </div>
          <button className="flex items-center space-x-3 text-gold font-sans text-[11px] uppercase tracking-[0.2em] font-black hover:text-navy-deep transition-all group border-b border-gold/30 pb-2">
            <span>Explore Research Repository</span>
            <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Stats Cells */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              className="bg-[#F8FAFC] p-10 rounded-3xl text-center group hover:bg-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 hover:border-gold/30 transition-all duration-500 border border-navy-deep/5"
            >
              <div className="font-sans text-5xl font-black text-navy-deep mb-3 group-hover:text-gold transition-colors duration-500">{stat.value}</div>
              <div className="font-sans text-navy-deep/60 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Lab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {labs.map((lab, idx) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-[#F4F6F9] p-8 rounded-3xl group hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 cursor-pointer border border-navy-deep/5"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-navy-deep/5 flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                  <lab.icon size={24} className="text-navy-deep group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="font-sans text-[9px] text-navy-deep/50 uppercase tracking-[0.2em] font-bold border border-navy-deep/10 px-3 py-1.5 rounded-full group-hover:border-gold group-hover:text-gold transition-colors bg-white/50">{lab.tag}</span>
              </div>
              <h3 className="font-sans text-xl font-black text-navy-deep mb-3 leading-tight group-hover:text-gold transition-colors">{lab.name}</h3>
              <p className="text-navy-deep/60 font-sans text-[11px] leading-relaxed mb-8 font-bold">{lab.desc}</p>
              <div className="flex items-center space-x-3 text-gold font-sans font-black text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                <span>Case Study</span>
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CIIE Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8FAFC] rounded-3xl border border-navy-deep/5 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-sm"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 lg:opacity-40 pointer-events-none mix-blend-multiply">
            <Image src="/lab.png" alt="Research Lab" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F8FAFC] z-10"></div>
          </div>
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-sans text-[12rem] font-black text-navy-deep/5 select-none pointer-events-none group-hover:scale-105 transition-transform duration-1000 z-0">
            CIIE
          </div>
          <div className="space-y-5 max-w-3xl relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center bg-white shadow-sm">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              </div>
              <span className="font-sans text-[11px] text-gold uppercase tracking-[0.3em] font-black drop-shadow-sm">Entrepreneurship Wing</span>
            </div>
            <h3 className="font-sans text-3xl font-black text-navy-deep leading-tight">Centre for Innovation, Incubation & Entrepreneurship</h3>
            <p className="text-navy-deep/60 font-sans text-sm leading-relaxed max-w-2xl font-medium">
              A premier ecosystem empowering the next generation of entrepreneurs with world-class mentorship, state-of-the-art infrastructure, and strategic funding to transform groundbreaking ideas into market-leading ventures.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 shrink-0"
          >
            <button className="bg-navy-deep text-white px-10 py-5 rounded-xl font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-navy-deep hover:shadow-lg transition-colors duration-300">
              Explore CIIE Ecosystem
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
