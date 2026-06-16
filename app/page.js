import Link from "next/link";
import { 
  ArrowRight, 
  ShieldAlert, 
  Users, 
  HeartHandshake, 
  BookOpen, 
  Sparkles, 
  Compass, 
  HelpCircle,
  Megaphone
} from "lucide-react";

export default function Home() {
  const quickLinks = [
    {
      title: "Student Welfare",
      desc: "Housing, mental health counseling, scholarship options, and basic student support services.",
      href: "/welfare",
      icon: HeartHandshake,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20",
    },
    {
      title: "Faculty & Staff Directory",
      desc: "Connect with deans, wardens, advisors, and counselor academic profiles & publications.",
      href: "/team",
      icon: Users,
      color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20",
    },
    {
      title: "Campus Life Showcase",
      desc: "Explore sports divisions, cultural societies, student government, and student-run clubs.",
      href: "/campus-life",
      icon: Compass,
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20",
    },
    {
      title: "Office Initiatives",
      desc: "Learn about campaigns for mental health support, diversity drives, and leadership projects.",
      href: "/initiatives",
      icon: Sparkles,
      color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20",
    },
    {
      title: "Forms & Downloads",
      desc: "Quick access to hostel requisitions, club registration sheets, and academic policy files.",
      href: "/resources",
      icon: BookOpen,
      color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20",
    },
    {
      title: "FAQ & Contact Support",
      desc: "Get answers to general queries or contact our administrative coordinators directly.",
      href: "/resources#faq",
      icon: HelpCircle,
      color: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20",
    },
  ];

  const stats = [
    { label: "Registered Student Clubs", value: "48" },
    { label: "On-Campus Hostel Capacity", value: "3,800+" },
    { label: "Welfare Officers & Counselors", value: "15" },
    { label: "Annual Student Events Organized", value: "120+" },
  ];

  const announcements = [
    "Annual Merit Scholarship Applications are open until June 30, 2026.",
    "Hostel Room Allocation list for the Fall Semester is now available under Resources.",
    "Mindfulness Circle sessions occur every Wednesday at 4:00 PM in the Counselling Center.",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. News/Noticeboard Ticker Banner */}
      <div className="bg-indigo-50 border-b border-indigo-100 py-3 dark:bg-indigo-950/30 dark:border-indigo-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden w-full">
            <Megaphone className="h-4.5 w-4.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider shrink-0">
              Notice:
            </span>
            <div className="flex animate-marquee gap-8 text-xs text-indigo-900 dark:text-indigo-200 truncate">
              {announcements.map((ann, i) => (
                <span key={i} className="inline-block font-medium">
                  • {ann}
                </span>
              ))}
            </div>
          </div>
          <Link 
            href="/resources" 
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 shrink-0 flex items-center gap-1 ml-4"
          >
            All Notices <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-white dark:bg-slate-950 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/40 dark:text-amber-500 mb-6">
            Welcome to the Student Affairs Portal
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-none">
            Empowering Your <span className="text-indigo-600 dark:text-amber-500">Collegiate Journey</span> Beyond the Classroom
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            We are dedicated to enriching your university experience by providing holistic support, fostering campus engagement, facilitating wellness, and helping you navigate university guidelines.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/welfare"
              className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 transition-colors focus-visible:outline-2"
            >
              Access Welfare & Counseling
            </Link>
            <Link
              href="/team"
              className="rounded-md border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>

        {/* Decorative Grid Lines - Clean Minimalist style */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </section>

      {/* 3. Stat Highlights */}
      <section className="border-t border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/10 py-12 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <span className="text-3xl font-extrabold text-indigo-600 dark:text-amber-500 sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service Portal Grid */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Explore Our Core Services
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              Select an area below to request counseling appointments, browse student clubs, download mandatory affidavits, or access campus resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative flex flex-col justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs transition-all duration-200"
                >
                  <div>
                    <div className={`inline-flex rounded-lg p-2.5 ${item.color} mb-5`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-amber-500 group-hover:underline"
                  >
                    Access Portal <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Warning Emergency Hotline Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-red-600 px-6 py-10 shadow-xl sm:px-12 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-white/10 p-2 shrink-0">
              <ShieldAlert className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Crisis & Emergency Support
              </h3>
              <p className="mt-1 text-sm text-red-100 max-w-xl leading-relaxed">
                If you are facing a physical security risk, a severe mental health crisis, or medical emergency, our lines are active 24/7. Connect instantly with campus emergency response teams.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href="tel:+15550199111"
              className="flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-red-600 hover:bg-slate-50 transition-colors"
            >
              Call Campus Security
            </a>
            <Link
              href="/contact#emergency"
              className="flex items-center justify-center rounded-md border border-white/40 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              All Emergency Contacts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
