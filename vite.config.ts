import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    vite: {
      base: '/My_Portfolio/', // <-- ADD THIS LINE HERE
    }
  },
});