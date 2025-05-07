import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false,
      include: ["src/**/*.js", "src/**/*.jsx"],
    }),
    tailwindcss(),
  ],
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util",
      buffer: "buffer",
      asset: "assert",
      events: "events",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
});
