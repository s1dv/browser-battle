import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Music, Code, Trophy, Map, Heart, Star, Compass } from 'lucide-react';

const clubCategories = [
  {
    title: "Technical & Professional",
    icon: Code,
    clubs: [
      { name: "IEEE BMSCE Student Branch", desc: "One of the most active tech forums hosting hackathons, workshops, and flagship event Phase Shift." },
      { name: "Coding Club", desc: "Fostering competitive programming and open-source contributions among students." },
      { name: "Robotics Society", desc: "Building autonomous and remote-controlled robots for national-level competitions." },
      { name: "AeroBMSCE", desc: "Aerospace enthusiasts designing and flying competitive RC aircraft and drones." }
    ]
  },
  {
    title: "Cultural & Arts",
    icon: Music,
    clubs: [
      { name: "Paramva - The Dance Club", desc: "Award-winning classical, contemporary, and hip-hop dance troupes." },
      { name: "Ninaad - Music Society", desc: "Classical vocalists, instrumentalists, and western rock bands." },
      { name: "Pravritti - Theatre Group", desc: "Producing thought-provoking stage plays and street plays (Nukkad Natak)." },
      { name: "Fine Arts Club", desc: "Painting, sketching, digital art, and campus beautification initiatives." }
    ]
  },
  {
    title: "Social & Leadership",
    icon: Heart,
    clubs: [
      { name: "NSS Unit", desc: "National Service Scheme focusing on rural empowerment and blood donation camps." },
      { name: "Rotaract Club of BMSCE", desc: "Developing leadership and professional skills through community service." },
      { name: "Mountaineering Club", desc: "Organizing treks, expeditions, and outdoor leadership programs." },
      { name: "Debate Society", desc: "Model UN and parliamentary debate focusing on public speaking and diplomacy." }
    ]
  }
];

export default function ClubsPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/guitar.jpg')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">Student Clubs</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            Find Your <span className="text-gold italic">Tribe</span>
          </h1>
          <p className="max-w-2xl mx-auto text-navy-deep/80 font-sans text-lg leading-relaxed font-medium">
            With over 60 active student-run clubs and societies, BMSCE offers endless opportunities to explore your passions beyond the classroom.
          </p>
        </div>
      </section>

      {/* Clubs Listing */}
      <section className="py-24 bg-cream border-t border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6 space-y-24">
          {clubCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center space-x-4 mb-10 pb-4 border-b-2 border-navy-deep/10">
                <category.icon className="text-gold w-10 h-10" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-deep">{category.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.clubs.map((club) => (
                  <div key={club.name} className="bg-white p-8 border border-navy-deep/5 hover:border-gold transition-colors hover:shadow-lg group">
                    <div className="w-12 h-12 bg-navy-deep/5 flex items-center justify-center rounded-full mb-6 group-hover:bg-gold transition-colors">
                      <Star className="text-navy-deep w-6 h-6" />
                    </div>
                    <h3 className="font-sans text-xl font-bold text-navy-deep mb-3 leading-tight">{club.name}</h3>
                    <p className="text-navy-deep/70 text-sm leading-relaxed mb-6 font-sans">{club.desc}</p>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-navy-deep/50 hover:text-gold transition-colors pt-2 border-t border-navy-deep/5 w-full text-left">Join Club →</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Annual Fest Section */}
      <section className="py-24 bg-navy-deep text-cream relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
        <div className="max-w-[1280px] mx-auto px-6 text-center max-w-4xl relative z-10">
          <Trophy className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Utsav & Phase Shift</h2>
          <p className="text-cream/70 text-lg leading-relaxed font-sans mb-10">
            The vibrant club culture peaks during our flagship annual fests. Utsav, the cultural extravaganza, and Phase Shift, the technical symposium, draw massive participation from colleges across the country.
          </p>
          <button className="bg-gold text-navy-deep px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
            View Fest Gallery
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
