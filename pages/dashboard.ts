import type { Locator, Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly mentimeterURL: string;
  readonly newPresentationButton: Locator;

  constructor(page: Page, mentimeterURL: string) {
    this.page = page;
    this.mentimeterURL = mentimeterURL;

    this.newPresentationButton = page.getByTestId("new-presentation-button");
  }

  async goto() {
    await this.page.goto(`${this.mentimeterURL}/app/dashboard`, {
      waitUntil: "networkidle",
    });
  }
}
