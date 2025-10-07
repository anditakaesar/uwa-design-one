import React from "react";
import ReactDOM from "react-dom/client";

// Import Tailwind + tokens
import "../src/index.css";

// Import your design system
import { Button, TypographyShowcase, ButtonShowcase, InputsShowcase } from "../src";

ReactDOM.createRoot(document.getElementById("app")).render(
  <div className="p-6 space-y-4">
    <h1 className="text-4xl font-heading text-brand">My UI System</h1>

    <div className="space-y-6">
      <h2 className="text-3xl font-heading">Typography</h2>
      <div className="flex justify-around">
        <TypographyShowcase />
      </div>
    </div>

    <div className="space-y-6">
      <h2 className="text-3xl font-heading">Buttons</h2>
      <div className="flex justify-around">
        <ButtonShowcase />
      </div>
    </div>

    <div className="space-y-6">
      <h2 className="text-3xl font-heading">Inputs</h2>
      <div className="flex justify-around">
        <InputsShowcase />
      </div>
    </div>

  </div>
);
