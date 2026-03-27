import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, GraduationCap, Globe, FileCheck, Search, BookMarked } from 'lucide-react';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/pj_block.jpg')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">Admissions</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            Join the <span className="text-gold italic">Legacy</span>
          </h1>
          <p className="max-w-2xl mx-auto text-navy-deep/80 font-sans text-lg leading-relaxed font-medium">
            Take the first step towards an illustrious engineering career. We welcome bright minds from across the globe to be a part of our diverse, vibrant community.
          </p>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-24 bg-cream border-b border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/admissions/ug" className="bg-white p-8 border border-navy-deep/10 hover:border-gold transition-all duration-300 group hover:-translate-y-2 shadow-sm block">
            <GraduationCap className="text-navy-deep w-10 h-10 mb-6 group-hover:text-gold transition-colors" />
            <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">UG Programs</h3>
            <p className="text-sm text-navy-deep/60 line-clamp-2 leading-relaxed">BE programs across diverse cutting-edge disciplines.</p>
          </Link>
          <Link href="/admissions/pg" className="bg-white p-8 border border-navy-deep/10 hover:border-gold transition-all duration-300 group hover:-translate-y-2 shadow-sm block">
            <BookOpen className="text-navy-deep w-10 h-10 mb-6 group-hover:text-gold transition-colors" />
            <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">PG Programs</h3>
            <p className="text-sm text-navy-deep/60 line-clamp-2 leading-relaxed">M.Tech, MBA, and MCA with industry alignment.</p>
          </Link>
          <Link href="/admissions/phd" className="bg-white p-8 border border-navy-deep/10 hover:border-gold transition-all duration-300 group hover:-translate-y-2 shadow-sm block">
            <Search className="text-navy-deep w-10 h-10 mb-6 group-hover:text-gold transition-colors" />
            <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">Ph.D Research</h3>
            <p className="text-sm text-navy-deep/60 line-clamp-2 leading-relaxed">Rigorous doctoral programs in various research centers.</p>
          </Link>
          <Link href="/admissions/intl" className="bg-white p-8 border border-navy-deep/10 hover:border-gold transition-all duration-300 group hover:-translate-y-2 shadow-sm block">
            <Globe className="text-navy-deep w-10 h-10 mb-6 group-hover:text-gold transition-colors" />
            <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">International</h3>
            <p className="text-sm text-navy-deep/60 line-clamp-2 leading-relaxed">Admissions for NRI, PIO, OCI, and foreign nationals.</p>
          </Link>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-cream scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep">Admission Process</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-navy-deep/10 hidden md:block -translate-y-1/2"></div>
            {[
              { step: "01", title: "Entrance Exam", desc: "Appear for CET, COMEDK, PGCET, or GATE as applicable." },
              { step: "02", title: "Counseling", desc: "Participate in central counseling or apply for management quota." },
              { step: "03", title: "Document Verification", desc: "Submit original academic and identity documents." },
              { step: "04", title: "Enrollment", desc: "Pay fees and complete the formal campus onboarding." }
            ].map((s) => (
              <div key={s.step} className="bg-white p-8 relative z-10 border border-navy-deep/5 shadow-sm text-center group hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 bg-navy-deep text-gold rounded-full flex items-center justify-center font-serif text-xl font-bold mx-auto mb-6 group-hover:bg-gold group-hover:text-navy-deep">{s.step}</div>
                <h4 className="font-sans font-bold text-navy-deep mb-3 text-lg">{s.title}</h4>
                <p className="text-sm text-navy-deep/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
