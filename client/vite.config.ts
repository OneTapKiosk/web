import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
