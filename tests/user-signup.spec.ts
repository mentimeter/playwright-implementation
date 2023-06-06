import { test } from "test";
import { SignUpPage } from "pages";

test("user can sign up", async ({ page, mentimeterURL }) => {
  const signUpPage = new SignUpPage(page, mentimeterURL);
  await signUpPage.goto();
});
