"use client";

import { useRef, useEffect, useState } from "react";

const ALL_PHOTOS = [
  "/gallery/admin 2.jpg",
  "/gallery/admin building.jpg",
  "/gallery/aryabhatta 2.jpg",
  "/gallery/aryabhatta+kalam.jpg",
  "/gallery/aryabhatta.jpg",
  "/gallery/bake o mocha.jpg",
  "/gallery/food court.jpg",
  "/gallery/front sign.jpg",
  "/gallery/frontgate night.jpg",
  "/gallery/frontgate.jpg",
  "/gallery/gymkhana road.jpg",
  "/gallery/ib.jpg",
  "/gallery/kalaam.jpg",
  "/gallery/lib 2.jpg",
  "/gallery/lib far away.jpg",
  "/gallery/mocha.jpg",
  "/gallery/tut block.jpg",
];

const CAMPUS_SECTIONS = [
  {
    title: "Vibrant Student Hostels",
    subtitle: "A Second Home",
    description:
      "Our residential hostels offer more than just a place to sleep. They are hubs of friendship, collaboration, and community. With modern amenities, common rooms, recreation areas, and dining facilities, students experience a comfortable and enriching campus life.",
    image: "/gallery/kalaam.jpg",
  },
  {
    title: "Clubs & Creative Societies",
    subtitle: "Pursue Your Passion",
    description:
      "From technical innovations in robotics and coding to cultural expressions in music, drama, and dance, our diverse range of student-run clubs offers something for everyone. Gymkhana councils guide and support these activities, helping students develop leadership skills and lifelong bonds.",
    image: "/gallery/bake o mocha.jpg",
  },
  {
    title: "Sports & Fitness Infrastructure",
    subtitle: "Active & Healthy Campus",
    description:
      "Physical wellness is a cornerstone of student development. Our campus boasts state-of-the-art sports facilities, including tennis courts, football fields, indoor gyms, and running tracks. Annual events bring out competitive spirits and foster teamwork and sportsmanship.",
    image: "/gallery/gymkhana road.jpg",
  },
  {
    title: "Hangouts & Social Hubs",
    subtitle: "Unwind & Connect",
    description:
      "Popular spots like Bake O Mocha, the central food court, and library lawns provide the perfect spaces for casual discussions, study groups, or simply relaxing after classes. These spots are the beating heart of daily student interaction, creating a warm, collaborative campus atmosphere.",
    image: "/gallery/mocha.jpg",
  },
];

/* ─────────────────────────────────────────────────────────────
   MOBILE: Native horizontal swipe strip
───────────────────────────────────────────────────────────── */
function MobileGallery({ photos }) {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const index = Math.round(el.scrollLeft / (el.clientWidth * 0.78 + 16));
      setCurrent(Math.min(index, photos.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [photos.length]);

  return (
    <div className="relative w-full bg-white dark:bg-slate-950 py-6">
      {/* Progress bar */}
      <div className="h-[2px] bg-slate-100 dark:bg-slate-800 mb-4 mx-4 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-amber-400 rounded-full transition-all duration-300"
          style={{ width: `${((current + 1) / photos.length) * 100}%` }}
        />
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-md"
            style={{ width: "78vw", height: "52vw", maxWidth: "340px", maxHeight: "240px" }}
          >
            <img
              src={photo}
              alt={`Campus photo ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Counter */}
      <div className="text-center text-xs font-mono tracking-widest text-slate-400 dark:text-slate-600 mt-2">
        {String(current + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DESKTOP: Scroll-hijack horizontal gallery
───────────────────────────────────────────────────────────── */
function DesktopScrollGallery({ photos }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const CARD_WIDTH = 300;
  const GAP = 20;
  const SCROLL_PER_CARD = 110;
  const containerHeight = `${photos.length * SCROLL_PER_CARD + 100}vh`;

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollable = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.min(Math.max(scrolled / scrollable, 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [photos.length]);

  const totalStripWidth = photos.length * (CARD_WIDTH + GAP);
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
  const maxTranslate = Math.max(0, totalStripWidth - viewportWidth * 0.82);
  const translateX = progress * maxTranslate;

  return (
    <div ref={containerRef} style={{ height: containerHeight }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-white dark:bg-slate-950">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-100 dark:bg-slate-800 z-20">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-amber-400"
            style={{ width: `${progress * 100}%`, transition: "width 0.05s linear" }}
          />
        </div>

        {/* Scroll hint */}
        <p
          className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-slate-300 dark:text-slate-600 pointer-events-none transition-opacity duration-500"
          style={{ opacity: progress < 0.04 ? 1 : 0 }}
        >
          Scroll to explore
        </p>

        {/* Moving photo strip */}
        <div
          className="flex items-center gap-5 pl-[10vw] will-change-transform"
          style={{ transform: `translateX(-${translateX}px)`, transition: "transform 0.08s linear" }}
        >
          {photos.map((photo, i) => {
            const isTall = i % 3 !== 1;
            return (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden group shadow-md"
                style={{
                  width: isTall ? "300px" : "240px",
                  height: isTall ? "500px" : "390px",
                  marginTop: isTall ? "0px" : "56px",
                }}
              >
                <img
                  src={photo}
                  alt={`Campus Life Image ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

        {/* Counter */}
        <div className="absolute bottom-7 right-8 text-slate-300 dark:text-slate-600 text-xs font-mono tracking-widest select-none">
          {String(Math.min(Math.round(progress * (photos.length - 1)) + 1, photos.length)).padStart(2, "0")}
          {" / "}
          {String(photos.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function CampusLifePage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-20 pb-16 sm:pt-28 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white">
          Campus Life
        </h1>
        <div className="mt-8 h-px w-full bg-slate-100 dark:bg-slate-800" />
      </section>

      {/* Alternating Cards */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-12 space-y-24 md:space-y-36">
        {CAMPUS_SECTIONS.map((section, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Text */}
              <div className={`space-y-4 order-1 ${isEven ? "md:order-1" : "md:order-2"}`}>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">
                  {section.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {section.title}
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Image */}
              <div
                className={`order-2 ${isEven ? "md:order-2" : "md:order-1"} relative h-64 sm:h-80 md:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl group border border-slate-100 dark:border-slate-800`}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          );
        })}
      </section>

      {/* Gallery header */}


      {/* ── MOBILE: native horizontal swipe ── */}
      <div className="md:hidden">
        <MobileGallery photos={ALL_PHOTOS} />
      </div>

      {/* ── DESKTOP: scroll-hijack horizontal gallery ── */}
      <div className="hidden md:block">
        <DesktopScrollGallery photos={ALL_PHOTOS} />
      </div>
    </div>
  );
}
