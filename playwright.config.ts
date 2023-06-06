import { defineConfig } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

export default defineConfig({
  testDir: "tests",
  outputDir: "test-results",
  //reporter: "html",
  use: {
    // We find traces to be the most useful artifacts!
    video: "off",
    screenshot: "off",
    trace: "retain-on-failure",
  },
  globalSetup: require.resolve("./global-setup"),
  globalTeardown: require.resolve("./global-teardown"),
  expect: {
    timeout: 30_000,
  },
  // If there are longer timeouts in individual tests, the lower value will be used
  timeout: 90_000,
});
