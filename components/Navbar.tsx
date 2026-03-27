"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    label: "About Us",
    href: "/about",
    links: [
      { label: "About BMSCE", href: "/about" },
      { label: "Governing Body", href: "/about#governing" },
      { label: "Administration", href: "/about#admin" },
      { label: "Life at BMSCE", href: "/campus-life" },
      { label: "Group Institutions", href: "/about#group" },
      { label: "IQAC", href: "/about#iqac" },
      { label: "IIIC", href: "/about#iiic" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    links: [
      { label: "Civil Engineering", href: "/departments/civil" },
      { label: "Computer Science", href: "/departments/cse" },
      { label: "Electronics & Communication", href: "/departments/ece" },
      { label: "Mechanical Engineering", href: "/departments/mech" },
      { label: "AI & Machine Learning", href: "/departments/aiml" },
      { label: "Aerospace Engineering", href: "/departments/aero" },
      { label: "Bio-Technology", href: "/departments/biotech" },
      { label: "All Departments →", href: "/academics" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    links: [
      { label: "Under Graduation", href: "/admissions/ug" },
      { label: "Post Graduation", href: "/admissions/pg" },
      { label: "Ph.D Research", href: "/admissions/phd" },
      { label: "International Admissions", href: "/admissions/intl" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    links: [
      { label: "About R&D", href: "/research" },
      { label: "Research Centers", href: "/research#centers" },
      { label: "Innovative Labs", href: "/research#labs" },
      { label: "Funded Projects", href: "/research#projects" },
      { label: "Journal Publications", href: "/research#publications" },
      { label: "Patents Filed", href: "/research#patents" },
    ],
  },
  {
    label: "Placements",
    href: "/placements",
    links: [
      { label: "About Placements", href: "/placements" },
      { label: "Placement Training", href: "/placements#training" },
      { label: "Achievements", href: "/placements#achievements" },
      { label: "Recruiting Companies", href: "/placements#companies" },
      { label: "Statistics", href: "/placements#stats" },
    ],
  },
  {
    label: "More",
    href: "#",
    links: [
      { label: "Innovation & CIIE", href: "/research#innovation" },
      { label: "Facilities", href: "/campus-life#facilities" },
      { label: "COE Office", href: "/about#coe" },
      { label: "Documents & NAAC", href: "/about#naac" },
      { label: "Student Activities", href: "/campus-life#activities" },
      { label: "Gallery", href: "/campus-life#gallery" },
    ],
  },
];

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ${
        isScrolled
          ? "bg-navy-deep/80 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-10 h-full flex items-center">
        {/* Logo - Left Aligned */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/bmsce_logo.png"
              alt="BMSCE Logo"
              width={56}
              height={56}
              className="bg-cream rounded-full p-[2px] transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Nav - Perfectly Centered */}
        <div className="hidden lg:flex items-center justify-center space-x-10">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative h-16 flex items-center"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center space-x-1 font-sans text-[11px] font-medium text-cream/70 hover:text-cream transition-all duration-500 uppercase tracking-[0.2em]"
              >
                <span>{item.label}</span>
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-500 opacity-40 ${activeDropdown === item.label ? "rotate-180 opacity-100" : ""}`}
                />
              </Link>

              <AnimatePresence>
                {activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-navy-deep/95 backdrop-blur-2xl border border-white/10 py-4 z-50 shadow-2xl"
                  >
                    <div className="space-y-1">
                      {item.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block px-8 py-2.5 text-[10px] font-sans text-cream/50 hover:text-cream hover:bg-white/5 transition-all duration-300"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Action - Right Aligned */}
        <div className="flex-1 hidden lg:flex items-center justify-end space-x-10">
          <button className="text-cream/40 hover:text-gold transition-colors duration-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <Link
            href="/admissions"
            className="border border-white/20 text-cream px-6 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cream hover:text-navy-deep transition-all duration-500 rounded-full"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex-1 flex justify-end">
          <button
            className="text-cream"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden bg-navy-deep border-b border-white/10 overflow-hidden"
          >
            <div className="px-10 py-10 space-y-8">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-4">
                  <Link
                    href={item.href}
                    className="font-sans font-bold text-gold text-xs uppercase tracking-[0.3em]"
                  >
                    {item.label}
                  </Link>
                  <div className="grid grid-cols-1 gap-3">
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[11px] font-sans text-cream/50 hover:text-cream transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                href="/admissions"
                className="block text-center w-full border border-white/20 text-cream rounded-full py-4 font-sans text-[10px] uppercase tracking-[0.2em] font-bold"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
