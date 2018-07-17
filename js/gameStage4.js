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
    
    createAudios();
    addControls();
    platformsCreate();
    platforms4Gen();
    setDificulty4();
    personagemGen();
    bulletsGen();
    monstro1Gen();
    setMage4();
    bossGen();
    bossAtack();
    portalGen(650,70);
    lavaCreate();

    sounds.lava.play();
    sounds.bossFlying.play();
    sounds.bossScream.play();
    var lavaSoundLoop = game.time.events.loop(Phaser.Timer.SECOND * 2, function(){sounds.lava.play()}, this);
    var bossFlyingSoundLoop = game.time.events.loop(Phaser.Timer.SECOND * 0.8, function(){sounds.bossFlying.play();}, this);
    var bossScreamSoundLoop = game.time.events.loop(Phaser.Timer.SECOND * 10, function(){sounds.bossScream.play();}, this);

}

function atualizarState4() {
    mageMove();
    bulletsCollide();
    monstro1Moviment();

        //hpbars seguindo os monstros
        boss.HpBar.x = boss.x + 95;
        boss.HpBar.y = boss.y + +36;
        boss.HpBarbg.x = boss.x +95;
        boss.HpBarbg.y = boss.y -3;

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    game.physics.arcade.collide(mage, plataformas);
    game.physics.arcade.collide(portal, plataformas);
    game.physics.arcade.overlap(portal, mage,/* wins*/null , null, this);

}

function render() {
}