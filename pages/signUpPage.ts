import type { Page } from "@playwright/test";

export class SignUpPage {
  constructor(protected page: Page) {}

  readonly url = "/signup";

  readonly email = this.page.locator("id=email");
  readonly password = this.page.locator("id=password");
  readonly name = this.page.locator("id=name");
  readonly signUpButton = this.page.locator(
    '.authWrapper button[type="submit"]'
  );

  readonly fakeEmail = `janedoe${Math.floor(
    Math.random() * 100000
  )}@example.com`;
  readonly fakeName = "Jane Doe";
  readonly fakePassword = "qwer1234";
  readonly skipButton = this.page.locator('button:has-text("Skip")');

  getCredentials() {
    return { email: this.fakeEmail, password: this.fakePassword };
  }

  async goto(url: string) {
    await this.page.goto(`${url}/signup`);
  }

  async signUp() {
    await this.email.fill(this.fakeEmail);
    await this.password.fill(this.fakePassword);
    await this.name.fill(this.fakeName);
    await this.signUpButton.click();
  }
}
