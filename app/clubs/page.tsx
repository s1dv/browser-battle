"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import SpotlightCard from "@/components/SpotlightCard";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22" height="22"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const CLUBS = [
  {
    id: "club-1",
    name: "Paramvah",
    description: "Paramvah is a cultural dance club that promotes Indian culture and traditions.",
    images: ["/images/p1.jpg", "/images/p2.webp", "/images/p3.jpg", "/images/p4.webp", "/images/p5.jpg"],
    instagram: "https://instagram.com/paramvah",
  },
  {
    id: "club-2",
    name: "Sports Club",
    description: "Sports Club is a sports club that promotes sports and fitness.",
    images: ["/images/s1.webp", "/images/s2.webp", "/images/s3.webp", "/images/s4.jpg"],
    instagram: "https://instagram.com/sportsbmsce",
  },
  {
    id: "club-3",
    name: "Code IO",
    description: "Code IO is a club that promotes technologies and innovation.",
    images: ["/images/c1.jpg", "/images/c2.jpg"],
    instagram: "https://instagram.com/codeio",
  },
  {
    id: "club-4",
    name: "Fashion",
    description: "Fashion Club is a club that promotes fashion and style.",
    images: ["/images/f1.jpg", "/images/f2.jpg", "/images/f3.jpg"],
    instagram: "https://instagram.com/fashionbmsce",
  },
  {
    id: "club-5",
    name: "Mountaineering",
    description: "Scaling heights and anchoring smiles since 83'BMS College Of Engineering, Bengaluru.",
    images: ["/images/m1.jpg", "/images/m2.jpg", "/images/m3.jpg"],
    instagram: "https://instagram.com/bmsce_mountaineering",
  },
];

export default function ClubIntroPage() {
  const [activeClubIndex, setActiveClubIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const activeClub = CLUBS[activeClubIndex];
  const imagesCount = activeClub.images.length;
  const nextImageIndex = (activeImageIndex + 1) % imagesCount;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % imagesCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeClubIndex, imagesCount]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (isScrolling) return;

      const triggerDelta = 50;

      if (e.deltaY > triggerDelta) {
        if (activeClubIndex < CLUBS.length - 1) {
          setIsScrolling(true);
          setActiveClubIndex((prev) => prev + 1);
          setActiveImageIndex(0);
        }
      } else if (e.deltaY < -triggerDelta) {
        if (activeClubIndex > 0) {
          setIsScrolling(true);
          setActiveClubIndex((prev) => prev - 1);
          setActiveImageIndex(0);
        }
      }

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1200);
    },
    [isScrolling, activeClubIndex]
  );

  return (
    <main
      className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-white/30 font-sans"
      onWheel={handleWheel}
    >
      {/* Top Left BMSCE Glass Header */}
      <header className="absolute top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-4 py-3 px-6 bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transition hover:bg-black/40">
        {/* Logo Container with graceful fallback */}
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-black border border-white/30 overflow-hidden shrink-0">
          <img
            src="/images/logo.svg"
            alt="BMS Logo"
            className="w-full h-full object-cover p-1"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = 'BMS';
            }}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-widest leading-none">BMSCE</span>
          <span className="text-[10px] uppercase tracking-widest text-neutral-300 mt-1 opacity-80">Students</span>
        </div>
      </header>

      {/* Dynamic Background Image with Gaussian Blur and darker mask */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={`bg-${activeClub.id}-${nextImageIndex}`}
          src={activeClub.images[nextImageIndex]}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 bg-black blur-[5px] scale-110"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full p-8 md:px-24 items-center justify-between pt-36 md:pt-8">

        {/* Left Side: 3D Stacked Card Slider */}
        <div className="relative w-full md:w-5/12 h-[45vh] md:h-[65vh] flex items-center justify-center z-20" style={{ perspective: "2000px" }}>
          <AnimatePresence mode="popLayout" initial={false}>
            {CLUBS.map((club, cIndex) => {
              if (cIndex !== activeClubIndex) return null;

              const clubImagesCount = club.images.length;

              return (
                <motion.div
                  key={`club-deck-${club.id}`}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                  initial={{ opacity: 0, y: 150, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -150, scale: 0.9 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AnimatePresence mode="popLayout">
                    {club.images.map((src, i) => {
                      const relativeIndex = (i - activeImageIndex + clubImagesCount) % clubImagesCount;

                      const isTop = relativeIndex === 0;
                      const isBack = relativeIndex === 1;
                      const isWayBack = relativeIndex === 2;
                      const isExit = relativeIndex === clubImagesCount - 1;

                      if (!isTop && !isBack && !isWayBack && !isExit) return null;

                      let animationProps: Record<string, number> = {};
                      if (isTop) {
                        animationProps = { scale: 1, y: 0, x: 0, zIndex: 30, opacity: 1 };
                      } else if (isBack) {
                        animationProps = { scale: 0.92, y: 25, x: 25, zIndex: 20, opacity: 0.8 };
                      } else if (isWayBack) {
                        animationProps = { scale: 0.84, y: 50, x: 50, zIndex: 10, opacity: 0.5 };
                      } else if (isExit) {
                        animationProps = { scale: 1.15, y: -150, x: -150, zIndex: 40, opacity: 0 };
                      }

                      return (
                        <motion.div
                          key={`card-${club.id}-${i}`}
                          className="absolute w-full h-full max-w-[320px] md:max-w-[420px] max-h-[460px] md:max-h-[580px] rounded-[2rem] overflow-hidden border border-white/10 origin-bottom-right"
                          initial={isExit ? animationProps : { ...animationProps, opacity: 0, y: 100 }}
                          animate={{ ...animationProps, rotateZ: isTop ? 0 : isBack ? 3 : isWayBack ? 6 : -15 }}
                          exit={{ opacity: 0, y: -150, scale: 1.15, x: -150, rotateZ: -15 }}
                          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                        >
                          <img
                            src={src}
                            alt={`${club.name} image ${i + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10 pointer-events-none" />
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Side: Text Information in Spotlight/Glassmorphism Card */}
        <div className="relative w-full md:w-6/12 flex flex-col justify-center h-[50vh] md:h-full z-10 md:pl-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`club-text-${activeClubIndex}`}
              className="w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* SpotlightCard with glassmorphic styling */}
              <SpotlightCard className="p-8 md:p-14 rounded-[2rem] border border-white/20 bg-white/5 shadow-2xl backdrop-blur-xl" spotlightColor="rgba(255, 255, 255, 0.15)">

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-100 to-neutral-400">
                  {activeClub.name}
                </h1>

                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-10 border-l-2 border-white/30 pl-6 max-w-lg">
                  {activeClub.description}
                </p>

                <div className="flex gap-4 items-center">
                  <a href={activeClub.instagram} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                      <InstagramIcon />
                      <span>Instagram</span>
                    </button>
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
