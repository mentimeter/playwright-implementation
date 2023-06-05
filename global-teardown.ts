import { deleteUser } from "lib";
import { promises as fsp, existsSync } from "fs";
import { USER_STATE_FILE } from "test";

const globalTeardown = async () => {
  try {
    await deleteUser();
    await fsp.rm(USER_STATE_FILE);
  } catch (e) {
    throw new Error(`Error while deleting user in cleanup: ${e.message}`);
  }
};

export default globalTeardown;
