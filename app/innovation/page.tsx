import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lightbulb, Rocket, Target, Users } from 'lucide-react';
import { BMSCE_DATA } from '@/app/lib/bmsce_data';

export default function InnovationPage() {
  const ciieText = BMSCE_DATA['Centre-for-Innovation-Incubation-Entrepreneurship-CIIE'] || '';
  const paragraphs = ciieText.split('\\n').filter(p => p.trim() !== '' && !p.includes('Copyright'));

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/lab.png')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">Research & Innovation</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            Centre for <span className="text-gold italic">Innovation</span>
          </h1>
          <p className="max-w-3xl mx-auto text-navy-deep/80 font-sans text-lg leading-relaxed text-justify font-medium">
            {paragraphs[0] || 'Empowering the next generation of entrepreneurs and innovators through incubation, funding, and mentorship.'}
          </p>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Lightbulb, title: "Incubation", desc: "Providing workspaces and seed funding to student startups." },
            { icon: Target, title: "Mentorship", desc: "Connecting students with industry veterans and successful founders." },
            { icon: Rocket, title: "Commercialization", desc: "Helping researchers transition patents into viable products." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 border border-navy-deep/5 shadow-sm text-center transform hover:-translate-y-2 transition-transform group">
              <item.icon className="w-12 h-12 text-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-2xl font-bold text-navy-deep mb-4">{item.title}</h3>
              <p className="text-navy-deep/70 font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-white border-y border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep mb-8">
              Incubation & Entrepreneurship
            </h2>
            <div className="space-y-6 text-navy-deep/70 font-sans text-lg leading-relaxed text-justify">
              {paragraphs.slice(1, 4).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <button className="mt-8 bg-navy-deep text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors">
              Apply for Incubation
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-[url('/comp.jpg')] bg-cover rounded-tl-3xl grayscale"></div>
            <div className="aspect-square bg-[url('/lab.png')] bg-cover rounded-tr-3xl grayscale"></div>
            <div className="aspect-square bg-[url('/pj_block.jpg')] bg-cover rounded-bl-3xl grayscale"></div>
            <div className="aspect-square bg-navy-deep text-cream p-6 flex flex-col justify-end rounded-br-3xl">
              <span className="font-serif text-5xl font-bold text-gold mb-2">20+</span>
              <span className="font-sans text-sm tracking-wider uppercase opacity-80">Startups Incubated</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
