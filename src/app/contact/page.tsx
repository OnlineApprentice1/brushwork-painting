import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free painting estimate in Oakville and Halton Region. Call, email, or fill out our form — we respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactContent />;
}
