"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Landmark, Megaphone, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const announcements = [
    "Annual Merit Scholarship Applications are open until June 30, 2026.",
    "Hostel Room Allocation list for the Fall Semester is now available under Resources.",
    "Mindfulness Circle sessions occur every Wednesday at 4:00 PM in the Counselling Center.",
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Campus Life", href: "/campus-life" },
    { name: "Student Welfare", href: "/welfare" },
    { name: "Team & Gallery", href: "/team" },
    { name: "Resources & Support", href: "/resources" },
    { name: "Contact (FAQ)", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/#about") {
      return false;
    }
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  const handleLinkClick = (e, href) => {
    if (href === "/#about") {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById("about");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/90 transition-colors duration-200">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img src="/logo.png" alt="IIT Patna Logo" className="h-7 w-auto object-contain" />
          <span className="font-black text-lg tracking-tight text-slate-900 dark:text-white">
            Student Affairs
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-semibold transition-colors hover:text-indigo-600 dark:hover:text-amber-500 relative py-1 ${
                isActive(link.href)
                  ? "text-indigo-600 dark:text-amber-500"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-600 dark:bg-amber-500" />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Hamburger Menu Toggle (immediately beside Theme Toggle on its left) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Theme Toggle (on the far right) */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5 text-amber-500" />
            ) : (
              <Moon className="h-5 w-5 text-indigo-600" />
            )}
          </button>
        </div>
      </div>

      {/* Notices Ticker Banner (Below the Main Navbar) */}
      <div className="bg-indigo-50/80 border-t border-b border-indigo-100/50 py-2.5 dark:bg-indigo-950/40 dark:border-indigo-900/40 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-hidden">
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
            href="/resources" 
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 dark:text-amber-500 dark:hover:text-amber-400 shrink-0 flex items-center gap-1 ml-4 transition-colors"
          >
            All Notices <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-slate-100 text-indigo-600 dark:bg-slate-900 dark:text-amber-500"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/50 dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
