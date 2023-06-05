import { defineConfig } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

export default defineConfig({
  testDir: "tests",
  globalSetup: require.resolve("./global-setup"),
  expect: {
    timeout: 30_000,
  },
  // If there are longer timeouts in individual tests, the lower value will be used
  timeout: 90_000,
});
