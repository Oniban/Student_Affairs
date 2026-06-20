import { ShieldAlert, Home, GraduationCap, Trophy, ClipboardList, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Key Responsibilities | Student Affairs Office",
  description: "Explore the core administrative and welfare responsibilities of the Student Affairs Office.",
};

const responsibilities = [
  {
    icon: ShieldAlert,
    title: "Student Welfare & Counseling",
    desc: "Overseeing student wellbeing programs, health insurance, campus clinic linkages, and managing the core Counseling Center.",
    color: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/30",
    tasks: [
      "Manage professional mental health counseling slots",
      "Coordinate emergency medical evacuation processes",
      "Oversee group health insurance subscriptions",
      "Organize mindfulness and stress-reduction bootcamps",
    ],
  },
  {
    icon: Home,
    title: "Residential Life & Hostels",
    desc: "Coordinating hostel accommodation, room allocations, mess safety inspections, Warden committee assignments, and discipline.",
    color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30",
    tasks: [
      "Process fresh & transition room requests annually",
      "Conduct regular health and hygiene checks in dining halls",
      "Chair Warden Council assemblies on maintenance feedback",
      "Enforce code of conduct rules inside residential wings",
    ],
  },
  {
    icon: GraduationCap,
    title: "Scholarships & Financial Aid",
    desc: "Administering institute-funded grants, central government merit aid, private foundations, and foreign travel sponsorships.",
    color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30",
    tasks: [
      "Verify eligible income certificates for Need Grants",
      "Disburse Merit-cum-Means funds directly each semester",
      "Liaise with external CSR partners on corporate aid",
      "Track overseas internship and research travel allowances",
    ],
  },
  {
    icon: Trophy,
    title: "Clubs & Extracurricular Affairs",
    desc: "Supervising Students' Gymkhana, technological councils, cultural assemblies, clubs, fests, and activity funding requests.",
    color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30",
    tasks: [
      "Authorize capital budgets for annual tech & cultural fests",
      "Register new student interest groups and assign advisors",
      "Audit club accounts for compliance and transparency",
      "Coordinate interstate sports and tech team delegations",
    ],
  },
  {
    icon: ClipboardList,
    title: "Disciplinary and Grievance Council",
    desc: "Handling student appeals, grievance submissions, gender-sensitization compliance, and academic misconduct hearings.",
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30",
    tasks: [
      "Review formal written grievances within 48 hours",
      "Facilitate Internal Complaints Committee (ICC) investigations",
      "Convene disciplinary panels on policy violations",
      "Maintain absolute confidentiality during conflict sessions",
    ],
  },
];

export default function ResponsibilitiesPage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">
            Administrative Mandate
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Key Responsibilities
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            The Student Affairs Office is charged with overseeing the non-academic aspects of student life, from housing and welfare to governance and extra-curricular clubs.
          </p>
        </div>

        {/* Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {responsibilities.map((resp, idx) => {
            const Icon = resp.icon;
            return (
              <div key={idx} className={`rounded-xl border p-7 ${resp.color} hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg p-2.5 bg-white dark:bg-slate-950 shadow-sm shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{resp.title}</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{resp.desc}</p>
                
                <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-4 space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Core Duties:</span>
                  {resp.tasks.map((task, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
