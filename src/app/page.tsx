import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import WaveDivider from "@/components/effects/WaveDivider";

const GallerySection = dynamic(
  () => import("@/components/home/GallerySection")
);
const ServicesSection = dynamic(
  () => import("@/components/home/ServicesSection")
);
const TestimonialsSection = dynamic(
  () => import("@/components/home/TestimonialsSection")
);
const AboutPreview = dynamic(() => import("@/components/home/AboutPreview"));
const CtaSection = dynamic(() => import("@/components/home/CtaSection"));

export default function Home() {
  return (
    <>
      {/* 1. Hero — asymmetric split with paint swatches */}
      <HeroSection />

      <WaveDivider color="var(--clr-surface-2)" variant="gentle" />

      {/* 2. Gallery — portfolio-led, offset grid */}
      <GallerySection />

      <WaveDivider color="var(--clr-surface-1)" variant="organic" flip />

      {/* 3. Services — bento grid with featured specialty finishes */}
      <ServicesSection />

      <WaveDivider color="var(--clr-surface-2)" variant="sharp" />

      {/* 4. Testimonials — stacked frost-border cards */}
      <TestimonialsSection />

      <WaveDivider color="var(--clr-surface-1)" variant="gentle" flip />

      {/* 5. About preview — asymmetric split reversed */}
      <AboutPreview />

      <WaveDivider color="var(--clr-surface-3)" variant="organic" />

      {/* 6. CTA — full-bleed, no animation */}
      <CtaSection />
    </>
  );
}
