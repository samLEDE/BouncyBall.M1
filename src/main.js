'use strict'
function buildDom(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
  
    return div.children[0];
  }
  
  function main() {
    var splashScreen;
  
    function createSplashScreen() {
      splashScreen = buildDom(`
       <main class="startScreen">

          <img src="./titleSplashScreen.png">

            <button id="btn-start"><img src="./startGame-img.png"></button>
              <p>Instructions</p>
              <div class="arrow-btns">

                <img src"./arrow-left.png">
                <p>&</p>
                <img src"./arrow-right.png">

              </div>
       </main>
      `);
  
      document.body.appendChild(splashScreen);
  
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
        <div class="High-score">
        <span class="label">HighScore:</span>
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
  
    function startGame() {
      removeSplashScreen();
  
      var game = new Game();
      game.gameScreen = createGameScreen();
  
      game.start();
    }
  
    createSplashScreen();
  }
  
  window.onload = main;