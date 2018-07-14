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
    
    addControls();
    platformsCreate();
    platforms3Gen();
    personagemGen();
    bulletsGen();
    monstro1Gen();
    createAudios();
    setMage3();
    portalGen(650,70);

}

function atualizarState3() {
    mageMove();
    bulletsCollide();
    mageDead();
    monstro1Moviment();

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    game.physics.arcade.collide(mage, plataformas);
    game.physics.arcade.collide(portal, plataformas);
    game.physics.arcade.overlap(portal, mage, setDificulty4, null, this);


}