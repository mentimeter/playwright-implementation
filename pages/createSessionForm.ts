import type { Page, Locator } from "@playwright/test";

export class CreateSessionForm {
  readonly page: Page;
  readonly name: Locator;
  readonly description: Locator;
  readonly email: Locator;
  readonly picture: Locator;
  readonly startDate: Locator;
  readonly endDate: Locator;
  readonly dateOkButton: Locator;
  readonly maxRounds: Locator;
  readonly adminPassword: Locator;
  readonly submissionPassword: Locator;
  readonly createSessionButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.name = this.page.getByLabel("Name");
    this.description = this.page.getByLabel("Description");
    this.email = this.page.getByLabel("Email");
    this.picture = this.page.getByLabel("Picture", { exact: true });
    this.startDate = this.page.getByLabel("Start date");
    this.dateOkButton = this.page.getByRole("button", { name: "OK" });
    this.endDate = this.page.getByLabel("End date");
    this.maxRounds = this.page.getByLabel("Max rounds");
    this.adminPassword = this.page.getByLabel("Admin password");
    this.submissionPassword = this.page.getByLabel("Submission password");
    this.createSessionButton = this.page.locator(
      'button:text("Create session")'
    );
  }

  async goto() {
    await this.page.goto("https://rtc-stats.herokuapp.com/create_session/");
  }

  async createSession() {
    await this.name.fill("Test Session 3");
    await this.description.fill("Test Description");
    await this.email.fill("test@test.com");
    await this.picture.setInputFiles("test.png");
    await this.startDate.fill("2021-01-01");
    await this.dateOkButton.click();
    await this.endDate.fill("2021-01-02");
    await this.dateOkButton.click();
    await this.maxRounds.fill("10");
    await this.adminPassword.fill("abc123");
    await this.submissionPassword.fill("abc123");
    await this.createSessionButton.click();
  }
}
