import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import { Music, Trophy, Palette, Code, Mic } from 'lucide-react';
import Link from 'next/link';

export default function CampusLifePage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/indoor_stadium.png')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">Campus Life</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            Vibrant <span className="text-gold italic">Student Community</span>
          </h1>
          <p className="max-w-2xl mx-auto text-navy-deep/80 font-sans text-lg leading-relaxed font-medium">
            Experience an enriching campus life that balances sheer academic rigor with endless extracurricular opportunities, shaping well-rounded global professionals.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <div id="facilities" className="scroll-mt-16">
        <Facilities />
      </div>

      {/* Student Activities */}
      <section id="activities" className="py-24 bg-cream scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep mb-4">Student <span className="text-gold italic">Activities</span></h2>
            <p className="text-navy-deep/60 max-w-2xl mx-auto">Discover your passion through dozens of student-run clubs, societies, and cultural events.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Cultural Clubs", icon: Mic, desc: "Dance, Music, and Drama societies hosting annual fests like Utsav." },
              { name: "Technical Forums", icon: Code, desc: "Coding, Robotics, and IEEE chapters for tech enthusiasts." },
              { name: "Sports Teams", icon: Trophy, desc: "Competitive sports teams with state-of-the-art training facilities." },
              { name: "Art & Design", icon: Palette, desc: "Creative societies exploring visual arts and design." },
              { name: "Music Society", icon: Music, desc: "Bands, classical groups, and instrument training." }
            ].map((club) => (
              <div key={club.name} className="bg-white p-8 border border-navy-deep/5 hover:border-gold/50 transition-colors group cursor-pointer shadow-sm">
                <club.icon className="text-gold w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-2xl font-bold text-navy-deep mb-3">{club.name}</h3>
                <p className="text-navy-deep/70">{club.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/clubs" className="inline-flex items-center space-x-2 text-navy-deep border-b-2 border-gold pb-1 hover:text-gold transition-colors font-bold uppercase tracking-widest text-xs">
              <span>Explore All Clubs & Societies</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <div id="gallery" className="scroll-mt-16">
        <Gallery />
      </div>

      <Footer />
    </main>
  );
}
