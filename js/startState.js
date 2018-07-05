var startState = { create:criarStart, preload: precarregarGame}

function precarregarGame() {
    game.load.spritesheet('mage', 'assets/dude.png', 32, 48);
    game.load.image('chao1', 'assets/chao1.png');
    game.load.image('chao2', 'assets/chao2.png');
    game.load.image('chao3', 'assets/chao3.png');
    game.load.spritesheet('background', 'assets/background.png', 800, 600, 8);
    game.load.image('bullet', 'assets/purple_ball.png');
    game.load.spritesheet('monstro1', 'assets/monstro1.png', 48, 45);
    game.load.audio('sfx', 'assets/audio/fx_mixdown.ogg');
    game.load.image('logo', 'assets/logo.png');
}


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
    dificultyIncrement(); //começa a aumentar a dificuldade quando é dado o play
    game.state.start('gameState');
}