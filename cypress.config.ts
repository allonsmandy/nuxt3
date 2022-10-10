import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1180,
  viewportHeight: 800,

  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: "http://localhost:3000/";
    },
  },
});
