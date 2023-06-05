import { test as baseTest } from "@playwright/test";

export const BASE_MENTIMETER_URL = "https://wild-puma.mentimeter.app";
export const VOTING_URL = "https://wild-puma.menti.app";
export const API_URL = "https://wild-puma.api.mentimeter.app";

export interface User {
  email: string;
  password: string;
  sessionToken: string;
}

export const test = baseTest.extend<{
  mentimeterURL: string;
  votingURL: string;
  apiURL: string;
}>({
  mentimeterURL: BASE_MENTIMETER_URL,
  votingURL: VOTING_URL,
  apiURL: API_URL,
});
