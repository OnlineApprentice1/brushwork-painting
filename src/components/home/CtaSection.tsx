import Link from "next/link";
import { Phone } from "lucide-react";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";

const background = (
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(135deg, var(--clr-surface-2) 0%, var(--clr-surface-3) 100%)",
    }}
  >
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, color-mix(in srgb, var(--clr-accent) 8%, transparent) 0%, transparent 70%)",
      }}
    />
  </div>
);

export default function CtaSection() {
  return (
    <SectionFullBleed
      background={background}
      contentPosition="center"
      minHeight="min-h-[40vh]"
      className="section-spacious"
    >
      <div className="flex flex-col items-center text-center gap-6">
        <h2 className="type-section">Let's Transform Your Space</h2>
        <p className="type-body-lg max-w-2xl">
          Free colour consultation included with every estimate. Tell us about
          your project and we'll be in touch within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/contact" className="btn-profile w-full sm:w-auto">
            Get a Free Estimate
          </Link>
          <Link
            href="tel:9055550283"
            className="btn-profile-ghost w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <Phone size={18} aria-hidden="true" />
            (905) 555-0283
          </Link>
        </div>
      </div>
    </SectionFullBleed>
  );
}
