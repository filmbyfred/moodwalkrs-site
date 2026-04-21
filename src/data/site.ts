// ===== SITE-WIDE CONFIG =====
// Nav, socials, brand, contact — edit here once, used everywhere.

export const site = {
  brand: "MOODWALKRS",
  tagline: "AI Creative Studio. Quality driven.",
  url: "https://www.moodwalkrs.com",
  email: "hello@moodwalkrs.com",
  location: "Paris — Worldwide",

  nav: [
    { label: "Work",     href: "/#work" },
    { label: "Vision",   href: "/#vision" },
    { label: "Services", href: "/#services" },
    { label: "Crew",     href: "/#crew" },
    { label: "Contact",  href: "/#contact" },
  ],

  cta: { label: "Team up →", href: "/#contact" },

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/moodwalkrs" },
    { label: "LinkedIn",  href: "#" },
    { label: "Vimeo",     href: "#" },
    { label: "Behance",   href: "#" },
  ],

  footer: {
    sections: [
      {
        title: "Studio",
        links: [
          { label: "Work",     href: "/#work" },
          { label: "Vision",   href: "/#vision" },
          { label: "Services", href: "/#services" },
          { label: "Crew",     href: "/#crew" },
        ]
      },
      {
        title: "Socials",
        links: [
          { label: "Instagram", href: "https://www.instagram.com/moodwalkrs" },
          { label: "LinkedIn",  href: "#" },
          { label: "Vimeo",     href: "#" },
          { label: "Behance",   href: "#" },
        ]
      },
      {
        title: "Contact",
        links: [
          { label: "hello@moodwalkrs.com", href: "mailto:hello@moodwalkrs.com" },
          { label: "Paris · FR", href: "#" },
          { label: "Book a call", href: "#" },
        ]
      }
    ]
  }
};
