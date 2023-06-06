import { getUserAuthFromFile } from "./users";

export async function createPresentation({ apiURL }, use) {
  await use(async (presentationName?: string) => {
    const res = await fetch(`${apiURL}/series`, {
      method: "POST",
      headers: {
        ...getUserAuthFromFile(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: presentationName ?? `e2e-generated-${Date.now()}`,
      }),
    });
    if (res.status !== 200) {
      const body = await res.text();
      throw new Error(
        `Create Presentation call failed: ${res.status}, ${body}`
      );
    }
    const presentation = await res.json();
    return presentation;
  });
}
