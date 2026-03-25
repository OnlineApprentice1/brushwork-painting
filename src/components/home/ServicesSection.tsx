"use client";

import SectionBentoGrid from "@/components/layouts/SectionBentoGrid";
import Reveal from "@/components/Reveal";
import { Paintbrush, Home, Layers, Palette, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "interior-painting",
    title: "Interior Painting",
    icon: Paintbrush,
    description:
      "Walls, ceilings, trim, and doors. Meticulous prep, premium paints, clean lines.",
    cardClass: "card-standard",
    featured: false,
    badge: null,
    colSpan: "",
  },
  {
    id: "exterior-painting",
    title: "Exterior Painting",
    icon: Home,
    description:
      "Siding, trim, decks, and fences. Weather-rated coatings for Ontario's seasons.",
    cardClass: "card-standard",
    featured: false,
    badge: null,
    colSpan: "",
  },
  {
    id: "specialty-finishes",
    title: "Specialty Finishes",
    icon: Layers,
    description:
      "Limewash, faux plaster, Venetian plaster, accent walls, and wallpaper. Textures that make a room unforgettable.",
    cardClass: "card-featured",
    featured: true,
    badge: "OCAD-Trained Artisan",
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "colour-consultation",
    title: "Colour Consultation",
    icon: Palette,
    description:
      "Free with every project. We help you choose colours that work with your light and style.",
    cardClass: "card-standard",
    featured: false,
    badge: null,
    colSpan: "",
  },
  {
    id: "cabinet-refinishing",
    title: "Cabinet Refinishing",
    icon: LayoutDashboard,
    description:
      "Kitchen and bathroom cabinets sprayed to a factory-smooth finish.",
    cardClass: "card-standard",
    featured: false,
    badge: null,
    colSpan: "",
  },
];

export default function ServicesSection() {
  return (
    <SectionBentoGrid columns={3} className="section-bg-gradient section-standard">
      {/* Heading block — full width */}
      <Reveal
        animation="slide-left"
        delay={0}
        className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-3"
      >
        <h2 className="type-section text-left">Painting Services</h2>
        <p className="type-body-lg text-left max-w-2xl">
          Every project starts with colour consultation and ends with a 5-year warranty.
        </p>
      </Reveal>

      {/* Service cards */}
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Reveal
            key={service.id}
            animation="slide-left"
            delay={(index + 1) * 0.1}
            className={service.colSpan}
          >
            <div className={`${service.cardClass} h-full flex flex-col gap-4`}>
              {/* Icon */}
              <div
                className="relative w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "var(--clr-primary)", opacity: 0.15 }}
                />
                <Icon
                  size={20}
                  style={{ color: "var(--clr-primary)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Title + optional badge */}
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="type-card">{service.title}</h3>
                {service.badge && (
                  <span className="badge-label">{service.badge}</span>
                )}
              </div>

              {/* Description */}
              <p className="type-body flex-1">{service.description}</p>

              {/* CTA */}
              <div>
                <Link
                  href={`/services#${service.id}`}
                  className="btn-profile-ghost"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Reveal>
        );
      })}
    </SectionBentoGrid>
  );
}
