import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config.js";

export default defineConfig(
  {
    // Add Vitest specific configurations here
    test: {
      // Specify your test configurations
      // ...
    },
  },
  viteConfig
);
