import type { User } from "test";
import { randomBytes } from "crypto";
import { promises as fsp, existsSync } from "fs";
import { API_URL, BASE_MENTIMETER_URL } from "test";

const USER_STATE_FILE = `menti-user.json`;

async function saveUserState(user: User) {
  const stateObject = {
    orgins: [
      {
        origin: BASE_MENTIMETER_URL,
        localStorage: [
          {
            name: "session_token",
            value: user.sessionToken,
          },
          // Saving these isn't required, it just eases with debugging
          {
            name: "email",
            value: user.email,
          },
          {
            name: "password",
            value: user.password,
          },
        ],
      },
    ],
  };

  await fsp.writeFile(USER_STATE_FILE, JSON.stringify(stateObject));
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

async function createUser(): Promise<User> {
  const dogName = dogs[Math.floor(Math.random() * dogs.length)];
  const nowTime = Math.floor(new Date().getTime() / 1000);
  const randomChars = randomBytes(6).toString("hex");

  const email = `${dogName}-${nowTime}-${randomChars}@testemail.com`;
  const password = "12345678";

  // TODO change to post with {email, password} body
  const post_resp = await fetch(`${API_URL}/users`);
  const user = await post_resp.json();

  return {
    email,
    password,
    sessionToken: user.session_token,
  };
}

export default async function () {
  if (!existsSync(USER_STATE_FILE)) {
    const user = await createUser();
    await saveUserState(user);
  }
}
