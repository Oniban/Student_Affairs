"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sun, Moon, Menu, X, Landmark } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Welfare", href: "/welfare" },
    { name: "Campus Life", href: "/campus-life" },
    { name: "Initiatives", href: "/initiatives" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80 transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Landmark className="h-6 w-6 text-indigo-600 dark:text-amber-500 transition-colors" />
          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
            Student<span className="text-indigo-600 dark:text-amber-500 font-semibold">Affairs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-amber-500 relative py-1 ${
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
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Emergency Quick Action Button (Desktop) */}
          <Link
            href="/contact#emergency"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-red-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Emergency Helplines
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean, Minimalist Overlay) */}
      {isOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-slate-100 text-indigo-600 dark:bg-slate-900 dark:text-amber-500"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/50 dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact#emergency"
              onClick={() => setIsOpen(false)}
              className="flex items-center rounded-md px-3 py-2 text-sm font-bold text-red-600 bg-red-50 dark:bg-red-950/20 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors"
            >
              Emergency Contacts
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
