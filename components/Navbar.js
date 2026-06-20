"use client";

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
} from "lucide-react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const announcements = notices.map((notice) => notice.title);

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
          <img src="/logo.png" alt="IIT Patna Logo" className="h-7 w-auto object-contain" />
          <span className="font-black text-lg tracking-tight text-slate-900 dark:text-white">
            Student Affairs
          </span>
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2">
          <NavBar items={dynamicNavItems} />
        </div>

        {/* Theme Toggle — pinned to the far right */}
        <div className="ml-auto flex items-center gap-1 shrink-0 z-10">
          <ThemeToggle />
        </div>
      </div>

      <div className="bg-indigo-50/80 border-t border-b border-indigo-100/50 py-2.5 dark:bg-indigo-950/40 dark:border-indigo-900/40 transition-colors">
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
