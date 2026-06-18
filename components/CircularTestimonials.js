"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const defaultTestimonials = [
  {
    quote: "Unbelievable energy at the inter-university sports finals. The sports infrastructure and support from SAO made it unforgettable.",
    name: "Rohit Deshmukh",
    designation: "Sports Captain, Basketball Team",
    src: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=600",
  },
  {
    quote: "An amazing night celebrating diversity at OneCampus. Over 30 student clubs came together to build this magical stage.",
    name: "Simran Sen",
    designation: "Cultural Committee Coordinator",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600",
  },
  {
    quote: "Creating conversations about mental wellness and resilience. It was a serene afternoon that connected hearts across academic blocks.",
    name: "Dr. Alok Verma",
    designation: "Chief Counseling Advisor, MindSpace",
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
  },
  {
    quote: "Welcoming the freshers into our residential family. The central lawns of Chanakya Hall were lit up with laughter, orientation events, and music.",
    name: "Aakash Mehta",
    designation: "Chanakya Hall Senate Representative",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
  },
];

export default function CircularTestimonials({
  testimonials = defaultTestimonials,
  autoplay = true,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const testimonialsLength = testimonials.length;
  const activeTestimonial = testimonials[activeIndex];

  // Responsive width calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay loop
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, testimonialsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Transform positioning style for active, left, right cards
  function getImageStyle(index) {
    const gap = containerWidth < 640 ? 45 : 70; // gap size based on width
    const offset = (index - activeIndex + testimonialsLength) % testimonialsLength;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 10,
        opacity: 1,
        pointerEvents: "auto",
        transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 5,
        opacity: 0.6,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-20px) scale(0.85) rotateY(15deg)`,
      };
    }
    if (isRight) {
      return {
        zIndex: 5,
        opacity: 0.6,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-20px) scale(0.85) rotateY(-15deg)`,
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transform: "translateX(0px) translateY(0px) scale(0.7) rotateY(0deg)",
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Images 3D container */}
        <div
          className="relative w-full h-[280px] sm:h-[350px] flex items-center justify-center [perspective:1000px]"
          ref={imageContainerRef}
        >
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="absolute w-full h-full max-w-[220px] max-h-[280px] sm:max-w-[260px] sm:max-h-[330px] object-cover rounded-2xl shadow-xl transition-all duration-700 ease-[cubic-bezier(0.4,2,0.3,1)]"
              style={getImageStyle(index)}
            />
          ))}
        </div>

        {/* Testimonial text block */}
        <div className="flex flex-col justify-between text-left h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">
                {activeTestimonial.name}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500 mb-6">
                {activeTestimonial.designation}
              </p>
              
              {/* Quote text using Merriweather font */}
              <p
                className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed italic"
                style={{ fontFamily: "var(--font-merriweather), serif" }}
              >
                “
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(4px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.012 * i }}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
                ”
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer dark:bg-[#3a5ba0] dark:border-[#3a5ba0] dark:text-white dark:hover:bg-[#3a5ba0]/90"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer dark:bg-[#3a5ba0] dark:border-[#3a5ba0] dark:text-white dark:hover:bg-[#3a5ba0]/90"
              aria-label="Next image"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
