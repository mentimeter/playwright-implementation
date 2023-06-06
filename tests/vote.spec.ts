import { test } from "test";
import { VotePage } from "pages";
import { createPresentation } from "lib";
import { expect } from "@playwright/test";

test("vote on multiple choice queston type", async ({ page, votingURL }) => {
  const votePage = new VotePage(page, votingURL);
  await votePage.goto();

  // const presentation = await createPresentation();
  const presentation = "abc";

  // One way of getting the vote code, go to the browser and get the vote code
  // const voteCode =

  // Another way of getting the vote code, get it using the API
  // const voteCode = await getPresentationVoteCode(presentation);
  const voteCode = "12345678";

  // Log in to the presentation
  await votePage.voteCodeInput.fill(voteCode);
  await votePage.voteCodeSubmit.click();
  expect(votePage.questionTitle).toContainText("Do you prefer coffee or tea?");

  // Submit a vote
  await votePage.firstQuestionChoice.click();
  await votePage.submitVoteButton.click();
  // expext(votePage.result).toBe(success);
});
