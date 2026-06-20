import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Vision & Mission", href: "/vision-mission" },
    { name: "Key Responsibilities", href: "/responsibilities" },
    { name: "Major Initiatives", href: "/initiatives" },
    { name: "Resources & Forms", href: "/resources" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* Column 1: Institute & Office Details */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="IIT Patna Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h2 className="font-bold text-lg text-slate-900 dark:text-white">
                  Office of Student Affairs
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  IIT Patna
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              The Office of Student Affairs at IIT Patna is dedicated to
              supporting the holistic development of students through welfare
              initiatives, extracurricular engagement, leadership development,
              and a vibrant campus life.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  Indian Institute of Technology Patna
                  <br />
                  Bihta, Patna – 801106
                  <br />
                  Bihar, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                <span>+91 6115 233 000</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                <span>studentaffairs@iitp.ac.in</span>
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
                    className="text-sm text-slate-600 hover:text-red-700 dark:text-slate-400 dark:hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Indian Institute of Technology Patna.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <Link
              href="/policies"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              Student Policies
            </Link>

            <Link
              href="/privacy"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
