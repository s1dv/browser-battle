import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Calendar, CheckSquare, Bell } from 'lucide-react';
import { BMSCE_DATA } from '@/app/lib/bmsce_data';

export default function COEPage() {
  const coeText = BMSCE_DATA['About-COE-Office'] || '';
  const paragraphs = coeText.split('\\n').filter(p => p.trim() !== '' && !p.includes('Copyright'));

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/lab.png')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">Academic Administration</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-4xl md:text-6xl mb-6 tracking-tighter drop-shadow-sm">
            Controller of <span className="text-gold italic">Examinations</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="font-serif text-3xl font-bold text-navy-deep flex items-center">
              <FileText className="text-gold mr-4" /> Message from COE
            </h2>
            <div className="prose prose-lg max-w-none text-navy-deep/80 font-sans text-justify leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {paragraphs.length === 0 && (
                <p>The office of the Controller of Examinations is an autonomous body responsible for the preparation, scheduling, and conduct of Continuous Internal Evaluations (CIE) and Semester End Examinations (SEE). We strive to maintain absolute confidentiality and efficiency in all examination-related matters.</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-8 border border-navy-deep/5 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-navy-deep mb-6 pb-4 border-b border-navy-deep/10">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { icon: Calendar, text: "Exam Time Table" },
                  { icon: Bell, text: "Notifications & Circulars" },
                  { icon: CheckSquare, text: "Results Portal" },
                  { icon: FileText, text: "Academic Rules & Regulations" }
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-center space-x-3 text-navy-deep/70 hover:text-gold transition-colors font-sans">
                      <item.icon className="w-5 h-5" />
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-navy-deep text-cream p-8">
              <h3 className="font-serif text-xl font-bold text-gold mb-4">Need Help?</h3>
              <p className="text-sm opacity-80 mb-6">Contact the Examination section for any queries regarding results or malpractices.</p>
              <button className="w-full bg-cream text-navy-deep py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors">
                Contact Office
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
