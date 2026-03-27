import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileDown, Download, Award, Target, FolderSync } from 'lucide-react';

export default function DocumentsPage() {
  const categories = [
    {
      title: "NAAC Accreditations",
      icon: Award,
      docs: [
        "NAAC Self Study Report 2022",
        "NAAC Peer Team Report",
        "AQAR 2021-22",
        "AQAR 2020-21"
      ]
    },
    {
      title: "NBA Approvals",
      icon: Target,
      docs: [
        "NBA Accreditation Status (UG)",
        "NBA Accreditation Status (PG)",
        "Compliance Report 2023"
      ]
    },
    {
      title: "NIRF Data",
      icon: FolderSync,
      docs: [
        "NIRF 2024 Engineering Data",
        "NIRF 2023 Overall Rankings Data",
        "NIRF 2022 Data Submitted"
      ]
    },
    {
      title: "Mandatory Disclosures",
      icon: FileDown,
      docs: [
        "AICTE Mandatory Disclosure 2023-24",
        "VTU Affiliation Documents",
        "Financial Audit Reports",
        "Anti-Ragging Committee Details"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/pj_block.jpg')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            Official <span className="text-gold italic">Documents</span>
          </h1>
          <p className="max-w-2xl mx-auto text-navy-deep/80 font-sans text-lg font-medium">
            Access institutional reports, accreditations, mandatory disclosures, and quality assurance records.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12">
          {categories.map((category, i) => (
            <div key={i} className="bg-cream p-10 border border-navy-deep/5 transition-all hover:border-gold/50 shadow-sm group">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-navy-deep text-gold flex items-center justify-center rounded-lg group-hover:bg-gold group-hover:text-navy-deep transition-colors">
                  <category.icon className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-navy-deep">{category.title}</h2>
              </div>
              <div className="space-y-4">
                {category.docs.map((doc, j) => (
                  <a key={j} href="#" className="flex items-center justify-between p-4 bg-white border border-black/5 hover:border-navy-deep/20 transition-colors group/link">
                    <span className="font-sans text-navy-deep/80 text-sm font-medium group-hover/link:text-navy-deep">{doc}</span>
                    <Download className="w-4 h-4 text-gold opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
