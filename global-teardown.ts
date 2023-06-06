import { deleteUser } from "lib";
import { promises as fsp } from "fs";
import { USER_STATE_FILE } from "test";

export default async function () {
  try {
    await deleteUser();
    await fsp.rm(USER_STATE_FILE);
  } catch (e) {
    throw new Error(`Error while deleting user in cleanup: ${e.message}`);
  }
}
