var startState = { create:criarStart}

function criarStart()

{
    
    
    var texto = game.add.text(350, 250, "JOGAR", {fill: 'white'});
    texto.inputEnabled = true;
    texto.events.onInputDown.add(vaiJogar, this);
    
}

function vaiJogar()
{
    game.state.start('gameState');
}