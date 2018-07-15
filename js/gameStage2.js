var gameState2 = {
    create: criarState2,
    update: atualizarState2,
    render:render
};

var anim, plataformas, background, cursors, score;
score = 0;

function criarState2() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();

    background = game.add.sprite(0, 0, 'background');
    anim = background.animations.add('lava');
    anim.play(10, true);

    portalGen(700,200);
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
    gargolas2Gen();
    gargolaAttack();

    mageHpBar = game.add.sprite(20,20,'hpBar');
    gargola1HpBar = game.add.sprite(620, 30, 'hpBarGargola');
    gargola1HpBarText = game.add.text( 660, 55,"15 / 15", {
        font: "13px Arial",
        fill: "#ffff"});
        
    gargola2HpBar = game.add.sprite(620, 90, 'hpBarGargola');
    gargola2HpBarText = game.add.text(660, 115,"15/ 15", {
        font: "13px Arial",
        fill: "#ffff"});

    gargola3HpBar = game.add.sprite(620, 150, 'hpBarGargola');
    gargola3HpBarText = game.add.text(660, 175,"15 / 15", {
        font: "13px Arial",
        fill: "#ffff"});



    sounds.lava.play();
    var lavaSoundLoop = game.time.events.loop(Phaser.Timer.SECOND * 2, function(){sounds.lava.play()}, this);
    var bossFlyingSoundLoop1 = game.time.events.loop(Phaser.Timer.SECOND * 0.8, function(){sounds.bossFlying.play();}, this);
}

function atualizarState2() {
    mageMove();
    bulletsCollide();
    mageHpBarChange();
    monstro1Moviment();
    
    gargola1HpBarText.setText(gargolasHp.gargola1+" / 10");
    gargola2HpBarText.setText(gargolasHp.gargola2+" / 10");
    gargola3HpBarText.setText(gargolasHp.gargola3+" / 10");

    /* PERSONAGENS E PLATAFORMAS COLISAO*/
    game.physics.arcade.collide(mage, plataformas);
    game.physics.arcade.collide(portal, plataformas);
    game.physics.arcade.overlap(portal, mage, setDificulty3, null, this);

    if(gargolasMortas == 3){
        sounds.bossFlying.mute = true;
        comedownPlatforms2();
    }

}

function render(){
}