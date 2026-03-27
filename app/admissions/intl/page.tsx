import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe } from 'lucide-react';

export default function IntlAdmissionsPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />
      <section className="pt-32 pb-20 bg-navy-deep overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 text-center mt-10">
            <h1 className="font-serif font-black text-cream text-4xl md:text-6xl mb-6">
              International <span className="text-gold italic">Admissions</span>
            </h1>
        </div>
      </section>
      <section className="py-24 bg-white scroll-mt-16 border-b border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-navy-deep/70 leading-relaxed font-sans">We welcome global perspectives. Admissions are open for Foreign Nationals, PIO, OCI, and NRI students under the supernumerary quota.</p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start space-x-3"><Globe className="w-5 h-5 text-gold shrink-0"/><span className="text-sm text-navy-deep/80 font-sans font-medium">Dedicated International Student Cell</span></li>
              <li className="flex items-start space-x-3"><Globe className="w-5 h-5 text-gold shrink-0"/><span className="text-sm text-navy-deep/80 font-sans font-medium">Seamless equivalence verification with AIU</span></li>
              <li className="flex items-start space-x-3"><Globe className="w-5 h-5 text-gold shrink-0"/><span className="text-sm text-navy-deep/80 font-sans font-medium">On-campus accommodation and support</span></li>
            </ul>
          </div>
          <div className="bg-navy-deep p-10 text-cream shadow-2xl">
            <h4 className="font-serif text-2xl font-bold mb-4">Contact International Office</h4>
            <p className="text-sm text-cream/70 mb-8 font-sans">Email: international.admissions@bmsce.ac.in</p>
            <button className="bg-gold text-navy-deep px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors w-full">Request Info</button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
