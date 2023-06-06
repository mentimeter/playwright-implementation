import { test } from "test";
import { expect } from "@playwright/test";
import { HomeviewPage } from "../pages/homeviewPage";
import { EditorPage } from "../pages/editorPage";
import { USER_STATE_FILE } from "test";

test.use({ storageState: USER_STATE_FILE });

test("user can create a presentation", async ({
  mentimeterURL,
  page,
  createPresentation,
}) => {
  const presentation = await createPresentation();
  const homeview = new HomeviewPage(page);
  //const editor = new EditorPage(page);
  await homeview.goto(mentimeterURL);
  //await homeview.createPresentation();

  //const title = await editor.presentationName.inputValue();
  expect(presentation.name).toEqual("Lottas prez");
});
