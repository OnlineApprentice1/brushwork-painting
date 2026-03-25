export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  owner: string;
  phone: string;
  email: string;
  location: {
    city: string;
    province: string;
    serviceArea: string;
    mapEmbedUrl?: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
  services: {
    name: string;
    slug: string;
    description: string;
    icon: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Brushwork Painting Co.",
  tagline: "Colour That Feels Like Home",
  description:
    "Interior and exterior painting specialists in Oakville, Ontario. Free colour consultation, specialty finishes, and a 5-year warranty on every project. Serving Halton Region since 2014.",
  url: "https://brushworkpainting.ca",
  owner: "Elena Vasquez",
  phone: "(905) 555-0283",
  email: "hello@brushworkpainting.ca",
  location: {
    city: "Oakville",
    province: "Ontario",
    serviceArea:
      "Oakville, Burlington, Milton, Mississauga, and surrounding Halton Region",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92200.12345678901!2d-79.6877!3d43.4675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5b9a5f739805%3A0x5037b28c7231d60!2sOakville%2C%20ON!5e0!3m2!1sen!2sca!4v1711300000000",
  },
  social: {
    instagram: "#",
    facebook: "#",
  },
  services: [
    {
      name: "Interior Painting",
      slug: "interior",
      description:
        "Walls, ceilings, trim, and doors — transformed with meticulous prep work and premium paints. Every room gets a fresh start.",
      icon: "Paintbrush",
    },
    {
      name: "Exterior Painting",
      slug: "exterior",
      description:
        "Siding, trim, decks, and fences. We prep thoroughly and use weather-rated coatings built for Ontario's freeze-thaw cycles.",
      icon: "Home",
    },
    {
      name: "Colour Consultation",
      slug: "colour-consultation",
      description:
        "Free with every project. Our OCAD-trained eye helps you choose colours that work with your light, furnishings, and style.",
      icon: "Palette",
    },
    {
      name: "Specialty Finishes",
      slug: "specialty-finishes",
      description:
        "Limewash, faux plaster, Venetian plaster, accent walls, and wallpaper installation. Textures that make a room unforgettable.",
      icon: "Layers",
    },
    {
      name: "Cabinet Refinishing",
      slug: "cabinets",
      description:
        "Kitchen and bathroom cabinets sprayed to a factory-smooth finish. A fraction of the cost of replacement, twice the impact.",
      icon: "LayoutDashboard",
    },
  ],
} as const;
