import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Users, Shield, Award, Building, FileText } from 'lucide-react';
import { BMSCE_DATA } from '@/app/lib/bmsce_data';

export default function AboutPage() {
  const homeText = BMSCE_DATA['Home'] || '';
  const firstParagraph = homeText.split('\\n')[0] || 'Discover the rich history, visionary leadership, and core values that have made B.M.S. College of Engineering a premier institution since 1946.';

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/pj_block.jpg')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">About Us</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            Legacy of <span className="text-gold italic">Excellence</span>
          </h1>
          <p className="max-w-4xl mx-auto text-navy-deep/80 font-sans text-lg leading-relaxed text-justify font-medium">
            {firstParagraph}
          </p>
        </div>
      </section>

      {/* Governing Body */}
      <section id="governing" className="py-24 bg-cream scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center space-x-4 mb-12">
            <Users className="text-gold w-8 h-8" />
            <h2 className="font-serif text-4xl font-bold text-navy-deep">Governing Body</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 border border-black/5 hover:border-gold/30 transition-colors shadow-sm group">
                <div className="w-16 h-16 bg-navy-deep rounded-full mb-6 flex items-center justify-center">
                  <Users className="text-gold w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-deep mb-2 group-hover:text-gold transition-colors">Visionary Leader {i}</h3>
                <p className="text-navy-deep/60 font-sans text-sm uppercase tracking-wider font-bold mb-4">Board Member</p>
                <p className="text-navy-deep/70 text-sm leading-relaxed">Guiding the institution with decades of experience in education and administration.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section id="admin" className="py-24 bg-navy-deep text-cream scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center space-x-4 mb-12">
            <Shield className="text-gold w-8 h-8" />
            <h2 className="font-serif text-4xl font-bold text-cream">Administration</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-gold">Principal&apos;s Message</h3>
              <p className="text-cream/80 leading-relaxed font-sans">
                Our administration works tirelessly to ensure that every student receives world-class education and resources. We are committed to fostering an environment of academic excellence, research, and holistic development.
              </p>
              <button className="text-gold font-bold uppercase tracking-widest text-xs flex items-center space-x-2 hover:text-white transition-colors">
                <span>Read Full Message</span> <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Deans', 'Registrar', 'HODs', 'Directors'].map((role) => (
                <div key={role} className="border border-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                  <span className="font-sans text-xs uppercase tracking-widest text-gold mb-2">{role}</span>
                  <span className="font-serif text-lg text-cream">View Profile</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Group Institutions */}
      <section id="group" className="py-24 bg-cream scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center space-x-4 mb-12">
            <Building className="text-navy-deep w-8 h-8" />
            <h2 className="font-serif text-4xl font-bold text-navy-deep">Group Institutions</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {['BMSCE', 'BMSIT', 'BMSW', 'BMSCA'].map((inst) => (
              <div key={inst} className="bg-navy-deep/5 p-8 text-center hover:bg-navy-deep hover:text-white transition-all duration-300 group cursor-pointer border border-transparent hover:border-gold/30">
                <h3 className="font-serif text-2xl font-bold text-navy-deep group-hover:text-gold mb-2">{inst}</h3>
                <p className="text-sm opacity-70">Established in Bangalore</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IQAC & IIIC */}
      <section className="py-24 bg-navy-deep text-cream">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div id="iqac" className="scroll-mt-24">
            <div className="flex items-center space-x-4 mb-8">
              <Award className="text-gold w-8 h-8" />
              <h2 className="font-serif text-3xl font-bold text-cream">IQAC</h2>
            </div>
            <p className="text-cream/70 leading-relaxed mb-6">
              The Internal Quality Assurance Cell ensures continuous improvement in all operational aspects of the institution, acting as a catalyst for quality enhancement.
            </p>
            <ul className="space-y-4">
              {['Quality Policy', 'Annual Reports', 'Strategic Plan'].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-sm text-gold">
                  <ArrowRight size={14} /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div id="iiic" className="scroll-mt-24">
            <div className="flex items-center space-x-4 mb-8">
              <BookOpen className="text-gold w-8 h-8" />
              <h2 className="font-serif text-3xl font-bold text-cream">IIIC</h2>
            </div>
            <p className="text-cream/70 leading-relaxed mb-6">
              The Industry Institute Interaction Cell bridges the gap between academia and industry, fostering collaborations, internships, and joint research.
            </p>
            <ul className="space-y-4">
              {['MoUs Signed', 'Industry Partners', 'Consultancy'].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-sm text-gold">
                  <ArrowRight size={14} /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COE & NAAC */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div id="coe" className="bg-white p-10 shadow-lg border border-black/5 scroll-mt-24">
            <h2 className="font-serif text-3xl font-bold text-navy-deep mb-6">COE Office</h2>
            <p className="text-navy-deep/70 leading-relaxed mb-8">
              The Controller of Examinations ensures smooth conduct of exams, timely publication of results, and maintenance of academic records.
            </p>
            <button className="bg-navy-deep text-white px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors">
              Student Portal
            </button>
          </div>
          <div id="naac" className="bg-white p-10 shadow-lg border border-black/5 scroll-mt-24">
            <div className="flex items-center space-x-4 mb-6">
              <FileText className="text-gold w-8 h-8" />
              <h2 className="font-serif text-3xl font-bold text-navy-deep">Documents & NAAC</h2>
            </div>
            <p className="text-navy-deep/70 leading-relaxed mb-8">
              Access important institutional documents, mandatory disclosures, and complete NAAC self-study reports and peer team reviews.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button className="border border-navy-deep/20 text-navy-deep py-2 text-xs uppercase tracking-widest font-bold hover:bg-navy-deep hover:text-white transition-colors">
                NAAC Reports
              </button>
              <button className="border border-navy-deep/20 text-navy-deep py-2 text-xs uppercase tracking-widest font-bold hover:bg-navy-deep hover:text-white transition-colors">
                Disclosures
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
