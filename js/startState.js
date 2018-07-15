var startState = { create:criarStart}


function criarStart()

{
    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10, true);

    var texto = game.add.text(350, 250, "JOGAR", {fill: 'white'});
    texto.inputEnabled = true;
    texto.events.onInputDown.add(start, this);
    
    game.add.sprite(game.world.centerX - 150, game.world.centerY - 200, 'logo');

}

function start(){
    game.state.start('gameState3');
    setDificulty1();
    mageHp = 5;
}