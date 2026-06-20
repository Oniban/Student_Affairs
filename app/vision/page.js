export const metadata = {
  title: "Vision & Mission | Student Affairs Office",
  description: "Learn about the core vision, mission, and pillars that guide the Student Affairs Office at IIT Patna.",
};

const pillars = [
  {
    title: "Student Empowerment",
    desc: "Nurturing independent thought, student governance, leadership traits, and peer mentorship networks to foster future-ready global leaders.",
    color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30",
  },
  {
    title: "Holistic Wellbeing",
    desc: "Prioritizing psychological care, stress management, counseling support, and physical recreation to build a healthy student ecosystem.",
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30",
  },
  {
    title: "Ethical Integrity",
    desc: "Promoting values of academic honesty, mutual respect, gender sensitisation, and anti-ragging discipline on campus.",
    color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30",
  },
  {
    title: "Inclusive Community",
    desc: "Embracing cultural diversity, national and international integration, and regional equality for all students.",
    color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30",
  },
];

export default function VisionMissionPage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Vision & Mission
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            The core principles & philosophy that govern all operations of the Student Affairs Office.
          </p>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Vision Box */}
          <div className="relative group overflow-hidden rounded-2xl border border-indigo-100 bg-indigo-50/20 dark:border-indigo-950/40 dark:bg-slate-900/20 p-8 hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 rounded-full bg-indigo-500/5 dark:bg-indigo-500/3 blur-xl" />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base font-medium">
              To cultivate a vibrant, inclusive, and empowering student community at IIT Patna, nurturing future leaders through holistic development, mental well-being, and active campus engagement. We envision a campus where academic excellence is coupled with robust emotional wellness and ethical leadership.
            </p>
          </div>

          {/* Mission Box */}
          <div className="relative group overflow-hidden rounded-2xl border border-amber-100 bg-amber-50/20 dark:border-amber-950/40 dark:bg-slate-900/20 p-8 hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 rounded-full bg-amber-500/5 dark:bg-amber-500/3 blur-xl" />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base font-medium">
              We commit to providing comprehensive support networks, promoting student diversity and inclusion, supporting student governing bodies, and ensuring a safe, sustainable residential campus environment that fosters academic, creative, and personal growth.
            </p>
          </div>

        </div>

        {/* Pillars of Action */}
        <section>
          <div className="mb-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Pillars of Action
            </h2>
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
              <span className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className={`rounded-xl border p-7 ${pillar.color} hover:shadow-md transition-shadow`}>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{pillar.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}