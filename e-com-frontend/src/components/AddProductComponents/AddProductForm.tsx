/** @format */

import { Button } from "@/components/ui/button";

const fields = [
  { label: "Product Name", type: "text", placeholder: "Enter product name" },
  { label: "Brand", type: "text", placeholder: "Enter brand name" },
  { label: "Price", type: "number", placeholder: "Enter price" },
  { label: "Category", type: "text", placeholder: "Enter category" },
];

export default function AddProductForm() {
  return (
    <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          New product
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Create a product entry
        </h2>
      </div>

      <form className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <label key={field.label} className="grid gap-2 text-sm font-medium">
              <span>{field.label}</span>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="h-12 rounded-2xl border border-border/70 bg-background/70 px-4 text-sm outline-none transition focus:border-foreground/40 focus:ring-4 focus:ring-foreground/10"
              />
            </label>
          ))}
        </div>

        <label className="grid gap-2 text-sm font-medium">
          <span>Description</span>
          <textarea
            rows={6}
            placeholder="Write a short product description"
            className="rounded-[1.5rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-foreground/40 focus:ring-4 focus:ring-foreground/10"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium">
          <span>Image URL</span>
          <input
            type="url"
            placeholder="Paste image URL"
            className="h-12 rounded-2xl border border-border/70 bg-background/70 px-4 text-sm outline-none transition focus:border-foreground/40 focus:ring-4 focus:ring-foreground/10"
          />
        </label>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button type="submit" size="lg" className="rounded-full px-6">
            Save product
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="rounded-full px-6"
          >
            Reset form
          </Button>
        </div>
      </form>
    </div>
  );
}
