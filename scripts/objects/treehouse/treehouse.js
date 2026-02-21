export const treehouse = {
  img: new Image(),
  loaded: false,

  // “meest linker bovenste pad” → ik zet hem linksboven
  // Je kan deze x/y later makkelijk aanpassen.
  x: 90,
  y: 90,
  w: 140,
  h: 140,
};

treehouse.img.src = "image/homes/treehouse.gif";
treehouse.img.onload = () => treehouse.loaded = true;

export function drawTreehouse(ctx) {
  if (!treehouse.loaded) return;
  ctx.drawImage(treehouse.img, treehouse.x, treehouse.y, treehouse.w, treehouse.h);
}
