/** @format */

"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/CommonComponents/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/add-product", label: "Add Product" },
  { href: "/", label: "Categories" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl border border-border/70 bg-foreground text-background shadow-sm">
            TS
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Telusko
            </p>
            <p className="truncate text-base font-semibold tracking-tight">
              Storefront
            </p>
          </div>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              asChild
              variant="ghost"
              className="rounded-full px-4"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <span className="rounded-full border border-dashed border-border/80 px-3 py-2 text-sm text-muted-foreground">
            Disabled
          </span>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-card/80 px-2 py-2 shadow-sm md:flex">
            <Search className="ml-2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <Button size="sm" className="rounded-full px-4">
              Search Products
            </Button>
          </div>

          <ThemeToggle />

          <Button
            variant="outline"
            className="rounded-full border-border/70 px-4"
          >
            <ShoppingCart className="size-4" />
            Cart
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full lg:hidden"
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
