"use client";

import { useRef } from "react";
import { useScroll, useTransform, useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionAsymmetricSplit from "@/components/layouts/SectionAsymmetricSplit";
import Reveal from "@/components/Reveal";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "30%"]
  );

  const leftContent = (
    <div className="flex flex-col gap-6">
      {/* Headline */}
      <Reveal animation="blur-sharpen">
        <h1 className="type-hero">
          Colour That Feels Like Home
        </h1>
      </Reveal>

      {/* Subheading */}
      <Reveal animation="blur-sharpen" delay={0.1}>
        <p
          className="type-body-lg"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          Oakville&rsquo;s painting specialists. Free colour consultation,
          meticulous prep, and a 5-year warranty on every brushstroke.
        </p>
      </Reveal>

      {/* CTAs */}
      <Reveal animation="fade-up" delay={0.2}>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-profile">
            Get a Free Estimate
          </Link>
          <a href="#gallery" className="btn-profile-ghost">
            View Our Work
          </a>
        </div>
      </Reveal>

      {/* Paint swatch chips */}
      <Reveal animation="fade-up" delay={0.3}>
        <div className="flex items-center gap-3 mt-2">
          <span className="sr-only">Colour palette</span>
          <span
            className="paint-swatch"
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "2rem",
              height: "2rem",
              borderRadius: "0.375rem 0.75rem 0.375rem 0.75rem",
              backgroundColor: "var(--clr-primary)",
              boxShadow: "0 2px 6px color-mix(in oklch, var(--clr-surface-1) 30%, transparent)",
              transform: "rotate(-3deg)",
            }}
          />
          <span
            className="paint-swatch"
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "2rem",
              height: "2rem",
              borderRadius: "0.75rem 0.375rem 0.75rem 0.375rem",
              backgroundColor: "var(--clr-accent)",
              boxShadow: "0 2px 6px color-mix(in oklch, var(--clr-surface-1) 30%, transparent)",
              transform: "rotate(2deg)",
            }}
          />
          <span
            className="paint-swatch"
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "2rem",
              height: "2rem",
              borderRadius: "0.5rem",
              backgroundColor: "var(--clr-primary-light)",
              boxShadow: "0 2px 6px color-mix(in oklch, var(--clr-surface-1) 30%, transparent)",
              transform: "rotate(-1deg)",
            }}
          />
        </div>
      </Reveal>
    </div>
  );

  const rightContent = (
    <Reveal animation="slide-right" delay={0.15}>
      <div className="frost-border overflow-hidden rounded-xl relative">
        <Image
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop&q=80"
          alt="Paint colour swatches spread across a surface — warm olive and terracotta tones"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </Reveal>
  );

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Parallax background layer */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ y: parallaxY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, var(--clr-primary) 0%, transparent 70%)",
            opacity: 0.18,
          }}
        />
      </motion.div>

      <SectionAsymmetricSplit
        left={leftContent}
        right={rightContent}
        ratio="7-5"
        className="section-bg-gradient radial-glow section-spacious pt-24"
      />
    </div>
  );
}
