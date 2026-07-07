import { Stethoscope, MapPinned, Clock3, HeartHandshake } from "lucide-react";

import { ServiceCard } from "@/components/ServiceCard";

const TRUST_ITEMS = [
  {
    icon: <Stethoscope className="size-6" aria-hidden="true" />,
    title: "Specialist-Led Expertise",
    description:
      "Care designed by medical specialists focused on iron deficiency management.",
  },
  {
    icon: <MapPinned className="size-6" aria-hidden="true" />,
    title: "Ontario-Wide Virtual Access",
    description: "Access specialist care from anywhere in Ontario.",
  },
  {
    icon: <Clock3 className="size-6" aria-hidden="true" />,
    title: "Rapid Clinical Assessment",
    description:
      "Avoid unnecessary delays associated with traditional pathways.",
  },
  {
    icon: <HeartHandshake className="size-6" aria-hidden="true" />,
    title: "Local Infusion Partnerships",
    description: "Treatment coordination with trusted infusion clinics.",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="trust-heading" className="sr-only">
          Why patients trust RestoreHealth
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, index) => (
            <ServiceCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
