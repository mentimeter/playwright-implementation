import { test } from "test";
import { expect } from "@playwright/test";
import { HomeviewPage } from "pages";
import { EditorPage } from "pages";
import { USER_STATE_FILE } from "test";

test.use({ storageState: USER_STATE_FILE });

test("user can create a presentation", async ({ mentimeterURL, page }) => {
  const homeview = new HomeviewPage(page, mentimeterURL);
  const editor = new EditorPage(page, mentimeterURL);
  await homeview.goto();
  await homeview.createPresentation();

  const title = await editor.presentationName.inputValue();
  expect(title).toEqual("My First Presentation");
});

test("user can create a presentation via API", async ({
  mentimeterURL,
  page,
  createPresentation,
}) => {
  const presentation = await createPresentation();
  const homeview = new HomeviewPage(page, mentimeterURL);

  await homeview.goto();
  expect(presentation.name).toEqual("Lottas prez");
});
