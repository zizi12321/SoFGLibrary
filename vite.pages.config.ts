import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: "/SoFGLibrary/",
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react()],
  resolve: {
    alias: {
      "next/image": fileURLToPath(new URL("./static-pages/NextImage.tsx", import.meta.url)),
    },
  },
  build: {
    outDir: "pages-dist",
    emptyOutDir: true,
  },
});
