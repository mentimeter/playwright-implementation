import { USER_STATE_FILE, test } from "test";
import { EditorPage, VotePage } from "pages";
import { expect } from "@playwright/test";

test.use({ storageState: USER_STATE_FILE });

test("vote on multiple choice queston type", async ({
  page,
  context,
  votingURL,
  mentimeterURL,
  createPresentation,
}) => {
  const presentation = await createPresentation();

  const editorPage = new EditorPage(page, mentimeterURL);
  await editorPage.gotoPresentation(presentation);
  // Create a question to check in the voting view
  await editorPage.defaultQuestionPlaceholder.type(
    "Do you prefer coffee or tea?"
  );
  await editorPage.addOption.click();
  await editorPage.firstOptionInput.type("coffee");

  await editorPage.addOption.click();
  await editorPage.secondOptionInput.type("tea");

  const voteCode = await editorPage.getVoteCode();

  const votingBrowserPage = await context.newPage();
  const votePage = new VotePage(votingBrowserPage, votingURL);
  await votePage.goto();

  // Log in to the presentation
  await votePage.voteCodeInput.fill(voteCode);
  await votePage.voteCodeSubmit.click();
  expect(
    await votingBrowserPage.getByText("Do you prefer coffee or tea?")
  ).toBeTruthy();

  // Submit a vote
  await votePage.firstQuestionChoice.click();
  await votePage.submitVoteButton.click();
  expect(
    await votingBrowserPage.getByRole("heading", {
      name: "Thank you for your participation!",
    })
  ).toBeTruthy();
});
