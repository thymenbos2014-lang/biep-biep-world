const FPS = 2;           // 2 frames per seconde
const FRAME_TIME = 1000 / FPS;

function loadGif(path) {
  const img = new Image();
  img.src = path;
  return img;
}

export const player = {
  x: 450,
  y: 300,
  w: 96,
  h: 96,

  // animaties (gif)
  anim: {
    idle: loadGif("image/player/idle animation.gif"),
    left: loadGif("image/player/left animation.gif"),
    right: loadGif("image/player/rigth animation.gif"),
    walk: loadGif("image/player/walk for and back animation.gif"),
  },

  current: "idle",
  frame: 0,
  lastFrameAt: 0,

  setAnim(name) {
    if (this.current !== name) {
      this.current = name;
      this.frame = 0;
      this.lastFrameAt = 0;
    }
  },

  updateAnim(nowMs) {
    if (!this.lastFrameAt) this.lastFrameAt = nowMs;
    if (nowMs - this.lastFrameAt >= FRAME_TIME) {
      this.frame = (this.frame + 1) % 2; // jij zei: 2 frames
      this.lastFrameAt = nowMs;
    }
  },

  draw(ctx) {
    const now = performance.now();
    this.updateAnim(now);

    const img = this.anim[this.current] || this.anim.idle;

    // frame uit gif pakken met drawImage cropping? (gif zelf animeert ook)
    // BELANGRIJK: browsers animeren gif automatisch.
    // Dus we tekenen gewoon de gif. (2fps staat al in de gif)
    ctx.drawImage(img, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
  }
};
