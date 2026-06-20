"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollExpandMedia({
  mediaSrc = "/assets/admin 2.jpg",
  bgImageSrc = "/assets/hero.mp4",
  children,
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        // Higher sensitivity for scrolling back on mobile
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScrollToAbout = () => {
      setScrollProgress(1);
      setMediaFullyExpanded(true);
      setShowContent(true);
      setTimeout(() => {
        const element = document.getElementById("about");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    };

    window.addEventListener("scrollToAbout", handleScrollToAbout);

    if (window.location.hash === "#about") {
      setTimeout(() => {
        handleScrollToAbout();
      }, 500);
    }

    return () => {
      window.removeEventListener("scrollToAbout", handleScrollToAbout);
    };
  }, []);

  // Popup media grows from 0px to full viewport as user scrolls
  const mediaWidth = scrollProgress * (isMobileState ? 100 : 100); // vw
  const mediaHeight = scrollProgress * 100; // vh
  const borderRadius = Math.max(0, 24 * (1 - scrollProgress));

  // Determine if the background source is a video
  const bgIsVideo = bgImageSrc.toLowerCase().endsWith(".mp4");

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden w-full"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Background — fixed to viewport, fades out as popup expands */}
          <motion.div
            className="absolute inset-0 z-0 w-full overflow-hidden"
            style={{ height: "100dvh" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 - scrollProgress * 0.3 }}
            transition={{ duration: 0.1 }}
          >
            {bgIsVideo ? (
              <video
                src={bgImageSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                disablePictureInPicture
              />
            ) : (
              <img
                src={bgImageSrc}
                alt="Background"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* Central Expanding Popup — hidden at scrollProgress 0, grows on scroll */}
          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              {scrollProgress > 0 && (
                <div
                  className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none overflow-hidden"
                  style={{
                    width: `${mediaWidth}vw`,
                    height: `${mediaHeight}vh`,
                    maxWidth: "100vw",
                    maxHeight: "100dvh",
                    borderRadius: `${borderRadius}px`,
                    boxShadow:
                      scrollProgress < 1
                        ? "0px 0px 50px rgba(0, 0, 0, 0.3)"
                        : "none",
                  }}
                >
                  <div className="relative w-full h-full pointer-events-none">
                    <img
                      src={mediaSrc}
                      alt="Campus"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    {/* Subtle darkening overlay that lightens as scroll progresses */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 rounded-xl"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Fading in children (ScrollPath etc.) below the expanded hero */}
            <motion.section
              className="flex flex-col w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}
