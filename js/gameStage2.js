var gameState2 = {
    create: criarState2,
    update: atualizarState2,
    render: render
};

var anim, plataformas, background, cursors, score;
score = 0;

function criarState2() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();

    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10, true);

    createAudios();
    portalGen(700, 200);
    addControls();
    platformsCreate();
    setDificulty2();
    platforms2Gen();
    personagemGen();
    bulletsGen();
    monstro1Gen();
    setMage2();
    addControls();
    lavaCreate();
    gargolas2Gen();
    gargolaAttack();
    
    sounds.lava.play();
    var lavaSoundLoop = game.time.events.loop(Phaser.Timer.SECOND * 2, function () {
        sounds.lava.play()
    }, this);
    var bossFlyingSoundLoop1 = game.time.events.loop(Phaser.Timer.SECOND * 0.8, function () {
        sounds.bossFlying.play();
    }, this);
}

function atualizarState2() {
    mageMove();
    bulletsCollide();
    mageHpBarChange();
    monstro1Moviment();
    
    //hpbars seguindo os monstros
    gargola1.HpBar.x = gargola1.x - 75;
    gargola1.HpBar.y = gargola1.y + -36;
    gargola1.HpBarbg.x = gargola1.x - 75;
    gargola1.HpBarbg.y = gargola1.y - 50;
    
    gargola2.HpBar.x = gargola2.x - 75;
    gargola2.HpBar.y = gargola2.y + -36;
    gargola2.HpBarbg.x = gargola2.x - 75;
    gargola2.HpBarbg.y = gargola2.y - 50;

    gargola3.HpBar.x = gargola3.x - 75;
    gargola3.HpBar.y = gargola3.y + -36;
    gargola3.HpBarbg.x = gargola3.x - 75;
    gargola3.HpBarbg.y = gargola3.y - 50;
    gargola3.HpBar.cropEnabled = true;

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    game.physics.arcade.collide(mage, plataformas);
    game.physics.arcade.collide(portal, plataformas);
    game.physics.arcade.overlap(portal, mage, setDificulty3, null, this);

    if (gargolasMortas == 3) {
        sounds.bossFlying.mute = true;
        comedownPlatforms2();
    }

}

function render() {}