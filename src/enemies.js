'use strict';

function element(canvas, x, speed) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.size = 50;
  //appears when completely inside the screen 
  this.x = x
  this.y = 0;
  this.speed = speed;
}

Element.prototype.draw = function() {
    var img2= new Image();
    img2.src="../img/enemy.png"
  this.ctx.drawImage(img2, this.x, this.y, this.size, this.size);

//   this.ctx.fillStyle = '#FF6F27';
//   // fillRect(x, y, width, height)
//   this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Element.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
};

Element.prototype.isInsideScreen = function() {
  // if x plus half of its size is smaller then 0 return
  return this.y + this.size / 2 > 0;
};