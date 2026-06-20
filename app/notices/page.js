import Link from "next/link";
import { ArrowLeft, Bell, CalendarDays, Megaphone } from "lucide-react";
import { notices } from "@/lib/notices";

export const metadata = {
  title: "All Notices | Student Affairs Office",
  description: "Browse all current notices and announcements from the Student Affairs Office.",
};

export default function NoticesPage() {
  return (
    <div className="bg-slate-50 py-12 transition-colors dark:bg-slate-950 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-800 dark:text-amber-500 dark:hover:text-amber-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <section className="overflow-hidden rounded-lg border border-indigo-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
          <div className="border-b border-indigo-100 bg-indigo-50/70 px-5 py-8 dark:border-slate-800 dark:bg-indigo-950/20 sm:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  All Notices
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
                  All announcements currently shown in the notice marquee are listed here.
                </p>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm dark:bg-amber-500 dark:text-slate-950">
                <Bell className="h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {notices.map((notice, index) => (
              <article
                key={notice.title}
                className="group grid gap-4 px-5 py-5 transition-colors hover:bg-indigo-50/50 dark:hover:bg-slate-900 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:px-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-50 text-sm font-black text-indigo-700 ring-1 ring-indigo-100 dark:bg-amber-950/30 dark:text-amber-500 dark:ring-amber-900/30">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {notice.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {notice.date}
                    </span>
                  </div>
                  <h2 className="text-base font-extrabold text-slate-950 transition-colors group-hover:text-indigo-700 dark:text-white dark:group-hover:text-amber-400 sm:text-lg">
                    {notice.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {notice.description}
                  </p>
                </div>

                <span className="w-fit rounded-md border border-indigo-100 px-3 py-1.5 text-xs font-bold text-indigo-600 dark:border-amber-900/40 dark:text-amber-500 sm:mt-1">
                  Active
                </span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
