import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/language-learning-app",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  publicDir: "public",
});
