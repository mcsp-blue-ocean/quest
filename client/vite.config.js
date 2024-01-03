import { defineConfig } from "vitest/config";
import { defineConfig as defineViteConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import dotenv from "dotenv";

dotenv.config({ path: "./client/.env" });

// Vite configuration
const viteConfig = defineViteConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has("web")) {
          return new URLSearchParams({ format: "webp" });
        }
        return new URLSearchParams();
      },
    }),
  ],
  server: {
    proxy: {
      "/api": `http://localhost:${process.env.PORT}`,
    },
  },
  cacheDir: "./client/node_modules/.vite", // Adjust the path accordingly
});

// Vitest configuration
export default defineConfig(
  {
    test: {
      // Specify your test configurations
      // ...
    },
  },
  viteConfig
);
