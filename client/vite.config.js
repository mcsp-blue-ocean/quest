import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

<<<<<<< HEAD
// https://vitejs.dev/config/
=======
>>>>>>> 5018ec421588d838929d454f77d1a68ccd583067
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
