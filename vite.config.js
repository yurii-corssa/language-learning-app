import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { routes } from "./src/helpers/routes";

export default defineConfig({
  plugins: [react()],
  base: routes.BASE,
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  publicDir: "public",
});
