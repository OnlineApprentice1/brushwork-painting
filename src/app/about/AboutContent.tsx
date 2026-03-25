"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionAsymmetricSplit from "@/components/layouts/SectionAsymmetricSplit";

const credentials = [
  {
    label: "Red Seal Journeyperson",
    heading: "Trade-Certified Excellence",
    body: "Every painter on our crew holds Red Seal Journeyperson certification — the highest inter-provincial standard in the trade. It means consistent technique, professional accountability, and finishes that meet commercial specs on residential jobs.",
  },
  {
    label: "OCAD University Graduate",
    heading: "Colour as Craft",
    body: "Elena's Bachelor of Fine Arts from OCAD University isn't a marketing line — it's baked into how we approach every project. Colour theory, spatial composition, and light behaviour inform our consultations before a brush touches the wall.",
  },
  {
    label: "800+ Projects Completed",
    heading: "Trusted Across Halton",
    body: "Since 2014, we've completed over 800 interior and exterior projects across Oakville, Burlington, and Milton. That's 800 families who trusted us in their homes — and 800 reasons we take our reputation seriously.",
  },
];

export default function AboutContent() {
  return (
    <div className="pt-32">
      {/* ── 1. Hero — Asymmetric Split (7-5) ────────────────────────── */}
      <SectionAsymmetricSplit
        className="section-bg-deep section-spacious"
        ratio="7-5"
        left={
          <div className="flex flex-col gap-6">
            <Reveal animation="clip-reveal">
              <h1 className="type-hero" style={{ color: "var(--clr-text-primary)" }}>
                The Story Behind the Brush
              </h1>
            </Reveal>

            <Reveal animation="fade-up" delay={0.12}>
              <p
                className="type-body-lg"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                Elena Vasquez grew up in a home where colour was never an
                afterthought. She studied Fine Arts at OCAD University in
                Toronto — learning to see how hue, saturation, and light
                transform space — before she ever picked up a professional
                brush.
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={0.2}>
              <p
                className="type-body"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                In 2014, she launched Brushwork Painting Co. in Oakville with a
                simple premise: painting is a fine art, not a commodity. Her
                OCAD background shaped everything — from the way the team
                approaches a colour consultation to the exacting prep standards
                that set Brushwork apart. Today Elena leads a crew of Red Seal
                Journeypersons who share her conviction that a perfect finish
                begins long before the first coat goes on.
              </p>
            </Reveal>
          </div>
        }
        right={
          <Reveal animation="fade-up" delay={0.08}>
            <div className="frost-border w-full">
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop&q=80"
                alt="Elena Vasquez, owner of Brushwork Painting Co., reviewing colour swatches"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </Reveal>
        }
      />

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <div
        className="gold-line-divider mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        role="presentation"
      />

      {/* ── 2. Philosophy — Centred, max-w-3xl ──────────────────────── */}
      <section className="section-bg-gradient section-standard">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="fade-up">
            <h2
              className="type-section mb-6"
              style={{ color: "var(--clr-text-primary)" }}
            >
              60% Prep. 40% Paint. 100% Right.
            </h2>
          </Reveal>

          <Reveal animation="fade-up" delay={0.1}>
            <p
              className="type-body-lg"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Most painters rush to colour. We do the opposite. Sanding,
              priming, filling, and sealing — the work that never makes it into
              the before-and-after photo — is where a lasting finish is won or
              lost. On every Brushwork project, we spend more time preparing the
              surface than we do applying paint. That ratio feels backwards to
              clients at first. Then they see the result ten years later and
              understand why we do it that way.
            </p>
          </Reveal>

          <Reveal animation="fade-up" delay={0.18}>
            <p
              className="type-body mt-4"
              style={{ color: "var(--clr-text-muted)" }}
            >
              Proper prep means no peeling, no bubbling, no call-backs. It means
              edges that stay crisp and colours that hold true through Ontario
              winters and humid summers. It is not a selling point — it is just
              how the work is supposed to be done.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <div
        className="gold-line-divider mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        role="presentation"
      />

      {/* ── 3. Values / Credentials — 3-column card grid ────────────── */}
      <section className="section-bg-texture section-standard">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <h2
              className="type-section text-center mb-12"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Why Homeowners Choose Brushwork
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {credentials.map((item, i) => (
              <Reveal key={item.label} animation="fade-up" delay={i * 0.1}>
                <div className="card-standard flex flex-col gap-4 h-full">
                  <span className="badge-label self-start">{item.label}</span>
                  <h3
                    className="type-card"
                    style={{ color: "var(--clr-text-primary)" }}
                  >
                    {item.heading}
                  </h3>
                  <p
                    className="type-body"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <div
        className="gold-line-divider mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        role="presentation"
      />

      {/* ── 4. Community ─────────────────────────────────────────────── */}
      <section className="section-bg-warm section-standard">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="fade-up">
            <h2
              className="type-section mb-6"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Rooted in Oakville
            </h2>
          </Reveal>

          <Reveal animation="fade-up" delay={0.1}>
            <p
              className="type-body-lg mb-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              We live and work in the same neighbourhoods we paint. That matters
              to us. Brushwork has been a sponsor of the Oakville Galleries
              youth art programme since 2018, and in 2022 our crew donated three
              weekends to the Bronte Village mural project — a community-led
              public art initiative that brought colour to the harbour district.
            </p>
          </Reveal>

          <Reveal animation="fade-up" delay={0.18}>
            <p
              className="type-body mb-10"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Supporting local art education is not separate from what we do —
              it is an extension of it. Colour improves lives. Whether it is a
              bedroom repaint that finally feels like home, or a mural that gives
              a neighbourhood its identity, the principle is the same.
            </p>
          </Reveal>

          <Reveal animation="fade-up" delay={0.24}>
            <Link href="/contact" className="btn-profile inline-block">
              Start Your Project
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
