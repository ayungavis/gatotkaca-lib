import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

// ref: https://vitest.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    watch: false,
    // For testing React components
    environment: "jsdom",
  },
});
