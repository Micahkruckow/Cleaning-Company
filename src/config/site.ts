export const siteConfig = {
  name: "SparkClean",
  description:
    "Professional cleaning services for homes and businesses. Trusted, reliable, and thorough.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.CONTACT_EMAIL ?? "hello@sparkclean.dk",
  phone: "+45 12 34 56 78",
  address: "Cleaning Street 1, 1234 Copenhagen",
  socials: {
    facebook: "https://facebook.com/sparkclean",
    instagram: "https://instagram.com/sparkclean",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};
