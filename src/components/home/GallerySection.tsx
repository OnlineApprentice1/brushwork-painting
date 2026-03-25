"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=800&fit=crop&q=80",
    alt: "Interior painting in progress — warm-toned living space in Old Oakville",
    name: "Whole-Home Interior",
    location: "Old Oakville",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=450&fit=crop&q=80",
    alt: "Freshly painted exterior of a heritage home in Bronte Village",
    name: "Exterior Refresh",
    location: "Bronte Village",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=600&fit=crop&q=80",
    alt: "Limewash textured accent wall in a Burlington dining room",
    name: "Limewash Accent Wall",
    location: "Burlington",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=450&fit=crop&q=80",
    alt: "Paint colour swatches arranged during a consultation in Milton",
    name: "Colour Consultation",
    location: "Milton",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=800&fit=crop&q=80",
    alt: "Bright transformed living room with freshly painted walls and trim",
    name: "Living Room Transformation",
    location: "Oakville",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=600&fit=crop&q=80",
    alt: "Kitchen cabinets refinished in a matte finish in Mississauga",
    name: "Cabinet Refinishing",
    location: "Mississauga",
    tall: false,
  },
];

interface GalleryCardProps {
  project: (typeof projects)[number];
  index: number;
}

function GalleryCard({ project, index }: GalleryCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Reveal animation="scale-up" delay={index * 0.08}>
      <motion.div
        className="frost-border group relative overflow-hidden rounded-3xl bg-[var(--clr-surface-3)] cursor-pointer"
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                scale: 1.02,
                boxShadow:
                  "0 20px 48px color-mix(in oklch, var(--clr-primary) 18%, transparent)",
              }
        }
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{ willChange: "transform" }}
      >
        {/* Image wrapper — variable height via aspect-ratio */}
        <div
          className={`relative w-full overflow-hidden ${
            project.tall ? "aspect-[3/4]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={project.src}
            alt={project.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={80}
          />
          {/* Subtle gradient overlay at bottom for caption legibility */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, color-mix(in oklch, var(--clr-surface-1) 70%, transparent), transparent)",
            }}
          />
        </div>

        {/* Caption */}
        <div className="px-4 py-3">
          <p className="type-small font-semibold text-[var(--clr-text-primary)]">
            {project.name}
          </p>
          <p className="type-small text-[var(--clr-text-muted)]">
            {project.location}
          </p>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="section-bg-texture section-standard py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header — left-aligned */}
        <Reveal animation="fade-up">
          <div className="mb-10 md:mb-14">
            <h2 className="type-section text-[var(--clr-text-primary)]">
              Our Recent Work
            </h2>
            <p className="type-body-lg mt-3 max-w-2xl text-[var(--clr-text-secondary)]">
              From heritage homes on Lakeshore Road to modern condos in Bronte Village.
            </p>
          </div>
        </Reveal>

        {/* Masonry-style offset grid
            Desktop: 3 columns, tall cards span 2 rows
            Tablet:  2 columns
            Mobile:  1 column  */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-6
            lg:grid-rows-[repeat(6,minmax(0,1fr))]
          "
        >
          {/* Row arrangement (desktop):
              [0] tall → rows 1-2, col 1
              [1] short → row 1, col 2
              [2] short → row 1, col 3
              [3] short → row 2, col 2
              [4] tall → rows 2-3 actually we use auto rows with row-span
              [5] short → row 3, col 2
          */}

          {/* Card 0 — tall, col 1, rows 1–2 */}
          <div className="lg:row-span-2">
            <div className="h-full">
              <GalleryCard project={projects[0]} index={0} />
            </div>
          </div>

          {/* Card 1 — short, col 2, row 1 */}
          <div className="lg:col-start-2 lg:row-start-1">
            <GalleryCard project={projects[1]} index={1} />
          </div>

          {/* Card 2 — short, col 3, row 1 */}
          <div className="lg:col-start-3 lg:row-start-1">
            <GalleryCard project={projects[2]} index={2} />
          </div>

          {/* Card 3 — short, col 2, row 2 */}
          <div className="lg:col-start-2 lg:row-start-2">
            <GalleryCard project={projects[3]} index={3} />
          </div>

          {/* Card 4 — tall, col 3, rows 2–3 */}
          <div className="lg:col-start-3 lg:row-start-2 lg:row-span-2">
            <div className="h-full">
              <GalleryCard project={projects[4]} index={4} />
            </div>
          </div>

          {/* Card 5 — short, col 1–2 span OR col 2 row 3 */}
          <div className="lg:col-start-1 lg:col-span-2 lg:row-start-3">
            <GalleryCard project={projects[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
