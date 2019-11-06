'use strict';

function extraPoint(canvas, x, speed) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.size = 20;
  //appears when completely inside the screen 
  this.x = x
  this.y = 0;
  this.speed = speed;
}

extraPoint.prototype.draw = function() {

    var img3= new Image();
    img3.src="../Images/goldcoin.png"
  this.ctx.drawImage(img3, this.x, this.y, this.size, this.size);


//   this.ctx.fillStyle = '#ff1a1a';
//   // fillRect(x, y, width, height)
//   this.ctx.fillRect(this.x, this.y, this.size, this.size);
};



extraPoint.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
};

extraPoint.prototype.isInsideScreen = function() {
  // if x plus half of its size is smaller then 0 return
  return this.y + this.size / 2 > 0;
};