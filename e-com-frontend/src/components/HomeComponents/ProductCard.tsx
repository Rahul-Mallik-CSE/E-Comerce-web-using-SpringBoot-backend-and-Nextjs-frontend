/** @format */

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  name: string;
  brand: string;
  price: number;
  tag: string;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({
  name,
  brand,
  price,
  tag,
}: ProductCardProps) {
  return (
    <article className="group surface-panel overflow-hidden rounded-[1.75rem] transition-transform duration-300 hover:-translate-y-1">
      <div className="border-b border-border/60 px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {tag}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              {name}
            </h3>
          </div>
          <div className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            In stock
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-6 py-6">
        <div className="rounded-[1.5rem] border border-dashed border-border/70 bg-background/60 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Brand
          </p>
          <p className="mt-3 text-xl font-medium">{brand}</p>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight">
              {formatPrice(price)}
            </p>
          </div>

          <Button className="rounded-full px-5">
            <ShoppingCart className="size-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}
