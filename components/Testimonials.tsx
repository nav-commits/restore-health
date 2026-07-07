"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

interface TestimonialsProps {
  title?: string;
  description?: string;
  items?: Testimonial[];
}

/**
 * Sample/placeholder testimonials only. Replace with real, consented patient
 * quotes and confirm wording against CPSO advertising guidance before launch.
 */
const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I'd been on a hospital waitlist for months. RestoreHealth connected me with a specialist within days, all from my living room.",
    name: "Sarah M.",
    location: "Ottawa, ON",
  },
  {
    quote:
      "The virtual visit was thorough and easy to fit around my work schedule. My referral to a local infusion clinic was arranged quickly.",
    name: "James T.",
    location: "London, ON",
  },
  {
    quote:
      "Clear explanations, a real treatment plan, and no unnecessary trips to the hospital. Exactly the kind of care I was hoping to find.",
    name: "Priya R.",
    location: "Mississauga, ON",
  },
];

export function Testimonials({
  title = "Trusted By Patients Across Ontario",
  description = "Real experiences from patients who found a faster path to specialist iron care.",
  items = DEFAULT_TESTIMONIALS,
}: TestimonialsProps) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Patient Experiences
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-heading text-3xl font-medium text-text sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-premium-sm"
            >
              <Quote
                className="size-7 text-primary-200"
                aria-hidden="true"
                fill="currentColor"
              />
              <div className="mt-3 flex gap-0.5 text-accent-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-text">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium text-text-muted">
                {item.name} &middot; {item.location}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
