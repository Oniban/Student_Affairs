"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, AlertCircle, CheckCircle2, ShieldAlert, Heart, Flame, Lock } from "lucide-react";

const emergencyContacts = [
  { name: "Campus Security & Safety", phone: "+1 (555) 019-9111", icon: ShieldAlert, color: "text-red-600 dark:text-red-400", desc: "24/7 — Theft, trespass, physical security threats" },
  { name: "Student Health Emergency", phone: "+1 (555) 019-9222", icon: Heart, color: "text-rose-600 dark:text-rose-400", desc: "Medical emergencies, first aid, ambulance coordination" },
  { name: "Mental Health Helpline (MindSpace)", phone: "+1 (555) 019-9888", icon: AlertCircle, color: "text-purple-600 dark:text-purple-400", desc: "24/7 — Crisis counseling, severe distress, suicide prevention" },
  { name: "Fire Safety & Civil Services", phone: "+1 (555) 019-9119", icon: Flame, color: "text-orange-600 dark:text-orange-400", desc: "Fire alarms, gas leaks, evacuation coordination" },
  { name: "Anti-Ragging Helpline", phone: "+1 (555) 019-9300", icon: Lock, color: "text-amber-600 dark:text-amber-400", desc: "Report ragging incidents anonymously, 24 hours a day" },
];

const departments = [
  { dept: "Dean of Student Welfare", email: "sjenkins@university.edu", phone: "+1 (555) 019-9011" },
  { dept: "Hostel & Residential Affairs", email: "hostel@university.edu", phone: "+1 (555) 019-9022" },
  { dept: "Counseling & Psych Services", email: "counseling@university.edu", phone: "+1 (555) 019-9033" },
  { dept: "Scholarships & Financial Aid", email: "scholarships@university.edu", phone: "+1 (555) 019-9055" },
  { dept: "Student Clubs & Activities", email: "clubs@university.edu", phone: "+1 (555) 019-9066" },
  { dept: "Sports & Physical Education", email: "sports@university.edu", phone: "+1 (555) 019-9044" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">Get in Touch</span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Contact Information</h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Reach the Student Affairs Office by phone, email, or in person. For urgent matters, use the emergency contacts listed below immediately.
          </p>
        </div>

        {/* Emergency Contacts — highlighted prominently */}
        <section id="emergency">
          <div className="flex items-center gap-2.5 mb-5">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Emergency Contacts</h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">All lines are active 24 hours a day, 7 days a week. Save these numbers before you need them.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyContacts.map((ec) => {
              const Icon = ec.icon;
              return (
                <div key={ec.name} className="flex items-start gap-4 p-5 rounded-xl border border-red-100 dark:border-red-950/40 bg-red-50/30 dark:bg-red-950/5 hover:border-red-200 dark:hover:border-red-900/60 transition-colors">
                  <div className={`rounded-lg bg-white dark:bg-slate-900 p-2 shrink-0 ${ec.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{ec.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{ec.desc}</p>
                    <a href={`tel:${ec.phone.replace(/[^0-9+]/g, "")}`} className="text-base font-bold text-red-700 dark:text-red-400 hover:underline">
                      {ec.phone}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Departmental Contacts & Map */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Departmental Directory */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Departmental Directory</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">Contact specific departments for targeted assistance.</p>
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Department</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hidden sm:table-cell">Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {departments.map((d, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-medium text-slate-900 dark:text-white text-sm">{d.dept}</p>
                        <a href={`tel:${d.phone.replace(/[^0-9+]/g, "")}`} className="text-xs text-indigo-600 dark:text-amber-500 hover:underline flex items-center gap-1 mt-0.5">
                          <Phone className="h-3 w-3" /> {d.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <a href={`mailto:${d.email}`} className="text-xs text-indigo-600 dark:text-amber-500 hover:underline flex items-center gap-1">
                          <Mail className="h-3 w-3" /> {d.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map Card */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Office Location</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">Visit us at the main Administration Building during office hours.</p>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              {/* Visual Map Placeholder */}
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                {/* Styled map marker */}
                <div className="relative flex flex-col items-center">
                  <div className="bg-indigo-600 dark:bg-amber-500 rounded-full p-3 shadow-lg">
                    <MapPin className="h-6 w-6 text-white dark:text-slate-900" />
                  </div>
                  <div className="mt-2 bg-white dark:bg-slate-900 rounded-lg px-3 py-1.5 shadow-md border border-slate-200 dark:border-slate-700 text-center">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Student Affairs Office</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Admin Block, Room 102</p>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-2.5 bg-white dark:bg-slate-900/40">
                <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Administration Block, Room 102, University Campus, Sector 4, City — 110 004</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Clock className="h-4 w-4 text-slate-400 shrink-0" />
                  <span>Mon–Fri: 9:00 AM – 5:30 PM</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                  <a href="tel:+15550199000" className="text-indigo-600 dark:text-amber-500 hover:underline">+1 (555) 019-9000</a>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                  <a href="mailto:studentaffairs@university.edu" className="text-indigo-600 dark:text-amber-500 hover:underline">studentaffairs@university.edu</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">For non-urgent inquiries, fill out the form below. We typically respond within 1–2 business days.</p>
            {submitted ? (
              <div className="flex items-start gap-4 p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50 dark:bg-emerald-950/10">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-emerald-800 dark:text-emerald-400">Message Sent Successfully!</p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-500 mt-1">Thank you for reaching out. A member of our team will respond to <strong>{form.email}</strong> within 1–2 business days.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500" />
                  <input required type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500" />
                </div>
                <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500">
                  <option value="">Select a Subject</option>
                  {["General Inquiry", "Counseling Services", "Hostel & Housing", "Scholarships & Aid", "Club Activities", "Complaint / Grievance", "Other"].map(s => <option key={s}>{s}</option>)}
                </select>
                <textarea required placeholder="Your message..." rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-amber-500 resize-none" />
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors cursor-pointer">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
