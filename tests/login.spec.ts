import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.describe("User log in", () => {
  test("User can log in", ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.login();
  });
});
