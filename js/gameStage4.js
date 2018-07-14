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

    bossHpBar = game.add.sprite(game.world.width - 230, 20, 'hpBarBoss');
    bossHpBarText = game.add.text(game.world.width - 190, 50,"50 / 50", {
        font: "17px Arial",
        fill: "#ffff"});

    mageHpBar = game.add.sprite(20,20,'hpBar');

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
    mageHpBarChange();
    monstro1Moviment();

    // atualiza o hpbar do boss
    bossHpBarText.setText(bossHp+" / 50");
    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    game.physics.arcade.collide(mage, plataformas);
    game.physics.arcade.collide(portal, plataformas);
    game.physics.arcade.overlap(portal, mage,/* wins*/null , null, this);


}

function render() {
}