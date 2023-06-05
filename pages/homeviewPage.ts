import type { Locator, Page } from "@playwright/test";

export class HomeviewPage {
  readonly page: Page;
  readonly newPresentationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newPresentationButton = page.locator(
      "data-testid=new-presentation-button"
    );
  }

  async goto(url: string) {
    await this.page.goto(`${url}/app/dashboard`);
  }

  async createPresentation() {
    await this.newPresentationButton.click();
  }
}
