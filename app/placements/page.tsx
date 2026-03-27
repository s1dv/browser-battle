import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlacementsComponent from '@/components/Placements';
import { Target, Trophy, Building2, BarChart3, Briefcase } from 'lucide-react';

export default function PlacementsPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/reference.webp')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">Career Development</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            Limitless <span className="text-gold italic">Careers</span>
          </h1>
          <p className="max-w-2xl mx-auto text-navy-deep/80 font-sans text-lg leading-relaxed font-medium">
            Consistently achieving record-breaking placements through rigorous training, strong industry partnerships, and unparalleled student talent.
          </p>
        </div>
      </section>

      {/* About Section - existing component */}
      <div id="about">
        <PlacementsComponent />
      </div>

      <section id="training" className="py-24 bg-white scroll-mt-16 border-t border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Target className="w-12 h-12 text-gold mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep">Placement <span className="text-gold italic">Training</span></h2>
            <p className="text-navy-deep/70 text-lg leading-relaxed font-sans">Our comprehensive training program begins from the first year, focusing on aptitude, technical skills, and soft skills to ensure students are industry-ready.</p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center space-x-4 p-4 bg-cream border border-navy-deep/5"><div className="w-2 h-2 bg-gold rounded-full" /> <span className="font-bold text-navy-deep">Aptitude & Logical Reasoning</span></li>
              <li className="flex items-center space-x-4 p-4 bg-cream border border-navy-deep/5"><div className="w-2 h-2 bg-gold rounded-full" /> <span className="font-bold text-navy-deep">Coding & Algorithmic Bootcamps</span></li>
              <li className="flex items-center space-x-4 p-4 bg-cream border border-navy-deep/5"><div className="w-2 h-2 bg-gold rounded-full" /> <span className="font-bold text-navy-deep">Mock Interviews & Group Discussions</span></li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-navy-deep p-8 text-cream flex flex-col items-center justify-center text-center shadow-lg transform -translate-y-4">
               <Briefcase className="w-10 h-10 text-gold mb-4" />
               <div className="text-3xl font-serif font-bold mb-2">200+</div>
               <div className="text-[10px] uppercase tracking-widest text-cream/60 font-bold">Training Hours</div>
             </div>
             <div className="bg-gold p-8 text-navy-deep flex flex-col items-center justify-center text-center shadow-lg transform translate-y-4">
               <Trophy className="w-10 h-10 text-navy-deep mb-4" />
               <div className="text-3xl font-serif font-bold mb-2">50+</div>
               <div className="text-[10px] uppercase tracking-widest text-navy-deep/60 font-bold">Expert Trainers</div>
             </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 bg-navy-deep text-cream scroll-mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/peanuts.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay grayscale"></div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
          <Trophy className="w-16 h-16 text-gold mx-auto mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Student <span className="text-gold italic">Achievements</span></h2>
          <p className="max-w-2xl mx-auto text-cream/70 mb-16 text-lg font-sans">BMSCE students consistently break records, securing dream offers from top global tech giants and core engineering firms.</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 border border-white/10 hover:border-gold transition-colors bg-white/5 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-widest font-bold text-gold mb-2">Highest Package</div>
              <div className="font-serif text-5xl font-bold text-white mb-4">₹50 L<span className="text-xl">PA+</span></div>
              <p className="text-cream/60 font-sans text-sm">Secured by multiple students in top product-based companies.</p>
            </div>
            <div className="p-8 border border-white/10 hover:border-gold transition-colors bg-white/5 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-widest font-bold text-gold mb-2">Dream Offers</div>
              <div className="font-serif text-5xl font-bold text-white mb-4">800+</div>
              <p className="text-cream/60 font-sans text-sm">Offers above ₹10 LPA across various engineering disciplines.</p>
            </div>
            <div className="p-8 border border-white/10 hover:border-gold transition-colors bg-white/5 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-widest font-bold text-gold mb-2">PPOs</div>
              <div className="font-serif text-5xl font-bold text-white mb-4">350+</div>
              <p className="text-cream/60 font-sans text-sm">Pre-Placement Offers secured through internships.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="companies" className="py-24 bg-cream scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <Building2 className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep mb-4">Recruiting <span className="text-gold italic">Companies</span></h2>
          <p className="max-w-2xl mx-auto text-navy-deep/60 mb-16 font-sans">Over 250+ top-tier companies visit our campus annually, reflecting the immense trust industry leaders place in our students.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="aspect-[3/2] bg-white border border-navy-deep/5 flex items-center justify-center p-4 hover:shadow-md transition-shadow grayscale hover:grayscale-0 group cursor-pointer">
                <div className="font-sans font-black text-navy-deep/30 text-xl group-hover:text-navy-deep transition-colors tracking-tighter">BRAND {i}</div>
              </div>
            ))}
          </div>
          <button className="mt-12 text-navy-deep font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors uppercase tracking-widest text-sm">View Full Recruiter List</button>
        </div>
      </section>

      <section id="stats" className="py-24 bg-white scroll-mt-16 border-t border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <BarChart3 className="w-12 h-12 text-gold mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep mb-6">Placement Statistics</h2>
            <p className="text-navy-deep/70 text-lg leading-relaxed font-sans mb-8">Our transparent and robust placement process ensures a majority of our students are placed before they graduate.</p>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold text-navy-deep mb-2 uppercase tracking-widest">
                  <span>CS & IS Branches</span>
                  <span>98%</span>
                </div>
                <div className="w-full h-2 bg-cream rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-gold"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold text-navy-deep mb-2 uppercase tracking-widest">
                  <span>Circuit Branches</span>
                  <span>92%</span>
                </div>
                <div className="w-full h-2 bg-cream rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-navy-deep/70"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold text-navy-deep mb-2 uppercase tracking-widest">
                  <span>Core Branches</span>
                  <span>85%</span>
                </div>
                <div className="w-full h-2 bg-cream rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-navy-deep/40"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-navy-deep rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-gold font-serif text-7xl font-bold mb-2">94%</div>
                <div className="text-cream font-sans uppercase tracking-widest font-bold max-w-[200px] mx-auto leading-relaxed text-sm">Overall Placement Percentage</div>
              </div>
            </div>
            {/* Decorative orbit ring */}
            <div className="absolute inset-[-40px] border border-navy-deep/10 rounded-full animate-[spin_30s_linear_infinite]">
               <div className="absolute top-0 left-1/2 w-4 h-4 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
