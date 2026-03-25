"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Palette } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Colour consultation strip */}
      <div
        className="hidden sm:block"
        style={{ background: "var(--clr-surface-2)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-2 type-caption" style={{ color: "var(--clr-text-muted)" }}>
            <Palette className="w-3.5 h-3.5" style={{ color: "var(--clr-accent)" }} />
            <span>Free Colour Consultation with Every Project</span>
          </div>
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-1.5 type-caption font-medium hover:opacity-80 transition-opacity"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            <Phone className="w-3.5 h-3.5" />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="backdrop-blur-md bg-base-100/80 border-b border-base-300/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="type-card text-primary font-heading">
            {siteConfig.name}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="type-small text-base-content/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-profile">
              Get a Free Estimate
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-base-100/95 backdrop-blur-md border-b border-base-300/50 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="type-body text-base-content/70 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 type-body py-2"
                style={{ color: "var(--clr-accent)" }}
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-profile w-fit"
              >
                Get a Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
