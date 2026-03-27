'use client';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import StatsSection from "@/components/StatsSection";
import DepartmentsGrid from "@/components/DepartmentsGrid";
import Placements from "@/components/Placements";
import Admissions from "@/components/Admissions";
import ResearchInnovation from "@/components/ResearchInnovation";
import Visionaries from "@/components/Visionaries";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Lanyard from "@/components/Lanyard";
import AdmissionsModal from "@/components/AdmissionsModal";

export default function Home() {
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white selection:bg-gold selection:text-navy-deep overflow-x-hidden relative">
      <Navbar />
      
      {/* Lanyard floating at the top, entry point to Admissions */}
      <div className="fixed top-0 right-[5%] w-[300px] h-[600px] z-[150] pointer-events-none hidden lg:block">
        <Lanyard onClick={() => setIsAdmissionsOpen(true)} />
      </div>

      <Hero onExploreClick={() => setIsAdmissionsOpen(true)} />
      <NewsSection />
      <StatsSection />
      <DepartmentsGrid />
      
      {/* Removed Admissions section from main flow as per user request */}
      
      <Placements />
      <ResearchInnovation />
      <Visionaries />
      <Facilities />
      <Gallery />
      <Testimonials />
      <Footer />

      {/* Admissions Modal triggered by the Lanyard */}
      <AdmissionsModal isOpen={isAdmissionsOpen} onClose={() => setIsAdmissionsOpen(false)} />
    <main className="bg-cream selection:bg-gold selection:text-navy-deep overflow-x-hidden relative">
      <Navbar />
      <div className="relative">
        <div className="sticky top-0 h-screen overflow-hidden z-0"><Hero /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-cream"><NewsSection /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-cream"><StatsSection /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-cream"><DepartmentsGrid /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-cream"><Admissions /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-cream"><ResearchInnovation /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-[60] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-cream"><Visionaries /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-[70] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-cream"><Facilities /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-[80] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-cream"><Gallery /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-[90] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-cream"><Testimonials /></div>
        <div className="relative z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-cream"><Footer /></div>
      </div>
    </main>
  );
}
