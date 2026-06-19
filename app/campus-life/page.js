"use client";

import Link from "next/link";
import { Sparkles, Trophy, Cpu, Users, Utensils, Dumbbell, ArrowRight } from "lucide-react";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";

const campusNodes = [
  {
    id: 1,
    title: "Anwesha",
    subtitle: "Annual Cultural Festival",
    desc: "IIT Patna's annual cultural extravaganza. Anwesha features national-level competitions in music, dance, fashion, arts, and dramatics, hosting star nights and celebrating youth talent.",
    href: "#anwesha",
    icon: Sparkles,
    imageLabel: "Anwesha Fest Image",
  },
  {
    id: 2,
    title: "Infinito",
    subtitle: "Annual Sports Festival",
    desc: "The premier inter-collegiate sports meet of IIT Patna. Infinito brings together top athletes from colleges across the region to compete in football, basketball, cricket, athletics, and chess.",
    href: "#infinito",
    icon: Trophy,
    imageLabel: "Infinito Sports Fest Image",
  },
  {
    id: 3,
    title: "Celesta",
    subtitle: "Annual Techno-Management Fest",
    desc: "The technical and management festival showcasing cutting-edge tech innovations. Celesta hosts coding hackathons, robotics arenas, business pitches, and technical keynotes from industry experts.",
    href: "#celesta",
    icon: Cpu,
    imageLabel: "Celesta Tech Fest Image",
  },
  {
    id: 4,
    title: "Clubs & Societies",
    subtitle: "Student-Run Activities",
    desc: "Active communities bridging technology, literature, arts, sports, and social service. Find your community and participate in weekly workshops, competitions, and collaborative projects.",
    href: "/campus-life/clubs",
    icon: Users,
    imageLabel: "Clubs & Societies Directory",
  },
  {
    id: 5,
    title: "Campus Restaurants",
    subtitle: "Bake O Mocha & Angeethi",
    desc: "Our campus culinary hubs. Bake O Mocha serves freshly baked snacks, pastries, coffees, and light treats. Angeethi provides students with hearty, authentic Indian, Chinese, and regional food plates.",
    href: "#restaurants",
    icon: Utensils,
    imageLabel: "Campus Dining Facilities",
  },
  {
    id: 6,
    title: "Gymkhana",
    subtitle: "Students' Gymkhana",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    href: "#gymkhana",
    icon: Dumbbell,
    imageLabel: "Students Gymkhana Block",
  },
];

function NodeCard({ node }) {
  const Icon = node.icon;
  return (
    <div
      className="group block h-full w-[20rem] text-left rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:w-[24rem]"
    >
      <div className="relative mb-4 flex h-36 w-full items-center justify-center overflow-hidden rounded-lg bg-yellow-400 dark:bg-yellow-500/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25)_0%,transparent_60%)]" />
        <Icon className="h-12 w-12 text-slate-900/90 drop-shadow-xs" />
        <span className="absolute bottom-2 right-3 text-[10px] font-black uppercase tracking-wider text-slate-900/70">
          {node.imageLabel}
        </span>
      </div>
      
      <span className="inline-flex rounded-full bg-yellow-100 text-yellow-900 dark:bg-yellow-950/40 dark:text-yellow-400 px-2.5 py-0.5 text-xs font-bold mb-2.5">
        {node.subtitle}
      </span>
      
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-amber-500 transition-colors">
        {node.title}
      </h3>
      
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
        {node.desc}
      </p>
      
      <span className="inline-flex items-center text-xs font-extrabold text-indigo-600 dark:text-amber-500 group-hover:underline">
        {node.href.startsWith("/") ? "Open Directory" : "Learn More"}{" "}
        <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  );
}

export default function CampusLifePage() {
  const velocityRows = [
    { velocity: 3, nodes: campusNodes },
    { velocity: -3, nodes: [...campusNodes].reverse() },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">
            Student Life
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Campus Life at IIT Patna
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            From technical and cultural events that define academic years to student societies, food zones, and fitness complexes, explore the pathway of student life.
          </p>
        </div>

        <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden border-y border-slate-200 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="space-y-6">
            {velocityRows.map((row, rowIndex) => (
              <ScrollVelocity
                key={row.velocity}
                velocity={row.velocity}
                className={rowIndex === 1 ? "opacity-95" : ""}
              >
                {[...row.nodes, ...row.nodes].map((node, index) => (
                  <Link
                    key={`${row.velocity}-${node.id}-${index}`}
                    href={node.href}
                    className="normal-case tracking-normal leading-normal"
                  >
                    <NodeCard node={node} />
                  </Link>
                ))}
              </ScrollVelocity>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
