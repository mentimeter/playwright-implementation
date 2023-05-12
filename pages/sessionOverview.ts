import type { Page } from "@playwright/test";

export class SessionOverview {
  constructor(protected page: Page) {}
  readonly welcomeHeader = this.page.locator("text=Welcome to GA Statistics, ");
}
