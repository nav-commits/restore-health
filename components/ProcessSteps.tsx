"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Step {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: Step[];
}

export function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              {eyebrow}
            </p>
          )}
          <h2
            id="process-heading"
            className="mt-3 font-heading text-3xl font-medium text-text sm:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              {description}
            </p>
          )}
        </div>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div
            className="absolute top-8 left-0 right-0 hidden h-px bg-border md:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-premium-sm">
                {step.icon}
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white ring-4 ring-background">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-medium text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
