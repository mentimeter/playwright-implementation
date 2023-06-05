import { test, expect } from "@playwright/test";
import { SignUpPage } from "../pages/signUpPage";

test("user can create a presentation", async ({ page }) => {
  //   const homeview = new PresentationTableView(page);
  //   const editor = new EditorPage(page);
  //   await homeview.gotoPrivate(mentimeterURL);

  //   await homeview.createPresentation();
  //   const title = await editor.presentationName.inputValue();
  //   expect(title).toEqual("Untitled Presentation");
  //   await expect(
  //     page.locator("text=or get to know the editor")
  //   ).not.toBeVisible();
  //await page.goto("https://wild-puma.mentimeter.app/signup");
  const signUpPage = new SignUpPage(page);
  await signUpPage.goto("https://wild-puma.mentimeter.app");
  await signUpPage.signUp();

  await expect(signUpPage.skipButton).toBeVisible();
});
