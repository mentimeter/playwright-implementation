import type { Locator, Page } from "@playwright/test";

export class EditorPage {
  readonly page: Page;
  readonly mentimeterURL: string;
  readonly presentationName: Locator;
  readonly closePopupButton: Locator;

  constructor(page: Page, mentimeterURL: string) {
    this.page = page;
    this.presentationName = page.getByRole("textbox", {
      name: "Presentation name",
    });
    this.mentimeterURL = mentimeterURL;

    this.closePopupButton = this.page.getByRole("button", {
      name: "Close Templates dialog",
    });
  }

  async gotoPresentation(presentation: any) {
    await this.page.goto(
      `${this.mentimeterURL}/app/presentation/${presentation.id}/${presentation.questions[0].id}/edit`
    );
  }
}
