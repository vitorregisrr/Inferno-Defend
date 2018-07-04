var startState = { create:criarStart}

function criarStart()

{
    var texto = game.add.text(350, 250, "JOGAR", {fill: 'white'});
    texto.inputEnabled = true;
    texto.events.onInputDown.add(start, this);
    
}

function start(){
    monstro1Speed = 90; //seta a dificuldade inicial 
    game.state.start('gameState');
}