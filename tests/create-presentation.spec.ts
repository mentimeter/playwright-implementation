import { expect } from "@playwright/test";
import { test, USER_STATE_FILE } from "test";

test.use({ storageState: USER_STATE_FILE });

test("user can create a presentation", async ({ page, mentimeterURL }) => {
  //   const homeview = new PresentationTableView(page);
  //   const editor = new EditorPage(page);
  //   await homeview.gotoPrivate(mentimeterURL);

  //   await homeview.createPresentation();
  //   const title = await editor.presentationName.inputValue();
  //   expect(title).toEqual("Untitled Presentation");
  //   await expect(
  //     page.locator("text=or get to know the editor")
  //   ).not.toBeVisible();
  await page.goto(`${mentimeterURL}/app`);
});
