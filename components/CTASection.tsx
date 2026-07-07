"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTALink {
  label: string;
  href: string;
  external?: boolean;
  icon?: "download" | "arrow";
}

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: CTALink;
  secondaryCta?: CTALink;
  tone?: "brand" | "muted";
  className?: string;
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  tone = "brand",
  className,
}: CTASectionProps) {
  const isBrand = tone === "brand";

  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "relative overflow-hidden rounded-3xl px-6 py-12 text-center shadow-premium sm:px-12 sm:py-16",
            isBrand
              ? "bg-gradient-to-br from-primary-600 to-primary-700 text-white"
              : "bg-muted text-text"
          )}
        >
          <div
            className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-accent-400/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            {eyebrow && (
              <p
                className={cn(
                  "text-sm font-semibold uppercase tracking-wide",
                  isBrand ? "text-accent-400" : "text-primary-600"
                )}
              >
                {eyebrow}
              </p>
            )}
            <h2 className="mt-3 font-heading text-3xl font-medium text-balance sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p
                className={cn(
                  "mt-4 text-lg leading-relaxed",
                  isBrand ? "text-white/85" : "text-text-muted"
                )}
              >
                {description}
              </p>
            )}

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton cta={primaryCta} isBrand={isBrand} primary />
              {secondaryCta && (
                <CTAButton cta={secondaryCta} isBrand={isBrand} />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTAButton({
  cta,
  isBrand,
  primary,
}: {
  cta: CTALink;
  isBrand: boolean;
  primary?: boolean;
}) {
  const Icon = cta.icon === "download" ? Download : ArrowRight;
  const linkProps = cta.external
    ? { href: cta.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: cta.href };

  return (
    <Button
      render={<Link {...linkProps} />}
      size="lg"
      variant={primary ? "default" : "outline"}
      className={cn(
        "h-12 gap-2 px-6 text-base",
        primary && isBrand && "bg-white text-primary-700 hover:bg-white/90",
        primary && !isBrand && "bg-primary-600 text-white hover:bg-primary-700",
        !primary && isBrand && "border-white/40 bg-transparent text-white hover:bg-white/10",
        !primary && !isBrand && "border-primary-200 bg-transparent text-primary-700 hover:bg-primary-50"
      )}
    >
      {cta.label}
      <Icon className="size-4" aria-hidden="true" />
    </Button>
  );
}
