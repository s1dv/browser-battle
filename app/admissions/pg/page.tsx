import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PGAdmissionsPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />
      <section className="pt-32 pb-20 bg-navy-deep overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 text-center mt-10">
            <h1 className="font-serif font-black text-cream text-4xl md:text-6xl mb-6">
              Post Graduation <span className="text-gold italic">Admissions</span>
            </h1>
        </div>
      </section>
      <section className="py-24 bg-cream scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white p-10 shadow-xl border border-navy-deep/5">
            <h4 className="font-serif text-xl font-bold text-navy-deep mb-6">M.Tech / MBA / MCA</h4>
            <div className="space-y-4">
              <div className="border-b border-navy-deep/10 pb-4">
                <div className="text-sm font-bold text-navy-deep">PGCET</div>
                <div className="text-xs text-navy-deep/60 mt-1 font-sans">For Karnataka candidates across all PG programs</div>
              </div>
              <div className="border-b border-navy-deep/10 pb-4">
                <div className="text-sm font-bold text-navy-deep">GATE / KMAT / CMAT</div>
                <div className="text-xs text-navy-deep/60 mt-1 font-sans">Accepting national level entrance scores</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-deep">Post Graduation</h2>
            <p className="text-navy-deep/70 leading-relaxed font-sans">Advance your expertise with our specialized Master&apos;s programs designed to meet current industry demands and technological advancements.</p>
            <button className="text-gold font-bold uppercase tracking-widest text-xs flex items-center space-x-2"><span>View PG Specializations</span> <span>→</span></button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
