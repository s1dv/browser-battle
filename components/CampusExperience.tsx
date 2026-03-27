'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, Navigation, PlayCircle, ArrowRight } from 'lucide-react';

const locations = [
  { name: 'Main Academic Block', type: 'Academic', image: '/pj_block.jpg' },
  { name: 'B.S. Narayan Hall', type: 'Auditorium', image: '/comp.jpg' },
  { name: 'Central Library', type: 'Support', image: '/sids_crush.jpg' },
  { name: 'Sports Complex', type: 'Wellness', image: '/indoor_stadium.png' },
];

export default function CampusExperience() {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[1px] bg-gold" />
                <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-bold">Campus Environment</span>
              </div>
              <h3 className="text-7xl md:text-8xl font-serif font-black text-cream leading-[0.9] tracking-tighter">
                A World-Class <br />
                <span className="italic text-gold">Ambience</span>
              </h3>
            </div>
            <p className="text-lg text-cream/40 font-gothic leading-relaxed border-l border-gold/30 pl-8 uppercase tracking-widest font-semibold">
              Nestled in the heart of Basavanagudi, our historic 11-acre campus provides a sophisticated environment for academic pursuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button className="bg-gold text-navy-deep px-10 py-5 font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:bg-cream transition-all duration-500 shadow-2xl shadow-gold/10 flex items-center justify-center group">
                Take Virtual Tour <PlayCircle className="ml-3 group-hover:rotate-12 transition-transform" size={18} />
              </button>
              <button className="border border-white/20 text-cream px-10 py-5 font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:bg-white/5 hover:border-gold transition-all duration-500 flex items-center justify-center">
                Interactive Map <Navigation className="ml-3" size={16} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden bg-navy-deep transition-all duration-700"
              >
                <div className="aspect-[4/5] relative">
                  <Image 
                    src={loc.image} 
                    alt={loc.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <span className="text-[9px] font-gothic font-black text-gold uppercase tracking-[0.4em] mb-4 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{loc.type}</span>
                    <h4 className="text-2xl font-serif font-bold text-white leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 group-hover:text-gold">{loc.name}</h4>
                    <div className="mt-6 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-700 delay-150" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
