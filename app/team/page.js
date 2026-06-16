import FacultyDirectory from "../../components/FacultyDirectory";

export const metadata = {
  title: "Faculty & Staff | Student Affairs Office",
  description: "Meet the deans, wardens, counselors, and faculty of the Student Affairs Office. View academic profiles, research interests, publications, and contact information.",
};

export default function TeamPage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">
            Our People
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Faculty & Staff Directory
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Our dedicated team of administrators, counselors, and faculty are here to support your academic, residential, and personal needs. Search for a staff member or filter by role.
          </p>
        </div>

        {/* Directory Component */}
        <FacultyDirectory />
      </div>
    </div>
  );
}
