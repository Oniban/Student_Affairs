"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Aryabhatta Hall of Residence",
    desc: "Featuring state-of-the-art study rooms, indoor games, and lush green central lawns.",
    color: "from-orange-600 to-amber-500",
    badge: "Hostel Block A",
  },
  {
    id: 2,
    title: "Ashutosh Mukherjee Hall of Residence",
    desc: "Home to a modern library, vibrant dining halls, and collaborative workspace zones.",
    color: "from-rose-600 to-red-500",
    badge: "Hostel Block B",
  },
  {
    id: 3,
    title: "Chanakya Hall of Residence",
    desc: "A premium student residence with advanced gym facilities and recreational lounges.",
    color: "from-blue-600 to-indigo-500",
    badge: "Hostel Block C",
  },
];

export default function HostelCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3500); // auto-next every 3.5 seconds
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full h-[32rem] sm:h-[36rem] overflow-hidden bg-slate-900 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {/* Premium Gradient Background Panel */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${slide.color} opacity-90 dark:opacity-85`} />
              
              {/* Diagonal geometric decorative element */}
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
              
              {/* Slide Content */}
              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                  <Home className="h-3.5 w-3.5" />
                  {slide.badge}
                </span>
                
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight drop-shadow-sm">
                  {slide.title}
                </h2>
                
                <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-xs">
                  {slide.desc}
                </p>
                
                <div className="pt-2">
                  <span className="inline-flex items-center rounded-md bg-white text-slate-900 dark:bg-slate-900 dark:text-white px-5 py-2.5 text-xs font-bold shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-transparent dark:border-slate-800">
                    Explore Accommodation Details
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/35 text-white backdrop-blur-xs hover:bg-white/20 hover:scale-105 transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Previous Hostel Slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/35 text-white backdrop-blur-xs hover:bg-white/20 hover:scale-105 transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Next Hostel Slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === current
                ? "w-8 bg-white"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
