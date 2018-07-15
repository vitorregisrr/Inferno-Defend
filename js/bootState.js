var bootState = { create:criarBoot, preload: precarregarBoot}

function precarregarBoot() {
    //UI elements
    game.load.image('logo', 'assets/ui/logo.png');
    game.load.image('preloadBarBg', 'assets/ui/preloadBarBg.png');
    game.load.image('preloadBar', 'assets/ui/preloadBar.png');
    game.load.spritesheet('background2', 'assets/backgrounds/background2.png', 800, 600, 8);

}

function criarBoot(){
    game.state.start('preloadState');
}
