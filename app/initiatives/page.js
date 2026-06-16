import { Brain, Globe2, Rocket, Leaf, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Major Initiatives | Student Affairs Office",
  description: "Explore major student welfare initiatives including MindSpace, OneCampus, LeadNext, and the Green Campus Campaign.",
};

const initiatives = [
  {
    id: "mindspace",
    icon: Brain,
    label: "Mental Health",
    title: "MindSpace Initiative",
    color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30",
    iconBg: "bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400",
    desc: "MindSpace is a comprehensive mental health support ecosystem providing students with professional counseling, peer support networks, and digital mental wellness resources available 24/7.",
    goals: [
      "Expand counseling staff from 4 to 10 qualified psychologists by 2026",
      "Launch peer listener program across all departments",
      "Roll out 'Breathe' mindfulness app to all enrolled students",
      "Host bi-monthly mental health awareness campaigns",
    ],
    status: "Active",
    year: "Launched 2021",
    milestone: "12,000+ counseling sessions conducted since launch",
  },
  {
    id: "onecampus",
    icon: Globe2,
    label: "Diversity & Inclusion",
    title: "OneCampus Initiative",
    color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30",
    iconBg: "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400",
    desc: "OneCampus fosters an inclusive, multicultural, and accessible university environment. It promotes cultural exchange, combats discrimination, and ensures safe spaces for all identities and backgrounds.",
    goals: [
      "Establish International Students' Cultural Exchange Hub",
      "Train 100% of faculty in accessibility and inclusion",
      "Conduct monthly safe-space dialogue circles",
      "Partner with 5 community organizations on outreach programs",
    ],
    status: "Active",
    year: "Launched 2022",
    milestone: "3 cultural festivals organized, 800+ students participated",
  },
  {
    id: "leadnext",
    icon: Rocket,
    label: "Student Leadership",
    title: "LeadNext Program",
    color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30",
    iconBg: "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400",
    desc: "LeadNext identifies and nurtures student leadership potential through structured mentorship, grant-funded student projects, and intensive leadership summits each year.",
    goals: [
      "Fund 20 student-led social impact projects annually",
      "Host 2 inter-university leadership summits per year",
      "Build an alumni mentorship network of 500+ professionals",
      "Launch LeadNext Certification Module in partnership with industry",
    ],
    status: "Active",
    year: "Launched 2023",
    milestone: "45 projects funded, ₹8L in grants disbursed to student teams",
  },
  {
    id: "greencampus",
    icon: Leaf,
    label: "Sustainability",
    title: "Green Campus Campaign",
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400",
    desc: "The Green Campus Campaign drives environmental responsibility across university facilities, canteens, and student clubs, working towards a measurably reduced carbon footprint by 2028.",
    goals: [
      "Achieve single-use plastic-free campus by December 2026",
      "Install 500 solar panels on campus rooftops",
      "Reduce cafeteria food waste by 40% via composting",
      "Plant 1,000 trees in campus & surrounding neighbourhoods",
    ],
    status: "In Progress",
    year: "Launched 2024",
    milestone: "Plastic ban in 3 canteens, 200 solar panels installed",
  },
];

const timeline = [
  { year: "2021", event: "MindSpace 24/7 Helpline launched — first counselor cohort hired" },
  { year: "2022", event: "OneCampus founded — first International Students' Cultural Fest held" },
  { year: "2023", event: "LeadNext Program kickoff — ₹8 lakh disbursed to 45 student projects" },
  { year: "2024", event: "Green Campus Campaign declared — single-use plastic ban phased in" },
  { year: "2025", event: "MindSpace app surpasses 10,000 active users; OneCampus safe-space certification launched" },
  { year: "2026", event: "Plastic-free campus target; LeadNext national summit planned" },
];

export default function InitiativesPage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">Our Campaigns</span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Major Initiatives</h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Our office drives transformative programs in mental health, diversity, student leadership, and environmental sustainability — shaping the campus of the future.
          </p>
        </div>

        {/* Initiative Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((init) => {
            const Icon = init.icon;
            return (
              <div key={init.id} className={`rounded-xl border p-7 ${init.color}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`rounded-lg p-2.5 ${init.iconBg}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${init.status === "Active" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"}`}>
                      {init.status}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">{init.year}</span>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{init.label}</span>
                <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white mb-2">{init.title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{init.desc}</p>

                <div className="space-y-1.5 mb-4">
                  {init.goals.map((g, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 dark:text-slate-300">{g}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 border border-white/80 dark:border-slate-800">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Key Milestone: </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-white">{init.milestone}</span>
                </div>
              </div>
            );
          })}
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Initiatives Timeline</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-start gap-5 sm:gap-8">
                  <div className="shrink-0 w-24 text-right">
                    <span className="text-sm font-bold text-indigo-600 dark:text-amber-500">{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="relative hidden sm:flex h-5 w-5 shrink-0 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-indigo-600 dark:bg-amber-500 ring-4 ring-white dark:ring-slate-950" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-slate-100 dark:border-slate-900 last:border-0 last:pb-0">
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item.event}</p>
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
