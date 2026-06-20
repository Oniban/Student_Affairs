import FAQAccordion from "../../components/FAQAccordion";
import { FileText, Download, ExternalLink, Table2 } from "lucide-react";

export const metadata = {
  title: "Resources & Support | Student Affairs Office",
  description: "Access official forms, PDF downloads, policies, and frequently asked questions from the Student Affairs Office.",
};

// const downloads = [
//   { name: "Student Handbook 2025–26", category: "Policy", size: "2.4 MB", type: "PDF" },
//   { name: "Hostel Application Form", category: "Housing", size: "180 KB", type: "PDF" },
//   { name: "Anti-Ragging Affidavit", category: "Policy", size: "95 KB", type: "PDF" },
//   { name: "Club Registration Charter", category: "Clubs", size: "220 KB", type: "PDF" },
//   { name: "Scholarship Application Form", category: "Financial Aid", size: "310 KB", type: "PDF" },
//   { name: "Counseling Session Request Form", category: "Welfare", size: "140 KB", type: "PDF" },
//   { name: "Room Change Request Form", category: "Housing", size: "90 KB", type: "PDF" },
//   { name: "Student Grievance Submission Form", category: "Grievance", size: "160 KB", type: "PDF" },
//   { name: "Club Funding Proposal Template", category: "Clubs", size: "250 KB", type: "PDF" },
//   { name: "Academic Integrity Policy", category: "Policy", size: "1.1 MB", type: "PDF" },
// ];

const workbookUrl = "/Students%27%20Welfare%20Board.xlsx";

// Default Google Sheets document for Students' Welfare Board Workbook.
// You can replace this spreadsheet ID with your own.
const googleSheetsBaseUrl = "https://docs.google.com/spreadsheets/d/1vP4G6X6bKj3tQ2P9bW19iQ3D4iZpQ5kM2eR_k_zJ1hU";

const getSheetUrl = (sheet) => {
  if (googleSheetsBaseUrl) {
    const cleanBase = googleSheetsBaseUrl.split("/edit")[0];
    return `${cleanBase}/edit#gid=${sheet.gid || '0'}`;
  }
  return workbookUrl;
};

const workbookSheets = [
  {
    title: "Emergency Contacts",
    rows: 71,
    columns: 3,
    preview: ["IITP Hospital Helpline Numbers 24x7", "Ambulance | 9264193927", "Apollo Pharmacy | 7605035992"],
    gid: "0",
  },
  {
    title: "Bus Services",
    rows: 55,
    columns: 31,
    preview: [
      "Bus queries: Mantu ji (8986162721), BSRTC Bus Manager Rajeev Ji (+916201957967)",
      "Use the sheet for schedule updates",
      "Questions: swb@iitp.ac.in",
    ],
    gid: "983748291",
  },
  {
    title: "Gymkhana Team",
    rows: 61,
    columns: 6,
    preview: ["Students' Gymkhana 2025-26", "Position | Name | Roll No | Council Mailing ID", "Vice President | Anirudh Singh"],
    gid: "102938475",
  },
  {
    title: "Social Media Handles",
    rows: 26,
    columns: 12,
    preview: ["IIT Patna, Students' Gymkhana, Student Life IITP", "Fests: Anwesha, Celesta, Infinito", "Clubs and councils"],
    gid: "293847581",
  },
  {
    title: "Hotels nearby",
    rows: 26,
    columns: 3,
    preview: ["The Panache near Gandhi Maidan", "Hotel Maurya near Gandhi Maidan", "Hotel Chanakya, Bir Chand Patel Marg"],
    gid: "384758291",
  },
  {
    title: "Selling Items",
    rows: 102,
    columns: 9,
    preview: ["Timestamp | Email | Name | Roll no.", "Current status: FOR SALE / SOLD OUT", "Items, reference pictures, comments"],
    gid: "485720194",
  },
  {
    title: "Lost & Found",
    rows: 24,
    columns: 9,
    preview: ["Timestamp | Lost or Found | Roll No. | Contact No.", "Item specifications and photos", "Lost/found date and remarks"],
    gid: "582019482",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Resources & Support</h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Find official forms, downloadable documents, and campus policy guides.
          </p>
        </div>

        {/* SWB Workbook */}
        <section>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <a
              href={workbookUrl}
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-indigo-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-amber-500 dark:hover:bg-slate-900"
            >
              <Download className="h-4 w-4" />
              Download Workbook
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workbookSheets.map((sheet) => {
              const sheetHref = getSheetUrl(sheet);
              const isExternal = sheetHref.startsWith("http");
              return (
                <a
                  key={sheet.title}
                  href={sheetHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group block rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-indigo-200 hover:bg-indigo-50/40 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-amber-900/60 dark:hover:bg-amber-950/10"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 dark:bg-amber-950/30 dark:text-amber-500">
                        <Table2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{sheet.title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{sheet.rows} rows · {sheet.columns} columns</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-amber-500" />
                  </div>
                  <div className="space-y-1.5">
                    {sheet.preview.map((line) => (
                      <p key={line} className="line-clamp-1 text-xs text-slate-600 dark:text-slate-400">{line}</p>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Forms & Downloads
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
        </section> */}

        {/* FAQ */}
        {/* <section id="faq">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Search or browse commonly asked questions about welfare, housing, scholarships, clubs, and general office information.</p>
          <FAQAccordion />
        </section> */}

      </div>
    </div>
  );
}
