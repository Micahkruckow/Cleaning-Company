import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <Sparkles className="h-4 w-4 text-primary" />
            {siteConfig.name}
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            {siteConfig.description}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/services#residential" className="hover:text-foreground transition-colors">Residential Cleaning</Link></li>
            <li><Link href="/services#commercial" className="hover:text-foreground transition-colors">Commercial Cleaning</Link></li>
            <li><Link href="/services#deep" className="hover:text-foreground transition-colors">Deep Cleaning</Link></li>
            <li><Link href="/services#move" className="hover:text-foreground transition-colors">Move-In / Move-Out</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <Separator />
      <div className="container py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
