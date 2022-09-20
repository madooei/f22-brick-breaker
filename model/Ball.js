import Sprite from "./Sprite.js";

class Ball extends Sprite {

  bounce(canvasWidth, canvasHeight) {
    if (this.x + this.width > canvasWidth || this.x < 0) {
      // flip dx sign
      this.dx *= -1;
    }

    if (this.y < 0) {
      // flip dy sign
      this.dy *= -1;
    } else if (this.y + this.height > canvasHeight) {
      return false;
    }

    return true;
  }

  collide(paddle) {
    if (this.intersects(paddle)) {
      this.dy *= -1;
    }
  }
}

export default Ball;