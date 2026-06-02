import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="container py-24">
      <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Coming soon — full service listings.
      </p>
    </section>
  );
}
