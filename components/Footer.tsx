import Link from "next/link";
import { Phone, Printer, MapPin } from "lucide-react";

import { Logo } from "@/components/Navbar";
import { siteConfig } from "@/lib/seo";

const explore = [
  { href: "/patients", label: "Patients" },
  { href: "/physicians", label: "Physicians" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

const legal = [
  { href: "/privacy-policy", label: "Privacy and Information Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/virtual-care-disclaimer", label: "Virtual Care Disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="h-14" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              Specialist-led virtual care for iron deficiency and anemia,
              available to patients across Ontario. Expert assessments,
              personalized treatment plans, and coordinated infusion
              referrals &mdash; without the wait.
            </p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
              <MapPin className="size-3.5" aria-hidden="true" />
              Proudly serving patients Ontario-wide
            </div>
          </div>

          <div>
            <h2 className="font-heading text-sm font-semibold text-text">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-semibold text-text">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary-600" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-primary-700"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Printer className="size-4 shrink-0 text-primary-600" aria-hidden="true" />
                <span>{siteConfig.faxDisplay} (fax)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved. Virtual medical services available to patients located
            in Ontario, Canada.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-text-muted/80">
          RestoreHealth does not provide emergency medical services. If you
          are experiencing a medical emergency, call 911 or go to your
          nearest emergency department immediately.
        </p>
      </div>
    </footer>
  );
}
