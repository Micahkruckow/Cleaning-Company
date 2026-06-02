import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Shield, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

const services = [
  { title: "Residential Cleaning", description: "Weekly, bi-weekly or one-time cleaning for your home.", price: "From 499 kr" },
  { title: "Commercial Cleaning", description: "Professional cleaning solutions for offices and businesses.", price: "From 799 kr" },
  { title: "Deep Cleaning", description: "Thorough top-to-bottom cleaning for move-ins, move-outs, and seasonal cleans.", price: "From 999 kr" },
];

const features = [
  { icon: CheckCircle, title: "100% Satisfaction", description: "We guarantee every clean or we come back for free." },
  { icon: Shield, title: "Insured & Vetted", description: "All cleaners are background-checked and fully insured." },
  { icon: Clock, title: "On Time, Every Time", description: "We respect your schedule and always arrive on time." },
  { icon: Star, title: "5-Star Rated", description: "Over 500 happy customers with an average 4.9 star rating." },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-24 md:py-36">
          <div className="container text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="text-sm">Trusted by 500+ customers</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              A Spotless Home,<br />Without the Effort
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">See All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="container py-20">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">What We Offer</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From routine home cleaning to full commercial contracts — we have a plan that fits.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{s.description}</p>
                  <p className="font-semibold text-primary">{s.price}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services">Learn more</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.title} className="flex flex-col items-center text-center gap-3 p-4">
                  <f.icon className="h-10 w-10 text-primary" />
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-20 text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Ready for a Cleaner Space?</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Book online in minutes. No long-term contracts required.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
