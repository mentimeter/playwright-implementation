import { test as baseTest } from "@playwright/test";
import { createPresentation } from "./lib/presentations";

export const BASE_MENTIMETER_URL = "https://wild-puma.mentimeter.app";
export const VOTING_URL = "https://wild-puma.menti.app";
export const API_URL = "https://wild-puma.api.mentimeter.app";

export const USER_STATE_FILE = `menti-user.json`;

interface ProjectTestOptions {
  mentimeterURL: string;
  votingURL: string;
  apiURL: string;
}

export const test = baseTest.extend<ProjectTestOptions>({
  mentimeterURL: BASE_MENTIMETER_URL,
  votingURL: VOTING_URL,
  apiURL: API_URL,
});
