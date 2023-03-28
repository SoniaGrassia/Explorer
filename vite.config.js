import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
    @import "./scss/variables/_colors.scss";
    @import "./scss/variables/_animations.scss";
    @import "./scss/variables/_typography.scss";
    @import "./scss/mixins/_size.scss";
    @import "./scss/mixins/_flex.scss";
    `,
      },
    },
  },
});
