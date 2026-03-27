import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function UGAdmissionsPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />
      <section className="pt-32 pb-20 bg-navy-deep overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 text-center mt-10">
            <h1 className="font-serif font-black text-cream text-4xl md:text-6xl mb-6">
              Under Graduation <span className="text-gold italic">Admissions</span>
            </h1>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-navy-deep/70 leading-relaxed font-sans">Our undergraduate programs (Bachelor of Engineering) span 4 years (8 semesters). Candidates must have passed 10+2 with Physics and Mathematics as compulsory subjects.</p>
              <ul className="space-y-3 font-sans">
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-gold rotate-45"></span><span className="text-navy-deep/80 text-sm">CET (Karnataka Candidates)</span></li>
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-gold rotate-45"></span><span className="text-navy-deep/80 text-sm">COMEDK (All India Candidates)</span></li>
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-gold rotate-45"></span><span className="text-navy-deep/80 text-sm">Management Quota</span></li>
              </ul>
              <button className="bg-navy-deep text-cream px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-navy-deep transition-colors mt-4">Apply for UG</button>
            </div>
            <div className="bg-cream p-8 border border-navy-deep/5">
              <h4 className="font-serif text-xl font-bold text-navy-deep mb-4">Eligibility Criteria</h4>
              <p className="text-sm text-navy-deep/60 leading-relaxed mb-6 font-sans">Minimum 45% marks in aggregate in optional subjects (Physics, Maths and Chemistry/Bio-Technology/Biology/Computer Science/Electronics) for General Merit candidates.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
