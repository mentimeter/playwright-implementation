import { randomBytes } from "crypto";
import { API_URL } from "test";

export interface User {
  email: string;
  password: string;
  // Special snake_case to match expected localstorage format
  session_token: string;
}

const dogs = [
  "bhotia",
  "kerryblueterrier",
  "icelandicsheepdog",
  "leonberger",
  "boerboel",
  "tibetanmastiff",
  "georgianshepherd",
  "stephensstock",
  "segugioitaliano",
  "bergamascoshepherd",
  "miniaturebullterrier",
];

export async function createUser(): Promise<User> {
  // Make a both unique but also ok-looking email address
  const dogName = dogs[Math.floor(Math.random() * dogs.length)];
  const nowTime = Math.floor(new Date().getTime() / 1000);
  const randomChars = randomBytes(6).toString("hex");
  const email = `${dogName}-${nowTime}-${randomChars}@testemail.com`;

  // Users will be cleaned up, these passwords don't need to be secure
  const password = "12345678";

  // We're choosing to use fetch instead of playwrights APIContext
  // this is simpler and creates less traces, which makes it easier
  // for new engineers to debug tests.
  const post_resp = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (post_resp.status !== 200) {
    const body = await post_resp.text();
    throw new Error(`Failed to create user: ${post_resp.status}, ${body}`);
  }

  const user = await post_resp.json();

  return {
    email,
    password,
    session_token: user.session_token,
  };
}
