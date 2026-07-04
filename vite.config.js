import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/wedding-website/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, "index.html"),
        new_page: resolve(rootDir, "new_page/index.html"),
      },
    },
  },
});
