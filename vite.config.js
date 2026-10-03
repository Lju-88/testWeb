import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, "index.html"),
        osaka: resolve(projectRoot, "osaka.html"),
      },
    },
  },
});
