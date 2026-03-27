import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import StatsSection from "@/components/StatsSection";
import DepartmentsGrid from "@/components/DepartmentsGrid";
import Admissions from "@/components/Admissions";
import ResearchInnovation from "@/components/ResearchInnovation";
import Visionaries from "@/components/Visionaries";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white selection:bg-gold selection:text-navy-deep overflow-x-hidden relative">
      <Navbar />
      <div className="relative">
        <div className="sticky top-0 h-screen overflow-hidden z-0"><Hero /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-white"><NewsSection /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-white"><StatsSection /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-white"><DepartmentsGrid /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-white"><Admissions /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-white"><ResearchInnovation /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-[60] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-white"><Visionaries /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-[70] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-white"><Facilities /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-[80] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-white"><Gallery /></div>
        <div className="sticky top-0 min-h-screen overflow-y-auto z-[90] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-white"><Testimonials /></div>
        <div className="relative z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] bg-white"><Footer /></div>
      </div>
    </main>
  );
}
