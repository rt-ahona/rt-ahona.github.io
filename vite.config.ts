import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tanstackStart({ target: "netlify" }) // Forces it to output the Netlify Function directory layout
  ],
});