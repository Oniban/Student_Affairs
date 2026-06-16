import { Landmark, Award, BookOpen, Compass, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Student Affairs Office | University",
  description: "Learn about the mission, vision, key responsibilities, and structural outline of the Student Affairs Office.",
};

export default function AboutPage() {
  const responsibilities = [
    {
      title: "Student Welfare & Psychological Support",
      desc: "Providing professional, confidential counseling services and wellness workshops to help students manage stress, anxiety, and academic pressures.",
    },
    {
      title: "Hostel Administration & Housing",
      desc: "Overseeing the allocation, maintenance, and student governance of all on-campus dormitories and residential complexes.",
    },
    {
      title: "Campus Activities & Club Governance",
      desc: "Supervising club charters, annual funding distribution, student elections, and organizing large-scale intercollegiate events.",
    },
    {
      title: "Financial Aid & Scholarship Auditing",
      desc: "Facilitating student application submissions for institutional merit grants, need-based scholarships, and external bursaries.",
    },
    {
      title: "Grievance Redressal & Disciplinary Committee",
      desc: "Maintaining code of conduct guidelines, addressing student disputes, and managing the anti-ragging compliance office.",
    },
    {
      title: "Sports & Physical Education",
      desc: "Managing gymnasium operations, coordinating inter-varsity athletic meets, and supporting student fitness initiatives.",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">
            Who We Are
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            About the Student Affairs Office
          </h1>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            The Student Affairs Office (SAO) acts as a primary bridge between the student body and university administration. We design programs and render services that promote student learning, health, and holistic personal growth outside the standard academic classroom environment.
          </p>
        </div>

        {/* Vision & Mission Row */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 p-8 hover:border-indigo-200 dark:hover:border-amber-900/40 transition-colors">
            <div className="inline-flex rounded-lg bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-950/40 dark:text-amber-500 mb-5">
              <Compass className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Our Vision
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              To build an inclusive, collaborative, and vibrant campus ecosystem that fosters integrity, character development, global awareness, and self-advocacy in every student, allowing them to lead meaningful lives.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 p-8 hover:border-indigo-200 dark:hover:border-amber-900/40 transition-colors">
            <div className="inline-flex rounded-lg bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-950/40 dark:text-amber-500 mb-5">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Our Mission
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              We empower students by supplying reliable health support, comfortable residential housing, diverse extra-curricular engagement channels, leadership development programs, and a safe space for addressing individual concerns.
            </p>
          </div>
        </section>

        {/* Key Responsibilities Grid */}
        <section className="mb-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Key Responsibilities
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Our office handles several key administrative and support functions to keep the student ecosystem functioning efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {responsibilities.map((resp, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-5 rounded-lg border border-slate-100 dark:border-slate-900 hover:border-slate-200 dark:hover:border-slate-800 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {resp.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {resp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
