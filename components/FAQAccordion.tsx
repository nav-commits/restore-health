"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export function FAQAccordion({ items, defaultOpenIndex = 0 }: FAQAccordionProps) {
  return (
    <Accordion
      defaultValue={[`faq-${defaultOpenIndex}`]}
      className="divide-y divide-border rounded-2xl border border-border bg-surface px-5 shadow-premium-sm sm:px-7"
    >
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`}>
          <AccordionTrigger className="py-5 text-base font-medium text-text sm:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-text-muted">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
