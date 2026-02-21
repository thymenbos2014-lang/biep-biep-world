export const bg = {
  img: new Image(),
  loaded: false,
};

bg.img.src = "image/background/background1.gif";
bg.img.onload = () => bg.loaded = true;

export function drawBackground(ctx, canvas) {
  if (!bg.loaded) {
    ctx.fillStyle = "#0b0f14";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }
  // schaal naar canvas
  ctx.drawImage(bg.img, 0, 0, canvas.width, canvas.height);
}
