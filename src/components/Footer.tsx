import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

const serviceAreas = ["Oakville", "Burlington", "Milton", "Mississauga"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--clr-surface-2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="type-card text-primary mb-3">{siteConfig.name}</h3>
            <p className="type-small mb-4" style={{ color: "var(--clr-text-secondary)" }}>
              {siteConfig.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="badge-label">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="type-small font-heading font-bold uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Services", "About", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    href={`/${label.toLowerCase()}`}
                    className="type-small hover:text-primary transition-colors"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="type-small font-heading font-bold uppercase tracking-wider mb-3">
              Services
            </h4>
            <ul className="space-y-2">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="type-small hover:text-primary transition-colors"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="type-small font-heading font-bold uppercase tracking-wider mb-3">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2 type-small hover:text-primary transition-colors"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  <Phone className="w-4 h-4" style={{ color: "var(--clr-accent)" }} />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 type-small hover:text-primary transition-colors"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  <Mail className="w-4 h-4" style={{ color: "var(--clr-accent)" }} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span
                  className="flex items-center gap-2 type-small"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  <MapPin className="w-4 h-4" style={{ color: "var(--clr-accent)" }} />
                  {siteConfig.location.city}, {siteConfig.location.province}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold line divider + legal */}
        <div className="gold-line-divider mt-8 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 type-caption" style={{ color: "var(--clr-text-muted)" }}>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
