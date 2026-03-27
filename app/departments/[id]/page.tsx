import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Users, FlaskConical, Award, Briefcase, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';

import { BMSCE_DATA } from '@/app/lib/bmsce_data';

const getHeroDesc = (key: string) => {
  const data = BMSCE_DATA[key];
  if (!data) return '';
  const firstPara = data.split('\n')[0];
  const sentences = firstPara.split('. ');
  return sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '.' : '');
};

const getConciseOverview = (key: string) => {
  const data = BMSCE_DATA[key];
  if (!data) return [];
  
  const lines = data.split('\n').filter(p => p.trim() !== '' && !p.includes('Copyright'));
  const firstPara = lines[0] || '';
  const sentences = firstPara.split('. ').filter(s => s.trim() !== '');
  
  if (sentences.length <= 2) {
    if (lines.length > 1) return [lines[1]];
    return [];
  }

  const overviewSentences = sentences.slice(2, 5); // Take up to 3 sentences
  let combined = overviewSentences.join('. ').trim();
  if (combined && !combined.endsWith('.')) {
    combined += '.';
  }
  
  return [combined];
};

const departmentData: Record<string, any> = {
  civil: { name: 'Civil Engineering', year: '1946', hero: getHeroDesc('Civil-Engineering-About'), paragraphs: getConciseOverview('Civil-Engineering-About'), hod: 'Dr. Jane Smith' },
  cse: { name: 'Computer Science & Engineering', year: '1983', hero: getHeroDesc('Computer-Science-and-Engineering-About'), paragraphs: getConciseOverview('Computer-Science-and-Engineering-About'), hod: 'Dr. Alan Turing' },
  ece: { name: 'Electronics & Communication', year: '1971', hero: getHeroDesc('Electronics-and-Communication-Engineering-About'), paragraphs: getConciseOverview('Electronics-and-Communication-Engineering-About'), hod: 'Dr. Claude Shannon' },
  mech: { name: 'Mechanical Engineering', year: '1946', hero: getHeroDesc('Mechanical-Engineering-About'), paragraphs: getConciseOverview('Mechanical-Engineering-About'), hod: 'Dr. Nikola Tesla' },
  aiml: { name: 'AI & Machine Learning', year: '2020', hero: getHeroDesc('Machine-Learning-AI-and-ML-About'), paragraphs: getConciseOverview('Machine-Learning-AI-and-ML-About'), hod: 'Dr. Geoffrey Hinton' },
  aero: { name: 'Aerospace Engineering', year: '2018', hero: getHeroDesc('Aerospace-Engineering-About'), paragraphs: getConciseOverview('Aerospace-Engineering-About'), hod: 'Dr. Kalpana Chawla' },
  biotech: { name: 'Bio-Technology', year: '2002', hero: getHeroDesc('Bio-Technology-About'), paragraphs: getConciseOverview('Bio-Technology-About'), hod: 'Dr. Alexander Fleming' }
};

export default async function DepartmentPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const data = departmentData[params.id];

  if (!data) return notFound();

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden border-b border-navy-deep/5">
        <div className="absolute inset-0 bg-[url('/lab.png')] bg-cover bg-center opacity-15 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/50 via-[#FAFAFA]/80 to-[#FAFAFA] z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">Est. {data.year}</span>
          </div>
          <h1 className="font-serif font-black text-navy-deep text-5xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">
            {data.name}
          </h1>
          <p className="max-w-4xl mx-auto text-navy-deep/80 font-sans text-lg leading-relaxed text-center font-medium">
            {data.hero || 'Welcome to one of our premier departments dedicated to excellence in education and research.'}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white border-y border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep mb-8 flex items-center">
              Overview
            </h2>
            <div className="prose prose-lg max-w-none text-navy-deep/80 font-sans text-justify leading-relaxed space-y-6">
              {data.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-fit lg:sticky lg:top-32">
            <div className="aspect-square bg-[url('/comp.jpg')] bg-cover rounded-tl-3xl grayscale"></div>
            <div className="aspect-square bg-[url('/lab.png')] bg-cover rounded-tr-3xl grayscale"></div>
            <div className="aspect-square bg-[url('/pj_block.jpg')] bg-cover rounded-bl-3xl grayscale"></div>
            <div className="aspect-square bg-navy-deep text-cream p-6 flex flex-col justify-end rounded-br-3xl">
              <span className="font-serif text-5xl font-bold text-gold mb-2">{data.year}</span>
              <span className="font-sans text-sm tracking-wider uppercase opacity-80">Year Established</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-navy-deep/5 shadow-sm text-center transform hover:-translate-y-2 transition-transform group">
             <Users className="w-12 h-12 text-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
             <h3 className="font-serif text-2xl font-bold text-navy-deep mb-2">HOD</h3>
             <p className="text-navy-deep/70 font-sans">{data.hod}</p>
          </div>
          <div className="bg-white p-8 border border-navy-deep/5 shadow-sm text-center transform hover:-translate-y-2 transition-transform group">
             <FlaskConical className="w-12 h-12 text-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
             <h3 className="font-serif text-2xl font-bold text-navy-deep mb-2">Laboratories</h3>
             <p className="text-navy-deep/70 font-sans">8+ State-of-the-art Labs</p>
          </div>
          <div className="bg-white p-8 border border-navy-deep/5 shadow-sm text-center transform hover:-translate-y-2 transition-transform group">
             <Award className="w-12 h-12 text-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
             <h3 className="font-serif text-2xl font-bold text-navy-deep mb-2">Accredited</h3>
             <p className="text-navy-deep/70 font-sans">Tier-1 NBA Accreditation</p>
          </div>
        </div>
      </section>
      
      {/* Syllabus & Academics */}
      <section className="py-24 bg-white border-y border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6">
           <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep mb-12 flex items-center">
             <BookOpen className="text-gold mr-6 w-10 h-10" /> 
             Academics & Syllabus
           </h2>
           <div className="grid lg:grid-cols-2 gap-16">
             <p className="text-navy-deep/70 leading-relaxed font-sans text-lg">
                The curriculum is designed in consultation with industry experts to ensure our students are job-ready from day one. It encompasses core engineering principles alongside open electives to foster interdisciplinary learning, critical thinking, and advanced research methodologies.
             </p>
             <div className="space-y-4">
               {['UG Syllabus (Latest Scheme)', 'PG Syllabus (M.Tech)', 'Research & Doctoral Guidelines'].map(link => (
                 <a key={link} href="#" className="flex justify-between items-center p-6 bg-cream border border-navy-deep/5 hover:bg-navy-deep hover:text-white transition-all duration-300 group shadow-sm">
                    <span className="font-sans font-bold text-navy-deep group-hover:text-cream tracking-wide">{link}</span>
                    <ChevronRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                 </a>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* Placements CTA */}
      <section className="py-24 bg-navy-deep text-cream text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('/reference.webp')] bg-cover opacity-5"></div>
           <div className="relative z-10 max-w-2xl mx-auto px-6">
             <Briefcase className="w-16 h-16 text-gold mx-auto mb-8" />
             <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-cream">Unparalleled Placements</h2>
             <p className="text-cream/70 mb-10 text-lg font-sans leading-relaxed">
               Top global conglomerates actively recruit from this department, a testament to our rigorous training and the exceptional quality of our students.
             </p>
             <button className="bg-gold text-navy-deep px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors">
               View Placement Stats
             </button>
           </div>
      </section>

      <Footer />
    </main>
  );
}
