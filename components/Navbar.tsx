"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    label: "Discover Us",
    href: "/about",
    links: [
      { label: "About BMSCE", href: "/about" },
      { label: "Governing Body", href: "/about#governing" },
      { label: "Administration", href: "/about#admin" }
    ]
  },
  {
    label: "Explore Courses",
    href: "/academics",
    links: [
      { label: "Civil Engineering", href: "/departments/civil" },
      { label: "Computer Science", href: "/departments/cse" },
      { label: "Electronics & Comm.", href: "/departments/ece" },
      { label: "Mechanical Engineering", href: "/departments/mech" },
      { label: "All Departments →", href: "/academics" }
    ]
  },
  {
    label: "Join Now",
    href: "/admissions",
    links: [
      { label: "Under Graduation", href: "/admissions/ug" },
      { label: "Post Graduation", href: "/admissions/pg" },
      { label: "Ph.D Research", href: "/admissions/phd" },
      { label: "International", href: "/admissions/intl" }
    ]
  },
  {
    label: "Experience Life",
    href: "/campus-life",
    links: [
      { label: "Campus Facilities", href: "/campus-life#facilities" },
      { label: "Student Activities", href: "/campus-life#activities" }
    ]
  },
  {
    label: "More",
    href: "#",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Virtual Tour", href: "/virtual-tour" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-navy-deep/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-full flex items-center">
        {/* Logo - Left Aligned */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-3 group relative">
            <div className="absolute inset-0 bg-white/40 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Image
              src="/bmsce_logo.png"
              alt="BMSCE Logo"
              width={64}
              height={64}
              className="relative p-[2px] transition-transform duration-500 group-hover:scale-105 drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Desktop Nav - Perfectly Centered */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center justify-center space-x-8"
        >
          {navItems.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.label}
              className="relative h-[80px] flex items-center group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center space-x-1 font-sans text-[11px] font-bold text-navy-deep uppercase tracking-[0.15em] relative py-2"
              >
                <span>{item.label}</span>
                {item.links && (
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-500 text-gold ${activeDropdown === item.label ? "rotate-180" : ""}`}
                  />
                )}
                {/* Hover Underline Animation */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>

              {item.links && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] as const }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/90 backdrop-blur-2xl border border-navy-deep/5 py-4 z-50 shadow-2xl rounded-2xl overflow-hidden"
                    >
                      <div className="space-y-1">
                        {item.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="block px-8 py-3 text-[11px] font-sans font-bold text-navy-deep/70 hover:text-navy-deep hover:bg-navy-deep/5 transition-all duration-300"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
          

        </motion.div>

        {/* Right Action - Right Aligned */}
        <div className="flex-1 hidden lg:flex items-center justify-end space-x-6">
          <Link href="/apply">
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-navy-deep text-white px-8 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg hover:shadow-navy-deep/20 transition-all duration-300 group"
            >
              <span className="relative z-10 group-hover:text-gold transition-colors duration-300">Apply Now</span>
              {/* Ripple effect trick using absolute scale */}
              <div className="absolute inset-0 bg-white/10 origin-center scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full blur-md"></div>
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex-1 flex justify-end">
          <button
            className="text-navy-deep p-2 bg-white/50 backdrop-blur-md rounded-full shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-navy-deep/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-3">
                  <Link
                    href={item.href}
                    className="font-sans font-black text-navy-deep text-[11px] uppercase tracking-[0.2em]"
                  >
                    {item.label}
                  </Link>
                  <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-gold/30">
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[12px] font-sans font-medium text-navy-deep/60 hover:text-navy-deep transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                href="/apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full bg-navy-deep text-white rounded-full py-4 font-sans text-[11px] uppercase tracking-[0.2em] font-bold shadow-lg mt-6"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
