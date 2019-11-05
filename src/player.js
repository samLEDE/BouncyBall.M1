'use strict'


function Player(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.speed = 40;
    this.width = 70;
    this.height = 15;
    this.lives = lives;
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
  //this.x = this.x + this.direction * this.speed;
  var screenLeft = 0;
  var screenRight = this.canvas.width;

  var playerLeft = this.x;
  var playerRight = this.x + this.width;
  
  if (playerLeft <= screenLeft) {
    this.x = 0
  }
  else if (playerRight >= screenRight) {
    this.x = screenRight - this.width
  }
};


Player.prototype.didCollide = function(element) {
  console.log(element)
  var playerLeft = this.x;
  var playerRight = this.x + this.width;
  var playerTop = this.y;
  var playerBottom = this.y + this.height;



  //the size of the enemy depends on its X/Y position + its size
  var elementLeft = element.x;
  var elementRight = element.x + element.size;
  var elementTop = element.y;
  var elementBottom = element.y + element.size;

   //the size of the extraLife depends on its X/Y position + its size
   var extraLifeLeft = extraLife.x;
   var extraLifeRight = extraLife.x + extraLife.size;
   var extraLifeTop = extraLife.y;
   var extraLifeBottom = extraLife.y + extraLife.size;


  //  ////// done!
  //  //the size of the extraPoint depends on its X/Y position + its size
  //  var extraPointLeft = extraPoint.x;
  //  var extraPointRight = extraPoint.x + extraPoint.size;
  //  var extraPointTop = extraPoint.y;
  //  var extraPointBottom = extraPoint.y + extraPoint.size;



  // all the different parts on which the player and enemies can hit each other 
  var crossRightElement = elementLeft <= playerRight && elementLeft >= playerLeft;
  var crossLeftElement = elementRight >= playerLeft && elementRight <= playerRight;
  var crossTopElement = elementBottom >= playerTop && elementBottom <= playerBottom;
  var crossBottomElement = elementTop <= playerBottom && elementTop >= playerTop;

    //all the different parts on which the player and enemies can hit each other 
    var crossRightLife = extraLifeLeft <= playerRight && extraLifeLeft >= playerLeft;
    var crossLeftLife = extraLifeRight >= playerLeft && extraLifeRight <= playerRight;
    var crossTopLife = extraLifeBottom >= playerTop && extraLifeBottom <= playerBottom;
    var crossBottomLife = extraLifeTop <= playerBottom && extraLifeTop >= playerTop;

    // // //all the different parts on which the player and enemies can hit each other 
    // var crossRightPoint = extraPointLeft <= playerRight && extraPointLeft >= playerLeft;
    // var crossLeftPoint = extraPointRight >= playerLeft && extraPointRight <= playerRight;
    // var crossTopPoint = extraPointBottom >= playerTop && extraPointBottom <= playerBottom;
    // var crossBottomPoint = extraPointTop <= playerBottom && extraPointTop >= playerTop;



  if ((crossRightElement || crossLeftElement) && (crossBottomElement || crossTopElement)) {
    // console.log("hit!")
    return true;
  } 
  if ((crossRightLife || crossLeftLife) && (crossBottomLife || crossTopLife)) {
    return true;
  }
  // if ((crossRightPoint || crossLeftPoint) && (crossBottomPoint || crossTopPoint)) {
  //   // console.log("hit!")
  //   return true;
  // } 
  return false;
};




/// remove life from player
Player.prototype.removeLife = function() {
  this.lives -= 1;
};

// /// add life to player
Player.prototype.addLife = function() {
  this.lives += 1;
};

 /// add life to player
// Player.prototype.addPoint = function() {
//   this.score += 1;
// };
  
    Player.prototype.draw = function() {
    this.ctx.fillStyle = '#66D3FA';
    // fillRect(x, y, width, height)
    this.ctx.fillRect
    (this.x, 
    this.y, 
    this.size, 
    this.size
    );
  };

  Player.prototype.draw = function() {
    this.ctx.fillStyle = '#66D3FA';
    // fillRect(x, y, width, height)
    // console.log(this.width, this.height, this.x, this.y)
    this.ctx.fillRect(
      this.x,
      this.y,
      this.width,
      this.height,
      

    );
  };
  