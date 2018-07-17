var gameState1 = {
    create: criarState1,
    update: atualizarState1,
};

function criarState1() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();

    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(8, true);

    createAudios();
    portalGen(670, 250);
    platformsCreate();
    setDificulty1();
    addControls();
    platforms1Gen();
    personagemGen();
    bulletsGen();
    monstro1Gen();
    setMage1();
    lavaCreate();

    sounds.lava.play();
    var lavaSoundLoop = game.time.events.loop(Phaser.Timer.SECOND * 2, function () {
        sounds.lava.play()
    }, this);

}

function atualizarState1() {
    mageMove();
    bulletsCollide();
    monstro1Moviment();

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    game.physics.arcade.collide(mage, plataformas);
    game.physics.arcade.collide(portal, plataformas);
    game.physics.arcade.overlap(portal, mage, setDificulty2, null, this);

}