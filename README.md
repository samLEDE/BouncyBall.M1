# BouncyBall.M1


## Description

This game is very simple, the objective for the player is the keep the ball bouncing on the platforms for as long as possible without hitting the bottom of the screen. The player is able to jump through the bottom of the flatforms and bounces off the top. The jumping height Y is set to a fix heigt. platforms are created randomly with a max spacing to ensure the player can reach the next platform. the game is over when the ball hits the bottom of the screen


## MVP (DOM - CANVAS)
*CANVAS*, This is a game where the player can move and stack block.


## Backlog
- Set difficulty 
- View instructions 
- Highscore 
- Extra points
- 


## Data structure

### main.js
- createSplashScreen()
- createGameScreen()
- createInstructionScreen()
- createDifficultyScreen()
- createGameOverScreen()
- buildDom()


### game.js
- this.ball
- this.platforms
- this.gameOver
- this.startGame
- this.menu
- this.checkScore
- this.instructions
- this.difficulty
- this.highScore
- this.easy
- this.medium
- this.hard

### platforms.js
- this.x / this.y
- this.width / this.height
- this.speed
- this.color
- this.eliminatePlatform
- this.draw
- this.move

### ball.js
- this.x / this.y
- this.width / this.height
- this.direction
- this.ctx
- this.speed
- this.color
- this.checkBorder
- this.sound

### extraPoints.js
- this.createCoin
- this.x / this.y
- this.width / this.height

## States y States Transitions


## Task
- main - Build splashScreen
- main - Build GameScreen
- main - Build intstructoinScreen
- main - Build level of difficultyScreen
- main - build gameOverScreen
- Main - addEventListener;
- main - build build DOM

- ball - make the ball bounce x height
- ball - set direction - left/right
- ball - create sound on bounce 
- ball - check border 
- ball - set speed
- ball - set color

- platforms - set width of platform
- platforms - create platofrms 
// - platforms - set speed
- platforms - set location
- platforms - set color 

- game - start the game 
- game - 

- extraPoints

## Links


### Trello
https://trello.com/b/CMGPw8J9

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/chloeleteinturier/Tetris)
[Link Deploy](https://chloeleteinturier.github.io/Square-Tetris/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/12aWbkPZlli7qyOwh-r7aFmeflMeICDQl4ZWgLbv21e8/edit?usp=sharing)
