"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={cn(
        "group relative rounded-2xl border border-border bg-surface p-6 shadow-premium-sm transition-all hover:-translate-y-1 hover:shadow-premium",
        className
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 font-heading text-lg font-medium text-text">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">
        {description}
      </p>
    </motion.div>
  );
}
