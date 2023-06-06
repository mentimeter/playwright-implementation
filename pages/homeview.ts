import type { Locator, Page } from "@playwright/test";

export class HomeviewPage {
  readonly page: Page;
  readonly mentimeterURL: string;
  readonly newPresentationButton: Locator;
  readonly firstPresentationInList: Locator;

  constructor(page: Page, mentimeterURL: string) {
    this.page = page;
    this.mentimeterURL = mentimeterURL;

    this.newPresentationButton = page.getByTestId("new-presentation-button");
    this.firstPresentationInList = page.getByRole("link", {
      name: "Edit presentation",
    });
  }

  async goto() {
    await this.page.goto(`${this.mentimeterURL}/app/dashboard`, {
      waitUntil: "networkidle",
    });
  }

  async getFirstPresentationName() {
    return await this.firstPresentationInList.first().innerText();
  }
}
