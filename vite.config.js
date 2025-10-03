import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "preview",
  server: {
    port: 5173, // default, but you can change it
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // optional: import from "@/Button"
    },
  },
});
