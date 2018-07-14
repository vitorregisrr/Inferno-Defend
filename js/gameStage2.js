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

    portalGen(700,100);
    addControls();
    platformsCreate();
    platforms2Gen();
    personagemGen();
    bulletsGen();
    monstro1Gen();
    createAudios();
    setMage2();
    addControls();
    lavaCreate();

    mageHpBar = game.add.sprite(20,20,'hpBar');
}

function atualizarState2() {
    mageMove();
    bulletsCollide();
    mageHpBarChange();
    monstro1Moviment();
    

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    game.physics.arcade.collide(mage, plataformas);
    game.physics.arcade.collide(portal, plataformas);
    game.physics.arcade.overlap(portal, mage, setDificulty3, null, this);

}