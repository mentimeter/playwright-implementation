import { Locator, Page } from "@playwright/test";

export class VotePage {
  readonly page: Page;
  readonly votingURL: string;

  readonly voteCodeInput: Locator;
  readonly voteCodeSubmit: Locator;

  readonly firstQuestionChoice: Locator;
  readonly submitVoteButton: Locator;

  constructor(page: Page, votingURL: string) {
    this.page = page;
    this.votingURL = votingURL;

    this.voteCodeInput = this.page.getByPlaceholder("1234 5678");
    this.voteCodeSubmit = this.page.getByRole("button", { name: "Submit" });

    this.firstQuestionChoice = this.page.getByTestId("choice-0");
    this.submitVoteButton = this.page.getByRole("button", { name: "Submit" });
  }

  async goto() {
    // networkide wait for helps to reduce react rehydration errors on this form
    // realistically, this is a bug that affects real users and should be fixed
    this.page.goto(this.votingURL, { waitUntil: "networkidle" });
  }
}
