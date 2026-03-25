"use client";

import Image from "next/image";
import Link from "next/link";
import SectionAsymmetricSplit from "@/components/layouts/SectionAsymmetricSplit";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "10+ Years", label: "Experience" },
  { value: "800+ Projects", label: "Completed" },
  { value: "5-Year", label: "Warranty" },
];

export default function AboutPreview() {
  const imageSlot = (
    <Reveal animation="slide-left" delay={0.1}>
      <div className="frost-border overflow-hidden rounded-xl aspect-[4/3] w-full">
        <Image
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop&q=80"
          alt="Paint roller being applied to a wall during an interior painting project"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </Reveal>
  );

  const textSlot = (
    <Reveal animation="clip-reveal">
      <div className="flex flex-col gap-6">
        <h2 className="type-section" style={{ color: "var(--clr-primary)" }}>
          Painting Is Our Craft
        </h2>
        <p className="type-body-lg text-secondary">
          We started Brushwork with one belief: the best paint job is 60%
          preparation and 40% application. That philosophy — along with an
          OCAD-trained eye for colour — has earned us the trust of over 800
          Halton Region homeowners since 2014.
        </p>

        <div className="flex flex-wrap gap-6">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col">
              <span
                className="type-section font-bold leading-none"
                style={{ color: "var(--clr-accent)" }}
              >
                {stat.value}
              </span>
              <span className="type-small text-secondary mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        <div>
          <Link href="/about" className="btn-profile-ghost">
            Our Story
          </Link>
        </div>
      </div>
    </Reveal>
  );

  return (
    <SectionAsymmetricSplit
      left={imageSlot}
      right={textSlot}
      ratio="7-5"
      reverse={true}
      className="section-bg-deep section-standard"
    />
  );
}
