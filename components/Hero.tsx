"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Video, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  trustBadges?: string[];
  size?: "large" | "compact";
  showVisual?: boolean;
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      <div
        className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 shadow-premium"
        aria-hidden="true"
      />
      <div
        className="absolute -right-6 -top-6 size-28 rounded-full bg-accent-400/90 blur-0"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 rounded-[2.5rem] opacity-30 [background:radial-gradient(circle_at_30%_20%,white,transparent_55%)]"
        aria-hidden="true"
      />

      <div className="absolute inset-6 flex flex-col justify-between rounded-[1.75rem] bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur-sm">
        <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-primary-700 w-fit">
          <Video className="size-3.5" aria-hidden="true" />
          Virtual Specialist Visit
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl bg-white/95 p-4 shadow-premium-sm">
            <p className="text-xs font-medium text-text-muted">
              Ferritin &amp; Hemoglobin Review
            </p>
            <div className="mt-2 flex items-end gap-1.5">
              <span className="h-8 w-2 rounded-full bg-secondary-400" />
              <span className="h-12 w-2 rounded-full bg-primary-500" />
              <span className="h-16 w-2 rounded-full bg-accent-500" />
              <span className="h-10 w-2 rounded-full bg-primary-400" />
              <span className="h-14 w-2 rounded-full bg-secondary-500" />
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-accent-400/95 px-4 py-3 text-white shadow-premium-sm">
            <Zap className="size-4 shrink-0" aria-hidden="true" />
            <p className="text-sm font-medium">
              Energy &amp; symptom improvement tracked at every visit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero({
  eyebrow = "Virtual Specialist Care · Ontario",
  title,
  description,
  primaryCta,
  secondaryCta,
  trustBadges,
  size = "large",
  showVisual = true,
}: HeroProps) {
  const compact = size === "compact";

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-primary-50/70 via-background to-background",
        compact ? "py-16 sm:py-20" : "py-16 sm:py-24 lg:py-28"
      )}
    >
      <div
        className="pointer-events-none absolute -top-40 right-0 size-[32rem] rounded-full bg-primary-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid items-center gap-12",
            !compact && showVisual && "lg:grid-cols-2"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(compact && "mx-auto max-w-3xl text-center")}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-primary-100">
              <ShieldCheck className="size-4" aria-hidden="true" />
              {eyebrow}
            </span>

            <h1
              className={cn(
                "mt-6 font-heading font-medium tracking-tight text-text text-balance",
                compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl lg:text-6xl"
              )}
            >
              {title}
            </h1>

            <p
              className={cn(
                "mt-6 text-lg leading-relaxed text-text-muted",
                !compact && "max-w-xl",
                compact && "mx-auto max-w-2xl"
              )}
            >
              {description}
            </p>

            {(primaryCta || secondaryCta) && (
              <div
                className={cn(
                  "mt-8 flex flex-col gap-3 sm:flex-row",
                  compact && "justify-center"
                )}
              >
                {primaryCta && (
                  <Button
                    render={<Link href={primaryCta.href} />}
                    size="lg"
                    className="h-12 bg-primary-600 px-6 text-base text-white hover:bg-primary-700"
                  >
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    render={<Link href={secondaryCta.href} />}
                    size="lg"
                    variant="outline"
                    className="h-12 border-primary-200 px-6 text-base text-primary-700 hover:bg-primary-50"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}

            {trustBadges && trustBadges.length > 0 && (
              <div
                className={cn(
                  "mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-muted",
                  compact && "justify-center"
                )}
              >
                {trustBadges.map((badge) => (
                  <span key={badge} className="flex items-center gap-2">
                    <ShieldCheck
                      className="size-4 shrink-0 text-primary-600"
                      aria-hidden="true"
                    />
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {!compact && showVisual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <HeroVisual />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
