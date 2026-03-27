'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

const categories = ["All", "Campus", "Academic", "Events", "Sports"];

const images = [
  { id: 1, src: "/pj_block.jpg", category: "Campus", title: "Main Academic Block", date: "Present" },
  { id: 2, src: "/guitar.jpg", category: "Events", title: "Utsav Cultural Fest", date: "Mar 2025" },
  { id: 3, src: "/lab.png", category: "Academic", title: "Propel Innovation Lab", date: "Aug 2024" },
  { id: 4, src: "/indoor_stadium.png", category: "Sports", title: "Inter-college Basketball", date: "Jan 2025" },
  { id: 5, src: "/comp.jpg", category: "Events", title: "Phase Shift Tech Fest", date: "Sep 2024" },
  { id: 6, src: "/pj_block.jpg", category: "Campus", title: "Central Library", date: "Present" },
  { id: 7, src: "/sids_crush.jpg", category: "Academic", title: "Graduation Ceremony", date: "Jul 2024" },
  { id: 8, src: "/reference.webp", category: "Campus", title: "Student Hostels", date: "Present" },
  { id: 9, src: "/ball.webp", category: "Sports", title: "Annual Athletic Meet", date: "Dec 2024" }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#F4F6F9] selection:bg-gold selection:text-navy-deep overflow-x-hidden pt-32">
      <Navbar />

      <header className="max-w-[1440px] auto mx-auto px-6 lg:px-10 mb-16 text-center">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-3 mb-6">
             <div className="w-8 h-[2px] bg-gold" />
             <span className="font-sans text-[11px] text-navy-deep/50 uppercase tracking-[0.4em] font-bold">Visual Story</span>
             <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h1 className="font-sans text-5xl lg:text-7xl font-black text-navy-deep tracking-tight">Campus <span className="text-gold italic drop-shadow-sm">Gallery</span></h1>
        </motion.div>

        {/* Filters */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-wrap items-center justify-center gap-4 mt-12"
        >
          {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-8 py-3 rounded-full font-sans text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 shadow-sm ${
                 activeCategory === cat 
                   ? 'bg-navy-deep text-white shadow-lg scale-105' 
                   : 'bg-white text-navy-deep/60 hover:text-navy-deep hover:bg-[#F8FAFC]'
               }`}
             >
               {cat}
             </button>
          ))}
        </motion.div>
      </header>

      {/* Masonry Layout Container */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-32">
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-3xl overflow-hidden shadow-sm bg-white border border-navy-deep/5 block break-inside-avoid cursor-pointer"
              >
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                   <Image 
                     src={img.src} 
                     alt={img.title} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110" 
                     referrerPolicy={"no-referrer"}
                   />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy-deep/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center border border-gold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 delay-100">
                     <ZoomIn size={24} className="text-white" />
                   </div>

                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <span className="inline-block px-3 py-1 bg-gold/20 backdrop-blur-md rounded-full text-[9px] font-sans font-black text-white uppercase tracking-widest mb-3 border border-gold/30">
                       {img.category}
                     </span>
                     <h3 className="text-white font-sans text-xl font-black">{img.title}</h3>
                     <div className="flex items-center space-x-2 text-white/60 font-sans text-[10px] uppercase tracking-wider font-bold mt-2">
                       <Calendar size={12} />
                       <span>{img.date}</span>
                     </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
