var gameState2 = {
    create: criarState2,
    update: atualizarState2,
};

var anim, plataformas, background, cursors, score;
score = 0;

function criarState2() {
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

    platforms2Gen();
    personagemGen();
    bulletsGen();
    monstro1Gen();
    createAudios();

}

function atualizarState2() {
    mageMove();
    bulletsCollide();
    dificultyIncrement();
    mageDead();
    monstro1Moviment();

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    game.physics.arcade.collide(mage, plataformas);
    game.physics.arcade.collide(portal1, plataformas);
    game.physics.arcade.collide(portal1, mage);

}