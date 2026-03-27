'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Rohan K.",
    role: "Alumni, Batch of 2022",
    quote: "My experience at BMSCE was transformative. The hands-on labs and the incredible faculty guidance completely shaped my career path in software engineering.",
    avatar: "/lab.png"
  },
  {
    name: "Mrs. Anjali Sharma",
    role: "Parent of Grade 10 Student",
    quote: "Seeing the infrastructure and the level of personalized attention students receive here gives me immense peace of mind as a parent. Truly world-class.",
    avatar: "/comp.jpg"
  },
  {
    name: "Dr. Vikram S.",
    role: "Industry Partner",
    quote: "We have recruited hundreds of students from BMSCE over the past decade. The technical rigor and leadership qualities they possess are unmatched.",
    avatar: "/indoor_stadium.png"
  },
  {
    name: "Meera Reddy",
    role: "Current Student (ECE)",
    quote: "The vibrant campus life and the countless opportunities to participate in research projects make every single day exciting and fulfilling.",
    avatar: "/guitar.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F0EFFF] relative overflow-hidden flex flex-col items-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 blur-3xl rounded-full opacity-60 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-10 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full glass-card border border-white/40 shadow-sm mb-6">
             <span className="font-sans text-[10px] text-navy-deep uppercase tracking-[0.2em] font-bold">Community Voices</span>
          </div>
          <h2 className="font-sans text-4xl lg:text-5xl font-black text-navy-deep">
            What Our Students & Parents Say
          </h2>
          <div className="w-24 h-2 bg-gold mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Carousel Wrapper */}
        <div className="relative w-full overflow-hidden py-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-8 px-4 w-max animate-marquee hover:[animation-play-state:paused]"
          >
            {/* Double the array for seamless infinite scrolling */}
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="w-[350px] md:w-[400px] glass-card p-8 flex flex-col relative group transition-transform duration-300 hover:scale-[1.02] border border-navy-deep/5 bg-white/20"
              >
                <div className="absolute top-6 right-8 text-7xl text-navy-deep opacity-5 font-serif select-none pointer-events-none">&quot;</div>
                <p className="text-navy-deep/80 font-sans italic leading-relaxed text-[15px] mb-8 relative z-10 font-medium h-[120px]">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-navy-deep text-lg">{testimonial.name}</div>
                    <div className="font-sans text-[11px] uppercase tracking-wider text-navy-deep/60 mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {[0,1,2,3].map((dot) => (
             <div key={dot} className={`w-3 h-3 rounded-full transition-colors duration-300 ${dot === 0 ? 'bg-navy-deep' : 'bg-navy-deep/20'}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}
