var gameState = {
    preload: precarregarGame,
    create: criarGame,
    update: atualizarGame
};

var anim, plataformas, background, cursors;

function precarregarGame() {
    game.load.spritesheet('mage', 'assets/dude.png', 32, 48);
    game.load.image('chao1', 'assets/chao1.png');
    game.load.image('chao2', 'assets/chao2.png');
    game.load.image('chao3', 'assets/chao3.png');
    game.load.spritesheet('background', 'assets/background.png', 800, 600, 8);
    game.load.image('bullet', 'assets/purple_ball.png');
    game.load.spritesheet('monstro1', 'assets/monstro1.png', 48, 45);
    game.load.audio('sfx', 'assets/audio/fx_mixdown.ogg');
}

function criarGame() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();

    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10, true);

    platformsGen();
    personagemGen();
    bulletsGen();
    monstro1Gen();
    createAudios();

}


function atualizarGame() {
    mageMove();

    //faz todos os monstros1 seguirem o mago
    monstros1.forEachAlive(function (monstro1) {
        game.physics.arcade.moveToObject(monstro1, mage, monstro1Speed)
    });

    //morte do monstro1 ao encostar na bullet
    monstros1.forEachAlive(function (monstro1) {
        game.physics.arcade.overlap(bullets, monstro1, function () {
            monstro1.kill();
            fx.play('squit');
            bullet.kill();
        }, null, this);
    });

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    var colideplataforma = game.physics.arcade.collide(mage, plataformas);

    /*chama a funcao shot ao clicar */
    if (game.input.activePointer.isDown) {
        fire();
    }


    //colisao entre bullets e plataformas
    game.physics.arcade.overlap(bullets, plataformas, function () {
        bullet.kill()
    }, null, this);

    //mata o mago se encostar no monstro1
    game.physics.arcade.overlap(mage, monstros1, gameOver, null, this);

    //mata o mago se cair
    if (mage.body.blocked.down) {
        gameOver();
    }


}