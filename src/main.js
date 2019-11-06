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

          <img src="./images/spashScreenImage.png">

            <button id="btn-start">
            <img src="./images/new-startbutton.png">
            </button>
            <img id="Instructions" src="./images/Instructions2.0.png">
              <div id="InstructionArrows">
                <img id="left" src="./images/arrows2.png">
              </div>
       </main>
      `);
      // <img src="./images/instructions.png> use this for instructions 
  
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