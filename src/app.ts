import MovableObject from "./class/movableObject.js";
import { Util } from "./utility/util.js";

const shot1 = new MovableObject({
  element: Util.createElement({
    name: "img",
    attr: { src: "./assets/images/shot.png" },
  }),
  position: { x: 50, y: -32 },
  size: { x: 20, y: 65 },
  velocity: { x: 0, y: 5 },
  acceleration: { x: 0, y: 2 },
});

const shot2 = new MovableObject({
  element: Util.createElement({
    name: "img",
    attr: { src: "./assets/images/shot.png" },
  }),
  position: { x: 90, y: -32 },
  size: { x: 20, y: 65 },
  velocity: { x: 0, y: 5 },
  acceleration: { x: 0, y: 2 },
});