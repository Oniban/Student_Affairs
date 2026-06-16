"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Landmark, Compass, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

const nodes = [
  {
    id: 1,
    title: "About Student Affairs Office",
    desc: "The primary bridge between the student body and university administration, promoting student success and extra-curricular personal growth.",
    color: "from-orange-500 to-amber-500",
    badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-950/40 dark:text-orange-400",
    href: "/about",
    icon: Landmark,
    imageLabel: "Student Affairs Office",
  },
  {
    id: 2,
    title: "Vision and Mission",
    desc: "Empowering students by supplying reliable health support, comfortable residential housing, and diverse extra-curricular engagement channels.",
    color: "from-blue-500 to-indigo-500",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-400",
    href: "/about#vision",
    icon: Compass,
    imageLabel: "Vision & Mission Core",
  },
  {
    id: 3,
    title: "Key Responsibilities",
    desc: "Managing hostel administration, psychological support services, student club charters, financial aid auditing, and grievance redressal.",
    color: "from-pink-500 to-rose-500",
    badgeColor: "bg-pink-100 text-pink-800 dark:bg-pink-950/40 dark:text-pink-400",
    href: "/about#responsibilities",
    icon: CheckCircle2,
    imageLabel: "Core Responsibilities",
  },
  {
    id: 4,
    title: "Major Initiatives",
    desc: "Leading transformative programs in mental health (MindSpace), diversity (OneCampus), leadership (LeadNext), and green campaigns.",
    color: "from-emerald-500 to-teal-500",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400",
    href: "/initiatives",
    icon: Sparkles,
    imageLabel: "Office Campaigns & Initiatives",
  },
];

// Reusable Node Card Component for clean code reuse
function NodeCard({ node, isHighlighted }) {
  const Icon = node.icon;
  return (
    <div
      className={`group block text-left p-6 rounded-2xl border transition-all duration-300 ${
        isHighlighted
          ? "bg-white border-slate-200 shadow-md translate-y-[-4px] dark:bg-slate-900 dark:border-slate-800"
          : "bg-white/40 border-slate-100 dark:bg-slate-950/20 dark:border-slate-900/50 opacity-90"
      }`}
    >
      {/* Colored Image Block Placeholder */}
      <div className={`w-full h-40 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center mb-4 relative overflow-hidden`}>
        <Icon className="h-12 w-12 text-white/95 drop-shadow-sm" />
        <span className="absolute bottom-2 right-3 text-[10px] font-black uppercase tracking-wider text-white/80">
          {node.imageLabel}
        </span>
      </div>
      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold ${node.badgeColor} mb-2.5`}>
        Step {node.id}
      </span>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-amber-500 transition-colors">
        {node.title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
        {node.desc}
      </p>
      <span className="inline-flex items-center text-xs font-extrabold text-indigo-600 dark:text-amber-500 group-hover:underline">
        Read More <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  );
}

export default function ScrollPath() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNode, setActiveNode] = useState(1);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start drawing when the section is near the middle of the viewport
      const startPoint = windowHeight * 0.75;
      const scrolled = startPoint - rect.top;
      const totalHeight = rect.height;

      let percentage = scrolled / (totalHeight - windowHeight * 0.2);
      percentage = Math.max(0, Math.min(1, percentage));
      setScrollProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px", // triggers when node is centered in viewport
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.getAttribute("data-node-id"), 10);
          setActiveNode(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll("[data-node-id]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/30 transition-colors overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950/40 dark:text-amber-500 mb-4 uppercase tracking-wider">
            About Section
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Navigating Student Affairs
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Scroll down or hover over the nodes along the pathway to explore our office structure, vision, primary administrative responsibilities, and welfare initiatives.
          </p>
        </div>

        {/* Path and Nodes Container */}
        <div ref={containerRef} className="relative mt-16 max-w-5xl mx-auto">
          
          {/* Vertical Vector Path Line */}
          {/* Gray Track */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-slate-200 dark:bg-slate-800 rounded-full" />
          
          {/* Active Growing Path */}
          <div
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-4 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-amber-500 rounded-full transition-all duration-300 ease-out origin-top"
            style={{
              height: `${scrollProgress * 100}%`,
              maxHeight: "calc(100% - 32px)",
            }}
          />

          {/* Nodes List */}
          <div className="space-y-24 md:space-y-36 relative z-10">
            {nodes.map((node, index) => {
              const isEven = index % 2 === 0;
              const isNodeActive = activeNode === node.id;
              const isNodeHovered = hoveredNode === node.id;
              const isHighlighted = isNodeActive || isNodeHovered;

              return (
                <div
                  key={node.id}
                  data-node-id={node.id}
                  className="relative"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-0">
                    
                    {/* Left Column (Desktop only, displays card if index is even/0 or 2) */}
                    <div className="hidden md:block w-full text-right pr-12 md:order-1">
                      {isEven ? (
                        <Link href={node.href}>
                          <NodeCard node={node} isHighlighted={isHighlighted} />
                        </Link>
                      ) : (
                        <div className="h-40 w-full" /> /* Empty spacer to push timeline opposite side */
                      )}
                    </div>

                    {/* Center Column: Circle & line connector (Visible on both mobile & desktop) */}
                    <div className="flex items-center justify-center z-10 md:order-2 shrink-0">
                      <Link
                        href={node.href}
                        className={`h-8 w-8 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                          isHighlighted
                            ? "bg-indigo-600 border-white scale-125 shadow-md ring-4 ring-indigo-500/20 dark:bg-amber-500 dark:border-slate-900 dark:ring-amber-500/20"
                            : "bg-slate-200 border-white dark:bg-slate-800 dark:border-slate-950"
                        }`}
                        aria-label={`Go to ${node.title}`}
                      >
                        <div
                          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                            isHighlighted ? "bg-white dark:bg-slate-900" : "bg-slate-400 dark:bg-slate-600"
                          }`}
                        />
                      </Link>
                    </div>

                    {/* Right Column (On desktop: even gets spacer, odd gets card. On mobile: always gets card) */}
                    <div className="w-full pl-0 md:pl-12 md:order-3">
                      {/* Mobile view card (always visible below md breakpoint) */}
                      <div className="md:hidden block">
                        <Link href={node.href}>
                          <NodeCard node={node} isHighlighted={isHighlighted} />
                        </Link>
                      </div>
                      
                      {/* Desktop view card (only visible if index is odd/1 or 3) */}
                      <div className="hidden md:block">
                        {!isEven ? (
                          <Link href={node.href}>
                            <NodeCard node={node} isHighlighted={isHighlighted} />
                          </Link>
                        ) : (
                          <div className="h-40 w-full" /> /* Empty spacer to push timeline opposite side */
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
