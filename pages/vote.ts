import { Locator, Page } from "@playwright/test";

export class VotePage {
  readonly page: Page;
  readonly votingURL: string;

  readonly voteCodeInput: Locator;
  readonly voteCodeSubmit: Locator;

  readonly questionTitle: Locator;
  readonly firstQuestionChoice: Locator;
  readonly submitVoteButton: Locator;

  constructor(page: Page, votingURL: string) {
    this.page = page;
    this.votingURL = votingURL;

    this.voteCodeInput = this.page.locator("id=enter-vote-key");
    this.voteCodeSubmit = this.page.locator("button[type=submit]");

    this.questionTitle = this.page.locator("");
    this.firstQuestionChoice = this.page.locator("[data-testid=choice-0]");
    this.submitVoteButton = this.page.locator("button[type=submit]");
  }

  async goto() {
    this.page.goto(this.votingURL);
  }
}
