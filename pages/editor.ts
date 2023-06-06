import type { Locator, Page } from "@playwright/test";

export class EditorPage {
  readonly page: Page;
  readonly mentimeterURL: string;
  readonly presentationName: Locator;

  readonly defaultQuestionPlaceholder: Locator;
  readonly addOption: Locator;

  readonly firstOptionInput: Locator;
  readonly secondOptionInput: Locator;

  readonly voteCode: Locator;

  readonly closePopupButton: Locator;

  constructor(page: Page, mentimeterURL: string) {
    this.page = page;
    this.presentationName = page.getByRole("textbox", {
      name: "Presentation name",
    });
    this.mentimeterURL = mentimeterURL;

    this.defaultQuestionPlaceholder =
      this.page.getByPlaceholder("Multiple Choice");
    this.addOption = this.page.getByTestId("add-more-button");

    this.firstOptionInput = this.page.getByTestId("option-input-0");
    this.secondOptionInput = this.page.getByTestId("option-input-1");

    this.voteCode = this.page.getByTestId("vote-code");

    this.closePopupButton = this.page.getByRole("button", {
      name: "Close Templates dialog",
    });
  }

  async gotoPresentation(presentation: any) {
    await this.page.goto(
      `${this.mentimeterURL}/app/presentation/${presentation.id}/${presentation.questions[0].id}/edit`
    );
  }

  async getVoteCode() {
    return this.voteCode.innerText();
  }
}
