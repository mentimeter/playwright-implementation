import { test, expect } from "@playwright/test";
import { CreateSessionForm } from "../pages/createSessionForm";
import { SessionOverview } from "../pages/sessionOverview";

test.describe("Create session", () => {
  test("User can create session", async ({ page }) => {
    const createSessionPage = new CreateSessionForm(page);
    const sessionOverviewPage = new SessionOverview(page);
    await createSessionPage.goto();
    await createSessionPage.createSession();

    await expect(sessionOverviewPage.welcomeHeader).toBeVisible();
  });
});
