/* eslint-disable no-undef */
const getDirectories = () => {
  if (typeof window === "undefined") {
    const path = require("path");
    const dirPath = path.join(__dirname, "/pages/admin");
    console.log(dirPath);
    require("fs")
      .readdirSync(dirPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  }
};

const getMenu = () => {
  try {
    if (typeof window === "undefined") {
      const modules = getDirectories();

      let menus = {};
      for (let index = 0; index < modules.length; index++) {
        const element = modules[index];
        try {
          const menu = require(`../pages/admin/${element}/menu.json`);
          menus[element] = { ...menu };
        } catch (e) {
          console.error(`Menu.json not found in ${element}`);
        }
      }
    }
  } catch (e) {
    console.log(e.message);
  }
};

export default getMenu;
