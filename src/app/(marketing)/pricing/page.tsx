import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <section className="container py-24">
      <h1 className="text-4xl font-bold tracking-tight">Pricing</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Coming soon — transparent pricing plans.
      </p>
    </section>
  );
}
