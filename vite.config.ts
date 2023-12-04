import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { UserConfig as VitestUserConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
} as VitestUserConfig);
