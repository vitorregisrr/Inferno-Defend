var gameState4 = {
    create: criarState4,
    update: atualizarState4,
    render: render,
};

var anim, plataformas, background, cursors, score;
score = 0;

function criarState4() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();

    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10, true);
    
    addControls();
    platformsCreate();
    platforms4Gen();
    personagemGen();
    bulletsGen();
    monstro1Gen();
    createAudios();
    setMage4();
    bossGen();
    bossAtack();
    portalGen(650,70);
    lavaCreate();

    sounds.lava.play();


}

function atualizarState4() {
    mageMove();
    bulletsCollide();
    mageDead();
    monstro1Moviment();

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    game.physics.arcade.collide(mage, plataformas);
    game.physics.arcade.collide(portal, plataformas);
    game.physics.arcade.overlap(portal, mage,/* wins*/null , null, this);


}

function render() {
}