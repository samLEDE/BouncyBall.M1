'use strict'
function Game() {
  this.canvas = null;
  this.ctx = null;
  this.enemies = [];
  this.bonusLives = [];
  this.bonusPoint = [];
  this.player = null;
  this.gameIsOver = false;
  this.gameScreen = null;
  this.highScore = 0;
  this.direction = 10;
  this.startLives = 3;
  // this.startScore = 0;
  this.score = 0;

  this.extraLifeimage= new Image();
  this.extraLifeimage.src="./img/extraLive.png" 

  this.enemyImage= new Image();
  this.enemyImage.src="./img/enemy.png"

  this.coinImage= new Image();
  this.coinImage.src="./img/goldcoin.png"
}

Game.prototype.start = function() {
  // Save reference to canvas and its container. Create ctx
  this.canvasContainer = document.querySelector('.canvas-container');
  this.canvas = this.gameScreen.querySelector('canvas');
  this.ctx = this.canvas.getContext('2d');

  // Save reference to the score and lives elements
  this.livesElement = this.gameScreen.querySelector('.lives .value');
  this.scoreElement = this.gameScreen.querySelector('.score .value');



  // Set the canvas dimensions to match the parent `.canvas-container`
  this.containerWidth = this.canvasContainer.offsetWidth;
  this.containerHeight = this.canvasContainer.offsetHeight;
  this.canvas.setAttribute('width', this.containerWidth);
  this.canvas.setAttribute('height', this.containerHeight);

  // Create new player
  this.player = new Player(this.canvas, this.startLives);		//	<-- UPDATE
  this.livesElement.innerHTML = this.startLives;
  // this.scoreElement.innerHTML = this.score;
  //console.log("player:", this.player)



  // Event listener callback function
  this.handleKeyDown = function(event) {
    
  
    if (event.keyCode === 37) {
      // console.log('LEFT');
      this.player.setDirection('left');  
    } 
    if (event.keyCode === 39) {
      // console.log('RIGHT');
      this.player.setDirection('right');
    }
  };
    
  
  
document.body.addEventListener(
  'keydown', 
  this.handleKeyDown.bind(this)
);

  // Start the game loop
  this.startLoop() 
};

Game.prototype.startLoop = function() {
  var loop = function() {
    // console.log('game has started');
    //create new enemies 
    if (Math.random() > 0.98) {
      var randomX = (this.canvas.width - 20)  * Math.random();
      var newEnemy = new Element(this.canvas, randomX, 5, this.enemyImage);
      this.enemies.push(newEnemy);
    }
    
    //create new lives
    if (Math.random() > 0.997) {
      var randomX = (this.canvas.width - 20)  * Math.random();
      var newLife = new ExtraLife(this.canvas, randomX, 5, this.extraLifeimage);
      this.bonusLives.push(newLife);
    }

                  //create new points --> done 
                  if (Math.random() > 0.95) {
                    var randomX = (this.canvas.width - 20)  * Math.random();
                    var newPoint = new ExtraPoint(this.canvas, randomX, 5, this.coinImage);
                    this.bonusPoint.push(newPoint);
                  }

    this.checkCollisions() 
    this.player.handleScreenCollision();

    this.enemies = this.enemies.filter(function(element) {
      element.updatePosition();
      return element.isInsideScreen();
    });

    this.bonusLives = this.bonusLives.filter(function(extraLife) {
      extraLife.updatePosition();
      return extraLife.isInsideScreen();
    });

    // --> done 
    this.bonusPoint = this.bonusPoint.filter(function(extraPoint) {
    extraPoint.updatePosition();
    return extraPoint.isInsideScreen();
     });

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw();
    
    //draw enemies
    this.enemies.forEach(function(item) {
      item.draw();
    });

    // //draw newLives
    this.bonusLives.forEach(function(item) {
      item.draw();
    });

      //draw newPonts --> done
      this.bonusPoint.forEach(function(item) {
      item.draw();
      });

    this.scoreElement.innerHTML = this.score;


    //terminate if game is over (player has died)
    if (!this.gameIsOver) {
      window.requestAnimationFrame(loop);
    }
  }.bind(this);
  loop()
};

Game.prototype.checkCollisions = function() {
  this.enemies.forEach(function(element) {
    if (this.player.didCollide(element)) {
      this.player.removeLife();
      this.livesElement.innerHTML = this.player.lives;
      element.x = 0 - element.size;
    
     
  
          if (this.player.lives === 0) {
            this.gameOver();
          }

    }
  
  }, this);



  this.bonusLives.forEach(function(extraLife) {
    if (this.player.didCollide(extraLife)) {
      this.player.addLife() 

      this.livesElement.innerHTML = this.player.lives
      extraLife.x = 0 - extraLife.size;
      }
      }, this);


                      //--> done 
      this.bonusPoint.forEach(function(extraPoint) {
        if (this.player.didCollide(extraPoint)) {
          //console.log(this)
        this.addPoint() 
                      
        this.scoreElement.innerHTML = this.player.score
        extraPoint.x = 0 - extraPoint.size;
        }
        }, this);

        


};

Game.prototype.addPoint = function() {
  this.score += 1;
  //console.log(this.score)
  return this.score;
};


Game.prototype.passGameOverCallback = function(callback) {
  this.onGameOverCallback = callback;
};

Game.prototype.gameOver = function() {
  // flag `gameIsOver = true` stops the loop
  this.gameIsOver = true;
  
  // Call the gameOver function from `main` to show the Game Over Screen
  this.onGameOverCallback();
};

Game.prototype.removeGameScreen = function() {
  this.gameScreen.remove();
};

Game.prototype.updateGameStats = function() {
  this.score += 1;
  this.livesElement.innerHTML = this.player.lives;
  this.scoreElement.innerHTML = this.score;
}
