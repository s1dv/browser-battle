'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Building2, Cog, Radio, Zap, Database, Globe, FlaskConical, Microscope, Plane } from 'lucide-react';
import Link from 'next/link';

const departments = [
  { code: "CE", name: "Civil Engineering", programs: "B.E · M.Tech", est: "1946", icon: Building2 },
  { code: "ME", name: "Mechanical Engineering", programs: "B.E · M.Tech", est: "1946", icon: Cog },
  { code: "EEE", name: "Electrical & Electronics", programs: "B.E · M.Tech", est: "1963", icon: Zap },
  { code: "ECE", name: "Electronics & Communication", programs: "B.E · M.Tech", est: "1962", icon: Radio },
  { code: "CSE", name: "Computer Science & Engineering", programs: "B.E · M.Tech", est: "1984", icon: Cpu },
  { code: "AI&ML", name: "AI & Machine Learning", programs: "B.E", est: "2020", icon: Database },
  { code: "CSE-DS", name: "Data Science", programs: "B.E", est: "2020", icon: Database },
  { code: "CSE-IoT", name: "IoT & Cyber Security", programs: "B.E", est: "2020", icon: Globe },
  { code: "ISE", name: "Information Science", programs: "B.E · M.Tech", est: "1996", icon: Database },
  { code: "CHE", name: "Chemical Engineering", programs: "B.E · M.Tech", est: "1964", icon: FlaskConical },
  { code: "BT", name: "Bio-Technology", programs: "B.E · M.Tech", est: "2000", icon: Microscope },
  { code: "ASE", name: "Aerospace Engineering", programs: "B.E", est: "2008", icon: Plane }
];

export default function Departments() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-navy-deep/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
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
              <span className="font-sans text-[11px] text-navy-deep/50 uppercase tracking-[0.4em] font-bold">Academic Portfolio</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-5xl font-black text-navy-deep leading-tight">
              Schools & <span className="text-gold italic drop-shadow-sm">Departments</span>
            </h2>
          </div>
          <p className="max-w-md text-navy-deep/60 font-sans text-sm leading-relaxed border-l-2 border-gold/30 pl-6 font-medium">
            Offering a comprehensive range of 13 undergraduate and 16 postgraduate programs across conventional and emerging engineering disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, idx) => (
            <Link key={dept.code} href={`/departments/${dept.code.toLowerCase()}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="group h-full bg-[#F8FAFC] p-8 rounded-3xl relative overflow-hidden transition-all duration-500 hover:bg-white cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 border border-navy-deep/5"
              >
                <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-xl bg-white border border-navy-deep/5 shadow-sm flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                      <dept.icon size={24} className="text-navy-deep group-hover:text-white transition-colors duration-500" />
                    </div>
                    <ArrowRight size={20} className="text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </div>

                  <div>
                    <div className="font-sans text-[10px] text-navy-deep/40 uppercase tracking-[0.3em] font-bold mb-2">{dept.code}</div>
                    <h3 className="font-sans text-xl font-black text-navy-deep group-hover:text-gold transition-colors duration-500 leading-tight">
                      {dept.name}
                    </h3>
                  </div>

                  <div className="flex justify-between items-end pt-6 border-t border-navy-deep/5 group-hover:border-gold/30 transition-colors mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-navy-deep/30 group-hover:text-navy-deep/50 transition-colors mb-1 font-bold">Programs</span>
                      <span className="text-[11px] font-bold text-navy-deep/60 group-hover:text-navy-deep transition-colors tracking-wide">{dept.programs}</span>
                    </div>
                    <span className="font-sans text-[9px] text-navy-deep/30 group-hover:text-gold/80 transition-colors font-bold tracking-[0.2em]">EST. {dept.est}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* More Departments Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="group glass-card bg-white/50 p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-6 hover:bg-gold/5 transition-all duration-500 cursor-pointer relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold/20 group-hover:bg-gold transition-colors" />
            <div className="font-sans text-6xl font-black text-navy-deep/10 group-hover:text-gold transition-colors duration-500">+8</div>
            <div>
              <div className="font-sans font-black text-navy-deep text-lg mb-1">More Departments</div>
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-navy-deep/40 font-bold">Science & Humanities</div>
            </div>
            <div className="flex items-center space-x-3 text-gold font-sans text-[11px] uppercase tracking-[0.3em] font-black group-hover:translate-x-2 transition-transform">
              <span>View All</span>
              <ArrowRight size={16} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
