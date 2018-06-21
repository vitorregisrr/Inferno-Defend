var gameState = {preload:precarregarGame, create:criarGame, update:atualizarGame };

var mage,anim,plataformas,background;

function precarregarGame(){
        game.load.spritesheet('mage', 'assets/mage.png', 110, 140);
        game.load.image('chao1', 'assets/chao1.png');
        game.load.image('chao2','assets/chao2.png');
        game.load.image('chao3', 'assets/chao3.png');
        game.load.spritesheet('background', 'assets/background.png',800,600,8);
}

function criarGame(){
    game.physics.startSystem(Phaser.Physics.ARCADE);

    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10,true);

    platformsGen();
    personagemGen();
    
}

function atualizarGame(){

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    var colideplataforma = game.physics.arcade.collide(mage, plataformas);
}