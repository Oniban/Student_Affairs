"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Mock gallery items using solid color gradients (no external images needed)
const galleryItems = [
  { id: 1, category: "Events", title: "Annual Day Celebration 2025", color: "from-violet-400 to-purple-600", text: "Annual Day" },
  { id: 2, category: "Campus", title: "Central Library Reading Hall", color: "from-blue-400 to-indigo-600", text: "Central Library" },
  { id: 3, category: "Sports", title: "Inter-University Football Final", color: "from-emerald-400 to-green-600", text: "Football Final" },
  { id: 4, category: "Campus", title: "Science & Technology Block", color: "from-slate-400 to-slate-600", text: "Tech Block" },
  { id: 5, category: "Events", title: "Freshers' Orientation Week", color: "from-pink-400 to-rose-500", text: "Freshers' Week" },
  { id: 6, category: "Sports", title: "Swimming Championships 2025", color: "from-cyan-400 to-blue-500", text: "Swimming Champs" },
  { id: 7, category: "Welfare", title: "MindSpace Awareness Fair", color: "from-amber-400 to-orange-500", text: "MindSpace Fair" },
  { id: 8, category: "Campus", title: "Campus Central Grounds at Dusk", color: "from-orange-400 to-red-500", text: "Campus Grounds" },
  { id: 9, category: "Events", title: "Cultural Fest: OneCampus 2025", color: "from-fuchsia-400 to-purple-500", text: "Cultural Fest" },
  { id: 10, category: "Welfare", title: "Counseling Center Open Day", color: "from-teal-400 to-emerald-500", text: "Open Day" },
  { id: 11, category: "Sports", title: "Athletics Track & Field Day", color: "from-lime-400 to-green-500", text: "Track & Field" },
  { id: 12, category: "Campus", title: "Hostel Block D — Sunrise View", color: "from-yellow-400 to-amber-500", text: "Hostel Block D" },
];

export default function InteractiveGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index into filtered

  const categories = ["All", ...new Set(galleryItems.map(i => i.category))];
  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter(i => i.category === activeCategory);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  const next = () => setLightbox((lightbox + 1) % filtered.length);

  // Keyboard navigation
  const handleKey = (e) => {
    if (lightbox === null) return;
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <div onKeyDown={handleKey} tabIndex={-1} className="outline-none">
      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setLightbox(null); }}
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

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-amber-500 focus:ring-offset-2"
            aria-label={`View ${item.title}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
              <span className="text-white font-bold text-sm text-center px-3 drop-shadow">{item.text}</span>
            </div>
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
              <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform w-full">
                <p className="text-white text-xs font-semibold line-clamp-1">{item.title}</p>
                <span className="text-white/70 text-xs">{item.category}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
          aria-modal="true"
          role="dialog"
        >
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <button onClick={prev} className="absolute left-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer" aria-label="Previous">
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button onClick={next} className="absolute right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer" aria-label="Next">
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="flex flex-col items-center gap-4 max-w-lg w-full">
            <div className={`w-full aspect-video rounded-xl bg-gradient-to-br ${filtered[lightbox].color} flex items-center justify-center shadow-2xl`}>
              <span className="text-white font-bold text-2xl text-center px-6 drop-shadow-lg">{filtered[lightbox].text}</span>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold">{filtered[lightbox].title}</p>
              <span className="text-white/50 text-sm">{filtered[lightbox].category} • {lightbox + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
