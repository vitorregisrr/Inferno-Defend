var gameoverState = {
    create: criarGameOver
}

function criarGameOver()

{
    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10, true);

    var levelFailed = game.add.sprite(game.world.centerX, game.world.centerY, 'levelFailed');
    levelFailed.enableBody = true;
    levelFailed.anchor.x = 0.5;
    levelFailed.anchor.y = 0.5;

    var btnPlayAgain = game.add.sprite(460, 535, 'btnRestart')
    btnPlayAgain.enableBody = true;
    btnPlayAgain.anchor.x = 0.5;
    btnPlayAgain.anchor.y = 0.5;
    btnPlayAgain.inputEnabled = true;
    btnPlayAgain.events.onInputDown.add(replay, this);

    var btnBackMenu = game.add.sprite(340, 535, 'btnLeft')
    btnBackMenu.enableBody = true;
    btnBackMenu.anchor.x = 0.5;
    btnBackMenu.anchor.y = 0.5;

    btnPlayAgain.inputEnabled = true;
    btnPlayAgain.events.onInputDown.add(replay, this);
    
    var texto2 =  game.add.text(310, 250,"Monstros mortos: "+score, {
        font: "23px Palatino",
        fill: "#d4c69a"});

}

function replay() {
    game.state.start('gameState1');
}

function gameOver() {
    clearInterval(loopMonstro1);
    game.state.start('gameoverState');
    sounds.lava.mute = true;
    sounds.bossFlying.mute = true;
    sounds.lava.mute = true;

}