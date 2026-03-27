import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResearchInnovation from '@/components/ResearchInnovation';
import { Microscope, FileText, Lightbulb, Library, Network, Zap } from 'lucide-react';

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/comp.jpg')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">Research & Development</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            Pioneering <span className="text-gold italic">Discoveries</span>
          </h1>
          <p className="max-w-2xl mx-auto text-navy-deep/80 font-sans text-lg leading-relaxed font-medium">
            Leading the frontier of innovation through state-of-the-art research centers, funded projects, and impactful global publications.
          </p>
        </div>
      </section>

      {/* About R&D - using existing component */}
      <div id="about">
        <ResearchInnovation />
      </div>

      <section id="centers" className="py-24 bg-cream scroll-mt-16 border-t border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep">Research Centers</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-8 border-l-2 border-transparent hover:border-gold shadow-sm transition-all group">
                <Network className="text-navy-deep/40 w-8 h-8 mb-4 group-hover:text-gold transition-colors" />
                <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">Center of Excellence {i}</h3>
                <p className="text-sm text-navy-deep/60 line-clamp-2">Specializing in advanced materials, computing, and sustainable technologies.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="labs" className="py-24 bg-navy-deep text-cream scroll-mt-16 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <Microscope className="w-12 h-12 text-gold mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Innovative Labs</h2>
            <p className="text-cream/70 leading-relaxed mb-8 font-sans">
              Our campus houses specialized laboratories equipped with the latest technology, funded by industry giants and government bodies, to provide a playground for young researchers.
            </p>
            <ul className="space-y-4 mb-10">
               <li className="flex items-center space-x-3 text-sm text-cream/80 font-sans"><span className="text-gold">▹</span><span>3D Printing & Prototyping Lab</span></li>
               <li className="flex items-center space-x-3 text-sm text-cream/80 font-sans"><span className="text-gold">▹</span><span>Robotics & Automation Lab</span></li>
               <li className="flex items-center space-x-3 text-sm text-cream/80 font-sans"><span className="text-gold">▹</span><span>AI & Deep Learning Supercomputing Facility</span></li>
            </ul>
            <button className="text-gold font-bold uppercase tracking-widest text-xs flex items-center space-x-2">
              <span>View All Labs</span>
              <span className="text-lg leading-none">→</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-[url('/lab.png')] bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-500"></div>
            <div className="aspect-square bg-[url('/pj_block.jpg')] bg-cover bg-center rounded-sm mt-8 grayscale hover:grayscale-0 transition-all duration-500"></div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white scroll-mt-16 border-b border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <Library className="text-gold w-8 h-8" />
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep">Funded Projects</h2>
              </div>
              <p className="text-navy-deep/60 text-lg font-sans">Executing high-impact projects backed by DST, AICTE, ISRO, and DRDO, fostering scientific advancement.</p>
            </div>
            <div className="text-right mt-6 md:mt-0">
               <div className="text-5xl font-serif text-navy-deep font-bold">150+</div>
               <div className="text-[10px] text-navy-deep/50 uppercase tracking-widest font-bold mt-2">Active Projects</div>
            </div>
          </div>
          <div className="overflow-x-auto shadow-sm border border-navy-deep/10">
             <table className="w-full text-left border-collapse bg-white">
               <thead>
                 <tr className="bg-cream border-b border-navy-deep/20">
                   <th className="p-6 text-xs uppercase tracking-widest text-navy-deep font-bold whitespace-nowrap">Project Title</th>
                   <th className="p-6 text-xs uppercase tracking-widest text-navy-deep font-bold whitespace-nowrap">Agency</th>
                   <th className="p-6 text-xs uppercase tracking-widest text-navy-deep font-bold whitespace-nowrap">Amount (Cr)</th>
                 </tr>
               </thead>
               <tbody>
                 {[
                   { t: "Advanced Composite Materials for Aerospace", a: "DST-SERB", f: "1.20" },
                   { t: "AI Framework for Predictive Healthcare", a: "ICMR", f: "0.85" },
                   { t: "Smart Grid Integration Optimization", a: "AICTE", f: "0.55" },
                   { t: "Nanotechnology for Water Purification", a: "VGST", f: "0.40" }
                 ].map((p, i) => (
                   <tr key={i} className="border-b border-navy-deep/5 hover:bg-cream/50 transition-colors">
                     <td className="p-6 text-sm font-sans text-navy-deep/80 font-medium">{p.t}</td>
                     <td className="p-6 text-sm font-sans text-navy-deep/80 font-bold">{p.a}</td>
                     <td className="p-6 text-sm font-serif text-gold font-bold">₹ {p.f}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream grid md:grid-cols-2">
        <div id="publications" className="px-6 md:px-16 xl:px-24 mb-16 md:mb-0 scroll-mt-16 border-r border-navy-deep/10">
          <FileText className="w-12 h-12 text-gold mb-6" />
          <h2 className="font-serif text-4xl font-bold text-navy-deep mb-4">Journal Publications</h2>
          <p className="text-navy-deep/70 mb-8 leading-relaxed font-sans">Our faculty and scholars consistently publish in high-impact Scopus and Web of Science indexed journals.</p>
          <div className="bg-white p-8 border-t-4 border-navy-deep shadow-sm hover:shadow-md transition-shadow">
             <div className="text-5xl font-serif text-navy-deep mb-2 font-bold group-hover:text-gold">2500+</div>
             <div className="text-xs uppercase tracking-widest text-navy-deep/50 font-bold">Publications Since 2018</div>
          </div>
        </div>
        
        <div id="patents" className="px-6 md:px-16 xl:px-24 scroll-mt-16">
          <Lightbulb className="w-12 h-12 text-gold mb-6" />
          <h2 className="font-serif text-4xl font-bold text-navy-deep mb-4">Patents Filed</h2>
          <p className="text-navy-deep/70 mb-8 leading-relaxed font-sans">Protecting intellectual property through rigorous innovation, resulting in numerous granted national and international patents.</p>
          <div className="bg-white p-8 border-t-4 border-gold shadow-sm hover:shadow-md transition-shadow">
             <div className="text-5xl font-serif text-navy-deep mb-2 font-bold group-hover:text-gold">120+</div>
             <div className="text-xs uppercase tracking-widest text-navy-deep/50 font-bold">Patents Filed / Granted</div>
          </div>
        </div>
      </section>

      <section id="innovation" className="py-32 bg-navy-deep text-cream scroll-mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/indoor_stadium.png')] bg-cover bg-center opacity-10 mix-blend-overlay grayscale"></div>
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <Zap className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-5xl md:text-6xl font-black mb-6 tracking-tighter">Innovation & CIIE</h2>
          <p className="text-cream/70 leading-relaxed max-w-3xl mx-auto mb-10 text-lg font-sans">
            The Centre for Innovation, Incubation and Entrepreneurship (CIIE) promotes startup culture, providing funding, mentorship, and workspace for student and faculty startups.
          </p>
          <button className="bg-gold text-navy-deep hover:bg-cream transition-colors px-10 py-5 text-xs font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(220,38,38,0.2)]">
            Explore CIIE Hub
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
