"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  HelpCircle,
  Home,
  Landmark,
  Megaphone,
  Users,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { notices } from "@/lib/notices";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About Us", url: "/#about", icon: Landmark },
  { name: "Campus Life", url: "/campus-life", icon: Compass },
  { name: "Team & Gallery", url: "/team", icon: Users },
  { name: "Resources", url: "/resources", icon: BookOpen },
  { name: "Contact & FAQ", url: "/contact", icon: HelpCircle },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const announcements = notices.map((notice) => notice.title);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dynamicNavItems = navItems.map((item) => {
    if (item.name === "About Us") {
      return {
        ...item,
        url: pathname === "/" ? "/#about" : "/about",
      };
    }
    return item;
  });

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/90 transition-colors duration-200">
      {/* Main Navbar Header */}
      <div className="relative w-full flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo — pinned to the far left */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 z-10">
          <img src="/assets/logo.png" alt="IIT Patna Logo" className="h-7 w-auto object-contain" />
          <span className="font-black text-lg tracking-tight text-slate-900 dark:text-white">
            Student Affairs
          </span>
        </Link>

        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <NavBar items={dynamicNavItems} />
        </div>

        {/* Theme Toggle & Hamburger Menu Button — pinned to the far right */}
        <div className="ml-auto flex items-center gap-3 shrink-0 z-10">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            className="flex md:hidden items-center justify-center h-9 w-9 rounded-lg border border-slate-200 bg-white/80 hover:bg-slate-50 hover:text-indigo-600 text-slate-700 transition-colors dark:border-slate-800 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:hover:text-amber-500 dark:text-slate-300 cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Side Drawer for Mobile — rendered via portal so the header's
          backdrop-blur (backdrop-filter) doesn't become a containing block
          for this fixed-position overlay and clip it to the header's height */}
      {mounted && createPortal(
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 right-0 bottom-0 w-72 max-w-xs p-6 shadow-2xl flex flex-col border-l z-10 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800"
            >
              {/* Close Button at top-right */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 hover:bg-slate-50 hover:text-indigo-600 text-slate-700 transition-colors dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 dark:hover:text-amber-500 dark:text-slate-300 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Centered Navigation Links */}
              <div className="flex-grow flex flex-col items-center justify-center">
                {/* Logo / Brand above links */}
                <div className="flex flex-col items-center gap-2 mb-8">
                  <img src="/assets/logo.png" alt="IIT Patna Logo" className="h-10 w-auto object-contain" />
                  <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white">
                    Student Affairs
                  </span>
                </div>

                <nav className="w-full flex flex-col items-center justify-center space-y-4">
                  {dynamicNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));
                    return (
                      <Link
                        key={item.name}
                        href={item.url}
                        onClick={(e) => {
                          setIsOpen(false);
                          if (item.url.includes("#about") && pathname === "/") {
                            e.preventDefault();
                            window.dispatchEvent(new CustomEvent("scrollToAbout"));
                          }
                        }}
                        className={`w-full max-w-[200px] flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-indigo-50 text-indigo-600 dark:bg-amber-950/20 dark:text-amber-500"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/60 dark:hover:text-white"
                        }`}
                      >
                        <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? "text-indigo-600 dark:text-amber-500" : "text-slate-400 dark:text-slate-500"}`} />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Footer of the Drawer */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-900 text-center text-xs text-slate-400 dark:text-slate-500">
                <p>Office of Student Affairs</p>
                <p className="mt-1 font-semibold">IIT Patna</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
      )}

      {/* Notices Ticker Bar */}
      <div className="bg-indigo-50/80 border-t border-b border-indigo-100/50 py-3.5 dark:bg-indigo-950/40 dark:border-indigo-900/40 transition-colors">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-hidden">
          <div className="flex items-center gap-2 overflow-hidden flex-grow mr-4">
            {/* MegaPhone Icon & Notice text background overlay wrapper */}
            <div className="flex items-center gap-1.5 shrink-0 bg-indigo-50/95 dark:bg-slate-950/95 z-10 pr-2 transition-colors">
              <Megaphone className="h-4.5 w-4.5 text-indigo-600 dark:text-amber-500 shrink-0" />
              <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider shrink-0">
                Notice:
              </span>
            </div>

            {/* Isolated sliding marquee track */}
            <div className="relative overflow-hidden w-full py-0.5">
              <div className="flex animate-marquee gap-12 text-xs text-indigo-900 dark:text-indigo-200">
                <div className="flex gap-12 whitespace-nowrap shrink-0">
                  {announcements.map((ann, i) => (
                    <span key={i} className="inline-block font-semibold">
                      • {ann}
                    </span>
                  ))}
                </div>
                {/* Duplicate block for seamless infinite scrolling loop */}
                <div className="flex gap-12 whitespace-nowrap shrink-0" aria-hidden="true">
                  {announcements.map((ann, i) => (
                    <span key={`dup-${i}`} className="inline-block font-semibold">
                      • {ann}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/notices"
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 dark:text-amber-500 dark:hover:text-amber-400 shrink-0 flex items-center gap-1 ml-4 transition-colors"
          >
            All Notices <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </header>
  );
}