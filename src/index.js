import HomeScreen from "./screens/HomeScreen.js";
import UsersScreen from "./screens/UsersScreen.js";
import CreateScreen from "./screens/CreateScreen.js";
import { parseRequestUrl } from "./utils";
import Error404Screen from "./screens/Error404Screen.js";

const routes = {
  "/": HomeScreen,
  "/users/:id": UsersScreen,
  "/create": CreateScreen,
};
const router = async () => {
  const request = parseRequestUrl();

  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById("main-layout");
  const userCardArea = document.getElementById("user-layout");
  const memberCreate = document.getElementById("member-create");

  switch (screen) {
    case HomeScreen:
      userCardArea.style.display = "none";
      memberCreate.style.display = "none";
      main.innerHTML = await HomeScreen.render();
      break;
    case UsersScreen:
      main.style.display = "none";
      memberCreate.style.display = "none";
      userCardArea.innerHTML = await UsersScreen.render();
      userCardArea.style.display = "block";
      break;
    case UsersScreen:
      main.style.display = "none";
      memberCreate.style.display = "none";
      userCardArea.innerHTML = await UsersScreen.render();
      userCardArea.style.display = "block";
      break;
    case CreateScreen:
      memberCreate.style.display = "block";
      main.style.display = "none";
      userCardArea.style.display = "none";
      memberCreate.innerHTML = await CreateScreen.render();
      await CreateScreen.after_render();
      break;
  }
  
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
