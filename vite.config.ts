import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    // only run the tagger in dev
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // ⬇️ use “/” locally, and the exact GitHub‐Pages subpath in prod
  base: mode === "development"
    ? "/"
    : "/swarna-portfolio/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
