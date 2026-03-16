/** @format */

import AddProductForm from "@/components/AddProductComponents/AddProductForm";

const AddProductPage = () => {
  return (
    <main className="surface-grid">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-start px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-panel rounded-[2rem] p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Product management
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Add products with the same visual system as the storefront.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              This page is styled to match the homepage and navbar, so
              navigation feels consistent across the application while you build
              out backend integration later.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Theme aware
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Every input, surface, and border responds to the global black
                  and white mode.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Ready to extend
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  You can later connect this form to your Spring Boot backend
                  without reworking the layout.
                </p>
              </div>
            </div>
          </div>

          <AddProductForm />
        </div>
      </section>
    </main>
  );
};

export default AddProductPage;
