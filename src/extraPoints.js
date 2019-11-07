'use strict';

function ExtraPoint(canvas, x, speed, image) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.size = 30;
  //appears when completely inside the screen 
  this.x = x
  this.y = 0;
  this.speed = speed;
  this.image = image;
}

ExtraPoint.prototype.draw = function() {
  this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);


//   this.ctx.fillStyle = '#ff1a1a';
//   // fillRect(x, y, width, height)
//   this.ctx.fillRect(this.x, this.y, this.size, this.size);
};



ExtraPoint.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
};

ExtraPoint.prototype.isInsideScreen = function() {
  // if x plus half of its size is smaller then 0 return
  return this.y + this.size / 2 > 0;
};