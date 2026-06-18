"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Landmark, Compass, Heart, Users, BookOpen, HelpCircle } from "lucide-react";

export default function MinimalistDock() {
  const pathname = usePathname();
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState(null);

  const dockItems = [
    { id: "home", icon: <Home size={16} />, label: "Home", href: "/" },
    { id: "about", icon: <Landmark size={16} />, label: "About Us", href: "/#about" },
    { id: "campus-life", icon: <Compass size={16} />, label: "Campus Life", href: "/campus-life" },
    { id: "welfare", icon: <Heart size={16} />, label: "Welfare", href: "/welfare" },
    { id: "team", icon: <Users size={16} />, label: "Team & Gallery", href: "/team" },
    { id: "resources", icon: <BookOpen size={16} />, label: "Resources", href: "/resources" },
    { id: "contact", icon: <HelpCircle size={16} />, label: "Contact & FAQ", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href === "/#about") return false;
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  const handleLinkClick = (e, item) => {
    if (item.href === "/#about") {
      if (pathname === "/") {
        e.preventDefault();
        const event = new CustomEvent("scrollToAbout");
        window.dispatchEvent(event);
      } else {
        router.push("/#about");
      }
    }
  };

  return (
    <div className="hidden lg:flex items-center select-none pointer-events-auto">
      {/* Dock Container */}
      <div
        className="
          flex items-center gap-1.5 px-3 py-1.5
          rounded-xl
          bg-slate-100/60 backdrop-blur-md
          border border-slate-200/50
          dark:bg-slate-900/60 dark:border-slate-800/80
          transition-all duration-300 ease-out
        "
      >
        {dockItems.map((item) => {
          const isHovered = hoveredItem === item.id;
          const active = isActive(item.href);

          return (
            <div
              key={item.id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.href}
                onClick={(e) => handleLinkClick(e, item)}
                className={`
                  relative flex items-center justify-center
                  h-8 rounded-lg
                  transition-all duration-300 ease-out
                  cursor-pointer
                  ${
                    active
                      ? "bg-indigo-600 text-white dark:bg-[#3a5ba0] dark:text-white"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60"
                  }
                  ${isHovered ? "w-auto px-3 gap-1.5" : "w-8"}
                `}
                style={{
                  transitionProperty: "width, padding, background-color, color",
                }}
              >
                <span className="shrink-0">{item.icon}</span>

                <AnimatePresence initial={false}>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-xs font-bold whitespace-nowrap overflow-hidden tracking-tight"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
