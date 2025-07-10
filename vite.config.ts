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
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // “/” in dev so vite dev still works;
  // in prod, assets are loaded relative to your repo path
  base: mode === "development" ? "/" : "/swarna-portfolio/",

  // build into docs/ instead of dist/
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
