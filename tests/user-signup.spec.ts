import { expect } from "@playwright/test";
import { test } from "test";
import { SignUpPage } from "pages";

test("user can create a presentation", async ({ page, mentimeterURL }) => {
  const signUpPage = new SignUpPage(page);
  await signUpPage.goto(mentimeterURL);
  await signUpPage.fillSignupForm();

  await signUpPage.skipButton.click();
  // The first thing a user sees on successful signup is a an onboarding modal
  await expect(signUpPage.skipButton).toBeVisible();
});
