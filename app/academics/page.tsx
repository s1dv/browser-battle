import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DepartmentsGrid from '@/components/DepartmentsGrid';
import Link from 'next/link';

export default function AcademicsPage() {
  const departments = [
    { id: 'civil', name: 'Civil Engineering', prefix: 'Est. 1946' },
    { id: 'cse', name: 'Computer Science & Engineering', prefix: 'Est. 1983' },
    { id: 'ece', name: 'Electronics & Communication', prefix: 'Est. 1971' },
    { id: 'mech', name: 'Mechanical Engineering', prefix: 'Est. 1946' },
    { id: 'aiml', name: 'AI & Machine Learning', prefix: 'Est. 2020' },
    { id: 'aero', name: 'Aerospace Engineering', prefix: 'Est. 2018' },
    { id: 'biotech', name: 'Bio-Technology', prefix: 'Est. 2002' },
  ];

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/comp.jpg')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">Academics</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            Academic <span className="text-gold italic">Excellence</span>
          </h1>
          <p className="max-w-2xl mx-auto text-navy-deep/80 font-sans text-lg leading-relaxed font-medium">
            Innovative curriculum, distinguished faculty, and state-of-the-art laboratories designed to foster academic brilliance.
          </p>
        </div>
      </section>

      {/* Department Quick Links / Grid */}
      <section className="py-24 bg-cream">
        <DepartmentsGrid />
      </section>

      {/* Individual Department Sections */}
      {departments.map((dept, idx) => (
        <section 
          key={dept.id} 
          id={dept.id} 
          className={`py-32 scroll-mt-16 ${idx % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="inline-flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">{dept.prefix}</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep leading-tight">
                {dept.name}
              </h2>
              <p className="text-navy-deep/70 text-lg leading-relaxed font-sans">
                The Department of {dept.name} offers preeminent programs equipped with modern laboratories, industry-aligned syllabi, and highly experienced faculty dedicated to molding future innovators.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="border-l-2 border-gold/30 pl-4">
                  <div className="text-2xl font-bold text-navy-deep mb-1 font-serif">100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-navy-deep/50 font-bold">Placement Rate</div>
                </div>
                <div className="border-l-2 border-gold/30 pl-4">
                  <div className="text-2xl font-bold text-navy-deep mb-1 font-serif">50+</div>
                  <div className="text-[10px] uppercase tracking-widest text-navy-deep/50 font-bold">Research Papers</div>
                </div>
              </div>

              <div className="pt-8">
                <Link href={`/departments/${dept.id}`}>
                  <button className="bg-navy-deep text-cream hover:bg-gold hover:text-navy-deep transition-colors px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center space-x-3">
                    <span>Explore Department</span>
                    <span className="text-xl leading-none">→</span>
                  </button>
                </Link>
              </div>
            </div>
            
            <div className={`relative h-[500px] w-full ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="absolute inset-0 bg-navy-deep/5 -translate-x-4 translate-y-4" />
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url('/lab.png')` }}
              />
              <div className="absolute bottom-6 left-6 right-6 bg-navy-deep/90 backdrop-blur-md p-6 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-gold font-bold text-xl font-serif">Department Head</div>
                  <div className="text-cream text-sm opacity-80 mt-1">Dr. Distinguished</div>
                </div>
                <div className="text-right">
                  <div className="text-cream text-[10px] uppercase tracking-widest opacity-60">Faculty</div>
                  <div className="text-cream font-bold text-xl mt-1">45+</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}
