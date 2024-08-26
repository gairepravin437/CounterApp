import { defineConfig } from "vite";
import MillionLint from "@million/lint";

const shouldUseLint = process.env.USE_LINT === "true";

export default defineConfig({
  plugins: shouldUseLint ? [MillionLint.vite()] : [],
});
