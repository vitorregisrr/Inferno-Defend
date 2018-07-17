var gameState3 = {
    create: criarState3,
    update: atualizarState3,
};

var anim, plataformas, background, cursors, score;
score = 0;

function criarState3() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();

    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10, true);
    
    createAudios();
    addControls();
    platformsCreate();
    platforms3Gen();
    setDificulty3();
    personagemGen();
    bulletsGen();
    monstro1Gen();
    setMage3();
    lavaCreate();
    portalGen(650,70);

    sounds.lava.play();
    var lavaSoundLoop = game.time.events.loop(Phaser.Timer.SECOND * 2, function(){sounds.lava.play()}, this);

}

function atualizarState3() {
    mageMove();
    bulletsCollide();
    monstro1Moviment();

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    game.physics.arcade.collide(mage, plataformas);
    game.physics.arcade.collide(portal, plataformas);
    game.physics.arcade.overlap(portal, mage, setDificulty4, null, this);


}