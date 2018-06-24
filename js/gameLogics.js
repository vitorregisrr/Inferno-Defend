var gameState = {preload:precarregarGame, create:criarGame, update:atualizarGame };

var anim,plataformas,background,cursors;

function precarregarGame(){
        game.load.spritesheet('mage', 'assets/dude.png', 32, 48);
        game.load.image('chao1', 'assets/chao1.png');
        game.load.image('chao2','assets/chao2.png');
        game.load.image('chao3', 'assets/chao3.png');
        game.load.spritesheet('background', 'assets/background.png',800,600,8);
        game.load.image('bullet', 'assets/purple_ball.png');
        game.load.spritesheet('monstro1', 'assets/monstro1.png',48,45);
}

function criarGame(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();

    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10,true);

    platformsGen();
    personagemGen();
    bulletsGen();
    enemiesGen();
    
}

function atualizarGame(){
    
    mageMove();
    game.physics.arcade.moveToObject(monstro1, mage, 200);
    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    var colideplataforma = game.physics.arcade.collide(mage, plataformas);

    /*chama a funcao shot ao clicar */
    
    if (game.input.activePointer.isDown)
    {
        fire();
    }

    game.physics.arcade.overlap(bullets, plataformas, function(){bullet.kill()},null, this);
    game.physics.arcade.overlap(bullets, monstros1, function(){ monstro1.kill();},null, this);
    game.physics.arcade.overlap(mage, monstros1, function(){},null, this);
    
}