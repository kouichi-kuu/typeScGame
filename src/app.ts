import GameObject from "./class/gameObject.js";
import { GameObjectParams } from "./utility/type.js";

const element = document.createElement("img");
element.setAttribute("src", "./assets/images/player.png");

const params: GameObjectParams = {
  element: element,
  position: { x: 200, y: 200 },
  size: { x: 100, y: 90 },
};

const obj = new GameObject(params);
