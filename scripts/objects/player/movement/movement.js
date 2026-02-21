let target = null;

export function setTargetFromMouse(x, y) {
  target = { x, y };
}

export function updateMovement(player) {
  if (!target) {
    player.setAnim("idle");
    return;
  }

  const dx = target.x - player.x;
  const dy = target.y - player.y;
  const dist = Math.hypot(dx, dy);

  const speed = 2.6;

  if (dist < 2) {
    target = null;
    player.setAnim("idle");
    return;
  }

  const nx = dx / dist;
  const ny = dy / dist;

  player.x += nx * speed;
  player.y += ny * speed;

  // anim keuze
  // rechts animatie = ook schuin rechts boven/onder
  // links animatie = ook schuin links boven/onder
  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 0) player.setAnim("right");
    else player.setAnim("left");
  } else {
    // meer omhoog/omlaag -> gebruik walk (voor/back)
    player.setAnim("walk");
  }
}
