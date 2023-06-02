import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend<{
  mentimeterURL: string;
  votingURL: string;
  apiURL: string;
}>({
  mentimeterURL: "https://wild-puma.mentimeter.app",
  votingURL: "https://wild-puma.menti.app",
  apiURL: "https://wild-puma.api.mentimeter.app",
});
