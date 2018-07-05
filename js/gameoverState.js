var gameoverState = {
    create: criarGameOver
}

function criarGameOver()

{
    var textogameOver = game.add.text(350, 250, "JOGAR NOVAMENTE", {
        fill: 'white'
    });
    var texto2 = game.add.text(350, 350, "PLAYER 1 GANHOU", {
        fill: 'white'
    });
    textogameOver.inputEnabled = true;
    textogameOver.events.onInputDown.add(replay, this);

}

function replay() {
    gameOverStatus = false;
    game.state.start('startState');
}

var gameOverStatus;
function gameOver() {
    gameOverStatus = true;
    clearInterval(loopMonstro1);
    game.state.start('gameoverState');
}