import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteImagemin from "vite-plugin-imagemin"; // Import vite-plugin-imagemin
import imageminGifSicle from "imagemin-gifsicle";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import webpPlugin from "./vite-plugin-webp";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/backend': {
        target: 'http://localhost', // Assuming Apache is running on default port 80
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, '/mksri_website/backend'), // Prepend /mksri_website
      },
      '/upload_image': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/upload_image/, '/upload_image'),
      },
    },
  },
  preview: {
    port: parseInt(process.env.PORT || "4173"), // required for Render
    host: true, // required to allow external access on Render
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      mozjpeg: {
        quality: 40,
      },
      pngquant: {
        quality: [0.5, 0.7],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
          {
            name: "addAttributesToSVGElement",
            params: {
              attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
            },
          },
        ],
      },
    }),
    webpPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));
