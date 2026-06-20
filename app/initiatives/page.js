export const metadata = {
  title: "Major Initiatives | Student Affairs Office",
  description: "Explore major student welfare initiatives including MindSpace, OneCampus, LeadNext, and the Green Campus Campaign.",
};

const initiatives = [
  {
    id: "mindspace",
    label: "Mental Health",
    title: "MindSpace Initiative",
    color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30",
    accentText: "text-purple-600 dark:text-purple-400",
    desc: "MindSpace is not a helpline. It is a full mental health ecosystem — professional counselors, trained peer listeners, and round-the-clock digital tools — built on the belief that psychological safety is a prerequisite for academic excellence.",
    goals: [
      "Expand counseling staff from 4 to 10 qualified psychologists by 2026",
      "Launch peer listener program across all departments",
      "Roll out 'Breathe' mindfulness app to all enrolled students",
      "Host bi-monthly mental health awareness campaigns",
    ],
    status: "Active",
    year: "Since 2021",
    milestone: "12,000+ counseling sessions conducted since launch",
  },
  {
    id: "onecampus",
    label: "Diversity & Inclusion",
    title: "OneCampus Initiative",
    color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30",
    accentText: "text-blue-600 dark:text-blue-400",
    desc: "OneCampus is our commitment that no student should have to shrink themselves to belong here. Through cultural exchange, structural inclusion training, and zero-tolerance enforcement, we are building a university where every identity is not just tolerated — but seen.",
    goals: [
      "Establish International Students' Cultural Exchange Hub",
      "Train 100% of faculty in accessibility and inclusion",
      "Conduct monthly safe-space dialogue circles",
      "Partner with 5 community organizations on outreach programs",
    ],
    status: "Active",
    year: "Since 2022",
    milestone: "3 cultural festivals organized, 800+ students participated",
  },
  {
    id: "leadnext",
    label: "Student Leadership",
    title: "LeadNext Program",
    color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30",
    accentText: "text-amber-600 dark:text-amber-400",
    desc: "LeadNext operates on a radical premise: students do not need to wait until they graduate to lead. Through funded projects, industry mentorship, and inter-university summits, we back student ideas with real money and real accountability.",
    goals: [
      "Fund 20 student-led social impact projects annually",
      "Host 2 inter-university leadership summits per year",
      "Build an alumni mentorship network of 500+ professionals",
      "Launch LeadNext Certification Module in partnership with industry",
    ],
    status: "Active",
    year: "Since 2023",
    milestone: "45 projects funded, ₹8L in grants disbursed to student teams",
  },
  {
    id: "greencampus",
    label: "Sustainability",
    title: "Green Campus Campaign",
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30",
    accentText: "text-emerald-600 dark:text-emerald-400",
    desc: "The Green Campus Campaign treats environmental responsibility as non-negotiable infrastructure — not a club activity. Solar panels, plastic elimination, composting systems, and urban greening are being built into the campus itself, with a hard target of measurable carbon reduction by 2028.",
    goals: [
      "Achieve single-use plastic-free campus by December 2026",
      "Install 500 solar panels on campus rooftops",
      "Reduce cafeteria food waste by 40% via composting",
      "Plant 1,000 trees in campus and surrounding neighbourhoods",
    ],
    status: "In Progress",
    year: "Since 2024",
    milestone: "Plastic ban in 3 canteens, 200 solar panels installed",
  },
];

const timeline = [
  {
    year: "2021",
    title: "MindSpace goes live",
    event: "24/7 helpline launched. First cohort of counselors hired. The university makes its first public commitment to student mental health as a structural priority.",
  },
  {
    year: "2022",
    title: "OneCampus founded",
    event: "First International Students' Cultural Festival held. Inclusion training piloted across three faculties. A new standard for belonging on campus is set.",
  },
  {
    year: "2023",
    title: "LeadNext disburses ₹8 lakh",
    event: "45 student-led projects funded in the inaugural year. The program proves that students, given real resources and real trust, build things that matter.",
  },
  {
    year: "2024",
    title: "Green Campus declared",
    event: "Single-use plastic ban phased into canteens. Solar panel installation begins. The campus stops treating sustainability as aspiration and starts treating it as policy.",
  },
  {
    year: "2025",
    title: "Scale",
    event: "MindSpace app surpasses 10,000 active users. OneCampus safe-space certification launched university-wide. Both programs move from initiative to institution.",
  },
  {
    year: "2026",
    title: "What we are building toward",
    event: "Plastic-free campus deadline. LeadNext national summit planned. The work continues — and the targets get harder from here.",
  },
];

export default function InitiativesPage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Major Initiatives</h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            These are not programs. They are structural commitments — to mental health, to belonging, to student-led change, and to a campus that takes its environmental responsibility seriously. Each one is measured, funded, and accountable.
          </p>
        </div>

        {/* Initiative Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((init) => (
            <div key={init.id} className={`rounded-xl border p-7 ${init.color}`}>
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider ${init.accentText}`}>{init.label}</span>
                <div className="flex flex-col items-end gap-1">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${init.status === "Active" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"}`}>
                    {init.status}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">{init.year}</span>
                </div>
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{init.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{init.desc}</p>

              <div className="space-y-1.5 mb-4">
                {init.goals.map((g, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className={`text-xs font-bold shrink-0 mt-0.5 tabular-nums ${init.accentText}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-xs text-slate-700 dark:text-slate-300">{g}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 border border-white/80 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Key Milestone: </span>
                <span className="text-xs font-bold text-slate-800 dark:text-white">{init.milestone}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <section>
          <div className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-6">
            <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">How we got here</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Every initiative began as a decision — to take a problem seriously, put resources behind it, and hold ourselves accountable to a timeline.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="group flex items-stretch gap-0 sm:gap-8">
                  <div className="shrink-0 w-28 sm:w-32 flex flex-col items-end justify-start pt-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-amber-500 tabular-nums">
                      {item.year}
                    </span>
                  </div>

                  <div className="relative hidden sm:flex flex-col items-center">
                    <div className="mt-[1.35rem] h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-slate-950 group-hover:bg-indigo-600 dark:group-hover:bg-amber-500 transition-colors duration-200 shrink-0 z-10" />
                  </div>

                  <div className={`flex-1 py-5 ${i < timeline.length - 1 ? "border-b border-slate-100 dark:border-slate-900" : ""}`}>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mb-1 leading-snug">{item.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
