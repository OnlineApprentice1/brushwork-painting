import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior painting, exterior painting, colour consultation, specialty finishes, and cabinet refinishing in Oakville and Halton Region.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
