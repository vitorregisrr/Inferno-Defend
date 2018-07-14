var startState = { create:criarStart, preload: precarregarGame}

function precarregarGame() {
    game.load.spritesheet('mage', 'assets/finn.png', 33, 51);
    game.load.image('chao1', 'assets/chao1.png');
    game.load.image('chao2', 'assets/chao2.png');
    game.load.image('chao3', 'assets/chao3.png');
    game.load.spritesheet('background', 'assets/background.png', 800, 600, 8);
    game.load.image('bullet', 'assets/knife.png');
    game.load.spritesheet('monstro1', 'assets/monstro1.png', 48, 45);
    game.load.audio('sfx', 'assets/audio/fx_mixdown.ogg');
    game.load.image('logo', 'assets/logo.png');
    game.load.spritesheet('portal', 'assets/portal.png', 60, 109, 9);
    game.load.spritesheet('lava', 'assets/lava.png', 296, 79, 4);
    game.load.spritesheet('boss', 'assets/boss.png', 360, 275, 6);
    game.load.spritesheet('bossBullet', 'assets/bossBullet.png', 60, 53, 30);
    game.load.audio('lava', ['assets/audio/lava.ogg']);
    game.load.audio('bossFlying', ['assets/audio/bossFlying.ogg']);
    game.load.audio('bossAtack', ['assets/audio/bossAtack.ogg']);
    game.load.audio('atacked', ['assets/audio/atacked.ogg']);
    game.load.audio('knife', ['assets/audio/knife.ogg']);
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
    game.state.start('gameState1');
    setDificulty1();
}