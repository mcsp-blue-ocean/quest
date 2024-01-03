import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export default {
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
  define: {
    "process.env.VITE_URL_PATH": JSON.stringify(process.env.VITE_URL_PATH),
  },
  server: {
    proxy: {
      "/api": `http://localhost:${process.env.PORT}`,
    },
  },
  cacheDir: "./client/node_modules/.vite",
};
