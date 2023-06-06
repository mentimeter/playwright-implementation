import { test } from "test";
import { expect } from "@playwright/test";
import { EditorPage, HomeviewPage } from "pages";
import { USER_STATE_FILE } from "test";

test.use({ storageState: USER_STATE_FILE });

test("user can create a presentation via API", async ({
  mentimeterURL,
  page,
  createPresentation,
}) => {
  const presentation = await createPresentation();
  expect(presentation.name).toEqual("Lottas prez");

  const editorPage = new EditorPage(page, mentimeterURL);
  editorPage.gotoPresentation(presentation);

  const title = await editorPage.presentationName.inputValue();
  expect(title).toBe("Lottas prez");
});
