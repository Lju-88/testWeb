import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  // GitHub Pages serves this project beneath /testWeb/; relative asset URLs
  // keep both the Pages deployment and local preview paths working.
  base: "./",
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, "index.html"),
        osaka: resolve(projectRoot, "osaka.html"),
      },
    },
  },
});
