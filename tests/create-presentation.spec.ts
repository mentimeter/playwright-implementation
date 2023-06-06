import { test } from "test";
import { expect } from "@playwright/test";
import { DashboardPage } from "pages";
import { EditorPage } from "pages";
import { USER_STATE_FILE } from "test";

test.use({ storageState: USER_STATE_FILE });

test("user can create a presentation", async ({ mentimeterURL, page }) => {
  const dashboardPage = new DashboardPage(page, mentimeterURL);
  const editorPage = new EditorPage(page, mentimeterURL);

  await dashboardPage.goto();
  await dashboardPage.newPresentationButton.click();

  await editorPage.closePopupButton.click();

  const title = await editorPage.presentationName.inputValue();
  expect(["My First Presentation", "Untitled Presentation"]).toContain(title);
});
