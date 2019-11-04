'use strict'
function Game() {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
    this.highScore = 0;
    this.direction = 10;
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
      this.player = new Player(this.canvas, 3);		//	<-- UPDATE
    
    
 

    // Event listener callback function
    this.handleKeyDown = function(event) {
      
    
      if (event.keyCode === 37) {
        console.log('LEFT');
        this.player.setDirection('left');  
      } 
      if (event.keyCode === 39) {
        console.log('RIGHT');
        this.player.setDirection('right');
      }
    };
      
    
    
  document.body.addEventListener(
    'keydown', 
    this.handleKeyDown.bind(this)
);

    // Start the game loop
    this.startLoop();

    
    
  };
  
  Game.prototype.startLoop = function() {
    var loop = function() {
      console.log('game has started');

      //create new enemies 
      if (Math.random() > 0.98) {
        var randomY = this.canvas.height * Math.random();
        var newEnemy = new Enemy(this.canvas, randomY, 5);
        this.enemies.push(newEnemy);
      }
      
      // When I add this the player disapears 
      // this.checkCollisions();
      // this.player.handleScreenCollision();

      this.enemies = this.enemies.filter(function(enemy) {
        enemy.updatePosition();
        return enemy.isInsideScreen();
      });

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.player.draw();
  
      window.requestAnimationFrame(loop);
    }.bind(this);
  
    window.requestAnimationFrame(loop);
  };