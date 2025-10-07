import React from "react";
import Button from "./Button";

export default function ButtonShowcase() {
  const variants = [
    "primary",
    "secondary",
    "outline",
    "ghost",
    "success",
    "warning",
    "danger",
  ];

  const sizes = ["sm", "md", "lg"];

  return (
    <div className="space-y-10">
      {/* Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">Variants</h2>
        <div className="flex flex-wrap gap-4">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">Sizes</h2>
        {variants.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="font-medium text-neutral-600 capitalize">
              {variant}
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              {sizes.map((size) => (
                <Button
                  key={`${variant}-${size}`}
                  variant={variant}
                  size={size}
                >
                  {`${variant} (${size})`}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* States */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" className="ring-2 ring-brand-dark">
            Focused
          </Button>
        </div>
      </section>
    </div>
  );
}
