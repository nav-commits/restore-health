"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/patients", label: "Patients" },
  { href: "/physicians", label: "Physicians" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="RestoreHealth - Evidence. Optimize. Renew."
      width={801}
      height={312}
      priority
      className={cn("h-12 w-auto", className)}
    />
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="RestoreHealth home"
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors hover:bg-muted",
                  active ? "text-primary-700" : "text-text/80 hover:text-text"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<Link href="/contact" />}
            className="bg-primary-600 text-white hover:bg-primary-700"
          >
            Request a Consultation
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5" />
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="flex w-[85%] flex-col p-0">
            <SheetHeader className="border-b border-border p-4">
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav
              className="flex flex-col gap-1 p-4"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted",
                    pathname === link.href ? "text-primary-700" : "text-text"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <Button
                render={<Link href="/contact" onClick={() => setOpen(false)} />}
                className="w-full bg-primary-600 text-white hover:bg-primary-700"
              >
                Request a Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
