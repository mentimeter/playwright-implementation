import type { Page } from "@playwright/test";

export class LoginPage {
  constructor(protected page: Page) {}
  login() {
    console.log("log in");
  }
}
