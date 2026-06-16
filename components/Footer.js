import Link from "next/link";
import { Landmark, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Student Affairs", href: "/about" },
    { name: "Meet the Team", href: "/team" },
    { name: "Student Welfare Services", href: "/welfare" },
    { name: "Clubs & Activities", href: "/campus-life" },
    { name: "Major Initiatives", href: "/initiatives" },
    { name: "Resources & Forms", href: "/resources" },
    { name: "Frequently Asked Questions", href: "/resources#faq" },
    { name: "Contact & Location", href: "/contact" },
  ];

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Column 1: Info & Office details */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="IIT Patna Logo" className="h-7 w-auto object-contain" />
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                Student Affairs
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Supporting student success, welfare, and engagement outside the classroom. We provide resources, counselling, and campus life experiences to build a vibrant collegiate community.
            </p>
            <div className="space-y-2.5 pt-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                <span>Administration Block, Room 102<br />University Campus, Sector 4</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                <span>+1 (555) 019-9000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                <span>studentaffairs@university.edu</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-slate-100">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} University Student Affairs Office. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/resources" className="hover:text-slate-900 dark:hover:text-white">Student Policies</Link>
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
