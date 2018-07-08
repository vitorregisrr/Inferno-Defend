var gameoverState = {
    create: criarGameOver
}

function criarGameOver()

{
    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10, true);

    var textogameOver = game.add.text(350, 250, "JOGAR NOVAMENTE", {
        fill: 'white'
    });
    var texto2 = game.add.text(350, 350, "SCORE: "+score+ " MONSTROS MORTOS", {
        fill: 'white'
    });
    textogameOver.inputEnabled = true;
    textogameOver.events.onInputDown.add(replay, this);

}

function replay() {
    gameOverStatus = false;
    game.state.start('startState');
    score = 0;
}

function gameOver() {
    clearInterval(loopMonstro1);
    game.state.start('gameoverState');
}