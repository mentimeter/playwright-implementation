import { test, expect } from "@playwright/test";

test.use({ storageState: "menti-user.json" });

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
  await page.goto("https://wild-puma.mentimeter.app/app");
});
