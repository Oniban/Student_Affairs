"use client";

import { useState } from "react";
import { Search, Mail, Phone, Clock, X, BookOpen, Lightbulb, Trophy, User } from "lucide-react";
import { facultyData } from "./facultyData";

function FacultyModal({ faculty, onClose }) {
  const [activeTab, setActiveTab] = useState("academic");

  const tabs = [
    { id: "academic", label: "Academic Info", icon: User },
    { id: "research", label: "Research", icon: Lightbulb },
    { id: "publications", label: "Publications", icon: BookOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-modal="true"
      role="dialog"
      aria-label={`Profile of ${faculty.name}`}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className={`flex h-14 w-14 rounded-full items-center justify-center text-xl font-bold shrink-0 ${faculty.imageBg}`}>
              {faculty.initials}
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{faculty.name}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{faculty.role}</p>
              <span className="inline-block mt-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:text-amber-500">
                {faculty.category}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
            aria-label="Close profile"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "border-indigo-600 text-indigo-600 dark:border-amber-500 dark:text-amber-500"
                    : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "academic" && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Bio</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{faculty.bio}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Academic Qualifications</h3>
                <div className="space-y-2">
                  {faculty.academics.map((a, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-amber-500 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{a.degree}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{a.school}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "research" && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Research Interests</h3>
              {faculty.researchInterests.map((interest, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                  <Lightbulb className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">{interest}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "publications" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Publications</h3>
                <div className="space-y-3">
                  {faculty.publications.map((pub, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <BookOpen className="h-4 w-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{pub}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Achievements</h3>
                <div className="space-y-2">
                  {faculty.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Trophy className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Mail, label: "Email", value: faculty.email },
                  { icon: Phone, label: "Direct Phone", value: faculty.phone },
                  { icon: User, label: "Office Location", value: faculty.office },
                  { icon: Clock, label: "Office Hours", value: faculty.hours },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="h-3.5 w-3.5 text-indigo-500 dark:text-amber-500" />
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">Send a Query</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500"
                  />
                  <textarea
                    placeholder="Your message..."
                    rows={3}
                    className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500 resize-none"
                  />
                  <button className="w-full rounded-md bg-indigo-600 dark:bg-amber-500 py-2 text-sm font-semibold text-white dark:text-slate-900 hover:bg-indigo-500 dark:hover:bg-amber-400 transition-colors cursor-pointer">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FacultyDirectory() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const categories = ["All", ...new Set(facultyData.map((f) => f.category))];

  const filtered = facultyData.filter((f) => {
    const matchSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.role.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || f.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <>
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="search"
            placeholder="Search by name or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-9 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white dark:bg-amber-500 dark:text-slate-900"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Faculty Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400 dark:text-slate-600">
          <User className="h-10 w-10 mx-auto mb-3 opacity-40" />
          <p className="text-sm">No faculty members found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((f) => (
            <div
              key={f.id}
              className="flex flex-col p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all"
            >
              <div className={`flex h-16 w-16 rounded-full items-center justify-center text-2xl font-bold mb-4 ${f.imageBg}`}>
                {f.initials}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{f.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{f.role}</p>
              <span className="inline-block mb-4 rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400 w-fit">
                {f.category}
              </span>
              <div className="mt-auto space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{f.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 shrink-0" />
                  <span>{f.hours}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedFaculty(f)}
                className="mt-4 w-full rounded-md border border-slate-200 dark:border-slate-700 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                View Full Profile
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedFaculty && (
        <FacultyModal faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
      )}
    </>
  );
}
