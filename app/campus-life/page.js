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

const sports = [
  { sport: "Football", status: "Inter-University Champions 2025", team: "Varsity A" },
  { sport: "Basketball (Men & Women)", status: "Regional Semi-Finalists 2025", team: "Varsity A & B" },
  { sport: "Athletics & Track", status: "State Championships – 4 Gold Medals", team: "Track Squad" },
  { sport: "Badminton", status: "Dual Intercollegiate Tournament Winners", team: "Varsity" },
  { sport: "Swimming", status: "Aquatic District Champions 2024", team: "Swim Team" },
  { sport: "Chess", status: "National Collegiate Chess Federation Member", team: "Chess Club" },
];

const council = [
  { role: "Student Body President", name: "Arjun Mehra", year: "B.Tech 4th Year" },
  { role: "Vice President", name: "Priya Sharma", year: "B.Com 3rd Year" },
  { role: "Secretary General", name: "Daniel Okafor", year: "M.Sc 1st Year" },
  { role: "Treasurer", name: "Aarav Singh", year: "B.Sc 3rd Year" },
  { role: "Cultural Secretary", name: "Zoe Nguyen", year: "B.A. 2nd Year" },
  { role: "Sports Secretary", name: "Rayan Khan", year: "B.Tech 3rd Year" },
];

export default function CampusLifePage() {
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">Campus Life</span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Life at Our Campus</h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            University isn't just about lectures and exams. Explore over 48 active clubs, varsity sports, student government, and the vibrant cultural life that makes our campus home.
          </p>
        </div>

        {/* Clubs & Societies */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Clubs & Societies</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Browse official student-run clubs and organizations.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${activeCategory === cat ? "bg-indigo-600 text-white dark:bg-amber-500 dark:text-slate-900" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club, i) => {
              const Icon = club.icon;
              return (
                <div key={i} className="flex flex-col p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="rounded-lg bg-indigo-50 dark:bg-indigo-950/30 p-2 text-indigo-600 dark:text-amber-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">{club.category}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{club.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{club.desc}</p>
                  <div className="mt-auto flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                    <Users className="h-3.5 w-3.5" />
                    <span>{club.members} members</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sports & Athletics */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Sports & Athletics</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Our varsity teams have won multiple regional and national titles. The sports center is open daily from 6 AM to 10 PM.</p>
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900 text-left">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Sport</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hidden sm:table-cell">Team</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Recent Achievement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {sports.map((s, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-slate-900 dark:text-white">{s.sport}</td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400 hidden sm:table-cell">{s.team}</td>
                    <td className="px-5 py-3.5 text-slate-600 dark:text-slate-300">{s.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Student Council */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Student Council 2025–26</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">The elected student council represents the entire student body and works directly with university administration on policy and campus improvements.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {council.map((m, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="flex h-9 w-9 rounded-full items-center justify-center bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-amber-500 font-bold text-sm shrink-0">
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{m.name}</p>
                  <p className="text-xs text-indigo-600 dark:text-amber-500 font-medium">{m.role}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">{m.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join a Club Form */}
        <section>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Join a Club</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Fill out this form and the respective club coordinator will reach out to you within 3 working days.</p>
            {submitted ? (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-400">Expression of Interest Submitted!</p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-500">The club coordinator will contact you at your provided email address shortly.</p>
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
