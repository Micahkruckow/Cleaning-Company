import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <section className="container py-24">
      <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Coming soon — tips and guides for a cleaner home.
      </p>
    </section>
  );
}
