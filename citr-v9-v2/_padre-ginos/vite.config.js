import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [TanStackRouterVite(), react()],
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },
    projects: [
      {
        test: {
          name: "happy-dom",
          environment: "happy-dom",
          environmentOptions: {
            happyDOM: { url: "http://padre-gino-tests.com" },
          },
          include: ["**/node/*.test.{js,jsx}"],
        },
      },
      {
        test: {
          include: ["**/browser/*.test.{js,jsx}"],
          name: "browser",
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
