import type { Locator, Page } from "@playwright/test";

export class EditorPage {
  readonly page: Page;
  readonly presentationName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.presentationName = page.locator("id=editor-presentation-title");
  }
}
