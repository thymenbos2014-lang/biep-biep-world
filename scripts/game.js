import { drawBackground, bg } from "./background/background.js";
import { player } from "../objects/player/player.js";
import { updateMovement, setTargetFromMouse } from "../objects/player/movement/movement.js";
import { treehouse, drawTreehouse } from "../objects/treehouse/treehouse.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// klik om te lopen
canvas.addEventListener("mousedown", (e) => {
  const r = canvas.getBoundingClientRect();
  const mx = (e.clientX - r.left) * (canvas.width / r.width);
  const my = (e.clientY - r.top) * (canvas.height / r.height);
  setTargetFromMouse(mx, my);
});

function loop() {
  // update
  updateMovement(player);

  // draw
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground(ctx, canvas);
  drawTreehouse(ctx);     // treehouse eerst (achter speler)
  player.draw(ctx);       // speler erboven

  requestAnimationFrame(loop);
}

loop();
