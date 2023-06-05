import type { User } from "lib";
import { promises as fsp, existsSync } from "fs";
import { BASE_MENTIMETER_URL, USER_STATE_FILE } from "test";
import { createUser } from "lib";

async function saveUserState(user: User) {
  const stateObject = {
    origins: [
      {
        origin: BASE_MENTIMETER_URL,
        localStorage: [
          {
            name: "session_token",
            value: user.session_token,
          },
          // Saving these isn't required, it just helps with debugging
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

export default async function () {
  if (!existsSync(USER_STATE_FILE)) {
    const user = await createUser();
    await saveUserState(user);
  }
}
