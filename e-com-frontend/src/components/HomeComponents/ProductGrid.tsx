/** @format */

import ProductCard from "@/components/HomeComponents/ProductCard";
import { products } from "@/lib/products";

export default function ProductGrid() {
  return (
    <section id="products" className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Featured inventory
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Same products, stronger presentation.
          </h2>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          The product data is unchanged from your original sample. The layout
          now uses better spacing, surface depth, and clearer typography to feel
          closer to a production ecommerce UI.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
