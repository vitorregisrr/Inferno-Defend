var preloadState = { create:criarPreload, preload: precarregarPreload}

function precarregarPreload() {

    background = game.add.sprite(0, 0, 'background2');
    anim = background.animations.add('lava');
    anim.play(10, true);


    var logo = game.add.sprite(game.world.centerX , game.world.centerY - 120 , 'logo');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;

    var preloadBarBg = game.add.sprite(game.world.centerX, game.world.centerY +60, 'preloadBarBg');
    preloadBarBg.enableBody = true;
    preloadBarBg.anchor.x = 0.5;
    preloadBarBg.anchor.y = 0.5;


    preloadBar = game.add.sprite(150, 345, 'preloadBar');
    this.load.setPreloadSprite(preloadBar);
    
    //caracteres
    game.load.spritesheet('finn', 'assets/caracteres/finn.png', 43, 64);
    game.load.spritesheet('marceline', 'assets/caracteres/marceline.png', 33, 69);
    game.load.spritesheet('mage', 'assets/caracteres/mage.png', 140, 103);


    //UI elements
    game.load.image('logo', 'assets/ui/logo.png');
    game.load.image('btnPlay', 'assets/ui/btnPlay.png');
    game.load.image('btnSettings', 'assets/ui/btnSettings.png');
    game.load.image('btnMenu', 'assets/ui/btnMenu.png');
    game.load.image('btnFacebook', 'assets/ui/btnFacebook.png');
    game.load.image('btnMusic', 'assets/ui/btnMusic.png');
    game.load.image('btnSound', 'assets/ui/btnSound.png');
    game.load.image('btnPlay', 'assets/ui/btnPlay.png');
    game.load.image('btnSettings', 'assets/ui/btnSettings.png');
    game.load.image('btnMenu', 'assets/ui/btnMenu.png');
    game.load.image('btnFacebook', 'assets/ui/btnFacebook.png');
    game.load.image('btnMusic', 'assets/ui/btnMusic.png');
    game.load.image('btnSound', 'assets/ui/btnSound.png');
    game.load.image('levelFailed', 'assets/ui/levelFailed.png');
    game.load.image('btnRestart', 'assets/ui/btnRestart.png');
    game.load.image('btnLeft', 'assets/ui/btnLeft.png');

    
    //portais
    game.load.spritesheet('portal', 'assets/portais/portal.png', 60, 109, 9);

    //plataformas
    game.load.image('chao1', 'assets/plataformas/chao1.png');
    game.load.image('chao2', 'assets/plataformas/chao2.png');
    game.load.image('chao3', 'assets/plataformas/chao3.png');
    game.load.spritesheet('lava', 'assets/plataformas/lava.png', 296, 79, 4);

    //sounds
    game.load.audio('knife', ['assets/audio/knife.ogg']);
    game.load.audio('lava', ['assets/audio/lava.ogg']);
    game.load.audio('bossFlying', ['assets/audio/bossFlying.ogg']);
    game.load.audio('bossAtack', ['assets/audio/bossAtack.ogg']);
    game.load.audio('bossScream', 'assets/audio/bossScream.ogg');
    game.load.audio('bossScreamPain', 'assets/audio/bossScreamPain.ogg');
    game.load.audio('atacked', ['assets/audio/atacked.ogg']);
    game.load.audio('sfx', 'assets/audio/fx_mixdown.ogg');
    game.load.audio('enterPortal', 'assets/audio/enterPortal.ogg');
    game.load.audio('magicAttack', 'assets/audio/magicAttack.ogg');
    game.load.audio('monsterChase', 'assets/audio/monsterChase.ogg');

    //bullets
    game.load.spritesheet('bossBullet', 'assets/bullets/bossBullet.png', 60, 53, 30);
    game.load.image('bullet', 'assets/bullets/knife.png');
    game.load.spritesheet('blueBullet', 'assets/bullets/blueBullet.png', 40, 40, 30);

    //hpBars
    game.load.spritesheet('hpBar', 'assets/hpBars/hpBar.png', 211, 70, 5);
    game.load.spritesheet('hpBarBoss', 'assets/hpBars/hpBarBoss.png', 211, 71, 2);
    game.load.spritesheet('hpBarGargola', 'assets/hpBars/hpBarGargola.png', 120, 40, 2);

    //inimigos
    game.load.spritesheet('boss', 'assets/monstros/boss.png', 360, 275, 6);
    game.load.spritesheet('monstro1', 'assets/monstros/monstro1.png', 48, 45);
    game.load.spritesheet('gargola', 'assets/monstros/gargola.png', 150, 126, 5);

    //backgrounds
    game.load.spritesheet('background', 'assets/backgrounds/background.png', 800, 600, 8);

}


function criarPreload(){
    game.state.start('startState');
}