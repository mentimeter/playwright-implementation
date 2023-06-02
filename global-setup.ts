import { promises as fsp, existsSync } from "fs";

async function createUserState(stateName: string) {
  const stateObject = {
    orgins: [
      {
        origin: "https://wild-puma.mentimeter.app",
        localStorage: [
          {
            name: "session_token",
            value: "piJAkFh5aaDRpS4_ASVMZx1d1mN1NYU_MKMuc4rfJ2g.36556",
          },
        ],
      },
    ],
  };

  await fsp.writeFile(stateName, JSON.stringify(stateObject));
}

const globalSetup = async () => {
  const stateName = `menti-user.json`;
  if (!existsSync(stateName)) {
    await createUserState(stateName);
  }
};

export default globalSetup;
