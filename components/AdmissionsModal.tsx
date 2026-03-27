'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Clock, ArrowRight, X } from 'lucide-react';

const programs = [
  {
    level: "UG",
    title: "Bachelor of Engineering",
    duration: "4 Years",
    intake: "13 Programs",
    status: "Open for 2026–27",
    statusColor: "text-green-600 bg-green-500/10 border-green-500/20",
    features: ["CET / COMEDK Admission", "Management Quota Available", "Hostel Facilities", "Scholarship Schemes"]
  },
  {
    level: "PG",
    title: "M.Tech / MBA / MCA",
    duration: "2 Years",
    intake: "16 Programs",
    status: "Open for 2026–27",
    statusColor: "text-green-600 bg-green-500/10 border-green-500/20",
    features: ["GATE / PGCET / KMAT", "Management Quota Available", "Research Opportunities", "Industry Collaborations"]
  },
  {
    level: "Ph.D",
    title: "Doctoral Programs",
    duration: "3–5 Years",
    intake: "All Departments",
    status: "Rolling Admissions",
    statusColor: "text-blue-600 bg-blue-500/10 border-blue-500/20",
    features: ["B.S. Narayan Fellowship", "Funded Research Projects", "20+ Research Centers", "VTU Affiliation"]
  },
  {
    level: "INT'L",
    title: "International Admissions",
    duration: "Varies",
    intake: "All UG & PG",
    status: "Applications Open",
    statusColor: "text-purple-600 bg-purple-500/10 border-purple-500/20",
    features: ["OCI / Foreign Passport", "UK / US / AU Scholarships", "Dedicated Support Cell", "Global Alumni Network"]
  }
];

const steps = [
  { id: "01", label: "Check Eligibility" },
  { id: "02", label: "Apply Online" },
  { id: "03", label: "Document Verification" },
  { id: "04", label: "Enrollment" }
];

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionsModal({ isOpen, onClose }: AdmissionsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-deep/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#F4F6F9] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl relative z-10 custom-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-navy-deep hover:bg-gold hover:text-white transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-[2px] bg-gold" />
                    <span className="font-sans text-[11px] text-navy-deep/50 uppercase tracking-[0.4em] font-bold">Enrollment 2026–27</span>
                  </div>
                  <h2 className="font-sans text-4xl lg:text-5xl font-black text-navy-deep leading-tight">
                    Begin Your <span className="text-gold italic drop-shadow-sm">Academic Journey</span>
                  </h2>
                </div>
                <p className="max-w-md text-navy-deep/60 font-sans text-sm leading-relaxed border-l-2 border-gold/30 pl-6 font-medium">
                  Applications for the academic year 2026–27 are now open. Explore our diverse range of undergraduate, postgraduate, and doctoral programs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {programs.map((prog, idx) => (
                  <motion.div
                    key={prog.level}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-white p-8 rounded-3xl flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 relative border border-navy-deep/5 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gold/20 group-hover:bg-gold transition-colors" />
                    
                    <div className="space-y-8 mb-8">
                      <div className="flex justify-between items-start">
                        <span className="font-sans text-5xl font-black text-navy-deep group-hover:text-gold transition-colors">{prog.level}</span>
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-sans uppercase tracking-[0.2em] font-black border ${prog.statusColor}`}>
                          {prog.status}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-sans text-xl font-black text-navy-deep mb-2 leading-tight group-hover:text-gold transition-colors">{prog.title}</h3>
                        <div className="flex items-center space-x-3 text-navy-deep/40 font-sans text-[10px] uppercase tracking-[0.2em] font-bold">
                          <div className="flex items-center space-x-1.5">
                            <Clock size={12} className="text-gold" />
                            <span>{prog.duration}</span>
                          </div>
                          <div className="w-1 h-1 bg-navy-deep/20 rounded-full" />
                          <span>{prog.intake}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4 mb-10">
                      {prog.features.map((feat, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-[12px] text-navy-deep/60 font-sans font-medium leading-tight group-hover:text-navy-deep/80 transition-colors w-full">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-navy-deep text-white py-4 rounded-xl font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-navy-deep transition-all duration-300 shadow-md flex items-center justify-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Timeline Banner */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-10 lg:p-16 relative overflow-hidden group shadow-sm border border-navy-deep/5"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                  <div className="max-w-md space-y-4 relative z-10">
                    <h3 className="font-sans text-3xl font-black text-navy-deep">Admission Process</h3>
                    <p className="text-navy-deep/60 font-sans text-sm leading-relaxed font-medium">
                      A streamlined, transparent four-step process designed to facilitate your transition into the BMSCE academic community.
                    </p>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full relative z-10">
                    <div className="absolute top-8 left-0 w-full h-[2px] bg-navy-deep/5 hidden lg:block" />
                    {steps.map((step) => (
                      <div key={step.id} className="relative flex flex-col items-center text-center space-y-6 z-10">
                        <div className="w-16 h-16 rounded-xl bg-white border-2 border-navy-deep/10 flex items-center justify-center font-sans text-navy-deep font-black text-2xl group-hover:border-gold group-hover:-translate-y-2 transition-transform duration-500 shadow-sm relative overflow-hidden shadow-gold/5">
                          <div className="absolute inset-0 bg-gold/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
                          <span className="relative z-10">{step.id}</span>
                        </div>
                        <span className="text-navy-deep/60 font-sans font-bold text-[11px] uppercase tracking-[0.2em] group-hover:text-gold transition-colors">{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
