import { test } from "test";
import { expect } from "@playwright/test";
import { DashboardPage } from "pages";
import { USER_STATE_FILE } from "test";

test.use({ storageState: USER_STATE_FILE });

test("user can create a presentation via API", async ({
  mentimeterURL,
  page,
  createPresentation,
}) => {
  const presentationName = "Lottas presentation";
  const presentation = await createPresentation(presentationName);
  expect(presentation.name).toEqual(presentationName);

  const dashboardPage = new DashboardPage(page, mentimeterURL);
  await dashboardPage.goto();

  const title = await dashboardPage.getFirstPresentationName();
  expect(title).toEqual(presentation.name);
});
