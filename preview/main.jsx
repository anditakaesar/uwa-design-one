import React from "react";
import ReactDOM from "react-dom/client";

// Import Tailwind + tokens
import "@/index.css";

// Import your design system
import { Scaffold } from "@/index.js";

ReactDOM.createRoot(document.getElementById("app")).render(
  <Scaffold></Scaffold>
);
