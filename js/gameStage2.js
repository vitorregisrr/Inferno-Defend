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

    mageHpBar = game.add.sprite(20, 20, 'hpBar');


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
    gargola1.HpBar.y = gargola1.y - 50;
    gargola1.HpBarText.x = gargola1.HpBar.x + 30;
    gargola1.HpBarText.y = gargola1.HpBar.y + 20;

    gargola2.HpBar.x = gargola2.x - 75;
    gargola2.HpBar.y = gargola2.y - 50;
    gargola2.HpBarText.x = gargola2.HpBar.x + 30;
    gargola2.HpBarText.y = gargola2.HpBar.y + 20;

    gargola3.HpBar.x = gargola3.x - 75;
    gargola3.HpBar.y = gargola3.y - 50;
    gargola3.HpBarText.x = gargola3.HpBar.x + 30;
    gargola3.HpBarText.y = gargola3.HpBar.y + 20;

    gargola1.HpBarText.setText(gargola1.hp + " / 10");
    gargola2.HpBarText.setText(gargola2.hp + " / 10");
    gargola3.HpBarText.setText(gargola3.hp + " / 10");

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