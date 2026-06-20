"use client";

import { useState } from "react";
import FacultyDirectory from "../../components/FacultyDirectory";
import CircularTestimonials from "../../components/CircularTestimonials";
import { Users, Image } from "lucide-react";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("directory");

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {activeTab === "directory" ? "Faculty & Staff" : "Gallery"}
            </h1>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("directory")}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === "directory"
                ? "bg-white text-indigo-600 shadow-xs dark:bg-slate-800 dark:text-amber-500"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
            >
              <Users className="h-4.5 w-4.5" />
              Directory
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === "gallery"
                ? "bg-white text-indigo-600 shadow-xs dark:bg-slate-800 dark:text-amber-500"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
            >
              <Image className="h-4.5 w-4.5" />
              Gallery
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="mt-8">
          {activeTab === "directory" ? (
            <FacultyDirectory />
          ) : (
            <CircularTestimonials />
          )}
        </div>
      </div>
    </div>
  );
}
