"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Paintbrush } from "lucide-react";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/config/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

const SERVICE_OPTIONS = [
  "Interior Painting",
  "Exterior Painting",
  "Colour Consultation",
  "Specialty Finishes",
  "Cabinet Refinishing",
  "Other",
];

export default function ContactContent() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMessage(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <main>
      {/* ── Map Hero ── */}
      <div className="w-full overflow-hidden rounded-b-3xl">
        <iframe
          src={siteConfig.location.mapEmbedUrl}
          title={`Map of ${siteConfig.location.city}, ${siteConfig.location.province}`}
          className="w-full h-[250px] sm:h-[350px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-hidden="true"
        />
      </div>

      {/* ── Content Below Map ── */}
      <section className="section-standard section-bg-texture pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* ── Contact Form (wider column) ── */}
            <div className="lg:col-span-3">
              <Reveal animation="fade-up" delay={0}>
                <span className="badge-label mb-4 block w-fit">Get in Touch</span>
                <h1 className="type-section text-[color:var(--clr-text-primary)] mb-3">
                  Request a Free Estimate
                </h1>
                <p className="type-body text-[color:var(--clr-text-secondary)] mb-8">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                  Every estimate includes a free colour consultation.
                </p>
              </Reveal>

              <Reveal animation="fade-up" delay={0.1}>
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                  aria-label="Contact form"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="type-small block mb-1.5 text-[color:var(--clr-text-secondary)]"
                    >
                      Full Name <span aria-hidden="true" className="text-[color:var(--clr-accent)]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      className="w-full rounded-2xl px-4 py-3 type-body bg-[color:var(--clr-surface-2)] text-[color:var(--clr-text-primary)] placeholder:text-[color:var(--clr-text-muted)] border border-[color:var(--clr-surface-3)] focus:outline-none focus:border-[color:var(--clr-primary)] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="type-small block mb-1.5 text-[color:var(--clr-text-secondary)]"
                    >
                      Email Address <span aria-hidden="true" className="text-[color:var(--clr-accent)]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      className="w-full rounded-2xl px-4 py-3 type-body bg-[color:var(--clr-surface-2)] text-[color:var(--clr-text-primary)] placeholder:text-[color:var(--clr-text-muted)] border border-[color:var(--clr-surface-3)] focus:outline-none focus:border-[color:var(--clr-primary)] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="type-small block mb-1.5 text-[color:var(--clr-text-secondary)]"
                    >
                      Phone Number <span className="type-small text-[color:var(--clr-text-muted)]">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(905) 555-0100"
                      className="w-full rounded-2xl px-4 py-3 type-body bg-[color:var(--clr-surface-2)] text-[color:var(--clr-text-primary)] placeholder:text-[color:var(--clr-text-muted)] border border-[color:var(--clr-surface-3)] focus:outline-none focus:border-[color:var(--clr-primary)] transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="type-small block mb-1.5 text-[color:var(--clr-text-secondary)]"
                    >
                      Service Needed <span aria-hidden="true" className="text-[color:var(--clr-accent)]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-2xl px-4 py-3 type-body bg-[color:var(--clr-surface-2)] text-[color:var(--clr-text-primary)] border border-[color:var(--clr-surface-3)] focus:outline-none focus:border-[color:var(--clr-primary)] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>Select a service…</option>
                      {SERVICE_OPTIONS.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="type-small block mb-1.5 text-[color:var(--clr-text-secondary)]"
                    >
                      Project Details <span aria-hidden="true" className="text-[color:var(--clr-accent)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your project — room sizes, current condition, timeline, or anything else that helps us prepare your estimate."
                      className="w-full rounded-2xl px-4 py-3 type-body bg-[color:var(--clr-surface-2)] text-[color:var(--clr-text-primary)] placeholder:text-[color:var(--clr-text-muted)] border border-[color:var(--clr-surface-3)] focus:outline-none focus:border-[color:var(--clr-primary)] transition-colors resize-y"
                    />
                  </div>

                  {/* Status messages */}
                  {status === "success" && (
                    <p
                      role="status"
                      className="type-body text-[color:var(--clr-primary)] bg-[color:var(--clr-surface-2)] rounded-2xl px-4 py-3"
                    >
                      Thanks! We&apos;ve received your request and will be in touch within 24 hours.
                    </p>
                  )}
                  {status === "error" && (
                    <p
                      role="alert"
                      className="type-body text-[color:var(--clr-accent)] bg-[color:var(--clr-surface-2)] rounded-2xl px-4 py-3"
                    >
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-profile w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Send Your Request"}
                  </button>
                </form>
              </Reveal>
            </div>

            {/* ── Contact Details Card (narrower column) ── */}
            <div className="lg:col-span-2">
              <Reveal animation="fade-up" delay={0.2}>
                <div className="card-standard frost-border h-full">
                  <h2 className="type-card text-[color:var(--clr-text-primary)] mb-6">
                    Get in Touch Directly
                  </h2>

                  <ul className="space-y-5" aria-label="Contact information">
                    {/* Phone */}
                    <li className="flex items-start gap-3">
                      <Phone
                        className="mt-0.5 shrink-0 text-[color:var(--clr-primary)]"
                        size={18}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="type-small text-[color:var(--clr-text-muted)] mb-0.5">Phone</p>
                        <a
                          href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                          className="type-body text-[color:var(--clr-text-primary)] hover:text-[color:var(--clr-primary)] transition-colors font-medium"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </li>

                    {/* Email */}
                    <li className="flex items-start gap-3">
                      <Mail
                        className="mt-0.5 shrink-0 text-[color:var(--clr-primary)]"
                        size={18}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="type-small text-[color:var(--clr-text-muted)] mb-0.5">Email</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="type-body text-[color:var(--clr-text-primary)] hover:text-[color:var(--clr-primary)] transition-colors font-medium break-all"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </li>

                    {/* Address */}
                    <li className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 shrink-0 text-[color:var(--clr-primary)]"
                        size={18}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="type-small text-[color:var(--clr-text-muted)] mb-0.5">Location</p>
                        <p className="type-body text-[color:var(--clr-text-primary)]">
                          {siteConfig.location.city}, {siteConfig.location.province}
                        </p>
                        <p className="type-small text-[color:var(--clr-text-muted)] mt-0.5">
                          Serving {siteConfig.location.serviceArea}
                        </p>
                      </div>
                    </li>

                    {/* Hours */}
                    <li className="flex items-start gap-3">
                      <Clock
                        className="mt-0.5 shrink-0 text-[color:var(--clr-primary)]"
                        size={18}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="type-small text-[color:var(--clr-text-muted)] mb-0.5">Hours</p>
                        <p className="type-body text-[color:var(--clr-text-primary)]">
                          Mon–Fri: 8am–6pm
                        </p>
                        <p className="type-body text-[color:var(--clr-text-primary)]">
                          Sat: 9am–3pm
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="gold-line-divider my-6" aria-hidden="true" />

                  {/* Colour consultation note */}
                  <div className="flex items-start gap-3">
                    <Paintbrush
                      className="mt-0.5 shrink-0 text-[color:var(--clr-accent)]"
                      size={18}
                      aria-hidden="true"
                    />
                    <p className="type-small text-[color:var(--clr-text-secondary)]">
                      Free colour consultation included with every estimate — no obligation.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section-compact section-bg-deep">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="fade-up" delay={0}>
            <p className="type-body-lg text-[color:var(--clr-text-secondary)] mb-4">
              Prefer to talk? We&apos;re happy to chat about your project.
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="btn-profile inline-flex items-center gap-2"
            >
              <Phone size={16} aria-hidden="true" />
              Call us at {siteConfig.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
