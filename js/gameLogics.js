var gameState = {
    create: criarGame,
    update: atualizarGame,
};

var anim, plataformas, background, cursors, score;
score = 0;

/*controles WASD */
var upButton;
var downButton;
var leftButton;
var rightButton;


function criarGame() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();

    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10, true);

    /*controles WASD */
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);

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
            score++;
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