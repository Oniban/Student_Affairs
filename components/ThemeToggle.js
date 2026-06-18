"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`w-16 h-8 rounded-full bg-slate-200 dark:bg-slate-800 ${className || ""}`} />;
  }

  const isDark = theme === "dark";

  return (
    <div
      className={`flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 ${
        isDark
          ? "bg-slate-900 border border-slate-800"
          : "bg-white border border-slate-200"
      } ${className || ""}`}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-label="Toggle dark mode"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleTheme();
        }
      }}
    >
      <div className="flex justify-between items-center w-full relative">
        {/* Left Side: Dark Mode Icon */}
        <div
          className={`flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 z-10 ${
            isDark
              ? "transform translate-x-0 bg-slate-800"
              : "transform translate-x-8 bg-slate-200"
          }`}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
          ) : (
            <Sun className="w-3.5 h-3.5 text-slate-700" strokeWidth={2} />
          )}
        </div>
        
        {/* Right Side: Light Mode Icon */}
        <div
          className={`flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 z-10 ${
            isDark ? "bg-transparent" : "transform -translate-x-8"
          }`}
        >
          {isDark ? (
            <Sun className="w-3.5 h-3.5 text-slate-400" strokeWidth={2} />
          ) : (
            <Moon className="w-3.5 h-3.5 text-slate-900" strokeWidth={2} />
          )}
        </div>
      </div>
    </div>
  );
}
