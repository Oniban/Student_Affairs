import FAQAccordion from "../../components/FAQAccordion";
import { FileText, Download } from "lucide-react";

export const metadata = {
  title: "Resources & Support | Student Affairs Office",
  description: "Access official forms, PDF downloads, policies, and frequently asked questions from the Student Affairs Office.",
};

const downloads = [
  { name: "Student Handbook 2025–26", category: "Policy", size: "2.4 MB", type: "PDF" },
  { name: "Hostel Application Form", category: "Housing", size: "180 KB", type: "PDF" },
  { name: "Anti-Ragging Affidavit", category: "Policy", size: "95 KB", type: "PDF" },
  { name: "Club Registration Charter", category: "Clubs", size: "220 KB", type: "PDF" },
  { name: "Scholarship Application Form", category: "Financial Aid", size: "310 KB", type: "PDF" },
  { name: "Counseling Session Request Form", category: "Welfare", size: "140 KB", type: "PDF" },
  { name: "Room Change Request Form", category: "Housing", size: "90 KB", type: "PDF" },
  { name: "Student Grievance Submission Form", category: "Grievance", size: "160 KB", type: "PDF" },
  { name: "Club Funding Proposal Template", category: "Clubs", size: "250 KB", type: "PDF" },
  { name: "Academic Integrity Policy", category: "Policy", size: "1.1 MB", type: "PDF" },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">Help & Documents</span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Resources & Support</h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Find official forms, downloadable documents, and campus policy guides. Use the FAQ section below to get quick answers to common student queries.
          </p>
        </div>

        {/* Forms & Downloads */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Forms & Downloads</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Official forms required for hostel, scholarship, welfare, and club services. All documents are in PDF format.</p>
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900 text-left">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Document Name</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hidden sm:table-cell">Category</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hidden md:table-cell">Size</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Download</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {downloads.map((doc, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-red-50 dark:bg-red-950/20 shrink-0">
                          <FileText className="h-4 w-4 text-red-500" />
                        </div>
                        <span className="font-medium text-slate-900 dark:text-white">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 hidden sm:table-cell">
                      <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">{doc.category}</span>
                    </td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400 text-xs hidden md:table-cell">{doc.size}</td>
                    <td className="px-5 py-3.5 text-right">
                      <button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                        <Download className="h-3.5 w-3.5" />
                        {doc.type}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Search or browse commonly asked questions about welfare, housing, scholarships, clubs, and general office information.</p>
          <FAQAccordion />
        </section>

      </div>
    </div>
  );
}
