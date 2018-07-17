var startState = { create:criarStart}


function criarStart()

{
    background = game.add.sprite(0, 0, 'background2');
    anim = background.animations.add('lava');
    anim.play(10, true);

    
    var logo = game.add.sprite(game.world.centerX , game.world.centerY - 120 , 'logo');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;

    var btnPlay = game.add.sprite(game.world.centerX , game.world.centerY + 70 , 'btnPlay');
    btnPlay.enableBody = true;
    btnPlay.anchor.x = 0.5;
    btnPlay.anchor.y = 0.5;
    btnPlay.inputEnabled = true;
    btnPlay.events.onInputDown.add(start, this);

    var btnSettings = game.add.sprite(720, 70 , 'btnSettings');
    btnSettings.enableBody = true;
    btnSettings.anchor.x = 0.5;
    btnSettings.anchor.y = 0.5;
    btnSettings.inputEnabled = true;
    //btnSettings.events.onInputDown.add(start, this);

    var btnFacebook = game.add.sprite(45, 560 , 'btnFacebook');
    btnFacebook.enableBody = true;
    btnFacebook.anchor.x = 0.5;
    btnFacebook.anchor.y = 0.5;
    btnFacebook.inputEnabled = true;
    //btnFacebook.events.onInputDown.add(start, this);

    var btnMusic = game.add.sprite(45, 70 , 'btnMusic');
    btnMusic.enableBody = true;
    btnMusic.anchor.x = 0.5;
    btnMusic.anchor.y = 0.5;
    btnMusic.inputEnabled = true;
    //btnMusic.events.onInputDown.add(start, this);

    var btnSounds = game.add.sprite(120, 70 , 'btnSound');
    btnSounds.enableBody = true;
    btnSounds.anchor.x = 0.5;
    btnSounds.anchor.y = 0.5;
    btnSounds.inputEnabled = true;
    //btnFacebook.events.onInputDown.add(start, this);
    


}

function start(){
    game.state.start('gameState4');
}