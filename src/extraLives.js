'use strict';

function ExtraLife(canvas, x, speed, image) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.size = 30;
  //appears when completely inside the screen 
  this.x = x
  this.y = 0;
  this.speed = speed;
  this.img1= image;
}


ExtraLife.prototype.draw = function() {
  
  this.ctx.drawImage(this.img1, this.x, this.y, this.size, this.size);
  
//   fillStyle = '#000000';
//   // fillRect(x, y, width, height)
//   this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

ExtraLife.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
};

ExtraLife.prototype.isInsideScreen = function() {
  // if x plus half of its size is smaller then 0 return
  return this.y + this.size / 2 > 0;
};