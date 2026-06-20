"use client";

import { useRef, useEffect, useState } from "react";

const ROW1_PHOTOS = [
  "/college photos/admin 2.jpg",
  "/college photos/admin building.jpg",
  "/college photos/aryabhatta 2.jpg",
  "/college photos/aryabhatta+kalam.jpg",
  "/college photos/aryabhatta.jpg",
  "/college photos/bake o mocha.jpg",
  "/college photos/food court.jpg",
  "/college photos/front sign.jpg",
  "/college photos/frontgate night.jpg",
];
const ROW2_PHOTOS = [
  "/college photos/frontgate.jpg",
  "/college photos/gymkhana road.jpg",
  "/college photos/ib.jpg",
  "/college photos/kalaam.jpg",
  "/college photos/lib 2.jpg",
  "/college photos/lib far away.jpg",
  "/college photos/mocha.jpg",
  "/college photos/tut block.jpg",
];

const ALL_PHOTOS = [...ROW1_PHOTOS, ...ROW2_PHOTOS];

function getLabel(photo) {
  return photo
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function ScrollHijackGallery({ photos }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const CARD_WIDTH = 300;
  const GAP = 20;
  // Each photo scrolls ~110px of page height worth of travel
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
  }, []);

  // How far the strip needs to travel: all cards minus one viewport width
  const totalStripWidth = photos.length * (CARD_WIDTH + GAP);
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
  const maxTranslate = Math.max(0, totalStripWidth - viewportWidth * 0.82);
  const translateX = progress * maxTranslate;

  return (
    <div ref={containerRef} style={{ height: containerHeight }} className="relative">
      {/* Sticky fullscreen panel */}
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
            const label = getLabel(photo);
            const isTall = i % 3 !== 1;
            return (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden group"
                style={{
                  width: isTall ? "300px" : "240px",
                  height: isTall ? "500px" : "390px",
                  marginTop: isTall ? "0px" : "56px",
                }}
              >
                <img
                  src={photo}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-white text-[10px] font-semibold tracking-[0.22em] uppercase">
                    {label}
                  </span>
                </div>
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

export default function CampusLifePage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">

      {/* ── TEXT SECTION — normal vertical scroll ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-20 pb-28 sm:pt-28 sm:pb-36">

        <p className="text-xs font-semibold tracking-[0.28em] uppercase text-indigo-500 dark:text-indigo-400 mb-8">
          Campus Life
        </p>

        {/* LN-style statement headline: mix of light-italic + heavy-black words */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white max-w-5xl">
          <span className="font-extralight italic text-slate-400 dark:text-slate-500">Lorem</span>{" "}
          ipsum dolor,{" "}
          <span className="font-black">vivendi for wins</span>, bringing it all
          in all ways.{" "}
          <span className="font-extralight italic text-slate-400 dark:text-slate-500">Defining</span>{" "}
          a{" "}
          <span className="relative inline-block font-black">
            legacy
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-amber-400" />
          </span>{" "}
          in campus on and off the quad.
        </h1>

        <div className="mt-12 h-px w-full bg-slate-100 dark:bg-slate-800" />

        <p className="mt-6 text-sm text-slate-400 dark:text-slate-500 tracking-wide">
          Scroll down to explore the campus ↓
        </p>
      </section>

      {/* ── SCROLL-HIJACK HORIZONTAL GALLERY ── */}
      <ScrollHijackGallery photos={ALL_PHOTOS} />

    </div>
  );
}
