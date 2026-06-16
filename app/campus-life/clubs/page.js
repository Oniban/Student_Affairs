"use client";

import { useState } from "react";
import { Music, Cpu, BookHeart, Leaf, Trophy, Dumbbell, Users, CheckCircle2, ArrowRight } from "lucide-react";

const clubs = [
  { name: "Robotics & AI Society", category: "Technology", members: 120, icon: Cpu, desc: "Build robots, compete in hackathons, and explore the frontiers of artificial intelligence." },
  { name: "Literature & Debate Club", category: "Culture", members: 85, icon: BookHeart, desc: "Weekly debates, poetry slams, and a book exchange program open to all disciplines." },
  { name: "Campus Music Ensemble", category: "Arts", members: 60, icon: Music, desc: "Classical and contemporary music performances, open auditions each semester." },
  { name: "Environment & Sustainability Cell", category: "Social", members: 95, icon: Leaf, desc: "Campus clean-up drives, recycling workshops, and the Green Campus initiative." },
  { name: "Student Sports Association", category: "Sports", members: 200, icon: Trophy, desc: "Governing body for all inter-university sports tournaments and varsity teams." },
  { name: "Fitness & Wellness Club", category: "Sports", members: 110, icon: Dumbbell, desc: "Daily gym sessions, yoga classes, and fitness challenges for all fitness levels." },
];

export default function ClubsPage() {
  const [form, setForm] = useState({ name: "", email: "", club: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(clubs.map(c => c.category))];
  const filteredClubs = activeCategory === "All" ? clubs : clubs.filter(c => c.category === activeCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">Directory</span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Clubs & Societies</h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Discover and join our student-run organizations. From tech communities to literary clubs, participate in extra-curricular groups that match your passion.
          </p>
        </div>

        {/* Clubs Grid Section */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Active Organizations</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Filter by interest area to find your fit.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club, i) => {
              const Icon = club.icon;
              return (
                <div key={i} className="flex flex-col p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="rounded-lg bg-indigo-50 dark:bg-indigo-950/30 p-2.5 text-indigo-600 dark:text-amber-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">{club.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{club.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{club.desc}</p>
                  <div className="mt-auto flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                    <Users className="h-3.5 w-3.5" />
                    <span>{club.members} members</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Join a Club Form */}
        <section className="border-t border-slate-200 dark:border-slate-800 pt-16">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10 p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Express Interest in Joining</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Select a club and fill out this registration form. Respective club coordinators will contact you shortly.</p>
            {submitted ? (
              <div className="flex items-start gap-3 p-5 rounded-lg bg-emerald-50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-900/40">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-emerald-800 dark:text-emerald-400">Expression of Interest Submitted!</p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-500 mt-1">The club coordinator will contact you at your provided email address (<strong>{form.email}</strong>) within 3 working days.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Your Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500" />
                <input required type="email" placeholder="University Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500" />
                <select required value={form.club} onChange={e => setForm({...form, club: e.target.value})} className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500 sm:col-span-2">
                  <option value="">Select a Club</option>
                  {clubs.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
                <textarea placeholder="Why do you want to join? (optional)" rows={3} value={form.reason} onChange={e => setForm({...form, reason: e.target.value})} className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500 resize-none sm:col-span-2" />
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors cursor-pointer">
                    Submit Interest <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
