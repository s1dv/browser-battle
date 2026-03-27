'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Camera, Music, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const activities = [
  { icon: Music, name: "Utsav", desc: "Inter-collegiate cultural festival." },
  { icon: Trophy, name: "Sports", desc: "Annual sports meet and tournaments." },
  { icon: Camera, name: "Clubs", desc: "Technical and non-technical student clubs." },
  { icon: Users, name: "Alumni", desc: "Global network of 50,000+ graduates." }
];

export default function Gallery() {
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
              <span className="font-sans text-[11px] text-navy-deep/50 uppercase tracking-[0.4em] font-bold">Visual Story</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-5xl font-black text-navy-deep leading-tight">
              Gallery & <span className="text-gold italic drop-shadow-sm">Campus Life</span>
            </h2>
          </div>
          <Link href="/gallery" className="flex items-center space-x-3 text-gold font-sans text-[11px] uppercase tracking-[0.2em] font-black hover:text-navy-deep transition-all group border-b border-gold/30 pb-2">
            <span>View Full Gallery</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="md:col-span-2 md:row-span-2 relative h-[400px] md:h-auto overflow-hidden group rounded-3xl shadow-sm border border-navy-deep/5"
          >
            <Image
              src="/pj_block.jpg"
              alt="BMSCE Campus"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
              <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="font-sans text-3xl font-black text-white group-hover:text-gold transition-colors">Main Academic Block</div>
                <div className="text-xs opacity-80 font-sans uppercase tracking-[0.2em] font-bold mt-2">The heart of BMSCE campus.</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="relative h-[250px] overflow-hidden group rounded-3xl shadow-sm border border-navy-deep/5"
          >
            <Image
              src="/lab.png"
              alt="BMSCE Lab"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="relative h-[250px] overflow-hidden group rounded-3xl shadow-sm border border-navy-deep/5"
          >
            <Image
              src="/indoor_stadium.png"
              alt="BMSCE Students"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="md:col-span-2 relative h-[250px] overflow-hidden group rounded-3xl shadow-sm border border-navy-deep/5"
          >
            <Image
              src="/comp.jpg"
              alt="BMSCE Event"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-y-2"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Activities Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, idx) => (
            <motion.div
              key={act.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#F8FAFC] p-8 rounded-3xl flex items-center space-x-6 group cursor-pointer hover:bg-white hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 transition-all duration-500 border border-navy-deep/5"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-navy-deep/5 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-gold transition-all duration-500">
                <act.icon size={24} className="text-navy-deep group-hover:text-white transition-colors duration-500" />
              </div>
              <div>
                <h4 className="font-sans text-lg font-black text-navy-deep leading-tight group-hover:text-gold transition-colors">{act.name}</h4>
                <p className="text-navy-deep/50 font-sans text-[10px] uppercase tracking-[0.15em] font-bold mt-2 leading-relaxed">{act.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
