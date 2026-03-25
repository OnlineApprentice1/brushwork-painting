"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Paintbrush,
  Home,
  Palette,
  Layers,
  LayoutDashboard,
  Check,
} from "lucide-react";
import Reveal from "@/components/Reveal";

interface Service {
  id: string;
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    id: "interior",
    step: 1,
    icon: <Paintbrush size={24} aria-hidden="true" />,
    title: "Interior Painting",
    description:
      "Walls, ceilings, trim, and doors — transformed with meticulous prep and premium paints. We spend 60% of every project on preparation, because that's where quality lives.",
    features: [
      "Thorough surface preparation (fill, sand, prime)",
      "Premium Benjamin Moore and Sherwin-Williams paints",
      "Clean sharp lines on trim and ceiling cuts",
      "Furniture protection and full cleanup",
      "5-year warranty on all interior work",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80",
    imageAlt: "Freshly painted bright interior living room with clean trim lines",
  },
  {
    id: "exterior",
    step: 2,
    icon: <Home size={24} aria-hidden="true" />,
    title: "Exterior Painting",
    description:
      "Siding, trim, decks, and fences. We prep thoroughly and use weather-rated coatings built for Ontario's freeze-thaw cycles.",
    features: [
      "Power washing and scraping",
      "Caulking and wood repair",
      "Weather-rated acrylic latex coatings",
      "Cedar and wood stain specialist",
      "5-year warranty on exteriors",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80",
    imageAlt: "Painter applying fresh coat to home exterior siding in Oakville",
  },
  {
    id: "colour-consultation",
    step: 3,
    icon: <Palette size={24} aria-hidden="true" />,
    title: "Colour Consultation",
    description:
      "Free with every project. Our OCAD-trained eye helps you choose colours that complement your light, furnishings, and personal style.",
    features: [
      "In-home lighting assessment",
      "Large format colour samples",
      "Complementary palette development",
      "Accent wall colour strategy",
      "Digital colour preview",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop&q=80",
    imageAlt: "Paint colour swatches fanned out on a table during colour consultation",
  },
  {
    id: "specialty-finishes",
    step: 4,
    icon: <Layers size={24} aria-hidden="true" />,
    title: "Specialty Finishes",
    description:
      "Limewash, faux plaster, Venetian plaster, accent walls, and wallpaper. Textures that transform a room from ordinary to unforgettable.",
    features: [
      "Limewash and microcement application",
      "Venetian plaster and faux finishes",
      "Wallpaper installation and removal",
      "Decorative accent walls",
      "Colour wash and rag rolling techniques",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop&q=80",
    imageAlt: "Venetian plaster accent wall with rich textured surface in warm tones",
    badge: "OCAD-Trained Artisan",
    featured: true,
  },
  {
    id: "cabinets",
    step: 5,
    icon: <LayoutDashboard size={24} aria-hidden="true" />,
    title: "Cabinet Refinishing",
    description:
      "Kitchen and bathroom cabinets sprayed to a factory-smooth finish. A fraction of the cost of full replacement, twice the visual impact.",
    features: [
      "Professional spray application",
      "Factory-quality smooth finish",
      "Hardware removal and reinstallation",
      "50+ cabinet colour options",
      "3-year cabinet warranty",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop&q=80",
    imageAlt: "Freshly refinished white kitchen cabinets with smooth factory finish",
  },
];

export default function ServicesContent() {
  return (
    <div className="pt-32 section-bg-deep min-h-screen">
      {/* Page header */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <Reveal animation="fade-up">
          <p
            className="badge-label mb-4"
            style={{ color: "var(--clr-accent)", background: "color-mix(in oklch, var(--clr-accent) 10%, transparent)" }}
          >
            Oakville &amp; Halton Region
          </p>
        </Reveal>
        <Reveal animation="fade-up" delay={0.07}>
          <h1 className="type-hero" style={{ color: "var(--clr-text-primary)" }}>
            What We Do
          </h1>
        </Reveal>
        <Reveal animation="fade-up" delay={0.14}>
          <p
            className="type-body-lg mt-4 max-w-2xl"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Five services. One standard: thorough prep, premium materials, and a
            clean finish that lasts. Every project backed by our written warranty.
          </p>
        </Reveal>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative">
          {/* Vertical timeline line — desktop only */}
          <div
            className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5"
            style={{ background: "var(--clr-surface-3)" }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-20">
            {services.map((service, index) => (
              <Reveal
                key={service.id}
                animation="fade-up"
                delay={index * 0.1}
              >
                <article
                  id={service.id}
                  className={`relative flex flex-col lg:flex-row gap-8 lg:gap-12 lg:pl-24 scroll-mt-32 ${
                    service.featured ? "card-featured" : "card-standard"
                  }`}
                >
                  {/* Step indicator — timeline node */}
                  <div
                    className="hidden lg:flex absolute left-0 top-6 items-center justify-center w-16 h-16 rounded-full shrink-0 z-10"
                    style={{
                      background: "var(--clr-primary)",
                      color: "var(--clr-surface-1)",
                      boxShadow: "0 0 0 4px var(--clr-surface-1), 0 0 0 6px var(--clr-surface-3)",
                    }}
                    aria-hidden="true"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.125rem",
                      }}
                    >
                      {service.step}
                    </span>
                  </div>

                  {/* Mobile step dot */}
                  <div className="lg:hidden flex items-center gap-3 mb-2">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                      style={{
                        background: "var(--clr-primary)",
                        color: "var(--clr-surface-1)",
                      }}
                      aria-hidden="true"
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                        }}
                      >
                        {service.step}
                      </span>
                    </div>
                    <div
                      className="flex-1 h-px"
                      style={{ background: "var(--clr-surface-3)" }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content column */}
                  <div className="flex-1 min-w-0">
                    {/* Icon + title + badge row */}
                    <div className="flex flex-wrap items-start gap-3 mb-4">
                      <span
                        className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                        style={{
                          background: "color-mix(in oklch, var(--clr-primary) 12%, transparent)",
                          color: "var(--clr-primary)",
                        }}
                      >
                        {service.icon}
                      </span>
                      <h2
                        className="type-section flex-1"
                        style={{ color: "var(--clr-text-primary)" }}
                      >
                        {service.title}
                      </h2>
                      {service.badge && (
                        <span className="badge-label self-center">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p
                      className="type-body-lg mb-6"
                      style={{ color: "var(--clr-text-secondary)" }}
                    >
                      {service.description}
                    </p>

                    {/* Feature list */}
                    <ul className="flex flex-col gap-3 mb-8" aria-label={`${service.title} features`}>
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            size={18}
                            className="shrink-0 mt-0.5"
                            style={{ color: "var(--clr-primary)" }}
                            aria-hidden="true"
                          />
                          <span
                            className="type-body"
                            style={{ color: "var(--clr-text-secondary)" }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="btn-profile-ghost inline-block text-center"
                    >
                      Book This Service
                    </Link>
                  </div>

                  {/* Image column */}
                  <div className="w-full lg:w-80 xl:w-96 shrink-0">
                    <div
                      className="relative overflow-hidden rounded-2xl aspect-[4/3]"
                      style={{
                        boxShadow: "0 4px 24px color-mix(in oklch, var(--clr-surface-1) 20%, transparent)",
                      }}
                    >
                      <Image
                        src={service.imageUrl}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 384px"
                        className="object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA band */}
      <div
        className="section-bg-gradient section-compact border-t"
        style={{ borderColor: "var(--clr-surface-3)" }}
      >
        <Reveal animation="fade-up">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              className="type-section mb-3"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Not sure which service you need?
            </h2>
            <p
              className="type-body-lg mb-6"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Call us — we'll walk through your project and give you an honest
              recommendation, no sales pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-profile inline-block">
                Get a Free Painting Estimate
              </Link>
              <a
                href="tel:+19055550283"
                className="btn-profile-ghost inline-block"
              >
                Call (905) 555-0283
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
