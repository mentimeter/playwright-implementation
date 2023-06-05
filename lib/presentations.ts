import type { User } from "./users";
import { randomBytes } from "crypto";

export async function createPresentation(user: User) {
  const nowTime = Math.floor(new Date().getTime() / 1000);
  const randomChars = randomBytes(6).toString("hex");

  const presentationName = `${randomChars} - ${nowTime}`;
}
