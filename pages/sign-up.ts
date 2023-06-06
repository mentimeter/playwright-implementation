import type { Locator, Page } from "@playwright/test";
import { randomBytes } from "crypto";

export class SignUpPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly name: Locator;

  readonly signUpButton: Locator;
  readonly skipButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = this.page.locator("id=email");
    this.password = this.page.locator("id=password");
    this.name = this.page.locator("id=name");

    this.signUpButton = this.page.getByRole("button", {
      name: "Sign up",
      exact: true,
    });
    this.skipButton = this.page.locator('button:has-text("Skip")');
  }

  async goto(url: string) {
    await this.page.goto(`${url}/signup`);
  }

  async fillSignupForm() {
    const fakeEmail = `janedoe-${Math.floor(
      new Date().getTime() / 1000
    )}-${randomBytes(6).toString("hex")}@example.com`;
    const fakeName = "Jane Doe";
    const fakePassword = "qwer1234";

    await this.email.fill(fakeEmail);
    await this.password.fill(fakePassword);
    await this.name.fill(fakeName);
  }
}
