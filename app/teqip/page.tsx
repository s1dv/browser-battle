import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe, BookOpen, Users } from 'lucide-react';
import { BMSCE_DATA } from '@/app/lib/bmsce_data';

export default function TeqipPage() {
  const teqipText = BMSCE_DATA['TEQIP-III'] || '';
  const paragraphs = teqipText.split('\\n').filter(p => p.trim() !== '' && !p.includes('Copyright'));

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/pj_block.jpg')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">World Bank Funded</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            TEQIP <span className="text-gold italic">Initiatives</span>
          </h1>
          <p className="max-w-3xl mx-auto text-navy-deep/80 font-sans text-lg leading-relaxed text-justify font-medium">
            BMSCE has successfully participated in Technical Education Quality Improvement Programme (TEQIP) Phases I, II, and III, significantly boosting the quality of technical education and infrastructure.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy-deep mb-8 flex items-center">
                <Globe className="text-gold mr-4 w-8 h-8" /> TEQIP Phase III
              </h2>
              <div className="space-y-6 text-navy-deep/80 font-sans text-lg leading-relaxed text-justify">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {paragraphs.length === 0 && (
                  <p>As a participating institution in the World Bank funded project, BMSCE has procured state-of-the-art laboratory equipment, enhanced faculty qualifications, and fostered industry-institute interaction to remarkable heights.</p>
                )}
              </div>
            </div>
            <div className="space-y-6">
              {[
                { phase: "TEQIP - I", status: "Completed", desc: "Focus on creating excellence in undergraduate engineering education." },
                { phase: "TEQIP - II", status: "Completed", desc: "Scaling up postgraduate education, demand-driven research & development." },
                { phase: "TEQIP - III", status: "Active/Concluded", desc: "Focus on improving quality and equity in engineering institutions." }
              ].map((item, i) => (
                <div key={i} className="bg-cream border border-navy-deep/5 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-bold text-navy-deep">{item.phase}</h3>
                    <span className="bg-gold/20 text-navy-deep text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{item.status}</span>
                  </div>
                  <p className="text-navy-deep/70 font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
