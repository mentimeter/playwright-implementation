import { expect } from "@playwright/test";
import { test } from "test";
import { SignUpPage } from "pages";

test("user can sign up", async ({ page, mentimeterURL }) => {
  const signUpPage = new SignUpPage(page, mentimeterURL);
  await signUpPage.goto();
  await signUpPage.fillSignupForm();

  await signUpPage.signUpButton.click();
  // The first thing a user sees on successful signup is a an onboarding modal
  await expect(signUpPage.skipButton).toBeVisible();
});
