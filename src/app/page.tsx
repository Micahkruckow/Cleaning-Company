import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Star,
  Shield,
  Clock,
  Phone,
  CalendarCheck,
  Sparkles,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Recurring or one-time cleaning tailored to your home. We handle every room so you can focus on what matters.",
    price: "From 499 kr",
    href: "/services#residential",
    badge: "Most Popular",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Keep your office or business spotless with flexible scheduling that never disrupts your workflow.",
    price: "From 799 kr",
    href: "/services#commercial",
    badge: null,
  },
  {
    title: "Deep Cleaning",
    description:
      "Top-to-bottom scrub for move-ins, move-outs, post-renovation, or a seasonal reset of any space.",
    price: "From 999 kr",
    href: "/services#deep",
    badge: "Thoroughness Guaranteed",
  },
];

const trustBadges = [
  { icon: Shield, label: "Fully Insured" },
  { icon: CheckCircle, label: "Background-Checked Staff" },
  { icon: Star, label: "4.9★ Average Rating" },
  { icon: ThumbsUp, label: "500+ Happy Customers" },
];

const features = [
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description:
      "Not happy? We come back within 24 hours and reclean — completely free of charge.",
  },
  {
    icon: Shield,
    title: "Insured & Vetted",
    description:
      "Every cleaner is fully background-checked, insured, and trained to our strict standards.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    description:
      "We respect your schedule. You'll get a reminder the day before and a notification when we arrive.",
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly Products",
    description:
      "We use certified, non-toxic cleaning products that are safe for children, pets, and the planet.",
  },
];

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Get a Free Quote",
    description: "Fill in our quick form or call us. We'll tailor a plan and price to your needs.",
  },
  {
    step: "02",
    icon: CalendarCheck,
    title: "Book Your Clean",
    description: "Pick a date and time that works for you. No long-term contracts required.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "We Clean, You Relax",
    description: "Our team arrives on time, fully equipped. You come home to a spotless space.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Copenhagen",
    rating: 5,
    text: "SparkClean has transformed my home routine. The team is professional, thorough, and always on time. I wouldn't use anyone else.",
  },
  {
    name: "Thomas R.",
    location: "Frederiksberg",
    rating: 5,
    text: "We use SparkClean for our entire office building. Reliable, flexible scheduling and the results are always perfect.",
  },
  {
    name: "Anna K.",
    location: "Hellerup",
    rating: 5,
    text: "The deep clean before our move was exceptional. Every corner was spotless. Worth every krone.",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-background py-24 md:py-36">
          <div className="container text-center space-y-8 max-w-3xl mx-auto">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
              ✦ Trusted by 500+ customers across Copenhagen
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              A Spotless Space,<br />
              <span className="text-primary">Without the Effort</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Professional cleaning for homes and businesses. Reliable, eco-friendly,
              and backed by a 100% satisfaction guarantee.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="h-12 px-8 text-base" render={<Link href="/contact" />}>
                Get a Free Quote
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base" render={<Link href="/services" />}>
                See All Services
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-4">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <b.icon className="h-4 w-4 text-primary" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section className="container py-24">
          <div className="text-center mb-14 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Cleaning Services for Every Need
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From weekly home visits to full commercial contracts — flexible plans, transparent pricing.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="relative flex flex-col hover:shadow-lg transition-shadow border-border/60">
                {s.badge && (
                  <div className="absolute -top-3 left-5">
                    <Badge className="text-xs px-3 py-1">{s.badge}</Badge>
                  </div>
                )}
                <CardHeader className="pb-3 pt-7">
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.description}</p>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary text-lg">{s.price}</span>
                    <Button variant="outline" size="sm" render={<Link href={s.href} />}>
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── How It Works ─────────────────────────────────────── */}
        <section className="bg-muted/40 border-y py-24">
          <div className="container">
            <div className="text-center mb-14 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Simple Process</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How It Works</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Getting a cleaner home takes less than 2 minutes to arrange.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              {steps.map((s, i) => (
                <div key={s.step} className="flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <s.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-xs font-bold bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ─────────────────────────────────────── */}
        <section className="container py-24">
          <div className="text-center mb-14 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Promise</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why SparkClean?</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-3 p-6 rounded-xl border bg-card hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ──────────────────────────────────────── */}
        <section className="bg-muted/40 border-y py-24">
          <div className="container">
            <div className="text-center mb-14 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Reviews</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Customers Say</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {testimonials.map((t) => (
                <Card key={t.name} className="border-border/60">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────── */}
        <section className="container py-24">
          <div className="rounded-2xl bg-primary px-8 py-16 text-center space-y-6 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready for a Cleaner Space?
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto text-lg">
              Book online in minutes. No long-term contracts. 100% satisfaction guaranteed.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-8 text-base"
                render={<Link href="/contact" />}
              >
                Book Now — It&apos;s Free
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-12 px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                render={<Link href={`tel:${siteConfig.phone}`} />}
              >
                {siteConfig.phone}
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
