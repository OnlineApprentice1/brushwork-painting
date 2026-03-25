import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Brushwork Painting. OCAD-trained, meticulous, and trusted by 800+ Halton Region homeowners since 2014.",
};

export default function AboutPage() {
  return <AboutContent />;
}
