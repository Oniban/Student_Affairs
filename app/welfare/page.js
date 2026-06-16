"use client";

import { useState } from "react";
import { HeartHandshake, Home, DollarSign, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "counseling",
    icon: HeartHandshake,
    title: "Health & Counseling Services",
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20",
    desc: "Our certified counselors offer free, confidential mental health support to all enrolled students, ranging from individual therapy sessions to group wellness workshops.",
    details: [
      "Individual counseling sessions (45 min) – book in advance",
      "Crisis walk-in clinic: Mon–Sat, 9 AM–5 PM",
      "24/7 MindSpace Helpline: +1 (555) 019-9888",
      "Peer support circles every Wednesday 4 PM",
      "Online telecounseling via student portal",
    ],
  },
  {
    id: "housing",
    icon: Home,
    title: "Hostel & Housing",
    color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20",
    desc: "On-campus residential housing for undergraduate and postgraduate students. Allocation is made based on distance from home city, academic performance, and specific need.",
    details: [
      "3 dormitory blocks: Lakeside, Hillcrest, Annexe",
      "Single and shared room options available",
      "24-hour security and CCTV coverage",
      "Mess service with weekly menu rotations",
      "Warden contact: apendelton@university.edu",
    ],
  },
  {
    id: "scholarships",
    icon: DollarSign,
    title: "Financial Aid & Scholarships",
    color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20",
    desc: "Multiple institutional and state-funded bursaries are available. Students can apply through the student portal during designated windows each semester.",
    details: [
      "Merit Scholarship: top 5% of each department",
      "Need-Based Grant: income-linked annual bursary",
      "Sports Achievement Award: varsity athletes",
      "Application window: June 1 – July 15 each year",
      "Disbursement: direct to student account by August 31",
    ],
  },
  {
    id: "career",
    icon: Briefcase,
    title: "Career Guidance & Development",
    color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20",
    desc: "The Career Development Cell works alongside the Student Affairs Office to provide resume workshops, mock interviews, internship referrals, and industry exposure camps.",
    details: [
      "Resume review drop-ins: Mon–Fri, 11 AM–1 PM",
      "Annual campus recruitment fair (February)",
      "LinkedIn profile building workshops monthly",
      "Internship referral network with 80+ partner firms",
      "Contact: careers@university.edu",
    ],
  },
];

function AppointmentForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  return submitted ? (
    <div className="text-center py-6">
      <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto mb-3" />
      <p className="text-sm font-semibold text-slate-900 dark:text-white">Appointment Request Submitted</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We'll confirm your slot via email within 24 hours.</p>
      <button onClick={onClose} className="mt-4 text-xs text-indigo-600 dark:text-amber-500 hover:underline cursor-pointer">Close</button>
    </div>
  ) : (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-3 mt-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input required type="text" placeholder="Full Name" className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500" />
        <input required type="email" placeholder="Student Email" className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500" />
      </div>
      <input required type="text" placeholder="Student ID (e.g. STU2024-0042)" className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500" />
      <select required className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500">
        <option value="">Preferred Day</option>
        {["Monday","Tuesday","Wednesday","Thursday","Friday"].map(d => <option key={d}>{d}</option>)}
      </select>
      <select required className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500">
        <option value="">Preferred Time Slot</option>
        {["9:00 AM","10:00 AM","11:00 AM","2:00 PM","3:00 PM","4:00 PM"].map(t => <option key={t}>{t}</option>)}
      </select>
      <textarea placeholder="Brief reason for appointment (optional)" rows={2} className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500 resize-none" />
      <div className="flex gap-3">
        <button type="submit" className="flex-1 rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors cursor-pointer">Book Appointment</button>
        <button type="button" onClick={onClose} className="rounded-md border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">Cancel</button>
      </div>
    </form>
  );
}

export default function WelfarePage() {
  const [openForm, setOpenForm] = useState(false);
  const [openService, setOpenService] = useState("counseling");

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">Support & Services</span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Student Welfare</h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            We are committed to your holistic wellbeing. From mental health counseling to financial assistance, our welfare services are here for every student, every day.
          </p>
        </div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Service Selector */}
          <div className="flex flex-col gap-2">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <button
                  key={svc.id}
                  onClick={() => setOpenService(svc.id)}
                  className={`flex items-center gap-3 p-4 rounded-lg text-left border transition-all cursor-pointer ${
                    openService === svc.id
                      ? "border-indigo-300 dark:border-amber-800 bg-indigo-50/50 dark:bg-amber-950/10"
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/40"
                  }`}
                >
                  <div className={`rounded-lg p-2 shrink-0 ${svc.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{svc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Service Details */}
          {services.filter(s => s.id === openService).map(svc => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="lg:col-span-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-8">
                <div className={`inline-flex rounded-lg p-2.5 mb-4 ${svc.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{svc.title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{svc.desc}</p>

                <div className="space-y-2 mb-6">
                  {svc.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{d}</span>
                    </div>
                  ))}
                </div>

                {svc.id === "counseling" && (
                  <>
                    <button
                      onClick={() => setOpenForm(!openForm)}
                      className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors cursor-pointer"
                    >
                      <Calendar className="h-4 w-4" />
                      {openForm ? "Hide Appointment Form" : "Book a Counseling Appointment"}
                    </button>
                    {openForm && <AppointmentForm onClose={() => setOpenForm(false)} />}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
