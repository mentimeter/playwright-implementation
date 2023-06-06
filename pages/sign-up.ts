import type { Page } from "@playwright/test";

export class SignUpPage {
  readonly page: Page;
  readonly mentimeterURL: string;

  constructor(page: Page, mentimeterURL: string) {
    this.page = page;
    this.mentimeterURL = mentimeterURL;
  }

  async goto() {
    await this.page.goto(`${this.mentimeterURL}/signup`);
  }
}
