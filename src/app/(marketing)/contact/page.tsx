import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="container py-24">
      <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Coming soon — contact form and details.
      </p>
    </section>
  );
}
