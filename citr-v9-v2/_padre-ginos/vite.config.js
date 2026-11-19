import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
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
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
  test: {
    coverage: {
      provider: "v8", // Use 'istanbul' for Firefox/WebKit
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{js,jsx}"],
    },
    projects: [
      {
        test: {
          name: "happy-dom",
          include: ["**/node/*.test.{js,jsx}"],
          environment: "happy-dom",
          environmentOptions: {
            happyDOM: { url: "http://padre-gino-tests.com" },
          },
        },
      },
      {
        test: {
          name: "browser",
          include: ["**/browser/*.test.{js,jsx}"],
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
