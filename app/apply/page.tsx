'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ApplyPage() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F4F6F9] selection:bg-gold selection:text-navy-deep font-sans">
      <Navbar />

      <section className="pt-32 pb-24 max-w-[1000px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-black text-navy-deep mb-6 tracking-tight">Management <span className="text-gold italic">Admissions</span></h1>
          <p className="text-navy-deep/70 max-w-2xl mx-auto leading-relaxed text-lg">
            Apply now for admission under the Management Quota for the academic year 2026-27. Please fill out the form entirely and our admissions office will contact you.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 text-center max-w-lg mx-auto shadow-xl border border-navy-deep/5"
          >
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-black text-navy-deep mb-4">Application Submitted!</h2>
            <p className="text-navy-deep/70 mb-8 leading-relaxed">
              Thank you for applying to BMSCE. Your application details have been safely received. Our admissions team will get in touch with you shortly on your registered email.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-navy-deep text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors"
            >
              Submit Another Application
            </button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-navy-deep/5 max-w-3xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy-deep/70 uppercase tracking-widest">Full Name</label>
                  <input required type="text" className="w-full bg-[#F4F6F9] border-none rounded-xl px-5 py-4 text-navy-deep focus:ring-2 focus:ring-gold transition-shadow outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy-deep/70 uppercase tracking-widest">Email Address</label>
                  <input required type="email" className="w-full bg-[#F4F6F9] border-none rounded-xl px-5 py-4 text-navy-deep focus:ring-2 focus:ring-gold transition-shadow outline-none" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy-deep/70 uppercase tracking-widest">Phone Number</label>
                  <input required type="tel" className="w-full bg-[#F4F6F9] border-none rounded-xl px-5 py-4 text-navy-deep focus:ring-2 focus:ring-gold transition-shadow outline-none" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy-deep/70 uppercase tracking-widest">Program Applying For</label>
                  <select required className="w-full bg-[#F4F6F9] border-none rounded-xl px-5 py-4 text-navy-deep focus:ring-2 focus:ring-gold transition-shadow outline-none appearance-none">
                    <option value="">Select a Program</option>
                    <option value="ug">Undergraduate (B.E.)</option>
                    <option value="pg">Postgraduate (M.Tech/MBA/MCA)</option>
                    <option value="phd">Ph.D Research</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-deep/70 uppercase tracking-widest">Department Preference</label>
                <input required type="text" className="w-full bg-[#F4F6F9] border-none rounded-xl px-5 py-4 text-navy-deep focus:ring-2 focus:ring-gold transition-shadow outline-none" placeholder="e.g. Computer Science, Mechanical..." />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-deep/70 uppercase tracking-widest">Academic Details / Remarks</label>
                <textarea rows={4} className="w-full bg-[#F4F6F9] border-none rounded-xl px-5 py-4 text-navy-deep focus:ring-2 focus:ring-gold transition-shadow outline-none resize-none" placeholder="Mention your previous qualifying marks (e.g. 12th board percentage) and any other details..." />
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-navy-deep text-white p-5 rounded-xl font-bold uppercase tracking-widest hover:bg-gold transition-colors flex items-center justify-center space-x-3 group">
                  <span>Submit Application</span>
                  <Send size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </section>

      <Footer />
    </main>
  );
}
