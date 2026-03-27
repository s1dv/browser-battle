'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Bell, FileText } from 'lucide-react';

const news = [
  {
    date: "09", month: "MAR", category: "FDP", color: "text-blue-500 bg-blue-500/10",
    title: "DST-FIST Sponsored Faculty Development Program on Micro and Nano Characterization for Advanced Materials"
  },
  {
    date: "16", month: "FEB", category: "Workshop", color: "text-green-500 bg-green-500/10",
    title: "Comprehensive Workshop on Indian Standards, Codes and Regulations in Lighting — Illuminating the Future"
  },
  {
    date: "05", month: "FEB", category: "Scholarship", color: "text-amber-500 bg-amber-500/10",
    title: "Sri S Nijalingappa Scholarship 2025–26 — Applications Now Open"
  },
  {
    date: "14", month: "NOV", category: "Conference", color: "text-purple-500 bg-purple-500/10",
    title: "NETWORKING EMBEDDED AND WIRELESS SYSTEMS (NEWS) 2025 — National Conference by ECE"
  }
];

const notifications = [
  "Faculty Recruitment — Assistant Professor (CS Cluster). Apply by 25/03/2026.",
  "Admissions Open: Management Quota PG (M.Tech, MBA, MCA) 2026-27.",
  "B.S. Narayan Doctoral Fellowship 2025-26 — Apply before 31 Dec 2025.",
  "Change of Branch (COB) Circular for AY 2025-26 — Download Available."
];

const coeNotices = [
  "Time Table: IV Semester Makeup Examination MBA — Mar 2026.",
  "Circular: Photocopy / Challenge Valuation PG III Semester SEE Jan/Feb-26.",
  "Circular: Revaluation/Photocopy UG I, III Semesters SEE Jan/Feb-26.",
  "Makeup Registration for I and III Semester March 2026 — Fees Circular."
];

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState<'notifications' | 'coe'>('notifications');

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
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="font-sans text-[11px] text-navy-deep/50 uppercase tracking-[0.4em] font-bold">University Bulletin</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-5xl font-black text-navy-deep leading-tight">
              News & <span className="text-gold italic drop-shadow-sm">Announcements</span>
            </h2>
          </div>
          <button className="flex items-center space-x-3 text-gold font-sans text-[11px] uppercase tracking-[0.2em] font-black hover:text-navy-deep transition-all group border-b border-gold/30 pb-2">
            <span>View All Press Releases</span>
            <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left - News List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {news.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-6 lg:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 group cursor-pointer hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-navy-deep/5 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-[#F4F6F9] rounded-2xl flex flex-col items-center justify-center group-hover:bg-gold transition-colors duration-500 shadow-sm">
                  <span className="font-sans text-4xl font-black text-navy-deep group-hover:text-white transition-colors">{item.date}</span>
                  <span className="font-sans text-[10px] text-navy-deep/50 group-hover:text-white/80 mt-1 font-bold uppercase tracking-[0.2em] transition-colors">{item.month}</span>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-sans uppercase tracking-[0.2em] font-bold border border-navy-deep/5 ${item.color}`}>
                      {item.category}
                    </span>
                    <div className="w-1.5 h-1.5 bg-navy-deep/20 rounded-full" />
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-navy-deep/40 font-bold">Academic Year 2025–26</span>
                  </div>
                  <h3 className="font-sans font-black text-navy-deep text-xl lg:text-2xl leading-snug group-hover:text-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <div className="text-gold opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 hidden md:block border border-gold/20 p-3 rounded-full">
                  <ArrowUpRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Notifications Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-white rounded-3xl border border-navy-deep/5 flex flex-col overflow-hidden shadow-sm"
          >
            <div className="flex border-b border-navy-deep/5">
              <button 
                onClick={() => setActiveTab('notifications')}
                className={`flex-1 flex items-center justify-center space-x-3 py-6 text-[10px] font-sans uppercase tracking-[0.2em] font-black transition-all relative ${activeTab === 'notifications' ? 'text-navy-deep' : 'text-navy-deep/30 hover:text-navy-deep/60 bg-[#F4F6F9]'}`}
              >
                <Bell size={16} />
                <span>Bulletin</span>
                {activeTab === 'notifications' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1 bg-gold" />}
              </button>
              <button 
                onClick={() => setActiveTab('coe')}
                className={`flex-1 flex items-center justify-center space-x-3 py-6 text-[10px] font-sans uppercase tracking-[0.2em] font-black transition-all relative ${activeTab === 'coe' ? 'text-navy-deep' : 'text-navy-deep/30 hover:text-navy-deep/60 bg-[#F4F6F9]'}`}
              >
                <FileText size={16} />
                <span>COE</span>
                {activeTab === 'coe' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1 bg-gold" />}
              </button>
            </div>
            
            <div className="flex-1 p-8 space-y-8 overflow-y-auto w-full bg-white">
              {(activeTab === 'notifications' ? notifications : coeNotices).map((text, idx) => (
                <div key={idx} className="flex items-start space-x-4 group cursor-pointer p-4 hover:bg-[#F4F6F9] rounded-xl transition-colors shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 shadow-sm" />
                  <p className="text-[13px] text-navy-deep/70 font-sans font-medium leading-relaxed group-hover:text-navy-deep transition-colors w-full">{text}</p>
                </div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
