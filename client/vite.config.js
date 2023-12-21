import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export default defineConfig({
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
  cacheDir: "../node_modules/.vite",
});
