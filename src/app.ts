import Score from "./class/score.js";
import Screen from "./class/screen.js";

const obj = new Score({
  position: { x: 25, y: Screen.height - 25 },
  fontName: "Bungee Inline",
  fontSize: 40,
  score: 123456789,
});
