import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PhDAdmissionsPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />
      <section className="pt-32 pb-20 bg-navy-deep overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 text-center mt-10">
            <h1 className="font-serif font-black text-cream text-4xl md:text-6xl mb-6">
              Ph.D <span className="text-gold italic">Research Admissions</span>
            </h1>
        </div>
      </section>
      <section className="py-24 bg-cream scroll-mt-16 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 text-center max-w-3xl relative z-10">
          <p className="text-navy-deep/70 leading-relaxed mb-8 font-sans">BMSCE offers Ph.D and M.Sc (Engg) by research programs affiliated to VTU, Belagavi. We have 14 recognized research centers fostering innovation across engineering and basic sciences.</p>
          <button className="border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-navy-deep transition-colors">Doctoral Guidelines</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
