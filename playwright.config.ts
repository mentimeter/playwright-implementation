import { defineConfig } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

export default defineConfig({
  testDir: "tests",
  outputDir: "test-results",
  use: {
    // We find traces to be the most useful artifacts!
    video: "off",
    screenshot: "off",
    trace: "retain-on-failure",
  },
  globalSetup: require.resolve("./global-setup"),
});
