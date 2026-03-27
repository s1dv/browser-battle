'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  {
    title: "Admissions",
    links: [
      { name: "UG Programs", href: "/admissions/ug" },
      { name: "PG Programs", href: "/admissions/pg" },
      { name: "Ph.D Programs", href: "/admissions/phd" },
      { name: "Fee Structure", href: "/admissions" }
    ]
  },
  {
    title: "Important",
    links: [
      { name: "NIRF Data", href: "/documents" },
      { name: "NAAC SSR", href: "/documents" },
      { name: "Mandatory Disclosure", href: "/documents" },
      { name: "IQAC", href: "/about" }
    ]
  },
  {
    title: "Quick Links",
    links: [
      { name: "Apply Now", href: "/apply" },
      { name: "Alumni Association", href: "/clubs" },
      { name: "Careers", href: "/about" },
      { name: "Contact Us", href: "/contact" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 text-navy-deep border-t border-navy-deep/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1440px] mx-auto px-6 lg:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand Block */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <Image 
                src="/bmsce_logo.png" 
                alt="BMSCE Logo" 
                width={64} 
                height={64} 
                className="drop-shadow-lg" 
              />
              <div>
                <h2 className="font-sans text-2xl font-black leading-tight text-navy-deep">B.M.S. College of <br />Engineering</h2>
                <p className="font-sans text-[10px] text-navy-deep/50 uppercase tracking-[0.2em] font-bold mt-1">Autonomous Institute · Est. 1946</p>
              </div>
            </div>
            
            <p className="text-navy-deep/60 text-sm font-sans leading-relaxed max-w-sm font-medium">
              India's first private sector initiative in engineering education. Consistently ranked among the top engineering colleges globally, committed to excellence.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#F4F6F9] flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <MapPin size={16} className="text-navy-deep transition-colors duration-300" />
                </div>
                <span className="text-navy-deep/70 text-xs font-sans leading-tight group-hover:text-navy-deep font-bold transition-colors">P.B. No. 1908, Bull Temple Road, <br />Bangalore - 560 019</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#F4F6F9] flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Phone size={16} className="text-navy-deep transition-colors duration-300" />
                </div>
                <span className="text-navy-deep/70 text-xs font-sans font-bold group-hover:text-navy-deep transition-colors">+91-80-26622130</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-6">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, idx) => (
                 <motion.button 
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   key={idx} 
                   className="bg-[#F4F6F9] hover:bg-gold w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 group shadow-sm"
                 >
                   <Icon size={18} className="text-navy-deep transition-colors" />
                 </motion.button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-8">
              <h3 className="font-sans text-[11px] text-navy-deep uppercase tracking-[0.3em] font-black">{col.title}</h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-navy-deep/60 text-[13px] font-sans font-bold hover:text-gold transition-colors flex items-center group">
                      <span>{link.name}</span>
                      <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all font-bold" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-navy-deep/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-navy-deep/40 text-[10px] font-sans font-bold uppercase tracking-widest">
            © 2026 B.M.S. College of Engineering. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-8 text-navy-deep/40 text-[10px] font-sans uppercase font-bold tracking-widest">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
