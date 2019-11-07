'use strict'
function buildDom(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
  
    return div.children[0];
  }
  
  function main() {
    var splashScreen;
    var game;
    var gameOverScreen;
    var playerScore;
    
  
    function createSplashScreen() {
      splashScreen = buildDom(`
       <main class="startScreen">

          <img src="./img/spashScreenImage.png">

            <button id="btn-start">
            <img src="./img/new-startbutton.png">
            </button>
            <img id="Instructions" src="./img/Instructions2.0.png">
              <div id="InstructionArrows">
                <img id="left" src="./img/arrows2.png">
              </div>
       </main>
      `);
      // <img src="./img/instructions.png> use this for instructions 
  
      document.body.appendChild(splashScreen);

      document.body.classList.add('moneybackground')
  
      var startButton = splashScreen.querySelector('button');
      startButton.addEventListener('click', function() {
        startGame();
      });
    }
  
    function removeSplashScreen() {
      splashScreen.remove();
    }
  
    function createGameScreen() {
      var gameScreen = buildDom(`
        <main class="game">
        <div class="div-container">
        <div class="lives">
        <span class="label">Lives:</span>
        <span class="value"></span>
      </div>
      <div class="score">
        <span class="label">Score:</span>
        <span class="value"></span>
      </div>

    </header>
    <div class="canvas-container">
      <canvas></canvas>
      </div>
      </div>
        </main>
     `);
  
      document.body.appendChild(gameScreen);
  
      return gameScreen;
    }
    function removeGameScreen() {
      game.removeGameScreen();
    }

    function createGameOverScreen(score) {
      document.body.classList.remove('moneybackground');
      gameOverScreen = buildDom(`
      <main class="gameOverScreen">
          <div>
            <img src="./img/gameOver.png" id ="GOimage">  
          </div>
          <div class="score">
            <span class="label"> <img id="GOscore"src="./img/GOScore.png"></span>
            <span class="value game-over-score"></span>
          </div>
          <div>
            <button id="GOstartbtn">
              <img src="./img/playAgain.png" >
            </button>      
          </div>
          <div id="coinPile"> 
          <img src="./img/coinPile.png">
          </div>
          <div id="snake"> 
          <img src="./img/enemy.png">
        </div>
      </main>
      `)
      document.body.appendChild(gameOverScreen);
      document.body.classList.add('gameOverScreen');

      let span = document.body.querySelector('.value');
      span.innerText = game.score;
      console.log(span.innerText)

      var startButton = gameOverScreen.querySelector('button');
      startButton.addEventListener('click', function() {
        startGame();
      });
    }
  function removeGameOverScreen(){
    if(gameOverScreen) {
      gameOverScreen.remove();
    }
  }
  
    function startGame() {
      removeSplashScreen();
      removeGameOverScreen();
  
      game = new Game();
      game.gameScreen = createGameScreen();
  
      document.body.classList.add('moneybackground');
      game.start();

      game.passGameOverCallback(function() {
        gameOver(game.score);      
      })
    }


    function gameOver(score) {

      removeGameScreen();
      createGameOverScreen(score);
    }
  
    createSplashScreen();
  }
  
  window.onload = main;