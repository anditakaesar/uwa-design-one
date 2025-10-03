import React from "react";
import ReactDOM from "react-dom/client";

// Import Tailwind + tokens
import "../src/index.css";

// Import your design system
import { Button } from "../src";

ReactDOM.createRoot(document.getElementById("app")).render(
  <div className="p-6 space-y-4">
    <h1 className="text-2xl font-heading text-brand">My UI System</h1>
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </div>
);
