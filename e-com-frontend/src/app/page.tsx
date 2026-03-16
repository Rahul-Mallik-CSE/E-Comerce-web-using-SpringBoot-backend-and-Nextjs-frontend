/** @format */

import { ArrowRight, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import Link from "next/link";
import ProductGrid from "@/components/HomeComponents/ProductGrid";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: ShoppingBag,
    title: "Curated essentials",
    description:
      "Cleanly presented electronics and daily-use picks with a premium storefront layout.",
  },
  {
    icon: Truck,
    title: "Fast dispatch",
    description:
      "Structured like a real commerce homepage with delivery-focused utility sections.",
  },
  {
    icon: ShieldCheck,
    title: "Secure experience",
    description:
      "Black and white theme system with polished cards, spacing, and responsive behavior.",
  },
];

export default function Home() {
  return (
    <main className="surface-grid">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="surface-panel relative overflow-hidden rounded-[2rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--foreground)_12%,transparent),transparent_28%)]" />
          <div className="relative grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-14">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-border/80 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Black and white storefront
              </div>
              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Premium product browsing with a cleaner ecommerce layout.
                </h1>
                <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                  The data stays the same as your current product set, but the
                  presentation is upgraded with stronger visual hierarchy,
                  responsive spacing, and a real storefront feel.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link href="#products">
                    Shop now
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border/80 px-6"
                >
                  <Link href="/add-product">Add new product</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5 backdrop-blur-sm"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-2xl border border-border/70 bg-foreground text-background">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <ProductGrid />
      </section>
    </main>
  );
}
