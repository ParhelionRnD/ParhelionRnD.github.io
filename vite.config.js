import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ParhelionRnD.github.io/", // or "/" depending on how you're hosting
  plugins: [react()],
});
