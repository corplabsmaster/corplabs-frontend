import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["{app,components,data,lib}/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      // server-only throws outside the react-server condition; tests of
      // server modules resolve it to its no-op build instead.
      "server-only": path.resolve(__dirname, "node_modules/server-only/empty.js"),
    },
  },
});
