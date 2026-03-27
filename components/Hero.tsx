"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    pill: "NAAC A++ Accredited",
    line1: "Engineering",
    line2: "Excellence",
    sub: "Since 1946",
    body: "B.M.S. College of Engineering is India's first private sector initiative in engineering education, fostering innovation for over 78 years."
  },
  {
    pill: "Research & Innovation",
    line1: "Pioneering",
    line2: "Discovery",
    sub: "Across 20+ Research Centers",
    body: "Our commitment to research and development has led to groundbreaking discoveries and a culture of continuous learning."
  }
];

const stats = [
  { value: "A++", label: "NAAC Rating" },
  { value: "250+", label: "Recruiting Partners" },
  { value: "83rd", label: "NIRF 2022 Rank" }
];

interface HeroProps {
  onExploreClick?: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[100vh] bg-white overflow-hidden flex items-center pt-24 border-b border-navy-deep/5">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pj_block.jpg"
          alt="BMSCE PJ Block"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Glassmorphic Light Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Background Soft Blobs/Particles (Now overlaid on the image) */}
      <div className="absolute z-0 top-10 left-10 w-[400px] h-[400px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow"></div>
      <div className="absolute z-0 top-40 right-20 w-[300px] h-[300px] bg-red-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slower"></div>
      <div className="absolute z-0 -bottom-20 left-1/3 w-[500px] h-[500px] bg-yellow-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left Content */}
        <div className="relative h-[500px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
                }
              }}
              className="space-y-6 font-sans"
            >
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex items-center px-5 py-2 rounded-full glass-card border-none shadow-sm"
              >
                <span className="font-sans text-[11px] text-navy-deep uppercase tracking-[0.2em] font-bold">{slides[currentSlide].pill}</span>
              </motion.div>

              <motion.h1 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="font-sans font-black text-navy-deep leading-[1.0] tracking-tight text-[clamp(4rem,7vw,7rem)] drop-shadow-sm"
              >
                <div>{slides[currentSlide].line1}</div>
                <div className="text-gold mt-2">{slides[currentSlide].line2}</div>
              </motion.h1>

              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-[2px] bg-navy-deep/20" />
                <span className="font-sans text-xs text-navy-deep/60 tracking-[0.3em] uppercase font-bold">{slides[currentSlide].sub}</span>
              </motion.div>

              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="max-w-lg text-navy-deep/70 font-sans leading-relaxed text-lg font-medium"
              >
                {slides[currentSlide].body}
              </motion.p>

              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-6 pt-6"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={onExploreClick}
                  className="group bg-gold text-navy-deep px-10 py-5 rounded-full font-sans font-bold flex items-center space-x-3 transition-colors shadow-2xl animate-pulse-glow uppercase tracking-[0.15em] text-[12px] relative overflow-hidden"
                >
                  <Link href="/academics">
                    <motion.button 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="group bg-gold text-navy-deep px-10 py-5 rounded-full font-sans font-bold flex items-center space-x-3 transition-colors shadow-2xl animate-pulse-glow uppercase tracking-[0.15em] text-[12px] relative overflow-hidden"
                    >
                      <span className="relative z-10">Explore Programs</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform relative z-10" />
                      <div className="absolute inset-0 bg-white/30 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full blur-md"></div>
                    </motion.button>
                  </Link>
                </motion.div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <div className="flex items-center space-x-4 pt-12 relative z-30">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-navy-deep hover:bg-gold hover:text-white transition-colors duration-300 shadow-md group border-none"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-navy-deep hover:bg-gold hover:text-white transition-colors duration-300 shadow-md group border-none"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Right Content - Floating Glassmorphic Network */}
        <div className="hidden lg:flex items-center justify-center relative h-[600px] w-full">
          {mounted && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative w-[500px] h-[500px]">
                {stats.map((stat, idx) => {
                   const positions = [
                     { top: "0%", left: "55%", delay: 0 },
                     { top: "40%", left: "85%", delay: 0.2 },
                     { top: "80%", left: "30%", delay: 0.4 },
                     { top: "25%", left: "5%", delay: 0.6 }
                   ];
                   const pos = positions[idx];
                   return (
                     <motion.div
                       key={idx}
                       initial={{ opacity: 0, scale: 0.8, y: 20 }}
                       animate={{ opacity: 1, scale: 1, y: 0 }}
                       transition={{ delay: pos.delay, duration: 0.8, type: "spring" }}
                       className={`absolute glass-card p-6 flex flex-col items-center justify-center w-40 h-40 group hover:border-gold transition-colors duration-500 shadow-xl ${idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-slower'}`}
                       style={{ top: pos.top, left: pos.left } as any}
                     >
                       <div className="text-4xl font-black text-navy-deep group-hover:text-gold transition-colors">{stat.value}</div>
                       <div className="text-[10px] font-bold text-navy-deep/60 mt-2 uppercase tracking-[0.15em] text-center leading-tight">{stat.label}</div>
                     </motion.div>
                   )
                })}
                
                {/* Center Main Orb */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, type: "spring" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 glass-card border-gold/30 flex items-center justify-center flex-col animate-float-slow shadow-2xl z-10 shadow-gold/5"
                >
                   <Image src="/bmsce_logo.png" alt="BMSCE Logo" width={64} height={64} className="drop-shadow-lg" />
                   <div className="text-navy-deep font-black mt-4 text-xl tracking-[0.3em]">BMSCE</div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
