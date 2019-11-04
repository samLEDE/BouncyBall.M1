'use strict'


function Player(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  
    this.speed = 10
    this.size = 50;
    this.x = canvas.width / 2;
    this.y = 550;
  }


Player.prototype.setDirection = function(direction) {
  if (direction === 'left') {
      this.x -= this.speed;
}
  if (direction === 'right') 
      this.x += this.speed;
};

//handle screen colission with borders
Player.prototype.handleScreenCollision = function() {
  this.x = this.x + this.direction * this.speed;
  var screenLeft = 0;
  var screenRight = this.canvas.width;

  if (this.x > screenRight) this.direction = -1;
  else if (this.x < screenLeft) this.direction = 1;
};

Player.prototype.didCollide = function(enemy) {
  
};


/// remove life from player
Player.prototype.removeLife = function() {};
  
  Player.prototype.draw = function() {
    this.ctx.fillStyle = '#66D3FA';
    // fillRect(x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  };

  Player.prototype.draw = function() {
    this.ctx.fillStyle = '#66D3FA';
    // fillRect(x, y, width, height)
    this.ctx.fillRect(
      this.x,
      this.y,
      this.size,
      this.size,
    );
  };
  