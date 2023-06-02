import { test } from "test";

test.skip("other test", async ({ page, mentimeterURL }) => {
  await page.goto(mentimeterURL);
});
