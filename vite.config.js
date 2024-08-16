import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      svg: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
                removeHiddenElems: false,
              },
            },
          },
        ],
      },
      png: { quality: 50 },
      jpeg: { quality: 60 },
      webp: { quality: 50 },
    }),
  ],
  base: "/language-learning-app/",
  build: {
    minify: true,
    outDir: "dist",
    assetsDir: "src/assets",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "firebase-app-vendor": ["firebase/app"],
          "firebase-auth-vendor": ["firebase/auth"],
          "firebase-database-vendor": ["firebase/database"],
          hooks: ["src/hooks/index.js"],
        },
      },
    },
  },
  publicDir: "public",
});
