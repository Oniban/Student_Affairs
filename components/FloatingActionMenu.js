"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { Plus, Home, Landmark, Compass, Heart, Users, BookOpen, HelpCircle } from "lucide-react";

export default function FloatingActionMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/", icon: <Home size={18} /> },
    { label: "About Us", href: pathname === "/" ? "/#about" : "/about", icon: <Landmark size={18} /> },
    { label: "Campus Life", href: "/campus-life", icon: <Compass size={18} /> },
    { label: "Welfare", href: "/welfare", icon: <Heart size={18} /> },
    { label: "Team & Gallery", href: "/team", icon: <Users size={18} /> },
    { label: "Resources", href: "/resources", icon: <BookOpen size={18} /> },
    { label: "Contact & FAQ", href: "/contact", icon: <HelpCircle size={18} /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = (e, item) => {
    setIsOpen(false);
    if (item.href === "/#about" && pathname === "/") {
      e.preventDefault();
      const event = new CustomEvent("scrollToAbout");
      window.dispatchEvent(event);
    } else {
      router.push(item.href);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden flex flex-col items-end pointer-events-auto">
      {/* Floating Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col items-end gap-2.5 mb-4 pr-1"
          >
            {menuItems.map((item, index) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href);

              return (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`
                    flex items-center gap-2.5 px-4 py-2.5 rounded-xl border shadow-md backdrop-blur-md transition-colors cursor-pointer
                    ${
                      active
                        ? "bg-indigo-600 border-indigo-700 text-white dark:bg-[#3a5ba0] dark:border-[#3a5ba0]/80"
                        : "bg-white/95 border-slate-200 text-slate-800 hover:bg-slate-50 dark:bg-slate-900/95 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
                    }
                  `}
                >
                  <span className="opacity-85">{item.icon}</span>
                  <span className="text-xs font-bold tracking-tight">{item.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
        className="
          w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300
          bg-indigo-600 hover:bg-indigo-700 text-white
          dark:bg-[#3a5ba0] dark:hover:bg-[#3a5ba0]/90 dark:shadow-[#3a5ba0]/20
          hover:scale-105 active:scale-95
        "
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Plus className="w-6 h-6" strokeWidth={2.5} />
        </motion.div>
      </button>
    </div>
  );
}
