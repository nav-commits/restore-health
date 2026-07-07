"use client";

import { motion } from "framer-motion";
import { Droplets, Gauge, Brain, Wind, BatteryLow, HeartPulse } from "lucide-react";

const CONDITIONS = [
  {
    icon: Droplets,
    title: "Iron Deficiency Anemia (IDA)",
    description:
      "Iron stores are low enough that the body cannot produce sufficient healthy red blood cells, reducing the blood's capacity to carry oxygen.",
  },
  {
    icon: Gauge,
    title: "Non-Anemic Iron Deficiency (NAID)",
    description:
      "Iron stores are depleted, but hemoglobin levels remain within a normal range. Symptoms can still be significant even without a formal anemia diagnosis.",
  },
];

const SYMPTOMS = [
  { icon: BatteryLow, label: "Fatigue" },
  { icon: Gauge, label: "Low energy" },
  { icon: Brain, label: "Brain fog" },
  { icon: HeartPulse, label: "Reduced exercise tolerance" },
  { icon: Wind, label: "Shortness of breath" },
];

export function MedicalCards() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="who-we-help-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Who We Help
          </p>
          <h2
            id="who-we-help-heading"
            className="mt-3 font-heading text-3xl font-medium text-text sm:text-4xl"
          >
            Supporting Patients Across The Iron Deficiency Spectrum
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            RestoreHealth supports patients with both Iron Deficiency Anemia
            and Non-Anemic Iron Deficiency, and anyone experiencing symptoms
            that may be linked to low iron.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CONDITIONS.map((condition, index) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-surface p-7 shadow-premium-sm"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <condition.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-medium text-text">
                {condition.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {condition.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-accent-50 p-7 sm:p-8">
          <h3 className="font-heading text-lg font-medium text-text">
            Patients experiencing symptoms such as:
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {SYMPTOMS.map((symptom) => (
              <span
                key={symptom.label}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-medium text-text ring-1 ring-border"
              >
                <symptom.icon
                  className="size-4 text-accent-600"
                  aria-hidden="true"
                />
                {symptom.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
