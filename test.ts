import { test as baseTest } from "@playwright/test";

export const BASE_MENTIMETER_URL = "https://wild-puma.mentimeter.app";

interface ProjectTestOptions {
  mentimeterURL: string;
}

export const test = baseTest.extend<ProjectTestOptions>({
  mentimeterURL: BASE_MENTIMETER_URL,
});
