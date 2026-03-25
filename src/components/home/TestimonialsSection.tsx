"use client";

import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";

interface Testimonial {
  quote: string;
  name: string;
  neighbourhood: string;
  projectType: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Elena helped us pick the perfect sage green for our living room — it transformed the entire feel of the house. The prep work was incredible, not a drip out of place.",
    name: "Michelle T.",
    neighbourhood: "Old Oakville",
    projectType: "Whole-Home Interior",
    stars: 5,
  },
  {
    quote:
      "We hired Brushwork for a limewash accent wall in our dining room. It's the first thing every guest comments on. True artistry.",
    name: "Ryan & Kate P.",
    neighbourhood: "Bronte Village",
    projectType: "Specialty Finish",
    stars: 5,
  },
  {
    quote:
      "Our 1920s home needed careful attention to the original trim details. The team treated every surface with respect. Five stars isn't enough.",
    name: "George L.",
    neighbourhood: "Lakeshore Road",
    projectType: "Heritage Exterior",
    stars: 5,
  },
  {
    quote:
      "Cabinet refinishing saved us $15,000 over a full kitchen reno. The finish is flawless — you'd think they were brand new.",
    name: "Anita S.",
    neighbourhood: "Burlington",
    projectType: "Cabinet Refinishing",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={18}
          aria-hidden="true"
          style={{ color: "var(--clr-accent)", fill: "var(--clr-accent)" }}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section-bg-warm radial-glow section-standard">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section heading */}
        <Reveal animation="fade-up">
          <div className="mb-12">
            <h2 className="type-section text-left">
              Kind Words from Our Clients
            </h2>
            <p
              className="type-body-lg mt-3 max-w-xl"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Every project is a collaboration. Here's what our clients have to
              say.
            </p>
          </div>
        </Reveal>

        {/* Stacked alternating testimonial cards */}
        <div className="flex flex-col gap-8">
          {testimonials.map((testimonial, index) => {
            const isEven = index % 2 === 0;
            const delay = 0.12 * index;

            return (
              <Reveal key={index} animation="fade-up" delay={delay}>
                <article
                  className={`frost-border rounded-2xl p-8 max-w-2xl ${
                    isEven ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  {/* Stars */}
                  <StarRating count={testimonial.stars} />

                  {/* Quote */}
                  <blockquote className="mt-4">
                    <p
                      className="type-body-lg"
                      style={{ color: "var(--clr-text-primary)" }}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Attribution */}
                  <footer className="mt-6 flex flex-wrap items-center gap-3">
                    <div>
                      <p
                        className="type-card font-semibold"
                        style={{ color: "var(--clr-text-primary)" }}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        className="type-small"
                        style={{ color: "var(--clr-text-secondary)" }}
                      >
                        {testimonial.neighbourhood}
                      </p>
                    </div>

                    {/* Project type badge */}
                    <span
                      className="badge-label ml-auto"
                      style={{
                        color: "var(--clr-accent)",
                        borderColor: "var(--clr-accent)",
                      }}
                    >
                      {testimonial.projectType}
                    </span>
                  </footer>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
