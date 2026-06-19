"use client";
import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavBar({
  items,
  className
}) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const pathname = usePathname()
  const routeTab = items.find((item) => {
    if (item.url === "/") return pathname === "/"
    if (item.url.includes("#")) return false
    return pathname === item.url || pathname.startsWith(`${item.url}/`)
  })?.name
  const currentTab = routeTab ?? activeTab

  return (
    <div
      className={cn(
        "relative z-50",
        className
      )}>
      <div
        className="flex items-center gap-1 rounded-full border border-border bg-background/70 px-1 py-0.5 shadow-sm backdrop-blur-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = currentTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => {
                setActiveTab(item.name);
                if (item.url.includes("#about") && pathname === "/") {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("scrollToAbout"));
                }
              }}
              className={cn(
                "relative cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold transition-colors lg:px-4",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}>
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}>
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div
                      className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div
                      className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
