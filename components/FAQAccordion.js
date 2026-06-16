"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    category: "Housing & Hostel",
    items: [
      { q: "How do I apply for on-campus housing?", a: "Visit the student portal under 'Hostel Services', fill out the Residential Application Form, and submit it before the deadline. Allocation is announced within 2 weeks based on distance and need." },
      { q: "Can I change my room or roommate after allocation?", a: "Room change requests are processed in the first 2 weeks of each semester. Submit a signed request to the Warden's Office. Changes are subject to availability and approval." },
      { q: "What happens if I have a maintenance issue in the hostel?", a: "Report any maintenance concerns via the Resident Advisor on your floor or by emailing hostel@university.edu. Urgent issues (electrical, plumbing) are addressed within 24 hours." },
    ],
  },
  {
    category: "Scholarships & Financial Aid",
    items: [
      { q: "What scholarships are available for undergraduate students?", a: "We offer the Merit Scholarship (top 5%), the Need-Based Grant, the Sports Achievement Award, and the First-Generation Student Bursary. Application windows open every June 1." },
      { q: "How do I know if I qualify for financial aid?", a: "Eligibility is based on annual family income (below ₹6L/year for need-based grants), academic standing (above 7.0 CGPA for merit aid), and enrollment status. Visit Resources for the full eligibility matrix." },
      { q: "When are scholarships credited to student accounts?", a: "All approved scholarships are disbursed directly to registered student bank accounts by August 31 for the academic year." },
    ],
  },
  {
    category: "Mental Health & Counseling",
    items: [
      { q: "Are counseling sessions confidential?", a: "Yes, all individual counseling sessions are strictly confidential and bound by professional ethics guidelines. Information is not shared with academic faculty without your explicit consent." },
      { q: "How do I book a counseling session?", a: "Use the online portal under 'Welfare Services', call the Counseling Center at +1 (555) 019-9033, or visit the Student Wellness Center during walk-in hours (Mon–Fri, 9 AM–5 PM)." },
      { q: "Is there a 24/7 helpline for mental health crises?", a: "Yes. The MindSpace Helpline (+1 555 019-9888) is available 24 hours, 7 days a week for all enrolled students facing a mental health crisis or distress situation." },
    ],
  },
  {
    category: "Clubs & Activities",
    items: [
      { q: "How do I start a new student club?", a: "Submit a Club Charter Application (available on Resources page) with at least 15 interested student signatures, a proposed faculty advisor, and a stated purpose. The SAO reviews proposals in the first month of each semester." },
      { q: "Is there funding available for club events?", a: "Yes. Registered clubs can apply for Activity Funding through the student portal. Maximum grant per event is ₹25,000. Proposals are reviewed by the Student Council Finance Committee." },
      { q: "Who handles club disputes or inter-club conflicts?", a: "The Student Affairs Office's Club Governance Committee handles disputes. File a formal grievance by emailing clubs@university.edu with a written description of the issue." },
    ],
  },
  {
    category: "General Information",
    items: [
      { q: "What are the Student Affairs Office working hours?", a: "The SAO is open Monday to Friday, 9:00 AM to 5:30 PM. Urgent welfare concerns can reach our duty officer after hours via the main helpline." },
      { q: "How do I submit a formal student complaint or grievance?", a: "Download the Student Grievance Form from the Resources page, fill it out completely, and submit it in person to the SAO front desk or email it to grievance@university.edu." },
      { q: "Where can I find forms for hostel, club, counseling, and other services?", a: "All official forms are available on this Resources & Support page under the 'Forms & Downloads' section, organized by category." },
    ],
  },
];

export default function FAQAccordion() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState({});

  const toggle = (key) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));

  const filteredFaqs = faqs.map(cat => ({
    ...cat,
    items: cat.items.filter(
      item =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.items.length > 0);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8 max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="search"
          placeholder="Search FAQs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-9 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500"
        />
      </div>

      {filteredFaqs.length === 0 ? (
        <p className="text-sm text-slate-400 dark:text-slate-600 py-10 text-center">No FAQs match your search.</p>
      ) : (
        <div className="space-y-8">
          {filteredFaqs.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500 mb-3">{cat.category}</h3>
              <div className="space-y-2">
                {cat.items.map((item, i) => {
                  const key = `${cat.category}-${i}`;
                  const isOpen = !!openItems[key];
                  return (
                    <div key={key} className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900/70 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{item.q}</span>
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4 text-slate-400 shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 bg-white dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800 pt-3">
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
