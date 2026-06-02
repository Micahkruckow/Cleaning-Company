import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <section className="container py-24">
      <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Coming soon — our story and team.
      </p>
    </section>
  );
}
