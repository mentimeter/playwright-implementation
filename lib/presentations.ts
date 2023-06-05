import { request } from "@playwright/test";
import { getUserAuthFromFile } from "./users";

export async function createPresentation({ mentimeterURL, apiURL }, use) {
  await use(async () => {
    try {
      const res = await fetch(`${apiURL}/series`, {
        method: "POST",
        headers: getUserAuthFromFile(mentimeterURL),
        body: JSON.stringify({
          name: "Lottas prez",
          pace: "audience",
        }),
      });
      const presentation = await res.json();
      return presentation;
    } catch (error) {
      throw new Error(`Create Presentation call failed: ${error}`);
    }
  });
}
